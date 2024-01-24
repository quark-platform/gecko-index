export class Prefs {
    /**
     * Prefs - A wrapper around Preferences that always sets the branch to
     *         ACTIVITY_STREAM_PREF_BRANCH
     */
    constructor(branch?: string);
    _branchObservers: Map<any, any>;
    ignoreBranch(listener: any): void;
    observeBranch(listener: any): void;
}
export class DefaultPrefs {
    /**
     * DefaultPrefs - A helper for setting and resetting default prefs for the add-on
     *
     * @param  {Map} config A Map with {string} key of the pref name and {object}
     *                      value with the following pref properties:
     *         {string} .title (optional) A description of the pref
     *         {bool|string|number} .value The default value for the pref
     * @param  {string} branch (optional) The pref branch (defaults to ACTIVITY_STREAM_PREF_BRANCH)
     */
    constructor(config: Map<any, any>, branch?: string);
    _config: Map<any, any>;
    /**
     * init - Set default prefs for all prefs in the config
     */
    init(): void;
}
