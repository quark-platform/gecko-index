export namespace TabUnloader {
    /**
     * Initialize low-memory detection and tab auto-unloading.
     */
    function init(): void;
    function isDiscardable(tab: any): boolean;
    function unloadTabAsync(minInactiveDuration?: any): Promise<void>;
    /**
     * Get a list of tabs that can be discarded. This list includes all tabs in
     * all windows and is sorted based on a weighting described below.
     *
     * @param minInactiveDuration If this value is a number, tabs that were accessed
     *        in the last |minInactiveDuration| msec are not unloaded even if they
     *        are least-recently-used.
     *
     * @param tabMethods an helper object with methods called by this algorithm.
     *
     * The algorithm used is:
     *   1. Sort all of the tabs by a base weight. Tabs with a higher weight, such as
     *      those that are pinned or playing audio, will appear at the end. When two
     *      tabs have the same weight, sort by the order in which they were last.
     *      recently accessed Tabs that have a weight of NEVER_DISCARD are included in
     *       the list, but will not be discarded.
     *   2. Exclude the last X tabs, where X is the value returned by getMinTabCount().
     *      These tabs are considered to have been recently accessed and are not further
     *      reweighted. This also saves time when there are less than X tabs open.
     *   3. Calculate the amount of processes that are used only by each tab, as the
     *      resources used by these proceses can be freed up if the tab is closed. Sort
     *      the tabs by the number of unique processes used and add a reweighting factor
     *      based on this.
     *   4. Futher reweight based on an approximation of the amount of memory that each
     *      tab uses.
     *   5. Combine these weights to produce a final tab discard order, and discard the
     *      first tab. If this fails, then discard the next tab in the list until no more
     *      non-discardable tabs are found.
     *
     * The tabMethods are used so that unit tests can use false tab objects and
     * override their behaviour.
     */
    function getSortedTabs(minInactiveDuration?: any, tabMethods?: {
        isNonDiscardable(tab: any, weight: any): any;
        isPinned(tab: any, weight: any): any;
        isLoading(tab: any, weight: any): number;
        usingPictureInPicture(tab: any, weight: any): any;
        playingMedia(tab: any, weight: any): any;
        usingWebRTC(tab: any, weight: any): any;
        isPrivate(tab: any, weight: any): any;
        getMinTabCount(): number;
        getNow(): number;
        iterateTabs(): Generator<{
            tab: any;
            gBrowser: any;
        }, void, unknown>;
        iterateBrowsingContexts(bc: any): any;
        iterateProcesses(tab: any): Generator<any, void, unknown>;
        /**
         * Add the amount of memory used by each process to the process map.
         *
         * @param tabs array of tabs, used only by unit tests
         * @param map of processes returned by getAllProcesses.
         */
        calculateMemoryUsage(processMap: any): Promise<void>;
    }): Promise<any[]>;
    /**
     * Select and discard one tab.
     * @returns true if a tab was unloaded, otherwise false.
     */
    function unloadLeastRecentlyUsedTab(minInactiveDuration?: any): Promise<boolean>;
    let QueryInterface: any;
}
