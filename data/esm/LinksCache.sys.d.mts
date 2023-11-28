/**
 * Cache link results from a provided object property and refresh after some
 * amount of time has passed. Allows for migrating data from previously cached
 * links to the new links with the same url.
 */
export class LinksCache {
    /**
     * Create a links cache for a given object property.
     *
     * @param {object} linkObject Object containing the link property
     * @param {string} linkProperty Name of property on object to access
     * @param {array} properties Optional properties list to migrate to new links.
     * @param {function} shouldRefresh Optional callback receiving the old and new
     *                                 options to refresh even when not expired.
     */
    constructor(linkObject: object, linkProperty: string, properties?: any[], shouldRefresh?: Function);
    linkGetter: (options: any) => any;
    migrateProperties: any[];
    shouldRefresh: Function;
    /**
     * Clear the cached data.
     */
    clear(): void;
    cache: any;
    lastOptions: any;
    /**
     * Force the next request to update the cache.
     */
    expire(): void;
    /**
     * Request data and update the cache if necessary.
     *
     * @param {object} options Optional data to pass to the underlying method.
     * @returns {promise(array)} Links array with objects that can be modified.
     */
    request(options?: object): Promise<any>;
    lastUpdate: number;
}
