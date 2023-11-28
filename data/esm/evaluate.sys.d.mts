export namespace evaluate {
    /**
     * Evaluate a script in given sandbox.
     *
     * The the provided `script` will be wrapped in an anonymous function
     * with the `args` argument applied.
     *
     * The arguments provided by the `args<` argument are exposed
     * through the `arguments` object available in the script context,
     * and if the script is executed asynchronously with the `async`
     * option, an additional last argument that is synonymous to the
     * name `resolve` is appended, and can be accessed
     * through `arguments[arguments.length - 1]`.
     *
     * The `timeout` option specifies the duration for how long the
     * script should be allowed to run before it is interrupted and aborted.
     * An interrupted script will cause a {@link ScriptTimeoutError} to occur.
     *
     * The `async` option indicates that the script will not return
     * until the `resolve` callback is invoked,
     * which is analogous to the last argument of the `arguments` object.
     *
     * The `file` option is used in error messages to provide information
     * on the origin script file in the local end.
     *
     * The `line` option is used in error messages, along with `filename`,
     * to provide the line number in the origin script file on the local end.
     *
     * @param {nsISandbox} sb
     *     Sandbox the script will be evaluted in.
     * @param {string} script
     *     Script to evaluate.
     * @param {Array.<?>=} args
     *     A sequence of arguments to call the script with.
     * @param {object=} options
     * @param {boolean=} options.async
     *     Indicates if the script should return immediately or wait for
     *     the callback to be invoked before returning. Defaults to false.
     * @param {string=} options.file
     *     File location of the program in the client. Defaults to "dummy file".
     * @param {number=} options.line
     *     Line number of the program in the client. Defaults to 0.
     * @param {number=} options.timeout
     *     Duration in milliseconds before interrupting the script. Defaults to
     *     DEFAULT_TIMEOUT.
     *
     * @returns {Promise}
     *     A promise that when resolved will give you the return value from
     *     the script.  Note that the return value requires serialisation before
     *     it can be sent to the client.
     *
     * @throws {JavaScriptError}
     *   If an {@link Error} was thrown whilst evaluating the script.
     * @throws {ScriptTimeoutError}
     *   If the script was interrupted due to script timeout.
     */
    function sandbox(sb: nsISandbox, script: string, args?: any[], { async, file, line, timeout, }?: any): Promise<any>;
    /**
     * `Cu.isDeadWrapper` does not return true for a dead sandbox that
     * was assosciated with and extension popup.  This provides a way to
     * still test for a dead object.
     *
     * @param {object} obj
     *     A potentially dead object.
     * @param {string} prop
     *     Name of a property on the object.
     *
     * @returns {boolean}
     *     True if <var>obj</var> is dead, false otherwise.
     */
    function isDead(obj: any, prop: string): boolean;
}
export namespace sandbox {
    /**
     * Provides a safe way to take an object defined in a privileged scope and
     * create a structured clone of it in a less-privileged scope.  It returns
     * a reference to the clone.
     *
     * Unlike for {@link Components.utils.cloneInto}, `obj` may contain
     * functions and DOM elements.
     */
    function cloneInto(obj: any, sb: any): any;
    /**
     * Augment given sandbox by an adapter that has an `exports` map
     * property, or a normal map, of function names and function references.
     *
     * @param {Sandbox} sb
     *     The sandbox to augment.
     * @param {object} adapter
     *     Object that holds an `exports` property, or a map, of function
     *     names and function references.
     *
     * @returns {Sandbox}
     *     The augmented sandbox.
     */
    function augment(sb: Sandbox, adapter: any): Sandbox;
    /**
     * Creates a sandbox.
     *
     * @param {Window} win
     *     The DOM Window object.
     * @param {nsIPrincipal=} principal
     *     An optional, custom principal to prefer over the Window.  Useful if
     *     you need elevated security permissions.
     *
     * @returns {Sandbox}
     *     The created sandbox.
     */
    function create(win: Window, principal?: nsIPrincipal, opts?: {}): Sandbox;
    /**
     * Creates a mutable sandbox, where changes to the global scope
     * will have lasting side-effects.
     *
     * @param {Window} win
     *     The DOM Window object.
     *
     * @returns {Sandbox}
     *     The created sandbox.
     */
    function createMutable(win: Window): Sandbox;
    function createSystemPrincipal(win: any): Sandbox;
    function createSimpleTest(win: any, harness: any): Sandbox;
}
/**
 * Sandbox storage.  When the user requests a sandbox by a specific name,
 * if one exists in the storage this will be used as long as its window
 * reference is still valid.
 *
 * @memberof evaluate
 */
export class Sandboxes {
    /**
     * @param {function(): Window} windowFn
     *     A function that returns the references to the current Window
     *     object.
     */
    constructor(windowFn: () => Window);
    windowFn_: () => Window;
    boxes_: Map<any, any>;
    get window_(): Window;
    /**
     * Factory function for getting a sandbox by name, or failing that,
     * creating a new one.
     *
     * If the sandbox' window does not match the provided window, a new one
     * will be created.
     *
     * @param {string} name
     *     The name of the sandbox to get or create.
     * @param {boolean=} [fresh=false] fresh
     *     Remove old sandbox by name first, if it exists.
     *
     * @returns {Sandbox}
     *     A used or fresh sandbox.
     */
    get(name?: string, fresh?: boolean | undefined): Sandbox;
    /** Clears cache of sandboxes. */
    clear(): void;
}
