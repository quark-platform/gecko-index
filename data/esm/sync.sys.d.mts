/**
 * Dispatch a function to be executed on the main thread.
 *
 * @param {Function} func
 *     Function to be executed.
 */
export function executeSoon(func: Function): void;
/**
 * Runs a Promise-like function off the main thread until it is resolved
 * through ``resolve`` or ``rejected`` callbacks.  The function is
 * guaranteed to be run at least once, irregardless of the timeout.
 *
 * The ``func`` is evaluated every ``interval`` for as long as its
 * runtime duration does not exceed ``interval``.  Evaluations occur
 * sequentially, meaning that evaluations of ``func`` are queued if
 * the runtime evaluation duration of ``func`` is greater than ``interval``.
 *
 * ``func`` is given two arguments, ``resolve`` and ``reject``,
 * of which one must be called for the evaluation to complete.
 * Calling ``resolve`` with an argument indicates that the expected
 * wait condition was met and will return the passed value to the
 * caller.  Conversely, calling ``reject`` will evaluate ``func``
 * again until the ``timeout`` duration has elapsed or ``func`` throws.
 * The passed value to ``reject`` will also be returned to the caller
 * once the wait has expired.
 *
 * Usage::
 *
 *     let els = new PollPromise((resolve, reject) => {
 *       let res = document.querySelectorAll("p");
 *       if (res.length > 0) {
 *         resolve(Array.from(res));
 *       } else {
 *         reject([]);
 *       }
 *     }, {timeout: 1000});
 *
 * @param {Condition} func
 *     Function to run off the main thread.
 * @param {object=} options
 * @param {number=} options.timeout
 *     Desired timeout if wanted.  If 0 or less than the runtime evaluation
 *     time of ``func``, ``func`` is guaranteed to run at least once.
 *     Defaults to using no timeout.
 * @param {number=} options.interval
 *     Duration between each poll of ``func`` in milliseconds.
 *     Defaults to 10 milliseconds.
 *
 * @returns {Promise.<*>}
 *     Yields the value passed to ``func``'s
 *     ``resolve`` or ``reject`` callbacks.
 *
 * @throws {*}
 *     If ``func`` throws, its error is propagated.
 * @throws {TypeError}
 *     If `timeout` or `interval`` are not numbers.
 * @throws {RangeError}
 *     If `timeout` or `interval` are not unsigned integers.
 */
export function PollPromise(func: Condition, { timeout, interval }?: object | undefined): Promise<any>;
/**
 * Represents the timed, eventual completion (or failure) of an
 * asynchronous operation, and its resulting value.
 *
 * In contrast to a regular Promise, it times out after ``timeout``.
 *
 * @param {Function} fn
 *     Function to run, which will have its ``reject``
 *     callback invoked after the ``timeout`` duration is reached.
 *     It is given two callbacks: ``resolve(value)`` and
 *     ``reject(error)``.
 * @param {object=} options
 * @param {string} options.errorMessage
 *     Message to use for the thrown error.
 * @param {number=} options.timeout
 *     ``condition``'s ``reject`` callback will be called
 *     after this timeout, given in milliseconds.
 *     By default 1500 ms in an optimised build and 4500 ms in
 *     debug builds.
 * @param {Error=} options.throws
 *     When the ``timeout`` is hit, this error class will be
 *     thrown.  If it is null, no error is thrown and the promise is
 *     instead resolved on timeout with a TimeoutError.
 *
 * @returns {Promise.<*>}
 *     Timed promise.
 *
 * @throws {TypeError}
 *     If `timeout` is not a number.
 * @throws {RangeError}
 *     If `timeout` is not an unsigned integer.
 */
export function TimedPromise(fn: Function, options?: object | undefined): Promise<any>;
/**
 * Pauses for the given duration.
 *
 * @param {number} timeout
 *     Duration to wait before fulfilling promise in milliseconds.
 *
 * @returns {Promise}
 *     Promise that fulfills when the `timeout` is elapsed.
 *
 * @throws {TypeError}
 *     If `timeout` is not a number.
 * @throws {RangeError}
 *     If `timeout` is not an unsigned integer.
 */
