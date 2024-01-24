export const Interactions: _Interactions;
/**
 * DocumentInfo is used to pass document information from the child process
 * to _Interactions.
 */
export type DocumentInfo = {
    /**
     *   Set to true if the document is active, i.e. visible.
     */
    isActive: boolean;
    /**
     *   The url of the page that was interacted with.
     */
    url: string;
};
/**
 * InteractionInfo is used to store information associated with interactions.
 */
export type InteractionInfo = {
    /**
     *   Time in milliseconds that the page has been actively viewed for.
     */
    totalViewTime: number;
    /**
     *   The url of the page that was interacted with.
     */
    url: string;
    /**
     *   The type of the document.
     */
    documentType: Interactions.DOCUMENT_TYPE;
    /**
     *   Time in milliseconds that the user typed on the page
     */
    typingTime: number;
    /**
     *   The number of keypresses made on the page
     */
    keypresses: number;
    /**
     *   Time in milliseconds that the user spent scrolling the page
     */
    scrollingTime: number;
    /**
     *   The distance, in pixels, that the user scrolled the page
     */
    scrollingDistance: number;
    /**
     *   Creation time as the number of milliseconds since the epoch.
     */
    created_at: number;
    /**
     *   Last updated time as the number of milliseconds since the epoch.
     */
    updated_at: number;
    /**
     *   The referrer to the url of the page that was interacted with (may be empty)
     */
    referrer: string;
};
/**
 * @typedef {object} DocumentInfo
 *   DocumentInfo is used to pass document information from the child process
 *   to _Interactions.
 * @property {boolean} isActive
 *   Set to true if the document is active, i.e. visible.
 * @property {string} url
 *   The url of the page that was interacted with.
 */
/**
 * @typedef {object} InteractionInfo
 *   InteractionInfo is used to store information associated with interactions.
 * @property {number} totalViewTime
 *   Time in milliseconds that the page has been actively viewed for.
 * @property {string} url
 *   The url of the page that was interacted with.
 * @property {Interactions.DOCUMENT_TYPE} documentType
 *   The type of the document.
 * @property {number} typingTime
 *   Time in milliseconds that the user typed on the page
 * @property {number} keypresses
 *   The number of keypresses made on the page
 * @property {number} scrollingTime
 *   Time in milliseconds that the user spent scrolling the page
 * @property {number} scrollingDistance
 *   The distance, in pixels, that the user scrolled the page
 * @property {number} created_at
 *   Creation time as the number of milliseconds since the epoch.
 * @property {number} updated_at
 *   Last updated time as the number of milliseconds since the epoch.
 * @property {string} referrer
 *   The referrer to the url of the page that was interacted with (may be empty)
 *
 */
/**
 * The Interactions object sets up listeners and other approriate tools for
 * obtaining interaction information and passing it to the InteractionsManager.
 */
declare class _Interactions {
    /**
     * Stores the promise created in updateInteraction_async so that we can await its fulfillment
     * when sychronization is needed.
     */
    static interactionUpdatePromise: Promise<void>;
    /**
     * Updates the current interaction on fulfillment of the asynchronous collection of scrolling interactions.
     *
     * @param {Browser} browser
     *   The browser object that has triggered the update, if known.
     * @param {DOMWindow} activeWindow
     *   The active window.
     * @param {boolean} userIsIdle
     *   Whether the user is idle.
     * @param {WeakMap<Browser, InteractionInfo>} interactions
     *   A map of interactions for each browser instance
     * @param {number} pageViewStartTime
     *   The time the page was loaded.
     * @param {InteractionsStore} store
     *   The interactions store.
     */
    static "__#563843@#updateInteraction_async"(browser: Browser, activeWindow: DOMWindow, userIsIdle: boolean, interactions: WeakMap<Browser, InteractionInfo>, pageViewStartTime: number, store: InteractionsStore): Promise<void>;
    DOCUMENT_TYPE: {
        GENERIC: number;
        MEDIA: number;
    };
    /**
     * This stores the page view start time of the current page view.
     * For any single page view, this may be moved multiple times as the
     * associated interaction is updated for the current total page view time.
     *
     * @type {number}
     */
    _pageViewStartTime: number;
    /**
     * Initializes, sets up actors and observers.
     */
    init(): void;
    /**
     * Uninitializes, removes any observers that need cleaning up manually.
     */
    uninit(): void;
    /**
     * Resets any stored user or interaction state.
     * Used by tests.
     */
    reset(): Promise<void>;
    /**
     * Retrieve the underlying InteractionsStore object. This exists for testing
     * purposes and should not be abused by production code (for example it'd be
     * a bad idea to force flushes).
     *
     * @returns {InteractionsStore}
     */
    get store(): InteractionsStore;
    /**
     * Registers the start of a new interaction.
     *
     * @param {Browser} browser
     *   The browser object associated with the interaction.
     * @param {DocumentInfo} docInfo
     *   The document information of the page associated with the interaction.
     */
    registerNewInteraction(browser: Browser, docInfo: DocumentInfo): void;
    /**
     * Registers the end of an interaction, e.g. if the user navigates away
     * from the page. This will store the final interaction details and clear
     * the current interaction.
     *
     * @param {Browser} browser
     *   The browser object associated with the interaction.
     */
    registerEndOfInteraction(browser: Browser): void;
    /**
     * Returns the interactions update promise to be used when sychronization is needed from tests.
     *
     * @returns {Promise<void>}
     */
    get interactionUpdatePromise(): Promise<void>;
    /**
     * Handles various events and forwards them to appropriate functions.
     *
     * @param {DOMEvent} event
     *   The event that will be handled
     */
    handleEvent(event: DOMEvent): void;
    /**
     * Handles notifications from the observer service.
     *
     * @param {nsISupports} subject
     *   The subject of the notification.
     * @param {string} topic
     *   The topic of the notification.
     * @param {string} data
     *   The data attached to the notification.
     */
    observe(subject: nsISupports, topic: string, data: string): void;
    QueryInterface: MozQueryInterface;
    #private;
}
/**
 * Store interactions data in the Places database.
 * To improve performance the writes are buffered every `saveInterval`
 * milliseconds. Even if this means we could be trying to write interaction for
 * pages that in the meanwhile have been removed, that's not a problem because
 * we won't be able to insert entries having a NULL place_id, they will just be
 * ignored.
 * Use .add(interaction) to request storing of an interaction.
 * Use .pendingPromise to await for any pending writes to have happened.
 */
declare class InteractionsStore {
    progress: {};
    pendingPromise: Promise<void>;
    /**
     * Synchronizes the pending interactions with the storage device.
     *
     * @returns {Promise} resolved when the pending data is on disk.
     */
    flush(): Promise<any>;
    /**
     * Completely clears the store and any pending writes.
     * This exists for testing purposes.
     */
    reset(): Promise<void>;
    /**
     * Registers an interaction to be stored persistently. At the end of the call
     * the interaction has not yet been added to the store, tests can await
     * flushStore() for that.
     *
     * @param {InteractionInfo} interaction
     *   The document information to write.
     */
    add(interaction: InteractionInfo): void;
    #private;
}
export {};
