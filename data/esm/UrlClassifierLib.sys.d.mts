/**
 * Partially applies a function to a particular "this object" and zero or
 * more arguments. The result is a new function with some arguments of the first
 * function pre-filled and the value of |this| "pre-specified".
 *
 * Remaining arguments specified at call-time are appended to the pre-
 * specified ones.
 *
 * Usage:
 * var barMethBound = BindToObject(myFunction, myObj, "arg1", "arg2");
 * barMethBound("arg3", "arg4");
 *
 * @param fn {string} Reference to the function to be bound
 *
 * @param self {object} Specifies the object which |this| should point to
 * when the function is run. If the value is null or undefined, it will default
 * to the global object.
 *
 * @returns {function} A partially-applied form of the speficied function.
 */
export function BindToObject(fn: string, self: object, opt_args: any, ...args: any[]): Function;
export function UrlClassifierLib(): void;
export class UrlClassifierLib {
    wrappedJSObject: {
        RequestBackoff: typeof RequestBackoff;
        RequestBackoffV4: typeof RequestBackoffV4;
        BindToObject: typeof BindToObject;
    };
    QueryInterface: MozQueryInterface;
}
/**
 * @param maxErrors Number of times to request before backing off.
 * @param retryIncrement Time (ms) for each retry before backing off.
 * @param maxRequests Number the number of requests needed to trigger backoff
 * @param requestPeriod Number time (ms) in which maxRequests have to occur to
 *     trigger the backoff behavior (0 to disable maxRequests)
 * @param timeoutIncrement Number time (ms) the starting timeout period
 *     we double this time for consecutive errors
 * @param maxTimeout Number time (ms) maximum timeout period
 * @param tolerance Checking next request tolerance.
 */
declare function RequestBackoff(maxErrors: any, retryIncrement: any, maxRequests: any, requestPeriod: any, timeoutIncrement: any, maxTimeout: any, tolerance: any, provider?: any): void;
declare class RequestBackoff {
    /**
     * @param maxErrors Number of times to request before backing off.
     * @param retryIncrement Time (ms) for each retry before backing off.
     * @param maxRequests Number the number of requests needed to trigger backoff
     * @param requestPeriod Number time (ms) in which maxRequests have to occur to
     *     trigger the backoff behavior (0 to disable maxRequests)
     * @param timeoutIncrement Number time (ms) the starting timeout period
     *     we double this time for consecutive errors
     * @param maxTimeout Number time (ms) maximum timeout period
     * @param tolerance Checking next request tolerance.
     */
    constructor(maxErrors: any, retryIncrement: any, maxRequests: any, requestPeriod: any, timeoutIncrement: any, maxTimeout: any, tolerance: any, provider?: any);
    MAX_ERRORS_: any;
    RETRY_INCREMENT_: any;
    MAX_REQUESTS_: any;
    REQUEST_PERIOD_: any;
    TIMEOUT_INCREMENT_: any;
    MAX_TIMEOUT_: any;
    TOLERANCE_: any;
    requestTimes_: any[];
    numErrors_: number;
    errorTimeout_: number;
    nextRequestTime_: number;
    canMakeRequestDefault: any;
    canMakeRequest: () => any;
    /**
     * Reset the object for reuse. This deliberately doesn't clear requestTimes_.
     */
    reset(): void;
    noteRequest(): void;
    nextRequestDelay(): number;
    /**
     * Notify this object of the last server response.  If it's an error,
     */
    noteServerResponse(status: any): void;
    /**
     * We consider 302, 303, 307, 4xx, and 5xx http responses to be errors.
     * @param status Number http status
     * @return Boolean true if we consider this http status an error
     */
    isErrorStatus(status: any): boolean;
}
declare function RequestBackoffV4(maxRequests: any, requestPeriod: any, provider?: any): RequestBackoff;
export {};