export function Sleep(timeout: number): Promise<any>;
/**
 * Detects when the specified message manager has been destroyed.
 *
 * One can observe the removal and detachment of a content browser
 * (`<xul:browser>`) or a chrome window by its message manager
 * disconnecting.
 *
 * When a browser is associated with a tab, this is safer than only
 * relying on the event `TabClose` which signalises the _intent to_
 * remove a tab and consequently would lead to the destruction of
 * the content browser and its browser message manager.
 *
 * When closing a chrome window it is safer than only relying on
 * the event 'unload' which signalises the _intent to_ close the
 * chrome window and consequently would lead to the destruction of
 * the window and its window message manager.
 *
 * @param {MessageListenerManager} messageManager
 *     The message manager to observe for its disconnect state.
 *     Use the browser message manager when closing a content browser,
 *     and the window message manager when closing a chrome window.
 *
 * @returns {Promise}
 *     A promise that resolves when the message manager has been destroyed.
 */
export function MessageManagerDestroyedPromise(messageManager: MessageListenerManager): Promise<any>;
/**
 * Throttle until the main thread is idle and `window` has performed
 * an animation frame (in that order).
 *
 * @param {ChromeWindow} win
 *     Window to request the animation frame from.
 *
 * @returns {Promise}
 */
export function IdlePromise(win: ChromeWindow): Promise<any>;
/**
 * Wait for a message to be fired from a particular message manager.
 *
 * This method has been duplicated from BrowserTestUtils.sys.mjs.
 *
 * @param {nsIMessageManager} messageManager
 *     The message manager that should be used.
 * @param {string} messageName
 *     The message to wait for.
 * @param {object=} options
 *     Extra options.
 * @param {function(Message)=} options.checkFn
 *     Called with the ``Message`` object as argument, should return ``true``
 *     if the message is the expected one, or ``false`` if it should be
 *     ignored and listening should continue. If not specified, the first
 *     message with the specified name resolves the returned promise.
 *
 * @returns {Promise.<object>}
 *     Promise which resolves to the data property of the received
 *     ``Message``.
 */
export function waitForMessage(messageManager: nsIMessageManager, messageName: string, { checkFn }?: object | undefined): Promise<object>;
/**
 * Wait for the specified observer topic to be observed.
 *
 * This method has been duplicated from TestUtils.sys.mjs.
 *
 * Because this function is intended for testing, any error in checkFn
 * will cause the returned promise to be rejected instead of waiting for
 * the next notification, since this is probably a bug in the test.
 *
 * @param {string} topic
 *     The topic to observe.
 * @param {object=} options
 *     Extra options.
 * @param {function(string, object)=} options.checkFn
 *     Called with ``subject``, and ``data`` as arguments, should return true
 *     if the notification is the expected one, or false if it should be
 *     ignored and listening should continue. If not specified, the first
 *     notification for the specified topic resolves the returned promise.
 * @param {number=} options.timeout
 *     Timeout duration in milliseconds, if provided.
 *     If specified, then the returned promise will be rejected with
 *     TimeoutError, if not already resolved, after this duration has elapsed.
 *     If not specified, then no timeout is used. Defaults to null.
 *
 * @returns {Promise.<Array<string, object>>}
 *     Promise which is either resolved to an array of ``subject``, and ``data``
 *     from the observed notification, or rejected with TimeoutError after
 *     options.timeout milliseconds if specified.
 *
 * @throws {TypeError}
 * @throws {RangeError}
 */
export function waitForObserverTopic(topic: string, options?: object | undefined): Promise<Array<string, object>>;
/**
 * Wraps a callback function, that, as long as it continues to be
 * invoked, will not be triggered.  The given function will be
 * called after the timeout duration is reached, after no more
 * events fire.
 *
 * This class implements the {@link EventListener} interface,
 * which means it can be used interchangably with `addEventHandler`.
 *
 * Debouncing events can be useful when dealing with e.g. DOM events
 * that fire at a high rate.  It is generally advisable to avoid
 * computationally expensive operations such as DOM modifications
 * under these circumstances.
 *
 * One such high frequenecy event is `resize` that can fire multiple
 * times before the window reaches its final dimensions.  In order
 * to delay an operation until the window has completed resizing,
 * it is possible to use this technique to only invoke the callback
 * after the last event has fired::
 *
 *     let cb = new DebounceCallback(event => {
 *       // fires after the final resize event
 *       console.log("resize", event);
 *     });
 *     window.addEventListener("resize", cb);
 *
 * Note that it is not possible to use this synchronisation primitive
 * with `addEventListener(..., {once: true})`.
 *
 * @param {function(Event)} fn
 *     Callback function that is guaranteed to be invoked once only,
 *     after `timeout`.
 * @param {number=} [timeout = 250] timeout
 *     Time since last event firing, before `fn` will be invoked.
 */
export class DebounceCallback {
    constructor(fn: any, { timeout }?: {
        timeout?: number;
    });
    fn: any;
    timeout: number;
    timer: any;
    handleEvent(ev: any): void;
}
