export namespace assert {
    /**
     * Asserts that WebDriver has an active session.
     *
     * @param {WebDriverSession} session
     *     WebDriver session instance.
     * @param {string=} msg
     *     Custom error message.
     *
     * @throws {InvalidSessionIDError}
     *     If session does not exist, or has an invalid id.
     */
    export function session(session: WebDriverSession, msg?: string): void;
    /**
     * Asserts that the current browser is Firefox Desktop.
     *
     * @param {string=} msg
     *     Custom error message.
     *
     * @throws {UnsupportedOperationError}
     *     If current browser is not Firefox.
     */
    export function firefox(msg?: string): void;
    /**
     * Asserts that the current application is Firefox Desktop or Thunderbird.
     *
     * @param {string=} msg
     *     Custom error message.
     *
     * @throws {UnsupportedOperationError}
     *     If current application is not running on desktop.
     */
    export function desktop(msg?: string): void;
    /**
     * Asserts that the current application runs on Android.
     *
     * @param {string=} msg
     *     Custom error message.
     *
     * @throws {UnsupportedOperationError}
     *     If current application is not running on Android.
     */
    export function mobile(msg?: string): void;
    /**
     * Asserts that the current <var>context</var> is content.
     *
     * @param {string} context
     *     Context to test.
     * @param {string=} msg
     *     Custom error message.
     *
     * @returns {string}
     *     <var>context</var> is returned unaltered.
     *
     * @throws {UnsupportedOperationError}
     *     If <var>context</var> is not content.
     */
    export function content(context: string, msg?: string): string;
    /**
     * Asserts that the {@link CanonicalBrowsingContext} is open.
     *
     * @param {CanonicalBrowsingContext} browsingContext
     *     Canonical browsing context to check.
     * @param {string=} msg
     *     Custom error message.
     *
     * @returns {CanonicalBrowsingContext}
     *     <var>browsingContext</var> is returned unaltered.
     *
     * @throws {NoSuchWindowError}
     *     If <var>browsingContext</var> is no longer open.
     */
    export function open(browsingContext: CanonicalBrowsingContext, msg?: string): CanonicalBrowsingContext;
    /**
     * Asserts that there is no current user prompt.
     *
     * @param {modal.Dialog} dialog
     *     Reference to current dialogue.
     * @param {string=} msg
     *     Custom error message.
     *
     * @throws {UnexpectedAlertOpenError}
     *     If there is a user prompt.
     */
    export function noUserPrompt(dialog: modal.Dialog, msg?: string): void;
    /**
     * Asserts that <var>obj</var> is defined.
     *
     * @param {?} obj
     *     Value to test.
     * @param {string=} msg
     *     Custom error message.
     *
     * @returns {?}
     *     <var>obj</var> is returned unaltered.
     *
     * @throws {InvalidArgumentError}
     *     If <var>obj</var> is not defined.
     */
    export function defined(obj: any, msg?: string): any;
    /**
     * Asserts that <var>obj</var> is a finite number.
     *
     * @param {?} obj
     *     Value to test.
     * @param {string=} msg
     *     Custom error message.
     *
     * @returns {number}
     *     <var>obj</var> is returned unaltered.
     *
     * @throws {InvalidArgumentError}
     *     If <var>obj</var> is not a number.
     */
    export function number(obj: any, msg?: string): number;
    /**
     * Asserts that <var>obj</var> is a positive number.
     *
     * @param {?} obj
     *     Value to test.
     * @param {string=} msg
     *     Custom error message.
     *
     * @returns {number}
     *     <var>obj</var> is returned unaltered.
     *
     * @throws {InvalidArgumentError}
     *     If <var>obj</var> is not a positive integer.
     */
    export function positiveNumber(obj: any, msg?: string): number;
    /**
     * Asserts that <var>obj</var> is a number in the inclusive range <var>lower</var> to <var>upper</var>.
     *
     * @param {?} obj
     *     Value to test.
     * @param {Array<number>} range
     *     Array range [lower, upper]
     * @param {string=} msg
     *     Custom error message.
     *
     * @returns {number}
     *     <var>obj</var> is returned unaltered.
     *
     * @throws {InvalidArgumentError}
     *     If <var>obj</var> is not a number in the specified range.
     */
    export function numberInRange(obj: any, range: number[], msg?: string): number;
    /**
     * Asserts that <var>obj</var> is callable.
     *
     * @param {?} obj
     *     Value to test.
     * @param {string=} msg
     *     Custom error message.
     *
     * @returns {Function}
     *     <var>obj</var> is returned unaltered.
     *
     * @throws {InvalidArgumentError}
     *     If <var>obj</var> is not callable.
     */
    export function callable(obj: any, msg?: string): Function;
    /**
     * Asserts that <var>obj</var> is an unsigned short number.
     *
     * @param {?} obj
     *     Value to test.
     * @param {string=} msg
     *     Custom error message.
     *
     * @returns {number}
     *     <var>obj</var> is returned unaltered.
     *
     * @throws {InvalidArgumentError}
     *     If <var>obj</var> is not an unsigned short.
     */
    export function unsignedShort(obj: any, msg?: string): number;
    /**
     * Asserts that <var>obj</var> is an integer.
     *
     * @param {?} obj
     *     Value to test.
     * @param {string=} msg
     *     Custom error message.
     *
     * @returns {number}
     *     <var>obj</var> is returned unaltered.
     *
     * @throws {InvalidArgumentError}
     *     If <var>obj</var> is not an integer.
     */
    export function integer(obj: any, msg?: string): number;
    /**
     * Asserts that <var>obj</var> is a positive integer.
     *
     * @param {?} obj
     *     Value to test.
     * @param {string=} msg
     *     Custom error message.
     *
     * @returns {number}
     *     <var>obj</var> is returned unaltered.
     *
     * @throws {InvalidArgumentError}
     *     If <var>obj</var> is not a positive integer.
     */
    export function positiveInteger(obj: any, msg?: string): number;
    /**
     * Asserts that <var>obj</var> is an integer in the inclusive range <var>lower</var> to <var>upper</var>.
     *
     * @param {?} obj
     *     Value to test.
     * @param {Array<number>} range
     *     Array range [lower, upper]
     * @param {string=} msg
     *     Custom error message.
     *
     * @returns {number}
     *     <var>obj</var> is returned unaltered.
     *
     * @throws {InvalidArgumentError}
     *     If <var>obj</var> is not a number in the specified range.
     */
    export function integerInRange(obj: any, range: number[], msg?: string): number;
    /**
     * Asserts that <var>obj</var> is a boolean.
     *
     * @param {?} obj
     *     Value to test.
     * @param {string=} msg
     *     Custom error message.
     *
     * @returns {boolean}
     *     <var>obj</var> is returned unaltered.
     *
     * @throws {InvalidArgumentError}
     *     If <var>obj</var> is not a boolean.
     */
    export function boolean(obj: any, msg?: string): boolean;
    /**
     * Asserts that <var>obj</var> is a string.
     *
     * @param {?} obj
     *     Value to test.
     * @param {string=} msg
     *     Custom error message.
     *
     * @returns {string}
     *     <var>obj</var> is returned unaltered.
     *
     * @throws {InvalidArgumentError}
     *     If <var>obj</var> is not a string.
     */
    export function string(obj: any, msg?: string): string;
    /**
     * Asserts that <var>obj</var> is an object.
     *
     * @param {?} obj
     *     Value to test.
     * @param {string=} msg
     *     Custom error message.
     *
     * @returns {object}
     *     obj| is returned unaltered.
     *
     * @throws {InvalidArgumentError}
     *     If <var>obj</var> is not an object.
     */
    export function object(obj: any, msg?: string): any;
    /**
     * Asserts that <var>prop</var> is in <var>obj</var>.
     *
     * @param {?} prop
     *     An array element or own property to test if is in <var>obj</var>.
     * @param {?} obj
     *     An array or an Object that is being tested.
     * @param {string=} msg
     *     Custom error message.
     *
     * @returns {?}
     *     The array element, or the value of <var>obj</var>'s own property
     *     <var>prop</var>.
     *
     * @throws {InvalidArgumentError}
     *     If the <var>obj</var> was an array and did not contain <var>prop</var>.
     *     Otherwise if <var>prop</var> is not in <var>obj</var>, or <var>obj</var>
     *     is not an object.
     */
    function _in(prop: any, obj: any, msg?: string): any;
    export { _in as in };
    /**
     * Asserts that <var>obj</var> is an Array.
     *
     * @param {?} obj
     *     Value to test.
     * @param {string=} msg
     *     Custom error message.
     *
     * @returns {object}
     *     <var>obj</var> is returned unaltered.
     *
     * @throws {InvalidArgumentError}
     *     If <var>obj</var> is not an Array.
     */
    export function array(obj: any, msg?: string): any;
    /**
     * Returns a function that is used to assert the |predicate|.
     *
     * @param {function(?): boolean} predicate
     *     Evaluated on calling the return value of this function.  If its
     *     return value of the inner function is false, <var>error</var>
     *     is thrown with <var>message</var>.
     * @param {string=} message
     *     Custom error message.
     * @param {Error=} err
     *     Custom error type by its class.
     *
     * @returns {function(?): ?}
     *     Function that takes and returns the passed in value unaltered,
     *     and which may throw <var>error</var> with <var>message</var>
     *     if <var>predicate</var> evaluates to false.
     */
    export function that(predicate: (arg0: any) => boolean, message?: string, err?: Error): (arg0: any) => any;
}
hs: number, message?: string): void;
    /**
     * The lhs must be greater than or equal to the rhs.
     * assert.greaterOrEqual(lhs, rhs, message_opt);
     *
     * @param {Number} [lhs]
     *        The left-hand side value.
     * @param {Number} [rhs]
     *        The right-hand side value.
     * @param {String} [message]
     *        Short explanation of the comparison result.
     */
    greaterOrEqual(lhs?: number, rhs?: number, message?: string): void;
    /**
     * The lhs must be less than the rhs.
     * assert.less(lhs, rhs, message_opt);
     *
     * @param {Number} [lhs]
     *        The left-hand side value.
     * @param {Number} [rhs]
     *        The right-hand side value.
     * @param {String} [message]
     *        Short explanation of the comparison result.
     */
    less(lhs?: number, rhs?: number, message?: string): void;
    /**
     * The lhs must be less than or equal to the rhs.
     * assert.lessOrEqual(lhs, rhs, message_opt);
     *
     * @param {Number} [lhs]
     *        The left-hand side value.
     * @param {Number} [rhs]
     *        The right-hand side value.
     * @param {String} [message]
     *        Short explanation of the comparison result.
     */
    lessOrEqual(lhs?: number, rhs?: number, message?: string): void;
    /**
     * The lhs must be a string that matches the rhs regular expression.
     * rhs can be specified either as a string or a RegExp object. If specified as a
     * string it will be interpreted as a regular expression so take care to escape
     * special characters such as "?" or "(" if you need the actual characters.
     *
     * @param {String} lhs
     *        The string to be tested.
     * @param {String|RegExp} rhs
     *        The regular expression that the string will be tested with.
     *        Note that if passed as a string, this will be interpreted.
     *        as a regular expression.
     * @param {String} [message]
     *        Short explanation of the comparison result.
     */
    stringMatches(lhs: string, rhs: string | RegExp, message?: string): void;
    /**
     * The lhs must be a string that contains the rhs string.
     *
     * @param {String} lhs
     *        The string to be tested (haystack).
     * @param {String} rhs
     *        The string to be found (needle).
     * @param {String} [message]
     *        Short explanation of the expected result.
     */
    stringContains(lhs: string, rhs: string, message?: string): void;
}
export namespace Assert {
    /**
     * 2. The AssertionError is defined in assert.
     *
     * At present only the four keys mentioned below are used and
     * understood by the spec. Implementations or sub modules can pass
     * other keys to the AssertionError's constructor - they will be
     * ignored.
     *
     * @example
     *
     * new assert.AssertionError({
     *   message: message,
     *   actual: actual,
     *   expected: expected,
     *   operator: operator,
     *   truncate: truncate
     * });
     *
     */
    function AssertionError(options: any): void;
}
/**
 * This callback type is used for custom assertion report handling.
 */
export type reporterFunc = (err: AssertionError | null, message: string, stack: Stack) => any;
