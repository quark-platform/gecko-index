export const UrlbarProviderWeather: ProviderWeather;
/**
 * A provider that returns a suggested url to the user based on what
 * they have currently typed so they can navigate directly.
 */
declare class ProviderWeather {
    constructor(...args: any[]);
    /**
     * Returns the name of this provider.
     *
     * @returns {string} the name of this provider.
     */
    get name(): string;
    /**
     * The type of the provider.
     *
     * @returns {UrlbarUtils.PROVIDER_TYPE}
     */
    get type(): UrlbarUtils.PROVIDER_TYPE;
    /**
     * @returns {object} An object mapping from mnemonics to scalar names.
     */
    get TELEMETRY_SCALARS(): any;
    getPriority(context: any): any;
    /**
     * Whether this provider should be invoked for the given context.
     * If this method returns false, the providers manager won't start a query
     * with this provider, to save on resources.
     *
     * @param {UrlbarQueryContext} queryContext The query context object
     * @returns {boolean} Whether this provider should be invoked for the search.
     */
    isActive(queryContext: UrlbarQueryContext): boolean;
    /**
     * Starts querying. Extended classes should return a Promise resolved when the
     * provider is done searching AND returning results.
     *
     * @param {UrlbarQueryContext} queryContext The query context object
     * @param {Function} addCallback Callback invoked by the provider to add a new
     *        result. A UrlbarResult should be passed to it.
     * @returns {Promise}
     */
    startQuery(queryContext: UrlbarQueryContext, addCallback: Function): Promise<any>;
    getResultCommands(result: any): {
        name: string;
        l10n: {
            id: string;
        };
    }[];
    /**
     * This is called only for dynamic result types, when the urlbar view updates
     * the view of one of the results of the provider.  It should return an object
     * describing the view update.
     *
     * @param {UrlbarResult} result
     *   The result whose view will be updated.
     * @param {Map} idsByName
     *   A Map from an element's name, as defined by the provider; to its ID in
     *   the DOM, as defined by the browser.This is useful if parts of the view
     *   update depend on element IDs, as some ARIA attributes do.
     * @returns {object} An object describing the view update.
     */
    getViewUpdate(result: UrlbarResult, idsByName: Map<any, any>): object;
    onEngagement(state: any, queryContext: any, details: any, controller: any): void;
    #private;
}
export {};
