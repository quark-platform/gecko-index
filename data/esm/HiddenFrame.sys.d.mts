/**
 * An hidden frame object. It takes care of creating a windowless browser and
 * passing the window containing a blank XUL <window> back.
 */
export function HiddenFrame(): void;
export class HiddenFrame {
    _frame: null;
    _browser: null;
    _listener: null;
    _webProgress: null;
    _deferred: null;
    /**
     * Gets the |contentWindow| of the hidden frame. Creates the frame if needed.
     * @returns Promise Returns a promise which is resolved when the hidden frame has finished
     *          loading.
     */
    get(): any;
    /**
     * Fetch a sync ref to the window inside the frame (needed for the add-on SDK).
     */
    getWindow(): any;
    destroy(): void;
    _create(): void;
}
