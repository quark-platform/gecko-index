export namespace PrefUtils {
    /**
     * Get a preference of any type from the named branch.
     * @param {string} pref
     * @param {object} [options]
     * @param {"default"|"user"} [options.branchName="user"] One of "default" or "user"
     * @param {string|boolean|integer|null} [options.defaultValue]
     *   The value to return if the preference does not exist. Defaults to null.
     */
    export function getPref(pref: string, { branch, defaultValue }?: {
        branchName?: "default" | "user";
        defaultValue?: any;
    }): any;
    /**
     * Set a preference on the named branch
     * @param {string} pref
     * @param {string|boolean|integer|null} value The value to set.
     * @param {object} options
     * @param {"user"|"default"} options.branchName The branch to make the change on.
     */
    export function setPref(pref: string, value: any, { branch }?: {
        branchName: "default" | "user";
    }): void;
    /**
     * Remove a preference from a branch. Note that default branch preferences
     * cannot effectively be cleared. If "default" is passed for a branch, an
     * error will be logged and nothing else will happen.
     *
     * @param {string} pref
     * @param {object} options
     * @param {"user"|"default"} options.branchName The branch to clear
     */
    export function clearPref(pref: string, { branch }?: {
        branchName: "default" | "user";
    }): void;
    export { UnexpectedPreferenceType };
    export { UnexpectedPreferenceBranch };
}
declare class UnexpectedPreferenceType extends Error {
}
declare class UnexpectedPreferenceBranch extends Error {
}
export {};
