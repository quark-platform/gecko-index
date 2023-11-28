export namespace ShortcutUtils {
    let IS_VALID: string;
    let INVALID_KEY: string;
    let INVALID_MODIFIER: string;
    let INVALID_COMBINATION: string;
    let DUPLICATE_MODIFIER: string;
    let MODIFIER_REQUIRED: string;
    let CLOSE_TAB: string;
    let CYCLE_TABS: string;
    let TOGGLE_CARET_BROWSING: string;
    let MOVE_TAB_BACKWARD: string;
    let MOVE_TAB_FORWARD: string;
    let NEXT_TAB: string;
    let PREVIOUS_TAB: string;
    /**
     * Prettifies the modifier keys for an element.
     *
     * @param Node aElemKey
     *        The key element to get the modifiers from.
     * @return string
     *         A prettified and properly separated modifier keys string.
     */
    function prettifyShortcut(aElemKey: any): string;
    function metaKeyIsCommandKey(): boolean;
    function getModifierString(elemMod: any): string;
    function getKeyString(keyCode: any, keyAttribute: any): any;
    function getKeyAttribute(chromeKey: any): any[];
    /**
     * Determines the corresponding XUL keycode from the given chrome key.
     *
     * For example:
     *
     *    input     |  output
     *    ---------------------------------------
     *    "PageUp"  |  "VK_PAGE_UP"
     *    "Delete"  |  "VK_DELETE"
     *
     * @param {string} chromeKey The chrome key (e.g. "PageUp", "Space", ...)
     * @returns {string} The constructed value for the Key's 'keycode' attribute.
     */
    function getKeycodeAttribute(chromeKey: string): string;
    function findShortcut(aElemCommand: any): any;
    namespace chromeModifierKeyMap {
        let Alt: string;
        let Command: string;
        let Ctrl: string;
        let MacCtrl: string;
        let Shift: string;
    }
    /**
     * Determines the corresponding XUL modifiers from the chrome modifiers.
     *
     * For example:
     *
     *    input             |   output
     *    ---------------------------------------
     *    ["Ctrl", "Shift"] |   "accel,shift"
     *    ["MacCtrl"]       |   "control"
     *
     * @param {Array} chromeModifiers The array of chrome modifiers.
     * @returns {string} The constructed value for the Key's 'modifiers' attribute.
     */
    function getModifiersAttribute(chromeModifiers: any[]): string;
    /**
     * Validate if a shortcut string is valid and return an error code if it
     * isn't valid.
     *
     * For example:
     *
     *    input            |   output
     *    ---------------------------------------
     *    "Ctrl+Shift+A"   |   IS_VALID
     *    "Shift+F"        |   MODIFIER_REQUIRED
     *    "Command+>"      |   INVALID_KEY
     *
     * @param {string} string The shortcut string.
     * @returns {string} The code for the validation result.
     */
    function validate(string: string): string;
    /**
     * Attempt to find a key for a given shortcut string, such as
     * "Ctrl+Shift+A" and determine if it is a system shortcut.
     *
     * @param {Object} win The window to look for key elements in.
     * @param {string} value The shortcut string.
     * @returns {boolean} Whether a system shortcut was found or not.
     */
    function isSystem(win: any, value: string): boolean;
    /**
     * Determine what action a KeyboardEvent should perform, if any.
     *
     * @param {KeyboardEvent} event The event to check for a related system action.
     * @returns {string} A string identifying the action, or null if no action is found.
     */
    function getSystemActionForEvent(event: KeyboardEvent, { rtl }?: {
        rtl: any;
    }): string;
}
