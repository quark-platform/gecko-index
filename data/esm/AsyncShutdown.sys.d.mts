export namespace AsyncShutdown {
    export let webWorkersShutdown: any;
    export let xpcomWillShutdown: any;
    export { Barrier };
}
/**
 * A mechanism used to register blockers that prevent some action from
 * happening.
 *
 * An instance of |Barrier| provides a capability |client| that
 * clients can use to register blockers. The barrier is resolved once
 * all registered blockers have been resolved. The owner of the
 * |Barrier| may wait for the resolution of the barrier and obtain
 * information on which blockers have not been resolved yet.
 *
 * @param {string} name The name of the blocker. Used mainly for error-
 *     reporting.
 */
declare function Barrier(name: string): void;
declare class Barrier {
    /**
     * A mechanism used to register blockers that prevent some action from
     * happening.
     *
     * An instance of |Barrier| provides a capability |client| that
     * clients can use to register blockers. The barrier is resolved once
     * all registered blockers have been resolved. The owner of the
     * |Barrier| may wait for the resolution of the barrier and obtain
     * information on which blockers have not been resolved yet.
     *
     * @param {string} name The name of the blocker. Used mainly for error-
     *     reporting.
     */
    constructor(name: string);
    /**
     * The set of all Promise for which we need to wait before the barrier
     * is lifted. Note that this set may be changed while we are waiting.
     *
     * Set to `null` once the wait is complete.
     */
    _waitForMe: PromiseSet;
    /**
     * A map from conditions, as passed by users during the call to `addBlocker`,
     * to `promise`, as present in `this._waitForMe`.
     *
     * Used to let users perform cleanup through `removeBlocker`.
     * Set to `null` once the wait is complete.
     *
     * Key: condition (any, as passed by user)
     * Value: promise used as a key in `this._waitForMe`. Note that there is
     * no guarantee that the key is still present in `this._waitForMe`.
     */
    _conditionToPromise: Map<any, any>;
    /**
     * A map from Promise, as present in `this._waitForMe` or
     * `this._conditionToPromise`, to information on blockers.
     *
     * Key: Promise (as present in this._waitForMe or this._conditionToPromise).
     * Value:  {
     *  trigger: function,
     *  promise,
     *  name,
     *  fetchState: function,
     *  stack,
     *  filename,
     *  lineNumber
     * };
     */
    _promiseToBlocker: Map<any, any>;
    _name: string;
    /**
     * A cache for the promise returned by wait().
     */
    _promise: any;
    /**
     * `true` once we have started waiting.
     */
    _isStarted: boolean;
    /**
     * `true` once we're done and won't accept any new blockers.
     */
    _isClosed: boolean;
    /**
     * The capability of adding blockers. This object may safely be returned
     * or passed to clients.
     */
    client: {
        /**
         * The name of the barrier owning this client.
         */
        readonly name: string;
        /**
         * Register a blocker for the completion of this barrier.
         *
         * @param {string} name The human-readable name of the blocker. Used
         * for debugging/error reporting. Please make sure that the name
         * respects the following model: "Some Service: some action in progress" -
         * for instance "OS.File: flushing all pending I/O";
         * @param {function|promise|*} condition A condition blocking the
         * completion of the phase. Generally, this is a function
         * returning a promise. This function is evaluated during the
         * phase and the phase is guaranteed to not terminate until the
         * resulting promise is either resolved or rejected. If
         * |condition| is not a function but another value |v|, it behaves
         * as if it were a function returning |v|.
         * @param {object*} details Optionally, an object with details
         * that may be useful for error reporting, as a subset of of the following
         * fields:
         * - fetchState (strongly recommended) A function returning
         *    information about the current state of the blocker as an
         *    object. Used for providing more details when logging errors or
         *    crashing.
         * - stack. A string containing stack information. This module can
         *    generally infer stack information if it is not provided.
         * - lineNumber A number containing the line number for the caller.
         *    This module can generally infer this information if it is not
         *    provided.
         * - filename A string containing the filename for the caller. This
         *    module can generally infer  the information if it is not provided.
         */
        addBlocker: (name: string, condition: Function | Promise<any> | any, details: any) => void;
        _internalAddBlocker: (name: any, condition: any, { fetchState, filename, lineNumber, stack }: {
            fetchState?: any;
            filename?: any;
            lineNumber?: any;
            stack?: any;
        }) => void;
        /**
         * Remove the blocker for a condition.
         *
         * If several blockers have been registered for the same
         * condition, remove all these blockers. If no blocker has been
         * registered for this condition, this is a noop.
         *
         * @return {boolean} true if at least one blocker has been
         * removed, false otherwise.
         */
        removeBlocker: (condition: any) => boolean;
    };
}
/**
 * A set of Promise that supports waiting.
 *
 * Promise items may be added or removed during the wait. The wait will
 * resolve once all Promise items have been resolved or removed.
 */
declare function PromiseSet(): void;
declare class PromiseSet {
    /**
     * key: the Promise passed pass the client of the `PromiseSet`.
     * value: an indirection on top of `key`, as an object with
     *   the following fields:
     *   - indirection: a Promise resolved if `key` is resolved or
     *     if `resolve` is called
     *   - resolve: a function used to resolve the indirection.
     */
    _indirections: Map<any, any>;
    _done: boolean;
    /**
     * Wait until all Promise have been resolved or removed.
     *
     * Note that calling `wait()` causes Promise to be removed from the
     * Set once they are resolved.
     * @param {function} onDoneCb invoked synchronously once all the entries
     * have been handled and no new entries will be accepted.
     * @return {Promise} Resolved once all Promise have been resolved or removed,
     * or rejected after at least one Promise has rejected.
     */
    wait(onDoneCb: Function): Promise<any>;
    /**
     * Add a new Promise to the set.
     *
     * Calls to wait (including ongoing calls) will only return once
     * `key` has either resolved or been removed.
     */
    add(key: any): void;
    /**
     * Remove a Promise from the set.
     *
     * Calls to wait (including ongoing calls) will ignore this promise,
     * unless it is added again.
     */
    delete(key: any): boolean;
    _ensurePromise(key: any): void;
}
export {};
