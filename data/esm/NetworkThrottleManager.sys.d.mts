/**
 * Construct a new object that can be used to throttle the network for
 * a group of related network requests.
 *
 * @param {Object} An object with the following attributes:
 * latencyMean {Number} Mean latency in milliseconds.
 * latencyMax {Number} Maximum latency in milliseconds.
 * downloadBPSMean {Number} Mean bytes per second for downloads.
 * downloadBPSMax {Number} Maximum bytes per second for downloads.
 * uploadBPSMean {Number} Mean bytes per second for uploads.
 * uploadBPSMax {Number} Maximum bytes per second for uploads.
 *
 * Download throttling will not be done if downloadBPSMean and
 * downloadBPSMax are <= 0.  Upload throttling will not be done if
 * uploadBPSMean and uploadBPSMax are <= 0.
 */
export class NetworkThrottleManager {
    constructor({ latencyMean, latencyMax, downloadBPSMean, downloadBPSMax, uploadBPSMean, uploadBPSMax, }: {
        latencyMean: any;
        latencyMax: any;
        downloadBPSMean: any;
        downloadBPSMax: any;
        uploadBPSMean: any;
        uploadBPSMax: any;
    });
    uploadQueue: nsISupportsType;
    /**
     * Create a new NetworkThrottleListener for a given channel and
     * install it using |setNewListener|.
     *
     * @param {nsITraceableChannel} channel the channel to manage
     * @return {NetworkThrottleListener} the new listener, or null if
     *         download throttling is not being done.
     */
    manage(channel: nsITraceableChannel): NetworkThrottleListener;
    /**
     * Throttle uploads taking place on the given channel.
     *
     * @param {nsITraceableChannel} channel the channel to manage
     */
    manageUpload(channel: nsITraceableChannel): void;
    #private;
}
declare class NetworkThrottleListener {
    /**
     * Construct a new nsIStreamListener that buffers data and provides a
     * method to notify another listener when data is available.  This is
     * used to throttle network data on a per-channel basis.
     *
     * After construction, @see setOriginalListener must be called on the
     * new object.
     *
     * @param {NetworkThrottleQueue} queue the NetworkThrottleQueue to
     *        which status changes should be reported
     */
    constructor(queue: NetworkThrottleQueue);
    /**
     * Set the original listener for this object.  The original listener
     * will receive requests from this object when the queue allows data
     * through.
     *
     * @param {nsIStreamListener} originalListener the original listener
     *        for the channel, to which all requests will be sent
     */
    setOriginalListener(originalListener: nsIStreamListener): void;
    /**
     * @see nsIStreamListener.onStartRequest.
     */
    onStartRequest(request: any): void;
    /**
     * @see nsIStreamListener.onStopRequest.
     */
    onStopRequest(request: any, statusCode: any): void;
    /**
     * @see nsIStreamListener.onDataAvailable.
     */
    onDataAvailable(request: any, inputStream: any, offset: any, count: any): void;
    /**
     * Allow some buffered data from this object to be forwarded to this
     * object's originalListener.
     *
     * @param {Number} bytesPermitted The maximum number of bytes
     *        permitted to be sent.
     * @return {Object} an object of the form {length, done}, where
     *         |length| is the number of bytes actually forwarded, and
     *         |done| is a boolean indicating whether this particular
     *         request has been completed.  (A NetworkThrottleListener
     *         may be queued multiple times, so this does not mean that
     *         all available data has been sent.)
     */
    sendSomeData(bytesPermitted: number): any;
    /**
     * Return the number of pending data requests available for this
     * listener.
     */
    pendingCount(): number;
    /**
     * This is called when an http activity event is delivered.  This
     * object delays the event until the appropriate moment.
     */
    addActivityCallback(callback: any, httpActivity: any, channel: any, activityType: any, activitySubtype: any, timestamp: any, extraSizeData: any, extraStringData: any): void;
    totalSize: any;
    /**
     * This is called for a download throttler when the latency timeout
     * has ended.
     */
    responseStart(): void;
    QueryInterface: MozQueryInterface;
    #private;
}
declare class NetworkThrottleQueue {
    /**
     * Construct a new queue that can be used to throttle the network for
     * a group of related network requests.
     *
     * meanBPS {Number} Mean bytes per second.
     * maxBPS {Number} Maximum bytes per second.
     * latencyMean {Number} Mean latency in milliseconds.
     * latencyMax {Number} Maximum latency in milliseconds.
     */
    constructor(meanBPS: any, maxBPS: any, latencyMean: any, latencyMax: any);
    /**
     * Notice a new listener object.  This is called by the
     * NetworkThrottleListener when the request has started.  Initially
     * a new listener object is put into a "pending" state, until the
     * round-trip time has elapsed.  This is used to simulate latency.
     *
     * @param {NetworkThrottleListener} throttleListener the new listener
     */
    start(throttleListener: NetworkThrottleListener): void;
    /**
     * Note that new data is available for a given listener.  Each time
     * data is available, the listener will be re-queued.
     *
     * @param {NetworkThrottleListener} throttleListener the listener
     *        which has data available.
     */
    dataAvailable(throttleListener: NetworkThrottleListener): void;
    #private;
}
export {};
