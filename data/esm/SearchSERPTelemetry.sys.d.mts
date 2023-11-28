export const TELEMETRY_SETTINGS_KEY: "search-telemetry-v2";
export const TELEMETRY_CATEGORIZATION_KEY: "search-categorization";
export namespace SearchSERPTelemetryUtils {
    namespace ACTIONS {
        let CLICKED: string;
        let EXPANDED: string;
        let SUBMITTED: string;
    }
    namespace COMPONENTS {
        let AD_CAROUSEL: string;
        let AD_LINK: string;
        let AD_SIDEBAR: string;
        let AD_SITELINK: string;
        let INCONTENT_SEARCHBOX: string;
        let NON_ADS_LINK: string;
        let REFINED_SEARCH_BUTTONS: string;
        let SHOPPING_TAB: string;
    }
    namespace ABANDONMENTS {
        let NAVIGATION: string;
        let TAB_CLOSE: string;
        let WINDOW_CLOSE: string;
    }
    namespace INCONTENT_SOURCES {
        let OPENED_IN_NEW_TAB: string;
        let REFINE_ON_SERP: string;
        let SEARCHBOX: string;
    }
    namespace CATEGORIZATION {
        let INCONCLUSIVE: number;
    }
}
export const SearchSERPDomainToCategoriesMap: DomainToCategoriesMap;
export const SearchSERPTelemetry: TelemetryHandler;
export const SearchSERPCategorization: DomainCategorizer;
export type DomainToCategoriesRecord = {
    /**
     *  The version of the record.
     */
    version: number;
};
export type DomainCategoryScore = {
    /**
     *  The index of the category.
     */
    category: number;
    /**
     *  The score associated with the category.
     */
    score: number;
};
/**
 * @typedef {object} DomainToCategoriesRecord
 * @property {number} version
 *  The version of the record.
 */
/**
 * @typedef {object} DomainCategoryScore
 * @property {number} category
 *  The index of the category.
 * @property {number} score
 *  The score associated with the category.
 */
/**
 * Maps domain to categories, with data synced with Remote Settings.
 */
declare class DomainToCategoriesMap {
    /**
     * Runs at application startup with startup idle tasks. Creates a listener
     * to changes of the SERP categorization preference. Additionally, if the
     * SERP categorization preference is enabled, it creates a Remote Settings
     * client to listen to updates, and populates the map.
     */
    init(): Promise<void>;
    /**
     * Predominantly a test-only function.
     */
    uninit(): void;
    observe(subject: any, topic: any, data: any): void;
    /**
     * Given a domain, find categories and relevant scores.
     *
     * @param {string} domain Domain to lookup.
     * @returns {Array<DomainCategoryScore>}
     *  An array containing categories and their respective score. If no record
     *  for the domain is available, return an empty array.
     */
    get(domain: string): Array<DomainCategoryScore>;
    /**
     * If the map was initialized, returns the version number for the data.
     * The version number is determined by the record with the highest version
     * number. Even if the records have different versions, only records from the
     * latest version should be available. Returns null if the map was not
     * initialized.
     *
     * @returns {null | number} The version number.
     */
    get version(): number;
    /**
     * Whether the map is empty of data.
     *
     * @returns {boolean}
     */
    get empty(): boolean;
    /**
     * Unit test-only function, used to override the domainToCategoriesMap so
     * that tests can set it to easy to test values.
     *
     * @param {object} domainToCategoriesMap
     *   An object where the key is a hashed domain and the value is an array
     *   containing an arbitrary number of DomainCategoryScores.
     */
    overrideMapForTests(domainToCategoriesMap: object): void;
    #private;
}
/**
 * TelemetryHandler is the main class handling Search Engine Result Page (SERP)
 * telemetry. It primarily deals with tracking of what pages are loaded into tabs.
 *
 * It handles the *in-content:sap* keys of the SEARCH_COUNTS histogram.
 */
