/**
 * The tab switcher is responsible for asynchronously switching
 * tabs in e10s. It waits until the new tab is ready (i.e., the
 * layer tree is available) before switching to it. Then it
 * unloads the layer tree for the old tab.
 *
 * The tab switcher is a state machine. For each tab, it
 * maintains state about whether the layer tree for the tab is
 * available, being loaded, being unloaded, or unavailable. It
 * also keeps track of the tab currently being displayed, the tab
 * it's trying to load, and the tab the user has asked to switch
 * to. The switcher object is created upon tab switch. It is
 * released when there are no pending tabs to load or unload.
 *
 * The following general principles have guided the design:
 *
 * 1. We only request one layer tree at a time. If the user
 * switches to a different tab while waiting, we don't request
 * the new layer tree until the old tab has loaded or timed out.
 *
 * 2. If loading the layers for a tab times out, we show the
 * spinner and possibly request the layer tree for another tab if
 * the user has requested one.
 *
 * 3. We discard layer trees on a delay. This way, if the user is
 * switching among the same tabs frequently, we don't continually
 * load the same tabs.
 *
 * It's important that we always show either the spinner or a tab
 * whose layers are available. Otherwise the compositor will draw
 * an entirely black frame, which is very jarring. To ensure this
 * never happens when switching away from a tab, we assume the
 * old tab might still be drawn until a MozAfterPaint event
 * occurs. Because layout and compositing happen asynchronously,
 * we don't have any other way of knowing when the switch
 * actually takes place. Therefore, we don't unload the old tab
 * until the next MozAfterPaint event.
 */
export class AsyncTabSwitcher {
    constructor(tabbrowser: any);
    TAB_SWITCH_TIMEOUT: number;
    UNLOAD_DELAY: number;
    requestedTab: any;
    loadingTab: any;
    lastVisibleTab: any;
    visibleTab: any;
    spinnerTab: any;
    blankTab: any;
    lastPrimaryTab: any;
    tabbrowser: any;
    window: any;
    loadTimer: any;
    unloadTimer: any;
    tabState: Map<any, any>;
    switchInProgress: boolean;
    switchPaintId: number;
    maybeVisibleTabs: Set<any>;
    warmingTabs: WeakSet<object>;
    STATE_UNLOADED: number;
    STATE_LOADING: number;
    STATE_LOADED: number;
    STATE_UNLOADING: number;
    _processing: boolean;
    _loadTimerClearedBy: string;
    _useDumpForLogging: boolean;
    _logInit: boolean;
    _logFlags: any[];
    destroy(): void;
    setTimer(callback: any, timeout: any): any;
    clearTimer(timer: any): void;
    getTabState(tab: any): any;
    setTabStateNoAction(tab: any, state: any): void;
    setTabState(tab: any, state: any): void;
    get windowHidden(): any;
    get tabLayerCache(): any;
    finish(): void;
    updateDisplay(): void;
    assert(cond: any): void;
    maybeClearLoadTimer(caller: any): void;
    loadRequestedTab(): void;
    maybeActivateDocShell(tab: any): void;
    preActions(): void;
    postActions(eventString: any): void;
    onUnloadTimeout(): void;
    deactivateCachedBackgroundTabs(): void;
    unloadNonRequiredTabs(): void;
    onLoadTimeout(): void;
    onLayersReady(browser: any): void;
    onPaint(event: any): void;
    onLayersCleared(browser: any): void;
    onRemotenessChange(tab: any): void;
    onTabRemoved(tab: any): void;
    onTabRemovedImpl(tab: any): void;
    onVisibilityChange(): void;
    onSwapDocShells(ourBrowser: any, otherBrowser: any): void;
    swapMap: WeakMap<object, any>;
    onEndSwapDocShells(ourBrowser: any, otherBrowser: any): void;
    /**
     * Check if the browser should be deactivated. If the browser is a print preivew or
     * PiP browser then we won't deactive it.
     * @param browser The browser to check if it should be deactivated
     * @returns false if a print preview or PiP browser else true
     */
    shouldDeactivateDocShell(browser: any): boolean;
    shouldActivateDocShell(browser: any): boolean;
    activateBrowserForPrintPreview(browser: any): void;
    canWarmTab(tab: any): boolean;
    shouldWarmTab(tab: any): boolean;
    unwarmTab(tab: any): void;
    warmupTab(tab: any): void;
    cleanUpTabAfterEviction(tab: any): void;
    evictOldestTabFromCache(): void;
    maybePromoteTabInLayerCache(tab: any): void;
    requestTab(tab: any): void;
    queueUnload(unloadTimeout: any): void;
    onQueueUnload(unloadTimeout: any): void;
    handleEvent(event: any, delayed?: boolean): void;
    startTabSwitch(): void;
    /**
     * Something has occurred that might mean that we've completed
     * the tab switch (layers are ready, paints are done, spinners
     * are hidden). This checks to make sure all conditions are
     * satisfied, and then records the tab switch as finished.
     */
    maybeFinishTabSwitch(): void;
    logging(): any;
    _shouldLog: any;
    tinfo(tab: any): string;
    log(s: any): void;
    addLogFlag(flag: any, ...subFlags: any[]): void;
    logState(suffix: any): void;
    _lastLogString: any;
    noteMakingTabVisibleWithoutLayers(): void;
    notePaint(event: any): void;
    noteTabRequested(tab: any, tabState: any): void;
    noteStartTabSwitch(): void;
    noteFinishTabSwitch(): void;
    noteSpinnerDisplayed(): void;
    noteSpinnerHidden(): void;
}
