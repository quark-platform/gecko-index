export const BuiltInThemes: _BuiltInThemes;
declare class _BuiltInThemes {
    /**
     * The list of themes to be installed. This is exposed on the class so tests
     * can set custom config files.
     */
    builtInThemeMap: any;
    /**
     * @param {string} id An addon's id string.
     * @returns {string}
     *   If `id` refers to a built-in theme, returns a path pointing to the
     *   theme's preview image. Null otherwise.
     */
    previewForBuiltInThemeId(id: string): string;
    /**
     * If the active theme is built-in, this function calls
     * AddonManager.maybeInstallBuiltinAddon for that theme.
     */
    maybeInstallActiveBuiltInTheme(): void;
    /**
     * Ensures that all built-in themes are installed and expired themes are
     * uninstalled.
     */
    ensureBuiltInThemes(): Promise<void>;
    /**
     * This looks up the id in a Map rather than accessing a property on
     * the addon itself. That makes calls to this function O(m) where m is the
     * total number of built-in themes offered now or in the past. Since we
     * are using a Map, calls are O(1) in the average case.
     *
     * @param {string} id
     *   A theme's ID.
     * @returns {boolean}
     *   Returns true if the theme is expired. False otherwise.
     */
    themeIsExpired(id: string): boolean;
    /**
     * @param {string} id
     *   The theme's id.
     * @returns {boolean}
     *   True if the theme with id `id` is both expired and retained. That is,
     *   the user has the ability to use it after its expiry date.
     */
    isRetainedExpiredTheme(id: string): boolean;
    /**
     * @param {string} id
     *   The theme's id.
     * @returns {boolean}
     *   True if the theme with id `id` is from the currently active theme.
     */
    isActiveTheme(id: string): boolean;
    /**
     * Uninstalls themes after they expire. If the expired theme is active, then
     * it is not uninstalled. Instead, it is saved so that the user can use it
     * indefinitely.
     */
    _uninstallExpiredThemes(): Promise<void>;
    /**
     * Set a pref to ensure that the user can continue to use a specified theme
     * past its expiry date.
     *
     * @param {string} id
     *   The ID of the theme to retain.
     */
    _retainLimitedTimeTheme(id: string): void;
    /**
     * Removes from the retained expired theme list colorways themes that have been
     * migrated from the one installed in the built-in XPIProvider location
     * to an AMO hosted xpi installed in the user profile XPIProvider location.
     *
     * @param {string} id
     *   The ID of the theme to remove from the retained themes list.
     */
    unretainMigratedColorwayTheme(id: string): void;
    /**
     * Colorway collections are usually divided into and presented as "groups".
     * A group either contains closely related colorways, e.g. stemming from the
     * same base color but with different intensities (soft, balanced, and bold),
     * or if the current collection doesn't have intensities, each colorway is
     * their own group. Group name localization is optional.
     *
     * @param {string} colorwayId
     *   The ID of the colorway add-on.
     * @returns {string}
     *   Localized colorway group name. null if there's no such name, in which
     *   case the caller should fall back on getting a name from the add-on API.
     */
    getLocalizedColorwayGroupName(colorwayId: string): string;
    /**
     * @param {string} colorwayId
     *   The ID of the colorway add-on.
     * @returns {string}
     *   L10nId for intensity value of the colorway with the provided id, null if
     *   there's none.
     */
    getColorwayIntensityL10nId(colorwayId: string): string;
    /**
     * @param {string} colorwayId
     *   The ID of the colorway add-on.
     * @returns {string}
     *   Localized description of the colorway with the provided id, null if
     *   there's none.
     */
    getLocalizedColorwayDescription(colorwayId: string): string;
    _getColorwayString(colorwayId: any, stringType: any): any;
}
export {};
