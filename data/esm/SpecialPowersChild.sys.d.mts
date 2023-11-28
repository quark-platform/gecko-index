export class SpecialPowersChild {
    _windowID: any;
    _encounteredCrashDumpFiles: any[];
    _unexpectedCrashDumpFiles: {};
    _crashDumpDir: any;
    _serviceWorkerRegistered: boolean;
    _serviceWorkerCleanUpRequests: Map<any, any>;
    _createFilesOnError: any;
    _createFilesOnSuccess: any;
    _messageListeners: any;
    _consoleListeners: any[];
    _spawnTaskImports: {};
    _mfl: any;
    _asyncObservers: WeakMap<object, any>;
    _xpcomabi: any;
    _os: any;
    _pu: {
        sanitize(src: any, flags: any): any;
        convertToPlainText(src: any, flags: any, wrapCol: any): any;
        parseFragment(fragment: any, flags: any, isXML: any, baseURL: any, element: any): any;
    };
    _nextExtensionID: number;
    _extensionListeners: Set<any>;
    observe(aSubject: any, aTopic: any, aData: any): void;
    actorCreated(): void;
    attachToWindow(): void;
    get window(): any;
    toJSON(): {};
    toString(): string;
    sanityCheck(): string;
    _addMessageListener(msgname: any, listener: any): void;
    _removeMessageListener(msgname: any, listener: any): void;
    receiveMessage(message: any): any;
    registerProcessCrashObservers(): void;
    unregisterProcessCrashObservers(): void;
    wrap(obj: any): any;
    unwrap(obj: any): any;
    isWrapper(val: any): any;
    unwrapIfWrapped(obj: any): any;
    wrapFor(obj: any, win: any): any;
    wrapCallback(func: any): any;
    wrapCallbackObject(obj: any): any;
    setWrapped(obj: any, prop: any, val: any): boolean;
    createBlankObject(): {};
    compare(a: any, b: any): boolean;
    get MockFilePicker(): any;
    get MockColorPicker(): any;
    get MockPermissionPrompt(): any;
    quit(): void;
    createFiles(fileRequests: any, onCreation: any, onError: any): any;
    removeFiles(): void;
    executeAfterFlushingMessageQueue(aCallback: any): any;
    registeredServiceWorkers(): Promise<any>;
    loadPrivilegedScript(aFunction: any): any;
    _readUrlAsString(aUrl: any): string;
    loadChromeScript(urlOrFunction: any, sandboxOptions: any): {
        addMessageListener: (name: any, listener: any) => void;
        promiseOneMessage: (name: any) => Promise<any>;
        removeMessageListener: (name: any, listener: any) => void;
        sendAsyncMessage: (name: any, message: any) => void;
        sendQuery: (name: any, message: any) => any;
        destroy: () => void;
        receiveMessage: (aMessage: any) => any;
    };
    get Services(): any;
    get Cc(): any;
    get Ci(): any;
    get Cu(): any;
    get Cr(): any;
    get ChromeUtils(): any;
    get isHeadless(): any;
    get addProfilerMarker(): any;
    get DOMWindowUtils(): any;
    getDOMWindowUtils(aWindow: any): any;
    toggleMuteState(aMuted: any, aWindow: any): Promise<any>;
    getNoXULDOMParser(): DOMParser;
    get InspectorUtils(): any;
    get PromiseDebugging(): any;
    waitForCrashes(aExpectingProcessCrash: any): Promise<void>;
    removeExpectedCrashDumpFiles(aExpectingProcessCrash: any): Promise<boolean>;
    findUnexpectedCrashDumpFiles(): Promise<any>;
    removePendingCrashDumpFiles(): any;
    _setTimeout(callback: any, delay?: number): void;
    promiseTimeout(delay: any): Promise<any>;
    _delayCallbackTwice(callback: any): () => void;
    pushPermissions(inPermissions: any, callback: any): Promise<void>;
    popPermissions(callback?: any): Promise<void>;
    flushPermissions(callback?: any): Promise<void>;
    registerObservers(topic: any): any;
    pushPrefEnv(inPrefs: any, callback?: any): Promise<void>;
    popPrefEnv(callback?: any): Promise<void>;
    flushPrefEnv(callback?: any): Promise<void>;
    getBaselinePrefs(callback?: any): Promise<void>;
    comparePrefsToBaseline(ignorePrefs: any, callback?: any): Promise<any>;
    _promiseEarlyRefresh(): Promise<any>;
    _addObserverProxy(notification: any): void;
    _removeObserverProxy(notification: any): void;
    addObserver(obs: any, notification: any, weak: any): void;
    removeObserver(obs: any, notification: any): void;
    notifyObservers(subject: any, topic: any, data: any): void;
    /**
     * An async observer is useful if you're listening for a
     * notification that normally is only used by C++ code or chrome
     * code (so it runs in the SystemGroup), but we need to know about
     * it for a test (which runs as web content). If we used
     * addObserver, we would assert when trying to enter web content
     * from a runnabled labeled by the SystemGroup. An async observer
     * avoids this problem.
     */
    addAsyncObserver(obs: any, notification: any, weak: any): void;
    removeAsyncObserver(obs: any, notification: any): void;
    can_QI(obj: any): boolean;
    do_QueryInterface(obj: any, iface: any): any;
    call_Instanceof(obj1: any, obj2: any): boolean;
    do_lookupGetter(obj: any, name: any): any;
    getBoolPref(...args: any[]): any;
    getIntPref(...args: any[]): any;
    getCharPref(...args: any[]): any;
    getComplexValue(prefName: any, iid: any): any;
    getStringPref(...args: any[]): any;
    getParentBoolPref(prefName: any, defaultValue: any): Promise<any>;
    getParentIntPref(prefName: any, defaultValue: any): Promise<any>;
    getParentCharPref(prefName: any, defaultValue: any): Promise<any>;
    getParentStringPref(prefName: any, defaultValue: any): Promise<any>;
    setBoolPref(prefName: any, value: any): any;
    setIntPref(prefName: any, value: any): any;
    setCharPref(prefName: any, value: any): any;
    setComplexValue(prefName: any, iid: any, value: any): any;
    setStringPref(prefName: any, value: any): any;
    clearUserPref(prefName: any): any;
    _getParentPref(prefName: any, prefType: any, { defaultValue, iid }: {
        defaultValue: any;
        iid: any;
    }): Promise<any>;
    _getPref(prefName: any, prefType: any, { defaultValue }: {
        defaultValue: any;
    }): any;
    _setPref(prefName: any, prefType: any, prefValue: any, iid: any): any;
    _getMUDV(window: any): any;
    _getTopChromeWindow(window: any): any;
    _getAutoCompletePopup(window: any): any;
    addAutoCompletePopupEventListener(window: any, eventname: any, listener: any): void;
    removeAutoCompletePopupEventListener(window: any, eventname: any, listener: any): void;
    getFormFillController(window: any): any;
    attachFormFillControllerTo(window: any): void;
    detachFormFillControllerFrom(window: any): void;
    isBackButtonEnabled(window: any): boolean;
    addChromeEventListener(type: any, listener: any, capture: any, allowUntrusted: any): void;
    removeChromeEventListener(type: any, listener: any, capture: any): void;
    generateMediaControlKeyTestEvent(event: any): Promise<void>;
    registerConsoleListener(callback: any): void;
    postConsoleSentinel(): void;
    resetConsole(): void;
    getFullZoom(window: any): any;
    getDeviceFullZoom(window: any): any;
    setFullZoom(window: any, zoom: any): void;
    getTextZoom(window: any): any;
    setTextZoom(window: any, zoom: any): void;
    emulateMedium(window: any, mediaType: any): void;
    stopEmulatingMedium(window: any): void;
    snapshotWindowWithOptions(content: any, rect: any, bgcolor: any, options: any): any;
    snapshotWindow(win: any, withCaret: any, rect: any, bgcolor: any): any;
    snapshotRect(win: any, rect: any, bgcolor: any): any;
    gc(): void;
    forceGC(): void;
    forceShrinkingGC(): void;
    forceCC(): void;
    finishCC(): void;
    ccSlice(budget: any): void;
    exactGC(callback: any): void;
    nondeterministicGetWeakMapKeys(m: any): any;
    getMemoryReports(): void;
    setGCZeal(zeal: any): void;
    isMainProcess(): boolean;
    get XPCOMABI(): any;
    executeSoon(aFun: any, aWin: any): void;
    get OS(): any;
    get useRemoteSubframes(): any;
    ISOLATION_STRATEGY: {
        IsolateNothing: number;
        IsolateEverything: number;
        IsolateHighValue: number;
    };
    effectiveIsolationStrategy(): any;
    addSystemEventListener(target: any, type: any, listener: any, useCapture: any): void;
    removeSystemEventListener(target: any, type: any, listener: any, useCapture: any): void;
    defaultPreventedInAnyGroup(event: any): any;
    getDOMRequestService(): any;
    addCategoryEntry(category: any, entry: any, value: any, persists: any, replace: any): void;
    deleteCategoryEntry(category: any, entry: any, persists: any): void;
    openDialog(win: any, args: any): any;
    spinEventLoop(win: any): void;
    getPrivilegedProps(obj: any, props: any): any;
    _browsingContextForTarget(target: any): any;
    getBrowsingContextID(target: any): any;
    getGroupTopLevelWindows(target: any): Generator<any, void, unknown>;
    /**
     * Runs a task in the context of the given frame, and returns a
     * promise which resolves to the return value of that task.
     *
     * The given frame may be in-process or out-of-process. Either way,
     * the task will run asynchronously, in a sandbox with access to the
     * frame's content window via its `content` global. Any arguments
     * passed will be copied via structured clone, as will its return
     * value.
     *
     * The sandbox also has access to an Assert object, as provided by
     * Assert.sys.mjs. Any assertion methods called before the task resolves
     * will be relayed back to the test environment of the caller.
     *
     * @param {BrowsingContext or FrameLoaderOwner or WindowProxy} target
     *        The target in which to run the task. This may be any element
     *        which implements the FrameLoaderOwner interface (including
     *        HTML <iframe> elements and XUL <browser> elements) or a
     *        WindowProxy (either in-process or remote).
     * @param {Array<any>} args
     *        An array of arguments to pass to the task. All arguments
     *        must be structured clone compatible, and will be cloned
     *        before being passed to the task.
     * @param {function} task
     *        The function to run in the context of the target. The
     *        function will be stringified and re-evaluated in the context
     *        of the target's content window. It may return any structured
     *        clone compatible value, or a Promise which resolves to the
     *        same, which will be returned to the caller.
     *
     * @returns {Promise<any>}
     *        A promise which resolves to the return value of the task, or
     *        which rejects if the task raises an exception. As this is
     *        being written, the rejection value will always be undefined
     *        in the cases where the task throws an error, though that may
     *        change in the future.
     */
    spawn(target: any, args: Array<any>, task: Function): Promise<any>;
    /**
     * Like `spawn`, but spawns a chrome task in the parent process,
     * instead. The task additionally has access to `windowGlobalParent`
     * and `browsingContext` globals corresponding to the window from
     * which the task was spawned.
     */
    spawnChrome(args: any, task: any): any;
    snapshotContext(target: any, rect: any, background: any, resetScrollPosition?: boolean): any;
    getSecurityState(target: any): any;
    _spawnTask(task: any, args: any, caller: any, taskId: any, imports: any): any;
    /**
     * Automatically imports the given symbol from the given sys.mjs for any
     * task spawned by this SpecialPowers instance.
     */
    addTaskImport(symbol: any, url: any): void;
    set SimpleTest(val: any);
    get SimpleTest(): any;
    _SimpleTest: any;
    set xpcshellScope(val: any);
    get xpcshellScope(): any;
    _xpcshellScope: any;
    evictAllContentViewers(): Promise<void>;
    /**
     * Sets this actor as the default assertion result handler for tasks
     * which originate in a window without a test harness.
     */
    setAsDefaultAssertHandler(): void;
    getFocusedElementForWindow(targetWindow: any, aDeep: any): any;
    get focusManager(): any;
    activeWindow(): any;
    focusedWindow(): any;
    clearFocus(aWindow: any): void;
    focus(aWindow: any): void;
    ensureFocus(aBrowsingContext: any, aBlurSubframe: any): any;
    getClipboardData(flavor: any, whichClipboard: any): any;
    clipboardCopyString(str: any): void;
    supportsSelectionClipboard(): any;
    swapFactoryRegistration(cid: any, contractID: any, newFactory: any): {
        originalCID: any;
    };
    _getElement(aWindow: any, id: any): any;
    dispatchEvent(aWindow: any, target: any, event: any): any;
    get isDebugBuild(): any;
    assertionCount(): any;
    /**
     * @param arg one of the following:
     *            - A URI string.
     *            - A document node.
     *            - A dictionary including a URL (`url`) and origin attributes (`attr`).
     */
    _getPrincipalFromArg(arg: any): any;
    addPermission(type: any, allow: any, arg: any, expireType: any, expireTime: any): Promise<void>;
    /**
     * @param type see nsIPermissionsManager::testPermissionFromPrincipal.
     * @param arg one of the following:
     *            - A URI string.
     *            - A document node.
     *            - A dictionary including a URL (`url`) and origin attributes (`attr`).
     */
    removePermission(type: any, arg: any): Promise<void>;
    hasPermission(type: any, arg: any): Promise<any>;
    testPermission(type: any, value: any, arg: any): Promise<any>;
    isContentWindowPrivate(win: any): any;
    notifyObserversInParentProcess(subject: any, topic: any, data: any): Promise<void>;
    removeAllServiceWorkerData(): any;
    removeServiceWorkerDataForExampleDomain(): any;
    cleanUpSTSData(origin: any, flags: any): any;
    requestDumpCoverageCounters(cb: any): Promise<void>;
    requestResetCoverageCounters(cb: any): Promise<void>;
    loadExtension(ext: any, handler: any): {
        readonly state: string;
        startup(): any;
        unload(): any;
        sendMessage(...args: any[]): void;
        grantActiveTab(tabId: any): void;
        terminateBackground(...args: any[]): any;
        wakeupBackground(): any;
    };
    invalidateExtensionStorageCache(): void;
    allowMedia(window: any, enable: any): void;
    createChromeCache(name: any, url: any): any;
    loadChannelAndReturnStatus(url: any, loadUsingSystemPrincipal: any): Promise<any>;
    get ParserUtils(): {
        sanitize(src: any, flags: any): any;
        convertToPlainText(src: any, flags: any, wrapCol: any): any;
        parseFragment(fragment: any, flags: any, isXML: any, baseURL: any, element: any): any;
    };
    createDOMWalker(node: any, showAnonymousContent: any): {
        readonly firstChild: any;
        readonly lastChild: any;
    };
    /**
     * Which commands are available can be determined by checking which commands
     * are registered. See \ref
     * nsIControllerCommandTable.registerCommand(in String, in nsIControllerCommand).
     */
    doCommand(window: any, cmd: any, param: any): any;
    isCommandEnabled(window: any, cmd: any): any;
    /**
     * See \ref nsIContentViewerEdit.setCommandNode(in Node).
     */
    setCommandNode(window: any, node: any): any;
    doUrlClassify(principal: any, callback: any): any;
    doUrlClassifyLocal(uri: any, tables: any, callback: any): any;
    contentTransformsReceived(win: any): any;
    _proxiedObservers: {
        "specialpowers-http-notify-request": (aMessage: any) => void;
        "specialpowers-service-worker-shutdown": (aMessage: any) => void;
        "specialpowers-csp-on-violate-policy": (aMessage: any) => void;
        "specialpowers-xfo-on-violate-policy": (aMessage: any) => void;
    };
    EARLY_BETA_OR_EARLIER: any;
}
