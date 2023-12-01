/**
 * Sets up a task whose execution can be triggered after a delay.
 *
 * @param {() => Promise<void> | void} aTaskFn
 *        Function to execute.  If the function returns a promise, the task is
 *        not considered complete until that promise resolves.  This
 *        task is never re-entered while running.
 * @param {number} aDelayMs
 *        Time between executions, in milliseconds.  Multiple attempts to run
 *        the task before the delay has passed are coalesced.  This time of
 *        inactivity is guaranteed to pass between multiple executions of the
 *        task, except on finalization, when the task may restart immediately
 *        after the previous execution finished.
 * @param {number?} aIdleTimeoutMs
 *        The maximum time to wait for an idle slot on the main thread after
 *        aDelayMs have elapsed. If omitted, waits indefinitely for an idle
 *        callback.
 */
export function DeferredTask(aTaskFn: () => Promise<void> | void, aDelayMs: number, aIdleTimeoutMs: number | null): void;
export class DeferredTask {
    /**
     * Sets up a task whose execution can be triggered after a delay.
     *
     * @param {() => Promise<void> | void} aTaskFn
     *        Function to execute.  If the function returns a promise, the task is
     *        not considered complete until that promise resolves.  This
     *        task is never re-entered while running.
     * @param {number} aDelayMs
     *        Time between executions, in milliseconds.  Multiple attempts to run
     *        the task before the delay has passed are coalesced.  This time of
     *        inactivity is guaranteed to pass between multiple executions of the
     *        task, except on finalization, when the task may restart immediately
     *        after the previous execution finished.
     * @param {number?} aIdleTimeoutMs
     *        The maximum time to wait for an idle slot on the main thread after
     *        aDelayMs have elapsed. If omitted, waits indefinitely for an idle
     *        callback.
     */
    constructor(aTaskFn: () => Promise<void> | void, aDelayMs: number, aIdleTimeoutMs: number | null);
    _taskFn: null;
    _delayMs: null;
    _timeoutMs: number;
    _caller: string;
    /**
     * Indicates whether the task is currently requested to start again later,
     * regardless of whether it is currently running.
     */
    get isArmed(): boolean;
    _armed: boolean;
    /**
     * Indicates whether the task is currently running.  This is always true when
     * read from code inside the task function, but can also be true when read
     * from external code, in case the task is an asynchronous function.
     */
    get isRunning(): boolean;
    _runningPromise: null;
    _timer: null;
    /**
     * Actually starts the timer with the delay specified on construction.
     */
    _startTimer(): void;
    /**
     * Dispatches idle task. Can be overridden for testing by test_DeferredTask.
     */
    _startIdleDispatch(callback: any, timeout: any): void;
    /**
     * Requests the execution of the task after the delay specified on
     * construction.  Multiple calls don't introduce further delays.  If the task
     * is running, the delay will start when the current execution finishes.
     *
     * The task will always be executed on a different tick of the event loop,
     * even if the delay specified on construction is zero.  Multiple "arm" calls
     * within the same tick of the event loop are guaranteed to result in a single
     * execution of the task.
     *
     * @note By design, this method doesn't provide a way for the caller to detect
     *       when the next execution terminates, or collect a result.  In fact,
     *       doing that would often result in duplicate processing or logging.  If
     *       a special operation or error logging is needed on completion, it can
     *       be better handled from within the task itself, for example using a
     *       try/catch/finally clause in the task.  The "finalize" method can be
     *       used in the common case of waiting for completion on shutdown.
     */
    arm(): void;
    /**
     * Cancels any request for a delayed the execution of the task, though the
     * task itself cannot be canceled in case it is already running.
     *
     * This method stops any currently running timer, thus the delay will restart
     * from its original value in case the "arm" method is called again.
     */
    disarm(): void;
    /**
     * Ensures that any pending task is executed from start to finish, while
     * preventing any attempt to arm the timer again.
     *
     * - If the task is running and the timer is armed, then one last execution
     *   from start to finish will happen again, immediately after the current
     *   execution terminates, then the returned promise will be resolved.
     * - If the task is running and the timer is not armed, the returned promise
     *   will be resolved when the current execution terminates.
     * - If the task is not running and the timer is armed, then the task is
     *   started immediately, and the returned promise resolves when the new
     *   execution terminates.
     * - If the task is not running and the timer is not armed, the method returns
     *   a resolved promise.
     *
     * @return {Promise}
     * @resolves After the last execution of the task is finished.
     * @rejects Never.
     */
    finalize(): Promise<any>;
    _finalized: boolean;
    /**
     * Whether the DeferredTask has been finalized, and it cannot be armed anymore.
     */
    get isFinalized(): boolean;
    /**
     * Timer callback used to run the delayed task.
     */
    _timerCallback(): void;
    /**
     * Executes the associated task and catches exceptions.
     */
    _runTask(): Promise<void>;
}
