export namespace Policy {
    function setTimeout(callback: any, delayMs: any): any;
    function clearTimeout(id: any): any;
    function sendPing(type: any, payload: any, options: any): any;
}
export namespace TelemetryEventPing {
    let Reason: Readonly<{
        PERIODIC: "periodic";
        MAX: "max";
        SHUTDOWN: "shutdown";
    }>;
    let EVENT_PING_TYPE: string;
    let _logger: any;
    let _testing: boolean;
    let _lastSendTime: number;
    let _processStartTimestamp: number;
    const dataset: any;
    function startup(): void;
    function shutdown(): void;
    function observe(aSubject: any, aTopic: any, aData: any): void;
    function _startTimer(delay?: any, reason?: any, discardLeftovers?: boolean): void;
    function _clearTimer(): void;
    /**
     * Submits an "event" ping and restarts the timer for the next interval.
     *
     * @param {String} reason The reason we're sending the ping. One of TelemetryEventPing.Reason.
     * @param {bool} discardLeftovers Whether to discard event records left over from a previous ping.
     */
    function _submitPing(reason: string, discardLeftovers?: bool): void;
    /**
     * Test-only, restore to initial state.
     */
    function testReset(): void;
    const _log: any;
}