declare class TelemetryHandler {
    _initialized: boolean;
    _contentHandler: ContentHandler;
    _originalProviderInfo: any;
    _searchProviderInfo: any;
    _telemetrySettings: any;
    _browserInfoByURL: Map<any, any>;
    _browserSourceMap: WeakMap<object, any>;
    /**
     * Sets the source of a SERP visit from something that occured in content
     * rather than from the browser.
     *
     * @param {browser} browser
     *   The browser object associated with the page that should be a SERP.
     * @param {string} source
     *   The source that started the load. One of
     *   SearchSERPTelemetryUtils.COMPONENTS.INCONTENT_SEARCHBOX,
     *   SearchSERPTelemetryUtils.INCONTENT_SOURCES.OPENED_IN_NEW_TAB or
     *   SearchSERPTelemetryUtils.INCONTENT_SOURCES.REFINE_ON_SERP.
     */
    setBrowserContentSource(browser: any, source: string): void;
    _browserNewtabSessionMap: WeakMap<object, any>;
    /**
     * Initializes the TelemetryHandler and its ContentHandler. It will add
     * appropriate listeners to the window so that window opening and closing
     * can be tracked.
     */
    init(): Promise<void>;
    /**
     * Uninitializes the TelemetryHandler and its ContentHandler.
     */
    uninit(): void;
    /**
     * Records the search source for particular browsers, in case it needs
     * to be associated with a SERP.
     *
     * @param {browser} browser
     *   The browser where the search originated.
     * @param {string} source
     *    Where the search originated from.
     */
    recordBrowserSource(browser: any, source: string): void;
    /**
     * Records the newtab source for particular browsers, in case it needs
     * to be associated with a SERP.
     *
     * @param {browser} browser
     *   The browser where the search originated.
     * @param {string} newtabSessionId
     *    The sessionId of the newtab session the search originated from.
     */
    recordBrowserNewtabSession(browser: any, newtabSessionId: string): void;
    /**
     * Helper function for recording the reason for a Glean abandonment event.
     *
     * @param {string} impressionId
     *    The impression id for the abandonment event about to be recorded.
     * @param {string} reason
     *    The reason the SERP is deemed abandoned.
     *    One of SearchSERPTelemetryUtils.ABANDONMENTS.
     */
    recordAbandonmentTelemetry(impressionId: string, reason: string): void;
    /**
     * Handles the TabClose event received from the listeners.
     *
     * @param {object} event
     *   The event object provided by the listener.
     */
    handleEvent(event: object): void;
    /**
     * Test-only function, used to override the provider information, so that
     * unit tests can set it to easy to test values.
     *
     * @param {Array} providerInfo
     *   See {@link https://searchfox.org/mozilla-central/search?q=search-telemetry-schema.json}
     *   for type information.
     */
    overrideSearchTelemetryForTests(providerInfo: any[]): void;
    /**
     * Used to set the local version of the search provider information.
     * This automatically maps the regexps to RegExp objects so that
     * we don't have to create a new instance each time.
     *
     * @param {Array} providerInfo
     *   A raw array of provider information to set.
     */
    _setSearchProviderInfo(providerInfo: any[]): void;
    reportPageAction(info: any, browser: any): void;
    reportPageWithAds(info: any, browser: any): void;
    reportPageWithAdImpressions(info: any, browser: any): void;
    reportPageDomains(info: any, browser: any): void;
    reportPageImpression(info: any, browser: any): void;
    /**
     * This may start tracking a tab based on the URL. If the URL matches a search
     * partner, and it has a code, then we'll start tracking it. This will aid
     * determining if it is a page we should be tracking for adverts.
     *
     * @param {object} browser
     *   The browser associated with the page.
     * @param {string} url
     *   The url that was loaded in the browser.
     * @param {nsIDocShell.LoadCommand} loadType
     *   The load type associated with the page load.
     */
    updateTrackingStatus(browser: object, url: string, loadType: nsIDocShell.LoadCommand): void;
    /**
     * Stops tracking of a tab, for example the tab has loaded a different URL.
     * Also records a Glean abandonment event if appropriate.
     *
     * @param {object} browser The browser associated with the tab to stop being
     *   tracked.
     * @param {string} abandonmentReason
     *   An optional parameter that specifies why the browser is deemed abandoned.
     *   The reason will be recorded as part of Glean abandonment telemetry.
     *   One of SearchSERPTelemetryUtils.ABANDONMENTS.
     */
    stopTrackingBrowser(browser: object, abandonmentReason: string): void;
    /**
     * Calculate how close two urls are in equality.
     *
     * The scoring system:
     * - If the URLs look exactly the same, including the ordering of query
     *   parameters, the score is Infinity.
     * - If the origin is the same, the score is increased by 1. Otherwise the
     *   score is 0.
     * - If the path is the same, the score is increased by 1.
     * - For each query parameter, if the key exists the score is increased by 1.
     *   Likewise if the query parameter values match.
     * - If the hash is the same, the score is increased by 1. This includes if
     *   the hash is missing in both URLs.
     *
     * @param {URL} url1
     *   Url to compare.
     * @param {URL} url2
     *   Other url to compare. Ordering shouldn't matter.
     * @param {object} [matchOptions]
     *   Options for checking equality.
     * @param {boolean} [matchOptions.path]
     *   Whether the path must match. Default to false.
     * @param {boolean} [matchOptions.paramValues]
     *   Whether the values of the query parameters must match if the query
     *   parameter key exists in the other. Defaults to false.
     * @returns {number}
     *   A score of how closely the two URLs match. Returns 0 if there is no
     *   match or the equality check failed for an enabled match option.
     */
    compareUrls(url1: URL, url2: URL, matchOptions?: {
        path?: boolean;
        paramValues?: boolean;
    }): number;
    /**
     * Parts of the URL, like search params and hashes, may be mutated by scripts
     * on a page we're tracking. Since we don't want to keep track of that
     * ourselves in order to keep the list of browser objects a weak-referenced
     * set, we do optional fuzzy matching of URLs to fetch the most relevant item
     * that contains tracking information.
     *
     * @param {string} url URL to fetch the tracking data for.
     * @returns {object} Map containing the following members:
     *   - {WeakMap} browsers
     *     Map of browser elements that belong to `url` and their ad report state.
     *   - {object} info
     *     Info dictionary as returned by `_checkURLForSerpMatch`.
     *   - {number} count
     *     The number of browser element we can most accurately tell we're
     *     tracking, since they're inside a WeakMap.
     */
    _findBrowserItemForURL(url: string): object;
    /**
     * This is called when a new window is opened, and handles registration of
     * that window if it is a browser window.
     *
     * @param {nsIAppWindow} appWin The xul window that was opened.
     */
    onOpenWindow(appWin: nsIAppWindow): void;
    /**
     * Listener that is called when a window is closed, and handles deregistration of
     * that window if it is a browser window.
     *
     * @param {nsIAppWindow} appWin The xul window that was closed.
     */
    onCloseWindow(appWin: nsIAppWindow): void;
    /**
     * Adds event listeners for the window and registers it with the content handler.
     *
     * @param {object} win The window to register.
     */
    _registerWindow(win: object): void;
    /**
     * Removes event listeners for the window and unregisters it with the content
     * handler.
     *
     * @param {object} win The window to unregister.
     */
    _unregisterWindow(win: object): void;
    /**
     * Searches for provider information for a given url.
     *
     * @param {string} url The url to match for a provider.
     * @returns {Array | null} Returns an array of provider name and the provider information.
     */
    _getProviderInfoForURL(url: string): any[] | null;
    /**
     * Checks to see if a url is a search partner location, and determines the
     * provider and codes used.
     *
     * @param {string} url The url to match.
     * @returns {null|object} Returns null if there is no match found. Otherwise,
     *   returns an object of strings for provider, code and type.
     */
    _checkURLForSerpMatch(url: string): null | object;
    /**
     * Logs telemetry for a search provider visit.
     *
     * @param {object} info The search provider information.
     * @param {string} info.provider The name of the provider.
     * @param {string} info.type The type of search.
     * @param {string} [info.code] The code for the provider.
     * @param {string} source Where the search originated from.
     * @param {string} url The url that was matched (for debug logging only).
     */
    _reportSerpPage(info: {
        provider: string;
        type: string;
        code?: string;
    }, source: string, url: string): void;
    #private;
}
/**
 * Categorizes SERPs.
 */
