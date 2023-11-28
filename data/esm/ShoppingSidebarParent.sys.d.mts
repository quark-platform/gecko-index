export class ShoppingSidebarParent {
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
