/**
 * Sets the debugging status, intended for tweaking in server tests.
 *
 * @param {boolean} debug
 *   Enables debugging output
 * @param {boolean} debugTimestamp
 *   Enables timestamping of the debugging output.
 */
export function setDebuggingStatus(debug: boolean, debugTimestamp: boolean): void;
/** Constructs an HTTP error object. */
export function HttpError(code: any, description: any): void;
export class HttpError {
    /** Constructs an HTTP error object. */
    constructor(code: any, description: any);
    code: any;
    description: any;
    toString(): string;
}
/** dump(str) with a trailing "\n" -- only outputs if DEBUG. */
export function dumpn(str: any): void;
export function overrideBinaryStreamsForTests(inputStream: any, outputStream: any, responseSegmentSize: any): void;
/**
 * Instantiates a new HTTP server.
 */
export function nsHttpServer(): void;
export class nsHttpServer {
    /** The port on which this server listens. */
    _port: any;
    /** The socket associated with this. */
    _socket: any;
    /** The handler used to process requests to this server. */
    _handler: ServerHandler;
    /** Naming information for this server. */
    _identity: ServerIdentity;
    /**
     * Indicates when the server is to be shut down at the end of the request.
     */
    _doQuit: boolean;
    /**
     * True if the socket in this is closed (and closure notifications have been
     * sent and processed if the socket was ever opened), false otherwise.
     */
    _socketClosed: boolean;
    /**
     * Used for tracking existing connections and ensuring that all connections
     * are properly cleaned up before server shutdown; increases by 1 for every
     * new incoming connection.
     */
    _connectionGen: number;
    /**
     * Hash of all open connections, indexed by connection number at time of
     * creation.
     */
    _connections: {};
    /**
     * Processes an incoming request coming in on the given socket and contained
     * in the given transport.
     *
     * @param socket : nsIServerSocket
     *   the socket through which the request was served
     * @param trans : nsISocketTransport
     *   the transport for the request/response
     * @see nsIServerSocketListener.onSocketAccepted
     */
    onSocketAccepted(socket: any, trans: any): void;
    /**
     * Called when the socket associated with this is closed.
     *
     * @param socket : nsIServerSocket
     *   the socket being closed
     * @param status : nsresult
     *   the reason the socket stopped listening (NS_BINDING_ABORTED if the server
     *   was stopped using nsIHttpServer.stop)
     * @see nsIServerSocketListener.onStopListening
     */
    onStopListening(socket: any, status: any): void;
    start(port: any): void;
    start_ipv6(port: any): void;
    start_dualStack(port: any): void;
    _start(port: any, host: any, dualStack: any): void;
    _host: any;
    stop(callback: any): Promise<any>;
    _stopCallback: any;
    registerFile(path: any, file: any, handler: any): void;
    registerDirectory(path: any, directory: any): void;
    registerPathHandler(path: any, handler: any): void;
    registerPrefixHandler(prefix: any, handler: any): void;
    registerErrorHandler(code: any, handler: any): void;
    setIndexHandler(handler: any): void;
    registerContentType(ext: any, type: any): void;
    get connectionNumber(): any;
    get identity(): any;
    getState(path: any, k: any): any;
    setState(path: any, k: any, v: any): void;
    getSharedState(k: any): any;
    setSharedState(k: any, v: any): void;
    getObjectState(k: any): any;
    setObjectState(k: any, v: any): void;
    get wrappedJSObject(): {
        /**
         * Processes an incoming request coming in on the given socket and contained
         * in the given transport.
         *
         * @param socket : nsIServerSocket
         *   the socket through which the request was served
         * @param trans : nsISocketTransport
         *   the transport for the request/response
         * @see nsIServerSocketListener.onSocketAccepted
         */
        onSocketAccepted(socket: any, trans: any): void;
        /**
         * Called when the socket associated with this is closed.
         *
         * @param socket : nsIServerSocket
         *   the socket being closed
         * @param status : nsresult
         *   the reason the socket stopped listening (NS_BINDING_ABORTED if the server
         *   was stopped using nsIHttpServer.stop)
         * @see nsIServerSocketListener.onStopListening
         */
        onStopListening(socket: any, status: any): void;
        start(port: any): void;
        start_ipv6(port: any): void;
        start_dualStack(port: any): void;
        _start(port: any, host: any, dualStack: any): void;
        stop(callback: any): Promise<any>;
        registerFile(path: any, file: any, handler: any): void;
        registerDirectory(path: any, directory: any): void;
        registerPathHandler(path: any, handler: any): void;
        registerPrefixHandler(prefix: any, handler: any): void;
        registerErrorHandler(code: any, handler: any): void;
        setIndexHandler(handler: any): void;
        registerContentType(ext: any, type: any): void;
        readonly connectionNumber: any;
        readonly identity: any;
        getState(path: any, k: any): any;
        setState(path: any, k: any, v: any): void;
        getSharedState(k: any): any;
        setSharedState(k: any, v: any): void;
        getObjectState(k: any): any;
        setObjectState(k: any, v: any): void;
        readonly wrappedJSObject: any;
        QueryInterface: any;
        /**
         * Returns true iff this server is not running (and is not in the process of
         * serving any requests still to be processed when the server was last
         * stopped after being run).
         */
        isStopped(): boolean;
        /** True if this server has any open connections to it, false otherwise. */
        _hasOpenConnections(): boolean;
        /** Calls the server-stopped callback provided when stop() was called. */
        _notifyStopped(): void;
        /**
         * Notifies this server that the given connection has been closed.
         *
         * @param connection : Connection
         *   the connection that was closed
         */
        _connectionClosed(connection: any): void;
        /**
         * Requests that the server be shut down when possible.
         */
        _requestQuit(): void;
    };
    QueryInterface: any;
    /**
     * Returns true iff this server is not running (and is not in the process of
     * serving any requests still to be processed when the server was last
     * stopped after being run).
     */
    isStopped(): boolean;
    /** True if this server has any open connections to it, false otherwise. */
    _hasOpenConnections(): boolean;
    /** Calls the server-stopped callback provided when stop() was called. */
    _notifyStopped(): void;
    /**
     * Notifies this server that the given connection has been closed.
     *
     * @param connection : Connection
     *   the connection that was closed
     */
    _connectionClosed(connection: any): void;
    /**
     * Requests that the server be shut down when possible.
     */
    _requestQuit(): void;
}
/**
 * A container which provides line-by-line access to the arrays of bytes with
 * which it is seeded.
 */
