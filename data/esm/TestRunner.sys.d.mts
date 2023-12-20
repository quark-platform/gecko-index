export namespace TestRunner {
    let combos: any;
    let completedCombos: number;
    let currentComboIndex: number;
    let _lastCombo: any;
    let _libDir: any;
    let croppingPadding: number;
    let mochitestScope: any;
    function init(extensionPath: any): void;
    /**
     * Initialize the mochitest interface. This allows TestRunner to integrate
     * with mochitest functions like is(...) and ok(...). This must be called
     * prior to invoking any of the TestRunner functions. Note that this should
     * be properly setup in head.js, so you probably don't need to call it.
     */
    function initTest(mochitestScope: any): void;
    function setupOS(): void;
    function disableNotificationCenter(): void;
    /**
     * Load specified sets, execute all combinations of them, and capture screenshots.
     */
    function start(setNames: any, jobName?: any): Promise<void>;
    /**
     * Helper function for loadSets. This filters out the restricted configs from setName.
     * This was made a helper function to facilitate xpcshell unit testing.
     *
     * @param {string} setName - set name to be filtered e.g. "Toolbars[onlyNavBar,allToolbars]"
     * @returns {object} Returns an object with two values: the filtered set name and a set of
     *                  restricted configs.
     */
    function filterRestrictions(setName: string): any;
    /**
     * Load sets of configurations from JSMs.
     *
     * @param {string[]} setNames - array of set names (e.g. ["Tabs", "WindowSize"].
     * @returns {object[]} Array of sets containing `name` and `configurations` properties.
     */
    function loadSets(setNames: string[]): any[];
    function cleanup(): void;
    /**
     * Calculate the bounding box based on CSS selector from config for cropping
     *
     * @param {string[]} selectors - array of CSS selectors for relevant DOM element
     * @returns {Rect}
     *   A Geometry.sys.mjs Rect holding relevant x, y, width, height with padding
     */
    function _findBoundingBox(selectors: string[], windowType: any): Rect;
    function _do_skip(reason: any, combo: any, config: any, func: any): void;
    function _performCombo(combo: any): Promise<void>;
    function _onConfigurationReady(combo: any, bounds: any, rects: any): Promise<void>;
    function _comboName(combo: any): any;
    function _cropImage(window: any, srcPath: any, bounds: any, rects: any, targetPath: any): Promise<any>;
    /**
     * Finds the index of the first comma that is not enclosed within square brackets.
     *
     * @param {string} envVar - the string that needs to be searched
     * @returns {number} index of valid comma or -1 if not found.
     */
    function findComma(envVar: string): number;
    /**
     * Splits the environment variable around commas not enclosed in brackets.
     *
     * @param {string} envVar - The environment variable
     * @returns {string[]} Array of strings containing the configurations
     * e.g. ["Toolbars[onlyNavBar,allToolbars]","DevTools[jsdebugger,webconsole]","Tabs"]
     */
    function splitEnv(envVar: string): string[];
}
