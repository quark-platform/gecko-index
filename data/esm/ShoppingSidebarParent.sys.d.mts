export class ShoppingSidebarParent extends JSWindowActorParent {
    static SHOPPING_ACTIVE_PREF: string;
    static SHOPPING_OPTED_IN_PREF: string;
    /**
     * Called when the user clicks the URL bar button.
     */
    static urlbarButtonClick(event: any): void;
    /**
     * Toggles opening or closing all Shopping sidebars.
     * Sets the active pref value for all windows to respond to.
     * params:
     *
     *  @param {string?} source
     *  Optional value, describes where the call came from.
     */
    static toggleAllSidebars(source: string | null): void;
    updateProductURL(uri: any, flags: any): void;
    receiveMessage(message: any): Promise<any>;
}
export const ShoppingSidebarManager: ShoppingSidebarManagerClass;
declare class ShoppingSidebarManagerClass {
    ensureInitialized(): void;
    updateSidebarVisibility(): void;
    enabled: any;
    updateSidebarVisibilityForWindow(window: any): void;
    _maybeToggleSidebar(aBrowser: any, aLocationURI: any, aFlags: any): void;
    _maybeToggleButton(gBrowser: any): void;
    _updateBCActiveness(aBrowser: any): void;
    _setShoppingButtonState(aBrowser: any): void;
    /**
     * Called by TabsProgressListener whenever any browser navigates from one
     * URL to another.
     * Note that this includes hash changes / pushState navigations, because
     * those can be significant for us.
     */
    onLocationChange(aBrowser: any, aLocationURI: any, aFlags: any): void;
    handleEvent(event: any): void;
    #private;
}
export {};
