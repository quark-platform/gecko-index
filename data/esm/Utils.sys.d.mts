export namespace Utils {
    export const SERVER_URL: any;
    export let CHANGES_PATH: string;
    export { log };
    export const shouldSkipRemoteActivityDueToTests: boolean;
    export const CERT_CHAIN_ROOT_IDENTIFIER: 2 | 1 | 3 | 4 | 6;
    export const LOAD_DUMPS: any;
    export const PREVIEW_MODE: any;
    /**
     * Internal method to enable pulling data from preview buckets.
     * @param enabled
     */
    export function enablePreviewMode(enabled: any): void;
    /**
     * Returns the actual bucket name to be used. When preview mode is enabled,
     * this adds the *preview* suffix.
     *
     * See also `SharedUtils.loadJSONDump()` which strips the preview suffix to identify
     * the packaged JSON file.
     *
     * @param bucketName the client bucket
     * @returns the final client bucket depending whether preview mode is enabled.
     */
    export function actualBucketName(bucketName: any): any;
    export const isOffline: bool;
    /**
     * A wrapper around `ServiceRequest` that behaves like `fetch()`.
     *
     * Use this in order to leverage the `beConservative` flag, for
     * example to avoid using HTTP3 to fetch critical data.
     *
     * @param input a resource
     * @param init request options
     * @returns a Response object
     */
    export function fetch(input: any, init?: {}): Promise<any>;
    /**
     * Check if local data exist for the specified client.
     *
     * @param {RemoteSettingsClient} client
     * @return {bool} Whether it exists or not.
     */
    export function hasLocalData(client: RemoteSettingsClient): bool;
    /**
     * Check if we ship a JSON dump for the specified bucket and collection.
     *
     * @param {String} bucket
     * @param {String} collection
     * @return {bool} Whether it is present or not.
     */
    export function hasLocalDump(bucket: string, collection: string): bool;
    /**
     * Look up the last modification time of the JSON dump.
     *
     * @param {String} bucket
     * @param {String} collection
     * @return {int} The last modification time of the dump. -1 if non-existent.
     */
    export function getLocalDumpLastModified(bucket: string, collection: string): int;
    /**
     * Fetch the list of remote collections and their timestamp.
     * ```
     *   {
     *     "timestamp": 1486545678,
     *     "changes":[
     *       {
     *         "host":"kinto-ota.dev.mozaws.net",
     *         "last_modified":1450717104423,
     *         "bucket":"blocklists",
     *         "collection":"certificates"
     *       },
     *       ...
     *     ],
     *     "metadata": {}
     *   }
     * ```
     * @param {String} serverUrl         The server URL (eg. `https://server.org/v1`)
     * @param {int}    expectedTimestamp The timestamp that the server is supposed to return.
     *                                   We obtained it from the Megaphone notification payload,
     *                                   and we use it only for cache busting (Bug 1497159).
     * @param {String} lastEtag          (optional) The Etag of the latest poll to be matched
     *                                   by the server (eg. `"123456789"`).
     * @param {Object} filters
     */
    export function fetchLatestChanges(serverUrl: string, options?: {}): Promise<{
        changes: any;
        currentEtag: string;
        serverTimeMillis: number;
        backoffSeconds: number;
        ageSeconds: number;
    }>;
    /**
     * Test if a single object matches all given filters.
     *
     * @param  {Object} filters  The filters object.
     * @param  {Object} entry    The object to filter.
     * @return {Boolean}
     */
    export function filterObject(filters: any, entry: any): boolean;
    /**
     * Sorts records in a list according to a given ordering.
     *
     * @param  {String} order The ordering, eg. `-last_modified`.
     * @param  {Array}  list  The collection to order.
     * @return {Array}
     */
    export function sortObjects(order: string, list: any[]): any[];
}
declare const log: any;
export {};