export function LineData(): void;
export class LineData {
    /** An array of queued bytes from which to get line-based characters. */
    _data: any[];
    /** Start index from which to search for CRLF. */
    _start: number;
    /**
     * Appends the bytes in the given array to the internal data cache maintained
     * by this.
     */
    appendBytes(bytes: any): void;
    /**
     * Removes and returns a line of data, delimited by CRLF, from this.
     *
     * @param out
     *   an object whose "value" property will be set to the first line of text
     *   present in this, sans CRLF, if this contains a full CRLF-delimited line
     *   of text; if this doesn't contain enough data, the value of the property
     *   is undefined
     * @returns boolean
     *   true if a full line of data could be read from the data in this, false
     *   otherwise
     */
    readLine(out: any): boolean;
    /**
     * Removes the bytes currently within this and returns them in an array.
     *
     * @returns Array
     *   the bytes within this when this method is called
     */
    purge(): any[];
}
/**
 * Copies data from source to sink as it becomes available, when that data can
 * be written to sink without blocking.
 *
 * @param source : nsIAsyncInputStream
 *   the stream from which data is to be read
 * @param sink : nsIAsyncOutputStream
 *   the stream to which data is to be copied
 * @param observer : nsIRequestObserver
 *   an observer which will be notified when the copy starts and finishes
 * @param context : nsISupports
 *   context passed to observer when notified of start/stop
 * @throws NS_ERROR_NULL_POINTER
 *   if source, sink, or observer are null
 */
