/**
 * A tree view for inspecting scopes, objects and properties.
 * Iterable via "for (let [id, scope] of instance) { }".
 * Requires the devtools common.css and debugger.css skin stylesheets.
 *
 * To allow replacing variable or property values in this view, provide an
 * "eval" function property. To allow replacing variable or property names,
 * provide a "switch" function. To handle deleting variables or properties,
 * provide a "delete" function.
 *
 * @param Node aParentNode
 *        The parent node to hold this view.
 * @param object aFlags [optional]
 *        An object contaning initialization options for this view.
 *        e.g. { lazyEmpty: true, searchEnabled: true ... }
 */
export function VariablesView(aParentNode: any, aFlags?: {}): void;
export class VariablesView {
    /**
     * A tree view for inspecting scopes, objects and properties.
     * Iterable via "for (let [id, scope] of instance) { }".
     * Requires the devtools common.css and debugger.css skin stylesheets.
     *
     * To allow replacing variable or property values in this view, provide an
     * "eval" function property. To allow replacing variable or property names,
     * provide a "switch" function. To handle deleting variables or properties,
     * provide a "delete" function.
     *
     * @param Node aParentNode
     *        The parent node to hold this view.
     * @param object aFlags [optional]
     *        An object contaning initialization options for this view.
     *        e.g. { lazyEmpty: true, searchEnabled: true ... }
     */
    constructor(aParentNode: any, aFlags?: {});
    _store: null;
    _itemsByElement: null;
    _prevHierarchy: null;
    _currHierarchy: null;
    _parent: null;
    _onSearchboxInput: any;
    _onSearchboxKeyDown: any;
    _onViewKeyDown: any;
    _list: null;
    /**
     * Forget everything recorded about added scopes, variables or properties.
     * @see VariablesView.commitHierarchy
     */
    clearHierarchy(): void;
    /**
     * Perform operations on all the VariablesView Scopes, Variables and Properties
     * after you've added all the items you wanted.
     *
     * Calling this method is optional, and does the following:
     *   - styles the items overridden by other items in parent scopes
     *   - reopens the items which were previously expanded
     *   - flashes the items whose values changed
     */
    commitHierarchy(): void;
    commitHierarchyIgnoredItems: any;
    /**
     * Checks if the an item was previously expanded, if it existed in a
     * previous hierarchy.
     *
     * @param Scope | Variable | Property aItem
     *        The item to verify.
     * @return boolean
     *         Whether the item was expanded.
     */
    wasExpanded(aItem: any): any;
    /**
     * Checks if the an item's displayed value (a representation of the grip)
     * has changed, if it existed in a previous hierarchy.
     *
     * @param Variable | Property aItem
     *        The item to verify.
     * @return boolean
     *         Whether the item has changed.
     */
    hasChanged(aItem: any): boolean;
    /**
     * Checks if the an item was previously expanded, if it existed in a
     * previous hierarchy.
     *
     * @param Scope | Variable | Property aItem
     *        The item to verify.
     * @return boolean
     *         Whether the item was expanded.
     */
    isOverridden(aItem: any): boolean;
    /**
     * Helper setter for populating this container with a raw object.
     *
     * @param object aObject
     *        The raw object to display. You can only provide this object
     *        if you want the variables view to work in sync mode.
     */
    set rawObject(aObject: any);
    /**
     * Adds a scope to contain any inspected variables.
     *
     * This new scope will be considered the parent of any other scope
     * added afterwards.
     *
     * @param string l10nId
     *        The scope localized string id.
     * @param string aCustomClass
     *        An additional class name for the containing element.
     * @return Scope
     *         The newly created Scope instance.
     */
    addScope(l10nId?: string, aCustomClass?: string): Scope;
    /**
     * Removes all items from this container.
     *
     * @param number aTimeout [optional]
     *        The number of milliseconds to delay the operation if
     *        lazy emptying of this container is enabled.
     */
    empty(aTimeout?: any): void;
    /**
     * Emptying this container and rebuilding it immediately afterwards would
     * result in a brief redraw flicker, because the previously expanded nodes
     * may get asynchronously re-expanded, after fetching the prototype and
     * properties from a server.
     *
     * To avoid such behaviour, a normal container list is rebuild, but not
     * immediately attached to the parent container. The old container list
     * is kept around for a short period of time, hopefully accounting for the
     * data fetching delay. In the meantime, any operations can be executed
     * normally.
     *
     * @see VariablesView.empty
     * @see VariablesView.commitHierarchy
     */
    _emptySoon(aTimeout: any): void;
    toolbox: null;
    controller: null;
    lazyEmptyDelay: number;
    lazyEmpty: boolean;
    lazySearch: boolean;
    scrollPageSize: number;
    eval: null;
    switch: null;
    delete: null;
    new: null;
    preventDisableOnChange: boolean;
    preventDescriptorModifiers: boolean;
    editableValueTooltip: any;
    editableNameTooltip: any;
    editButtonTooltip: any;
    domNodeValueTooltip: any;
    deleteButtonTooltip: any;
    contextMenuId: string;
    separatorStr: any;
    /**
     * Specifies if enumerable properties and variables should be displayed.
     * These variables and properties are visible by default.
     * @param boolean aFlag
     */
    set enumVisible(aFlag: any);
    _enumVisible: boolean;
    /**
     * Specifies if non-enumerable properties and variables should be displayed.
     * These variables and properties are visible by default.
     * @param boolean aFlag
     */
    set nonEnumVisible(aFlag: any);
    _nonEnumVisible: boolean;
    /**
     * Specifies if only enumerable properties and variables should be displayed.
     * Both types of these variables and properties are visible by default.
     * @param boolean aFlag
     */
    set onlyEnumVisible(aFlag: any);
    /**
     * Sets if the variable and property searching is enabled.
     * @param boolean aFlag
     */
    set searchEnabled(aFlag: boolean);
    /**
     * Gets if the variable and property searching is enabled.
     * @return boolean
     */
    get searchEnabled(): boolean;
    /**
     * Enables variable and property searching in this view.
     * Use the "searchEnabled" setter to enable searching.
     */
    _enableSearch(): void;
    _searchboxContainer: null;
    _searchboxNode: null;
    /**
     * Disables variable and property searching in this view.
     * Use the "searchEnabled" setter to disable searching.
     */
    _disableSearch(): void;
    /**
     * Sets the variables searchbox container hidden or visible.
     * It's hidden by default.
     *
     * @param boolean aVisibleFlag
     *        Specifies the intended visibility.
     */
    _toggleSearchVisibility(aVisibleFlag: any): void;
    /**
     * Schedules searching for variables or properties matching the query.
     *
     * @param string aToken
     *        The variable or property to search for.
     * @param number aWait
     *        The amount of milliseconds to wait until draining.
     */
    scheduleSearch(aToken: any, aWait: any): void;
    /**
     * Performs a case insensitive search for variables or properties matching
     * the query, and hides non-matched items.
     *
     * If aToken is falsy, then all the scopes are unhidden and expanded,
     * while the available variables and properties inside those scopes are
     * just unhidden.
     *
     * @param string aToken
     *        The variable or property to search for.
     */
    _doSearch(aToken: any): void;
    /**
     * Find the first item in the tree of visible items in this container that
     * matches the predicate. Searches in visual order (the order seen by the
     * user). Descends into each scope to check the scope and its children.
     *
     * @param function aPredicate
     *        A function that returns true when a match is found.
     * @return Scope | Variable | Property
     *         The first visible scope, variable or property, or null if nothing
     *         is found.
     */
    _findInVisibleItems(aPredicate: any): any;
    /**
     * Find the last item in the tree of visible items in this container that
     * matches the predicate. Searches in reverse visual order (opposite of the
     * order seen by the user). Descends into each scope to check the scope and
     * its children.
     *
     * @param function aPredicate
     *        A function that returns true when a match is found.
     * @return Scope | Variable | Property
     *         The last visible scope, variable or property, or null if nothing
     *         is found.
     */
    _findInVisibleItemsReverse(aPredicate: any): any;
    /**
     * Gets the scope at the specified index.
     *
     * @param number aIndex
     *        The scope's index.
     * @return Scope
     *         The scope if found, undefined if not.
     */
    getScopeAtIndex(aIndex: any): any;
    /**
     * Recursively searches this container for the scope, variable or property
     * displayed by the specified node.
     *
     * @param Node aNode
     *        The node to search for.
     * @return Scope | Variable | Property
     *         The matched scope, variable or property, or null if nothing is found.
     */
    getItemForNode(aNode: any): any;
    /**
     * Gets the scope owning a Variable or Property.
     *
     * @param Variable | Property
     *        The variable or property to retrieven the owner scope for.
     * @return Scope
     *         The owner scope.
     */
    getOwnerScopeForVariableOrProperty(aItem: any): any;
    /**
     * Gets the parent scopes for a specified Variable or Property.
     * The returned list will not include the owner scope.
     *
     * @param Variable | Property
     *        The variable or property for which to find the parent scopes.
     * @return array
     *         A list of parent Scopes.
     */
    getParentScopesForVariableOrProperty(aItem: any): any;
    /**
     * Gets the currently focused scope, variable or property in this view.
     *
     * @return Scope | Variable | Property
     *         The focused scope, variable or property, or null if nothing is found.
     */
    getFocusedItem(): any;
    /**
     * Focuses the first visible scope, variable, or property in this container.
     */
    focusFirstVisibleItem(): void;
    /**
     * Focuses the last visible scope, variable, or property in this container.
     */
    focusLastVisibleItem(): void;
    /**
     * Focuses the next scope, variable or property in this view.
     */
    focusNextItem(): void;
    /**
     * Focuses the previous scope, variable or property in this view.
     */
    focusPrevItem(): void;
    /**
     * Focuses another scope, variable or property in this view, based on
     * the index distance from the currently focused item.
     *
     * @param number aDelta
     *        A scalar specifying by how many items should the selection change.
     */
    focusItemAtDelta(aDelta: any): void;
    /**
     * Focuses the next or previous scope, variable or property in this view.
     *
     * @param string aDirection
     *        Either "advanceFocus" or "rewindFocus".
     * @return boolean
     *         False if the focus went out of bounds and the first or last element
     *         in this view was focused instead.
     */
    _focusChange(aDirection: any): boolean;
    /**
     * Focuses a scope, variable or property and makes sure it's visible.
     *
     * @param aItem Scope | Variable | Property
     *        The item to focus.
     * @param boolean aCollapseFlag
     *        True if the focused item should also be collapsed.
     * @return boolean
     *         True if the item was successfully focused.
     */
    _focusItem(aItem: any, aCollapseFlag: any): boolean;
    /**
     * Copy current selection to clipboard.
     */
    _copyItem(): void;
    /**
     * Sets the text displayed in this container when there are no available items.
     * @param string aValue
     */
    set emptyText(aValue: any);
    _emptyTextValue: string;
    /**
     * Creates and appends a label signaling that this container is empty.
     */
    _appendEmptyNotice(): void;
    _emptyTextNode: null;
    /**
     * Removes the label signaling that this container is empty.
     */
    _removeEmptyNotice(): void;
    /**
     * Sets if all values should be aligned together.
     * @param boolean aFlag
     */
    set alignedValues(aFlag: boolean);
    /**
     * Gets if all values should be aligned together.
     * @return boolean
     */
    get alignedValues(): boolean;
    _alignedValues: boolean;
    /**
     * Sets if action buttons (like delete) should be placed at the beginning or
     * end of a line.
     * @param boolean aFlag
     */
    set actionsFirst(aFlag: boolean);
    /**
     * Gets if action buttons (like delete) should be placed at the beginning or
     * end of a line.
     * @return boolean
     */
    get actionsFirst(): boolean;
    _actionsFirst: boolean;
    /**
     * Gets the parent node holding this view.
     * @return Node
     */
    get parentNode(): any;
    /**
     * Gets the owner document holding this view.
     * @return HTMLDocument
     */
    get document(): any;
    _document: null;
    /**
     * Gets the default window holding this view.
     * @return nsIDOMWindow
     */
    get window(): any;
    _window: null;
}
export namespace VariablesView {
    let NON_SORTABLE_CLASSES: string[];
    /**
     * Determine whether an object's properties should be sorted based on its class.
     *
     * @param string aClassName
     *        The class of the object.
     */
    function isSortable(aClassName: any): boolean;
    /**
     * Generates the string evaluated when performing simple value changes.
     *
     * @param Variable | Property aItem
     *        The current variable or property.
     * @param string aCurrentString
     *        The trimmed user inputted string.
     * @param string aPrefix [optional]
     *        Prefix for the symbolic name.
     * @return string
     *         The string to be evaluated.
     */
    function simpleValueEvalMacro(aItem: any, aCurrentString: any, aPrefix?: string): string;
    /**
     * Generates the string evaluated when overriding getters and setters with
     * plain values.
     *
     * @param Property aItem
     *        The current getter or setter property.
     * @param string aCurrentString
     *        The trimmed user inputted string.
     * @param string aPrefix [optional]
     *        Prefix for the symbolic name.
     * @return string
     *         The string to be evaluated.
     */
    function overrideValueEvalMacro(aItem: any, aCurrentString: any, aPrefix?: string): string;
    /**
     * Generates the string evaluated when performing getters and setters changes.
     *
     * @param Property aItem
     *        The current getter or setter property.
     * @param string aCurrentString
     *        The trimmed user inputted string.
     * @param string aPrefix [optional]
     *        Prefix for the symbolic name.
     * @return string
     *         The string to be evaluated.
     */
    function getterOrSetterEvalMacro(aItem: any, aCurrentString: any, aPrefix?: string): any;
    /**
     * Function invoked when a getter or setter is deleted.
     *
     * @param Property aItem
     *        The current getter or setter property.
     */
    function getterOrSetterDeleteCallback(aItem: any): boolean;
    /**
     * Returns true if the descriptor represents an undefined, null or
     * primitive value.
     *
     * @param object aDescriptor
     *        The variable's descriptor.
     */
    function isPrimitive(aDescriptor: any): boolean;
    /**
     * Returns true if the descriptor represents an undefined value.
     *
     * @param object aDescriptor
     *        The variable's descriptor.
     */
    function isUndefined(aDescriptor: any): boolean;
    /**
     * Returns true if the descriptor represents a falsy value.
     *
     * @param object aDescriptor
     *        The variable's descriptor.
     */
    function isFalsy(aDescriptor: any): boolean;
    /**
     * Returns true if the value is an instance of Variable or Property.
     *
     * @param any aValue
     *        The value to test.
     */
    function isVariable(aValue: any): boolean;
    /**
     * Returns a standard grip for a value.
     *
     * @param any aValue
     *        The raw value to get a grip for.
     * @return any
     *         The value's grip.
     */
    function getGrip(aValue: any): string | number | boolean | {
        type: string;
        class?: undefined;
    } | {
        type: string;
        class: any;
    };
    /**
     * Returns a custom formatted property string for a grip.
     *
     * @param any aGrip
     *        @see Variable.setGrip
     * @param object aOptions
     *        Options:
     *        - concise: boolean that tells you want a concisely formatted string.
     *        - noStringQuotes: boolean that tells to not quote strings.
     *        - noEllipsis: boolean that tells to not add an ellipsis after the
     *        initial text of a longString.
     * @return string
     *         The formatted property string.
     */
    function getString(aGrip: any, aOptions?: {}): any;
    namespace stringifiers {
        namespace byType {
            function string(aGrip: any, { noStringQuotes }: {
                noStringQuotes: any;
            }): any;
            function longString({ initial }: {
                initial: any;
            }, { noStringQuotes, noEllipsis }: {
                noStringQuotes: any;
                noEllipsis: any;
            }): any;
            function object(aGrip: any, aOptions: any): any;
            function symbol(aGrip: any, aOptions: any): string;
            function mapEntry(aGrip: any, { concise }: {
                concise: any;
            }): string;
        }
        namespace byObjectClass {
            import Boolean = Number;
            export { Boolean };
        }
        namespace byObjectKind {
            function ArrayLike(aGrip: any, { concise }: {
                concise: any;
            }): string;
            function MapLike(aGrip: any, { concise }: {
                concise: any;
            }): string;
            function ObjectWithText(aGrip: any, { concise }: {
                concise: any;
            }): any;
            function ObjectWithURL(aGrip: any, { concise }: {
                concise: any;
            }): any;
            function Object(aGrip: any, { concise }: {
                concise: any;
            }): any;
            function Error(aGrip: any, { concise }: {
                concise: any;
            }): any;
            function DOMException(aGrip: any, { concise }: {
                concise: any;
            }): any;
            function DOMEvent(aGrip: any, { concise }: {
                concise: any;
            }): string;
            function DOMNode(aGrip: any, { concise }: {
                concise: any;
            }): any;
        }
        /**
         * Get the "N more…" formatted string, given an N. This is used for displaying
         * how many elements are not displayed in an object preview (eg. an array).
         *
         * @private
         * @param number aNumber
         * @return string
         */
        function _getNMoreString(aNumber: any): any;
    }
    /**
     * Returns a custom class style for a grip.
     *
     * @param any aGrip
     *        @see Variable.setGrip
     * @return string
     *         The custom class style.
     */
    function getClass(aGrip: any): "token-domnode" | "token-undefined" | "token-null" | "token-number" | "token-string" | "token-boolean" | "token-other";
}
/**
 * Escape some HTML special characters. We do not need full HTML serialization
 * here, we just want to make strings safe to display in HTML attributes, for
 * the stringifiers.
 *
 * @param string aString
 * @return string
 */
