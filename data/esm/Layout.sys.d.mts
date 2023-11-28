export namespace Layout {
    /**
     * Zoom the given document.
     */
    function zoomDocument(doc: any, zoom: any): void;
    /**
     * Set the relative resolution of this document. This is what apz does.
     * On non-mobile platforms you won't see a visible change.
     */
    function setResolution(doc: any, zoom: any): void;
    /**
     * Assert.is() function checking the expected value is within the range.
     */
    function isWithin(expected: any, got: any, within: any, msg: any): void;
    /**
     * Return the accessible coordinates relative to the screen in device pixels.
     */
    function getPos(id: any): any[];
    /**
     * Return the accessible coordinates and size relative to the screen in device
     * pixels. This methods also retrieves coordinates in CSS pixels and ensures that they
     * match Dev pixels with a given device pixel ratio.
     */
    function getBounds(id: any, dpr: any): any[];
    function getRangeExtents(id: any, startOffset: any, endOffset: any, coordOrigin: any): any[];
    function CSSToDevicePixels(win: any, x: any, y: any, width: any, height: any): number[];
    /**
     * Return DOM node coordinates relative the screen and its size in device
     * pixels.
     */
    function getBoundsForDOMElm(id: any, doc: any): number[];
}
