export class KintoHttpClient extends KintoClientBase {
    constructor(remote: any, options?: {});
}
export namespace KintoHttpClient {
    export { errors };
}
/**
 * High level HTTP client for the Kinto API.
 *
 * @example
 * const client = new KintoClient("https://demo.kinto-storage.org/v1");
 * client.bucket("default")
 *    .collection("my-blog")
 *    .createRecord({title: "First article"})
 *   .then(console.log.bind(console))
 *   .catch(console.error.bind(console));
 */
declare class KintoClientBase {
    /**
     * Constructor.
     *
     * @param  {String}       remote  The remote URL.
     * @param  {Object}       [options={}]                  The options object.
     * @param  {Boolean}      [options.safe=true]           Adds concurrency headers to every requests.
     * @param  {EventEmitter} [options.events=EventEmitter] The events handler instance.
     * @param  {Object}       [options.headers={}]          The key-value headers to pass to each request.
     * @param  {Object}       [options.retry=0]             Number of retries when request fails (default: 0)
     * @param  {String}       [options.bucket="default"]    The default bucket to use.
     * @param  {String}       [options.requestMode="cors"]  The HTTP request mode (from ES6 fetch spec).
     * @param  {Number}       [options.timeout=null]        The request timeout in ms, if any.
     * @param  {Function}     [options.fetchFunc=fetch]     The function to be used to execute HTTP requests.
     */
    constructor(remote: string, options?: {
        safe?: boolean;
        events?: EventEmitter;
        headers?: any;
        retry?: any;
        bucket?: string;
        requestMode?: string;
        timeout?: number;
        fetchFunc?: Function;
    });
    _backoffReleaseTime: any;
    _requests: any[];
    _isBatch: boolean;
    _retry: any;
    _safe: boolean;
    _headers: any;
    /**
     * @ignore
     */
    set remote(url: string);
    /**
     * The remote endpoint base URL. Setting the value will also extract and
     * validate the version.
     * @type {String}
     */
    get remote(): string;
    /**
     * Current server information.
     * @ignore
     * @type {Object|null}
     */
    serverInfo: any | null;
    /**
     * The event emitter instance. Should comply with the `EventEmitter`
     * interface.
     * @ignore
     * @type {Class}
     */
    events: Class;
    endpoints: any;
    /**
     * The HTTP instance.
     * @ignore
     * @type {HTTP}
     */
    http: HTTP;
    _remote: string;
    _version: string;
    /**
     * The current server protocol version, eg. `v1`.
     * @type {String}
     */
    get version(): string;
    /**
     * Backoff remaining time, in milliseconds. Defaults to zero if no backoff is
     * ongoing.
     *
     * @type {Number}
     */
    get backoff(): number;
    /**
     * Registers HTTP events.
     * @private
     */
    private _registerHTTPEvents;
    /**
     * Retrieve a bucket object to perform operations on it.
     *
     * @param  {String}  name              The bucket name.
     * @param  {Object}  [options={}]      The request options.
     * @param  {Boolean} [options.safe]    The resulting safe option.
     * @param  {Number}  [options.retry]   The resulting retry option.
     * @param  {Object}  [options.headers] The extended headers object option.
     * @return {Bucket}
     */
    bucket(name: string, options?: {
        safe?: boolean;
        retry?: number;
        headers?: any;
    }): Bucket;
    /**
     * Set client "headers" for every request, updating previous headers (if any).
     *
     * @param {Object} headers The headers to merge with existing ones.
     */
    setHeaders(headers: any): void;
    /**
     * Get the value of "headers" for a given request, merging the
     * per-request headers with our own "default" headers.
     *
     * Note that unlike other options, headers aren't overridden, but
     * merged instead.
     *
     * @private
     * @param {Object} options The options for a request.
     * @returns {Object}
     */
    private _getHeaders;
    /**
     * Get the value of "safe" for a given request, using the
     * per-request option if present or falling back to our default
     * otherwise.
     *
     * @private
     * @param {Object} options The options for a request.
     * @returns {Boolean}
     */
    private _getSafe;
    /**
     * As _getSafe, but for "retry".
     *
     * @private
     */
    private _getRetry;
    /**
     * Retrieves the server's "hello" endpoint. This endpoint reveals
     * server capabilities and settings as well as telling the client
     * "who they are" according to their given authorization headers.
     *
     * @private
     * @param  {Object}  [options={}] The request options.
     * @param  {Object}  [options.headers={}] Headers to use when making
     *     this request.
     * @param  {Number}  [options.retry=0]    Number of retries to make
     *     when faced with transient errors.
     * @return {Promise<Object, Error>}
     */
    private _getHello;
    /**
     * Retrieves server information and persist them locally. This operation is
     * usually performed a single time during the instance lifecycle.
     *
     * @param  {Object}  [options={}] The request options.
     * @param  {Number}  [options.retry=0]    Number of retries to make
     *     when faced with transient errors.
     * @return {Promise<Object, Error>}
     */
    fetchServerInfo(options?: {
        retry?: number;
    }): Promise<any, Error>;
    /**
     * Retrieves Kinto server settings.
     *
     * @param  {Object}  [options={}] The request options.
     * @param  {Number}  [options.retry=0]    Number of retries to make
     *     when faced with transient errors.
     * @return {Promise<Object, Error>}
     */
    fetchServerSettings(options?: {
        retry?: number;
    }): Promise<any, Error>;
    /**
     * Retrieve server capabilities information.
     *
     * @param  {Object}  [options={}] The request options.
     * @param  {Number}  [options.retry=0]    Number of retries to make
     *     when faced with transient errors.
     * @return {Promise<Object, Error>}
     */
    fetchServerCapabilities(options?: {
        retry?: number;
    }): Promise<any, Error>;
    /**
     * Retrieve authenticated user information.
     *
     * @param  {Object}  [options={}] The request options.
     * @param  {Object}  [options.headers={}] Headers to use when making
     *     this request.
     * @param  {Number}  [options.retry=0]    Number of retries to make
     *     when faced with transient errors.
     * @return {Promise<Object, Error>}
     */
    fetchUser(options?: {
        headers?: any;
        retry?: number;
    }): Promise<any, Error>;
    /**
     * Retrieve authenticated user information.
     *
     * @param  {Object}  [options={}] The request options.
     * @param  {Number}  [options.retry=0]    Number of retries to make
     *     when faced with transient errors.
     * @return {Promise<Object, Error>}
     */
    fetchHTTPApiVersion(options?: {
        retry?: number;
    }): Promise<any, Error>;
    /**
     * Process batch requests, chunking them according to the batch_max_requests
     * server setting when needed.
     *
     * @param  {Array}  requests     The list of batch subrequests to perform.
     * @param  {Object} [options={}] The options object.
     * @return {Promise<Object, Error>}
     */
    _batchRequests(requests: any[], options?: any): Promise<any, Error>;
    /**
     * Sends batch requests to the remote server.
     *
     * Note: Reserved for internal use only.
     *
     * @ignore
     * @param  {Function} fn                        The function to use for describing batch ops.
     * @param  {Object}   [options={}]              The options object.
     * @param  {Boolean}  [options.safe]            The safe option.
     * @param  {Number}   [options.retry]           The retry option.
     * @param  {String}   [options.bucket]          The bucket name option.
     * @param  {String}   [options.collection]      The collection name option.
     * @param  {Object}   [options.headers]         The headers object option.
     * @param  {Boolean}  [options.aggregate=false] Produces an aggregated result object.
     * @return {Promise<Object, Error>}
     */
    batch(fn: Function, options?: {
        safe?: boolean;
        retry?: number;
        bucket?: string;
        collection?: string;
        headers?: any;
        aggregate?: boolean;
    }): Promise<any, Error>;
    execute(request: any, options?: {}): Promise<any>;
    /**
     * Perform an operation with a given HTTP method on some pages from
     * a paginated list, following the `next-page` header automatically
     * until we have processed the requested number of pages. Return a
     * response with a `.next()` method that can be called to perform
     * the requested HTTP method on more results.
     *
     * @private
     * @param  {String}  path
     *     The path to make the request to.
     * @param  {Object}  params
     *     The parameters to use when making the request.
     * @param  {String}  [params.sort="-last_modified"]
     *     The sorting order to use when doing operation on pages.
     * @param  {Object}  [params.filters={}]
     *     The filters to send in the request.
     * @param  {Number}  [params.limit=undefined]
     *     The limit to send in the request. Undefined means no limit.
     * @param  {Number}  [params.pages=undefined]
     *     The number of pages to operate on. Undefined means one page. Pass
     *     Infinity to operate on everything.
     * @param  {String}  [params.since=undefined]
     *     The ETag from which to start doing operation on pages.
     * @param  {Array}   [params.fields]
     *     Limit response to just some fields.
     * @param  {Object}  [options={}]
     *     Additional request-level parameters to use in all requests.
     * @param  {Object}  [options.headers={}]
     *     Headers to use during all requests.
     * @param  {Number}  [options.retry=0]
     *     Number of times to retry each request if the server responds
     *     with Retry-After.
     * @param  {String}  [options.method="GET"]
     *     The method to use in the request.
     */
    private paginatedOperation;
    /**
     * Fetch some pages from a paginated list, following the `next-page`
     * header automatically until we have fetched the requested number
     * of pages. Return a response with a `.next()` method that can be
     * called to fetch more results.
     *
     * @private
     * @param  {String}  path
     *     The path to make the request to.
     * @param  {Object}  params
     *     The parameters to use when making the request.
     * @param  {String}  [params.sort="-last_modified"]
     *     The sorting order to use when fetching.
     * @param  {Object}  [params.filters={}]
     *     The filters to send in the request.
     * @param  {Number}  [params.limit=undefined]
     *     The limit to send in the request. Undefined means no limit.
     * @param  {Number}  [params.pages=undefined]
     *     The number of pages to fetch. Undefined means one page. Pass
     *     Infinity to fetch everything.
     * @param  {String}  [params.since=undefined]
     *     The ETag from which to start fetching.
     * @param  {Array}   [params.fields]
     *     Limit response to just some fields.
     * @param  {Object}  [options={}]
     *     Additional request-level parameters to use in all requests.
     * @param  {Object}  [options.headers={}]
     *     Headers to use during all requests.
     * @param  {Number}  [options.retry=0]
     *     Number of times to retry each request if the server responds
     *     with Retry-After.
     */
    private paginatedList;
    /**
     * Delete multiple objects, following the pagination if the number of
     * objects exceeds the page limit until we have deleted the requested
     * number of pages. Return a response with a `.next()` method that can
     * be called to delete more results.
     *
     * @private
     * @param  {String}  path
     *     The path to make the request to.
     * @param  {Object}  params
     *     The parameters to use when making the request.
     * @param  {String}  [params.sort="-last_modified"]
     *     The sorting order to use when deleting.
     * @param  {Object}  [params.filters={}]
     *     The filters to send in the request.
     * @param  {Number}  [params.limit=undefined]
     *     The limit to send in the request. Undefined means no limit.
     * @param  {Number}  [params.pages=undefined]
     *     The number of pages to delete. Undefined means one page. Pass
     *     Infinity to delete everything.
     * @param  {String}  [params.since=undefined]
     *     The ETag from which to start deleting.
     * @param  {Array}   [params.fields]
     *     Limit response to just some fields.
     * @param  {Object}  [options={}]
     *     Additional request-level parameters to use in all requests.
     * @param  {Object}  [options.headers={}]
     *     Headers to use during all requests.
     * @param  {Number}  [options.retry=0]
     *     Number of times to retry each request if the server responds
     *     with Retry-After.
     */
    private paginatedDelete;
    /**
     * Lists all permissions.
     *
     * @param  {Object} [options={}]      The options object.
     * @param  {Object} [options.headers={}] Headers to use when making
     *     this request.
     * @param  {Number} [options.retry=0]    Number of retries to make
     *     when faced with transient errors.
     * @return {Promise<Object[], Error>}
     */
    listPermissions(options?: {
        headers?: any;
        retry?: number;
    }): Promise<any[], Error>;
    /**
     * Retrieves the list of buckets.
     *
     * @param  {Object} [options={}]      The options object.
     * @param  {Object} [options.headers={}] Headers to use when making
     *     this request.
     * @param  {Number} [options.retry=0]    Number of retries to make
     *     when faced with transient errors.
     * @param  {Object} [options.filters={}] The filters object.
     * @param  {Array}  [options.fields]     Limit response to
     *     just some fields.
     * @return {Promise<Object[], Error>}
     */
    listBuckets(options?: {
        headers?: any;
        retry?: number;
        filters?: any;
        fields?: any[];
    }): Promise<any[], Error>;
    /**
     * Creates a new bucket on the server.
     *
     * @param  {String|null}  id                The bucket name (optional).
     * @param  {Object}       [options={}]      The options object.
     * @param  {Boolean}      [options.data]    The bucket data option.
     * @param  {Boolean}      [options.safe]    The safe option.
     * @param  {Object}       [options.headers] The headers object option.
     * @param  {Number}       [options.retry=0] Number of retries to make
     *     when faced with transient errors.
     * @return {Promise<Object, Error>}
     */
    createBucket(id: string | null, options?: {
        data?: boolean;
        safe?: boolean;
        headers?: any;
        retry?: number;
    }): Promise<any, Error>;
    /**
     * Deletes a bucket from the server.
     *
     * @ignore
     * @param  {Object|String} bucket                  The bucket to delete.
     * @param  {Object}        [options={}]            The options object.
     * @param  {Boolean}       [options.safe]          The safe option.
     * @param  {Object}        [options.headers]       The headers object option.
     * @param  {Number}        [options.retry=0]       Number of retries to make
     *     when faced with transient errors.
     * @param  {Number}        [options.last_modified] The last_modified option.
     * @return {Promise<Object, Error>}
     */
    deleteBucket(bucket: any | string, options?: {
        safe?: boolean;
        headers?: any;
        retry?: number;
        last_modified?: number;
    }): Promise<any, Error>;
    /**
     * Deletes buckets.
     *
     * @param  {Object} [options={}]             The options object.
     * @param  {Boolean} [options.safe]          The safe option.
     * @param  {Object} [options.headers={}]     Headers to use when making
     *     this request.
     * @param  {Number} [options.retry=0]        Number of retries to make
     *     when faced with transient errors.
     * @param  {Object} [options.filters={}]     The filters object.
     * @param  {Array}  [options.fields]         Limit response to
     *     just some fields.
     * @param  {Number}  [options.last_modified] The last_modified option.
     * @return {Promise<Object[], Error>}
     */
    deleteBuckets(options?: {
        safe?: boolean;
        headers?: any;
        retry?: number;
        filters?: any;
        fields?: any[];
        last_modified?: number;
    }): Promise<any[], Error>;
    createAccount(username: any, password: any): Promise<any>;
}
declare var errors: Readonly<{
    __proto__: any;
    NetworkTimeoutError: typeof NetworkTimeoutError;
    ServerResponse: typeof ServerResponse;
    UnparseableResponseError: typeof UnparseableResponseError;
    default: {
        104: string;
        105: string;
        106: string;
        107: string;
        108: string;
        109: string;
        110: string;
        111: string;
        112: string;
        113: string;
        114: string;
        115: string;
        116: string;
        117: string;
        121: string;
        122: string;
        201: string;
        202: string;
        999: string;
    };
}>;
/**
 * Enhanced HTTP client for the Kinto protocol.
 * @private
 */
