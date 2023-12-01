export namespace SiteDataTestUtils {
    /**
     * Makes an origin have persistent data storage.
     *
     * @param {String} origin - the origin of the site to give persistent storage
     *
     * @returns a Promise that resolves when storage was persisted
     */
    function persist(origin: string, value?: uint32_t): Promise<any>;
    /**
     * Adds a new blob entry to a dummy indexedDB database for the specified origin.
     *
     * @param {String} origin - the origin of the site to add test data for
     * @param {Number} size [optional] - the size of the entry in bytes
     *
     * @returns a Promise that resolves when the data was added successfully.
     */
    function addToIndexedDB(origin: string, size?: number): Promise<any>;
    /**
     * Adds a new cookie for the specified origin or host + path + oa, with the
     * specified contents. The cookie will be valid for one day.
     * @param {object} options
     * @param {String} [options.origin] - Origin of the site to add test data for.
     * If set, overrides host, path and originAttributes args.
     * @param {String} [options.host] - Host of the site to add test data for.
     * @param {String} [options.path] - Path to set cookie for.
     * @param {Object} [options.originAttributes] - Object of origin attributes to
     * set cookie for.
     * @param {String} [options.name] - Cookie name
     * @param {String} [options.value] - Cookie value
     */
    function addToCookies({ origin, host, path, originAttributes, name, value, }: {
        origin?: string;
        host?: string;
        path?: string;
        originAttributes?: any;
        name?: string;
        value?: string;
    }): void;
    /**
     * Adds a new localStorage entry for the specified origin, with the specified contents.
     *
     * @param {String} origin - the origin of the site to add test data for
     * @param {String} [key] - the localStorage key
     * @param {String} [value] - the localStorage value
     */
    function addToLocalStorage(origin: string, key?: string, value?: string): void;
    /**
     * Checks whether the given origin is storing data in localStorage
     *
     * @param {String} origin - the origin of the site to check
     * @param {{key: String, value: String}[]} [testEntries] - An array of entries
     * to test for.
     *
     * @returns {Boolean} whether the origin has localStorage data
     */
    function hasLocalStorage(origin: string, testEntries?: {
        key: string;
        value: string;
    }[]): boolean;
    /**
     * Adds a new serviceworker with the specified path. Note that this
     * method will open a new tab at the domain of the SW path to that effect.
     *
     * @param {String} path - the path to the service worker to add.
     *
     * @returns a Promise that resolves when the service worker was registered
     */
    function addServiceWorker(path: string): any;
    function hasCookies(origin: any, testEntries?: any, testPBMCookies?: boolean): any;
    function hasIndexedDB(origin: any): Promise<any>;
    function _getCacheStorage(where: any, lci: any): nsICacheStorageType;
    function hasCacheEntry(path: any, where: any, lci?: nsILoadContextInfo): boolean;
    function addCacheEntry(path: any, where: any, lci?: nsILoadContextInfo): Promise<any>;
    /**
     * Checks whether the specified origin has registered ServiceWorkers.
     *
     * @param {String} origin - the origin of the site to check
     *
     * @returns {Boolean} whether or not the site has ServiceWorkers.
     */
    function hasServiceWorkers(origin: string): boolean;
    /**
     * Waits for a ServiceWorker to be registered.
     *
     * @param {String} the url of the ServiceWorker to wait for
     *
     * @returns a Promise that resolves when a ServiceWorker at the
     *          specified location has been registered.
     */
    function promiseServiceWorkerRegistered(url: any): Promise<any>;
    /**
     * Waits for a ServiceWorker to be unregistered.
     *
     * @param {String} the url of the ServiceWorker to wait for
     *
     * @returns a Promise that resolves when a ServiceWorker at the
     *          specified location has been unregistered.
     */
    function promiseServiceWorkerUnregistered(url: any): Promise<any>;
    /**
     * Gets the current quota usage for the specified origin.
     *
     * @returns a Promise that resolves to an integer with the total
     *          amount of disk usage by a given origin.
     */
    function getQuotaUsage(origin: any): Promise<any>;
    /**
     * Cleans up all site data.
     */
    function clear(): Promise<any>;
}
