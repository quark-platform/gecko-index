export const UrlbarProviderQuickActions: ProviderQuickActions;
/**
 * A provider that returns a suggested url to the user based on what
 * they have currently typed so they can navigate directly.
 */
declare class ProviderQuickActions {
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
    getPriority(context: any): 0 | 1;
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
    getViewTemplate(result: any): {
        children: {
            name: string;
            tag: string;
            attributes: {
                "data-is-quickactions-searchmode": any;
            };
            children: any;
        }[];
    };
    getViewUpdate(result: any): {};
    onEngagement(state: any, queryContext: any, details: any, controller: any): void;
    /**
     * Adds a new QuickAction.
     *
     * @param {string} key A key to identify this action.
     * @param {string} definition An object that describes the action.
     */
    addAction(key: string, definition: string): void;
    /**
     * Removes an action.
     *
     * @param {string} key A key to identify this action.
     */
    removeAction(key: string): void;
    #private;
}
export {};