export function WriteThroughCopier(source: any, sink: any, observer: any, context: any): void;
export class WriteThroughCopier {
    /**
     * Copies data from source to sink as it becomes available, when that data can
     * be written to sink without blocking.
     *
     * @param source : nsIAsyncInputStream
     *   the stream from which data is to be read
     * @param sink : nsIAsyncOutputStream
     *   the stream to which data is to be copied
     * @param observer : nsIRequestObserver
     *   an observer which will be notified when the copy starts and finishes
     * @param context : nsISupports
     *   context passed to observer when notified of start/stop
     * @throws NS_ERROR_NULL_POINTER
     *   if source, sink, or observer are null
     */
    constructor(source: any, sink: any, observer: any, context: any);
    /** Stream from which data is being read. */
    _source: any;
    /** Stream to which data is being written. */
    _sink: any;
    /** Observer watching this copy. */
    _observer: any;
    /** Context for the observer watching this. */
    _context: any;
    /**
     * True iff this is currently being canceled (cancel has been called, the
     * callback may not yet have been made).
     */
    _canceled: boolean;
    /**
     * False until all data has been read from input and written to output, at
     * which point this copy is completed and cancel() is asynchronously called.
     */
    _completed: boolean;
    /** Required by nsIRequest, meaningless. */
    loadFlags: number;
    /** Required by nsIRequest, meaningless. */
    loadGroup: any;
    /** Required by nsIRequest, meaningless. */
    name: string;
    /** Status of this request. */
    status: any;
    /** Arrays of byte strings waiting to be written to output. */
    _pendingData: any[];
    QueryInterface: any;
    /**
     * Receives a more-data-in-input notification and writes the corresponding
     * data to the output.
     *
     * @param input : nsIAsyncInputStream
     *   the input stream on whose data we have been waiting
     */
    onInputStreamReady(input: any): void;
    /**
     * Callback when data may be written to the output stream without blocking, or
     * when the output stream has been closed.
     *
     * @param output : nsIAsyncOutputStream
     *   the output stream on whose writability we've been waiting, also known as
     *   this._sink
     */
    onOutputStreamReady(output: any): void;
    /** Returns true if the cancel observer hasn't been notified yet. */
    isPending(): boolean;
    suspend: typeof notImplemented;
    resume: typeof notImplemented;
    /**
     * Cancels data reading from input, asynchronously writes out any pending
     * data, and causes the observer to be notified with the given error code when
     * all writing has finished.
     *
     * @param status : nsresult
     *   the status to pass to the observer when data copying has been canceled
     */
    cancel(status: any): void;
    /**
     * Stop reading input if we haven't already done so, passing e as the status
     * when closing the stream, and kick off a copy-completion notice if no more
     * data remains to be written.
     *
     * @param e : nsresult
     *   the status to be used when closing the input stream
     */
    _doneReadingSource(e: any): void;
    /**
     * Stop writing output if we haven't already done so, discard any data that
     * remained to be sent, close off input if it wasn't already closed, and kick
     * off a copy-completion notice.
     *
     * @param e : nsresult
     *   the status to be used when closing input if it wasn't already closed
     */
    _doneWritingToSink(e: any): void;
    /**
     * Completes processing of this copy: either by canceling the copy if it
     * hasn't already been canceled using the provided status, or by dispatching
     * the cancel callback event (with the originally provided status, of course)
     * if it already has been canceled.
     *
     * @param status : nsresult
     *   the status code to use to cancel this, if this hasn't already been
     *   canceled
     */
    _cancelOrDispatchCancelCallback(status: any): void;
    /**
     * Kicks off another wait for more data to be available from the input stream.
     */
    _waitToReadData(): void;
    /**
     * Kicks off another wait until data can be written to the output stream.
     */
    _waitToWriteData(): void;
    /**
     * Kicks off a wait for the sink to which data is being copied to be closed.
     * We wait for stream closure when we don't have any data to be copied, rather
     * than waiting to write a specific amount of data.  We can't wait to write
     * data because the sink might be infinitely writable, and if no data appears
     * in the source for a long time we might have to spin quite a bit waiting to
     * write, waiting to write again, &c.  Waiting on stream closure instead means
     * we'll get just one notification if the sink dies.  Note that when data
     * starts arriving from the sink we'll resume waiting for data to be written,
     * dropping this closure-only callback entirely.
     */
    _waitForSinkClosure(): void;
    /**
     * Closes input with the given status, if it hasn't already been closed;
     * otherwise a no-op.
     *
     * @param status : nsresult
     *   status code use to close the source stream if necessary
     */
    _finishSource(status: any): void;
}
/**
 * An object which stores HTTP headers for a request or response.
 *
 * Note that since headers are case-insensitive, this object converts headers to
 * lowercase before storing them.  This allows the getHeader and hasHeader
 * methods to work correctly for any case of a header, but it means that the
 * values returned by .enumerator may not be equal case-sensitively to the
 * values passed to setHeader when adding headers to this.
 */
