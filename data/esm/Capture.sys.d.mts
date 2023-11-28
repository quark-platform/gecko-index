export namespace capture {
    namespace Format {
        let Base64: number;
        let Hash: number;
    }
    /**
     * Draw a rectangle off the framebuffer.
     *
     * @param {DOMWindow} win
     *     The DOM window used for the framebuffer, and providing the interfaces
     *     for creating an HTMLCanvasElement.
     * @param {BrowsingContext} browsingContext
     *     The BrowsingContext from which the snapshot should be taken.
     * @param {number} left
     *     The left, X axis offset of the rectangle.
     * @param {number} top
     *     The top, Y axis offset of the rectangle.
     * @param {number} width
     *     The width dimension of the rectangle to paint.
     * @param {number} height
     *     The height dimension of the rectangle to paint.
     * @param {object=} options
     * @param {HTMLCanvasElement=} options.canvas
     *     Optional canvas to reuse for the screenshot.
     * @param {number=} options.flags
     *     Optional integer representing flags to pass to drawWindow; these
     *     are defined on CanvasRenderingContext2D.
     * @param {number=} options.dX
     *     Horizontal offset between the browser window and content area. Defaults to 0.
     * @param {number=} options.dY
     *     Vertical offset between the browser window and content area. Defaults to 0.
     * @param {boolean=} options.readback
     *     If true, read back a snapshot of the pixel data currently in the
     *     compositor/window. Defaults to false.
     *
     * @returns {HTMLCanvasElement}
     *     The canvas on which the selection from the window's framebuffer
     *     has been painted on.
     */
    function canvas(win: DOMWindow, browsingContext: BrowsingContext, left: number, top: number, width: number, height: number, { canvas, flags, dX, dY, readback }?: any): HTMLCanvasElement;
    /**
     * Encode the contents of an HTMLCanvasElement to a Base64 encoded string.
     *
     * @param {HTMLCanvasElement} canvas
     *     The canvas to encode.
     *
     * @returns {string}
     *     A Base64 encoded string.
     */
    function toBase64(canvas: HTMLCanvasElement): string;
    /**
     * Hash the contents of an HTMLCanvasElement to a SHA-256 hex digest.
     *
     * @param {HTMLCanvasElement} canvas
     *     The canvas to encode.
     *
     * @returns {string}
     *     A hex digest of the SHA-256 hash of the base64 encoded string.
     */
    function toHash(canvas: HTMLCanvasElement): string;
}
