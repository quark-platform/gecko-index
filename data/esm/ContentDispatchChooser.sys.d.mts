export class nsContentDispatchChooser {
    /**
     * Prompt the user to open an external application.
     * If the triggering principal doesn't have permission to open apps for the
     * protocol of aURI, we show a permission prompt first.
     * If the caller has permission and a preferred handler is set, we skip the
     * dialogs and directly open the handler.
     * @param {nsIHandlerInfo} aHandler - Info about protocol and handlers.
     * @param {nsIURI} aURI - URI to be handled.
     * @param {nsIPrincipal} [aPrincipal] - Principal which triggered the load.
     * @param {BrowsingContext} [aBrowsingContext] - Context of the load.
     * @param {bool} [aTriggeredExternally] - Whether the load came from outside
     * this application.
     */
    handleURI(aHandler: nsIHandlerInfo, aURI: nsIURI, aPrincipal?: nsIPrincipal, aBrowsingContext?: BrowsingContext, aTriggeredExternally?: bool): Promise<void>;
    /**
     * Get the name of the application set to handle the the protocol.
     * @param {nsIHandlerInfo} aHandler - Info about protocol and handlers.
     * @returns {string|null} - Human readable handler name or null if the user
     * is expected to set a handler.
     */
    _getHandlerName(aHandler: nsIHandlerInfo): string | null;
    /**
     * Show permission or/and app chooser prompt.
     * @param {nsIHandlerInfo} aHandler - Info about protocol and handlers.
     * @param {nsIPrincipal} aPrincipal - Principal which triggered the load.
     * @param {boolean} aHasPermission - Whether the caller has permission to
     * open the protocol.
     * @param {BrowsingContext} [aBrowsingContext] - Context associated with the
     * protocol navigation.
     */
    _prompt(aHandler: nsIHandlerInfo, aPrincipal: nsIPrincipal, aHasPermission: boolean, aBrowsingContext?: BrowsingContext, aURI: any): Promise<boolean>;
    /**
     * Test if a given principal has the open-protocol-handler permission for a
     * specific protocol.
     * @param {string} scheme - Scheme of the protocol.
     * @param {nsIPrincipal} aPrincipal - Principal to test for permission.
     * @returns {boolean} - true if permission is set, false otherwise.
     */
    _hasProtocolHandlerPermission(scheme: string, aPrincipal: nsIPrincipal): boolean;
    /**
     * Get open-protocol-handler permission key for a protocol.
     * @param {string} aProtocolScheme - Scheme of the protocol.
     * @returns {string} - Permission key.
     */
    _getSkipProtoDialogPermissionKey(aProtocolScheme: string): string;
    /**
     * Opens a dialog as a SubDialog on tab level.
     * If we don't have a BrowsingContext we will fallback to a standalone window.
     * @param {string} aDialogURL - URL of the dialog to open.
     * @param {Object} aDialogArgs - Arguments passed to the dialog.
     * @param {BrowsingContext} [aBrowsingContext] - BrowsingContext associated
     * with the tab the dialog is associated with.
     */
    _openDialog(aDialogURL: string, aDialogArgs: any, aBrowsingContext?: BrowsingContext): Promise<any>;
    /**
     * Update the open-protocol-handler permission for the site which triggered
     * the dialog. Sites with this permission may skip this dialog.
     * @param {nsIPrincipal} aPrincipal - subject to update the permission for.
     * @param {string} aScheme - Scheme of protocol to allow.
     * @param {boolean} aAllow - Whether to set / unset the permission.
     */
    _updatePermission(aPrincipal: nsIPrincipal, aScheme: string, aAllow: boolean): void;
    /**
     * Determine if we can use a principal to store permissions.
     * @param {nsIPrincipal} aPrincipal - Principal to test.
     * @returns {boolean} - true if we can store permissions, false otherwise.
     */
    _isSupportedPrincipal(aPrincipal: nsIPrincipal): boolean;
    classID: any;
    QueryInterface: any;
}
