export namespace BackgroundPageThumbs {
    /**
     * Asynchronously captures a thumbnail of the given URL.
     *
     * The page is loaded anonymously, and plug-ins are disabled.
     *
     * @param url      The URL to capture.
     * @param options  An optional object that configures the capture.  Its
     *                 properties are the following, and all are optional:
     * @opt onDone     A function that will be asynchronously called when the
     *                 capture is complete or times out.  It's called as
     *                   onDone(url),
     *                 where `url` is the captured URL.
     * @opt timeout    The capture will time out after this many milliseconds have
     *                 elapsed after the capture has progressed to the head of
     *                 the queue and started.  Defaults to 30000 (30 seconds).
     * @opt isImage    If true, backgroundPageThumbsContent will attempt to render
     *                 the url directly to canvas. Note that images will mostly get
     *                 detected and rendered as such anyway, but this will ensure it.
     * @opt targetWidth The target width when capturing an image.
     * @opt backgroundColor The background colour when capturing an image.
     * @opt dontStore  If set to true, the image blob won't be stored to disk, an
     *                 object will instead be passed as third argument to onDone:
     *                 {
     *                   data: an ArrayBuffer containing the data
     *                   contentType: the data content-type
     *                   originalUrl: the originally requested url
     *                   currentUrl: the final url after redirects
     *                 }
     * @opt contentType can be set to an image contentType for the capture,
     *                  defaults to PageThumbs.contentType.
     */
    export function capture(url: any, options?: {}): void;
    /**
     * Asynchronously captures a thumbnail of the given URL if one does not
     * already exist.  Otherwise does nothing.
     *
     * @param url      The URL to capture.
     * @param options  An optional object that configures the capture.  See
     *                 capture() for description.
     *   unloadingPromise This option is resolved when the calling context is
     *                    unloading, so things can be cleaned up to avoid leak.
     * @return {Promise} A Promise that resolves when this task completes
     */
    export function captureIfMissing(url: any, options?: {}): Promise<any>;
    /**
     * Tell the service that the thumbnail browser should be recreated at next
     * call of _ensureBrowser().
     */
    export function renewThumbnailBrowser(): void;
    export const useFissionBrowser: boolean;
    /**
     * Ensures that initialization of the thumbnail browser's parent window has
     * begun.
     *
     * @return  True if the parent window is completely initialized and can be
     *          used, and false if initialization has started but not completed.
     */
    export function _ensureParentWindowReady(): boolean;
    export function _init(): void;
    export function observe(subject: any, topic: any, data: any): void;
    /**
     * Destroys the service.  Queued and pending captures will never complete, and
     * their consumer callbacks will never be called.
     */
    export function _destroy(): void;
    export let QueryInterface: any;
    export function onStateChange(wbp: any, request: any, stateFlags: any, status: any): void;
    /**
     * Creates the thumbnail browser if it doesn't already exist.
     */
    export function _ensureBrowser(): void;
    export function _destroyBrowser(): void;
    export function _loadAboutBlank(): Promise<void>;
    /**
     * Starts the next capture if the queue is not empty and the service is fully
     * initialized.
     */
    export function _processCaptureQueue(): void;
    /**
     * Called when the current capture completes or fails (eg, times out, remote
     * process crashes.)
     */
    export function _onCaptureOrTimeout(capture: any, reason: any): void;
    export { DESTROY_BROWSER_TIMEOUT as _destroyBrowserTimeout };
}
declare const DESTROY_BROWSER_TIMEOUT: 60000;
export {};
