export namespace PageThumbs {
    let _initialized: boolean;
    let _thumbnailWidth: number;
    let _thumbnailHeight: number;
    const scheme: string;
    const staticHost: string;
    const contentType: string;
    function init(): void;
    function handlePlacesEvents(events: any): void;
    function uninit(): void;
    function getThumbnailURL(aUrl: any): string;
    function getThumbnailPath(aUrl: any): any;
    function captureToBlob(aBrowser: any, aArgs: any): Promise<any>;
    /**
     * Captures a thumbnail from a given window and draws it to the given canvas.
     * Note, when dealing with remote content, this api draws into the passed
     * canvas asynchronously. Pass aCallback to receive an async callback after
     * canvas painting has completed.
     * @param aBrowser The browser to capture a thumbnail from.
     * @param aCanvas The canvas to draw to. The thumbnail will be scaled to match
     *   the dimensions of this canvas. If callers pass a 0x0 canvas, the canvas
     *   will be resized to default thumbnail dimensions just prior to painting.
     * @param aArgs (optional) Additional named parameters:
     *   fullScale - request that a non-downscaled image be returned.
     *   isImage - indicate that this should be treated as an image url.
     *   backgroundColor - background color to draw behind images.
     *   targetWidth - desired width for images.
     *   isBackgroundThumb - true if request is from the background thumb service.
     *   fullViewport - request that a screenshot for the viewport be
     *     captured. This makes it possible to get a screenshot that reflects
     *     the current scroll position of aBrowser.
     * @param aSkipTelemetry skip recording telemetry
     */
    function captureToCanvas(aBrowser: any, aCanvas: any, aArgs: any, aSkipTelemetry?: boolean): Promise<any>;
    /**
     * Asynchronously check the state of aBrowser to see if it passes a set of
     * predefined security checks. Consumers should refrain from storing
     * thumbnails if these checks fail. Note the final result of this call is
     * transitory as it is based on current navigation state and the type of
     * content being displayed.
     *
     * @param aBrowser The target browser
     */
    function shouldStoreThumbnail(aBrowser: any): Promise<any>;
    function _captureToCanvas(aBrowser: any, aCanvas: any, aArgs: any): Promise<any>;
    /**
     * Asynchrnously render an appropriately scaled thumbnail to canvas.
     *
     * @param aBrowser The browser to capture a thumbnail from.
     * @param aWidth The desired canvas width.
     * @param aHeight The desired canvas height.
     * @param aArgs (optional) Additional named parameters:
     *   fullScale - request that a non-downscaled image be returned.
     *   isImage - indicate that this should be treated as an image url.
     *   backgroundColor - background color to draw behind images.
     *   targetWidth - desired width for images.
     *   isBackgroundThumb - true if request is from the background thumb service.
     *   fullViewport - request that a screenshot for the viewport be
     *     captured. This makes it possible to get a screenshot that reflects
     *     the current scroll position of aBrowser.
     * @return a promise
     */
    function _captureRemoteThumbnail(aBrowser: any, aWidth: any, aHeight: any, aArgs: any): Promise<any>;
    function captureAndStore(aBrowser: any): Promise<void>;
    function captureAndStoreIfStale(aBrowser: any): Promise<boolean>;
    function _store(aOriginalURL: any, aFinalURL: any, aData: any, aNoOverwrite: any): Promise<void>;
    function addExpirationFilter(aFilter: any): void;
    function removeExpirationFilter(aFilter: any): void;
    function createCanvas(aWindow: any): any;
    function _prefEnabled(): boolean;
}
export namespace PageThumbsStorage {
    function ensurePath(): any;
    let _revisionTable: {};
    function updateRevision(aURL: any): void;
    let _revisionRange: number;
    /**
     * Return a revision tag for the thumbnail stored for a given URL.
     *
     * @param aURL The URL spec string
     * @return A revision tag for the corresponding thumbnail. Returns a changed
     * value whenever the stored thumbnail changes.
     */
    function getRevision(aURL: any): any;
    function writeData(aURL: string, aData: ArrayBuffer, aNoOverwrite: boolean): Promise<any>;
    function copy(aSourceURL: string, aTargetURL: string, aNoOverwrite: boolean): Promise<any>;
    function remove(aURL: any): Promise<any>;
    function wipe(): Promise<any>;
    function fileExistsForURL(aURL: any): any;
    function isFileRecentForURL(aURL: any): any;
    function _eatNoOverwriteError(aNoOverwrite: any): Function;
}
export namespace PageThumbsExpiration {
    let _filters: any[];
    function init(): void;
    function addFilter(aFilter: any): void;
    function removeFilter(aFilter: any): void;
    function notify(aTimer: any): void;
    function expireThumbnails(aURLsToKeep: any): any;
}
