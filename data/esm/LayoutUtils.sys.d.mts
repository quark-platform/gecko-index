export namespace LayoutUtils {
    /**
     * For a given DOM element, returns its position in screen coordinates of CSS units
     * (<https://developer.mozilla.org/en-US/docs/Web/CSS/CSSOM_View/Coordinate_systems#screen>).
     */
    function getElementBoundingScreenRect(aElement: any): any;
    /**
     * Similar to getElementBoundingScreenRect using window and rect,
     * returns screen coordinates in screen units.
     */
    function rectToScreenRect(win: any, rect: any): any;
    function _rectToClientRect(win: any, rect: any): {
        x: any;
        y: any;
        width: any;
        height: any;
    };
}