declare class HTTP {
    /**
     * Default HTTP request headers applied to each outgoing request.
     *
     * @type {Object}
     */
    static get DEFAULT_REQUEST_HEADERS(): any;
    /**
     * Default options.
     *
     * @type {Object}
     */
    static get defaultOptions(): any;
    /**
     * Constructor.
     *
     * @param {EventEmitter} events                       The event handler.
     * @param {Object}       [options={}}                 The options object.
     * @param {Number}       [options.timeout=null]       The request timeout in ms, if any (default: `null`).
     * @param {String}       [options.requestMode="cors"] The HTTP request mode (default: `"cors"`).
     */
    constructor(events: EventEmitter, options?: {
        timeout?: number;
        requestMode?: string;
    });
    /**
     * The event emitter instance.
     * @type {EventEmitter}
     */
    events: EventEmitter;
    /**
     * The request mode.
     * @see  https://fetch.spec.whatwg.org/#requestmode
     * @type {String}
     */
    requestMode: string;
    /**
     * The request timeout.
     * @type {Number}
     */
    timeout: number;
    /**
     * The fetch() function.
     * @type {Function}
     */
    fetchFunc: Function;
    /**
     * @private
     */
    private timedFetch;
    /**
     * @private
     */
    private processResponse;
    /**
     * @private
     */
    private retry;
    /**
     * Performs an HTTP request to the Kinto server.
     *
     * Resolves with an objet containing the following HTTP response properties:
     * - `{Number}  status`  The HTTP status code.
     * - `{Object}  json`    The JSON response body.
     * - `{Headers} headers` The response headers object; see the ES6 fetch() spec.
     *
     * @param  {String} url               The URL.
     * @param  {Object} [request={}]      The request object, passed to
     *     fetch() as its options object.
     * @param  {Object} [request.headers] The request headers object (default: {})
     * @param  {Object} [options={}]      Options for making the
     *     request
     * @param  {Number} [options.retry]   Number of retries (default: 0)
     * @return {Promise}
     */
    request(url: string, request?: {
        headers?: any;
    }, options?: {
        retry?: number;
    }): Promise<any>;
    _checkForDeprecationHeader(headers: any): void;
    _checkForBackoffHeader(headers: any): void;
    _checkForRetryAfterHeader(headers: any): number;
}
/**
 * Abstract representation of a selected bucket.
 *
 */
