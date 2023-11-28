/**
 * FinderHighlighter class that is used by Finder.sys.mjs to take care of the
 * 'Highlight All' feature, which can highlight all find occurrences in a page.
 *
 * @param {Finder} finder Finder.sys.mjs instance
 * @param {boolean} useTop check and use top-level windows for rectangle
 *                         computation, if possible.
 */
export function FinderHighlighter(finder: Finder, useTop?: boolean): void;
export class FinderHighlighter {
    /**
     * FinderHighlighter class that is used by Finder.sys.mjs to take care of the
     * 'Highlight All' feature, which can highlight all find occurrences in a page.
     *
     * @param {Finder} finder Finder.sys.mjs instance
     * @param {boolean} useTop check and use top-level windows for rectangle
     *                         computation, if possible.
     */
    constructor(finder: Finder, useTop?: boolean);
    _highlightAll: any;
    _modal: any;
    _useSubFrames: boolean;
    _useTop: boolean;
    _marksListener: (event: any) => void;
    _testing: boolean;
    finder: Finder;
    get iterator(): any;
    enableTesting(enable: any): void;
    getTopWindow(window: any, checkUseTop: any): any;
    useModal(): boolean;
    /**
     * Each window is unique, globally, and the relation between an active
     * highlighting session and a window is 1:1.
     * For each window we track a number of properties which _at least_ consist of
     *  - {Boolean} detectedGeometryChange Whether the geometry of the found ranges'
     *                                     rectangles has changed substantially
     *  - {Set}     dynamicRangesSet       Set of ranges that may move around, depending
     *                                     on page layout changes and user input
     *  - {Map}     frames                 Collection of frames that were encountered
     *                                     when inspecting the found ranges
     *  - {Map}     modalHighlightRectsMap Collection of ranges and their corresponding
     *                                     Rects and texts
     *
     * @param  {nsIDOMWindow} window
     * @return {Object}
     */
    getForWindow(window: nsIDOMWindow, propName?: any): any;
    /**
     * Notify all registered listeners that the 'Highlight All' operation finished.
     *
     * @param {Boolean} highlight Whether highlighting was turned on
     */
    notifyFinished(highlight: boolean): void;
    /**
     * Toggle highlighting all occurrences of a word in a page. This method will
     * be called recursively for each (i)frame inside a page.
     *
     * @param {Booolean} highlight    Whether highlighting should be turned on
     * @param {String}   word         Needle to search for and highlight when found
     * @param {Boolean}  linksOnly    Only consider nodes that are links for the search
     * @param {Boolean}  drawOutline  Whether found links should be outlined.
     * @param {Boolean}  useSubFrames Whether to iterate over subframes.
     * @yield {Promise}  that resolves once the operation has finished
     */
    highlight(highlight: Booolean, word: string, linksOnly: boolean, drawOutline: boolean, useSubFrames: boolean): Promise<{
        searchString: string;
        highlight: Booolean;
        found: boolean;
    }>;
    _found: boolean;
    onIteratorRangeFound(range: any): void;
    onIteratorReset(): void;
    onIteratorRestart(): void;
    onIteratorStart(params: any): void;
    /**
     * Add a range to the find selection, i.e. highlight it, and if it's inside an
     * editable node, track it.
     *
     * @param {Range} range Range object to be highlighted
     */
    highlightRange(range: Range): void;
    /**
     * If modal highlighting is enabled, show the dimmed background that will overlay
     * the page.
     *
     * @param {nsIDOMWindow} window The dimmed background will overlay this window.
     *                              Optional, defaults to the finder window.
     */
    show(window?: nsIDOMWindow): void;
    /**
     * Clear all highlighted matches. If modal highlighting is enabled and
     * the outline + dimmed background is currently visible, both will be hidden.
     *
     * @param {nsIDOMWindow} window    The dimmed background will overlay this window.
     *                                 Optional, defaults to the finder window.
     * @param {Range}        skipRange A range that should not be removed from the
     *                                 find selection.
     * @param {Event}        event     When called from an event handler, this will
     *                                 be the triggering event.
     */
    hide(window: nsIDOMWindow, skipRange?: Range, event?: Event): void;
    /**
     * Called by the Finder after a find result comes in; update the position and
     * content of the outline to the newly found occurrence.
     * To make sure that the outline covers the found range completely, all the
     * CSS styles that influence the text are copied and applied to the outline.
     *
     * @param {Object} data Dictionary coming from Finder that contains the
     *                      following properties:
     *   {Number}  result        One of the nsITypeAheadFind.FIND_* constants
     *                           indicating the result of a search operation.
     *   {Boolean} findBackwards If TRUE, the search was performed backwards,
     *                           FALSE if forwards.
     *   {Boolean} findAgain     If TRUE, the search was performed using the same
     *                           search string as before.
     *   {String}  linkURL       If a link was hit, this will contain a URL string.
     *   {Rect}    rect          An object with top, left, width and height
     *                           coordinates of the current selection.
     *   {String}  searchString  The string the search was performed with.
     *   {Boolean} storeResult   Indicator if the search string should be stored
     *                           by the consumer of the Finder.
     */
    update(data: any, foundInThisFrame: any): Promise<void>;
    /**
     * Invalidates the list by clearing the map of highlighted ranges that we
     * keep to build the mask for.
     */
    clear(window?: any): void;
    /**
     * Removes the outline from a single window. This is done when
     * switching the current search to a new frame.
     */
    clearCurrentOutline(window?: any): void;
    updateScrollMarks(): void;
    removeScrollMarks(): void;
    /**
     * Set the scrollbar marks for a current search. If testing mode is enabled, fire a
     * find-scrollmarks-changed event at the window.
     *
     * @param window window to set the scrollbar marks on
     * @param marks array of integer scrollbar mark positions
     * @param onHorizontalScrollbar whether to display the marks on the horizontal scrollbar
     */
    setScrollMarks(window: any, marks: any, onHorizontalScrollbar?: boolean): void;
    /**
     * When the current page is refreshed or navigated away from, the CanvasFrame
     * contents is not valid anymore, i.e. all anonymous content is destroyed.
     * We need to clear the references we keep, which'll make sure we redraw
     * everything when the user starts to find in page again.
     */
    onLocationChange(): void;
    /**
     * When `kModalHighlightPref` pref changed during a session, this callback is
     * invoked. When modal highlighting is turned off, we hide the CanvasFrame
     * contents.
     *
     * @param {Boolean} useModalHighlight
     */
    onModalHighlightChange(useModalHighlight: boolean): void;
    /**
     * When 'Highlight All' is toggled during a session, this callback is invoked
     * and when it's turned off, the found occurrences will be removed from the mask.
     *
     * @param {Boolean} highlightAll
     */
    onHighlightAllChange(highlightAll: boolean): void;
    /**
     * Utility; removes all ranges from the find selection that belongs to a
     * controller. Optionally skips a specific range.
     *
     * @param  {nsISelectionController} controller
     * @param  {Range}                  restoreRange
     */
    _clearSelection(controller: nsISelectionController, restoreRange?: Range): void;
    /**
     * Utility; get the nsIDOMWindowUtils for a window.
     *
     * @param  {nsIDOMWindow} window Optional, defaults to the finder window.
     * @return {nsIDOMWindowUtils}
     */
    _getDWU(window?: nsIDOMWindow): nsIDOMWindowUtils;
    /**
     * Utility; returns the bounds of the page relative to the viewport.
     * If the pages is part of a frameset or inside an iframe of any kind, its
     * offset is accounted for.
     * Geometry.sys.mjs takes care of the DOMRect calculations.
     *
     * @param  {nsIDOMWindow} window          Window to read the boundary rect from
     * @param  {Boolean}      [includeScroll] Whether to ignore the scroll offset,
     *                                        which is useful for comparing DOMRects.
     *                                        Optional, defaults to `true`
     * @return {Rect}
     */
    _getRootBounds(window: nsIDOMWindow, includeScroll?: boolean): Rect;
    /**
     * (I)Frame elements may have a border and/ or padding set, which is not
     * included in the bounds returned by nsDOMWindowUtils#getRootBounds() for the
     * window it hosts.
     * This method fetches this offset of the frame element to the respective window.
     *
     * @param  {nsIDOMWindow} window          Window to read the boundary rect from
     * @return {Object}       Simple object that contains the following two properties:
     *                        - {Number} x Offset along the horizontal axis.
     *                        - {Number} y Offset along the vertical axis.
     */
    _getFrameElementOffsets(window: nsIDOMWindow): any;
    /**
     * Utility; fetch the full width and height of the current window, excluding
     * scrollbars.
     *
     * @param  {nsiDOMWindow} window The current finder window.
     * @return {Object} The current full page dimensions with `width` and `height`
     *                  properties
     */
    _getWindowDimensions(window: nsiDOMWindow): any;
    /**
     * Utility; get all available font styles as applied to the content of a given
     * range. The CSS properties we look for can be found in `kFontPropsCSS`.
     *
     * @param  {Range} range Range to fetch style info from.
     * @return {Object} Dictionary consisting of the styles that were found.
     */
    _getRangeFontStyle(range: Range): any;
    /**
     * Utility; transform a dictionary object as returned by `_getRangeFontStyle`
     * above into a HTML style attribute value.
     *
     * @param  {Object} fontStyle
     * @return {String}
     */
    _getHTMLFontStyle(fontStyle: any): string;
    /**
     * Transform a style definition array as defined in `kModalStyles` into a CSS
     * string that can be used to set the 'style' property of a DOM node.
     *
     * @param  {Array}    stylePairs         Two-dimensional array of style pairs
     * @param  {...Array} [additionalStyles] Optional set of style pairs that will
     *                                       augment or override the styles defined
     *                                       by `stylePairs`
     * @return {String}
     */
    _getStyleString(stylePairs: any[], ...additionalStyles?: any[][]): string;
    /**
     * Checks whether a CSS RGB color value can be classified as being 'bright'.
     *
     * @param  {String} cssColor RGB color value in the default format rgb[a](r,g,b)
     * @return {Boolean}
     */
    _isColorBright(cssColor: string): boolean;
    /**
     * Detects if the overall text color in the page can be described as bright.
     * This is done according to the following algorithm:
     *  1. With the entire set of ranges that we have found thusfar;
     *  2. Get an odd-numbered `sampleSize`, with a maximum of `kBrightTextSampleSize`
     *     ranges,
     *  3. Slice the set of ranges into `sampleSize` number of equal parts,
     *  4. Grab the first range for each slice and inspect the brightness of the
     *     color of its text content.
     *  5. When the majority of ranges are counted as contain bright colored text,
     *     the page is considered to contain bright text overall.
     *
     * @param {Object} dict Dictionary of properties belonging to the
     *                      currently active window. The page text color property
     *                      will be recorded in `dict.brightText` as `true` or `false`.
     */
    _detectBrightText(dict: any): void;
    /**
     * Checks if a range is inside a DOM node that's positioned in a way that it
     * doesn't scroll along when the document is scrolled and/ or zoomed. This
     * is the case for 'fixed' and 'sticky' positioned elements, elements inside
     * (i)frames and elements that have their overflow styles set to 'auto' or
     * 'scroll'.
     *
     * @param  {Range} range Range that be enclosed in a dynamic container
     * @return {Boolean}
     */
    _isInDynamicContainer(range: Range): boolean;
    /**
     * Read and store the rectangles that encompass the entire region of a range
     * for use by the drawing function of the highlighter.
     *
     * @param  {Range}  range  Range to fetch the rectangles from
     * @param  {Object} [dict] Dictionary of properties belonging to
     *                         the currently active window
     * @return {Set}    Set of rects that were found for the range
     */
    _getRangeRectsAndTexts(range: Range, dict?: any): Set<any>;
    /**
     * Read and store the rectangles that encompass the entire region of a range
     * for use by the drawing function of the highlighter and store them in the
     * cache.
     *
     * @param  {Range}   range            Range to fetch the rectangles from
     * @param  {Boolean} [checkIfDynamic] Whether we should check if the range
     *                                    is dynamic as per the rules in
     *                                    `_isInDynamicContainer()`. Optional,
     *                                    defaults to `true`
     * @param  {Object}  [dict]           Dictionary of properties belonging to
     *                                    the currently active window
     * @return {Set}     Set of rects that were found for the range
     */
    _updateRangeRects(range: Range, checkIfDynamic?: boolean, dict?: any): Set<any>;
    /**
     * Re-read the rectangles of the ranges that we keep track of separately,
     * because they're enclosed by a position: fixed container DOM node or (i)frame.
     *
     * @param {Object} dict Dictionary of properties belonging to the currently
     *                      active window
     */
    _updateDynamicRangesRects(dict: any): void;
    /**
     * Update the content, position and style of the yellow current found range
     * outline that floats atop the mask with the dimmed background.
     * Rebuild it, if necessary, This will deactivate the animation between
     * occurrences.
     *
     * @param {Object} dict Dictionary of properties belonging to the currently
     *                      active window
     */
    _updateRangeOutline(dict: any): void;
    /**
     * Finish any currently playing animations on the found range outline node.
     *
     * @param {Object} dict Dictionary of properties belonging to the currently
     *                      active window
     */
    _finishOutlineAnimations(dict: any): void;
    /**
     * Safely remove the outline AnoymousContent node from the CanvasFrame.
     *
     * @param {nsIDOMWindow} window
     */
    _removeRangeOutline(window: nsIDOMWindow): void;
    /**
     * Add a range to the list of ranges to highlight on, or cut out of, the dimmed
     * background.
     *
     * @param {Range}        range  Range object that should be inspected
     * @param {nsIDOMWindow} window Window object, whose DOM tree is being traversed
     */
    _modalHighlight(range: Range, controller: any, window: nsIDOMWindow): void;
    /**
     * Lazily insert the nodes we need as anonymous content into the CanvasFrame
     * of a window.
     *
     * @param {nsIDOMWindow} window Window to draw in.
     */
    _maybeCreateModalHighlightNodes(window: nsIDOMWindow): void;
    /**
     * Build and draw the mask that takes care of the dimmed background that
     * overlays the current page and the mask that cuts out all the rectangles of
     * the ranges that were found.
     *
     * @param {nsIDOMWindow} window Window to draw in.
     * @param {Boolean} [paintContent]
     */
    _repaintHighlightAllMask(window: nsIDOMWindow, paintContent?: boolean): void;
    /**
     * Safely remove the mask AnoymousContent node from the CanvasFrame.
     *
     * @param {nsIDOMWindow} window
     */
    _removeHighlightAllMask(window: nsIDOMWindow): void;
    /**
     * Check if the width or height of the current document is too big to handle
     * for certain operations. This allows us to degrade gracefully when we expect
     * the performance to be negatively impacted due to drawing-intensive operations.
     *
     * @param  {Object} dict Dictionary of properties belonging to the currently
     *                       active window
     * @return {Boolean}
     */
    _isPageTooBig(dict: any): boolean;
    /**
     * Doing a full repaint each time a range is delivered by the highlight iterator
     * is way too costly, thus we pipe the frequency down to every
     * `kModalHighlightRepaintLoFreqMs` milliseconds. If there are dynamic ranges
     * found (see `_isInDynamicContainer()` for the definition), the frequency
     * will be upscaled to `kModalHighlightRepaintHiFreqMs`.
     *
     * @param {nsIDOMWindow} window
     * @param {Object}       options Dictionary of painter hints that contains the
     *                               following properties:
     *   {Boolean} contentChanged  Whether the documents' content changed in the
     *                             meantime. This happens when the DOM is updated
     *                             whilst the page is loaded.
     *   {Boolean} scrollOnly      TRUE when the page has scrolled in the meantime,
     *                             which means that the dynamically positioned
     *                             elements need to be repainted.
     *   {Boolean} updateAllRanges Whether to recalculate the rects of all ranges
     *                             that were found up until now.
     */
    _scheduleRepaintOfMask(window: nsIDOMWindow, { contentChanged, scrollOnly, updateAllRanges }?: any): void;
    /**
     * Add event listeners to the content which will cause the modal highlight
     * AnonymousContent to be re-painted or hidden.
     *
     * @param {nsIDOMWindow} window
     */
    _addModalHighlightListeners(window: nsIDOMWindow): void;
    /**
     * Remove event listeners from content.
     *
     * @param {nsIDOMWindow} window
     */
    _removeModalHighlightListeners(window: nsIDOMWindow): void;
    /**
     * For a given node returns its editable parent or null if there is none.
     * It's enough to check if node is a text node and its parent's parent is
     * an input or textarea.
     *
     * @param node the node we want to check
     * @returns the first node in the parent chain that is editable,
     *          null if there is no such node
     */
    _getEditableNode(node: any): any;
    /**
     * Add ourselves as an nsIEditActionListener and nsIDocumentStateListener for
     * a given editor
     *
     * @param editor the editor we'd like to listen to
     */
    _addEditorListeners(editor: any): void;
    _editors: any[];
    _stateListeners: any[];
    /**
     * Helper method to unhook listeners, remove cached editors
     * and keep the relevant arrays in sync
     *
     * @param idx the index into the array of editors/state listeners
     *        we wish to remove
     */
    _unhookListenersAtIndex(idx: any): void;
    /**
     * Remove ourselves as an nsIEditActionListener and
     * nsIDocumentStateListener from a given cached editor
     *
     * @param editor the editor we no longer wish to listen to
     */
    _removeEditorListeners(editor: any): void;
    /**
     * Helper method used to check whether a selection intersects with
     * some highlighting
     *
     * @param selectionRange the range from the selection to check
     * @param findRange the highlighted range to check against
     * @returns true if they intersect, false otherwise
     */
    _checkOverlap(selectionRange: any, findRange: any): boolean;
    /**
     * Helper method to determine if an edit occurred within a highlight
     *
     * @param selection the selection we wish to check
     * @param node the node we want to check is contained in selection
     * @param offset the offset into node that we want to check
     * @returns the range containing (node, offset) or null if no ranges
     *          in the selection contain it
     */
    _findRange(selection: any, node: any, offset: any): any;
    WillDeleteText(textNode: any, offset: any, length: any): void;
    DidInsertText(textNode: any, offset: any, aString: any): void;
    WillDeleteRanges(rangesToDelete: any): void;
    /**
     * Unhook ourselves when one of our state listeners has been called.
     * This can happen in 4 cases:
     *  1) The document the editor belongs to is navigated away from, and
     *     the document is not being cached
     *
     *  2) The document the editor belongs to is expired from the cache
     *
     *  3) The tab containing the owning document is closed
     *
     *  4) The <input> or <textarea> that owns the editor is explicitly
     *     removed from the DOM
     *
     * @param the listener that was invoked
     */
    _onEditorDestruction(aListener: any): void;
    /**
     * Creates a unique document state listener for an editor.
     *
     * It is not possible to simply have the findbar implement the
     * listener interface itself, as it wouldn't have sufficient information
     * to work out which editor was being destroyed. Therefore, we create new
     * listeners on the fly, and cache them in sync with the editors they
     * listen to.
     */
    _createStateListener(): {
        findbar: this;
        QueryInterface: any;
        NotifyDocumentWillBeDestroyed(): void;
        notifyDocumentStateChanged(aDirty: any): void;
    };
}