export function nsHttpHeaders(): void;
export class nsHttpHeaders {
    /**
     * A hash of headers, with header field names as the keys and header field
     * values as the values.  Header field names are case-insensitive, but upon
     * insertion here they are converted to lowercase.  Header field values are
     * normalized upon insertion to contain no leading or trailing whitespace.
     *
     * Note also that per RFC 2616, section 4.2, two headers with the same name in
     * a message may be treated as one header with the same field name and a field
     * value consisting of the separate field values joined together with a "," in
     * their original order.  This hash stores multiple headers with the same name
     * in this manner.
     */
    _headers: {};
    /**
     * Sets the header represented by name and value in this.
     *
     * @param name : string
     *   the header name
     * @param value : string
     *   the header value
     * @throws NS_ERROR_INVALID_ARG
     *   if name or value is not a valid header component
     */
    setHeader(fieldName: any, fieldValue: any, merge: any): void;
    setHeaderNoCheck(fieldName: any, fieldValue: any): void;
    /**
     * Returns the value for the header specified by this.
     *
     * @throws NS_ERROR_INVALID_ARG
     *   if fieldName does not constitute a valid header field name
     * @throws NS_ERROR_NOT_AVAILABLE
     *   if the given header does not exist in this
     * @returns string
     *   the field value for the given header, possibly with non-semantic changes
     *   (i.e., leading/trailing whitespace stripped, whitespace runs replaced
     *   with spaces, etc.) at the option of the implementation; multiple
     *   instances of the header will be combined with a comma, except for
     *   the three headers noted in the description of getHeaderValues
     */
    getHeader(fieldName: any): any;
    /**
     * Returns the value for the header specified by fieldName as an array.
     *
     * @throws NS_ERROR_INVALID_ARG
     *   if fieldName does not constitute a valid header field name
     * @throws NS_ERROR_NOT_AVAILABLE
     *   if the given header does not exist in this
     * @returns [string]
     *   an array of all the header values in this for the given
     *   header name.  Header values will generally be collapsed
     *   into a single header by joining all header values together
     *   with commas, but certain headers (Proxy-Authenticate,
     *   WWW-Authenticate, and Set-Cookie) violate the HTTP spec
     *   and cannot be collapsed in this manner.  For these headers
     *   only, the returned array may contain multiple elements if
     *   that header has been added more than once.
     */
    getHeaderValues(fieldName: any): any;
    /**
     * Returns true if a header with the given field name exists in this, false
     * otherwise.
     *
     * @param fieldName : string
     *   the field name whose existence is to be determined in this
     * @throws NS_ERROR_INVALID_ARG
     *   if fieldName does not constitute a valid header field name
     * @returns boolean
     *   true if the header's present, false otherwise
     */
    hasHeader(fieldName: any): boolean;
    /**
     * Returns a new enumerator over the field names of the headers in this, as
     * nsISupportsStrings.  The names returned will be in lowercase, regardless of
     * how they were input using setHeader (header names are case-insensitive per
     * RFC 2616).
     */
    get enumerator(): nsSimpleEnumerator;
}
/**
 * Errors thrown to trigger specific HTTP server responses.
 */
export const HTTP_400: HttpError;
export const HTTP_401: HttpError;
export const HTTP_402: HttpError;
export const HTTP_403: HttpError;
export const HTTP_404: HttpError;
export const HTTP_405: HttpError;
export const HTTP_406: HttpError;
export const HTTP_407: HttpError;
export const HTTP_408: HttpError;
export const HTTP_409: HttpError;
export const HTTP_410: HttpError;
export const HTTP_411: HttpError;
export const HTTP_412: HttpError;
export const HTTP_413: HttpError;
export const HTTP_414: HttpError;
export const HTTP_415: HttpError;
export const HTTP_417: HttpError;
export const HTTP_500: HttpError;
export const HTTP_501: HttpError;
export const HTTP_502: HttpError;
export const HTTP_503: HttpError;
export const HTTP_504: HttpError;
export const HTTP_505: HttpError;
export const HttpServer: typeof nsHttpServer;
export class NodeServer {
    static fork(): Promise<any>;
    static execute(id: any, command: any): Promise<any>;
    static kill(id: any): Promise<any>;
    static sendCommand(command: any, path: any): Promise<any>;
}
/**
 * An object which handles requests for a server, executing default and
 * overridden behaviors as instructed by the code which uses and manipulates it.
 * Default behavior includes the paths / and /trace (diagnostics), with some
 * support for HTTP error pages for various codes and fallback to HTTP 500 if
 * those codes fail for any reason.
 *
 * @param server : nsHttpServer
 *   the server in which this handler is being used
 */
