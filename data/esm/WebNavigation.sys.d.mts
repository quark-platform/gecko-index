export namespace WebNavigationManager {
    let listeners: Map<any, any>;
    function init(): void;
    function uninit(): void;
    function addListener(type: any, listener: any): void;
    function removeListener(type: any, listener: any): void;
    let QueryInterface: MozQueryInterface;
    function observe(subject: any, topic: string, data: string): void;
    /**
     * Recognize the type of urlbar user interaction (e.g. typing a new url,
     * clicking on an url generated from a searchengine or a keyword, or a
     * bookmark found by the urlbar autocompletion).
     *
     * @param {object} acData
     *   The data for the autocompleted item.
     * @param {object} [acData.result]
     *   The result information associated with the navigation action.
     * @param {UrlbarUtils.RESULT_TYPE} [acData.result.type]
     *   The result type associated with the navigation action.
     * @param {UrlbarUtils.RESULT_SOURCE} [acData.result.source]
     *   The result source associated with the navigation action.
     */
    function onURLBarUserStartNavigation(acData: {
        result?: {
            type?: UrlbarUtils.RESULT_TYPE;
            source?: UrlbarUtils.RESULT_SOURCE;
        };
    }): void;
    /**
     * Keep track of a recent user interaction and cache it in a
     * map associated to the current selected tab.
     *
     * @param {object} tabTransitionData
     * @param {boolean} [tabTransitionData.auto_bookmark]
     * @param {boolean} [tabTransitionData.from_address_bar]
     * @param {boolean} [tabTransitionData.generated]
     * @param {boolean} [tabTransitionData.keyword]
     * @param {boolean} [tabTransitionData.link]
     * @param {boolean} [tabTransitionData.typed]
     */
    function setRecentTabTransitionData(tabTransitionData: {
        auto_bookmark?: boolean;
        from_address_bar?: boolean;
        generated?: boolean;
        keyword?: boolean;
        link?: boolean;
        typed?: boolean;
    }): void;
    /**
     * Retrieve recent data related to a recent user interaction give a
     * given tab's linkedBrowser (only if is is more recent than the
     * `RECENT_DATA_THRESHOLD`).
     *
     * NOTE: this method is used to retrieve the tab transition data
     * collected when one of the `onCommitted`, `onHistoryStateUpdated`
     * or `onReferenceFragmentUpdated` events has been received.
     *
     * @param {XULBrowserElement} browser
     * @returns {object}
     */
    function getAndForgetRecentTabTransitionData(browser: XULBrowserElement): any;
    function onContentClick(target: any, data: any): void;
    function onCreatedNavigationTarget(bc: any, sourceBC: any, url: any): void;
    function onStateChange(bc: any, requestURI: any, status: any, stateFlags: any): void;
    function onDocumentChange(bc: any, frameTransitionData: any, location: any): void;
    function onHistoryChange(bc: any, frameTransitionData: any, location: any, isHistoryStateUpdated: any, isReferenceFragmentUpdated: any): void;
    function onDOMContentLoaded(bc: any, documentURI: any): void;
    function fire(type: any, browser: any, bc: any, extra: any): void;
}
export const WebNavigation: {};
