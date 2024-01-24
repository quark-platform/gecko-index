/**
 * @typedef {object} PageData
 *   A set of discovered from a page. Other than the `data` property this is the
 *   schema at `browser/components/pagedata/schemas/general.schema.json`.
 * @property {string} url
 *   The page's url.
 * @property {number} date
 *   The epoch based timestamp for when the data was discovered.
 * @property {string} siteName
 *   The page's friendly site name.
 * @property {string} image
 *   The page's image.
 * @property {object} data
 *   The map of data found which may be empty if no data was found. The key in
 *   map is from the `PageDataSchema.DATA_TYPE` enumeration. The values are in
 *   the format defined by the schemas at `browser/components/pagedata/schemas`.
 */
export const PageDataService: {
    /**
     * Caches page data discovered from browsers.
     *
     * @type {PageDataCache}
     */
    "__#563842@#pageDataCache": PageDataCache;
    /**
     * The number of currently running background fetches.
     *
     * @type {number}
     */
    "__#563842@#backgroundFetches": number;
    /**
     * The list of urls waiting to be loaded in the background.
     *
     * @type {Set<string>}
     */
    "__#563842@#backgroundQueue": Set<string>;
    /**
     * Tracks whether the user is currently idle.
     *
     * @type {boolean}
     */
    "__#563842@#userIsIdle": boolean;
    /**
     * A manager for hidden browsers.
     *
     * @type {HiddenBrowserManager}
     */
    "__#563842@#browserManager": HiddenBrowserManager;
    /**
     * A map of hidden browsers to a resolve function that should be passed the
     * actor that was created for the browser.
     *
     * @type {WeakMap<Browser, function(PageDataParent): void>}
     */
    "__#563842@#backgroundBrowsers": WeakMap<Browser, (arg0: PageDataParent) => void>;
    /**
     * Tracks windows that have browsers with entries in the cache.
     *
     * @type {Map<Window, Set<Browser>>}
     */
    "__#563842@#trackedWindows": Map<Window, Set<Browser>>;
    /**
     * Initializes a new instance of the service, not called externally.
     */
    init(): void;
    /**
     * Called when the service is destroyed. This is generally on shutdown so we
     * don't really need to do much cleanup.
     */
    uninit(): void;
    /**
     * Starts tracking for when a browser is destroyed.
     *
     * @param {Browser} browser
     *   The browser to track.
     */
    "__#563842@#trackBrowser"(browser: Browser): void;
    /**
     * Requests that any page data for this url is retained in memory until
     * unlocked. By calling this you are committing to later call `unlockEntry`
     * with the same `actor` and `url` parameters.
     *
     * @param {object} actor
     *   The actor requesting the lock.
     * @param {string} url
     *   The url of the page to lock.
     */
    lockEntry(actor: object, url: string): void;
    /**
     * Notifies that an actor is no longer interested in a url.
     *
     * @param {object} actor
     *   The actor that requested the lock.
     * @param {string | undefined} [url]
     *   The url of the page or undefined to unlock all urls locked by this actor.
     */
    unlockEntry(actor: object, url?: string | undefined): void;
    /**
     * Called when the content process signals that a page is ready for data
     * collection.
     *
     * @param {PageDataParent} actor
     *   The parent actor for the page.
     * @param {string} url
     *   The url of the page.
     */
    pageLoaded(actor: PageDataParent, url: string): Promise<void>;
    /**
     * Adds data for a url. This should generally only be called by other components of the
     * page data service or tests for simulating page data collection.
     *
     * @param {PageData} pageData
     *   The set of data discovered.
     */
    pageDataDiscovered(pageData: PageData): void;
    /**
     * Retrieves any cached page data. Returns null if there is no information in the cache, this will
     * happen either if the page has not been browsed recently or if data collection failed for some
     * reason.
     *
     * @param {string} url
     *   The url to retrieve data for.
     * @returns {PageData|null}
     *   A `PageData` if one is cached (it may not actually contain any items of data) or null if this
     *   page has not been successfully checked for data recently.
     */
    getCached(url: string): PageData | null;
    /**
     * Fetches page data from the given URL using a hidden window. Note that this does not populate
     * the page data cache or emit the `page-data` event.
     *
     * @param {string} url
     *   The url to retrieve data for.
     * @returns {Promise<PageData|null>}
     *   Resolves to the found pagedata or null in case of error.
     */
    fetchPageData(url: string): Promise<PageData | null>;
    /**
     * Handles notifications from the idle service.
     *
     * @param {nsISupports} subject
     *   The notification's subject.
     * @param {string} topic
     *   The notification topic.
     * @param {string} data
     *   The data associated with the notification.
     */
    observe(subject: nsISupports, topic: string, data: string): void;
    /**
     * Starts as many background workers as are allowed to process the background
     * queue.
     */
    "__#563842@#startBackgroundWorkers"(): void;
    /**
     * Starts a background fetch worker which will pull urls from the queue and
     * load them until the queue is empty.
     */
    "__#563842@#backgroundFetch"(): Promise<void>;
    /**
     * Queues page data retrieval for a url. The page-data notification will be
     * generated if data becomes available.
     *
     * Check `getCached` first to ensure that data is not already in the cache.
     *
     * @param {string} url
     *   The url to retrieve data for.
     */
    queueFetch(url: string): void;
    /**
     * Determines if the given browser is contained within a tab.
     *
     * @param {DOMElement} browser
     *   The browser element to check.
     * @returns {boolean}
     *   True if the browser element is contained within a tab.
     */
    "__#563842@#isATabBrowser"(browser: DOMElement): boolean;
};
/**
 * An entry in the page data cache.
 */
