/**
 * This is associated to <panelmultiview> elements.
 */
export const PanelMultiView: {
    new (node: any): {
        readonly _panel: any;
        _transitioning: any;
        readonly _screenManager: unknown;
        __screenManager: unknown;
        _openPopupPromise: Promise<boolean>;
        connect(): void;
        connected: boolean;
        _viewContainer: any;
        _viewStack: any;
        _offscreenViewStack: any;
        openViews: any[];
        disconnect(): void;
        /**
         * Node associated to this object.
         */
        node: any;
        _openPopupCancelCallback: any;
        _transitionDetails: {
            phase: 1;
        };
        /**
         * Tries to open the panel associated with this PanelMultiView, and displays
         * the main view specified with the "mainViewId" attribute.
         *
         * The hidePopup method can be called while the operation is in progress to
         * prevent the panel from being displayed. View events may also cancel the
         * operation, so there is no guarantee that the panel will become visible.
         *
         * The "popuphidden" event will be fired either when the operation is canceled
         * or when the popup is closed later. This event can be used for example to
         * reset the "open" state of the anchor or tear down temporary panels.
         *
         * If this method is called again before the panel is shown, the result
         * depends on the operation currently in progress. If the operation was not
         * canceled, the panel is opened using the arguments from the previous call,
         * and this call is ignored. If the operation was canceled, it will be
         * retried again using the arguments from this call.
         *
         * It's not necessary for the <panelmultiview> binding to be connected when
         * this method is called, but the containing panel must have its display
         * turned on, for example it shouldn't have the "hidden" attribute.
         *
         * @param anchor
         *        The node to anchor the popup to.
         * @param options
         *        Either options to use or a string position. This is forwarded to
         *        the openPopup method of the panel.
         * @param args
         *        Additional arguments to be forwarded to the openPopup method of the
         *        panel.
         *
         * @resolves With true as soon as the request to display the panel has been
         *           sent, or with false if the operation was canceled. The state of
         *           the panel at this point is not guaranteed. It may be still
         *           showing, completely shown, or completely hidden.
         * @rejects If an exception is thrown at any point in the process before the
         *          request to display the panel is sent.
         */
        openPopup(anchor: any, options: any, ...args: any[]): Promise<boolean>;
        /**
         * Closes the panel associated with this PanelMultiView.
         *
         * If the openPopup method was called but the panel has not been displayed
         * yet, the operation is canceled and the panel will not be displayed, but the
         * "popuphidden" event is fired synchronously anyways.
         *
         * This means that by the time this method returns all the operations handled
         * by the "popuphidden" event are completed, for example resetting the "open"
         * state of the anchor, and the panel is already invisible.
         *
         * @note The value of animate could be changed to true by default, in both
         *       this and the static method above. (see bug 1769813)
         *
         * @param {Boolean} [animate] Whether to show a fade animation. Optional.
         *
         */
        hidePopup(animate?: boolean): void;
        /**
         * Move any child subviews into the element defined by "viewCacheId" to make
         * sure they will not be removed together with the <panelmultiview> element.
         */
        _moveOutKids(): void;
        /**
         * Slides in the specified view as a subview.
         *
         * @param viewIdOrNode
         *        DOM element or string ID of the <panelview> to display.
         * @param anchor
         *        DOM element that triggered the subview, which will be highlighted
         *        and whose "label" attribute will be used for the title of the
         *        subview when a "title" attribute is not specified.
         */
        showSubView(viewIdOrNode: any, anchor: any): void;
        _showSubView(viewIdOrNode: any, anchor: any): Promise<void>;
        /**
         * Navigates backwards by sliding out the most recent subview.
         */
        goBack(): void;
        _goBack(): Promise<void>;
        /**
         * Prepares the main view before showing the panel.
         */
        _showMainView(): Promise<boolean>;
        /**
         * Opens the specified PanelView and dispatches the ViewShowing event, which
         * can be used to populate the subview or cancel the operation.
         *
         * This also clears all the attributes and styles that may be left by a
         * transition that was interrupted.
         *
         * @resolves With true if the view was opened, false otherwise.
         */
        _openView(panelView: any): Promise<boolean>;
        /**
         * Activates the specified view and raises the ViewShown event, unless the
         * view was closed in the meantime.
         */
        _activateView(panelView: any): void;
        /**
         * Closes the most recent PanelView and raises the ViewHiding event.
         *
         * @note The ViewHiding event is not cancelable and should probably be renamed
         *       to ViewHidden or ViewClosed instead, see bug 1438507.
         */
        _closeLatestView(): void;
        /**
         * Closes all the views that are currently open.
         */
        closeAllViews(): void;
        /**
         * Apply a transition to 'slide' from the currently active view to the next
         * one.
         * Sliding the next subview in means that the previous panelview stays where it
         * is and the active panelview slides in from the left in LTR mode, right in
         * RTL mode.
         *
         * @param {panelview} previousViewNode Node that is currently displayed, but
         *                                     is about to be transitioned away. This
         *                                     must be already inactive at this point.
         * @param {panelview} viewNode         Node that will becode the active view,
         *                                     after the transition has finished.
         * @param {Boolean}   reverse          Whether we're navigation back to a
         *                                     previous view or forward to a next view.
         */
        _transitionViews(previousViewNode: panelview, viewNode: panelview, reverse: boolean): Promise<void>;
        /**
         * Attempt to clean up the attributes and properties set by `_transitionViews`
         * above. Which attributes and properties depends on the phase the transition
         * was left from.
         */
        _cleanupTransitionPhase(): void;
        _calculateMaxHeight(aEvent: any): number;
        handleEvent(aEvent: any): void;
        /**
         * This promise is resolved when the current set of blockers set by event
         * handlers have all been processed.
         */
        _blockersPromise: Promise<void>;
        readonly document: any;
        readonly window: any;
        _getBoundsWithoutFlushing(element: any): any;
        /**
         * Dispatches a custom event on this element.
         *
         * @param  {String}    eventName Name of the event to dispatch.
         * @param  {Object}    [detail]  Event detail object. Optional.
         * @param  {Boolean}   cancelable If the event can be canceled.
         * @return {Boolean} `true` if the event was canceled by an event handler, `false`
         *                   otherwise.
         */
        dispatchCustomEvent(eventName: string, detail?: any, cancelable?: boolean): boolean;
        /**
         * Dispatches a custom event on this element and waits for any blocking
         * promises registered using the "addBlocker" function on the details object.
         * If this function is called again, the event is only dispatched after all
         * the previously registered blockers have returned.
         *
         * The event can be canceled either by resolving any blocking promise to the
         * boolean value "false" or by calling preventDefault on the event. Rejections
         * and exceptions will be reported and will cancel the event.
         *
         * Blocking should be used sporadically because it slows down the interface.
         * Also, non-reentrancy is not strictly guaranteed because a safety timeout of
         * BLOCKERS_TIMEOUT_MS is implemented, after which the event will be canceled.
         * This helps to prevent deadlocks if any of the event handlers does not
         * resolve a blocker promise.
         *
         * @note Since there is no use case for dispatching different asynchronous
         *       events in parallel for the same element, this function will also wait
         *       for previous blockers when the event name is different.
         *
         * @param eventName
         *        Name of the custom event to dispatch.
         *
         * @resolves True if the event was canceled by a handler, false otherwise.
         */
        dispatchAsyncEvent(eventName: any): Promise<boolean>;
    };
    /**
     * Tries to open the specified <panel> and displays the main view specified
     * with the "mainViewId" attribute on the <panelmultiview> node it contains.
     *
     * If the panel does not contain a <panelmultiview>, it is opened directly.
     * This allows consumers like page actions to accept different panel types.
     *
     * @see The non-static openPopup method for details.
     */
    openPopup(panelNode: any, ...args: any[]): Promise<any>;
    /**
     * Closes the specified <panel> which contains a <panelmultiview> node.
     *
     * If the panel does not contain a <panelmultiview>, it is closed directly.
     * This allows consumers like page actions to accept different panel types.
     *
     * @param {DOMNode} panelNode The <panel> node.
     * @param {Boolean} [animate] Whether to show a fade animation. Optional.
     *
     * @see The non-static hidePopup method for details.
     */
    hidePopup(panelNode: DOMNode, animate?: boolean): void;
    /**
     * Removes the specified <panel> from the document, ensuring that any
     * <panelmultiview> node it contains is destroyed properly.
     *
     * If the viewCacheId attribute is present on the <panelmultiview> element,
     * imported subviews will be moved out again to the element it specifies, so
     * that the panel element can be removed safely.
     *
     * If the panel does not contain a <panelmultiview>, it is removed directly.
     * This allows consumers like page actions to accept different panel types.
     */
    removePopup(panelNode: any): void;
    /**
     * Returns the element with the given id.
     * For nodes that are lazily loaded and not yet in the DOM, the node should
     * be retrieved from the view cache template.
     */
    getViewNode(doc: any, id: any): any;
    /**
     * Ensures that when the specified window is closed all the <panelmultiview>
     * node it contains are destroyed properly.
     */
    ensureUnloadHandlerRegistered(window: any): void;
    /**
     * Retrieves the instance associated with the given node, constructing a new
     * one if necessary. When the last reference to the node is released, the
     * object instance will be garbage collected as well.
     */
    forNode(node: any): any;
};
/**
 * This is associated to <panelview> elements.
 */
