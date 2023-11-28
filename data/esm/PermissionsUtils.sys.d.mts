export namespace PermissionsUtils {
    /**
     * Import permissions from perferences to the Permissions Manager. After being
     * imported, all processed permissions will be set to an empty string.
     * Perferences are only processed once during the application's
     * lifetime - it's safe to call this multiple times without worrying about
     * doing unnecessary work, as the preferences branch will only be processed
     * the first time.
     *
     * @param aPrefBranch  Preferences branch to import from. The preferences
     *                     under this branch can specify whitelist (ALLOW_ACTION)
     *                     or blacklist (DENY_ACTION) additions using perference
     *                     names of the form:
     *                     * <BRANCH>.whitelist.add.<ID>
     *                     * <BRANCH>.blacklist.add.<ID>
     *                     Where <ID> can be any valid preference name.
     *                     The value is expected to be a comma separated list of
     *                     host named. eg:
     *                     * something.example.com
     *                     * foo.exmaple.com,bar.example.com
     *
     * @param aPermission Permission name to be passsed to the Permissions
     *                    Manager.
     */
    function importFromPrefs(aPrefBranch: any, aPermission: any): void;
}
export namespace PermissionsTestUtils {
    function clearImportedPrefBranches(): void;
}
