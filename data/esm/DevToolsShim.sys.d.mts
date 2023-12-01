export namespace DevToolsShim {
    let _gDevTools: any;
    let listeners: any[];
    const telemetry: any;
    /**
     * Returns true if DevTools are enabled. This now only depends on the policy.
     * TODO: Merge isEnabled and isDisabledByPolicy.
     */
    function isEnabled(): boolean;
    /**
     * Returns true if the devtools are completely disabled and can not be enabled. All
     * entry points should return without throwing, initDevTools should never be called.
     */
    function isDisabledByPolicy(): boolean;
    /**
     * Check if DevTools have already been initialized.
     *
     * @return {Boolean} true if DevTools are initialized.
     */
    function isInitialized(): boolean;
    /**
     * Returns the array of the existing toolboxes. This method is part of the compatibility
     * layer for webextensions.
     *
     * @return {Array<Toolbox>}
     *   An array of toolboxes.
     */
    function getToolboxes(): Toolbox[];
    /**
     * Register an instance of gDevTools. Should be called by DevTools during startup.
     *
     * @param {DevTools} a devtools instance (from client/framework/devtools)
     */
    function register(gDevTools: any): void;
    /**
     * Unregister the current instance of gDevTools. Should be called by DevTools during
     * shutdown.
     */
    function unregister(): void;
    /**
     * The following methods can be called before DevTools are initialized:
     * - on
     * - off
     *
     * If DevTools are not initialized when calling the method, DevToolsShim will call the
     * appropriate method as soon as a gDevTools instance is registered.
     */
    /**
     * This method is used by browser/components/extensions/ext-devtools.js for the events:
     * - toolbox-ready
     * - toolbox-destroyed
     */
    function on(event: any, listener: any): void;
    /**
     * This method is currently only used by devtools code, but is kept here for consistency
     * with on().
     */
    function off(event: any, listener: any): void;
    /**
     * Called from SessionStore.sys.mjs in mozilla-central when saving the current state.
     *
     * @param {Object} state
     *                 A SessionStore state object that gets modified by reference
     */
    function saveDevToolsSession(state: any): void;
    /**
     * Called from SessionStore.sys.mjs in mozilla-central when restoring a previous session.
     * Will always be called, even if the session does not contain DevTools related items.
     */
    function restoreDevToolsSession(session: any): void;
    function isDevToolsUser(): any;
    /**
     * Called from nsContextMenu.js in mozilla-central when using the Inspect Accessibility
     * context menu item.
     *
     * @param {XULTab} tab
     *        The browser tab on which inspect accessibility was used.
     * @param {ElementIdentifier} domReference
     *        Identifier generated by ContentDOMReference. It is a unique pair of
     *        BrowsingContext ID and a numeric ID.
     * @return {Promise} a promise that resolves when the accessible node is selected in the
     *         accessibility inspector or that resolves immediately if DevTools are not
     *         enabled.
     */
    function inspectA11Y(tab: XULTab, domReference: ElementIdentifier): Promise<any>;
    /**
     * Called from nsContextMenu.js in mozilla-central when using the Inspect Element
     * context menu item.
     *
     * @param {XULTab} tab
     *        The browser tab on which inspect node was used.
     * @param {ElementIdentifier} domReference
     *        Identifier generated by ContentDOMReference. It is a unique pair of
     *        BrowsingContext ID and a numeric ID.
     * @return {Promise} a promise that resolves when the node is selected in the inspector
     *         markup view or that resolves immediately if DevTools are not enabled.
     */
    function inspectNode(tab: XULTab, domReference: ElementIdentifier): Promise<any>;
    function _onDevToolsRegistered(): void;
    /**
     * Initialize DevTools via DevToolsStartup if needed. This method throws if DevTools are
     * not enabled.
     *
     * @param {String} reason
     *        optional, if provided should be a valid entry point for DEVTOOLS_ENTRY_POINT
     *        in toolkit/components/telemetry/Histograms.json
     */
    function initDevTools(reason: string): void;
}
