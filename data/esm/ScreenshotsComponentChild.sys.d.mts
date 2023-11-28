export class ScreenshotsComponentChild {
    get overlay(): any;
    receiveMessage(message: any): any;
    handleEvent(event: any): void;
    /**
     * Send a request to cancel the screenshot to the parent process
     */
    requestCancelScreenshot(reason: any): void;
    /**
     * Send a request to copy the screenshots
     * @param {Object} region The region dimensions of the screenshot to be copied
     */
    requestCopyScreenshot(region: any): void;
    /**
     * Send a request to download the screenshots
     * @param {Object} region The region dimensions of the screenshot to be downloaded
     */
    requestDownloadScreenshot(region: any): void;
    showPanel(): void;
    hidePanel(): void;
    getDocumentTitle(): any;
    sendOverlaySelection(data: any): void;
    /**
     * Resolves when the document is ready to have an overlay injected into it.
     *
     * @returns {Promise}
     * @resolves {Boolean} true when document is ready or rejects
     */
    documentIsReady(): Promise<any>;
    /**
     * Wait until the document is ready and then show the screenshots overlay
     *
     * @returns {Boolean} true when document is ready and the overlay is shown
     * otherwise false
     */
    startScreenshotsOverlay(): boolean;
    /**
     * Removes event listeners and the screenshots overlay.
     */
    endScreenshotsOverlay(): void;
    didDestroy(): void;
    /**
     * Gets the full page bounds for a full page screenshot.
     *
     * @returns { object }
     *   The device pixel ratio and a DOMRect of the scrollable content bounds.
     *
     *   devicePixelRatio (float):
     *      The device pixel ratio of the screen
     *
     *   rect (object):
     *      top (int):
     *        The scroll top position for the content window.
     *
     *      left (int):
     *        The scroll left position for the content window.
     *
     *      width (int):
     *        The scroll width of the content window.
     *
     *      height (int):
     *        The scroll height of the content window.
     */
    getFullPageBounds(): object;
    /**
     * Gets the visible page bounds for a visible screenshot.
     *
     * @returns { object }
     *   The device pixel ratio and a DOMRect of the current visible
     *   content bounds.
     *
     *   devicePixelRatio (float):
     *      The device pixel ratio of the screen
     *
     *   rect (object):
     *      top (int):
     *        The top position for the content window.
     *
     *      left (int):
     *        The left position for the content window.
     *
     *      width (int):
     *        The width of the content window.
     *
     *      height (int):
     *        The height of the content window.
     */
    getVisibleBounds(): object;
    recordTelemetryEvent(type: any, object: any, args?: {}): void;
    #private;
}
