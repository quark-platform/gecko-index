export namespace SelectParentHelper {
    /**
     * `populate` takes the `menulist` element and a list of `items` and generates
     * a popup list of options.
     *
     * If `CUSTOM_STYLING_ENABLED` is set to `true`, the function will also
     * style the select and its popup trying to prevent the text
     * and background to end up in the same color.
     *
     * All `ua*` variables represent the color values for the default colors
     * for their respective form elements used by the user agent.
     * The `select*` variables represent the color values defined for the
     * particular <select> element.
     *
     * The `customoptionstyling` attribute controls the application of
     * `-moz-appearance` on the elements and is disabled if the element is
     * defining its own background-color.
     *
     * @param {Element}        menulist
     * @param {Array<Element>} items
     * @param {Array<Object>}  uniqueItemStyles
     * @param {Number}         selectedIndex
     * @param {Number}         zoom
     * @param {Boolean}        custom
     * @param {Boolean}        isDarkBackground
     * @param {Object}         uaStyle
     * @param {Object}         selectStyle
     */
    function populate(menulist: Element, items: Element[], uniqueItemStyles: any[], selectedIndex: number, zoom: number, custom: boolean, isDarkBackground: boolean, uaStyle: any, selectStyle: any): void;
    function open(browser: any, menulist: any, rect: any, isOpenedViaTouch: any, selectParentActor: any): void;
    function hide(menulist: any, browser: any): void;
    function handleEvent(event: any): void;
    function receiveMessage(browser: any, msg: any): void;
    function _registerListeners(popup: any): void;
    function _unregisterListeners(popup: any): void;
    /**
     * `populateChildren` creates all <menuitem> elements for the popup menu
     * based on the list of <option> elements from the <select> element.
     *
     * It attempts to intelligently add per-item CSS rules if the single
     * item values differ from the parent menu values and attempting to avoid
     * ending up with the same color of text and background.
     *
     * @param {Element}        menulist
     * @param {Array<Element>} options
     * @param {Array<Object>}  uniqueOptionStyles
     * @param {Number}         selectedIndex
     * @param {Element}        parentElement
     * @param {Boolean}        isGroupDisabled
     * @param {Boolean}        addSearch
     * @param {Number}         nthChildIndex
     * @returns {Number}
     */
    function populateChildren(menulist: Element, custom: any, options: Element[], uniqueOptionStyles: any[], selectedIndex: number, parentElement?: Element, isGroupDisabled?: boolean, addSearch?: boolean, nthChildIndex?: number): number;
    function onSearchKeydown(event: any, menulist: any): void;
    function onSearchInput(event: any): void;
    function onSearchFocus(event: any): void;
    function onSearchBlur(event: any): void;
}
export class SelectParent extends JSWindowActorParent {
    get relevantBrowser(): any;
    get _document(): any;
    get _menulist(): any;
    _createMenulist(): any;
    receiveMessage(message: any): void;
}
