/**
 * The network response listener implements the nsIStreamListener and
 * nsIRequestObserver interfaces. This is used within the NetworkObserver feature
 * to get the response body of the request.
 *
 * The code is mostly based on code listings from:
 *
 *   http://www.softwareishard.com/blog/firebug/
 *      nsitraceablechannel-intercept-http-traffic/
 *
 * @constructor
 * @param {Object} httpActivity
 *        HttpActivity object associated with this request. See NetworkObserver
 *        more information.
 * @param {Map} decodedCertificateCache
 *        A Map of certificate fingerprints to decoded certificates, to avoid
 *        repeatedly decoding previously-seen certificates.
 */
export class NetworkResponseListener {
    constructor(httpActivity: any, decodedCertificateCache: any, fromServiceWorker: any);
    set inputStream(inputStream: any);
    set sink(sink: any);
    /**
     * This object implements nsIProgressEventSink, but also needs to forward
     * interface requests to the notification callbacks of other objects.
     */
    getInterface(iid: any): any;
    /**
     * Set the async listener for the given nsIAsyncInputStream. This allows us to
     * wait asynchronously for any data coming from the stream.
     *
     * @param nsIAsyncInputStream stream
     *        The input stream from where we are waiting for data to come in.
     * @param nsIInputStreamCallback listener
     *        The input stream callback you want. This is an object that must have
     *        the onInputStreamReady() method. If the argument is null, then the
     *        current callback is removed.
     * @return void
     */
    setAsyncListener(stream: any, listener: any): void;
    /**
     * Stores the received data, if request/response body logging is enabled. It
     * also does limit the number of stored bytes, based on the
     * `devtools.netmonitor.responseBodyLimit` pref.
     *
     * Learn more about nsIStreamListener at:
     * https://developer.mozilla.org/en/XPCOM_Interface_Reference/nsIStreamListener
     *
     * @param nsIRequest request
     * @param nsISupports context
     * @param nsIInputStream inputStream
     * @param unsigned long offset
     * @param unsigned long count
     */
    onDataAvailable(request: any, inputStream: any, offset: any, count: any): void;
    /**
     * See documentation at
     * https://developer.mozilla.org/En/NsIRequestObserver
     *
     * @param nsIRequest request
     * @param nsISupports context
     */
    onStartRequest(request: any): void;
    /**
     * Handle the onStopRequest by closing the sink output stream.
     *
     * For more documentation about nsIRequestObserver go to:
     * https://developer.mozilla.org/En/NsIRequestObserver
     */
    onStopRequest(): void;
    /**
     * Handle progress event as data is transferred.  This is used to record the
     * size on the wire, which may be compressed / encoded.
     */
    onProgress(request: any, progress: any, progressMax: any, ...args: any[]): void;
    onStatus(...args: any[]): void;
    /**
     * Clean up the response listener once the response input stream is closed.
     * This is called from onStopRequest() or from onInputStreamReady() when the
     * stream is closed.
     * @return void
     */
    onStreamClose(): void;
    /**
     * The nsIInputStreamCallback for when the request input stream is ready -
     * either it has more data or it is closed.
     *
     * @param nsIAsyncInputStream stream
     *        The sink input stream from which data is coming.
     * @returns void
     */
    onInputStreamReady(stream: any): void;
    QueryInterface: MozQueryInterface;
    #private;
}
