/**
 * This class will wrap the errors returned by the nsIBits interface to make
 * them more uniform and more easily consumable.
 *
 * The values of stored by this error type are entirely numeric. This should
 * make them easier to consume with JS and telemetry, but does make them fairly
 * unreadable. nsIBits.idl will need to be referenced to look up what errors
 * the values correspond to.
 *
 * The type of BitsError.code is dependent on the value of BitsError.codeType.
 * It may be null, a number (corresponding to an nsresult or hresult value),
 * a string, or an exception.
 */
export class BitsError extends Error {
    constructor(type: any, action: any, stage: any, codeType: any, code: any);
    type: any;
    action: any;
    stage: any;
    codeType: any;
    code: any;
    succeeded: boolean;
}
export class BitsVerificationError extends BitsError {
    constructor();
}
export class BitsUnknownError extends BitsError {
    constructor();
}
/**
 * This class is a wrapper around nsIBitsRequest that converts functions taking
 * callbacks to asynchronous functions. This class implements nsIRequest.
 *
 * Note that once the request has been shutdown, calling methods on it will
 * cause an exception to be thrown. The request will be shutdown automatically
 * when the BITS job is successfully completed or cancelled. If the request is
 * no longer needed, but the transfer is still in progress, the shutdown method
 * should be called manually to prevent memory leaks.
 * Getter methods (except loadGroup and loadFlags) should continue to be
 * accessible, even after shutdown.
 */
export class BitsRequest {
    constructor(request: any);
    _request: any;
    /**
     * This function releases the Rust request that backs this wrapper. Calling
     * any method on this request after calling release will result in a BitsError
     * being thrown.
     *
     * This step is important, because otherwise a cycle exists that the cycle
     * collector doesn't know about. To break this cycle, either the Rust request
     * needs to let go of the observer, or the JS request wrapper needs to let go
     * of the Rust request (which is what we do here).
     *
     * Once there is support for cycle collection of cycles that extend through
     * Rust, this function may no longer be necessary.
     */
    shutdown(): void;
    _name: any;
    _status: any;
    _bitsId: any;
    _transferError: any;
    /**
     * Allows consumers to determine if this request has been shutdown.
     */
    get hasShutdown(): boolean;
    /**
     * This is the nsIRequest implementation. Since this._request is an
     * nsIRequest, these functions just call the corresponding method on it.
     *
     * Note that nsIBitsRequest does not yet properly implement load groups or
     * load flags. This class will still forward those calls, but they will have
     * not succeed.
     */
    get name(): any;
    isPending(): any;
    get status(): any;
    cancel(status: any): Promise<void>;
    suspend(): any;
    resume(): any;
    set loadGroup(group: any);
    get loadGroup(): any;
    set loadFlags(flags: any);
    get loadFlags(): any;
    /**
     * This function wraps nsIBitsRequest::bitsId.
     */
    get bitsId(): any;
    /**
     * This function wraps nsIBitsRequest::transferError.
     *
     * Instead of simply returning the nsBitsErrorType value, however, it returns
     * a BitsError object, or null.
     */
    get transferError(): BitsError;
    /**
     * This function wraps nsIBitsRequest::changeMonitorInterval.
     *
     * Instead of taking a callback, the function is asynchronous.
     * This method either resolves with no data, or rejects with a BitsError.
     */
    changeMonitorInterval(monitorIntervalMs: any): Promise<any>;
    /**
     * This function wraps nsIBitsRequest::cancelAsync.
     *
     * Instead of taking a callback, the function is asynchronous.
     * This method either resolves with no data, or rejects with a BitsError.
     *
     * Adds a default status of NS_ERROR_ABORT if one is not provided.
     */
    cancelAsync(status: any): Promise<void>;
    /**
     * This function wraps nsIBitsRequest::setPriorityHigh.
     *
     * Instead of taking a callback, the function is asynchronous.
     * This method either resolves with no data, or rejects with a BitsError.
     */
    setPriorityHigh(): Promise<any>;
    /**
     * This function wraps nsIBitsRequest::setPriorityLow.
     *
     * Instead of taking a callback, the function is asynchronous.
     * This method either resolves with no data, or rejects with a BitsError.
     */
    setPriorityLow(): Promise<any>;
    /**
     * This function wraps nsIBitsRequest::setNoProgressTimeout.
     *
     * Instead of taking a callback, the function is asynchronous.
     * This method either resolves with no data, or rejects with a BitsError.
     */
    setNoProgressTimeout(timeoutSecs: any): Promise<any>;
    /**
     * This function wraps nsIBitsRequest::complete.
     *
     * Instead of taking a callback, the function is asynchronous.
     * This method either resolves with no data, or rejects with a BitsError.
     */
    complete(): Promise<void>;
    /**
     * This function wraps nsIBitsRequest::suspendAsync.
     *
     * Instead of taking a callback, the function is asynchronous.
     * This method either resolves with no data, or rejects with a BitsError.
     */
    suspendAsync(): Promise<any>;
    /**
     * This function wraps nsIBitsRequest::resumeAsync.
     *
     * Instead of taking a callback, the function is asynchronous.
     * This method either resolves with no data, or rejects with a BitsError.
     */
    resumeAsync(): Promise<any>;
    QueryInterface: any;
}
export namespace Bits {
    const initialized: any;
    /**
     * This function wraps nsIBits::init.
     */
    function init(jobName: any, savePathPrefix: any, monitorTimeoutMs: any): any;
    /**
     * This function wraps nsIBits::startDownload.
     *
     * Instead of taking a callback, the function is asynchronous.
     * This method either resolves with a BitsRequest (which is also an
     * nsIRequest), or rejects with a BitsError.
     */
    function startDownload(downloadURL: any, saveRelPath: any, proxy: any, noProgressTimeoutSecs: any, monitorIntervalMs: any, observer: any, context: any): Promise<any>;
    /**
     * This function wraps nsIBits::monitorDownload.
     *
     * Instead of taking a callback, the function is asynchronous.
     * This method either resolves with a BitsRequest (which is also an
     * nsIRequest), or rejects with a BitsError.
     */
    function monitorDownload(id: any, monitorIntervalMs: any, observer: any, context: any): Promise<any>;
}
