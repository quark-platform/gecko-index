export const AddonUtils: AddonUtilsInternal;
declare function AddonUtilsInternal(): void;
declare class AddonUtilsInternal {
    _log: any;
    /**
     * Obtain an AddonInstall object from an AddonSearchResult instance.
     *
     * The returned promise will be an AddonInstall on success or null (failure or
     * addon not found)
     *
     * @param addon
     *        AddonSearchResult to obtain install from.
     */
    getInstallFromSearchResult(addon: any): any;
    /**
     * Installs an add-on from an AddonSearchResult instance.
     *
     * The options argument defines extra options to control the install.
     * Recognized keys in this map are:
     *
     *   syncGUID - Sync GUID to use for the new add-on.
     *   enabled - Boolean indicating whether the add-on should be enabled upon
     *             install.
     *
     * The result object has the following keys:
     *
     *   id      ID of add-on that was installed.
     *   install AddonInstall that was installed.
     *   addon   Addon that was installed.
     *
     * @param addon
     *        AddonSearchResult to install add-on from.
     * @param options
     *        Object with additional metadata describing how to install add-on.
     */
    installAddonFromSearchResult(addon: any, options: any): Promise<any>;
    /**
     * Uninstalls the addon instance.
     *
     * @param addon
     *        Addon instance to uninstall.
     */
    uninstallAddon(addon: any): Promise<any>;
    /**
     * Installs multiple add-ons specified by metadata.
     *
     * The first argument is an array of objects. Each object must have the
     * following keys:
     *
     *   id - public ID of the add-on to install.
     *   syncGUID - syncGUID for new add-on.
     *   enabled - boolean indicating whether the add-on should be enabled.
     *   requireSecureURI - Boolean indicating whether to require a secure
     *     URI when installing from a remote location. This defaults to
     *     true.
     *
     * The callback will be called when activity on all add-ons is complete. The
     * callback receives 2 arguments, error and result.
     *
     * If error is truthy, it contains a string describing the overall error.
     *
     * The 2nd argument to the callback is always an object with details on the
     * overall execution state. It contains the following keys:
     *
     *   installedIDs  Array of add-on IDs that were installed.
     *   installs      Array of AddonInstall instances that were installed.
     *   addons        Array of Addon instances that were installed.
     *   errors        Array of errors encountered. Only has elements if error is
     *                 truthy.
     *
     * @param installs
     *        Array of objects describing add-ons to install.
     */
    installAddons(installs: any): Promise<{
        installedIDs: any[];
        installs: any[];
        addons: any[];
        skipped: any[];
        errors: any[];
    }>;
    /**
     * Returns true if we are able to install the specified addon, false
     * otherwise. It is expected that this will log the reason if it returns
     * false.
     *
     * @param addon
     *        (Addon) Add-on instance to check.
     * @param options
     *        (object) The options specified for this addon. See installAddons()
     *        for the valid elements.
     */
    canInstallAddon(addon: any, options: any): boolean;
    /**
     * Update the user disabled flag for an add-on.
     *
     * If the new flag matches the existing or if the add-on
     * isn't currently active, the function will return immediately.
     *
     * @param addon
     *        (Addon) Add-on instance to operate on.
     * @param value
     *        (bool) New value for add-on's userDisabled property.
     */
    updateUserDisabled(addon: any, value: any): void;
}
export {};