declare class DomainCategorizer {
    /**
     * Categorizes and reports domains extracted from SERPs. Note that we don't
     * process domains if the domain-to-categories map is empty (if the client
     * couldn't download Remote Settings attachments, for example).
     *
     * @param {Set} nonAdDomains
     *   The non-ad domains extracted from the page.
     * @param {Set} adDomains
     *   The ad domains extracted from the page.
     * @param {string} provider
     *   The provider associated with the page.
     */
    maybeCategorizeAndReportDomainsFromProvider(nonAdDomains: Set<any>, adDomains: Set<any>, provider: string): void;
    /**
     * Applies the logic for reducing extracted domains to a single category for
     * the SERP.
     *
     * @param {Set} domains
     *   The domains extracted from the page.
     * @returns {object} resultsToReport
     *   The final categorization results. Keys are: "category", "num_domains",
     *   "num_unknown" and "num_inconclusive".
     */
    applyCategorizationLogic(domains: Set<any>): object;
    dummyLogger(domains: any, resultsToReport: any, version: any): void;
    /**
     * Processes raw domains extracted from the SERP into their final form before
     * categorization.
     *
     * @param {Set} domains
     *   The domains extracted from the page.
     * @param {string} provider
     *   The provider associated with the page.
     * @returns {Set} processedDomains
     *   The final set of processed domains for a page.
     */
    processDomains(domains: Set<any>, provider: string): Set<any>;
    #private;
}
/**
 * ContentHandler deals with handling telemetry of the content within a tab -
 * when ads detected and when they are selected.
 */
