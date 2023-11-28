export const UrlbarProvidersManager: ProvidersManager;
/**
 * Class used to create a manager.
 * The manager is responsible to keep a list of providers, instantiate query
 * objects and pass those to the providers.
 */
declare class ProvidersManager {
    providers: any[];
    queries: Map<any, any>;
    interruptLevel: number;
    muxers: Map<any, any>;
    CHUNK_HEURISTIC_RESULTS_DELAY_MS: number;
    CHUNK_OTHER_RESULTS_DELAY_MS: number;
    /**
     * Registers a provider object with the manager.
     *
     * @param {object} provider
     *   The provider object to register.
     */
    registerProvider(provider: object): void;
    /**
     * Unregisters a previously registered provider object.
     *
     * @param {object} provider
     *   The provider object to unregister.
     */
    unregisterProvider(provider: object): void;
    /**
     * Returns the provider with the given name.
     *
     * @param {string} name
     *   The provider name.
     * @returns {UrlbarProvider} The provider.
     */
    getProvider(name: string): UrlbarProvider;
    /**
     * Registers a muxer object with the manager.
     *
     * @param {object} muxer
     *   a UrlbarMuxer object
     */
    registerMuxer(muxer: object): void;
    /**
     * Unregisters a previously registered muxer object.
     *
     * @param {object} muxer
     *   a UrlbarMuxer object or name.
     */
    unregisterMuxer(muxer: object): void;
    /**
     * Starts querying.
     *
     * @param {object} queryContext
     *   The query context object
     * @param {object} [controller]
     *   a UrlbarController instance
     */
    startQuery(queryContext: object, controller?: object): Promise<void>;
    /**
     * Cancels a running query.
     *
     * @param {object} queryContext The query context object
     */
    cancelQuery(queryContext: object): void;
    /**
     * A provider can use this util when it needs to run a SQL query that can't
     * be interrupted. Otherwise, when a query is canceled any running SQL query
     * is interrupted abruptly.
     *
     * @param {Function} taskFn a Task to execute in the critical section.
     */
    runInCriticalSection(taskFn: Function): Promise<void>;
    /**
     * Notifies all providers when the user starts and ends an engagement with the
     * urlbar.  For details on parameters, see UrlbarProvider.onEngagement().
     *
     * @param {string} state
     *   The state of the engagement, one of: start, engagement, abandonment,
     *   discard
     * @param {UrlbarQueryContext} queryContext
     *   The engagement's query context, if available.
     * @param {object} details
     *   An object that describes the search string and the picked result, if any.
     * @param {UrlbarController} controller
     *   The controller associated with the engagement
     */
    notifyEngagementChange(state: string, queryContext: UrlbarQueryContext, details: object, controller: UrlbarController): void;
}
export {};
