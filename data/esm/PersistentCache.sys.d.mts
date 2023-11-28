/**
 * A file (disk) based persistent cache of a JSON serializable object.
 */
export class PersistentCache {
    /**
     * Create a cache object based on a name.
     *
     * @param {string} name Name of the cache. It will be used to create the filename.
     * @param {boolean} preload (optional). Whether the cache should be preloaded from file. Defaults to false.
     */
    constructor(name: string, preload?: boolean);
    name: string;
    _filename: string;
    /**
     * Set a value to be cached with the specified key.
     *
     * @param {string} key The cache key.
     * @param {object} value The data to be cached.
     */
    set(key: string, value: object): Promise<void>;
    /**
     * Get a value from the cache.
     *
     * @param {string} key (optional) The cache key. If not provided, we return the full cache.
     * @returns {object} The cached data.
     */
    get(key: string): object;
    /**
     * Load the cache into memory if it isn't already.
     */
    _load(): Promise<any>;
    _cache: Promise<any>;
    /**
     * Persist the cache to file.
     */
    _persist(data: any): Promise<void>;
}