export function escapeHTML(aString: any): any;
/**
 * A Scope is an object holding Variable instances.
 * Iterable via "for (let [name, variable] of instance) { }".
 *
 * @param VariablesView aView
 *        The view to contain this scope.
 * @param string l10nId
 *        The scope localized string id.
 * @param object aFlags [optional]
 *        Additional options or flags for this scope.
 */
declare function Scope(aView: any, l10nId: any, aFlags?: {}): void;
declare class Scope {
    /**
     * A Scope is an object holding Variable instances.
     * Iterable via "for (let [name, variable] of instance) { }".
     *
     * @param VariablesView aView
     *        The view to contain this scope.
     * @param string l10nId
     *        The scope localized string id.
     * @param object aFlags [optional]
     *        Additional options or flags for this scope.
     */
    constructor(aView: any, l10nId: any, aFlags?: {});
    ownerView: null;
    _onClick: any;
    _openEnum: any;
    _openNonEnum: any;
    scrollPageSize: any;
    eval: null;
    switch: null;
    delete: null;
    new: null;
    preventDisableOnChange: boolean;
    preventDescriptorModifiers: boolean;
    editableNameTooltip: string;
    editableValueTooltip: string;
    editButtonTooltip: string;
    deleteButtonTooltip: string;
    domNodeValueTooltip: string;
    contextMenuId: string;
    separatorStr: string;
    shouldPrefetch: boolean;
    allowPaginate: boolean;
    targetClassName: string;
    /**
     * Create a new Variable that is a child of this Scope.
     *
     * @param string aName
     *        The name of the new Property.
     * @param object aDescriptor
     *        The variable's descriptor.
     * @param object aOptions
     *        Options of the form accepted by addItem.
     * @return Variable
     *         The newly created child Variable.
     */
    _createChild(aName: any, aDescriptor: any, aOptions: any): Variable;
    /**
     * Adds a child to contain any inspected properties.
     *
     * @param string aName
     *        The child's name.
     * @param object aDescriptor
     *        Specifies the value and/or type & class of the child,
     *        or 'get' & 'set' accessor properties. If the type is implicit,
     *        it will be inferred from the value. If this parameter is omitted,
     *        a property without a value will be added (useful for branch nodes).
     *        e.g. - { value: 42 }
     *             - { value: true }
     *             - { value: "nasu" }
     *             - { value: { type: "undefined" } }
     *             - { value: { type: "null" } }
     *             - { value: { type: "object", class: "Object" } }
     *             - { get: { type: "object", class: "Function" },
     *                 set: { type: "undefined" } }
     * @param object aOptions
     *        Specifies some options affecting the new variable.
     *        Recognized properties are
     *        * boolean relaxed  true if name duplicates should be allowed.
     *                           You probably shouldn't do it. Use this
     *                           with caution.
     *        * boolean internalItem  true if the item is internally generated.
     *                           This is used for special variables
     *                           like <return> or <exception> and distinguishes
     *                           them from ordinary properties that happen
     *                           to have the same name
     * @return Variable
     *         The newly created Variable instance, null if it already exists.
     */
    addItem(aName: any, aDescriptor?: {}, aOptions?: {}): any;
    /**
     * Adds items for this variable.
     *
     * @param object aItems
     *        An object containing some { name: descriptor } data properties,
     *        specifying the value and/or type & class of the variable,
     *        or 'get' & 'set' accessor properties. If the type is implicit,
     *        it will be inferred from the value.
     *        e.g. - { someProp0: { value: 42 },
     *                 someProp1: { value: true },
     *                 someProp2: { value: "nasu" },
     *                 someProp3: { value: { type: "undefined" } },
     *                 someProp4: { value: { type: "null" } },
     *                 someProp5: { value: { type: "object", class: "Object" } },
     *                 someProp6: { get: { type: "object", class: "Function" },
     *                              set: { type: "undefined" } } }
     * @param object aOptions [optional]
     *        Additional options for adding the properties. Supported options:
     *        - sorted: true to sort all the properties before adding them
     *        - callback: function invoked after each item is added
     */
    addItems(aItems: any, aOptions?: {}): void;
    /**
     * Remove this Scope from its parent and remove all children recursively.
     */
    remove(): void;
    /**
     * Gets the variable in this container having the specified name.
     *
     * @param string aName
     *        The name of the variable to get.
     * @return Variable
     *         The matched variable, or null if nothing is found.
     */
    get(aName: any): any;
    /**
     * Recursively searches for the variable or property in this container
     * displayed by the specified node.
     *
     * @param Node aNode
     *        The node to search for.
     * @return Variable | Property
     *         The matched variable or property, or null if nothing is found.
     */
    find(aNode: any): any;
    /**
     * Determines if this scope is a direct child of a parent variables view,
     * scope, variable or property.
     *
     * @param VariablesView | Scope | Variable | Property
     *        The parent to check.
     * @return boolean
     *         True if the specified item is a direct child, false otherwise.
     */
    isChildOf(aParent: any): boolean;
    /**
     * Determines if this scope is a descendant of a parent variables view,
     * scope, variable or property.
     *
     * @param VariablesView | Scope | Variable | Property
     *        The parent to check.
     * @return boolean
     *         True if the specified item is a descendant, false otherwise.
     */
    isDescendantOf(aParent: any): any;
    /**
     * Shows the scope.
     */
    show(): void;
    _isContentVisible: boolean;
    /**
     * Hides the scope.
     */
    hide(): void;
    /**
     * Expands the scope, showing all the added details.
     */
    expand(): Promise<void>;
    _isExpanded: boolean;
    /**
     * Collapses the scope, hiding all the added details.
     */
    collapse(): void;
    /**
     * Toggles between the scope's collapsed and expanded state.
     */
    toggle(e: any): void;
    /**
     * Shows the scope's title header.
     */
    showHeader(): void;
    _isHeaderVisible: boolean;
    /**
     * Hides the scope's title header.
     * This action will automatically expand the scope.
     */
    hideHeader(): void;
    /**
     * Sort in ascending order
     * This only needs to compare non-numbers since it is dealing with an array
     * which numeric-based indices are placed in order.
     *
     * @param string a
     * @param string b
     * @return number
     *         -1 if a is less than b, 0 if no change in order, +1 if a is greater than 0
     */
    _naturalSort(a: any, b: any): 0 | 1 | -1;
    /**
     * Shows the scope's expand/collapse arrow.
     */
    showArrow(): void;
    _isArrowVisible: boolean;
    /**
     * Hides the scope's expand/collapse arrow.
     */
    hideArrow(): void;
    /**
     * Sets the visibility state.
     * @param boolean aFlag
     */
    set visible(aFlag: boolean);
    /**
     * Gets the visibility state.
     * @return boolean
     */
    get visible(): boolean;
    /**
     * Sets the expanded state.
     * @param boolean aFlag
     */
    set expanded(aFlag: boolean);
    /**
     * Gets the expanded state.
     * @return boolean
     */
    get expanded(): boolean;
    /**
     * Sets the header visibility state.
     * @param boolean aFlag
     */
    set header(aFlag: boolean);
    /**
     * Gets the header visibility state.
     * @return boolean
     */
    get header(): boolean;
    /**
     * Sets the twisty visibility state.
     * @param boolean aFlag
     */
    set twisty(aFlag: boolean);
    /**
     * Gets the twisty visibility state.
     * @return boolean
     */
    get twisty(): boolean;
    /**
     * Sets the expand lock state.
     * @param boolean aFlag
     */
    set locked(aFlag: boolean);
    /**
     * Gets the expand lock state.
     * @return boolean
     */
    get locked(): boolean;
    _isLocked: boolean;
    /**
     * Specifies if this target node may be focused.
     * @return boolean
     */
    get focusable(): boolean;
    /**
     * Focus this scope.
     */
    focus(): void;
    /**
     * Adds an event listener for a certain event on this scope's title.
     * @param string aName
     * @param function aCallback
     * @param boolean aCapture
     */
    addEventListener(aName: any, aCallback: any, aCapture: any): void;
    /**
     * Removes an event listener for a certain event on this scope's title.
     * @param string aName
     * @param function aCallback
     * @param boolean aCapture
     */
    removeEventListener(aName: any, aCallback: any, aCapture: any): void;
    /**
     * Gets the id associated with this item.
     * @return string
     */
    get id(): string;
    /**
     * Gets the name associated with this item.
     * @return string
     */
    get name(): string;
    /**
     * Gets the displayed value for this item.
     * @return string
     */
    get displayValue(): any;
    /**
     * Gets the class names used for the displayed value.
     * @return string
     */
    get displayValueClassName(): any;
    /**
     * Gets the element associated with this item.
     * @return Node
     */
    get target(): any;
    /**
     * Initializes this scope's id, view and binds event listeners.
     *
     * @param string l10nId
     *        The scope localized string id.
     * @param object aFlags [optional]
     *        Additional options or flags for this scope.
     */
    _init(l10nId: any, aFlags: any): void;
    _idString: string;
    _nameString: string;
    /**
     * Creates the necessary nodes for this scope.
     *
     * @param Object options
     * @param string options.l10nId [optional]
     *        The scope localized string id.
     * @param string options.value [optional]
     *        The scope's name. Either this or l10nId need to be passed
     * @param string options.targetClassName
     *        A custom class name for this scope's target element.
     * @param string options.titleClassName [optional]
     *        A custom class name for this scope's title element.
     */
    _displayScope({ l10nId, value, targetClassName, titleClassName }: {
        l10nId: any;
        value: any;
        targetClassName: any;
        titleClassName?: string;
    }): void;
    _target: null;
    _arrow: null;
    _name: null;
    _title: null;
    _enum: null;
    _nonenum: null;
    /**
     * Adds the necessary event listeners for this scope.
     */
    _addEventListeners(): void;
    /**
     * Specifies if enumerable properties and variables should be displayed.
     * @param boolean aFlag
     */
    set _enumVisible(aFlag: any);
    /**
     * Specifies if non-enumerable properties and variables should be displayed.
     * @param boolean aFlag
     */
    set _nonEnumVisible(aFlag: any);
    /**
     * Performs a case insensitive search for variables or properties matching
     * the query, and hides non-matched items.
     *
     * @param string aLowerCaseQuery
     *        The lowercased name of the variable or property to search for.
     */
    _performSearch(aLowerCaseQuery: any): void;
    /**
     * Sets if this object instance is a matched or non-matched item.
     * @param boolean aStatus
     */
    set _matched(aStatus: any);
    _isMatch: boolean;
    /**
     * Find the first item in the tree of visible items in this item that matches
     * the predicate. Searches in visual order (the order seen by the user).
     * Tests itself, then descends into first the enumerable children and then
     * the non-enumerable children (since they are presented in separate groups).
     *
     * @param function aPredicate
     *        A function that returns true when a match is found.
     * @return Scope | Variable | Property
     *         The first visible scope, variable or property, or null if nothing
     *         is found.
     */
    _findInVisibleItems(aPredicate: any): any;
    /**
     * Find the last item in the tree of visible items in this item that matches
     * the predicate. Searches in reverse visual order (opposite of the order
     * seen by the user). Descends into first the non-enumerable children, then
     * the enumerable children (since they are presented in separate groups), and
     * finally tests itself.
     *
     * @param function aPredicate
     *        A function that returns true when a match is found.
     * @return Scope | Variable | Property
     *         The last visible scope, variable or property, or null if nothing
     *         is found.
     */
    _findInVisibleItemsReverse(aPredicate: any): any;
    /**
     * Gets top level variables view instance.
     * @return VariablesView
     */
    get _variablesView(): any;
    _topView: null;
    /**
     * Gets the parent node holding this scope.
     * @return Node
     */
    get parentNode(): any;
    /**
     * Gets the owner document holding this scope.
     * @return HTMLDocument
     */
    get document(): any;
    _document: null;
    /**
     * Gets the default window holding this scope.
     * @return nsIDOMWindow
     */
    get window(): any;
    _window: null;
    editing: boolean;
    _store: null;
    _enumItems: null;
    _nonEnumItems: null;
    _fetched: boolean;
    _committed: boolean;
}
/**
 * A Variable is a Scope holding Property instances.
 * Iterable via "for (let [name, property] of instance) { }".
 *
 * @param Scope aScope
 *        The scope to contain this variable.
 * @param string aName
 *        The variable's name.
 * @param object aDescriptor
 *        The variable's descriptor.
 * @param object aOptions
 *        Options of the form accepted by Scope.addItem
 */
declare function Variable(aScope: any, aName: any, aDescriptor: any, aOptions: any): void;
declare class Variable {
    /**
     * A Variable is a Scope holding Property instances.
     * Iterable via "for (let [name, property] of instance) { }".
     *
     * @param Scope aScope
     *        The scope to contain this variable.
     * @param string aName
     *        The variable's name.
     * @param object aDescriptor
     *        The variable's descriptor.
     * @param object aOptions
     *        Options of the form accepted by Scope.addItem
     */
    constructor(aScope: any, aName: any, aDescriptor: any, aOptions: any);
    _setTooltips: any;
    _activateNameInput: any;
    _activateValueInput: any;
    openNodeInInspector: any;
    highlightDomNode: any;
    unhighlightDomNode: any;
    _internalItem: any;
    _initialDescriptor: any;
}
export {};