declare function ServerHandler(server: any): void;
declare class ServerHandler {
    /**
     * An object which handles requests for a server, executing default and
     * overridden behaviors as instructed by the code which uses and manipulates it.
     * Default behavior includes the paths / and /trace (diagnostics), with some
     * support for HTTP error pages for various codes and fallback to HTTP 500 if
     * those codes fail for any reason.
     *
     * @param server : nsHttpServer
     *   the server in which this handler is being used
     */
    constructor(server: any);
    /**
     * The nsHttpServer instance associated with this handler.
     */
    _server: any;
    /**
     * A FileMap object containing the set of path->nsIFile mappings for
     * all directory mappings set in the server (e.g., "/" for /var/www/html/,
     * "/foo/bar/" for /local/path/, and "/foo/bar/baz/" for /local/path2).
     *
     * Note carefully: the leading and trailing "/" in each path (not file) are
     * removed before insertion to simplify the code which uses this.  You have
     * been warned!
     */
    _pathDirectoryMap: FileMap;
    /**
     * Custom request handlers for the server in which this resides.  Path-handler
     * pairs are stored as property-value pairs in this property.
     *
     * @see ServerHandler.prototype._defaultPaths
     */
    _overridePaths: {};
    /**
     * Custom request handlers for the path prefixes on the server in which this
     * resides.  Path-handler pairs are stored as property-value pairs in this
     * property.
     *
     * @see ServerHandler.prototype._defaultPaths
     */
    _overridePrefixes: {};
    /**
     * Custom request handlers for the error handlers in the server in which this
     * resides.  Path-handler pairs are stored as property-value pairs in this
     * property.
     *
     * @see ServerHandler.prototype._defaultErrors
     */
    _overrideErrors: {};
    /**
     * Maps file extensions to their MIME types in the server, overriding any
     * mapping that might or might not exist in the MIME service.
     */
    _mimeMappings: {};
    /**
     * The default handler for requests for directories, used to serve directories
     * when no index file is present.
     */
    _indexHandler: typeof defaultIndexHandler;
    /** Per-path state storage for the server. */
    _state: {};
    /** Entire-server state storage. */
    _sharedState: {};
    /** Entire-server state storage for nsISupports values. */
    _objectState: {};
    /**
     * Handles a request to this server, responding to the request appropriately
     * and initiating server shutdown if necessary.
     *
     * This method never throws an exception.
     *
     * @param connection : Connection
     *   the connection for this request
     */
    handleResponse(connection: any): void;
    registerFile(path: any, file: any, handler: any): void;
    registerPathHandler(path: any, handler: any): void;
    registerPrefixHandler(path: any, handler: any): void;
    registerDirectory(path: any, directory: any): void;
    registerErrorHandler(err: any, handler: any): void;
    setIndexHandler(handler: any): void;
    registerContentType(ext: any, type: any): void;
    /**
     * Sets or remove (if handler is null) a handler in an object with a key.
     *
     * @param handler
     *   a handler, either function or an nsIHttpRequestHandler
     * @param dict
     *   The object to attach the handler to.
     * @param key
     *   The field name of the handler.
     */
    _handlerToField(handler: any, dict: any, key: any): void;
    /**
     * Handles a request which maps to a file in the local filesystem (if a base
     * path has already been set; otherwise the 404 error is thrown).
     *
     * @param metadata : Request
     *   metadata for the incoming request
     * @param response : Response
     *   an uninitialized Response to the given request, to be initialized by a
     *   request handler
     * @throws HTTP_###
     *   if an HTTP error occurred (usually HTTP_404); note that in this case the
     *   calling code must handle post-processing of the response
     */
    _handleDefault(metadata: any, response: any): void;
    /**
     * Writes an HTTP response for the given file, including setting headers for
     * file metadata.
     *
     * @param metadata : Request
     *   the Request for which a response is being generated
     * @param file : nsIFile
     *   the file which is to be sent in the response
     * @param response : Response
     *   the response to which the file should be written
     * @param offset: uint
     *   the byte offset to skip to when writing
     * @param count: uint
     *   the number of bytes to write
     */
    _writeFileResponse(metadata: any, file: any, response: any, offset: any, count: any): void;
    /**
     * Get the value corresponding to a given key for the given path for SJS state
     * preservation across requests.
     *
     * @param path : string
     *   the path from which the given state is to be retrieved
     * @param k : string
     *   the key whose corresponding value is to be returned
     * @returns string
     *   the corresponding value, which is initially the empty string
     */
    _getState(path: any, k: any): any;
    /**
     * Set the value corresponding to a given key for the given path for SJS state
     * preservation across requests.
     *
     * @param path : string
     *   the path from which the given state is to be retrieved
     * @param k : string
     *   the key whose corresponding value is to be set
     * @param v : string
     *   the value to be set
     */
    _setState(path: any, k: any, v: any): void;
    /**
     * Get the value corresponding to a given key for SJS state preservation
     * across requests.
     *
     * @param k : string
     *   the key whose corresponding value is to be returned
     * @returns string
     *   the corresponding value, which is initially the empty string
     */
    _getSharedState(k: any): any;
    /**
     * Set the value corresponding to a given key for SJS state preservation
     * across requests.
     *
     * @param k : string
     *   the key whose corresponding value is to be set
     * @param v : string
     *   the value to be set
     */
    _setSharedState(k: any, v: any): void;
    /**
     * Returns the object associated with the given key in the server for SJS
     * state preservation across requests.
     *
     * @param k : string
     *  the key whose corresponding object is to be returned
     * @returns nsISupports
     *  the corresponding object, or null if none was present
     */
    _getObjectState(k: any): any;
    /**
     * Sets the object associated with the given key in the server for SJS
     * state preservation across requests.
     *
     * @param k : string
     *  the key whose corresponding object is to be set
     * @param v : nsISupports
     *  the object to be associated with the given key; may be null
     */
    _setObjectState(k: any, v: any): void;
    /**
     * Gets a content-type for the given file, first by checking for any custom
     * MIME-types registered with this handler for the file's extension, second by
     * asking the global MIME service for a content-type, and finally by failing
     * over to application/octet-stream.
     *
     * @param file : nsIFile
     *   the nsIFile for which to get a file type
     * @returns string
     *   the best content-type which can be determined for the file
     */
    _getTypeFromFile(file: any): any;
    /**
     * Returns the nsIFile which corresponds to the path, as determined using
     * all registered path->directory mappings and any paths which are explicitly
     * overridden.
     *
     * @param path : string
     *   the server path for which a file should be retrieved, e.g. "/foo/bar"
     * @throws HttpError
     *   when the correct action is the corresponding HTTP error (i.e., because no
     *   mapping was found for a directory in path, the referenced file doesn't
     *   exist, etc.)
     * @returns nsIFile
     *   the file to be sent as the response to a request for the path
     */
    _getFileForPath(path: any): any;
    /**
     * Writes the error page for the given HTTP error code over the given
     * connection.
     *
     * @param errorCode : uint
     *   the HTTP error code to be used
     * @param connection : Connection
     *   the connection on which the error occurred
     */
    handleError(errorCode: any, connection: any): void;
    /**
     * Handles a request which generates the given error code, using the
     * user-defined error handler if one has been set, gracefully falling back to
     * the x00 status code if the code has no handler, and failing to status code
     * 500 if all else fails.
     *
     * @param errorCode : uint
     *   the HTTP error which is to be returned
     * @param metadata : Request
     *   metadata for the request, which will often be incomplete since this is an
     *   error
     * @param response : Response
     *   an uninitialized Response should be initialized when this method
     *   completes with information which represents the desired error code in the
     *   ideal case or a fallback code in abnormal circumstances (i.e., 500 is a
     *   fallback for 505, per HTTP specs)
     */
    _handleError(errorCode: any, metadata: any, response: any): void;
    _defaultErrors: {
        400(metadata: any, response: any): void;
        403(metadata: any, response: any): void;
        404(metadata: any, response: any): void;
        416(metadata: any, response: any): void;
        500(metadata: any, response: any): void;
        501(metadata: any, response: any): void;
        505(metadata: any, response: any): void;
    };
    _defaultPaths: {
        "/": (metadata: any, response: any) => void;
        "/trace": (metadata: any, response: any) => void;
    };
}
/**
 * Represents the identity of a server.  An identity consists of a set of
 * (scheme, host, port) tuples denoted as locations (allowing a single server to
 * serve multiple sites or to be used behind both HTTP and HTTPS proxies for any
 * host/port).  Any incoming request must be to one of these locations, or it
 * will be rejected with an HTTP 400 error.  One location, denoted as the
 * primary location, is the location assigned in contexts where a location
 * cannot otherwise be endogenously derived, such as for HTTP/1.0 requests.
 *
 * A single identity may contain at most one location per unique host/port pair;
 * other than that, no restrictions are placed upon what locations may
 * constitute an identity.
 */