declare class Bucket {
    /**
     * Constructor.
     *
     * @param  {KintoClient} client            The client instance.
     * @param  {String}      name              The bucket name.
     * @param  {Object}      [options={}]      The headers object option.
     * @param  {Object}      [options.headers] The headers object option.
     * @param  {Boolean}     [options.safe]    The safe option.
     * @param  {Number}      [options.retry]   The retry option.
     */
    constructor(client: KintoClient, name: string, options?: {
        headers?: any;
        safe?: boolean;
        retry?: number;
    });
    /**
     * @ignore
     */
    client: KintoClient;
    /**
     * The bucket name.
     * @type {String}
     */
    name: string;
    _endpoints: any;
    /**
     * @ignore
     */
    _headers: any;
    _retry: number;
    _safe: boolean;
    get execute(): any;
    get headers(): any;
    /**
     * Get the value of "headers" for a given request, merging the
     * per-request headers with our own "default" headers.
     *
     * @private
     */
    private _getHeaders;
    /**
     * Get the value of "safe" for a given request, using the
     * per-request option if present or falling back to our default
     * otherwise.
     *
     * @private
     * @param {Object} options The options for a request.
     * @returns {Boolean}
     */
    private _getSafe;
    /**
     * As _getSafe, but for "retry".
     *
     * @private
     */
    private _getRetry;
    /**
     * Selects a collection.
     *
     * @param  {String}  name              The collection name.
     * @param  {Object}  [options={}]      The options object.
     * @param  {Object}  [options.headers] The headers object option.
     * @param  {Boolean} [options.safe]    The safe option.
     * @return {Collection}
     */
    collection(name: string, options?: {
        headers?: any;
        safe?: boolean;
    }): Collection;
    /**
     * Retrieves the ETag of the collection list, for use with the `since` filtering option.
     *
     * @param  {Object} [options={}]      The options object.
     * @param  {Object} [options.headers] The headers object option.
     * @param  {Number} [options.retry=0] Number of retries to make
     *     when faced with transient errors.
     * @return {Promise<String, Error>}
     */
    getCollectionsTimestamp(options?: {
        headers?: any;
        retry?: number;
    }): Promise<string, Error>;
    /**
     * Retrieves the ETag of the group list, for use with the `since` filtering option.
     *
     * @param  {Object} [options={}]      The options object.
     * @param  {Object} [options.headers] The headers object option.
     * @param  {Number} [options.retry=0] Number of retries to make
     *     when faced with transient errors.
     * @return {Promise<String, Error>}
     */
    getGroupsTimestamp(options?: {
        headers?: any;
        retry?: number;
    }): Promise<string, Error>;
    /**
     * Retrieves bucket data.
     *
     * @param  {Object} [options={}]      The options object.
     * @param  {Object} [options.headers] The headers object option.
     * @param  {Object} [options.query]   Query parameters to pass in
     *     the request. This might be useful for features that aren't
     *     yet supported by this library.
     * @param  {Array}  [options.fields]  Limit response to
     *     just some fields.
     * @param  {Number} [options.retry=0] Number of retries to make
     *     when faced with transient errors.
     * @return {Promise<Object, Error>}
     */
    getData(options?: {
        headers?: any;
        query?: any;
        fields?: any[];
        retry?: number;
    }): Promise<any, Error>;
    /**
     * Set bucket data.
     * @param  {Object}  data                    The bucket data object.
     * @param  {Object}  [options={}]            The options object.
     * @param  {Object}  [options.headers={}]    The headers object option.
     * @param  {Boolean} [options.safe]          The safe option.
     * @param  {Number}  [options.retry=0]       Number of retries to make
     *     when faced with transient errors.
     * @param  {Boolean} [options.patch]         The patch option.
     * @param  {Number}  [options.last_modified] The last_modified option.
     * @return {Promise<Object, Error>}
     */
    setData(data: any, options?: {
        headers?: any;
        safe?: boolean;
        retry?: number;
        patch?: boolean;
        last_modified?: number;
    }): Promise<any, Error>;
    /**
     * Retrieves the list of history entries in the current bucket.
     *
     * @param  {Object} [options={}]      The options object.
     * @param  {Object} [options.headers] The headers object option.
     * @param  {Number} [options.retry=0] Number of retries to make
     *     when faced with transient errors.
     * @return {Promise<Array<Object>, Error>}
     */
    listHistory(options?: {
        headers?: any;
        retry?: number;
    }): Promise<Array<any>, Error>;
    /**
     * Retrieves the list of collections in the current bucket.
     *
     * @param  {Object} [options={}]      The options object.
     * @param  {Object} [options.filters={}] The filters object.
     * @param  {Object} [options.headers] The headers object option.
     * @param  {Number} [options.retry=0] Number of retries to make
     *     when faced with transient errors.
     * @param  {Array}  [options.fields]  Limit response to
     *     just some fields.
     * @return {Promise<Array<Object>, Error>}
     */
    listCollections(options?: {
        filters?: any;
        headers?: any;
        retry?: number;
        fields?: any[];
    }): Promise<Array<any>, Error>;
    /**
     * Creates a new collection in current bucket.
     *
     * @param  {String|undefined}  id          The collection id.
     * @param  {Object}  [options={}]          The options object.
     * @param  {Boolean} [options.safe]        The safe option.
     * @param  {Object}  [options.headers]     The headers object option.
     * @param  {Number}  [options.retry=0]     Number of retries to make
     *     when faced with transient errors.
     * @param  {Object}  [options.permissions] The permissions object.
     * @param  {Object}  [options.data]        The data object.
     * @return {Promise<Object, Error>}
     */
    createCollection(id: string | undefined, options?: {
        safe?: boolean;
        headers?: any;
        retry?: number;
        permissions?: any;
        data?: any;
    }): Promise<any, Error>;
    /**
     * Deletes a collection from the current bucket.
     *
     * @param  {Object|String} collection              The collection to delete.
     * @param  {Object}        [options={}]            The options object.
     * @param  {Object}        [options.headers]       The headers object option.
     * @param  {Number}        [options.retry=0]       Number of retries to make
     *     when faced with transient errors.
     * @param  {Boolean}       [options.safe]          The safe option.
     * @param  {Number}        [options.last_modified] The last_modified option.
     * @return {Promise<Object, Error>}
     */
    deleteCollection(collection: any | string, options?: {
        headers?: any;
        retry?: number;
        safe?: boolean;
        last_modified?: number;
    }): Promise<any, Error>;
    /**
     * Deletes collections from the current bucket.
     *
     * @param  {Object} [options={}]      The options object.
     * @param  {Object} [options.filters={}] The filters object.
     * @param  {Object} [options.headers] The headers object option.
     * @param  {Number} [options.retry=0] Number of retries to make
     *     when faced with transient errors.
     * @param  {Array}  [options.fields]  Limit response to
     *     just some fields.
     * @return {Promise<Array<Object>, Error>}
     */
    deleteCollections(options?: {
        filters?: any;
        headers?: any;
        retry?: number;
        fields?: any[];
    }): Promise<Array<any>, Error>;
    /**
     * Retrieves the list of groups in the current bucket.
     *
     * @param  {Object} [options={}]      The options object.
     * @param  {Object} [options.filters={}] The filters object.
     * @param  {Object} [options.headers] The headers object option.
     * @param  {Number} [options.retry=0] Number of retries to make
     *     when faced with transient errors.
     * @param  {Array}  [options.fields]  Limit response to
     *     just some fields.
     * @return {Promise<Array<Object>, Error>}
     */
    listGroups(options?: {
        filters?: any;
        headers?: any;
        retry?: number;
        fields?: any[];
    }): Promise<Array<any>, Error>;
    /**
     * Fetches a group in current bucket.
     *
     * @param  {String} id                The group id.
     * @param  {Object} [options={}]      The options object.
     * @param  {Object} [options.headers] The headers object option.
     * @param  {Number} [options.retry=0] Number of retries to make
     *     when faced with transient errors.
     * @param  {Object} [options.query]   Query parameters to pass in
     *     the request. This might be useful for features that aren't
     *     yet supported by this library.
     * @param  {Array}  [options.fields]  Limit response to
     *     just some fields.
     * @return {Promise<Object, Error>}
     */
    getGroup(id: string, options?: {
        headers?: any;
        retry?: number;
        query?: any;
        fields?: any[];
    }): Promise<any, Error>;
    /**
     * Creates a new group in current bucket.
     *
     * @param  {String|undefined}  id                    The group id.
     * @param  {Array<String>}     [members=[]]          The list of principals.
     * @param  {Object}            [options={}]          The options object.
     * @param  {Object}            [options.data]        The data object.
     * @param  {Object}            [options.permissions] The permissions object.
     * @param  {Boolean}           [options.safe]        The safe option.
     * @param  {Object}            [options.headers]     The headers object option.
     * @param  {Number}            [options.retry=0]     Number of retries to make
     *     when faced with transient errors.
     * @return {Promise<Object, Error>}
     */
    createGroup(id: string | undefined, members?: Array<string>, options?: {
        data?: any;
        permissions?: any;
        safe?: boolean;
        headers?: any;
        retry?: number;
    }): Promise<any, Error>;
    /**
     * Updates an existing group in current bucket.
     *
     * @param  {Object}  group                   The group object.
     * @param  {Object}  [options={}]            The options object.
     * @param  {Object}  [options.data]          The data object.
     * @param  {Object}  [options.permissions]   The permissions object.
     * @param  {Boolean} [options.safe]          The safe option.
     * @param  {Object}  [options.headers]       The headers object option.
     * @param  {Number}  [options.retry=0]       Number of retries to make
     *     when faced with transient errors.
     * @param  {Number}  [options.last_modified] The last_modified option.
     * @return {Promise<Object, Error>}
     */
    updateGroup(group: any, options?: {
        data?: any;
        permissions?: any;
        safe?: boolean;
        headers?: any;
        retry?: number;
        last_modified?: number;
    }): Promise<any, Error>;
    /**
     * Deletes a group from the current bucket.
     *
     * @param  {Object|String} group                   The group to delete.
     * @param  {Object}        [options={}]            The options object.
     * @param  {Object}        [options.headers]       The headers object option.
     * @param  {Number}        [options.retry=0]       Number of retries to make
     *     when faced with transient errors.
     * @param  {Boolean}       [options.safe]          The safe option.
     * @param  {Number}        [options.last_modified] The last_modified option.
     * @return {Promise<Object, Error>}
     */
    deleteGroup(group: any | string, options?: {
        headers?: any;
        retry?: number;
        safe?: boolean;
        last_modified?: number;
    }): Promise<any, Error>;
    /**
     * Deletes groups from the current bucket.
     *
     * @param  {Object} [options={}]          The options object.
     * @param  {Object} [options.filters={}]  The filters object.
     * @param  {Object} [options.headers]     The headers object option.
     * @param  {Number} [options.retry=0]     Number of retries to make
     *     when faced with transient errors.
     * @param  {Array}  [options.fields]      Limit response to
     *     just some fields.
     * @return {Promise<Array<Object>, Error>}
     */
    deleteGroups(options?: {
        filters?: any;
        headers?: any;
        retry?: number;
        fields?: any[];
    }): Promise<Array<any>, Error>;
    /**
     * Retrieves the list of permissions for this bucket.
     *
     * @param  {Object} [options={}]      The options object.
     * @param  {Object} [options.headers] The headers object option.
     * @param  {Number} [options.retry=0] Number of retries to make
     *     when faced with transient errors.
     * @return {Promise<Object, Error>}
     */
    getPermissions(options?: {
        headers?: any;
        retry?: number;
    }): Promise<any, Error>;
    /**
     * Replaces all existing bucket permissions with the ones provided.
     *
     * @param  {Object}  permissions             The permissions object.
     * @param  {Object}  [options={}]            The options object
     * @param  {Boolean} [options.safe]          The safe option.
     * @param  {Object}  [options.headers={}]    The headers object option.
     * @param  {Number}  [options.retry=0]       Number of retries to make
     *     when faced with transient errors.
     * @param  {Object}  [options.last_modified] The last_modified option.
     * @return {Promise<Object, Error>}
     */
    setPermissions(permissions: any, options?: {
        safe?: boolean;
        headers?: any;
        retry?: number;
        last_modified?: any;
    }): Promise<any, Error>;
    /**
     * Append principals to the bucket permissions.
     *
     * @param  {Object}  permissions             The permissions object.
     * @param  {Object}  [options={}]            The options object
     * @param  {Boolean} [options.safe]          The safe option.
     * @param  {Object}  [options.headers]       The headers object option.
     * @param  {Number}  [options.retry=0]       Number of retries to make
     *     when faced with transient errors.
     * @param  {Object}  [options.last_modified] The last_modified option.
     * @return {Promise<Object, Error>}
     */
    addPermissions(permissions: any, options?: {
        safe?: boolean;
        headers?: any;
        retry?: number;
        last_modified?: any;
    }): Promise<any, Error>;
    /**
     * Remove principals from the bucket permissions.
     *
     * @param  {Object}  permissions             The permissions object.
     * @param  {Object}  [options={}]            The options object
     * @param  {Boolean} [options.safe]          The safe option.
     * @param  {Object}  [options.headers]       The headers object option.
     * @param  {Number}  [options.retry=0]       Number of retries to make
     *     when faced with transient errors.
     * @param  {Object}  [options.last_modified] The last_modified option.
     * @return {Promise<Object, Error>}
     */
    removePermissions(permissions: any, options?: {
        safe?: boolean;
        headers?: any;
        retry?: number;
        last_modified?: any;
    }): Promise<any, Error>;
    /**
     * Performs batch operations at the current bucket level.
     *
     * @param  {Function} fn                   The batch operation function.
     * @param  {Object}   [options={}]         The options object.
     * @param  {Object}   [options.headers]    The headers object option.
     * @param  {Boolean}  [options.safe]       The safe option.
     * @param  {Number}   [options.retry=0]    The retry option.
     * @param  {Boolean}  [options.aggregate]  Produces a grouped result object.
     * @return {Promise<Object, Error>}
     */
    batch(fn: Function, options?: {
        headers?: any;
        safe?: boolean;
        retry?: number;
        aggregate?: boolean;
    }): Promise<any, Error>;
}
declare class NetworkTimeoutError extends Error {
    constructor(url: any, options: any);
    url: any;
    options: any;
}
/**
 * "Error" subclass representing a >=400 response from the server.
 *
 * Whether or not this is an error depends on your application.
 *
 * The `json` field can be undefined if the server responded with an
 * empty response body. This shouldn't generally happen. Most "bad"
 * responses come with a JSON error description, or (if they're
 * fronted by a CDN or nginx or something) occasionally non-JSON
 * responses (which become UnparseableResponseErrors, above).
 */
