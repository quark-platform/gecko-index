/**
 * A remote settings server. Tested with the desktop and Rust remote settings
 * clients.
 */
export class RemoteSettingsServer {
    /**
     * The server must be started by calling `start()`.
     *
     * @param {object} options
     * @param {number} options.logLevel
     *   A `Log.Level` value from `Log.sys.mjs`. `Log.Level.Info` logs basic info
     *   on requests and responses like paths and status codes. Pass
     *   `Log.Level.Debug` to log more info like headers, response bodies, and
     *   added and removed records.
     */
    constructor({ logLevel }?: {
        logLevel: number;
    });
    /**
     * @returns {URL}
     *   The server's URL. Null when the server is stopped.
     */
    get url(): URL;
    /**
     * Starts the server and sets the `services.settings.server` pref to its
     * URL. The server's `url` property will be non-null on return.
     */
    start(): Promise<void>;
    /**
     * Stops the server and clears the `services.settings.server` pref. The
     * server's `url` property will be null on return.
     */
    stop(): Promise<void>;
    /**
     * Adds remote settings records to the server. Records may have attachments;
     * see the param doc below.
     *
     * @param {object} options
     * @param {string} options.bucket
     * @param {string} options.collection
     * @param {Array} options.records
     *   Each object in this array should be a realistic remote settings record
     *   with the following exceptions:
     *
     *   - `record.id` will be generated if it's undefined.
     *   - `record.last_modified` will be set to the `#lastModified` property of
     *     the server if it's undefined.
     *   - `record.attachment`, if defined, should be the attachment itself and
     *     not its metadata. The server will automatically create some dummy
     *     metadata. Currently the only supported attachment type is plain
     *     JSON'able objects that the server will convert to JSON in responses.
     */
    addRecords({ bucket, collection, records }: {
        bucket: string;
        collection: string;
        records: any[];
    }): Promise<void>;
    /**
     * Marks records as deleted. Deleted records will still be returned in
     * responses, but they'll have a `deleted = true` property. Their attachments
     * will be deleted immediately, however.
     *
     * @param {object} filter
     *   If null, all records will be marked as deleted. Otherwise only records
     *   that match the filter will be marked as deleted. For a given record, each
     *   value in the filter object will be compared to the value with the same
     *   key in the record. If all values are the same, the record will be
     *   removed. Examples:
     *
     *   To remove remove records whose `type` key has the value "data":
     *   `{ type: "data" }
     *
     *   To remove remove records whose `type` key has the value "data" and whose
     *   `last_modified` key has the value 1234:
     *   `{ type: "data", last_modified: 1234 }
     */
    removeRecords(filter?: object): void;
    /**
     * Removes all existing records and adds the given records to the server.
     *
     * @param {object} options
     * @param {string} options.bucket
     * @param {string} options.collection
     * @param {Array} options.records
     *   See `addRecords()`.
     */
    setRecords({ bucket, collection, records }: {
        bucket: string;
        collection: string;
        records: any[];
    }): Promise<void>;
    /**
     * `nsIHttpRequestHandler` callback from the backing server. Handles a
     * request.
     *
     * @param {nsIHttpRequest} request
     * @param {nsIHttpResponse} response
     */
    handle(request: nsIHttpRequest, response: nsIHttpResponse): void;
    #private;
}
