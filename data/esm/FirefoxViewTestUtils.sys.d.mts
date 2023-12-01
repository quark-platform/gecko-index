/**
 * Module consumers can optionally initialize the module
 *
 * @param {Object} scope
 *   object with SimpleTest and info properties.
 */
export function init(scope: any): void;
/**
 * Run a task with Firefox View open.
 *
 * @param {Object} options
 *   Options object.
 * @param {boolean} [options.openNewWindow]
 *   Whether to run the task in a new window. If false, the current window will
 *   be used.
 * @param {boolean} [options.resetFlowManager]
 *   Whether to reset the internal state of TabsSetupFlowManager before running
 *   the task.
 * @param {function(MozBrowser)} taskFn
 *   The task to run. It can be asynchronous.
 * @returns {any}
 *   The value returned by the task.
 */
export function withFirefoxView({ openNewWindow, resetFlowManager, win }: {
    openNewWindow?: boolean;
    resetFlowManager?: boolean;
}, taskFn: (arg0: MozBrowser) => any): any;
export function assertFirefoxViewTab(win: any): void;
export function assertFirefoxViewTabSelected(win: any): Promise<void>;
export function openFirefoxViewTab(win: any): Promise<any>;
export function closeFirefoxViewTab(win: any): void;
export function isFirefoxViewTabSelectedInWindow(win: any): boolean;
export function getFirefoxViewURL(): "about:firefoxview-next" | "about:firefoxview";
