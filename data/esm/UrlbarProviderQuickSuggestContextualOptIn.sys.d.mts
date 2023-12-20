export const UrlbarProviderQuickSuggestContextualOptIn: ProviderQuickSuggestContextualOptIn;
/**
 * Class used to create the provider.
 */
declare class ProviderQuickSuggestContextualOptIn {
    get name(): string;
    get type(): any;
    _shouldDisplayContextualOptIn(queryContext?: any): boolean;
    isActive(queryContext: any): any;
    getPriority(queryContext: any): any;
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
    onBeforeSelection(result: any, element: any): void;
    onEngagement(state: any, queryContext: any, details: any, controller: any): void;
    _handleCommand(element: any, controller: any, result: any, container: any): void;
    /**
     * Starts querying.
     *
     * @param {object} queryContext The query context object
     * @param {Function} addCallback Callback invoked by the provider to add a new
     *        result.
     * @returns {Promise} resolved when the query stops.
     */
    startQuery(queryContext: object, addCallback: Function): Promise<any>;
    _recordGlean(interaction: any): void;
    #private;
}
export {};
