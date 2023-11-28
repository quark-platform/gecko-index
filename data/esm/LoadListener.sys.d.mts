/**
 * The LoadListener can be used to listen for load events.
 *
 * Example:
 * ```
 * const listener = new LoadListener();
 * listener.on("DOMContentLoaded", onDOMContentLoaded);
 * listener.startListening();
 *
 * const onDOMContentLoaded = (eventName, data = {}) => {
 *   const { target } = data;
 *   ...
 * };
 * ```
 *
 * @fires message
 *    The LoadListener emits "DOMContentLoaded" and "load" events,
 *    with the following object as payload:
 *      - {Document} target
 *            The target document.
 */
export class LoadListener {
    /**
     * Create a new LoadListener instance.
     */
    constructor(win: any);
    destroy(): void;
    startListening(): void;
    stopListening(): void;
    #private;
}
