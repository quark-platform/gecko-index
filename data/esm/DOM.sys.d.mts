export namespace dom {
    namespace Strategy {
        let ClassName: string;
        let Selector: string;
        let ID: string;
        let Name: string;
        let LinkText: string;
        let PartialLinkText: string;
        let TagName: string;
        let XPath: string;
    }
    /**
     * Find a single element or a collection of elements starting at the
     * document root or a given node.
     *
     * If |timeout| is above 0, an implicit search technique is used.
     * This will wait for the duration of <var>timeout</var> for the
     * element to appear in the DOM.
     *
     * See the {@link dom.Strategy} enum for a full list of supported
     * search strategies that can be passed to <var>strategy</var>.
     *
     * @param {Object<string, WindowProxy>} container
     *     Window object.
     * @param {string} strategy
     *     Search strategy whereby to locate the element(s).
     * @param {string} selector
     *     Selector search pattern.  The selector must be compatible with
     *     the chosen search <var>strategy</var>.
     * @param {object=} options
     * @param {boolean=} options.all
     *     If true, a multi-element search selector is used and a sequence of
     *     elements will be returned, otherwise a single element. Defaults to false.
     * @param {Element=} options.startNode
     *     Element to use as the root of the search.
     * @param {number=} options.timeout
     *     Duration to wait before timing out the search.  If <code>all</code>
     *     is false, a {@link NoSuchElementError} is thrown if unable to
     *     find the element within the timeout duration.
     *
     * @returns {Promise.<(Element|Array.<Element>)>}
     *     Single element or a sequence of elements.
     *
     * @throws InvalidSelectorError
     *     If <var>strategy</var> is unknown.
     * @throws InvalidSelectorError
     *     If <var>selector</var> is malformed.
     * @throws NoSuchElementError
     *     If a single element is requested, this error will throw if the
     *     element is not found.
     */
    function find(container: {
        [x: string]: Window;
    }, strategy: string, selector: string, options?: any): Promise<Element | Element[]>;
    /**
     * Find a single element by XPath expression.
     *
     * @param {Document} document
     *     Document root.
     * @param {Element} startNode
     *     Where in the DOM hiearchy to begin searching.
     * @param {string} expression
     *     XPath search expression.
     *
     * @returns {Node}
     *     First element matching <var>expression</var>.
     */
    function findByXPath(document: Document, startNode: Element, expression: string): Node;
    /**
     * Find elements by XPath expression.
     *
     * @param {Document} document
     *     Document root.
     * @param {Element} startNode
     *     Where in the DOM hierarchy to begin searching.
     * @param {string} expression
     *     XPath search expression.
     *
     * @returns {Iterable.<Node>}
     *     Iterator over nodes matching <var>expression</var>.
     */
    function findByXPathAll(document: Document, startNode: Element, expression: string): Iterable<Node>;
    /**
     * Find all hyperlinks descendant of <var>startNode</var> which
     * link text is <var>linkText</var>.
     *
     * @param {Element} startNode
     *     Where in the DOM hierarchy to begin searching.
     * @param {string} linkText
     *     Link text to search for.
     *
     * @returns {Iterable.<HTMLAnchorElement>}
     *     Sequence of link elements which text is <var>s</var>.
     */
    function findByLinkText(startNode: Element, linkText: string): Iterable<HTMLAnchorElement>;
    /**
     * Find all hyperlinks descendant of <var>startNode</var> which
     * link text contains <var>linkText</var>.
     *
     * @param {Element} startNode
     *     Where in the DOM hierachy to begin searching.
     * @param {string} linkText
     *     Link text to search for.
     *
     * @returns {Iterable.<HTMLAnchorElement>}
     *     Iterator of link elements which text containins
     *     <var>linkText</var>.
     */
    function findByPartialLinkText(startNode: Element, linkText: string): Iterable<HTMLAnchorElement>;
    /**
     * Finds the closest parent node of <var>startNode</var> matching a CSS
     * <var>selector</var> expression.
     *
     * @param {Node} startNode
     *     Cycle through <var>startNode</var>'s parent nodes in tree-order
     *     and return the first match to <var>selector</var>.
     * @param {string} selector
     *     CSS selector expression.
     *
     * @returns {Node=}
     *     First match to <var>selector</var>, or null if no match was found.
     */
    function findClosest(startNode: Node, selector: string): Node;
    /**
     * Determines if <var>obj<var> is an HTML or JS collection.
     *
     * @param {object} seq
     *     Type to determine.
     *
     * @returns {boolean}
     *     True if <var>seq</va> is a collection.
     */
    function isCollection(seq: any): boolean;
    /**
     * Determines if <var>shadowRoot</var> is detached.
     *
     * A ShadowRoot is detached if its node document is not the active document
     * or if the element node referred to as its host is stale.
     *
     * @param {ShadowRoot} shadowRoot
     *     ShadowRoot to check for detached state.
     *
     * @returns {boolean}
     *     True if <var>shadowRoot</var> is detached, false otherwise.
     */
    function isDetached(shadowRoot: ShadowRoot): boolean;
    /**
     * Determines if <var>el</var> is stale.
     *
     * An element is stale if its node document is not the active document
     * or if it is not connected.
     *
     * @param {Element} el
     *     Element to check for staleness.
     *
     * @returns {boolean}
     *     True if <var>el</var> is stale, false otherwise.
     */
    function isStale(el: Element): boolean;
    /**
     * Determine if <var>el</var> is selected or not.
     *
     * This operation only makes sense on
     * <tt>&lt;input type=checkbox&gt;</tt>,
     * <tt>&lt;input type=radio&gt;</tt>,
     * and <tt>&gt;option&gt;</tt> elements.
     *
     * @param {Element} el
     *     Element to test if selected.
     *
     * @returns {boolean}
     *     True if element is selected, false otherwise.
     */
    function isSelected(el: Element): boolean;
    /**
     * An element is considered read only if it is an
     * <code>&lt;input&gt;</code> or <code>&lt;textarea&gt;</code>
     * element whose <code>readOnly</code> content IDL attribute is set.
     *
     * @param {Element} el
     *     Element to test is read only.
     *
     * @returns {boolean}
     *     True if element is read only.
     */
    function isReadOnly(el: Element): boolean;
    /**
     * An element is considered disabled if it is a an element
     * that can be disabled, or it belongs to a container group which
     * <code>disabled</code> content IDL attribute affects it.
     *
     * @param {Element} el
     *     Element to test for disabledness.
     *
     * @returns {boolean}
     *     True if element, or its container group, is disabled.
     */
    function isDisabled(el: Element): boolean;
    /**
     * Denotes elements that can be used for typing and clearing.
     *
     * Elements that are considered WebDriver-editable are non-readonly
     * and non-disabled <code>&lt;input&gt;</code> elements in the Text,
     * Search, URL, Telephone, Email, Password, Date, Month, Date and
     * Time Local, Number, Range, Color, and File Upload states, and
     * <code>&lt;textarea&gt;</code> elements.
     *
     * @param {Element} el
     *     Element to test.
     *
     * @returns {boolean}
     *     True if editable, false otherwise.
     */
    function isMutableFormControl(el: Element): boolean;
    /**
     * An editing host is a node that is either an HTML element with a
     * <code>contenteditable</code> attribute, or the HTML element child
     * of a document whose <code>designMode</code> is enabled.
     *
     * @param {Element} el
     *     Element to determine if is an editing host.
     *
     * @returns {boolean}
     *     True if editing host, false otherwise.
     */
    function isEditingHost(el: Element): boolean;
    /**
     * Determines if an element is editable according to WebDriver.
     *
     * An element is considered editable if it is not read-only or
     * disabled, and one of the following conditions are met:
     *
     * <ul>
     * <li>It is a <code>&lt;textarea&gt;</code> element.
     *
     * <li>It is an <code>&lt;input&gt;</code> element that is not of
     * the <code>checkbox</code>, <code>radio</code>, <code>hidden</code>,
     * <code>submit</code>, <code>button</code>, or <code>image</code> types.
     *
     * <li>It is content-editable.
     *
     * <li>It belongs to a document in design mode.
     * </ul>
     *
     * @param {Element} el
     *     Element to test if editable.
     *
     * @returns {boolean}
     *     True if editable, false otherwise.
     */
    function isEditable(el: Element): boolean;
    /**
     * This function generates a pair of coordinates relative to the viewport
     * given a target element and coordinates relative to that element's
     * top-left corner.
     *
     * @param {Node} node
     *     Target node.
     * @param {number=} xOffset
     *     Horizontal offset relative to target's top-left corner.
     *     Defaults to the centre of the target's bounding box.
     * @param {number=} yOffset
     *     Vertical offset relative to target's top-left corner.  Defaults to
     *     the centre of the target's bounding box.
     *
     * @returns {Object<string, number>}
     *     X- and Y coordinates.
     *
     * @throws TypeError
     *     If <var>xOffset</var> or <var>yOffset</var> are not numbers.
     */
    function coordinates(node: Node, xOffset?: number, yOffset?: number): {
        [x: string]: number;
    };
    /**
     * This function returns true if the node is in the viewport.
     *
     * @param {Element} el
     *     Target element.
     * @param {number=} x
     *     Horizontal offset relative to target.  Defaults to the centre of
     *     the target's bounding box.
     * @param {number=} y
     *     Vertical offset relative to target.  Defaults to the centre of
     *     the target's bounding box.
     *
     * @returns {boolean}
     *     True if if <var>el</var> is in viewport, false otherwise.
     */
    function inViewport(el: Element, x?: number, y?: number): boolean;
    /**
     * Gets the element's container element.
     *
     * An element container is defined by the WebDriver
     * specification to be an <tt>&lt;option&gt;</tt> element in a
     * <a href="https://html.spec.whatwg.org/#concept-element-contexts">valid
     * element context</a>, meaning that it has an ancestral element
     * that is either <tt>&lt;datalist&gt;</tt> or <tt>&lt;select&gt;</tt>.
     *
     * If the element does not have a valid context, its container element
     * is itself.
     *
     * @param {Element} el
     *     Element to get the container of.
     *
     * @returns {Element}
     *     Container element of <var>el</var>.
     */
    function getContainer(el: Element): Element;
    /**
     * An element is in view if it is a member of its own pointer-interactable
     * paint tree.
     *
     * This means an element is considered to be in view, but not necessarily
     * pointer-interactable, if it is found somewhere in the
     * <code>elementsFromPoint</code> list at <var>el</var>'s in-view
     * centre coordinates.
     *
     * Before running the check, we change <var>el</var>'s pointerEvents
     * style property to "auto", since elements without pointer events
     * enabled do not turn up in the paint tree we get from
     * document.elementsFromPoint.  This is a specialisation that is only
     * relevant when checking if the element is in view.
     *
     * @param {Element} el
     *     Element to check if is in view.
     *
     * @returns {boolean}
     *     True if <var>el</var> is inside the viewport, or false otherwise.
     */
    function isInView(el: Element): boolean;
    /**
     * This function throws the visibility of the element error if the element is
     * not displayed or the given coordinates are not within the viewport.
     *
     * @param {Element} el
     *     Element to check if visible.
     * @param {number=} x
     *     Horizontal offset relative to target.  Defaults to the centre of
     *     the target's bounding box.
     * @param {number=} y
     *     Vertical offset relative to target.  Defaults to the centre of
     *     the target's bounding box.
     *
     * @returns {boolean}
     *     True if visible, false otherwise.
     */
    function isVisible(el: Element, x?: number, y?: number): boolean;
    /**
     * A pointer-interactable element is defined to be the first
     * non-transparent element, defined by the paint order found at the centre
     * point of its rectangle that is inside the viewport, excluding the size
     * of any rendered scrollbars.
     *
     * An element is obscured if the pointer-interactable paint tree at its
     * centre point is empty, or the first element in this tree is not an
     * inclusive descendant of itself.
     *
     * @param {DOMElement} el
     *     Element determine if is pointer-interactable.
     *
     * @returns {boolean}
     *     True if element is obscured, false otherwise.
     */
    function isObscured(el: DOMElement): boolean;
    /**
     * Calculates the in-view centre point of an element's client rect.
     *
     * The portion of an element that is said to be _in view_, is the
     * intersection of two squares: the first square being the initial
     * viewport, and the second a DOM element.  From this square we
     * calculate the in-view _centre point_ and convert it into CSS pixels.
     *
     * Although Gecko's system internals allow click points to be
     * given in floating point precision, the DOM operates in CSS pixels.
     * When the in-view centre point is later used to retrieve a coordinate's
     * paint tree, we need to ensure to operate in the same language.
     *
     * As a word of warning, there appears to be inconsistencies between
     * how `DOMElement.elementsFromPoint` and `DOMWindowUtils.sendMouseEvent`
     * internally rounds (ceils/floors) coordinates.
     *
     * @param {DOMRect} rect
     *     Element off a DOMRect sequence produced by calling
     *     `getClientRects` on an {@link Element}.
     * @param {WindowProxy} win
     *     Current window global.
     *
     * @returns {Map.<string, number>}
     *     X and Y coordinates that denotes the in-view centre point of
     *     `rect`.
     */
    function getInViewCentrePoint(rect: DOMRect, win: Window): Map<string, number>;
    /**
     * Produces a pointer-interactable elements tree from a given element.
     *
     * The tree is defined by the paint order found at the centre point of
     * the element's rectangle that is inside the viewport, excluding the size
     * of any rendered scrollbars.
     *
     * @param {DOMElement} el
     *     Element to determine if is pointer-interactable.
     *
     * @returns {Array.<DOMElement>}
     *     Sequence of elements in paint order.
     */
    function getPointerInteractablePaintTree(el: DOMElement): DOMElement[];
    function isKeyboardInteractable(): boolean;
    /**
     * Attempts to scroll into view |el|.
     *
     * @param {DOMElement} el
     *     Element to scroll into view.
     */
    function scrollIntoView(el: DOMElement): void;
    /**
     * Ascertains whether <var>obj</var> is a DOM-, SVG-, or XUL element.
     *
     * @param {object} obj
     *     Object thought to be an <code>Element</code> or
     *     <code>XULElement</code>.
     *
     * @returns {boolean}
     *     True if <var>obj</var> is an element, false otherwise.
     */
    function isElement(obj: any): boolean;
    /**
     * Returns the shadow root of an element.
     *
     * @param {Element} el
     *     Element thought to have a <code>shadowRoot</code>
     * @returns {ShadowRoot}
     *     Shadow root of the element.
     */
    function getShadowRoot(el: Element): ShadowRoot;
    /**
     * Ascertains whether <var>node</var> is a shadow root.
     *
     * @param {ShadowRoot} node
     *   The node that will be checked to see if it has a shadow root
     *
     * @returns {boolean}
     *     True if <var>node</var> is a shadow root, false otherwise.
     */
    function isShadowRoot(node: ShadowRoot): boolean;
    /**
     * Ascertains whether <var>obj</var> is a DOM element.
     *
     * @param {object} obj
     *     Object to check.
     *
     * @returns {boolean}
     *     True if <var>obj</var> is a DOM element, false otherwise.
     */
    function isDOMElement(obj: any): boolean;
    /**
     * Ascertains whether <var>obj</var> is a XUL element.
     *
     * @param {object} obj
     *     Object to check.
     *
     * @returns {boolean}
     *     True if <var>obj</var> is a XULElement, false otherwise.
     */
    function isXULElement(obj: any): boolean;
    /**
     * Ascertains whether <var>node</var> is in a privileged document.
     *
     * @param {Node} node
     *     Node to check.
     *
     * @returns {boolean}
     *     True if <var>node</var> is in a privileged document,
     *     false otherwise.
     */
    function isInPrivilegedDocument(node: Node): boolean;
    /**
     * Ascertains whether <var>obj</var> is a <code>WindowProxy</code>.
     *
     * @param {object} obj
     *     Object to check.
     *
     * @returns {boolean}
     *     True if <var>obj</var> is a DOM window.
     */
    function isDOMWindow(obj: any): boolean;
    /**
     * Tests if the attribute is a boolean attribute on element.
     *
     * @param {Element} el
     *     Element to test if <var>attr</var> is a boolean attribute on.
     * @param {string} attr
     *     Attribute to test is a boolean attribute.
     *
     * @returns {boolean}
     *     True if the attribute is boolean, false otherwise.
     */
    function isBooleanAttribute(el: Element, attr: string): boolean;
}
