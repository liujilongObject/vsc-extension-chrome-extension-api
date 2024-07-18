import * as vscode from 'vscode';
import { CHROME_API, TKeyName, chromeApiKeys, chromeApiEvents } from './chrome-api';

const LANGUAGES = ['javascript', 'vue', 'typescript', 'html'];

const getCompletionItem = (itemLabel: vscode.CompletionItemLabel, itemKind: vscode.CompletionItemKind) => new vscode.CompletionItem(itemLabel, itemKind);

export function activate(context: vscode.ExtensionContext) {

	// 输入指定字符完成后触发
	const chromeCompletionProvider = vscode.languages.registerCompletionItemProvider(
		LANGUAGES,
		{
			provideCompletionItems() {
				return [
					getCompletionItem({ label: 'chrome' }, vscode.CompletionItemKind.Variable)
				];
			}
		},
		...['.', ...'chrome'] // triggered whenever a '.' is being typed
	);

	const propCompletionProvider = vscode.languages.registerCompletionItemProvider(
		LANGUAGES,
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

				const linePrefix = document.lineAt(position).text.slice(0, position.character);
				if (!linePrefix.endsWith('chrome.')) {
					return undefined;
				}

				return chromeApiKeys.map(k => getCompletionItem({ label: k }, vscode.CompletionItemKind.Variable));
			},
			resolveCompletionItem(item: vscode.CompletionItem) {
				let label = '';
				if (typeof item.label === 'string') {
					label = item.label;
				} else {
					label = item.label.label;
				}
				const mdStr = `[Chrome Extensions API Reference](https://developer.chrome.com/docs/extensions/reference/api/${label})`;
				const documentation = new vscode.MarkdownString(mdStr);

				const detail = `chrome.${label}`;

				return {
					label: item.label,
					detail,
					documentation
				};
			},
		},
		'.' // triggered whenever a '.' is being typed
	);

	const apiCompletionProvider = vscode.languages.registerCompletionItemProvider(
		LANGUAGES,
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

				const linePrefix = document.lineAt(position).text.slice(0, position.character);
				if (chromeApiKeys.every(e => !linePrefix.endsWith(`${e}.`))) {
					return undefined;
				}

				const hitPropName: TKeyName = chromeApiKeys.find(e => linePrefix.endsWith(`${e}.`)) as TKeyName;

				return [
					...CHROME_API[hitPropName]['method'].map(api => getCompletionItem({ label: api }, vscode.CompletionItemKind.Method)),
					...CHROME_API[hitPropName]['event'].map(event => getCompletionItem({ label: event, description: 'Need to call the addListener method' }, vscode.CompletionItemKind.Variable))
				];
			}
		},
		'.' // triggered whenever a '.' is being typed
	);

	const addListenerCompletionProvider = vscode.languages.registerCompletionItemProvider(
		LANGUAGES,
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

				const linePrefix = document.lineAt(position).text.slice(0, position.character);
				if (chromeApiEvents.every(e => !linePrefix.endsWith(`${e}.`))) {
					return undefined;
				}

				return [
					getCompletionItem({ label: 'addListener', description: 'addListener(callback: function): void' }, vscode.CompletionItemKind.Method)
				];
			}
		},
		'.' // triggered whenever a '.' is being typed
	);

	// hover 触发
	const apiHoverProvider = vscode.languages.registerHoverProvider(
		LANGUAGES,
		{
			provideHover(document: vscode.TextDocument, position: vscode.Position) {
				// 获取当前行文本
				const lineAtText = document.lineAt(position).text;
	
				if (chromeApiKeys.every(e => !lineAtText.includes(`${e}`))) {
					return undefined;
				}

				const hoverPropName: TKeyName = chromeApiKeys.find(e => lineAtText.includes(`${e}`)) as TKeyName;

				// 截取 hover 时命中的属性字符串
				const startIndex = lineAtText.indexOf(hoverPropName);
				const endIndex = startIndex + hoverPropName.length;
				const range = new vscode.Range(new vscode.Position(position.line, startIndex), new vscode.Position(position.line, endIndex));
				// 获取指定范围内的文本字符串
				// const rangeText = document.getText(range)

				const mdStrs = [
					new vscode.MarkdownString(`chrome.${hoverPropName}`),
					new vscode.MarkdownString(`[Chrome Extensions API Reference](https://developer.chrome.com/docs/extensions/reference/api/${hoverPropName})`)
				];

				return new vscode.Hover(mdStrs, range);
			}
		}
	);

	context.subscriptions.push(
		chromeCompletionProvider,
		propCompletionProvider,
		apiCompletionProvider,
		addListenerCompletionProvider,
		apiHoverProvider
	);
}
