export namespace ContentAnalysis {
    let _SHOW_NOTIFICATIONS: boolean;
    let _SHOW_DIALOGS: boolean;
    let _SLOW_DLP_NOTIFICATION_BLOCKING_TIMEOUT_MS: number;
    let _SLOW_DLP_NOTIFICATION_NONBLOCKING_TIMEOUT_MS: number;
    let _RESULT_NOTIFICATION_TIMEOUT_MS: number;
    let _RESULT_NOTIFICATION_FAST_TIMEOUT_MS: number;
    let isInitialized: boolean;
    let dlpBusyViewsByTopBrowsingContext: MapByTopBrowsingContext;
    let requestTokenToRequestInfo: Map<any, any>;
    /**
     * Registers for various messages/events that will indicate the
     * need for communicating something to the user.
     */
    function initialize(): void;
    function uninitialize(): Promise<void>;
    /**
     * Register UI for file download CA events.
     */
    function initializeDownloadCA(): Promise<void>;
    function observe(aSubj: any, aTopic: any, aData: any): Promise<void>;
    function _showAnotherPendingDialog(aBrowsingContext: any): void;
    function _disconnectFromView(caView: any): void;
    function _showMessage(aMessage: any, aBrowsingContext: any, aTimeout?: number): any;
    function _shouldShowBlockingNotification(aOperation: any): boolean;
    function _getResourceNameFromNameOrL10NId(nameOrL10NId: any): any;
    function _getResourceNameOrL10NIdFromRequest(aRequest: any): {
        name: any;
        l10nId?: undefined;
    } | {
        l10nId: string;
        name?: undefined;
    };
    /**
     * Show a message to the user to indicate that a CA request is taking
     * a long time.
     */
    function _showSlowCAMessage(aOperation: any, aRequest: any, aResourceNameOrL10NId: any, aBrowsingContext: any): any;
    function _showSlowCABlockingMessage(aBrowsingContext: any, aRequestToken: any, aResourceNameOrL10NId: any): {
        requestToken: any;
        dialogBrowsingContext: any;
    };
    /**
     * Show a message to the user to indicate the result of a CA request.
     *
     * @returns {object} a notification object (if shown)
     */
    function _showCAResult(aResourceNameOrL10NId: any, aBrowsingContext: any, aRequestToken: any, aCAResult: any): any;
}
/**
 * A class that groups browsing contexts by their top-level one.
 * This is necessary because if there may be a subframe that
 * is showing a "DLP request busy" dialog when another subframe
 * (other the outer frame) wants to show one. This class makes it
 * convenient to find if another frame with the same top browsing
 * context is currently showing a dialog, and also to find if there
 * are any pending dialogs to show when one closes.
 */
declare class MapByTopBrowsingContext {
    /**
     * Gets any existing data associated with the browsing context
     *
     * @param {BrowsingContext} aBrowsingContext the browsing context to search for
     * @returns {object | undefined} the existing data, or `undefined` if there is none
     */
    getEntry(aBrowsingContext: BrowsingContext): object | undefined;
    /**
     * Returns whether the browsing context has any data associated with it
     *
     * @param {BrowsingContext} aBrowsingContext the browsing context to search for
     * @returns {boolean} Whether the browsing context has any associated data
     */
    hasEntry(aBrowsingContext: BrowsingContext): boolean;
    /**
     * Whether the tab containing the browsing context has a dialog
     * currently showing
     *
     * @param {BrowsingContext} aBrowsingContext the browsing context to search for
     * @returns {boolean} whether the tab has a dialog currently showing
     */
    hasEntryDisplayingNotification(aBrowsingContext: BrowsingContext): boolean;
    /**
     * Gets another browsing context in the same tab that has pending "DLP busy" dialog
     * info to show, if any.
     *
     * @param {BrowsingContext} aBrowsingContext the browsing context to search for
     * @returns {BrowsingContext} Another browsing context in the same tab that has pending "DLP busy" dialog info, or `undefined` if there aren't any.
     */
    getBrowsingContextWithPendingNotification(aBrowsingContext: BrowsingContext): BrowsingContext;
    /**
     * Deletes the entry for the browsing context, if any
     *
     * @param {BrowsingContext} aBrowsingContext the browsing context to delete
     * @returns {boolean} Whether an entry was deleted or not
     */
    deleteEntry(aBrowsingContext: BrowsingContext): boolean;
    /**
     * Sets the associated data for the browsing context
     *
     * @param {BrowsingContext} aBrowsingContext the browsing context to set the data for
     * @param {object} aValue the data to associated with the browsing context
     * @returns {MapByTopBrowsingContext} this
     */
    setEntry(aBrowsingContext: BrowsingContext, aValue: object): MapByTopBrowsingContext;
    #private;
}
export {};