declare function ServerIdentity(): void;
declare class ServerIdentity {
    /** The scheme of the primary location. */
    _primaryScheme: string;
    /** The hostname of the primary location. */
    _primaryHost: string;
    /** The port number of the primary location. */
    _primaryPort: number;
    /**
     * The current port number for the corresponding server, stored so that a new
     * primary location can always be set if the current one is removed.
     */
    _defaultPort: number;
    /**
     * Maps hosts to maps of ports to schemes, e.g. the following would represent
     * https://example.com:789/ and http://example.org/:
     *
     *   {
     *     "xexample.com": { 789: "https" },
     *     "xexample.org": { 80: "http" }
     *   }
     *
     * Note the "x" prefix on hostnames, which prevents collisions with special
     * JS names like "prototype".
     */
    _locations: {
        xlocalhost: {};
    };
    get primaryScheme(): any;
    get primaryHost(): any;
    get primaryPort(): any;
    add(scheme: any, host: any, port: any): void;
    remove(scheme: any, host: any, port: any): boolean;
    has(scheme: any, host: any, port: any): boolean;
    getScheme(host: any, port: any): any;
    setPrimary(scheme: any, host: any, port: any): void;
    QueryInterface: any;
    /**
     * Initializes the primary name for the corresponding server, based on the
     * provided port number.
     */
    _initialize(port: any, host: any, addSecondaryDefault: any, dualStack: any): void;
    _host: any;
    /**
     * Called at server shutdown time, unsets the primary location only if it was
     * the default-assigned location and removes the default location from the
     * set of locations used.
     */
    _teardown(): void;
    /**
     * Ensures scheme, host, and port are all valid with respect to RFC 2396.
     *
     * @throws NS_ERROR_ILLEGAL_VALUE
     *   if any argument doesn't match the corresponding production
     */
    _validate(scheme: any, host: any, port: any): void;
}
/** Serves double duty in WriteThroughCopier implementation. */
declare function notImplemented(): void;
/**
 * Constructs an nsISimpleEnumerator for the given array of items.
 *
 * @param items : Array
 *   the items, which must all implement nsISupports
 */
