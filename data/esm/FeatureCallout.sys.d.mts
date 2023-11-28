/**
 * Feature Callout fetches messages relevant to a given source and displays them
 * in the parent page pointing to the element they describe.
 */
export class FeatureCallout {
    /** A list of all the theme properties that can be set */
    static themePropNames: string[];
    /** @type {Object<String, FeatureCalloutTheme>} */
    static themePresets: any;
    /**
     * @typedef {Object} FeatureCalloutOptions
     * @property {Window} win window in which messages will be rendered.
     * @property {{name: String, defaultValue?: String}} [pref] optional pref used
     *   to track progress through a given feature tour. for example:
     *   {
     *     name: "browser.pdfjs.feature-tour",
     *     defaultValue: '{ screen: "FEATURE_CALLOUT_1", complete: false }',
     *   }
     *   or { name: "browser.pdfjs.feature-tour" } (defaultValue is optional)
     * @property {String} [location] string to pass as the page when requesting
     *   messages from ASRouter and sending telemetry.
     * @property {String} context either "chrome" or "content". "chrome" is used
     *   when the callout is shown in the browser chrome, and "content" is used
     *   when the callout is shown in a content page like Firefox View.
     * @property {MozBrowser} [browser] <browser> element responsible for the
     *   feature callout. for content pages, this is the browser element that the
     *   callout is being shown in. for chrome, this is the active browser.
     * @property {Function} [listener] callback to be invoked on various callout
     *   events to keep the broker informed of the callout's state.
     * @property {FeatureCalloutTheme} [theme] @see FeatureCallout.themePresets
     */
    /** @param {FeatureCalloutOptions} options */
    constructor({ win, pref, location, context, browser, listener, theme, }?: {
        /**
         * window in which messages will be rendered.
         */
        win: Window;
        /**
         * optional pref used
         * to track progress through a given feature tour. for example:
         * {
         * name: "browser.pdfjs.feature-tour",
         * defaultValue: '{ screen: "FEATURE_CALLOUT_1", complete: false }',
         * }
         * or { name: "browser.pdfjs.feature-tour" } (defaultValue is optional)
         */
        pref?: {
            name: string;
            defaultValue?: string;
        };
        /**
         * string to pass as the page when requesting
         * messages from ASRouter and sending telemetry.
         */
        location?: string;
        /**
         * either "chrome" or "content". "chrome" is used
         * when the callout is shown in the browser chrome, and "content" is used
         * when the callout is shown in a content page like Firefox View.
         */
        context: string;
        /**
         * <browser> element responsible for the
         * feature callout. for content pages, this is the browser element that the
         * callout is being shown in. for chrome, this is the active browser.
         */
        browser?: MozBrowser;
        /**
         * callback to be invoked on various callout
         * events to keep the broker informed of the callout's state.
         */
        listener?: Function;
        theme?: {
            /**
             * Key of {@link FeatureCallout.themePresets }
             */
            preset?: string;
            /**
             * Custom light scheme
             */
            light?: any;
            /**
             * Custom dark scheme
             */
            dark?: any;
            /**
             * Custom high contrast scheme
             */
            hcm?: any;
            /**
             * Custom scheme that will be applied in all
             * cases, but overridden by the other schemes if they are present. This is
             * useful if the values are already controlled by the browser theme.
             */
            all?: any;
            /**
             * Set to true if the feature callout
             * exists in the browser chrome but is meant to be displayed over the
             * content area to appear as if it is part of the page. This will cause the
             * styles to use a media query targeting the content instead of the chrome,
             * so that if the browser theme doesn't match the content color scheme, the
             * callout will correctly follow the content scheme. This is currently used
             * for the feature callouts displayed over the PDF.js viewer.
             */
            simulateContent?: boolean;
        };
    });
    win: Window;
    doc: Document;
    browser: any;
    config: any;
    loadingConfig: boolean;
    message: any;
    pref: {
        name: string;
        defaultValue?: string;
    };
    _featureTourProgress: any;
    currentScreen: any;
    renderObserver: any;
    savedFocus: {
        element: Element;
        focusVisible: boolean;
    } | {
        element: Element;
        focusVisible: boolean;
    };
    ready: boolean;
    _positionListenersRegistered: boolean;
    _panelConflictListenersRegistered: boolean;
    AWSetup: boolean;
    location: string;
    context: string;
    listener: Function;
    _handlePrefChange(subject: any, topic: any, prefName: any): void;
    setupFeatureTourProgress(): void;
    teardownFeatureTourProgress(): void;
    get featureTourProgress(): any;
    /**
     * Get the page event manager and instantiate it if necessary. Only used by
     * _attachPageEventListeners, since we don't want to do this unnecessary work
     * if a message with page event listeners hasn't loaded. Other consumers
     * should use `this._pageEventManager?.property` instead.
     */
    get _loadPageEventManager(): any;
    _pageEventManager: any;
    _addPositionListeners(): void;
    _removePositionListeners(): void;
    _addPanelConflictListeners(): void;
    _removePanelConflictListeners(): void;
    /**
     * Close the tour when the urlbar is opened in the chrome. Set up by
     * gURLBar.controller.addQueryListener in _addPanelConflictListeners.
     */
    onViewOpen(): void;
    _maybeAdvanceScreens(): Promise<void>;
    handleEvent(event: any): void;
    _addCalloutLinkElements(): Promise<void>;
    /**
     * @typedef {
     * | "topleft"
     * | "topright"
     * | "bottomleft"
     * | "bottomright"
     * | "leftcenter"
     * | "rightcenter"
     * | "topcenter"
     * | "bottomcenter"
     * } PopupAttachmentPoint
     *
     * @see nsMenuPopupFrame
     *
     * Each attachment point corresponds to an attachment point on the edge of a
     * frame. For example, "topleft" corresponds to the frame's top left corner,
     * and "rightcenter" corresponds to the center of the right edge of the frame.
     */
    /**
     * @typedef {Object} PanelPosition Specifies how the callout panel should be
     *   positioned relative to the anchor element, by providing which point on
     *   the callout should be aligned with which point on the anchor element.
     * @property {PopupAttachmentPoint} anchor_attachment
     * @property {PopupAttachmentPoint} callout_attachment
     * @property {Number} [offset_x] Offset in pixels to apply to the callout
     *   position in the horizontal direction.
     * @property {Number} [offset_y] The same in the vertical direction.
     *
     * This is used when you want the callout to be displayed as a <panel>
     * element. A panel is critical when the callout is displayed in the browser
     * chrome, anchored to an element whose position on the screen is dynamic,
     * such as a button. When the anchor moves, the panel will automatically move
     * with it. Also, when the elements are aligned so that the callout would
     * extend beyond the edge of the screen, the panel will automatically flip
     * itself to the other side of the anchor element. This requires specifying
     * both an anchor attachment point and a callout attachment point. For
     * example, to get the callout to appear under a button, with its arrow on the
     * right side of the callout:
     * { anchor_attachment: "bottomcenter", callout_attachment: "topright" }
     */
    /**
     * @typedef {
     * | "top"
     * | "bottom"
     * | "end"
     * | "start"
     * | "top-end"
     * | "top-start"
     * | "top-center-arrow-end"
     * | "top-center-arrow-start"
     * } HTMLArrowPosition
     *
     * @see FeatureCallout._positionCallout()
     * The position of the callout arrow relative to the callout container. Only
     * used for HTML callouts, typically in content pages. If the position
     * contains a dash, the value before the dash refers to which edge of the
     * feature callout the arrow points from. The value after the dash describes
     * where along that edge the arrow sits, with middle as the default.
     */
    /**
     * @typedef {Object} PositionOverride CSS properties to override
     *   the callout's position relative to the anchor element. Although the
     *   callout is not actually a child of the anchor element, this allows
     *   absolute positioning of the callout relative to the anchor element. In
     *   other words, { top: "0px", left: "0px" } will position the callout in the
     *   top left corner of the anchor element, in the same way these properties
     *   would position a child element.
     * @property {String} [top]
     * @property {String} [left]
     * @property {String} [right]
     * @property {String} [bottom]
     */
    /**
     * @typedef {Object} AnchorConfig
     * @property {String} selector CSS selector for the anchor node.
     * @property {PanelPosition} [panel_position] Used to show the callout in a
     *   XUL panel. Only works in chrome documents, like the main browser window.
     * @property {HTMLArrowPosition} [arrow_position] Used to show the callout in
     *   an HTML div container. Mutually exclusive with panel_position.
     * @property {PositionOverride} [absolute_position] Only used for HTML
     *   callouts, i.e. when panel_position is not specified. Allows absolute
     *   positioning of the callout relative to the anchor element.
     * @property {Boolean} [hide_arrow] Whether to hide the arrow.
     * @property {Boolean} [no_open_on_anchor] Whether to set the [open] style on
     *   the anchor element when the callout is shown. False to set it, true to
     *   not set it. This only works for panel callouts. Not all elements have an
     *   [open] style. Buttons do, for example. It's usually similar to :active.
     * @property {Number} [arrow_width] The desired width of the arrow in a number
     *   of pixels. 33.94113 by default (this corresponds to 24px edges).
     */
    /**
     * @typedef {Object} Anchor
     * @property {String} selector
     * @property {PanelPosition} [panel_position]
     * @property {HTMLArrowPosition} [arrow_position]
     * @property {PositionOverride} [absolute_position]
     * @property {Boolean} [hide_arrow]
     * @property {Boolean} [no_open_on_anchor]
     * @property {Number} [arrow_width]
     * @property {Element} element The anchor node resolved from the selector.
     * @property {String} [panel_position_string] The panel_position joined into a
     *   string, e.g. "bottomleft topright". Passed to XULPopupElement::openPopup.
     */
    /**
     * Return the first visible anchor element for the current screen. Screens can
     * specify multiple anchors in an array, and the first one that is visible
     * will be used. If none are visible, return null.
     * @returns {Anchor|null}
     */
    _getAnchor(): {
        selector: string;
        panel_position?: {
            anchor_attachment: any;
            callout_attachment: any;
            /**
             * Offset in pixels to apply to the callout
             * position in the horizontal direction.
             */
            offset_x?: number;
            /**
             * The same in the vertical direction.
             *
             * This is used when you want the callout to be displayed as a <panel>
             * element. A panel is critical when the callout is displayed in the browser
             * chrome, anchored to an element whose position on the screen is dynamic,
             * such as a button. When the anchor moves, the panel will automatically move
             * with it. Also, when the elements are aligned so that the callout would
             * extend beyond the edge of the screen, the panel will automatically flip
             * itself to the other side of the anchor element. This requires specifying
             * both an anchor attachment point and a callout attachment point. For
             * example, to get the callout to appear under a button, with its arrow on the
             * right side of the callout:
             * { anchor_attachment: "bottomcenter", callout_attachment: "topright" }
             */
            offset_y?: number;
        };
        arrow_position?: any;
        absolute_position?: {
            top?: string;
            left?: string;
            right?: string;
            bottom?: string;
        };
        hide_arrow?: boolean;
        no_open_on_anchor?: boolean;
        arrow_width?: number;
        /**
         * The anchor node resolved from the selector.
         */
        element: Element;
        /**
         * The panel_position joined into a
         * string, e.g. "bottomleft topright". Passed to XULPopupElement::openPopup.
         */
        panel_position_string?: string;
    };
    /** @see PopupAttachmentPoint */
    _popupAttachmentPoints: string[];
    /**
     * Return a string representing the position of the panel relative to the
     * anchor element. Passed to XULPopupElement::openPopup. The string is of the
     * form "anchor_attachment callout_attachment".
     *
     * @param {PanelPosition} panelPosition
     * @returns {String|null} A string like "bottomcenter topright", or null if
     *   the panelPosition object is invalid.
     */
    _getPanelPositionString(panelPosition: {
        anchor_attachment: any;
        callout_attachment: any;
        /**
         * Offset in pixels to apply to the callout
         * position in the horizontal direction.
         */
        offset_x?: number;
        /**
         * The same in the vertical direction.
         *
         * This is used when you want the callout to be displayed as a <panel>
         * element. A panel is critical when the callout is displayed in the browser
         * chrome, anchored to an element whose position on the screen is dynamic,
         * such as a button. When the anchor moves, the panel will automatically move
         * with it. Also, when the elements are aligned so that the callout would
         * extend beyond the edge of the screen, the panel will automatically flip
         * itself to the other side of the anchor element. This requires specifying
         * both an anchor attachment point and a callout attachment point. For
         * example, to get the callout to appear under a button, with its arrow on the
         * right side of the callout:
         * { anchor_attachment: "bottomcenter", callout_attachment: "topright" }
         */
        offset_y?: number;
    }): string | null;
    /**
     * Set/override methods on a panel element. Can be used to override methods on
     * the custom element class, or to add additional methods.
     *
     * @param {MozPanel} panel The panel to set methods for
     */
    _setPanelMethods(panel: MozPanel): void;
    _createContainer(): any;
    _container: any;
    /** @see HTMLArrowPosition */
    _HTMLArrowPositions: string[];
    /**
     * Set callout's position relative to parent element
     */
    _positionCallout(): void;
    /** Expose top level functions expected by the aboutwelcome bundle. */
    _setupWindowFunctions(): void;
    _windowFuncs: {
        AWGetFeatureConfig: () => any;
        AWGetSelectedTheme: (data: any) => any;
        AWSendEventTelemetry: (data: any) => any;
        AWSendToDeviceEmailsSupported: (data: any) => any;
        AWSendToParent: (name: any, data: any) => any;
        AWFinish: () => void;
        AWEvaluateScreenTargeting: (data: any) => any;
    };
    /** Clean up the functions defined above. */
    _clearWindowFunctions(): void;
    /**
     * Emit an event to the broker, if one is present.
     * @param {String} name
     * @param {any} data
     */
    _emitEvent(name: string, data: any): void;
    endTour(skipFadeOut?: boolean): void;
    content: any;
    _dismiss(): void;
    _addScriptsAndRender(): Promise<void>;
    _observeRender(container: any): void;
    /**
     * Update the internal config with a new message. If a message is not
     * provided, try requesting one from ASRouter. The message content is stored
     * in this.config, which is returned by AWGetFeatureConfig. The aboutwelcome
     * bundle will use that function to get the content when it executes.
     * @param {Object} [message] ASRouter message. Omit to request a new one.
     * @returns {Promise<boolean>} true if a message is loaded, false if not.
     */
    _updateConfig(message?: any): Promise<boolean>;
    /**
     * Request a message from ASRouter, targeting the `browser` and `page` values
     * passed to the constructor.
     * @returns {Promise<Object>} the requested message.
     */
    _loadConfig(): Promise<any>;
    /**
     * Try to render the callout in the current document.
     * @returns {Promise<Boolean>} whether the callout was rendered.
     */
    _renderCallout(): Promise<boolean>;
    /**
     * For each member of the screen's page_event_listeners array, add a listener.
     * @param {Array<PageEventListenerConfig>} listeners
     *
     * @typedef {Object} PageEventListenerConfig
     * @property {PageEventListenerParams} params Event listener parameters
     * @property {PageEventListenerAction} action Sent when the event fires
     *
     * @typedef {Object} PageEventListenerParams See PageEventManager.sys.mjs
     * @property {String} type Event type string e.g. `click`
     * @property {String} [selectors] Target selector, e.g. `tag.class, #id[attr]`
     * @property {PageEventListenerOptions} [options] addEventListener options
     *
     * @typedef {Object} PageEventListenerOptions
     * @property {Boolean} [capture] Use event capturing phase?
     * @property {Boolean} [once] Remove listener after first event?
     * @property {Boolean} [preventDefault] Prevent default action?
     * @property {Number} [interval] Used only for `timeout` and `interval` event
     *   types. These don't set up real event listeners, but instead invoke the
     *   action on a timer.
     *
     * @typedef {Object} PageEventListenerAction Action sent to AboutWelcomeParent
     * @property {String} [type] Action type, e.g. `OPEN_URL`
     * @property {Object} [data] Extra data, properties depend on action type
     * @property {Boolean} [dismiss] Dismiss screen after performing action?
     * @property {Boolean} [reposition] Reposition screen after performing action?
     */
    _attachPageEventListeners(listeners: {
        /**
         * Event listener parameters
         */
        params: {
            /**
             * Event type string e.g. `click`
             */
            type: string;
            /**
             * Target selector, e.g. `tag.class, #id[attr]`
             */
            selectors?: string;
            /**
             * addEventListener options
             */
            options?: {
                /**
                 * Use event capturing phase?
                 */
                capture?: boolean;
                /**
                 * Remove listener after first event?
                 */
                once?: boolean;
                /**
                 * Prevent default action?
                 */
                preventDefault?: boolean;
                /**
                 * Used only for `timeout` and `interval` event
                 * types. These don't set up real event listeners, but instead invoke the
                 * action on a timer.
                 */
                interval?: number;
            };
        };
        /**
         * Sent when the event fires
         */
        action: {
            /**
             * Action type, e.g. `OPEN_URL`
             */
            type?: string;
            /**
             * Extra data, properties depend on action type
             */
            data?: any;
            /**
             * Dismiss screen after performing action?
             */
            dismiss?: boolean;
            /**
             * Reposition screen after performing action?
             */
            reposition?: boolean;
        };
    }[]): void;
    /**
     * Perform an action in response to a page event.
     * @param {PageEventListenerAction} action
     * @param {Event} event Triggering event
     */
    _handlePageEventAction(action: {
        /**
         * Action type, e.g. `OPEN_URL`
         */
        type?: string;
        /**
         * Extra data, properties depend on action type
         */
        data?: any;
        /**
         * Dismiss screen after performing action?
         */
        dismiss?: boolean;
        /**
         * Reposition screen after performing action?
         */
        reposition?: boolean;
    }, event: Event): void;
    /**
     * For a given element, calculate a unique string that identifies it.
     * @param {Element} target Element to calculate the selector for
     * @returns {String} Computed event target selector, e.g. `button#next`
     */
    _getUniqueElementIdentifier(target: Element): string;
    /**
     * Get the element that should be initially focused. Prioritize the primary
     * button, then the secondary button, then any additional button, excluding
     * pseudo-links and the dismiss button. If no button is found, focus the first
     * input element. If no affirmative action is found, focus the first button,
     * which is probably the dismiss button. If no button is found, focus the
     * container itself.
     * @returns {Element|null} The element to focus when the callout is shown.
     */
    getInitialFocus(): Element | null;
    /**
     * Show a feature callout message, either by requesting one from ASRouter or
     * by showing a message passed as an argument.
     * @param {Object} [message] optional message to show instead of requesting one
     * @returns {Promise<Boolean>} true if a message was shown
     */
    showFeatureCallout(message?: any): Promise<boolean>;
    /**
     * @typedef {Object} FeatureCalloutTheme An object with a set of custom color
     *   schemes and/or a preset key. If both are provided, the preset will be
     *   applied first, then the custom themes will override the preset values.
     * @property {String} [preset] Key of {@link FeatureCallout.themePresets}
     * @property {ColorScheme} [light] Custom light scheme
     * @property {ColorScheme} [dark] Custom dark scheme
     * @property {ColorScheme} [hcm] Custom high contrast scheme
     * @property {ColorScheme} [all] Custom scheme that will be applied in all
     *   cases, but overridden by the other schemes if they are present. This is
     *   useful if the values are already controlled by the browser theme.
     * @property {Boolean} [simulateContent] Set to true if the feature callout
     *   exists in the browser chrome but is meant to be displayed over the
     *   content area to appear as if it is part of the page. This will cause the
     *   styles to use a media query targeting the content instead of the chrome,
     *   so that if the browser theme doesn't match the content color scheme, the
     *   callout will correctly follow the content scheme. This is currently used
     *   for the feature callouts displayed over the PDF.js viewer.
     */
    /**
     * @typedef {Object} ColorScheme An object with key-value pairs, with keys
     *   from {@link FeatureCallout.themePropNames}, mapped to CSS color values
     */
    /**
     * Combine the preset and custom themes into a single object and store it.
     * @param {FeatureCalloutTheme} theme
     */
    _initTheme(theme: {
        /**
         * Key of {@link FeatureCallout.themePresets }
         */
        preset?: string;
        /**
         * Custom light scheme
         */
        light?: any;
        /**
         * Custom dark scheme
         */
        dark?: any;
        /**
         * Custom high contrast scheme
         */
        hcm?: any;
        /**
         * Custom scheme that will be applied in all
         * cases, but overridden by the other schemes if they are present. This is
         * useful if the values are already controlled by the browser theme.
         */
        all?: any;
        /**
         * Set to true if the feature callout
         * exists in the browser chrome but is meant to be displayed over the
         * content area to appear as if it is part of the page. This will cause the
         * styles to use a media query targeting the content instead of the chrome,
         * so that if the browser theme doesn't match the content color scheme, the
         * callout will correctly follow the content scheme. This is currently used
         * for the feature callouts displayed over the PDF.js viewer.
         */
        simulateContent?: boolean;
    }): void;
    /** @type {FeatureCalloutTheme} */
    theme: {
        /**
         * Key of {@link FeatureCallout.themePresets }
         */
        preset?: string;
        /**
         * Custom light scheme
         */
        light?: any;
        /**
         * Custom dark scheme
         */
        dark?: any;
        /**
         * Custom high contrast scheme
         */
        hcm?: any;
        /**
         * Custom scheme that will be applied in all
         * cases, but overridden by the other schemes if they are present. This is
         * useful if the values are already controlled by the browser theme.
         */
        all?: any;
        /**
         * Set to true if the feature callout
         * exists in the browser chrome but is meant to be displayed over the
         * content area to appear as if it is part of the page. This will cause the
         * styles to use a media query targeting the content instead of the chrome,
         * so that if the browser theme doesn't match the content color scheme, the
         * callout will correctly follow the content scheme. This is currently used
         * for the feature callouts displayed over the PDF.js viewer.
         */
        simulateContent?: boolean;
    };
    /**
     * Apply all the theme colors to the feature callout's root element as CSS
     * custom properties in inline styles. These custom properties are consumed by
     * _feature-callout-theme.scss, which is bundled with the other styles that
     * are loaded by {@link FeatureCallout.prototype._addCalloutLinkElements}.
     */
    _applyTheme(): void;
    /**
     * Set or remove a CSS custom property on the feature callout container
     * @param {String} name Name of the CSS custom property
     * @param {String|void} [value] Value of the property, or omit to remove it
     */
    _setThemeVariable(name: string, value?: string | void): void;
}
