/**
 * The browser.urlbar extension API allows extensions to create their own urlbar
 * providers.  The results from extension providers are integrated into the
 * urlbar view just like the results from providers that are built into Firefox.
 *
 * This class is the interface between the provider-related parts of the
 * browser.urlbar extension API implementation and our internal urlbar
 * implementation.  The API implementation should use this class to manage
 * providers created by extensions.  All extension providers must be instances
 * of this class.
 *
 * When an extension requires a provider, the API implementation should call
 * getOrCreate() to get or create it.  When an extension adds an event listener
 * related to a provider, the API implementation should call setEventListener()
 * to register its own event listener with the provider.
 */
export class UrlbarProviderExtension {
    /**
     * Returns the extension provider with the given name, creating it first if
     * it doesn't exist.
     *
     * @param {string} name
     *   The provider name.
     * @returns {UrlbarProviderExtension}
     *   The provider.
     */
    static getOrCreate(name: string): UrlbarProviderExtension;
    /**
     * Constructor.
     *
     * @param {string} name
     *   The provider's name.
     */
    constructor(name: string);
    _name: string;
    _eventListeners: Map<any, any>;
    behavior: string;
    /**
     * The provider's name.
     *
     * @returns {string}
     */
    get name(): string;
    /**
     * The provider's type.  The type of extension providers is always
     * UrlbarUtils.PROVIDER_TYPE.EXTENSION.
     *
     * @returns {UrlbarUtils.PROVIDER_TYPE}
     */
    get type(): UrlbarUtils.PROVIDER_TYPE;
    /**
     * Whether the provider should be invoked for the given context.  If this
     * method returns false, the providers manager won't start a query with this
     * provider, to save on resources.
     *
     * @param {UrlbarQueryContext} context
     *   The query context object.
     * @returns {boolean}
     *   Whether this provider should be invoked for the search.
     */
    isActive(context: UrlbarQueryContext): boolean;
    /**
     * Gets the provider's priority.
     *
     * @param {UrlbarQueryContext} context
     *   The query context object.
     * @returns {number}
     *   The provider's priority for the given query.
     */
    getPriority(context: UrlbarQueryContext): number;
    /**
     * Sets the listener function for an event.  The extension API implementation
     * should call this from its EventManager.register() implementations.  Since
     * EventManager.register() is called at most only once for each extension
     * event (the first time the extension adds a listener for the event), each
     * provider instance needs at most only one listener per event, and that's why
     * this method is named setEventListener instead of addEventListener.
     *
     * The given listener function may return a promise that's resolved once the
     * extension responds to the event, or if the event requires no response from
     * the extension, it may return a non-promise value (possibly nothing).
     *
     * To remove the previously set listener, call this method again but pass null
     * as the listener function.
     *
     * The event name should be one of the following:
     *
     *   behaviorRequested
     *     This event is fired when the provider's behavior is needed from the
     *     extension.  The listener should return a behavior string.
     *   queryCanceled
     *     This event is fired when an ongoing query is canceled.  The listener
     *     shouldn't return anything.
     *   resultsRequested
     *     This event is fired when the provider's results are needed from the
     *     extension.  The listener should return an array of results.
     *
     * @param {string} eventName
     *   The name of the event to listen to.
     * @param {Function} listener
     *   The function that will be called when the event is fired.
     */
    setEventListener(eventName: string, listener: Function): void;
    /**
     * This method is called by the providers manager before a query starts to
     * update each extension provider's behavior.  It fires the behaviorRequested
     * event.
     *
     * @param {UrlbarQueryContext} context
     *   The query context.
     */
    updateBehavior(context: UrlbarQueryContext): Promise<void>;
    /**
     * This is called only for dynamic result types, when the urlbar view updates
     * the view of one of the results of the provider.  It should return an object
     * describing the view update.  See the base UrlbarProvider class for more.
     *
     * @param {UrlbarResult} result The result whose view will be updated.
     * @param {Map} idsByName
     *   A Map from an element's name, as defined by the provider; to its ID in
     *   the DOM, as defined by the browser.
     * @returns {object} An object describing the view update.
     */
    getViewUpdate(result: UrlbarResult, idsByName: Map<any, any>): object;
    /**
     * This method is called by the providers manager when a query starts to fetch
     * each extension provider's results.  It fires the resultsRequested event.
     *
     * @param {UrlbarQueryContext} context
     *   The query context.
     * @param {Function} addCallback
     *   The callback invoked by this method to add each result.
     */
    startQuery(context: UrlbarQueryContext, addCallback: Function): Promise<void>;
    /**
     * This method is called by the providers manager when an ongoing query is
     * canceled.  It fires the queryCanceled event.
     *
     * @param {UrlbarQueryContext} context
     *   The query context.
     */
    cancelQuery(context: UrlbarQueryContext): void;
    onEngagement(state: any, queryContext: any, details: any, controller: any): void;
    /**
     * Calls a listener function set by the extension API implementation, if any.
     *
     * @param {string} eventName
     *   The name of the listener to call (i.e., the name of the event to fire).
     * @param {*} args
     *   Arguments to the listener function.
     * @returns {*}
     *   The value returned by the listener function, if any.
     */
    _notifyListener(eventName: string, ...args: any): any;
    /**
     * Converts a plain-JS-object result created by the extension into a
     * UrlbarResult object.
     *
     * @param {UrlbarQueryContext} context
     *   The query context.
     * @param {object} extResult
     *   A plain JS object representing a result created by the extension.
     * @returns {UrlbarResult}
     *   The UrlbarResult object.
     */
    _makeUrlbarResult(context: UrlbarQueryContext, extResult: object): UrlbarResult;
    #private;
}
export namespace UrlbarProviderExtension {
    namespace RESULT_TYPES {
        let dynamic: any;
        let keyword: any;
        let omnibox: any;
        let remote_tab: any;
        let search: any;
        let tab: any;
        let tip: any;
        let url: any;
    }
    namespace SOURCE_TYPES {
        export let bookmarks: any;
        export let history: any;
        export let local: any;
        export let network: any;
        let search_1: any;
        export { search_1 as search };
        export let tabs: any;
        export let actions: any;
    }
}