declare function nsSimpleEnumerator(items: any): void;
declare class nsSimpleEnumerator {
    /**
     * Constructs an nsISimpleEnumerator for the given array of items.
     *
     * @param items : Array
     *   the items, which must all implement nsISupports
     */
    constructor(items: any);
    _items: any;
    _nextIndex: number;
    hasMoreElements(): boolean;
    getNext(): any;
    QueryInterface: any;
}
/**
 * Maps absolute paths to files on the local file system (as nsILocalFiles).
 */
declare function FileMap(): void;
declare class FileMap {
    /** Hash which will map paths to nsILocalFiles. */
    _map: {};
    /**
     * Maps key to a clone of the nsIFile value if value is non-null;
     * otherwise, removes any extant mapping for key.
     *
     * @param key : string
     *   string to which a clone of value is mapped
     * @param value : nsIFile
     *   the file to map to key, or null to remove a mapping
     */
    put(key: any, value: any): void;
    /**
     * Returns a clone of the nsIFile mapped to key, or null if no such
     * mapping exists.
     *
     * @param key : string
     *   key to which the returned file maps
     * @returns nsIFile
     *   a clone of the mapped file, or null if no mapping exists
     */
    get(key: any): any;
}
/**
 * The default handler for directories; writes an HTML response containing a
 * slightly-formatted directory listing.
 */
declare function defaultIndexHandler(metadata: any, response: any): void;
export {};