declare class ContentHandler {
    /**
     * Constructor.
     *
     * @param {object} options
     *   The options for the handler.
     * @param {Map} options.browserInfoByURL
     *   The map of urls from TelemetryHandler.
     * @param {Function} options.getProviderInfoForURL
     *   A function that obtains the provider information for a url.
     */
    constructor(options: {
        browserInfoByURL: Map<any, any>;
        getProviderInfoForURL: Function;
    });
    _browserInfoByURL: Map<any, any>;
    _findBrowserItemForURL: any;
    _checkURLForSerpMatch: any;
    /**
     * Initializes the content handler. This will also set up the shared data that is
     * shared with the SearchTelemetryChild actor.
     *
     * @param {Array} providerInfo
     *  The provider information for the search telemetry to record.
     */
    init(providerInfo: any[]): void;
    /**
     * Uninitializes the content handler.
     */
    uninit(): void;
    /**
     * Test-only function to override the search provider information for use
     * with tests. Passes it to the SearchTelemetryChild actor.
     *
     * @param {object} providerInfo @see SEARCH_PROVIDER_INFO for type information.
     */
    overrideSearchTelemetryForTests(providerInfo: object): void;
    /**
     * Reports bandwidth used by the given channel if it is used by search requests.
     *
     * @param {object} aChannel The channel that generated the activity.
     */
    _reportChannelBandwidth(aChannel: object): void;
    observe(aSubject: any, aTopic: any, aData: any): void;
    /**
     * Listener that observes network activity, so that we can determine if a link
     * from a search provider page was followed, and if then if that link was an
     * ad click or not.
     *
     * @param {nsIChannel} channel   The channel that generated the activity.
     */
    observeActivity(channel: nsIChannel): void;
    /**
     * Logs telemetry for a page with adverts, if it is one of the partner search
     * provider pages that we're tracking.
     *
     * @param {object} info
     *     The search provider information for the page.
     * @param {boolean} info.hasAds
     *     Whether or not the page has adverts.
     * @param {string} info.url
     *     The url of the page.
     * @param {object} browser
     *     The browser associated with the page.
     */
    _reportPageWithAds(info: {
        hasAds: boolean;
        url: string;
    }, browser: object): void;
    /**
     * Logs ad impression telemetry for a page with adverts, if it is
     * one of the partner search provider pages that we're tracking.
     *
     * @param {object} info
     *     The search provider information for the page.
     * @param {string} info.url
     *     The url of the page.
     * @param {Map<string, object>} info.adImpressions
     *     A map of ad impressions found for the page, where the key
     *     is the type of ad component and the value is an object
     *     containing the number of ads that were loaded, visible,
     *     and hidden.
     * @param {Map<string, string>} info.hrefToComponentMap
     *     A map of hrefs to their component type. Contains both ads
     *     and non-ads.
     * @param {object} browser
     *     The browser associated with the page.
     */
    _reportPageWithAdImpressions(info: {
        url: string;
        adImpressions: Map<string, object>;
        hrefToComponentMap: Map<string, string>;
    }, browser: object): void;
    /**
     * Records a page action from a SERP page. Normally, actions are tracked in
     * parent process by observing network events but some actions are not
     * possible to detect outside of subscribing to the child process.
     *
     * @param {object} info
     *   The search provider infomation for the page.
     * @param {string} info.type
     *   The component type that was clicked on.
     * @param {string} info.action
     *   The action taken on the page.
     * @param {object} browser
     *   The browser associated with the page.
     */
    _reportPageAction(info: {
        type: string;
        action: string;
    }, browser: object): void;
    _reportPageImpression(info: any, browser: any): void;
    /**
     * Initiates the categorization and reporting of domains extracted from
     * SERPs.
     *
     * @param {object} info
     *   The search provider infomation for the page.
     * @param {Set} info.nonAdDomains
         The non-ad domains extracted from the page.
     * @param {Set} info.adDomains
         The ad domains extracted from the page.
     * @param {object} browser
     *   The browser associated with the page.
     */
    _reportPageDomains(info: {
        nonAdDomains: Set<any>;
        adDomains: Set<any>;
    }, browser: object): void;
}
export {};
