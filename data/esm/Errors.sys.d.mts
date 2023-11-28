export namespace error {
    /**
     * Check if ``val`` is an instance of the ``Error`` prototype.
     *
     * Because error objects may originate from different globals, comparing
     * the prototype of the left hand side with the prototype property from
     * the right hand side, which is what ``instanceof`` does, will not work.
     * If the LHS and RHS come from different globals, this check will always
     * fail because the two objects will not have the same identity.
     *
     * Therefore it is not safe to use ``instanceof`` in any multi-global
     * situation, e.g. in content across multiple ``Window`` objects or anywhere
     * in chrome scope.
     *
     * This function also contains a special check if ``val`` is an XPCOM
     * ``nsIException`` because they are special snowflakes and may indeed
     * cause Firefox to crash if used with ``instanceof``.
     *
     * @param {*} val
     *     Any value that should be undergo the test for errorness.
     * @returns {boolean}
     *     True if error, false otherwise.
     */
    function isError(val: any): boolean;
    /**
     * Checks if ``obj`` is an object in the :js:class:`WebDriverError`
     * prototypal chain.
     *
     * @param {*} obj
     *     Arbitrary object to test.
     *
     * @returns {boolean}
     *     True if ``obj`` is of the WebDriverError prototype chain,
     *     false otherwise.
     */
    function isWebDriverError(obj: any): boolean;
    /**
     * Ensures error instance is a :js:class:`WebDriverError`.
     *
     * If the given error is already in the WebDriverError prototype
     * chain, ``err`` is returned unmodified.  If it is not, it is wrapped
     * in :js:class:`UnknownError`.
     *
     * @param {Error} err
     *     Error to conditionally turn into a WebDriverError.
     *
     * @returns {WebDriverError}
     *     If ``err`` is a WebDriverError, it is returned unmodified.
     *     Otherwise an UnknownError type is returned.
     */
    function wrap(err: Error): WebDriverError;
    /**
     * Unhandled error reporter.  Dumps the error and its stacktrace to console,
     * and reports error to the Browser Console.
     */
    function report(err: any): void;
    /**
     * Prettifies an instance of Error and its stacktrace to a string.
     */
    function stringify(err: any): any;
    /** Create a stacktrace to the current line in the program. */
    function stack(): string;
}
/**
 * WebDriverError is the prototypal parent of all WebDriver errors.
 * It should not be used directly, as it does not correspond to a real
 * error in the specification.
 */
declare class WebDriverError {
    /**
     * Unmarshals a JSON error representation to the appropriate Marionette
     * error type.
     *
     * @param {Object<string, string>} json
     *     Error object.
     *
     * @returns {Error}
     *     Error prototype.
     */
    static fromJSON(json: {
        [x: string]: string;
    }): Error;
    /**
     * Base error for WebDriver protocols.
     *
     * @param {(string|Error)=} obj
     *     Optional string describing error situation or Error instance
     *     to propagate.
     * @param {object=} data
     *     Additional error data helpful in diagnosing the error.
     */
    constructor(obj?: (string | Error) | undefined, data?: object | undefined);
    name: string;
    status: string;
    data: any;
    stack: any;
    message: any;
    /**
     * @returns {Object<string, string>}
     *     JSON serialisation of error prototype.
     */
    toJSON(): {
        [x: string]: string;
    };
}
export {};
