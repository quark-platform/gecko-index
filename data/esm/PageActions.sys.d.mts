export namespace PageActions {
    export { Action };
    export { ACTION_ID_BUILT_IN_SEPARATOR };
    export { ACTION_ID_TRANSIENT_SEPARATOR };
    export { ACTION_ID_BOOKMARK };
    export { PREF_PERSISTED_ACTIONS };
    export function _initBuiltInActions(): void;
}
/**
 * A single page action.
 *
 * Each action can have both per-browser-window state and global state.
 * Per-window state takes precedence over global state.  This is reflected in
 * the title, tooltip, disabled, and icon properties.  Each of these properties
 * has a getter method and setter method that takes a browser window.  Pass null
 * to get the action's global state.  Pass a browser window to get the per-
 * window state.  However, if you pass a window and the action has no state for
 * that window, then the global state will be returned.
 *
 * `options` is a required object with the following properties.  Regarding the
 * properties discussed in the previous paragraph, the values in `options` set
 * global state.
 *
 * @param id (string, required)
 *        The action's ID.  Treat this like the ID of a DOM node.
 * @param title (string, optional)
 *        The action's title. It is optional for built in actions.
 * @param anchorIDOverride (string, optional)
 *        Pass a string to override the node to which the action's activated-
 *        action panel is anchored.
 * @param disabled (bool, optional)
 *        Pass true to cause the action to be disabled initially in all browser
 *        windows.  False by default.
 * @param extensionID (string, optional)
 *        If the action lives in an extension, pass its ID.
 * @param iconURL (string or object, optional)
 *        The URL string of the action's icon.  Usually you want to specify an
 *        icon in CSS, but this option is useful if that would be a pain for
 *        some reason.  You can also pass an object that maps pixel sizes to
 *        URLs, like { 16: url16, 32: url32 }.  The best size for the user's
 *        screen will be used.
 * @param isBadged (bool, optional)
 *        If true, the toolbarbutton for this action will get a
 *        "badged" attribute.
 * @param onBeforePlacedInWindow (function, optional)
 *        Called before the action is placed in the window:
 *        onBeforePlacedInWindow(window)
 *        * window: The window that the action will be placed in.
 * @param onCommand (function, optional)
 *        Called when the action is clicked, but only if it has neither a
 *        subview nor an iframe:
 *        onCommand(event, buttonNode)
 *        * event: The triggering event.
 *        * buttonNode: The button node that was clicked.
 * @param onIframeHiding (function, optional)
 *        Called when the action's iframe is hiding:
 *        onIframeHiding(iframeNode, parentPanelNode)
 *        * iframeNode: The iframe.
 *        * parentPanelNode: The panel node in which the iframe is shown.
 * @param onIframeHidden (function, optional)
 *        Called when the action's iframe is hidden:
 *        onIframeHidden(iframeNode, parentPanelNode)
 *        * iframeNode: The iframe.
 *        * parentPanelNode: The panel node in which the iframe is shown.
 * @param onIframeShowing (function, optional)
 *        Called when the action's iframe is showing to the user:
 *        onIframeShowing(iframeNode, parentPanelNode)
 *        * iframeNode: The iframe.
 *        * parentPanelNode: The panel node in which the iframe is shown.
 * @param onLocationChange (function, optional)
 *        Called after tab switch or when the current <browser>'s location
 *        changes:
 *        onLocationChange(browserWindow)
 *        * browserWindow: The browser window containing the tab switch or
 *          changed <browser>.
 * @param onPlacedInPanel (function, optional)
 *        Called when the action is added to the page action panel in a browser
 *        window:
 *        onPlacedInPanel(buttonNode)
 *        * buttonNode: The action's node in the page action panel.
 * @param onPlacedInUrlbar (function, optional)
 *        Called when the action is added to the urlbar in a browser window:
 *        onPlacedInUrlbar(buttonNode)
 *        * buttonNode: The action's node in the urlbar.
 * @param onRemovedFromWindow (function, optional)
 *        Called after the action is removed from a browser window:
 *        onRemovedFromWindow(browserWindow)
 *        * browserWindow: The browser window that the action was removed from.
 * @param onShowingInPanel (function, optional)
 *        Called when a browser window's page action panel is showing:
 *        onShowingInPanel(buttonNode)
 *        * buttonNode: The action's node in the page action panel.
 * @param onSubviewPlaced (function, optional)
 *        Called when the action's subview is added to its parent panel in a
 *        browser window:
 *        onSubviewPlaced(panelViewNode)
 *        * panelViewNode: The subview's panelview node.
 * @param onSubviewShowing (function, optional)
 *        Called when the action's subview is showing in a browser window:
 *        onSubviewShowing(panelViewNode)
 *        * panelViewNode: The subview's panelview node.
 * @param pinnedToUrlbar (bool, optional)
 *        Pass true to pin the action to the urlbar.  An action is shown in the
 *        urlbar if it's pinned and not disabled.  False by default.
 * @param tooltip (string, optional)
 *        The action's button tooltip text.
 * @param urlbarIDOverride (string, optional)
 *        Usually the ID of the action's button in the urlbar will be generated
 *        automatically.  Pass a string for this property to override that with
 *        your own ID.
 * @param wantsIframe (bool, optional)
 *        Pass true to make an action that shows an iframe in a panel when
 *        clicked.
 * @param wantsSubview (bool, optional)
 *        Pass true to make an action that shows a panel subview when clicked.
 * @param disablePrivateBrowsing (bool, optional)
 *        Pass true to prevent the action from showing in a private browsing window.
 */
