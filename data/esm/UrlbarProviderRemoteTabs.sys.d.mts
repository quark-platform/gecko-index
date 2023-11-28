export const UrlbarProviderRemoteTabs: ProviderRemoteTabs;
/**
 * Class used to create the provider.
 */
declare class ProviderRemoteTabs {
    /**
     * Unique name for the provider, used by the context to filter on providers.
     *
     * @returns {string}
     */
    get name(): string;
    /**
     * The type of the provider, must be one of UrlbarUtils.PROVIDER_TYPE.
     *
     * @returns {UrlbarUtils.PROVIDER_TYPE}
     */
    get type(): UrlbarUtils.PROVIDER_TYPE;
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
     */
    startQuery(queryContext: UrlbarQueryContext, addCallback: Function): Promise<void>;
    /**
     * Build the in-memory structure we use.
     */
    buildItems(): Promise<{
        tab: any;
        client: any;
    }[]>;
    /**
     * Ensure the cache is good.
     */
    ensureCache(): Promise<any>;
    observe(subject: any, topic: any, data: any): void;
}
export {};
