import * as vscode from 'vscode';
import { CHROME_API, TKeyName, TApiType, chromeApiKeys, chromeApiEvents } from './chrome-api';

const LANGUAGES = ['javascript', 'vue', 'typescript', 'html'];

const CHROME = 'chrome';
const DOT = '.';

const getCompletionItem = (label: vscode.CompletionItemLabel, kind: vscode.CompletionItemKind) => new vscode.CompletionItem(label, kind);

// hover 具体api名称: 区分 method | event
const onHoverAtApiName = (lineText: string, position: vscode.Position, propName: TKeyName, apiType: TApiType): vscode.Hover | undefined => {
  const methodsInProp: string[] = CHROME_API[propName][apiType];
  const hoverApiName = methodsInProp.find(e => lineText.includes(e)) as string;
  const apiNameStartIndex = lineText.indexOf(hoverApiName);
  const apiNameEndIndex = apiNameStartIndex + hoverApiName.length;
  if (position.character >= apiNameStartIndex && position.character <= apiNameEndIndex) {
    const mdStrs = [
      new vscode.MarkdownString(`${CHROME}.${propName}.${hoverApiName}`),
      new vscode.MarkdownString(`[Chrome Extensions API Reference](https://developer.chrome.com/docs/extensions/reference/api/${propName}#${apiType}-${hoverApiName})`)
    ];
    return new vscode.Hover(mdStrs);
  }
  return undefined;
};	

export function activate(context: vscode.ExtensionContext) {

	// 输入指定字符完成后触发
	const chromeCompletionProvider = vscode.languages.registerCompletionItemProvider(
		LANGUAGES,
		{
			provideCompletionItems() {
				return [
					getCompletionItem({ label: CHROME }, vscode.CompletionItemKind.Variable)
				];
			}
		},
		...[DOT, ...CHROME] // triggered whenever a '.' is being typed
	);

	const propCompletionProvider = vscode.languages.registerCompletionItemProvider(
		LANGUAGES,
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

				const linePrefix = document.lineAt(position).text.slice(0, position.character);
				if (!linePrefix.endsWith(`${CHROME}.`)) {
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

				const detail = `${CHROME}.${label}`;

				return {
					label: item.label,
					detail,
					documentation
				};
			},
		},
		DOT // triggered whenever a '.' is being typed
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
		DOT // triggered whenever a '.' is being typed
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
		DOT // triggered whenever a '.' is being typed
	);

	// hover 属性名触发
	const propHoverProvider = vscode.languages.registerHoverProvider(
		LANGUAGES,
		{
			provideHover(document: vscode.TextDocument, position: vscode.Position) {
				// 获取当前行文本
				const lineAtText = document.lineAt(position).text;

				// hover api分类名称
				const hoverPropName: TKeyName = chromeApiKeys.find(e => lineAtText.includes(e)) as TKeyName;
				const propNameStartIndex = lineAtText.indexOf(hoverPropName);
				const propNameEndIndex = propNameStartIndex + hoverPropName.length;
				// 判断 hover 时，光标是否悬停在指定字符的范围内
				if (position.character >= propNameStartIndex && position.character <= propNameEndIndex) {
					const mdStrs = [
						new vscode.MarkdownString(`${CHROME}.${hoverPropName}`),
						new vscode.MarkdownString(`[Chrome Extensions API Reference](https://developer.chrome.com/docs/extensions/reference/api/${hoverPropName})`)
					];

					const range = new vscode.Range(new vscode.Position(position.line, propNameStartIndex), new vscode.Position(position.line, propNameEndIndex));

					return new vscode.Hover(mdStrs, range);
				}

				return undefined;
			}
		}
	);
	// hover api名触发
	const apiHoverProviders = ['method', 'event'].map(type => {
		return vscode.languages.registerHoverProvider(
			LANGUAGES,
			{
				provideHover(document: vscode.TextDocument, position: vscode.Position) {
					// 获取当前行文本
					const lineAtText = document.lineAt(position).text;
					const hoverPropName: TKeyName = chromeApiKeys.find(e => lineAtText.includes(e)) as TKeyName;
					return onHoverAtApiName(lineAtText, position, hoverPropName, type as TApiType);	
				}
			}
		);
	});

	context.subscriptions.push(
		chromeCompletionProvider,
		propCompletionProvider,
		apiCompletionProvider,
		addListenerCompletionProvider,
		propHoverProvider,
		...apiHoverProviders
	);
}
