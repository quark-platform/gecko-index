export namespace ExtensionSettingsStore {
    export { SETTING_USER_SET };
    /**
     * Loads the JSON file for the SettingsStore into memory.
     * The promise this returns must be resolved before asking the SettingsStore
     * to perform any other operations.
     *
     * @returns {Promise}
     *          A promise that resolves when the Store is ready to be accessed.
     */
    export function initialize(): Promise<any>;
    /**
     * Adds a setting to the store, returning the new setting if it changes.
     *
     * @param {string} id
     *        The id of the extension for which a setting is being added.
     * @param {string} type
     *        The type of setting to be stored.
     * @param {string} key
     *        A string that uniquely identifies the setting.
     * @param {string} value
     *        The value to be stored in the setting.
     * @param {Function} initialValueCallback
     *        A function to be called to determine the initial value for the
     *        setting. This will be passed the value in the callbackArgument
     *        argument. If omitted the initial value will be undefined.
     * @param {any} callbackArgument
     *        The value to be passed into the initialValueCallback. It defaults to
     *        the value of the key argument.
     * @param {Function} settingDataUpdate
     *        A function to be called to modify the initial value if necessary.
     *
     * @returns {object | null} Either an object with properties for key and
     *                          value, which corresponds to the item that was
     *                          just added, or null if the item that was just
     *                          added does not need to be set because it is not
     *                          selected or at the top of the precedence list.
     */
    export function addSetting(id: string, type: string, key: string, value: string, initialValueCallback?: Function, callbackArgument?: any, settingDataUpdate?: Function): any;
    /**
     * Removes a setting from the store, returning the new setting if it changes.
     *
     * @param {string} id
     *        The id of the extension for which a setting is being removed.
     * @param {string} type
     *        The type of setting to be removed.
     * @param {string} key
     *        A string that uniquely identifies the setting.
     *
     * @returns {object | null}
     *          Either an object with properties for key and value if the setting changes, or null.
     */
    export function removeSetting(id: string, type: string, key: string): any;
    /**
     * Enables a setting in the store, returning the new setting if it changes.
     *
     * @param {string} id
     *        The id of the extension for which a setting is being enabled.
     * @param {string} type
     *        The type of setting to be enabled.
     * @param {string} key
     *        A string that uniquely identifies the setting.
     *
     * @returns {object | null}
     *          Either an object with properties for key and value if the setting changes, or null.
     */
    export function enable(id: string, type: string, key: string): any;
    /**
     * Disables a setting in the store, returning the new setting if it changes.
     *
     * @param {string} id
     *        The id of the extension for which a setting is being disabled.
     * @param {string} type
     *        The type of setting to be disabled.
     * @param {string} key
     *        A string that uniquely identifies the setting.
     *
     * @returns {object | null}
     *          Either an object with properties for key and value if the setting changes, or null.
     */
    export function disable(id: string, type: string, key: string): any;
    /**
     * Specifically select an extension, or no extension, that will be in control of
     * this setting.
     *
     * To select a specific extension that controls this setting, pass the extension id.
     *
     * To select as user-set  pass SETTING_USER_SET as the id.  In this case, no extension
     * will have control of the setting.
     *
     * Once a specific selection is made, precedence order will not be used again unless the selected
     * extension is disabled, removed, or a new extension takes control of the setting.
     *
     * @param {string | null} id
     *        The id of the extension being selected or SETTING_USER_SET (null).
     * @param {string} type
     *        The type of setting to be selected.
     * @param {string} key
     *        A string that uniquely identifies the setting.
     *
     * @returns {object | null}
     *          Either an object with properties for key and value if the setting changes, or null.
     */
    export function select(id: string, type: string, key: string): any;
    /**
     * Retrieves all settings from the store for a given extension.
     *
     * @param {string} id
     *        The id of the extension for which a settings are being retrieved.
     * @param {string} type
     *        The type of setting to be returned.
     *
     * @returns {Array}
     *          A list of settings which have been stored for the extension.
     */
    export function getAllForExtension(id: string, type: string): any[];
    /**
     * Retrieves a setting from the store, either for a specific extension,
     * or current top precedent setting for the key.
     *
     * @param {string} type The type of setting to be returned.
     * @param {string} key A string that uniquely identifies the setting.
     * @param {string} id
     *        The id of the extension for which the setting is being retrieved.
     *        Defaults to undefined, in which case the top setting is returned.
     *
     * @returns {object} An object with properties for key, value and id.
     */
    export function getSetting(type: string, key: string, id: string): any;
    /**
     * Retrieves an array of objects representing extensions attempting to control the specified setting
     * or an empty array if no settings have been stored for that key.
     *
     * @param {string} type
     *        The type of setting to be retrieved.
     * @param {string} key
     *        A string that uniquely identifies the setting.
     *
     * @returns {Array} an array of objects with properties for key, value, id, and enabled
     */
    export function getAllSettings(type: string, key: string): any[];
    /**
     * Returns whether an extension currently has a stored setting for a given
     * key.
     *
     * @param {string} id The id of the extension which is being checked.
     * @param {string} type The type of setting to be checked.
     * @param {string} key A string that uniquely identifies the setting.
     *
     * @returns {boolean} Whether the extension currently has a stored setting.
     */
    export function hasSetting(id: string, type: string, key: string): boolean;
    /**
     * Return the levelOfControl for a key / extension combo.
     * levelOfControl is required by Google's ChromeSetting prototype which
     * in turn is used by the privacy API among others.
     *
     * It informs a caller of the state of a setting with respect to the current
     * extension, and can be one of the following values:
     *
     * controlled_by_other_extensions: controlled by extensions with higher precedence
     * controllable_by_this_extension: can be controlled by this extension
     * controlled_by_this_extension: controlled by this extension
     *
     * @param {string} id
     *        The id of the extension for which levelOfControl is being requested.
     * @param {string} type
     *        The type of setting to be returned. For example `pref`.
     * @param {string} key
     *        A string that uniquely identifies the setting, for example, a
     *        preference name.
     *
     * @returns {string}
     *          The level of control of the extension over the key.
     */
    export function getLevelOfControl(id: string, type: string, key: string): string;
    /**
     * Test-only method to force reloading of the JSON file.
     *
     * Note that this method simply clears the local variable that stores the
     * file, so the next time the file is accessed it will be reloaded.
     *
     * @param   {boolean} saveChanges
     *          When false, discard any changes that have been made since the last
     *          time the store was saved.
     * @returns {Promise}
     *          A promise that resolves once the settings store has been cleared.
     */
    export function _reloadFile(saveChanges?: boolean): Promise<any>;
}
declare const SETTING_USER_SET: any;
export {};
