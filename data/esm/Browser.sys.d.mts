/**
 * Quits the application with the provided flags.
 *
 * Optional {@link nsIAppStartup} flags may be provided as
 * an array of masks, and these will be combined by ORing
 * them with a bitmask. The available masks are defined in
 * https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIAppStartup.
 *
 * Crucially, only one of the *Quit flags can be specified. The |eRestart|
 * flag may be bit-wise combined with one of the *Quit flags to cause
 * the application to restart after it quits.
 *
 * @param {Array.<string>=} flags
 *     Constant name of masks to pass to |Services.startup.quit|.
 *     If empty or undefined, |nsIAppStartup.eAttemptQuit| is used.
 * @param {boolean=} safeMode
 *     Optional flag to indicate that the application has to
 *     be restarted in safe mode.
 * @param {boolean=} isWindowless
 *     Optional flag to indicate that the browser was started in windowless mode.
 *
 * @returns {Object<string,boolean>}
 *     Dictionary containing information that explains the shutdown reason.
 *     The value for `cause` contains the shutdown kind like "shutdown" or
 *     "restart", while `forced` will indicate if it was a normal or forced
 *     shutdown of the application. "in_app" is always set to indicate that
 *     it is a shutdown triggered from within the application.
 */
export function quit(flags?: Array<string> | undefined, safeMode?: boolean | undefined, isWindowless?: boolean | undefined): {
    [x: string]: boolean;
};