declare class ServerResponse extends Error {
    constructor(response: any, json: any);
    response: any;
    data: any;
}
declare class UnparseableResponseError extends Error {
    constructor(response: any, body: any, error: any);
    status: any;
    response: any;
    stack: any;
    error: any;
}
/**
 * Abstract representation of a selected collection.
 *
 */
declare class Collection {
    /**
     * Constructor.
     *
     * @param  {KintoClient}  client            The client instance.
     * @param  {Bucket}       bucket            The bucket instance.
     * @param  {String}       name              The collection name.
     * @param  {Object}       [options={}]      The options object.
     * @param  {Object}       [options.headers] The headers object option.
     * @param  {Boolean}      [options.safe]    The safe option.
     * @param  {Number}       [options.retry]   The retry option.
     * @param  {Boolean}      [options.batch]   (Private) Whether this
     *     Collection is operating as part of a batch.
     */
    constructor(client: KintoClient, bucket: Bucket, name: string, options?: {
        headers?: any;
        safe?: boolean;
        retry?: number;
        batch?: boolean;
    });
    /**
     * @ignore
     */
    client: KintoClient;
    /**
     * @ignore
     */
    bucket: Bucket;
    /**
     * The collection name.
     * @type {String}
     */
    name: string;
    _endpoints: any;
    /**
     * @ignore
     */
    _retry: number;
    _safe: boolean;
    _headers: any;
    get execute(): any;
    /**
     * Get the value of "headers" for a given request, merging the
     * per-request headers with our own "default" headers.
     *
     * @private
     */
    private _getHeaders;
    /**
     * Get the value of "safe" for a given request, using the
     * per-request option if present or falling back to our default
     * otherwise.
     *
     * @private
     * @param {Object} options The options for a request.
     * @returns {Boolean}
     */
    private _getSafe;
    /**
     * As _getSafe, but for "retry".
     *
     * @private
     */
    private _getRetry;
    /**
     * Retrieves the total number of records in this collection.
     *
     * @param  {Object} [options={}]      The options object.
     * @param  {Object} [options.headers] The headers object option.
     * @param  {Number} [options.retry=0] Number of retries to make
     *     when faced with transient errors.
     * @return {Promise<Number, Error>}
     */
    getTotalRecords(options?: {
        headers?: any;
        retry?: number;
    }): Promise<number, Error>;
    /**
     * Retrieves the ETag of the records list, for use with the `since` filtering option.
     *
     * @param  {Object} [options={}]      The options object.
     * @param  {Object} [options.headers] The headers object option.
     * @param  {Number} [options.retry=0] Number of retries to make
     *     when faced with transient errors.
     * @return {Promise<String, Error>}
     */
    getRecordsTimestamp(options?: {
        headers?: any;
        retry?: number;
    }): Promise<string, Error>;
    /**
     * Retrieves collection data.
     *
     * @param  {Object} [options={}]      The options object.
     * @param  {Object} [options.headers] The headers object option.
     * @param  {Object} [options.query]   Query parameters to pass in
     *     the request. This might be useful for features that aren't
     *     yet supported by this library.
     * @param  {Array}  [options.fields]  Limit response to
     *     just some fields.
     * @param  {Number} [options.retry=0] Number of retries to make
     *     when faced with transient errors.
     * @return {Promise<Object, Error>}
     */
    getData(options?: {
        headers?: any;
        query?: any;
        fields?: any[];
        retry?: number;
    }): Promise<any, Error>;
    /**
     * Set collection data.
     * @param  {Object}   data                    The collection data object.
     * @param  {Object}   [options={}]            The options object.
     * @param  {Object}   [options.headers]       The headers object option.
     * @param  {Number}   [options.retry=0]       Number of retries to make
     *     when faced with transient errors.
     * @param  {Boolean}  [options.safe]          The safe option.
     * @param  {Boolean}  [options.patch]         The patch option.
     * @param  {Number}   [options.last_modified] The last_modified option.
     * @return {Promise<Object, Error>}
     */
    setData(data: any, options?: {
        headers?: any;
        retry?: number;
        safe?: boolean;
        patch?: boolean;
        last_modified?: number;
    }): Promise<any, Error>;
    /**
     * Retrieves the list of permissions for this collection.
     *
     * @param  {Object} [options={}]      The options object.
     * @param  {Object} [options.headers] The headers object option.
     * @param  {Number} [options.retry=0] Number of retries to make
     *     when faced with transient errors.
     * @return {Promise<Object, Error>}
     */
    getPermissions(options?: {
        headers?: any;
        retry?: number;
    }): Promise<any, Error>;
    /**
     * Replaces all existing collection permissions with the ones provided.
     *
     * @param  {Object}   permissions             The permissions object.
     * @param  {Object}   [options={}]            The options object
     * @param  {Object}   [options.headers]       The headers object option.
     * @param  {Number}   [options.retry=0]       Number of retries to make
     *     when faced with transient errors.
     * @param  {Boolean}  [options.safe]          The safe option.
     * @param  {Number}   [options.last_modified] The last_modified option.
     * @return {Promise<Object, Error>}
     */
    setPermissions(permissions: any, options?: {
        headers?: any;
        retry?: number;
        safe?: boolean;
        last_modified?: number;
    }): Promise<any, Error>;
    /**
     * Append principals to the collection permissions.
     *
     * @param  {Object}  permissions             The permissions object.
     * @param  {Object}  [options={}]            The options object
     * @param  {Boolean} [options.safe]          The safe option.
     * @param  {Object}  [options.headers]       The headers object option.
     * @param  {Number}  [options.retry=0]       Number of retries to make
     *     when faced with transient errors.
     * @param  {Object}  [options.last_modified] The last_modified option.
     * @return {Promise<Object, Error>}
     */
    addPermissions(permissions: any, options?: {
        safe?: boolean;
        headers?: any;
        retry?: number;
        last_modified?: any;
    }): Promise<any, Error>;
    /**
     * Remove principals from the collection permissions.
     *
     * @param  {Object}  permissions             The permissions object.
     * @param  {Object}  [options={}]            The options object
     * @param  {Boolean} [options.safe]          The safe option.
     * @param  {Object}  [options.headers]       The headers object option.
     * @param  {Number}  [options.retry=0]       Number of retries to make
     *     when faced with transient errors.
     * @param  {Object}  [options.last_modified] The last_modified option.
     * @return {Promise<Object, Error>}
     */
    removePermissions(permissions: any, options?: {
        safe?: boolean;
        headers?: any;
        retry?: number;
        last_modified?: any;
    }): Promise<any, Error>;
    /**
     * Creates a record in current collection.
     *
     * @param  {Object}  record                The record to create.
     * @param  {Object}  [options={}]          The options object.
     * @param  {Object}  [options.headers]     The headers object option.
     * @param  {Number}  [options.retry=0]     Number of retries to make
     *     when faced with transient errors.
     * @param  {Boolean} [options.safe]        The safe option.
     * @param  {Object}  [options.permissions] The permissions option.
     * @return {Promise<Object, Error>}
     */
    createRecord(record: any, options?: {
        headers?: any;
        retry?: number;
        safe?: boolean;
        permissions?: any;
    }): Promise<any, Error>;
    /**
     * Adds an attachment to a record, creating the record when it doesn't exist.
     *
     * @param  {String}  dataURL                 The data url.
     * @param  {Object}  [record={}]             The record data.
     * @param  {Object}  [options={}]            The options object.
     * @param  {Object}  [options.headers]       The headers object option.
     * @param  {Number}  [options.retry=0]       Number of retries to make
     *     when faced with transient errors.
     * @param  {Boolean} [options.safe]          The safe option.
     * @param  {Number}  [options.last_modified] The last_modified option.
     * @param  {Object}  [options.permissions]   The permissions option.
     * @param  {String}  [options.filename]      Force the attachment filename.
     * @param  {String}  [options.gzipped]       Force the attachment to be gzipped or not.
     * @return {Promise<Object, Error>}
     */
    addAttachment(dataURI: any, record?: any, options?: {
        headers?: any;
        retry?: number;
        safe?: boolean;
        last_modified?: number;
        permissions?: any;
        filename?: string;
        gzipped?: string;
    }): Promise<any, Error>;
    /**
     * Removes an attachment from a given record.
     *
     * @param  {Object}  recordId                The record id.
     * @param  {Object}  [options={}]            The options object.
     * @param  {Object}  [options.headers]       The headers object option.
     * @param  {Number}  [options.retry=0]       Number of retries to make
     *     when faced with transient errors.
     * @param  {Boolean} [options.safe]          The safe option.
     * @param  {Number}  [options.last_modified] The last_modified option.
     */
    removeAttachment(recordId: any, options?: {
        headers?: any;
        retry?: number;
        safe?: boolean;
        last_modified?: number;
    }): Promise<any>;
    /**
     * Updates a record in current collection.
     *
     * @param  {Object}  record                  The record to update.
     * @param  {Object}  [options={}]            The options object.
     * @param  {Object}  [options.headers]       The headers object option.
     * @param  {Number}  [options.retry=0]       Number of retries to make
     *     when faced with transient errors.
     * @param  {Boolean} [options.safe]          The safe option.
     * @param  {Number}  [options.last_modified] The last_modified option.
     * @param  {Object}  [options.permissions]   The permissions option.
     * @return {Promise<Object, Error>}
     */
    updateRecord(record: any, options?: {
        headers?: any;
        retry?: number;
        safe?: boolean;
        last_modified?: number;
        permissions?: any;
    }): Promise<any, Error>;
    /**
     * Deletes a record from the current collection.
     *
     * @param  {Object|String} record                  The record to delete.
     * @param  {Object}        [options={}]            The options object.
     * @param  {Object}        [options.headers]       The headers object option.
     * @param  {Number}        [options.retry=0]       Number of retries to make
     *     when faced with transient errors.
     * @param  {Boolean}       [options.safe]          The safe option.
     * @param  {Number}        [options.last_modified] The last_modified option.
     * @return {Promise<Object, Error>}
     */
    deleteRecord(record: any | string, options?: {
        headers?: any;
        retry?: number;
        safe?: boolean;
        last_modified?: number;
    }): Promise<any, Error>;
    /**
     * Deletes records from the current collection.
     *
     * Sorting is done by passing a `sort` string option:
     *
     * - The field to order the results by, prefixed with `-` for descending.
     * Default: `-last_modified`.
     *
     * @see http://kinto.readthedocs.io/en/stable/api/1.x/sorting.html
     *
     * Filtering is done by passing a `filters` option object:
     *
     * - `{fieldname: "value"}`
     * - `{min_fieldname: 4000}`
     * - `{in_fieldname: "1,2,3"}`
     * - `{not_fieldname: 0}`
     * - `{exclude_fieldname: "0,1"}`
     *
     * @see http://kinto.readthedocs.io/en/stable/api/1.x/filtering.html
     *
     * @param  {Object}   [options={}]                    The options object.
     * @param  {Object}   [options.headers]               The headers object option.
     * @param  {Number}   [options.retry=0]               Number of retries to make
     *     when faced with transient errors.
     * @param  {Object}   [options.filters={}]            The filters object.
     * @param  {String}   [options.sort="-last_modified"] The sort field.
     * @param  {String}   [options.at]                    The timestamp to get a snapshot at.
     * @param  {String}   [options.limit=null]            The limit field.
     * @param  {String}   [options.pages=1]               The number of result pages to aggregate.
     * @param  {Number}   [options.since=null]            Only retrieve records modified since the provided timestamp.
     * @param  {Array}    [options.fields]                Limit response to just some fields.
     * @return {Promise<Object, Error>}
     */
    deleteRecords(options?: {
        headers?: any;
        retry?: number;
        filters?: any;
        sort?: string;
        at?: string;
        limit?: string;
        pages?: string;
        since?: number;
        fields?: any[];
    }): Promise<any, Error>;
    /**
     * Retrieves a record from the current collection.
     *
     * @param  {String} id                The record id to retrieve.
     * @param  {Object} [options={}]      The options object.
     * @param  {Object} [options.headers] The headers object option.
     * @param  {Object} [options.query]   Query parameters to pass in
     *     the request. This might be useful for features that aren't
     *     yet supported by this library.
     * @param  {Array}  [options.fields]  Limit response to
     *     just some fields.
     * @param  {Number} [options.retry=0] Number of retries to make
     *     when faced with transient errors.
     * @return {Promise<Object, Error>}
     */
    getRecord(id: string, options?: {
        headers?: any;
        query?: any;
        fields?: any[];
        retry?: number;
    }): Promise<any, Error>;
    /**
     * Lists records from the current collection.
     *
     * Sorting is done by passing a `sort` string option:
     *
     * - The field to order the results by, prefixed with `-` for descending.
     * Default: `-last_modified`.
     *
     * @see http://kinto.readthedocs.io/en/stable/api/1.x/sorting.html
     *
     * Filtering is done by passing a `filters` option object:
     *
     * - `{fieldname: "value"}`
     * - `{min_fieldname: 4000}`
     * - `{in_fieldname: "1,2,3"}`
     * - `{not_fieldname: 0}`
     * - `{exclude_fieldname: "0,1"}`
     *
     * @see http://kinto.readthedocs.io/en/stable/api/1.x/filtering.html
     *
     * Paginating is done by passing a `limit` option, then calling the `next()`
     * method from the resolved result object to fetch the next page, if any.
     *
     * @param  {Object}   [options={}]                    The options object.
     * @param  {Object}   [options.headers]               The headers object option.
     * @param  {Number}   [options.retry=0]               Number of retries to make
     *     when faced with transient errors.
     * @param  {Object}   [options.filters={}]            The filters object.
     * @param  {String}   [options.sort="-last_modified"] The sort field.
     * @param  {String}   [options.at]                    The timestamp to get a snapshot at.
     * @param  {String}   [options.limit=null]            The limit field.
     * @param  {String}   [options.pages=1]               The number of result pages to aggregate.
     * @param  {Number}   [options.since=null]            Only retrieve records modified since the provided timestamp.
     * @param  {Array}    [options.fields]                Limit response to just some fields.
     * @return {Promise<Object, Error>}
     */
    listRecords(options?: {
        headers?: any;
        retry?: number;
        filters?: any;
        sort?: string;
        at?: string;
        limit?: string;
        pages?: string;
        since?: number;
        fields?: any[];
    }): Promise<any, Error>;
    /**
     * @private
     */
    private isHistoryComplete;
    /**
     * @private
     */
    private getSnapshot;
    /**
     * Performs batch operations at the current collection level.
     *
     * @param  {Function} fn                   The batch operation function.
     * @param  {Object}   [options={}]         The options object.
     * @param  {Object}   [options.headers]    The headers object option.
     * @param  {Boolean}  [options.safe]       The safe option.
     * @param  {Number}   [options.retry]      The retry option.
     * @param  {Boolean}  [options.aggregate]  Produces a grouped result object.
     * @return {Promise<Object, Error>}
     */
    batch(fn: Function, options?: {
        headers?: any;
        safe?: boolean;
        retry?: number;
        aggregate?: boolean;
    }): Promise<any, Error>;
}
export {};
