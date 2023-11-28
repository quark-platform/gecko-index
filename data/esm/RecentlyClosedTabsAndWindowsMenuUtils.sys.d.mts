export namespace RecentlyClosedTabsAndWindowsMenuUtils {
    /**
     * Builds up a document fragment of UI items for the recently closed tabs.
     * @param   aWindow
     *          The window that the tabs were closed in.
     * @param   aTagName
     *          The tag name that will be used when creating the UI items.
     * @param   aPrefixRestoreAll (defaults to false)
     *          Whether the 'restore all tabs' item is suffixed or prefixed to the list.
     *          If suffixed (the default) a separator will be inserted before it.
     * @returns A document fragment with UI items for each recently closed tab.
     */
    function getTabsFragment(aWindow: any, aTagName: any, aPrefixRestoreAll?: boolean): any;
    /**
     * Builds up a document fragment of UI items for the recently closed windows.
     * @param   aWindow
     *          A window that can be used to create the elements and document fragment.
     * @param   aTagName
     *          The tag name that will be used when creating the UI items.
     * @param   aPrefixRestoreAll (defaults to false)
     *          Whether the 'restore all windows' item is suffixed or prefixed to the list.
     *          If suffixed (the default) a separator will be inserted before it.
     * @returns A document fragment with UI items for each recently closed window.
     */
    function getWindowsFragment(aWindow: any, aTagName: any, aPrefixRestoreAll?: boolean): any;
    /**
     * Handle a command event to re-open all closed tabs
     * @param aEvent
     *        The command event when the user clicks the restore all menu item
     */
    function onRestoreAllTabsCommand(aEvent: any): void;
    /**
     * Handle a command event to re-open all closed windows
     * @param aEvent
     *        The command event when the user clicks the restore all menu item
     */
    function onRestoreAllWindowsCommand(aEvent: any): void;
    /**
     * Re-open a closed tab and put it to the end of the tab strip.
     * Used for a middle click.
     * @param aEvent
     *        The event when the user clicks the menu item
     */
    function _undoCloseMiddleClick(aEvent: any): void;
}
