/**
 * Class used to create the provider.
 */
export class UrlbarProviderOpenTabs {
    /**
     * Tracks whether the memory tables have been initialized yet. Until this
     * happens tabs are only stored in openTabs and later copied over to the
     * memory table.
     */
    static memoryTableInitialized: boolean;
    /**
     * Maps the open tabs by userContextId.
     */
    static _openTabs: Map<any, any>;
    /**
     * Return urls that is opening on given user context id.
     *
     * @param {integer} userContextId Containers user context id
     * @param {boolean} isInPrivateWindow In private browsing window or not
     * @returns {Array} urls
     */
    static getOpenTabs(userContextId: integer, isInPrivateWindow: boolean): any[];
    /**
     * Return userContextId that will be used in moz_openpages_temp table.
     *
     * @param {integer} userContextId Containers user context id
     * @param {boolean} isInPrivateWindow In private browsing window or not
     * @returns {interger} userContextId
     */
    static getUserContextIdForOpenPagesTable(userContextId: integer, isInPrivateWindow: boolean): interger;
    /**
     * Copy over cached open tabs to the memory table once the Urlbar
     * connection has been initialized.
     */
    static promiseDBPopulated: any;
    /**
     * Registers a tab as open.
     *
     * @param {string} url Address of the tab
     * @param {integer} userContextId Containers user context id
     * @param {boolean} isInPrivateWindow In private browsing window or not
     */
    static registerOpenTab(url: string, userContextId: integer, isInPrivateWindow: boolean): Promise<void>;
    /**
     * Unregisters a previously registered open tab.
     *
     * @param {string} url Address of the tab
     * @param {integer} userContextId Containers user context id
     * @param {boolean} isInPrivateWindow In private browsing window or not
     */
    static unregisterOpenTab(url: string, userContextId: integer, isInPrivateWindow: boolean): Promise<void>;
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
     * Starts querying.
     *
     * @param {object} queryContext The query context object
     * @param {Function} addCallback Callback invoked by the provider to add a new
     *        match.
     * @returns {Promise} resolved when the query stops.
     */
    startQuery(queryContext: object, addCallback: Function): Promise<any>;
}
