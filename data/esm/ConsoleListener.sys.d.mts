/**
 * The ConsoleListener can be used to listen for console messages related to
 * Javascript errors, certain warnings which all happen within a specific
 * windowGlobal. Consumers can listen for the message types "error",
 * "warn" and "info".
 *
 * Example:
 * ```
 * const onJavascriptError = (eventName, data = {}) => {
 *   const { level, message, stacktrace, timestamp } = data;
 *   ...
 * };
 *
 * const listener = new ConsoleListener(innerWindowId);
 * listener.on("error", onJavascriptError);
 * listener.startListening();
 * ...
 * listener.stopListening();
 * ```
 *
 * @fires message
 *    The ConsoleListener emits "error", "warn" and "info" events, with the
 *    following object as payload:
 *      - {String} level - Importance, one of `info`, `warn`, `error`,
 *        `debug`, `trace`.
 *      - {String} message - Actual message from the console entry.
 *      - {Array<StackFrame>} stacktrace - List of stack frames,
 *        starting from most recent.
 *      - {Number} timeStamp - Timestamp when the method was called.
 */
export class ConsoleListener {
    /**
     * Create a new ConsoleListener instance.
     *
     * @param {number} innerWindowId
     *     The inner window id to filter the messages for.
     */
    constructor(innerWindowId: number);
    get listening(): boolean;
    destroy(): void;
    startListening(): void;
    stopListening(): void;
    get QueryInterface(): MozQueryInterface;
    #private;
}
