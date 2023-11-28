/**
 * Preference class constructor
 *
 * Initializes instance properties.
 */
export function Preference(props: any): void;
export class Preference {
    /**
     * Preference class constructor
     *
     * Initializes instance properties.
     */
    constructor(props: any);
    name: any;
    value: any;
    /**
     * Modify
     *
     * Sets the value of the preference this.name to this.value.
     * Throws on error.
     *
     * @return nothing
     */
    Modify(): void;
    /**
     * Find
     *
     * Verifies that the preference this.name has the value
     * this.value. Throws on error, or if the pref's type or value
     * doesn't match.
     *
     * @return nothing
     */
    Find(): void;
}
 any | undefined): (string | boolean | number);
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
    set(pref: string, value: (string | boolean | number)): any;
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
