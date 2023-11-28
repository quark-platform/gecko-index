export const UrlbarProviderTabToSearch: ProviderTabToSearch;
/**
 * Class used to create the provider.
 */
declare class ProviderTabToSearch {
    enginesShown: {
        onboarding: Set<any>;
        regular: Set<any>;
    };
    /**
     * Returns the name of this provider.
     *
     * @returns {string} the name of this provider.
     */
    get name(): string;
    /**
     * Returns the type of this provider.
     *
     * @returns {integer} one of the types from UrlbarUtils.PROVIDER_TYPE.*
     */
    get type(): integer;
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
     * Gets the provider's priority.
     *
     * @param {UrlbarQueryContext} queryContext The query context object
     * @returns {number} The provider's priority for the given query.
     */
    getPriority(queryContext: UrlbarQueryContext): number;
    /**
     * This is called only for dynamic result types, when the urlbar view updates
     * the view of one of the results of the provider.  It should return an object
     * describing the view update.
     *
     * @param {UrlbarResult} result The result whose view will be updated.
     * @param {Map} idsByName
     *   A Map from an element's name, as defined by the provider; to its ID in
     *   the DOM, as defined by the browser.
     * @returns {object} An object describing the view update.
     */
    getViewUpdate(result: UrlbarResult, idsByName: Map<any, any>): object;
    /**
     * Called when a result from the provider is selected. "Selected" refers to
     * the user highlighing the result with the arrow keys/Tab, before it is
     * picked. onSelection is also called when a user clicks a result. In the
     * event of a click, onSelection is called just before onEngagement.
     *
     * @param {UrlbarResult} result
     *   The result that was selected.
     * @param {Element} element
     *   The element in the result's view that was selected.
     */
    onSelection(result: UrlbarResult, element: Element): void;
    onboardingInteractionAtTime: number;
    onEngagement(state: any, queryContext: any, details: any, controller: any): void;
    /**
     * Defines whether the view should defer user selection events while waiting
     * for the first result from this provider.
     *
     * @returns {boolean} Whether the provider wants to defer user selection
     *          events.
     */
    get deferUserSelection(): boolean;
    /**
     * Starts querying.
     *
     * @param {object} queryContext The query context object
     * @param {Function} addCallback Callback invoked by the provider to add a new
     *        result.
     * @returns {Promise} resolved when the query stops.
     */
    startQuery(queryContext: object, addCallback: Function): Promise<any>;
}
export {};
