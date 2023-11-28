/**
 * A module that provides methods to filter various kinds of data collected
 * from a tab by the current privacy level as set by the user.
 */
export const PrivacyFilter: Readonly<{
    /**
     * Filters the given (serialized) session storage |data| according to the
     * current privacy level and returns a new object containing only data that
     * we're allowed to store.
     *
     * @param data The session storage data as collected from a tab.
     * @return object
     */
    filterSessionStorageData(data: any): {};
    /**
     * Filters the given (serialized) form |data| according to the current
     * privacy level and returns a new object containing only data that we're
     * allowed to store.
     *
     * @param data The form data as collected from a tab.
     * @return object
     */
    filterFormData(data: any): {
        children: any;
    };
    /**
     * Removes any private windows and tabs from a given browser state object.
     *
     * @param browserState (object)
     *        The browser state for which we remove any private windows and tabs.
     *        The given object will be modified.
     */
    filterPrivateWindowsAndTabs(browserState: any): void;
    /**
     * Removes open private tabs from a given window state object.
     *
     * @param winState (object)
     *        The window state for which we remove any private tabs.
     *        The given object will be modified.
     */
    filterPrivateTabs(winState: any): void;
}>;
