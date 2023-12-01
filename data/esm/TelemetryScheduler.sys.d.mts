export namespace Policy {
    function now(): Date;
    function setSchedulerTickTimeout(callback: any, delayMs: any): number;
    function clearSchedulerTickTimeout(id: any): void;
    function prioEncode(batchID: any, prioParams: any): any;
}
export namespace TelemetryScheduler {
    let _lastDailyPingTime: number;
    let _lastSessionCheckpointTime: number;
    let _lastPeriodicPingTime: number;
    let _log: any;
    let _schedulerTimer: any;
    let _schedulerInterval: number;
    let _shuttingDown: boolean;
    let _isUserIdle: boolean;
    /**
     * Initialises the scheduler and schedules the first daily/aborted session pings.
     */
    function init(): void;
    /**
     * Stops the scheduler.
     */
    function shutdown(): void;
    function testReset(): void;
    function _clearTimeout(): void;
    /**
     * Reschedules the tick timer.
     */
    function _rescheduleTimeout(): void;
    function _sentPingToday(pingTime: any, nowDate: any): boolean;
    /**
     * Checks if we can send a daily ping or not.
     * @param {Object} nowDate A date object.
     * @return {Boolean} True if we can send the daily ping, false otherwise.
     */
    function _isDailyPingDue(nowDate: any): boolean;
    /**
     * Checks if we can send a regular ping or not.
     * @param {Object} nowDate A date object.
     * @return {Boolean} True if we can send the regular pings, false otherwise.
     */
    function _isPeriodicPingDue(nowDate: any): boolean;
    /**
     * An helper function to save an aborted-session ping.
     * @param {Number} now The current time, in milliseconds.
     * @param {Object} [competingPayload=null] If we are coalescing the daily and the
     *                 aborted-session pings, this is the payload for the former. Note
     *                 that the reason field of this payload will be changed.
     * @return {Promise} A promise resolved when the ping is saved.
     */
    function _saveAbortedPing(now: number, competingPayload?: any): Promise<any>;
    /**
     * The notifications handler.
     */
    function observe(aSubject: any, aTopic: any, aData: any): Promise<any>;
    /**
     * Creates an object with a method `dispatch` that will call `dispatchFn` unless
     * the method `cancel` is called beforehand.
     *
     * This is used to wrap main thread idle dispatch since it does not provide a
     * cancel mechanism.
     */
    function _makeIdleDispatch(dispatchFn: any): {
        cancel(): void;
        dispatch(resolve: any, reject: any): any;
    };
    /**
     * Performs a scheduler tick. This function manages Telemetry recurring operations.
     * @param {Boolean} [dispatchOnIdle=false] If true, the tick is dispatched in the
     *                  next idle cycle of the main thread.
     * @return {Promise} A promise, only used when testing, resolved when the scheduled
     *                   operation completes.
     */
    function _onSchedulerTick(dispatchOnIdle?: boolean): Promise<any>;
    /**
     * Implements the scheduler logic.
     * @return {Promise} Resolved when the scheduled task completes. Only used in tests.
     */
    function _schedulerTickLogic(): Promise<any>;
    /**
     * Re-schedule the daily ping if some other equivalent ping was sent.
     *
     * This is only called from TelemetrySession when a main ping with reason 'environment-change'
     * is sent.
     *
     * @param {Object} [payload] The payload of the ping that was sent,
     *                           to be stored as an aborted-session ping.
     */
    function rescheduleDailyPing(payload?: any): void;
}
