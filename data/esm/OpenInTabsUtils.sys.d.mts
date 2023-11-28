export namespace OpenInTabsUtils {
    /**
     * Gives the user a chance to cancel loading lots of tabs at once.
     */
    function confirmOpenInTabs(numTabsToOpen: any, aWindow: any): boolean;
    function promiseConfirmOpenInTabs(numTabsToOpen: any, aWindow: any): Promise<any>;
}
