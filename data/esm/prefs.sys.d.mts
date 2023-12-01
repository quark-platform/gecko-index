export class Branch {
    /**
     * @param {string=} branch
     *     Preference subtree.  Uses root tree given `null`.
     */
    constructor(branch?: string | undefined);
    _branch: nsIPrefBranchType;
    /**
     * Gets value of `pref` in its known type.
     *
     * @param {string} pref
     *     Preference name.
     * @param {*=} fallback
     *     Fallback value to return if `pref` does not exist.
     *
     * @returns {(string|boolean|number)}
     *     Value of `pref`, or the `fallback` value if `pref` does
     *     not exist.
     *
     * @throws {TypeError}
     *     If `pref` is not a recognised preference and no `fallback`
     *     value has been provided.
     */
    get(pref: string, fallback?: any | undefined): (string | boolean | number);
    /**
     * Sets the value of `pref`.
     *
     * @param {string} pref
     *     Preference name.
     * @param {(string|boolean|number)} value
     *     `pref`'s new value.
     *
     * @throws {TypeError}
     *     If `value` is not the correct type for `pref`.
     */
    set(pref: string, value: (string | boolean | number)): void;
}
/** Reads a JSON serialised blob stored in the environment. */
export class EnvironmentPrefs {
    /**
     * Reads the environment variable `key` and tries to parse it as
     * JSON Object, then provides an iterator over its keys and values.
     *
     * If the environment variable is not set, this function returns empty.
     *
     * @param {string} key
     *     Environment variable.
     *
     * @returns {Iterable.<string, (string|boolean|number)>}
     */
    static from(key: string): Iterable<string, (string | boolean | number)>;
}
export const MarionettePrefs: MarionetteBranch;
/**
 * Provides shortcuts for lazily getting and setting typed Marionette
 * preferences.
 *
 * Some of Marionette's preferences are stored using primitive values
 * that internally are represented by complex types.
 *
 * Because we cannot trust the input of many of these preferences,
 * this class provides abstraction that lets us safely deal with
 * potentially malformed input.
 *
 * A further complication is that we cannot rely on `Preferences.sys.mjs`
 * in Marionette.  See https://bugzilla.mozilla.org/show_bug.cgi?id=1357517
 * for further details.
 */
declare class MarionetteBranch extends Branch {
    /**
     * The `marionette.debugging.clicktostart` preference delays
     * server startup until a modal dialogue has been clicked to allow
     * time for user to set breakpoints in the Browser Toolbox.
     *
     * @returns {boolean}
     */
    get clickToStart(): boolean;
    set port(newPort: number);
    /**
     * The `marionette.port` preference, detailing which port
     * the TCP server should listen on.
     *
     * @returns {number}
     */
    get port(): number;
    /**
     * Gets the `marionette.setpermission.enabled` preference, should
     * only be used for testdriver's set_permission API.
     *
     * @returns {boolean}
     */
    get setPermissionEnabled(): boolean;
}
export {};
