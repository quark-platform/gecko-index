/**
 * The ConsoleAPIListener can be used to listen for messages coming from console
 * API usage in a given windowGlobal, eg. console.log, console.error, ...
 *
 * Example:
 * ```
 * const listener = new ConsoleAPIListener(innerWindowId);
 * listener.on("message", onConsoleAPIMessage);
 * listener.startListening();
 *
 * const onConsoleAPIMessage = (eventName, data = {}) => {
 *   const { arguments: msgArguments, level, stacktrace, timeStamp } = data;
 *   ...
 * };
 * ```
 *
 * @fires message
 *    The ConsoleAPIListener emits "message" events, with the following object as
 *    payload:
 *      - {Array<Object>} arguments - Arguments as passed-in when the method was called.
 *      - {String} level - Importance, one of `info`, `warn`, `error`, `debug`, `trace`.
 *      - {Array<Object>} stacktrace - List of stack frames, starting from most recent.
 *      - {Number} timeStamp - Timestamp when the method was called.
 */
export class ConsoleAPIListener {
    /**
     * Create a new ConsoleAPIListener instance.
     *
     * @param {number} innerWindowId
     *     The inner window id to filter the messages for.
     */
    constructor(innerWindowId: number);
    destroy(): void;
    startListening(): void;
    stopListening(): void;
    #private;
}
