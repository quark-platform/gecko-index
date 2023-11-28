export namespace DevToolsInfaillibleUtils {
    export { makeInfallible };
    export { reportException };
    export { safeErrorString };
}
/**
 * Given a handler function that may throw, return an infallible handler
 * function that calls the fallible handler, and logs any exceptions it
 * throws.
 *
 * @param handler function
 *      A handler function, which may throw.
 * @param aName string
 *      A name for handler, for use in error messages. If omitted, we use
 *      handler.name.
 *
 * (SpiderMonkey does generate good names for anonymous functions, but we
 * don't have a way to get at them from JavaScript at the moment.)
 */
declare function makeInfallible(handler: any, name?: any): (...args: any[]) => any;
/**
 * The 3 methods here are duplicated from ThreadSafeDevToolsUtils.js
 * The ones defined here are used from other sys.mjs files, mostly from the
 * NetworkObserver codebase, while the ones remaining in ThreadSafeDevToolsUtils.js
 * are used in commonjs modules, including modules which can be loaded in workers.
 *
 * sys.mjs modules are currently not supported in workers, see Bug 1247687.
 */
/**
 * Report that |who| threw an exception, |exception|.
 */
declare function reportException(who: any, exception: any): void;
/**
 * Turn the |error| into a string, without fail.
 *
 * @param {Error|any} error
 */
declare function safeErrorString(error: Error | any): any;
export {};
