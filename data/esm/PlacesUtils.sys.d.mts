export namespace PlacesUtils {
    namespace metadata {
        export let cache: Map<any, any>;
        export let jsonPrefix: string;
        /**
         * Returns the value associated with a metadata key.
         *
         * @param  {String} key
         *         The metadata key to look up.
         * @param  {String|Object|Array} defaultValue
         *         Optional. The default value to return if the value is not present,
         *         or cannot be parsed.
         * @resolves {*}
         *         The value associated with the key, or the defaultValue if there is one.
         * @rejects
         *         Rejected if the value is not found or it cannot be parsed
         *         and there is no defaultValue.
         */
        export function get(key: string, defaultValue: any): Promise<any>;
        /**
         * Sets the value for a metadata key.
         *
         * @param {String} key
         *        The metadata key to update.
         * @param {*}
         *        The value to associate with the key.
         */
        export function set(key: string, value: any): Promise<any>;
        /**
         * Sets the value for multiple keys.
         *
         * @param {Map} pairs
         *        The metadata keys to update, with their value.
         */
        export function setMany(pairs: Map<any, any>): Promise<any>;
        /**
         * Removes the values for the given metadata keys.
         *
         * @param {String...}
         *        One or more metadata keys to remove.
         */
        function _delete(...keys: any[]): Promise<any>;
        export { _delete as delete };
        export function getWithConnection(db: any, key: any, defaultValue: any): Promise<any>;
        export function setWithConnection(db: any, pairs: any): Promise<void>;
        export function deleteWithConnection(db: any, ...keys: any[]): Promise<void>;
        export function canonicalizeKey(key: any): string;
        export function _base64Encode(str: any): string;
        export function _base64Decode(str: any): string;
    }
    namespace keywords {
        /**
         * Fetches a keyword entry based on keyword or URL.
         *
         * @param keywordOrEntry
         *        Either the keyword to fetch or an entry providing keyword
         *        or url property to find keywords for.  If both properties are set,
         *        this returns their intersection.
         * @param onResult [optional]
         *        Callback invoked for each found entry.
         * @return {Promise}
         * @resolves to an object in the form: { keyword, url, postData },
         *           or null if a keyword entry was not found.
         */
        function fetch(keywordOrEntry: any, onResult?: any): Promise<any>;
        /**
         * Adds a new keyword and postData for the given URL.
         *
         * @param keywordEntry
         *        An object describing the keyword to insert, in the form:
         *        {
         *          keyword: non-empty string,
         *          url: URL or href to associate to the keyword,
         *          postData: optional POST data to associate to the keyword
         *          source: The change source, forwarded to all bookmark observers.
         *            Defaults to nsINavBookmarksService::SOURCE_DEFAULT.
         *        }
         * @note Do not define a postData property if there isn't any POST data.
         *       Defining an empty string for POST data is equivalent to not having it.
         * @resolves when the addition is complete.
         */
        function insert(keywordEntry: any): Promise<any>;
        /**
         * Removes a keyword.
         *
         * @param keyword
         *        The keyword to remove.
         * @return {Promise}
         * @resolves when the removal is complete.
         */
        function remove(keywordOrEntry: any): Promise<any>;
        /**
         * Moves all (keyword, POST data) pairs from one URL to another, and fires
         * observer notifications for all affected bookmarks. If the destination URL
         * already has keywords, they will be removed and replaced with the source
         * URL's keywords.
         *
         * @param oldURL
         *        The source URL.
         * @param newURL
         *        The destination URL.
         * @param source
         *        The change source, forwarded to all bookmark observers.
         * @return {Promise}
         * @resolves when all keywords have been moved to the destination URL.
         */
        function reassign(oldURL: any, newURL: any, source?: any): Promise<any>;
        /**
         * Removes all orphaned keywords from the given URLs. Orphaned keywords are
         * associated with URLs that are no longer bookmarked. If a given URL is still
         * bookmarked, its keywords will not be removed.
         *
         * @param urls
         *        A list of URLs to check for orphaned keywords.
         * @return {Promise}
         * @resolves when all keywords have been removed from URLs that are no longer
         *           bookmarked.
         */
        function removeFromURLsIfNotBookmarked(urls: any): Promise<any>;
        /**
         * Removes all keywords from all URLs.
         *
         * @return {Promise}
         * @resolves when all keywords have been removed.
         */
        function eraseEverything(): Promise<any>;
        /**
         * Invalidates the keywords cache, leaving all existing keywords in place.
         * The cache will be repopulated on the next `PlacesUtils.keywords.*` call.
         *
         * @return {Promise}
         * @resolves when the cache has been cleared.
         */
        function invalidateCachedKeywords(): Promise<any>;
    }
}