export type CacheEntry = {
    /**
     *   The data or null if there is no known data.
     */
    pageData: PageData | null;
    /**
     *   The actors that maintain an interest in keeping the entry cached.
     */
    actors: Set<any>;
};
/**
 * A set of discovered from a page. Other than the `data` property this is the
 * schema at `browser/components/pagedata/schemas/general.schema.json`.
 */
export type PageData = {
    /**
     *   The page's url.
     */
    url: string;
    /**
     *   The epoch based timestamp for when the data was discovered.
     */
    date: number;
    /**
     *   The page's friendly site name.
     */
    siteName: string;
    /**
     *   The page's image.
     */
    image: string;
    /**
     *   The map of data found which may be empty if no data was found. The key in
     *   map is from the `PageDataSchema.DATA_TYPE` enumeration. The values are in
     *   the format defined by the schemas at `browser/components/pagedata/schemas`.
     */
    data: object;
};
/**
 * @typedef {object} CacheEntry
 *   An entry in the page data cache.
 * @property {PageData | null} pageData
 *   The data or null if there is no known data.
 * @property {Set} actors
 *   The actors that maintain an interest in keeping the entry cached.
 */
/**
 * A cache of page data kept in memory. By default any discovered data from
 * browsers is kept in memory until the browser element is destroyed but other
 * actors may register an interest in keeping an entry alive beyond that.
 */
declare class PageDataCache {
    /**
     * Creates or updates an entry in the cache. If no actor has registered any
     * interest in keeping this page's data in memory then this will do nothing.
     *
     * @param {string} url
     *   The url of the page.
     * @param {PageData|null} pageData
     *   The current page data for the page.
     */
    set(url: string, pageData: PageData | null): void;
    /**
     * Gets any cached data for the url.
     *
     * @param {string} url
     *   The url of the page.
     * @returns {PageData | null}
     *   The page data if some is known.
     */
    get(url: string): PageData | null;
    /**
     * Adds a lock to an entry. This can be called before we have discovered the
     * data for the url.
     *
     * @param {object} actor
     *   Ensures the entry stays in memory until unlocked by this actor.
     * @param {string} url
     *   The url of the page.
     */
    lockData(actor: object, url: string): void;
    /**
     * Removes a lock from an entry.
     *
     * @param {object} actor
     *   The lock to remove.
     * @param {string | undefined} [url]
     *   The url of the page or undefined to unlock all urls locked by this actor.
     */
    unlockData(actor: object, url?: string | undefined): void;
    #private;
}
/**
 * A manager for hidden browsers. Responsible for creating and destroying a
 * hidden frame to hold them.
 */
declare class HiddenBrowserManager {
    /**
     * Calls a callback function with a new hidden browser.
     * This function will return whatever the callback function returns.
     *
     * @param {Callback} callback
     *   The callback function will be called with the browser element and may
     *   be asynchronous.
     * @returns {T}
     */
    withHiddenBrowser(callback: Callback): T;
    #private;
}
export {};
