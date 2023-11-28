/**
 * JS-implemented TouchBarHelper class.
 * Provides services to the Mac Touch Bar.
 */
export class TouchBarHelper {
    static get window(): any;
    static get baseWindow(): any;
    _searchPopover: any;
    _inputsNotUpdated: Set<any>;
    destructor(): void;
    get activeTitle(): any;
    get allItems(): any;
    get document(): any;
    get isUrlbarFocused(): any;
    toggleFocusUrlbar(): void;
    unfocusUrlbar(): void;
    getTouchBarInput(inputName: any): any;
    /**
     * Fetches a specific Touch Bar Input by name and updates it on the Touch Bar.
     *
     * @param {...*} inputNames
     *        A key/keys to a value/values in the gBuiltInInputs object in this file.
     */
    _updateTouchBarInputs(...inputNames: any[]): void;
    /**
     * Inserts a restriction token into the Urlbar ahead of the current typed
     * search term.
     *
     * @param {string} restrictionToken
     *        The restriction token to be inserted into the Urlbar. Preferably
     *        sourced from UrlbarTokenizer.RESTRICT.
     */
    insertRestrictionInUrlbar(restrictionToken: string): void;
    observe(subject: any, topic: any, data: any): void;
    activeUrl: any;
    _l10n: any;
}
/**
 * A representation of a Touch Bar input.
 *
 *     @param {object} input
 *            An object representing a Touch Bar Input.
 *            Contains listed properties.
 *     @param {string} input.title
 *            The lookup key for the button's localized text title.
 *     @param {string} input.image
 *            A URL pointing to an SVG internal to Firefox.
 *     @param {string} input.type
 *            The type of Touch Bar input represented by the object.
 *            Must be a value from kInputTypes.
 *     @param {Function} input.callback
 *            A callback invoked when a touchbar item is touched.
 *     @param {string} [input.color]
 *            A string in hex format specifying the button's background color.
 *            If omitted, the default background color is used.
 *     @param {bool} [input.disabled]
 *            If `true`, the Touch Bar input is greyed out and inoperable.
 *     @param {Array} [input.children]
 *            An array of input objects that will be displayed as children of
 *            this input. Available only for types KInputTypes.POPOVER and
 *            kInputTypes.SCROLLVIEW.
 */
export class TouchBarInput {
    constructor(input: any);
    _key: any;
    _title: any;
    _image: any;
    _type: any;
    _callback: any;
    _color: number;
    _disabled: any;
    _children: TouchBarInput[];
    get key(): any;
    set title(title: any);
    get title(): any;
    set image(image: any);
    get image(): any;
    set type(type: any);
    get type(): any;
    set callback(callback: any);
    get callback(): any;
    set color(color: number);
    get color(): number;
    set disabled(disabled: any);
    get disabled(): any;
    get children(): any;
    /**
     * Apply Fluent l10n to child inputs.
     *
     * @param {Array} children
     *   An array of initialized TouchBarInputs.
     */
    _localizeChildren(children: any[]): Promise<void>;
    QueryInterface: any;
}