declare function Action(options: any): void;
declare class Action {
    /**
     * A single page action.
     *
     * Each action can have both per-browser-window state and global state.
     * Per-window state takes precedence over global state.  This is reflected in
     * the title, tooltip, disabled, and icon properties.  Each of these properties
     * has a getter method and setter method that takes a browser window.  Pass null
     * to get the action's global state.  Pass a browser window to get the per-
     * window state.  However, if you pass a window and the action has no state for
     * that window, then the global state will be returned.
     *
     * `options` is a required object with the following properties.  Regarding the
     * properties discussed in the previous paragraph, the values in `options` set
     * global state.
     *
     * @param id (string, required)
     *        The action's ID.  Treat this like the ID of a DOM node.
     * @param title (string, optional)
     *        The action's title. It is optional for built in actions.
     * @param anchorIDOverride (string, optional)
     *        Pass a string to override the node to which the action's activated-
     *        action panel is anchored.
     * @param disabled (bool, optional)
     *        Pass true to cause the action to be disabled initially in all browser
     *        windows.  False by default.
     * @param extensionID (string, optional)
     *        If the action lives in an extension, pass its ID.
     * @param iconURL (string or object, optional)
     *        The URL string of the action's icon.  Usually you want to specify an
     *        icon in CSS, but this option is useful if that would be a pain for
     *        some reason.  You can also pass an object that maps pixel sizes to
     *        URLs, like { 16: url16, 32: url32 }.  The best size for the user's
     *        screen will be used.
     * @param isBadged (bool, optional)
     *        If true, the toolbarbutton for this action will get a
     *        "badged" attribute.
     * @param onBeforePlacedInWindow (function, optional)
     *        Called before the action is placed in the window:
     *        onBeforePlacedInWindow(window)
     *        * window: The window that the action will be placed in.
     * @param onCommand (function, optional)
     *        Called when the action is clicked, but only if it has neither a
     *        subview nor an iframe:
     *        onCommand(event, buttonNode)
     *        * event: The triggering event.
     *        * buttonNode: The button node that was clicked.
     * @param onIframeHiding (function, optional)
     *        Called when the action's iframe is hiding:
     *        onIframeHiding(iframeNode, parentPanelNode)
     *        * iframeNode: The iframe.
     *        * parentPanelNode: The panel node in which the iframe is shown.
     * @param onIframeHidden (function, optional)
     *        Called when the action's iframe is hidden:
     *        onIframeHidden(iframeNode, parentPanelNode)
     *        * iframeNode: The iframe.
     *        * parentPanelNode: The panel node in which the iframe is shown.
     * @param onIframeShowing (function, optional)
     *        Called when the action's iframe is showing to the user:
     *        onIframeShowing(iframeNode, parentPanelNode)
     *        * iframeNode: The iframe.
     *        * parentPanelNode: The panel node in which the iframe is shown.
     * @param onLocationChange (function, optional)
     *        Called after tab switch or when the current <browser>'s location
     *        changes:
     *        onLocationChange(browserWindow)
     *        * browserWindow: The browser window containing the tab switch or
     *          changed <browser>.
     * @param onPlacedInPanel (function, optional)
     *        Called when the action is added to the page action panel in a browser
     *        window:
     *        onPlacedInPanel(buttonNode)
     *        * buttonNode: The action's node in the page action panel.
     * @param onPlacedInUrlbar (function, optional)
     *        Called when the action is added to the urlbar in a browser window:
     *        onPlacedInUrlbar(buttonNode)
     *        * buttonNode: The action's node in the urlbar.
     * @param onRemovedFromWindow (function, optional)
     *        Called after the action is removed from a browser window:
     *        onRemovedFromWindow(browserWindow)
     *        * browserWindow: The browser window that the action was removed from.
     * @param onShowingInPanel (function, optional)
     *        Called when a browser window's page action panel is showing:
     *        onShowingInPanel(buttonNode)
     *        * buttonNode: The action's node in the page action panel.
     * @param onSubviewPlaced (function, optional)
     *        Called when the action's subview is added to its parent panel in a
     *        browser window:
     *        onSubviewPlaced(panelViewNode)
     *        * panelViewNode: The subview's panelview node.
     * @param onSubviewShowing (function, optional)
     *        Called when the action's subview is showing in a browser window:
     *        onSubviewShowing(panelViewNode)
     *        * panelViewNode: The subview's panelview node.
     * @param pinnedToUrlbar (bool, optional)
     *        Pass true to pin the action to the urlbar.  An action is shown in the
     *        urlbar if it's pinned and not disabled.  False by default.
     * @param tooltip (string, optional)
     *        The action's button tooltip text.
     * @param urlbarIDOverride (string, optional)
     *        Usually the ID of the action's button in the urlbar will be generated
     *        automatically.  Pass a string for this property to override that with
     *        your own ID.
     * @param wantsIframe (bool, optional)
     *        Pass true to make an action that shows an iframe in a panel when
     *        clicked.
     * @param wantsSubview (bool, optional)
     *        Pass true to make an action that shows a panel subview when clicked.
     * @param disablePrivateBrowsing (bool, optional)
     *        Pass true to prevent the action from showing in a private browsing window.
     */
    constructor(options: any);
    /**
     * A cache of the pre-computed CSS variable values for a given icon
     * URLs object, as passed to _createIconProperties.
     */
    _iconProperties: WeakMap<object, any>;
    /**
     * The global values for the action properties.
     */
    _globalProps: {
        disabled: any;
        iconURL: any;
        iconProps: any;
        title: any;
        tooltip: any;
        wantsSubview: any;
    };
    /**
     * A mapping of window-specific action property objects, each of which
     * derives from the _globalProps object.
     */
    _windowProps: WeakMap<object, any>;
    /**
     * The ID of the action's parent extension (string)
     */
    get extensionID(): any;
    /**
     * The action's ID (string)
     */
    get id(): any;
    get disablePrivateBrowsing(): boolean;
    /**
     * Verifies that the action can be shown in a private window.  For
     * extensions, verifies the extension has access to the window.
     */
    canShowInWindow(browserWindow: any): boolean;
    set pinnedToUrlbar(shown: any);
    /**
     * True if the action is pinned to the urlbar.  The action is shown in the
     * urlbar if it's pinned and not disabled.  (bool)
     */
    get pinnedToUrlbar(): any;
    _pinnedToUrlbar: any;
    /**
     * The action's disabled state (bool)
     */
    getDisabled(browserWindow?: any): boolean;
    setDisabled(value: any, browserWindow?: any): any;
    /**
     * The action's icon URL string, or an object mapping sizes to URL strings
     * (string or object)
     */
    getIconURL(browserWindow?: any): any;
    setIconURL(value: any, browserWindow?: any): any;
    /**
     * The set of CSS variables which define the action's icons in various
     * sizes. This is generated automatically from the iconURL property.
     */
    getIconProperties(browserWindow?: any): any;
    _createIconProperties(urls: any): any;
    /**
     * The action's title (string). Note, built in actions will
     * not have a title property.
     */
    getTitle(browserWindow?: any): any;
    setTitle(value: any, browserWindow?: any): any;
    /**
     * The action's tooltip (string)
     */
    getTooltip(browserWindow?: any): any;
    setTooltip(value: any, browserWindow?: any): any;
    /**
     * Whether the action wants a subview (bool)
     */
    getWantsSubview(browserWindow?: any): boolean;
    setWantsSubview(value: any, browserWindow?: any): any;
    /**
     * Sets a property, optionally for a particular browser window.
     *
     * @param  name (string, required)
     *         The (non-underscored) name of the property.
     * @param  value
     *         The value.
     * @param  browserWindow (DOM window, optional)
     *         If given, then the property will be set in this window's state, not
     *         globally.
     */
    _setProperty(name: any, value: any, browserWindow: any): any;
    _updateProperty(name: any, value: any, browserWindow: any): void;
    /**
     * Returns the properties object for the given window, if it exists,
     * or the global properties object if no window-specific properties
     * exist.
     *
     * @param {Window?} window
     *        The window for which to return the properties object, or
     *        null to return the global properties object.
     * @param {bool} [forceWindowSpecific = false]
     *        If true, always returns a window-specific properties object.
     *        If a properties object does not exist for the given window,
     *        one is created and cached.
     * @returns {object}
     */
    _getProperties(window: Window | null, forceWindowSpecific?: bool): object;
    /**
     * Override for the ID of the action's activated-action panel anchor (string)
     */
    get anchorIDOverride(): any;
    /**
     * Override for the ID of the action's urlbar node (string)
     */
    get urlbarIDOverride(): any;
    /**
     * True if the action is shown in an iframe (bool)
     */
    get wantsIframe(): any;
    get isBadged(): any;
    get labelForHistogram(): any;
    /**
     * Selects the best matching icon from the given URLs object for the
     * given preferred size.
     *
     * @param {object} urls
     *        An object containing square icons of various sizes. The name
     *        of each property is its width, and the value is its image URL.
     * @param {integer} peferredSize
     *        The preferred icon width. The most appropriate icon in the
     *        urls object will be chosen to match that size. An exact
     *        match will be preferred, followed by an icon exactly double
     *        the size, followed by the smallest icon larger than the
     *        preferred size, followed by the largest available icon.
     * @returns {string}
     *        The chosen icon URL.
     */
    _iconURLForSize(urls: object, preferredSize: any): string;
    /**
     * Performs the command for an action.  If the action has an onCommand
     * handler, then it's called.  If the action has a subview or iframe, then a
     * panel is opened, displaying the subview or iframe.
     *
     * @param  browserWindow (DOM window, required)
     *         The browser window in which to perform the action.
     */
    doCommand(browserWindow: any): void;
    /**
     * Call this when before placing the action in the window.
     *
     * @param  browserWindow (DOM window, required)
     *         The browser window the action will be placed in.
     */
    onBeforePlacedInWindow(browserWindow: any): void;
    /**
     * Call this when the user activates the action.
     *
     * @param  event (DOM event, required)
     *         The triggering event.
     * @param  buttonNode (DOM node, required)
     *         The action's panel or urlbar button node that was clicked.
     */
    onCommand(event: any, buttonNode: any): void;
    /**
     * Call this when the action's iframe is hiding.
     *
     * @param  iframeNode (DOM node, required)
     *         The iframe that's hiding.
     * @param  parentPanelNode (DOM node, required)
     *         The panel in which the iframe is hiding.
     */
    onIframeHiding(iframeNode: any, parentPanelNode: any): void;
    /**
     * Call this when the action's iframe is hidden.
     *
     * @param  iframeNode (DOM node, required)
     *         The iframe that's being hidden.
     * @param  parentPanelNode (DOM node, required)
     *         The panel in which the iframe is hidden.
     */
    onIframeHidden(iframeNode: any, parentPanelNode: any): void;
    /**
     * Call this when the action's iframe is showing.
     *
     * @param  iframeNode (DOM node, required)
     *         The iframe that's being shown.
     * @param  parentPanelNode (DOM node, required)
     *         The panel in which the iframe is shown.
     */
    onIframeShowing(iframeNode: any, parentPanelNode: any): void;
    /**
     * Call this on tab switch or when the current <browser>'s location changes.
     *
     * @param  browserWindow (DOM window, required)
     *         The browser window containing the tab switch or changed <browser>.
     */
    onLocationChange(browserWindow: any): void;
    /**
     * Call this when a DOM node for the action is added to the page action panel.
     *
     * @param  buttonNode (DOM node, required)
     *         The action's panel button node.
     */
    onPlacedInPanel(buttonNode: any): void;
    /**
     * Call this when a DOM node for the action is added to the urlbar.
     *
     * @param  buttonNode (DOM node, required)
     *         The action's urlbar button node.
     */
    onPlacedInUrlbar(buttonNode: any): void;
    /**
     * Call this when the DOM nodes for the action are removed from a browser
     * window.
     *
     * @param  browserWindow (DOM window, required)
     *         The browser window the action was removed from.
     */
    onRemovedFromWindow(browserWindow: any): void;
    /**
     * Call this when the action's button is shown in the page action panel.
     *
     * @param  buttonNode (DOM node, required)
     *         The action's panel button node.
     */
    onShowingInPanel(buttonNode: any): void;
    /**
     * Call this when a panelview node for the action's subview is added to the
     * DOM.
     *
     * @param  panelViewNode (DOM node, required)
     *         The subview's panelview node.
     */
    onSubviewPlaced(panelViewNode: any): void;
    /**
     * Call this when a panelview node for the action's subview is showing.
     *
     * @param  panelViewNode (DOM node, required)
     *         The subview's panelview node.
     */
    onSubviewShowing(panelViewNode: any): void;
    /**
     * Call this when an icon in the url is pinned or unpinned.
     */
    onPinToUrlbarToggled(): void;
    /**
     * Removes the action's DOM nodes from all browser windows.
     *
     * PageActions will remember the action's urlbar placement, if any, after this
     * method is called until app shutdown.  If the action is not added again
     * before shutdown, then PageActions will discard the placement, and the next
     * time the action is added, its placement will be reset.
     */
    remove(): void;
    /**
     * Returns whether the action should be shown in a given window's panel.
     *
     * @param  browserWindow (DOM window, required)
     *         The window.
     * @return True if the action should be shown and false otherwise.  Actions
     *         are always shown in the panel unless they're both transient and
     *         disabled.
     */
    shouldShowInPanel(browserWindow: any): boolean;
    /**
     * Returns whether the action should be shown in a given window's urlbar.
     *
     * @param  browserWindow (DOM window, required)
     *         The window.
     * @return True if the action should be shown and false otherwise.  The action
     *         should be shown if it's both pinned and not disabled.
     */
    shouldShowInUrlbar(browserWindow: any): boolean;
    get _isBuiltIn(): boolean;
    get _isMozillaAction(): boolean;
}
declare const ACTION_ID_BUILT_IN_SEPARATOR: "builtInSeparator";
declare const ACTION_ID_TRANSIENT_SEPARATOR: "transientSeparator";
declare const ACTION_ID_BOOKMARK: "bookmark";
declare const PREF_PERSISTED_ACTIONS: "browser.pageActions.persistedActions";
export {};
