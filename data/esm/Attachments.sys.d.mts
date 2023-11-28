export class Downloader {
    static get DownloadError(): typeof DownloadError;
    static get BadContentError(): typeof BadContentError;
    static get ServerInfoError(): typeof ServerInfoError;
    static _RESOURCE_BASE_URL: string;
    constructor(...folders: any[]);
    folders: any[];
    _cdnURLs: {};
    /**
     * @returns {Object} An object with async "get", "set" and "delete" methods.
     *                   The keys are strings, the values may be any object that
     *                   can be stored in IndexedDB (including Blob).
     */
    get cacheImpl(): any;
    /**
     * Download attachment and return the result together with the record.
     * If the requested record cannot be downloaded and fallbacks are enabled, the
     * returned attachment may have a different record than the input record.
     *
     * @param {Object} record A Remote Settings entry with attachment.
     *                        If omitted, the attachmentId option must be set.
     * @param {Object} options Some download options.
     * @param {Number} options.retries Number of times download should be retried (default: `3`)
     * @param {Boolean} options.checkHash Check content integrity (default: `true`)
     * @param {string} options.attachmentId The attachment identifier to use for
     *                                      caching and accessing the attachment.
     *                                      (default: `record.id`)
     * @param {Boolean} options.fallbackToCache Return the cached attachment when the
     *                                          input record cannot be fetched.
     *                                          (default: `false`)
     * @param {Boolean} options.fallbackToDump Use the remote settings dump as a
     *                                         potential source of the attachment.
     *                                         (default: `false`)
     * @throws {Downloader.DownloadError} if the file could not be fetched.
     * @throws {Downloader.BadContentError} if the downloaded content integrity is not valid.
     * @throws {Downloader.ServerInfoError} if the server response is not valid.
     * @throws {NetworkError} if fetching the server infos and fetching the attachment fails.
     * @returns {Object} An object with two properties:
     *   `buffer` `ArrayBuffer`: the file content.
     *   `record` `Object`: record associated with the attachment.
     *   `_source` `String`: identifies the source of the result. Used for testing.
     */
    download(record: any, options: {
        retries: number;
        checkHash: boolean;
        attachmentId: string;
        fallbackToCache: boolean;
        fallbackToDump: boolean;
    }): any;
    /**
     * Is the record downloaded? This does not check if it was bundled.
     *
     * @param record A Remote Settings entry with attachment.
     * @returns {Promise<boolean>}
     */
    isDownloaded(record: any): Promise<boolean>;
    /**
     * Delete the record attachment downloaded locally.
     * No-op if the attachment does not exist.
     *
     * @param record A Remote Settings entry with attachment.
     * @param {Object} options Some options.
     * @param {string} options.attachmentId The attachment identifier to use for
     *                                      accessing and deleting the attachment.
     *                                      (default: `record.id`)
     */
    deleteDownloaded(record: any, options: {
        attachmentId: string;
    }): Promise<any>;
    /**
     * Clear the cache from obsolete downloaded attachments.
     *
     * @param {Array<String>} excludeIds List of attachments IDs to exclude from pruning.
     */
    prune(excludeIds: Array<string>): Promise<any>;
    /**
     * @deprecated See https://bugzilla.mozilla.org/show_bug.cgi?id=1634127
     *
     * Download the record attachment into the local profile directory
     * and return a file:// URL that points to the local path.
     *
     * No-op if the file was already downloaded and not corrupted.
     *
     * @param {Object} record A Remote Settings entry with attachment.
     * @param {Object} options Some download options.
     * @param {Number} options.retries Number of times download should be retried (default: `3`)
     * @throws {Downloader.DownloadError} if the file could not be fetched.
     * @throws {Downloader.BadContentError} if the downloaded file integrity is not valid.
     * @throws {Downloader.ServerInfoError} if the server response is not valid.
     * @throws {NetworkError} if fetching the attachment fails.
     * @returns {String} the absolute file path to the downloaded attachment.
     */
    downloadToDisk(record: any, options?: {
        retries: number;
    }): string;
    /**
     * Download the record attachment and return its content as bytes.
     *
     * @param {Object} record A Remote Settings entry with attachment.
     * @param {Object} options Some download options.
     * @param {Number} options.retries Number of times download should be retried (default: `3`)
     * @param {Boolean} options.checkHash Check content integrity (default: `true`)
     * @throws {Downloader.DownloadError} if the file could not be fetched.
     * @throws {Downloader.BadContentError} if the downloaded content integrity is not valid.
     * @returns {ArrayBuffer} the file content.
     */
    downloadAsBytes(record: any, options?: {
        retries: number;
        checkHash: boolean;
    }): ArrayBuffer;
    /**
     * @deprecated See https://bugzilla.mozilla.org/show_bug.cgi?id=1634127
     *
     * Delete the record attachment downloaded locally.
     * This is the counterpart of `downloadToDisk()`.
     * Use `deleteDownloaded()` if `download()` was used to retrieve
     * the attachment.
     *
     * No-op if the related file does not exist.
     *
     * @param record A Remote Settings entry with attachment.
     */
    deleteFromDisk(record: any): Promise<void>;
    _baseAttachmentsURL(): Promise<any>;
    _fetchAttachment(url: any): Promise<any>;
    _readAttachmentCache(attachmentId: any): Promise<{
        record: any;
        readBuffer(): Promise<any>;
    }>;
    _readAttachmentDump(attachmentId: any): Promise<{
        record: any;
        readBuffer(): Promise<ArrayBuffer>;
    }>;
    _makeDirs(): Promise<void>;
    _rmDirs(): Promise<void>;
}
declare class DownloadError extends Error {
    constructor(url: any, resp: any);
    resp: any;
}
declare class BadContentError extends Error {
    constructor(path: any);
}
declare class ServerInfoError extends Error {
    constructor(error: any);
    original: any;
}
export {};
