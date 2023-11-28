/**
 * @typedef {Object} BrowserToolboxLauncherArgs
 * @property {function} onRun - A function called when the process starts running.
 * @property {boolean} overwritePreferences - Set to force overwriting the toolbox
 *                     profile's preferences with the current set of preferences.
 * @property {boolean} forceMultiprocess - Set to force the Browser Toolbox to be in
 *                     multiprocess mode.
 */
export class BrowserToolboxLauncher {
    /**
     * Initializes and starts a chrome toolbox process if the appropriated prefs are enabled
     *
     * @param {BrowserToolboxLauncherArgs} args
     * @return {BrowserToolboxLauncher|null} The created instance, or null if the required prefs
     *         are not set.
     */
    static init(args: BrowserToolboxLauncherArgs): BrowserToolboxLauncher | null;
    /**
     * Figure out if there are any open Browser Toolboxes that'll need to be restored.
     * @return {boolean}
     */
    static getBrowserToolboxSessionState(): boolean;
    /**
     * Constructor for creating a process that will hold a chrome toolbox.
     *
     * @param {...BrowserToolboxLauncherArgs} args
     */
    constructor({ forceMultiprocess, onRun, overwritePreferences }?: BrowserToolboxLauncherArgs[]);
    /**
     * Closes the remote debugging server and kills the toolbox process.
     */
    close(): Promise<void>;
    #private;
}
export type BrowserToolboxLauncherArgs = {
    /**
     * - A function called when the process starts running.
     */
    onRun: Function;
    /**
     * - Set to force overwriting the toolbox
     * profile's preferences with the current set of preferences.
     */
    overwritePreferences: boolean;
    /**
     * - Set to force the Browser Toolbox to be in
     * multiprocess mode.
     */
    forceMultiprocess: boolean;
};
