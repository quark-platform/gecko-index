/** Installs addons by path and uninstalls by ID. */
export class Addon {
    /**
     * Install a Firefox addon.
     *
     * If the addon is restartless, it can be used right away.  Otherwise a
     * restart is required.
     *
     * Temporary addons will automatically be uninstalled on shutdown and
     * do not need to be signed, though they must be restartless.
     *
     * @param {string} path
     *     Full path to the extension package archive.
     * @param {boolean=} temporary
     *     True to install the addon temporarily, false (default) otherwise.
     *
     * @returns {Promise.<string>}
     *     Addon ID.
     *
     * @throws {UnknownError}
     *     If there is a problem installing the addon.
     */
    static install(path: string, temporary?: boolean | undefined): Promise<string>;
    /**
     * Uninstall a Firefox addon.
     *
     * If the addon is restartless it will be uninstalled right away.
     * Otherwise, Firefox must be restarted for the change to take effect.
     *
     * @param {string} id
     *     ID of the addon to uninstall.
     *
     * @returns {Promise}
     *
     * @throws {UnknownError}
     *     If there is a problem uninstalling the addon.
     */
    static uninstall(id: string): Promise<any>;
}
