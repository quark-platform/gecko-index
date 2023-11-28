/**
 * A cache for tabs data.
 *
 * This cache implements a weak map from tabs (as XUL elements)
 * to tab data (as objects).
 *
 * Note that we should never cache private data, as:
 * - that data is used very seldom by SessionStore;
 * - caching private data in addition to public data is memory consuming.
 */
export const TabStateCache: Readonly<{
    /**
     * Retrieves cached data for a given |tab| or associated |browser|.
     *
     * @param permanentKey (object)
     *        The tab or browser to retrieve cached data for.
     * @return (object)
     *         The cached data stored for the given |tab|
     *         or associated |browser|.
     */
    get(permanentKey: any): any;
    /**
     * Updates cached data for a given |tab| or associated |browser|.
     *
     * @param permanentKey (object)
     *        The tab or browser belonging to the given tab data.
     * @param newData (object)
     *        The new data to be stored for the given |tab|
     *        or associated |browser|.
     */
    update(permanentKey: any, newData: any): void;
}>;
