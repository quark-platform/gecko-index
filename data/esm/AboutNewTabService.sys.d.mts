/**
 * The AboutNewTabStubService is a function called in both the main and
 * content processes when trying to get at the nsIAboutNewTabService. This
 * function does the job of choosing the appropriate implementation of
 * nsIAboutNewTabService for the process type.
 */
export function AboutNewTabStubService(): BaseAboutNewTabService;
export namespace AboutHomeStartupCacheChild {
    let _initted: boolean;
    let CACHE_REQUEST_MESSAGE: string;
    let CACHE_RESPONSE_MESSAGE: string;
    let CACHE_USAGE_RESULT_MESSAGE: string;
    namespace STATES {
        let UNAVAILABLE: number;
        let UNCONSUMED: number;
        let PAGE_CONSUMED: number;
        let PAGE_AND_SCRIPT_CONSUMED: number;
        let FAILED: number;
        let DISQUALIFIED: number;
    }
    namespace REQUEST_TYPE {
        let PAGE: number;
        let SCRIPT: number;
    }
    let _state: number;
    let _consumerBCID: any;
    /**
     * Called via a process script very early on in the process lifetime. This
     * prepares the AboutHomeStartupCacheChild to pass an nsIChannel back to
     * the nsIAboutNewTabService when the initial about:home document is
     * eventually requested.
     *
     * @param pageInputStream (nsIInputStream)
     *   The stream for the cached page markup.
     * @param scriptInputStream (nsIInputStream)
     *   The stream for the cached script to run on the page.
     */
    function init(pageInputStream: any, scriptInputStream: any): void;
    /**
     * A function that lets us put the AboutHomeStartupCacheChild back into
     * its initial state. This is used by tests to let us simulate the startup
     * behaviour of the module without having to manually launch a new privileged
     * about content process every time.
     */
    function uninit(): void;
    /**
     * A public method called from nsIAboutNewTabService that attempts
     * return an nsIChannel for a cached about:home document that we
     * were initialized with. If we failed to be initted with the
     * cache, or the input streams that we were sent have no data
     * yet available, this function returns null. The caller should
     * fall back to generating the page dynamically.
     *
     * This function will be called when loading about:home, or
     * about:home?jscache - the latter returns the cached script.
     *
     * It is expected that the same BrowsingContext that loads the cached
     * page will also load the cached script.
     *
     * @param uri (nsIURI)
     *   The URI for the requested page, as passed by nsIAboutNewTabService.
     * @param loadInfo (nsILoadInfo)
     *   The nsILoadInfo for the requested load, as passed by
     *   nsIAboutNewWTabService.
     * @return nsIChannel or null.
     */
    function maybeGetCachedPageChannel(uri: any, loadInfo: any): any;
    /**
     * This function takes the state information required to generate
     * the about:home cache markup and script, and then generates that
     * markup in script asynchronously. Once that's done, a message
     * is sent to the parent process with the nsIInputStream's for the
     * markup and script contents.
     *
     * @param state (Object)
     *   The Redux state of the about:home document to render.
     * @return Promise
     * @resolves undefined
     *   After the message with the nsIInputStream's have been sent to
     *   the parent.
     */
    function constructAndSendCache(state: any): Promise<void>;
    let _cacheWorker: any;
    function getOrCreateWorker(): any;
    function receiveMessage(message: any): void;
    function reportUsageResult(success: any): void;
    function observe(subject: any, topic: any, data: any): void;
    /**
     * Transitions the AboutHomeStartupCacheChild from one state
     * to the next, where each state is defined in this.STATES.
     *
     * States can only be transitioned in increasing order, otherwise
     * an error is logged.
     */
    function setState(state: any): void;
    /**
     * If the cache hasn't been used, transitions it into the DISQUALIFIED
     * state so that it cannot be used. This should be called if it's been
     * determined that about:newtab is going to be loaded, which doesn't
     * use the cache.
     */
    function disqualifyCache(): void;
}
/**
 * This is an abstract base class for the nsIAboutNewTabService
 * implementations that has some common methods and properties.
 */
declare class BaseAboutNewTabService {
    activityStreamDebug: boolean;
    classID: any;
    QueryInterface: any;
    /**
     * Returns the default URL.
     *
     * This URL depends on various activity stream prefs. Overriding
     * the newtab page has no effect on the result of this function.
     */
    get defaultURL(): string;
    get welcomeURL(): string;
    aboutHomeChannel(uri: any, loadInfo: any): void;
}
export {};
