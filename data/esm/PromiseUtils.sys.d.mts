/**
 * The definition of Deferred object which is returned by PromiseUtils.defer(),
 * It contains a Promise and methods to resolve/reject it.
 */
export function Deferred(): void;
export class Deferred {
    resolve: (value: any) => void;
    reject: (reason?: any) => void;
    promise: Promise<any>;
}
export namespace PromiseUtils {
    function defer(): Deferred;
    /**
     * Requests idle dispatch to the main thread for the given callback,
     * and returns a promise which resolves to the callback's return value
     * when it has been executed.
     *
     * @param {function} callback
     * @param {integer} [timeout]
     *        An optional timeout, after which the callback will be
     *        executed immediately if idle dispatch has not yet occurred.
     *
     * @returns {Promise}
     */
    function idleDispatch(callback: Function, timeout?: integer): Promise<any>;
}
