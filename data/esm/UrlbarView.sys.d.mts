/**
 * Receives and displays address bar autocomplete results.
 */
export class UrlbarView {
    static removeStaleRowsTimeout: number;
    static dynamicViewTemplatesByName: Map<any, any>;
    /**
     * Registers the view template for a dynamic result type.  A view template is
     * a plain object that describes the DOM subtree for a dynamic result type.
     * When a dynamic result is shown in the urlbar view, its type's view template
     * is used to construct the part of the view that represents the result.
     *
     * The specified view template will be available to the urlbars in all current
     * and future browser windows until it is unregistered.  A given dynamic
     * result type has at most one view template.  If this method is called for a
     * dynamic result type more than once, the view template in the last call
     * overrides those in previous calls.
     *
     * @param {string} name
     *   The view template will be registered for the dynamic result type with
     *   this name.
     * @param {object} viewTemplate
     *   This object describes the DOM subtree for the given dynamic result type.
     *   It should be a tree-like nested structure with each object in the nesting
     *   representing a DOM element to be created.  This tree-like structure is
     *   achieved using the `children` property described below.  Each object in
     *   the structure may include the following properties:
     *
     *   {string} name
     *     The name of the object.  It is required for all objects in the
     *     structure except the root object and serves two important functions:
     *     (1) The element created for the object will automatically have a class
     *         named `urlbarView-dynamic-${dynamicType}-${name}`, where
     *         `dynamicType` is the name of the dynamic result type.  The element
     *         will also automatically have an attribute "name" whose value is
     *         this name.  The class and attribute allow the element to be styled
     *         in CSS.
     *     (2) The name is used when updating the view.  See
     *         UrlbarProvider.getViewUpdate().
     *     Names must be unique within a view template, but they don't need to be
     *     globally unique.  i.e., two different view templates can use the same
     *     names, and other DOM elements can use the same names in their IDs and
     *     classes.  The name also suffixes the dynamic element's ID: an element
     *     with name `data` will get the ID `urlbarView-row-{unique number}-data`.
     *     If there is no name provided for the root element, the root element
     *     will not get an ID.
     *   {string} tag
     *     The tag name of the object.  It is required for all objects in the
     *     structure except the root object and declares the kind of element that
     *     will be created for the object: span, div, img, etc.
     *   {object} [attributes]
     *     An optional mapping from attribute names to values.  For each
     *     name-value pair, an attribute is added to the element created for the
     *     object. The `id` attribute is reserved and cannot be set by the
     *     provider. Element IDs are passed back to the provider in getViewUpdate
     *     if they are needed.
     *   {array} [children]
     *     An optional list of children.  Each item in the array must be an object
     *     as described here.  For each item, a child element as described by the
     *     item is created and added to the element created for the parent object.
     *   {array} [classList]
     *     An optional list of classes.  Each class will be added to the element
     *     created for the object by calling element.classList.add().
     *   {boolean} [overflowable]
     *     If true, the element's overflow status will be tracked in order to
     *     fade it out when needed.
     *   {string} [stylesheet]
     *     An optional stylesheet URL.  This property is valid only on the root
     *     object in the structure.  The stylesheet will be loaded in all browser
     *     windows so that the dynamic result type view may be styled.
     */
    static addDynamicViewTemplate(name: string, viewTemplate: object): void;
    /**
     * Unregisters the view template for a dynamic result type.
     *
     * @param {string} name
     *   The view template will be unregistered for the dynamic result type with
     *   this name.
     */
    static removeDynamicViewTemplate(name: string): void;
    /**
     * @param {UrlbarInput} input
     *   The UrlbarInput instance belonging to this UrlbarView instance.
     */
    constructor(input: UrlbarInput);
    input: UrlbarInput;
    panel: any;
    controller: any;
    document: any;
    window: any;
    resultMenu: any;
    queryContextCache: QueryContextCache;
    get oneOffSearchButtons(): any;
    /**
     * Whether the panel is open.
     *
     * @returns {boolean}
     */
    get isOpen(): boolean;
    get allowEmptySelection(): boolean;
    set selectedRowIndex(val: any);
    get selectedRowIndex(): any;
    get selectedElementIndex(): any;
    /**
     * @returns {UrlbarResult}
     *   The currently selected result.
     */
    get selectedResult(): UrlbarResult;
    /**
     * @returns {Element}
     *   The currently selected element.
     */
    get selectedElement(): Element;
    /**
     * @returns {boolean}
     *   Whether the SPACE key should activate the selected element (if any)
     *   instead of adding to the input value.
     */
    shouldSpaceActivateSelectedElement(): boolean;
    /**
     * Clears selection, regardless of view status.
     */
    clearSelection(): void;
    /**
     * @returns {number}
     *   The number of visible results in the view.  Note that this may be larger
     *   than the number of results in the current query context since the view
     *   may be showing stale results.
     */
    get visibleRowCount(): number;
    /**
     * Returns the result of the row containing the given element, or the result
     * of the element if it itself is a row.
     *
     * @param {Element} element
     *   An element in the view.
     * @returns {UrlbarResult}
     *   The result of the element's row.
     */
    getResultFromElement(element: Element): UrlbarResult;
    /**
     * @param {number} index
     *   The index from which to fetch the result.
     * @returns {UrlbarResult}
     *   The result at `index`. Null if the view is closed or if there are no
     *   results.
     */
    getResultAtIndex(index: number): UrlbarResult;
    /**
     * @param {UrlbarResult} result A result.
     * @returns {boolean} True if the given result is selected.
     */
    resultIsSelected(result: UrlbarResult): boolean;
    /**
     * Moves the view selection forward or backward.
     *
     * @param {number} amount
     *   The number of steps to move.
     * @param {object} options Options object
     * @param {boolean} [options.reverse]
     *   Set to true to select the previous item. By default the next item
     *   will be selected.
     * @param {boolean} [options.userPressedTab]
     *   Set to true if the user pressed Tab to select a result. Default false.
     */
    selectBy(amount: number, { reverse, userPressedTab }?: {
        reverse?: boolean;
        userPressedTab?: boolean;
    }): void;
    acknowledgeFeedback(result: any): Promise<void>;
    removeAccessibleFocus(): void;
    clear(): void;
    visibleResults: any[];
    /**
     * Closes the view, cancelling the query if necessary.
     *
     * @param {object} options Options object
     * @param {boolean} [options.elementPicked]
     *   True if the view is being closed because a result was picked.
     * @param {boolean} [options.showFocusBorder]
     *   True if the Urlbar focus border should be shown after the view is closed.
     */
    close({ elementPicked, showFocusBorder }?: {
        elementPicked?: boolean;
        showFocusBorder?: boolean;
    }): void;
    /**
     * This can be used to open the view automatically as a consequence of
     * specific user actions. For Top Sites searches (without a search string)
     * the view is opened only for mouse or keyboard interactions.
     * If the user abandoned a search (there is a search string) the view is
     * reopened, and we try to use cached results to reduce flickering, then a new
     * query is started to refresh results.
     *
     * @param {object} options Options object
     * @param {Event} options.event The event associated with the call to autoOpen.
     * @param {boolean} [options.suppressFocusBorder] If true, we hide the focus border
     *        when the panel is opened. This is true by default to avoid flashing
     *        the border when the unfocused address bar is clicked.
     * @returns {boolean} Whether the view was opened.
     */
    autoOpen({ event, suppressFocusBorder }: {
        event: Event;
        suppressFocusBorder?: boolean;
    }): boolean;
    onQueryStarted(queryContext: any): void;
    onQueryCancelled(queryContext: any): void;
    onQueryFinished(queryContext: any): void;
    onQueryResults(queryContext: any): void;
    /**
     * Handles removing a result from the view when it is removed from the query,
     * and attempts to select the new result on the same row.
     *
     * This assumes that the result rows are in index order.
     *
     * @param {number} index The index of the result that has been removed.
     */
    onQueryResultRemoved(index: number): void;
    openResultMenu(result: any, anchor: any): void;
    /**
     * Clears the result menu commands cache, removing the cached commands for all
     * results. This is useful when the commands for one or more results change
     * while the results remain in the view.
     */
    invalidateResultMenuCommands(): void;
    /**
     * Passes DOM events for the view to the on_<event type> methods.
     *
     * @param {Event} event
     *   DOM event from the <view>.
     */
    handleEvent(event: Event): void;
    on_SelectedOneOffButtonChanged(): void;
    on_blur(event: any): void;
    on_mousedown(event: any): void;
    on_mouseup(event: any): void;
    on_overflow(event: any): void;
    on_underflow(event: any): void;
    on_resize(): void;
    on_command(event: any): void;
    on_popupshowing(event: any): void;
    /**
     * Called when a urlbar pref changes.
     *
     * @param {string} pref
     *   The name of the pref relative to `browser.urlbar`.
     */
    onPrefChanged(pref: string): void;
    #private;
}
/**
 * Implements a QueryContext cache, working as a circular buffer, when a new
 * entry is added at the top, the last item is remove from the bottom.
 */
declare class QueryContextCache {
    /**
     * Constructor.
     *
     * @param {number} size The number of entries to keep in the cache.
     */
    constructor(size: number);
    /**
     * @returns {number} The number of entries to keep in the cache.
     */
    get size(): number;
    /**
     * @returns {UrlbarQueryContext} The cached top-sites context or null if none.
     */
    get topSitesContext(): UrlbarQueryContext;
    /**
     * Adds a new entry to the cache.
     *
     * @param {UrlbarQueryContext} queryContext The UrlbarQueryContext to add.
     * Note: QueryContexts without results are ignored and not added. Contexts
     *       with an empty searchString that are not the top-sites context are
     *       also ignored.
     */
    put(queryContext: UrlbarQueryContext): void;
    get(searchString: any): any;
    #private;
}
export {};
