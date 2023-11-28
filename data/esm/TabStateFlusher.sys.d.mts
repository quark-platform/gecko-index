/**
 * A module that enables async flushes. Updates from frame scripts are
 * throttled to be sent only once per second. If an action wants a tab's latest
 * state without waiting for a second then it can request an async flush and
 * wait until the frame scripts reported back. At this point the parent has the
 * latest data and the action can continue.
 */
export const TabStateFlusher: Readonly<{
    /**
     * Requests an async flush for the given browser. Returns a promise that will
     * resolve when we heard back from the content process and the parent has
     * all the latest data.
     */
    flush(browser: any): Promise<any>;
    /**
     * Requests an async flush for all browsers of a given window. Returns a Promise
     * that will resolve when we've heard back from all browsers.
     */
    flushWindow(window: any): Promise<any[]>;
    /**
     * Resolves the flush request with the given flush ID.
     *
     * @param browser (<xul:browser>)
     *        The browser for which the flush is being resolved.
     * @param flushID (int)
     *        The ID of the flush that was sent to the browser.
     * @param success (bool, optional)
     *        Whether or not the flush succeeded.
     * @param message (string, optional)
     *        An error message that will be sent to the Console in the
     *        event that a flush failed.
     */
    resolve(browser: any, flushID: any, success?: boolean, message?: string): void;
    /**
     * Resolves all active flush requests for a given browser. This should be
     * used when the content process crashed or the final update message was
     * seen. In those cases we can't guarantee to ever hear back from the frame
     * script so we just resolve all requests instead of discarding them.
     *
     * @param browser (<xul:browser>)
     *        The browser for which all flushes are being resolved.
     * @param success (bool, optional)
     *        Whether or not the flushes succeeded.
     * @param message (string, optional)
     *        An error message that will be sent to the Console in the
     *        event that the flushes failed.
     */
    resolveAll(browser: any, success?: boolean, message?: string): void;
}>;
