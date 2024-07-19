export const CHROME_API = {
  "accessibilityFeatures": {
    "method": [],
    "event": []
  },
  "action": {
    "method": [
      "disable",
      "enable",
      "getBadgeBackgroundColor",
      "getBadgeText",
      "getBadgeTextColor",
      "getPopup",
      "getTitle",
      "getUserSettings",
      "isEnabled",
      "openPopup",
      "setBadgeBackgroundColor",
      "setBadgeText",
      "setBadgeTextColor",
      "setIcon",
      "setPopup",
      "setTitle"
    ],
    "event": [
      "onClicked"
    ]
  },
  "alarms": {
    "method": [
      "clear",
      "clearAll",
      "create",
      "get",
      "getAll"
    ],
    "event": [
      "onAlarm"
    ]
  },
  "audio": {
    "method": [
      "getDevices",
      "getMute",
      "setActiveDevices",
      "setMute",
      "setProperties"
    ],
    "event": [
      "onDeviceListChanged",
      "onLevelChanged",
      "onMuteChanged"
    ]
  },
  "bookmarks": {
    "method": [
      "create",
      "get",
      "getChildren",
      "getRecent",
      "getSubTree",
      "getTree",
      "move",
      "remove",
      "removeTree",
      "search",
      "update"
    ],
    "event": [
      "onChanged",
      "onChildrenReordered",
      "onCreated",
      "onImportBegan",
      "onImportEnded",
      "onMoved",
      "onRemoved"
    ]
  },
  "browsingData": {
    "method": [
      "remove",
      "removeAppcache",
      "removeCache",
      "removeCacheStorage",
      "removeCookies",
      "removeDownloads",
      "removeFileSystems",
      "removeFormData",
      "removeHistory",
      "removeIndexedDB",
      "removeLocalStorage",
      "removePasswords",
      "removePluginData",
      "removeServiceWorkers",
      "removeWebSQL",
      "settings"
    ],
    "event": []
  },
  "certificateProvider": {
    "method": [
      "reportSignature",
      "requestPin",
      "setCertificates",
      "stopPinRequest"
    ],
    "event": [
      "onCertificatesRequested",
      "onCertificatesUpdateRequested",
      "onSignatureRequested",
      "onSignDigestRequested"
    ]
  },
  "commands": {
    "method": [
      "getAll"
    ],
    "event": [
      "onCommand"
    ]
  },
  "contentSettings": {
    "method": [],
    "event": []
  },
  "contextMenus": {
    "method": [
      "create",
      "remove",
      "removeAll",
      "update"
    ],
    "event": [
      "onClicked"
    ]
  },
  "cookies": {
    "method": [
      "get",
      "getAll",
      "getAllCookieStores",
      "remove",
      "set"
    ],
    "event": [
      "onChanged"
    ]
  },
  "debugger": {
    "method": [
      "attach",
      "detach",
      "getTargets",
      "sendCommand"
    ],
    "event": [
      "onDetach",
      "onEvent"
    ]
  },
  "declarativeContent": {
    "method": [],
    "event": [
      "onPageChanged"
    ]
  },
  "declarativeNetRequest": {
    "method": [
      "getAvailableStaticRuleCount",
      "getDisabledRuleIds",
      "getDynamicRules",
      "getEnabledRulesets",
      "getMatchedRules",
      "getSessionRules",
      "isRegexSupported",
      "setExtensionActionOptions",
      "testMatchOutcome",
      "updateDynamicRules",
      "updateEnabledRulesets",
      "updateSessionRules",
      "updateStaticRules"
    ],
    "event": [
      "onRuleMatchedDebug"
    ]
  },
  "desktopCapture": {
    "method": [
      "cancelChooseDesktopMedia",
      "chooseDesktopMedia"
    ],
    "event": []
  },
  "devtools.inspectedWindow": {
    "method": [],
    "event": []
  },
  "devtools.network": {
    "method": [],
    "event": []
  },
  "devtools.panels": {
    "method": [],
    "event": []
  },
  "devtools.recorder": {
    "method": [],
    "event": []
  },
  "dns": {
    "method": [
      "resolve"
    ],
    "event": []
  },
  "documentScan": {
    "method": [
      "cancelScan",
      "closeScanner",
      "getOptionGroups",
      "getScannerList",
      "openScanner",
      "readScanData",
      "scan",
      "setOptions",
      "startScan"
    ],
    "event": []
  },
  "dom": {
    "method": [
      "openOrClosedShadowRoot"
    ],
    "event": []
  },
  "downloads": {
    "method": [
      "acceptDanger",
      "cancel",
      "download",
      "erase",
      "getFileIcon",
      "open",
      "pause",
      "removeFile",
      "resume",
      "search",
      "setShelfEnabled",
      "setUiOptions",
      "show",
      "showDefaultFolder"
    ],
    "event": [
      "onChanged",
      "onCreated",
      "onDeterminingFilename",
      "onErased"
    ]
  },
  "enterprise.deviceAttributes": {
    "method": [],
    "event": []
  },
  "enterprise.hardwarePlatform": {
    "method": [],
    "event": []
  },
  "enterprise.networkingAttributes": {
    "method": [],
    "event": []
  },
  "enterprise.platformKeys": {
    "method": [],
    "event": []
  },
  "events": {
    "method": [],
    "event": []
  },
  "extension": {
    "method": [
      "getBackgroundPage",
      "getExtensionTabs",
      "getURL",
      "getViews",
      "isAllowedFileSchemeAccess",
      "isAllowedIncognitoAccess",
      "sendRequest",
      "setUpdateUrlData"
    ],
    "event": [
      "onRequest",
      "onRequestExternal"
    ]
  },
  "extensionTypes": {
    "method": [],
    "event": []
  },
  "fileBrowserHandler": {
    "method": [],
    "event": [
      "onExecute"
    ]
  },
  "fileSystemProvider": {
    "method": [
      "get",
      "getAll",
      "mount",
      "notify",
      "unmount"
    ],
    "event": [
      "onAbortRequested",
      "onAddWatcherRequested",
      "onCloseFileRequested",
      "onConfigureRequested",
      "onCopyEntryRequested",
      "onCreateDirectoryRequested",
      "onCreateFileRequested",
      "onDeleteEntryRequested",
      "onExecuteActionRequested",
      "onGetActionsRequested",
      "onGetMetadataRequested",
      "onMountRequested",
      "onMoveEntryRequested",
      "onOpenFileRequested",
      "onReadDirectoryRequested",
      "onReadFileRequested",
      "onRemoveWatcherRequested",
      "onTruncateRequested",
      "onUnmountRequested",
      "onWriteFileRequested"
    ]
  },
  "fontSettings": {
    "method": [
      "clearDefaultFixedFontSize",
      "clearDefaultFontSize",
      "clearFont",
      "clearMinimumFontSize",
      "getDefaultFixedFontSize",
      "getDefaultFontSize",
      "getFont",
      "getFontList",
      "getMinimumFontSize",
      "setDefaultFixedFontSize",
      "setDefaultFontSize",
      "setFont",
      "setMinimumFontSize"
    ],
    "event": [
      "onDefaultFixedFontSizeChanged",
      "onDefaultFontSizeChanged",
      "onFontChanged",
      "onMinimumFontSizeChanged"
    ]
  },
  "gcm": {
    "method": [
      "register",
      "send",
      "unregister"
    ],
    "event": [
      "onMessage",
      "onMessagesDeleted",
      "onSendError"
    ]
  },
  "history": {
    "method": [
      "addUrl",
      "deleteAll",
      "deleteRange",
      "deleteUrl",
      "getVisits",
      "search"
    ],
    "event": [
      "onVisited",
      "onVisitRemoved"
    ]
  },
  "i18n": {
    "method": [
      "detectLanguage",
      "getAcceptLanguages",
      "getMessage",
      "getUILanguage"
    ],
    "event": []
  },
  "identity": {
    "method": [
      "clearAllCachedAuthTokens",
      "getAccounts",
      "getAuthToken",
      "getProfileUserInfo",
      "getRedirectURL",
      "launchWebAuthFlow",
      "removeCachedAuthToken"
    ],
    "event": [
      "onSignInChanged"
    ]
  },
  "idle": {
    "method": [
      "getAutoLockDelay",
      "queryState",
      "setDetectionInterval"
    ],
    "event": [
      "onStateChanged"
    ]
  },
  "input.ime": {
    "method": [],
    "event": []
  },
  "instanceID": {
    "method": [
      "deleteID",
      "deleteToken",
      "getCreationTime",
      "getID",
      "getToken"
    ],
    "event": [
      "onTokenRefresh"
    ]
  },
  "loginState": {
    "method": [
      "getProfileType",
      "getSessionState"
    ],
    "event": [
      "onSessionStateChanged"
    ]
  },
  "management": {
    "method": [
      "createAppShortcut",
      "generateAppForLink",
      "get",
      "getAll",
      "getPermissionWarningsById",
      "getPermissionWarningsByManifest",
      "getSelf",
      "installReplacementWebApp",
      "launchApp",
      "setEnabled",
      "setLaunchType",
      "uninstall",
      "uninstallSelf"
    ],
    "event": [
      "onDisabled",
      "onEnabled",
      "onInstalled",
      "onUninstalled"
    ]
  },
  "notifications": {
    "method": [
      "clear",
      "create",
      "getAll",
      "getPermissionLevel",
      "update"
    ],
    "event": [
      "onButtonClicked",
      "onClicked",
      "onClosed",
      "onPermissionLevelChanged",
      "onShowSettings"
    ]
  },
  "offscreen": {
    "method": [
      "closeDocument",
      "createDocument"
    ],
    "event": []
  },
  "omnibox": {
    "method": [
      "setDefaultSuggestion"
    ],
    "event": [
      "onDeleteSuggestion",
      "onInputCancelled",
      "onInputChanged",
      "onInputEntered",
      "onInputStarted"
    ]
  },
  "pageCapture": {
    "method": [
      "saveAsMHTML"
    ],
    "event": []
  },
  "permissions": {
    "method": [
      "contains",
      "getAll",
      "remove",
      "request"
    ],
    "event": [
      "onAdded",
      "onRemoved"
    ]
  },
  "platformKeys": {
    "method": [
      "getKeyPair",
      "getKeyPairBySpki",
      "selectClientCertificates",
      "subtleCrypto",
      "verifyTLSServerCertificate"
    ],
    "event": []
  },
  "power": {
    "method": [
      "releaseKeepAwake",
      "reportActivity",
      "requestKeepAwake"
    ],
    "event": []
  },
  "printerProvider": {
    "method": [],
    "event": [
      "onGetCapabilityRequested",
      "onGetPrintersRequested",
      "onGetUsbPrinterInfoRequested",
      "onPrintRequested"
    ]
  },
  "printing": {
    "method": [
      "cancelJob",
      "getPrinterInfo",
      "getPrinters",
      "submitJob"
    ],
    "event": [
      "onJobStatusChanged"
    ]
  },
  "printingMetrics": {
    "method": [
      "getPrintJobs"
    ],
    "event": [
      "onPrintJobFinished"
    ]
  },
  "privacy": {
    "method": [],
    "event": []
  },
  "processes": {
    "method": [
      "getProcessIdForTab",
      "getProcessInfo",
      "terminate"
    ],
    "event": [
      "onCreated",
      "onExited",
      "onUnresponsive",
      "onUpdated",
      "onUpdatedWithMemory"
    ]
  },
  "proxy": {
    "method": [],
    "event": [
      "onProxyError"
    ]
  },
  "readingList": {
    "method": [
      "addEntry",
      "query",
      "removeEntry",
      "updateEntry"
    ],
    "event": [
      "onEntryAdded",
      "onEntryRemoved",
      "onEntryUpdated"
    ]
  },
  "runtime": {
    "method": [
      "connect",
      "connectNative",
      "getBackgroundPage",
      "getContexts",
      "getManifest",
      "getPackageDirectoryEntry",
      "getPlatformInfo",
      "getURL",
      "openOptionsPage",
      "reload",
      "requestUpdateCheck",
      "restart",
      "restartAfterDelay",
      "sendMessage",
      "sendNativeMessage",
      "setUninstallURL"
    ],
    "event": [
      "onBrowserUpdateAvailable",
      "onConnect",
      "onConnectExternal",
      "onConnectNative",
      "onInstalled",
      "onMessage",
      "onMessageExternal",
      "onRestartRequired",
      "onStartup",
      "onSuspend",
      "onSuspendCanceled",
      "onUpdateAvailable",
      "onUserScriptConnect",
      "onUserScriptMessage"
    ]
  },
  "scripting": {
    "method": [
      "executeScript",
      "getRegisteredContentScripts",
      "insertCSS",
      "registerContentScripts",
      "removeCSS",
      "unregisterContentScripts",
      "updateContentScripts"
    ],
    "event": []
  },
  "search": {
    "method": [
      "query"
    ],
    "event": []
  },
  "sessions": {
    "method": [
      "getDevices",
      "getRecentlyClosed",
      "restore"
    ],
    "event": [
      "onChanged"
    ]
  },
  "sidePanel": {
    "method": [
      "getOptions",
      "getPanelBehavior",
      "open",
      "setOptions",
      "setPanelBehavior"
    ],
    "event": []
  },
  "storage": {
    "method": [],
    "event": [
      "onChanged"
    ]
  },
  "system.cpu": {
    "method": [],
    "event": []
  },
  "system.display": {
    "method": [],
    "event": []
  },
  "system.memory": {
    "method": [],
    "event": []
  },
  "system.storage": {
    "method": [],
    "event": []
  },
  "systemLog": {
    "method": [
      "add"
    ],
    "event": []
  },
  "tabCapture": {
    "method": [
      "capture",
      "getCapturedTabs",
      "getMediaStreamId"
    ],
    "event": [
      "onStatusChanged"
    ]
  },
  "tabGroups": {
    "method": [
      "get",
      "move",
      "query",
      "update"
    ],
    "event": [
      "onCreated",
      "onMoved",
      "onRemoved",
      "onUpdated"
    ]
  },
  "tabs": {
    "method": [
      "captureVisibleTab",
      "connect",
      "create",
      "detectLanguage",
      "discard",
      "duplicate",
      "executeScript",
      "get",
      "getAllInWindow",
      "getCurrent",
      "getSelected",
      "getZoom",
      "getZoomSettings",
      "goBack",
      "goForward",
      "group",
      "highlight",
      "insertCSS",
      "move",
      "query",
      "reload",
      "remove",
      "removeCSS",
      "sendMessage",
      "sendRequest",
      "setZoom",
      "setZoomSettings",
      "ungroup",
      "update"
    ],
    "event": [
      "onActivated",
      "onActiveChanged",
      "onAttached",
      "onCreated",
      "onDetached",
      "onHighlightChanged",
      "onHighlighted",
      "onMoved",
      "onRemoved",
      "onReplaced",
      "onSelectionChanged",
      "onUpdated",
      "onZoomChange"
    ]
  },
  "topSites": {
    "method": [
      "get"
    ],
    "event": []
  },
  "tts": {
    "method": [
      "getVoices",
      "isSpeaking",
      "pause",
      "resume",
      "speak",
      "stop"
    ],
    "event": [
      "onVoicesChanged"
    ]
  },
  "ttsEngine": {
    "method": [
      "updateVoices"
    ],
    "event": [
      "onPause",
      "onResume",
      "onSpeak",
      "onSpeakWithAudioStream",
      "onStop"
    ]
  },
  "types": {
    "method": [],
    "event": []
  },
  "userScripts": {
    "method": [
      "configureWorld",
      "getScripts",
      "register",
      "unregister",
      "update"
    ],
    "event": []
  },
  "vpnProvider": {
    "method": [
      "createConfig",
      "destroyConfig",
      "notifyConnectionStateChanged",
      "sendPacket",
      "setParameters"
    ],
    "event": [
      "onConfigCreated",
      "onConfigRemoved",
      "onPacketReceived",
      "onPlatformMessage",
      "onUIEvent"
    ]
  },
  "wallpaper": {
    "method": [
      "setWallpaper"
    ],
    "event": []
  },
  "webAuthenticationProxy": {
    "method": [
      "attach",
      "completeCreateRequest",
      "completeGetRequest",
      "completeIsUvpaaRequest",
      "detach"
    ],
    "event": [
      "onCreateRequest",
      "onGetRequest",
      "onIsUvpaaRequest",
      "onRemoteSessionStateChange",
      "onRequestCanceled"
    ]
  },
  "webNavigation": {
    "method": [
      "getAllFrames",
      "getFrame"
    ],
    "event": [
      "onBeforeNavigate",
      "onCommitted",
      "onCompleted",
      "onCreatedNavigationTarget",
      "onDOMContentLoaded",
      "onErrorOccurred",
      "onHistoryStateUpdated",
      "onReferenceFragmentUpdated",
      "onTabReplaced"
    ]
  },
  "webRequest": {
    "method": [
      "handlerBehaviorChanged"
    ],
    "event": [
      "onActionIgnored",
      "onAuthRequired",
      "onBeforeRedirect",
      "onBeforeRequest",
      "onBeforeSendHeaders",
      "onCompleted",
      "onErrorOccurred",
      "onHeadersReceived",
      "onResponseStarted",
      "onSendHeaders"
    ]
  },
  "windows": {
    "method": [
      "create",
      "get",
      "getAll",
      "getCurrent",
      "getLastFocused",
      "remove",
      "update"
    ],
    "event": [
      "onBoundsChanged",
      "onCreated",
      "onFocusChanged",
      "onRemoved"
    ]
  }
};

export type TKeyName = keyof typeof CHROME_API;

export type TApiType = 'method' | 'event';

export const chromeApiKeys = Object.keys(CHROME_API);

export const chromeApiEvents = chromeApiKeys.map(k => CHROME_API[k as TKeyName]['event']).flat();

// export const chromeApiMethods = chromeApiKeys.map(k => CHROME_API[k as TKeyName]['method']).flat();
