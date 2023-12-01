export namespace Async {
    function chain(...funcs: any[]): (...args: any[]) => void;
    function checkAppReady(): any;
    /**
     * Check if the app is still ready (not quitting). Returns true if the app
     * is ready, or false if it is being shut down.
     */
    function isAppReady(): any;
    /**
     * Check if the passed exception is one raised by checkAppReady. Typically
     * this will be used in exception handlers to allow such exceptions to
     * make their way to the top frame and allow the app to actually terminate.
     */
    function isShutdownException(exception: any): boolean;
    /**
     * A "tight loop" of promises can still lock up the browser for some time.
     * Periodically waiting for a promise returned by this function will solve
     * that.
     * You should probably not use this method directly and instead use jankYielder
     * below.
     * Some reference here:
     * - https://gist.github.com/jesstelford/bbb30b983bddaa6e5fef2eb867d37678
     * - https://bugzilla.mozilla.org/show_bug.cgi?id=1094248
     */
    function promiseYield(): Promise<any>;
    /**
     * Shared state for yielding every N calls.
     *
     * Can be passed to multiple Async.yieldingForEach to have them overall yield
     * every N iterations.
     */
    function yieldState(yieldEvery?: number): {
        shouldYield(): boolean;
    };
    /**
     * Apply the given function to each element of the iterable, yielding the
     * event loop every yieldEvery iterations.
     *
     * @param iterable {Iterable}
     *        The iterable or iterator to iterate through.
     *
     * @param fn {(*) -> void|boolean}
     *        The function to be called on each element of the iterable.
     *
     *        Returning true from the function will stop the iteration.
     *
     * @param [yieldEvery = 50] {number|object}
     *        The number of iterations to complete before yielding back to the event
     *        loop.
     *
     * @return {boolean}
     *         Whether or not the function returned early.
     */
    function yieldingForEach(iterable: Iterable<any>, fn: any, yieldEvery?: any): boolean;
    function asyncQueueCaller(log: any): AsyncQueueCaller;
    function asyncObserver(log: any, obj: any): AsyncObserver;
    function watchdog(): Watchdog;
}
/**
 * Allows consumers to enqueue asynchronous callbacks to be called in order.
 * Typically this is used when providing a callback to a caller that doesn't
 * await on promises.
 */
declare class AsyncQueueCaller {
    constructor(log: any);
    _log: any;
    _queue: Promise<void>;
    QueryInterface: MozQueryInterface;
    /**
     * /!\ Never await on another function that calls enqueueCall /!\
     *     on the same queue or we will deadlock.
     */
    enqueueCall(func: any): void;
    promiseCallsComplete(): Promise<void>;
}
declare class AsyncObserver extends AsyncQueueCaller {
    constructor(obj: any, log: any);
    obj: any;
    observe(subject: any, topic: any, data: any): void;
    promiseObserversComplete(): Promise<void>;
}
/**
 * Woof! Signals an operation to abort, either at shutdown or after a timeout.
 * The buffered engine uses this to abort long-running merges, so that they
 * don't prevent Firefox from quitting, or block future syncs.
 */
declare class Watchdog {
    controller: AbortController;
    timer: nsITimerType;
    /**
     * The reason for signaling an abort. `null` if not signaled,
     * `"timeout"` if the watchdog timer fired, or `"shutdown"` if the app is
     * is quitting.
     *
     * @type {String?}
     */
    abortReason: string | null;
    /**
     * Returns the abort signal for this watchdog. This can be passed to APIs
     * that take a signal for cancellation, like `SyncedBookmarksMirror::apply`
     * or `fetch`.
     *
     * @type {AbortSignal}
     */
    get signal(): AbortSignal;
    /**
     * Starts the watchdog timer, and listens for the app quitting.
     *
     * @param {Number} delay
     *                 The time to wait before signaling the operation to abort.
     */
    start(delay: number): void;
    /**
     * Stops the watchdog timer and removes any listeners. This should be called
     * after the operation finishes.
     */
    stop(): void;
    observe(subject: any, topic: any, data: any): void;
}
export {};
