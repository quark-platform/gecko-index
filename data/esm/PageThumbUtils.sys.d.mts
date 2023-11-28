export namespace PageThumbUtils {
    let THUMBNAIL_DEFAULT_SIZE: number;
    let THUMBNAIL_BG_COLOR: string;
    let HTML_NAMESPACE: string;
    /**
     * Creates a new canvas element in the context of aWindow.
     *
     * @param aWindow The document of this window will be used to
     *  create the canvas.
     * @param aWidth (optional) width of the canvas to create
     * @param aHeight (optional) height of the canvas to create
     * @return The newly created canvas.
     */
    function createCanvas(aWindow: any, aWidth?: number, aHeight?: number): any;
    /**
     * Calculates a preferred initial thumbnail size based based on newtab.css
     * sizes or a preference for other applications. The sizes should be the same
     * as set for the tile sizes in newtab.
     *
     * @param aWindow (optional) aWindow that is used to calculate the scaling size.
     * @return The calculated thumbnail size or a default if unable to calculate.
     */
    function getThumbnailSize(aWindow?: any): any[];
    /** *
     * Given a browser window, return the size of the content
     * minus the scroll bars.
     */
    function getContentSize(aWindow: any): number[];
    /**
     * Renders an image onto a new canvas of a given width and proportional
     * height. Uses an image that exists in the window and is loaded, or falls
     * back to loading the url into a new image element.
     */
    function createImageThumbnailCanvas(window: any, url: any, targetWidth?: number, backgroundColor?: any): Promise<{
        width: number;
        height: number;
        imageData: any;
    }>;
    /**
     * Given a browser, this creates a snapshot of the content
     * and returns a canvas with the resulting snapshot of the content
     * at the thumbnail size. It has to do this through a two step process:
     *
     * 1) Render the content at the window size to a canvas that is 2x the thumbnail size
     * 2) Downscale the canvas from (1) down to the thumbnail size
     *
     * This is because the thumbnail size is too small to render at directly,
     * causing pages to believe the browser is a small resolution. Also,
     * at that resolution, graphical artifacts / text become very jagged.
     * It's actually better to the eye to have small blurry text than sharp
     * jagged pixels to represent text.
     *
     * @params aBrowser - the browser to create a snapshot of.
     * @params aDestCanvas destination canvas to draw the final
     *   snapshot to. Can be null.
     * @param aArgs (optional) Additional named parameters:
     *   fullScale - request that a non-downscaled image be returned.
     * @return Canvas with a scaled thumbnail of the window.
     */
    function createSnapshotThumbnail(aBrowser: any, aDestCanvas: any, aArgs: any): Promise<any>;
    /**
     * Determine a good thumbnail crop size and scale for a given content
     * window.
     *
     * @param aWindow The content window.
     * @param aCanvas The target canvas.
     * @return An array containing width, height and scale.
     */
    function determineCropSize(aWindow: any, aCanvas: any): number[];
    function shouldStoreContentThumbnail(aDocument: any, aDocShell: any): boolean;
    /**
     * Given a channel, returns true if it should be considered an "error
     * response", false otherwise.
     */
    function isChannelErrorResponse(channel: any): boolean;
}
