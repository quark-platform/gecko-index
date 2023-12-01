/**
 * This class manages all popup blocking operations on a <xul:browser>, including
 * notifying the UI about updates to the blocked popups, and allowing popups to
 * be unblocked.
 */
export class PopupBlocker {
    constructor(browser: any);
    _browser: any;
    _allBlockedPopupCounts: WeakMap<object, any>;
    _shouldShowNotification: boolean;
    /**
     * Returns whether or not there are new blocked popups for the associated
     * <xul:browser> that the user might need to be notified about.
     */
    get shouldShowNotification(): boolean;
    /**
     * Should be called by the UI when the user has been notified about blocked
     * popups for the associated <xul:browser>.
     */
    didShowNotification(): void;
    /**
     * Synchronously returns the most recent count of blocked popups for
     * the associated <xul:browser>.
     *
     * @return {Number}
     *   The total number of blocked popups for this <xul:browser>.
     */
    getBlockedPopupCount(): number;
    /**
     * Asynchronously retrieve information about the popups that have
     * been blocked for the associated <xul:browser>. This information
     * can be used to unblock those popups.
     *
     * @return {Promise}
     * @resolves {Array}
     *   When the blocked popup information has been gathered,
     *   resolves with an Array of Objects with the following properties:
     *
     *   browsingContext {BrowsingContext}
     *     The BrowsingContext that the popup was blocked for.
     *
     *   innerWindowId {Number}
     *     The inner window ID for the blocked popup. This is used to differentiate
     *     popups that were blocked from one page load to the next.
     *
     *   popupWindowURISpec {String}
     *     A string representing part or all of the URI that tried to be opened in a
     *     popup.
     */
    getBlockedPopups(): Promise<any>;
    /**
     * Unblocks a popup that had been blocked. The information passed should
     * come from the list of blocked popups returned via getBlockedPopups().
     *
     * Unblocking a popup causes that popup to open.
     *
     * @param browsingContext {BrowsingContext}
     *   The BrowsingContext that the popup was blocked for.
     *
     * @param innerWindowId {Number}
     *   The inner window ID for the blocked popup. This is used to differentiate popups
     *   that were blocked from one page load to the next.
     *
     * @param popupIndex {Number}
     *   The index of the entry in the Array returned by getBlockedPopups().
     */
    unblockPopup(browsingContext: BrowsingContext, innerWindowId: number, popupIndex: number): void;
    /**
     * Goes through the most recent list of blocked popups for the associated
     * <xul:browser> and unblocks all of them. Unblocking a popup causes the popup
     * to open.
     */
    unblockAllPopups(): Promise<void>;
    /**
     * Fires a DOMUpdateBlockedPopups chrome-only event so that the UI can
     * update itself to represent the current state of popup blocking for
     * the associated <xul:browser>.
     */
    updateBlockedPopupsUI(): void;
    /** Private methods **/
    /**
     * Updates the current popup count for a particular BrowsingContext based
     * on messages from the underlying process.
     *
     * This should only be called by a PopupBlockingParent instance.
     *
     * @param browsingContext {BrowsingContext}
     *   The BrowsingContext to update the internal blocked popup count for.
     *
     * @param blockedPopupData {Object}
     *   An Object representing information about how many popups are blocked
     *   for the BrowsingContext. The Object has the following properties:
     *
     *   count {Number}
     *     The total number of blocked popups for the BrowsingContext.
     *
     *   shouldNotify {Boolean}
     *     Whether or not the list of blocked popups has changed in such a way that
     *     the UI should be updated about it.
     */
    _updateBlockedPopupEntries(browsingContext: BrowsingContext, blockedPopupData: any): void;
}
/**
 * To keep things properly encapsulated, these should only be instantiated via
 * the PopupBlocker class for a particular <xul:browser>.
 *
 * Instantiated for a WindowGlobalParent for a BrowsingContext in one of two cases:
 *
 *   1. One or more popups have been blocked for the underlying frame represented
 *      by the WindowGlobalParent.
 *
 *   2. Something in the parent process is querying a frame for information about
 *      any popups that may have been blocked inside of it.
 */
export class PopupBlockingParent extends JSWindowActorParent {
    didDestroy(): void;
    receiveMessage(message: any): void;
    /**
     * Updates the PopupBlocker for the <xul:browser> associated with this
     * PopupBlockingParent with the most recent count of blocked popups.
     *
     * @param data {Object}
     *   An Object with the following properties:
     *
     *     count {Number}:
     *       The number of blocked popups for the underlying document.
     *
     *     shouldNotify {Boolean}:
     *       Whether or not the list of blocked popups has changed in such a way that
     *       the UI should be updated about it.
     */
    updatePopupCountForBrowser(data: any): void;
}