export const PanelView: {
    new (node: any): {
        /**
         * Indicates whether the view is active. When this is false, consumers can
         * wait for the ViewShown event to know when the view becomes active.
         */
        active: boolean;
        /**
         * Specifies whether the view should be focused when active. When this
         * is true, the first navigable element in the view will be focused
         * when the view becomes active. This should be set to true when the view
         * is activated from the keyboard. It will be set to false once the view
         * is active.
         */
        focusWhenActive: boolean;
        /**
         * Indicates whether the view is open in the specified PanelMultiView object.
         */
        isOpenIn(panelMultiView: any): boolean;
        /**
         * The "mainview" attribute is set before the panel is opened when this view
         * is displayed as the main view, and is removed before the <panelview> is
         * displayed as a subview. The same view element can be displayed as a main
         * view and as a subview at different times.
         */
        mainview: any;
        /**
         * Determines whether the view is visible. Setting this to false also resets
         * the "active" property.
         */
        visible: any;
        /**
         * Constrains the width of this view using the "min-width" and "max-width"
         * styles. Setting this to zero removes the constraints.
         */
        minMaxWidth: any;
        /**
         * Constrains the height of this view using the "min-height" and "max-height"
         * styles. Setting this to zero removes the constraints.
         */
        minMaxHeight: any;
        /**
         * Adds a header with the given title, or removes it if the title is empty.
         */
        headerText: any;
        /**
         * Creates and returns a panel header back toolbarbutton.
         */
        createHeaderBackButton(): any;
        /**
         * Also make sure that the correct method is called on CustomizableWidget.
         */
        dispatchCustomEvent(...args: any[]): boolean;
        /**
         * Populates the "knownWidth" and "knownHeight" properties with the current
         * dimensions of the view. These may be zero if the view is invisible.
         *
         * These values are relevant during transitions and are retained for backwards
         * navigation if the view is still open but is invisible.
         */
        captureKnownSize(): void;
        knownWidth: any;
        knownHeight: any;
        /**
         * Determine whether an element can only be navigated to with tab/shift+tab,
         * not the arrow keys.
         */
        _isNavigableWithTabOnly(element: any): boolean;
        /**
         * Make a TreeWalker for keyboard navigation.
         *
         * @param {Boolean} arrowKey If `true`, elements only navigable with tab are
         *        excluded.
         */
        _makeNavigableTreeWalker(arrowKey: boolean): any;
        /**
         * Get a TreeWalker which finds elements navigable with tab/shift+tab.
         */
        readonly _tabNavigableWalker: any;
        __tabNavigableWalker: any;
        /**
         * Get a TreeWalker which finds elements navigable with up/down arrow keys.
         */
        readonly _arrowNavigableWalker: any;
        __arrowNavigableWalker: any;
        /**
         * Element that is currently selected with the keyboard, or null if no element
         * is selected. Since the reference is held weakly, it can become null or
         * undefined at any time.
         */
        selectedElement: any;
        _selectedElement: any;
        /**
         * Focuses and moves keyboard selection to the first navigable element.
         * This is a no-op if there are no navigable elements.
         *
         * @param {Boolean} homeKey   `true` if this is for the home key.
         * @param {Boolean} skipBack   `true` if the Back button should be skipped.
         */
        focusFirstNavigableElement(homeKey?: boolean, skipBack?: boolean): void;
        /**
         * Focuses and moves keyboard selection to the last navigable element.
         * This is a no-op if there are no navigable elements.
         *
         * @param {Boolean} endKey   `true` if this is for the end key.
         */
        focusLastNavigableElement(endKey?: boolean): void;
        /**
         * Based on going up or down, select the previous or next focusable element.
         *
         * @param {Boolean} isDown   whether we're going down (true) or up (false).
         * @param {Boolean} arrowKey   `true` if this is for the up/down arrow keys.
         *
         * @return {DOMNode} the element we selected.
         */
        moveSelection(isDown: boolean, arrowKey?: boolean): DOMNode;
        /**
         * Allow for navigating subview buttons using the arrow keys and the Enter key.
         * The Up and Down keys can be used to navigate the list up and down and the
         * Enter, Right or Left - depending on the text direction - key can be used to
         * simulate a click on the currently selected button.
         * The Right or Left key - depending on the text direction - can be used to
         * navigate to the previous view, functioning as a shortcut for the view's
         * back button.
         * Thus, in LTR mode:
         *  - The Right key functions the same as the Enter key, simulating a click
         *  - The Left key triggers a navigation back to the previous view.
         *
         * Key navigation is only enabled while the view is active, meaning that this
         * method will return early if it is invoked during a sliding transition.
         *
         * @param {KeyEvent} event
         */
        keyNavigation(event: KeyEvent): void;
        ignoreMouseMove: boolean;
        _doingKeyboardActivation: boolean;
        /**
         * Focus the last selected element in the view, if any.
         *
         * @param byKey {Boolean} whether focus was moved by the user pressing a key.
         *                        Needed to ensure we show focus styles in the right cases.
         */
        focusSelectedElement(byKey?: boolean): void;
        /**
         * Clear all traces of keyboard navigation happening right now.
         */
        clearNavigation(): void;
        /**
         * Node associated to this object.
         */
        node: any;
        /**
         * This promise is resolved when the current set of blockers set by event
         * handlers have all been processed.
         */
        _blockersPromise: Promise<void>;
        readonly document: any;
        readonly window: any;
        _getBoundsWithoutFlushing(element: any): any;
        /**
         * Dispatches a custom event on this element and waits for any blocking
         * promises registered using the "addBlocker" function on the details object.
         * If this function is called again, the event is only dispatched after all
         * the previously registered blockers have returned.
         *
         * The event can be canceled either by resolving any blocking promise to the
         * boolean value "false" or by calling preventDefault on the event. Rejections
         * and exceptions will be reported and will cancel the event.
         *
         * Blocking should be used sporadically because it slows down the interface.
         * Also, non-reentrancy is not strictly guaranteed because a safety timeout of
         * BLOCKERS_TIMEOUT_MS is implemented, after which the event will be canceled.
         * This helps to prevent deadlocks if any of the event handlers does not
         * resolve a blocker promise.
         *
         * @note Since there is no use case for dispatching different asynchronous
         *       events in parallel for the same element, this function will also wait
         *       for previous blockers when the event name is different.
         *
         * @param eventName
         *        Name of the custom event to dispatch.
         *
         * @resolves True if the event was canceled by a handler, false otherwise.
         */
        dispatchAsyncEvent(eventName: any): Promise<boolean>;
    };
    /**
     * Retrieves the instance associated with the given node, constructing a new
     * one if necessary. When the last reference to the node is released, the
     * object instance will be garbage collected as well.
     */
    forNode(node: any): any;
};
