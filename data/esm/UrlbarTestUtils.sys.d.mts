export namespace UrlbarTestUtils {
    export namespace formHistory {
        /**
         * Adds values to the urlbar's form history.
         *
         * @param {Array} values
         *   The form history entries to remove.
         * @param {object} window
         *   The window containing the urlbar.
         * @returns {Promise} resolved once the operation is complete.
         */
        function add(values?: any[], window?: any): Promise<any>;
        /**
         * Removes values from the urlbar's form history.  If you want to remove all
         * history, use clearFormHistory.
         *
         * @param {Array} values
         *   The form history entries to remove.
         * @param {object} window
         *   The window containing the urlbar.
         * @returns {Promise} resolved once the operation is complete.
         */
        function remove(values?: any[], window?: any): Promise<any>;
        /**
         * Removes all values from the urlbar's form history.  If you want to remove
         * individual values, use removeFormHistory.
         *
         * @param {object} window
         *   The window containing the urlbar.
         * @returns {Promise} resolved once the operation is complete.
         */
        function clear(window?: any): Promise<any>;
        /**
         * Searches the urlbar's form history.
         *
         * @param {object} criteria
         *   Criteria to narrow the search.  See FormHistory.search.
         * @param {object} window
         *   The window containing the urlbar.
         * @returns {Promise}
         *   A promise resolved with an array of found form history entries.
         */
        function search(criteria?: any, window?: any): Promise<any>;
        /**
         * Returns a promise that's resolved on the next form history change.
         *
         * @param {string} change
         *   Null to listen for any change, or one of: add, remove, update
         * @returns {Promise}
         *   Resolved on the next specified form history change.
         */
        function promiseChanged(change?: string): Promise<any>;
        /**
         * Returns the form history name for the urlbar in a window.
         *
         * @param {object} window
         *   The window.
         * @returns {string}
         *   The form history name of the urlbar in the window.
         */
        function getFormHistoryName(window?: any): string;
    }
    export { TestProvider };
}
/**
 * A test provider.  If you need a test provider whose behavior is different
 * from this, then consider modifying the implementation below if you think the
 * new behavior would be useful for other tests.  Otherwise, you can create a
 * new TestProvider instance and then override its methods.
 */
declare class TestProvider {
    /**
     * Constructor.
     *
     * @param {object} options
     *   Constructor options
     * @param {Array} options.results
     *   An array of UrlbarResult objects that will be the provider's results.
     * @param {string} [options.name]
     *   The provider's name.  Provider names should be unique.
     * @param {UrlbarUtils.PROVIDER_TYPE} [options.type]
     *   The provider's type.
     * @param {number} [options.priority]
     *   The provider's priority.  Built-in providers have a priority of zero.
     * @param {number} [options.addTimeout]
     *   If non-zero, each result will be added on this timeout.  If zero, all
     *   results will be added immediately and synchronously.
     *   If there's no results, the query will be completed after this timeout.
     * @param {Function} [options.onCancel]
     *   If given, a function that will be called when the provider's cancelQuery
     *   method is called.
     * @param {Function} [options.onSelection]
     *   If given, a function that will be called when
     *   {@link UrlbarView.#selectElement} method is called.
     * @param {Function} [options.onEngagement]
     *   If given, a function that will be called when engagement.
     */
    constructor({ results, name, type, priority, addTimeout, onCancel, onSelection, onEngagement, }?: {
        results: any[];
        name?: string;
        type?: UrlbarUtils.PROVIDER_TYPE;
        priority?: number;
        addTimeout?: number;
        onCancel?: Function;
        onSelection?: Function;
        onEngagement?: Function;
    });
    _results: any[];
    _name: string;
    _type: UrlbarUtils.PROVIDER_TYPE;
    _priority: number;
    _addTimeout: number;
    _onCancel: Function;
    _onSelection: Function;
    _onEngagement: Function;
    get name(): string;
    get type(): UrlbarUtils.PROVIDER_TYPE;
    getPriority(context: any): number;
    isActive(context: any): boolean;
    startQuery(context: any, addCallback: any): Promise<void>;
    cancelQuery(context: any): void;
    onSelection(result: any, element: any): void;
    onEngagement(state: any, queryContext: any, details: any, controller: any): void;
}
export {};
