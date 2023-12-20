/**
 * This module is based on the
 * `CommonJS spec <https://wiki.commonjs.org/wiki/Unit_Testing/1.0>`_
 *
 * When you see a jsdoc comment that contains a number, it's a reference to a
 * specific section of the CommonJS spec.
 *
 * 1. The assert module provides functions that throw AssertionError's when
 * particular conditions are not met.
 *
 * To use the module you may instantiate it first.
 *
 * @param {reporterFunc} reporterFunc
 *        Allows consumers to override reporting for this instance.
 * @param {boolean} isDefault
 *        Used by test suites to set ``reporterFunc`` as the default
 *        used by the global instance, which is called for example
 *        by other test-only modules. This is false when the
 *        reporter is set by content scripts, because they may still
 *        run in the parent process.
 *
 * @class
 */
export function Assert(reporterFunc: reporterFunc, isDefault: boolean): void;
export class Assert {
    /**
     * This module is based on the
     * `CommonJS spec <https://wiki.commonjs.org/wiki/Unit_Testing/1.0>`_
     *
     * When you see a jsdoc comment that contains a number, it's a reference to a
     * specific section of the CommonJS spec.
     *
     * 1. The assert module provides functions that throw AssertionError's when
     * particular conditions are not met.
     *
     * To use the module you may instantiate it first.
     *
     * @param {reporterFunc} reporterFunc
     *        Allows consumers to override reporting for this instance.
     * @param {boolean} isDefault
     *        Used by test suites to set ``reporterFunc`` as the default
     *        used by the global instance, which is called for example
     *        by other test-only modules. This is false when the
     *        reporter is set by content scripts, because they may still
     *        run in the parent process.
     *
     * @class
     */
    constructor(reporterFunc: reporterFunc, isDefault: boolean);
    _reporter: reporterFunc;
    /**
     * This callback type is used for custom assertion report handling.
     *
     * @callback reporterFunc
     * @param {AssertionError|null} err
     *        An error object when the assertion failed, or null when it passed.
     * @param {String} message
     *        Message describing the assertion.
     * @param {Stack} stack
     *        Stack trace of the assertion function.
     */
    /**
     * Set a custom assertion report handler function.
     *
     * @example
     *
     * Assert.setReporter(function customReporter(err, message, stack) {
     *   if (err) {
     *     do_report_result(false, err.message, err.stack);
     *   } else {
     *     do_report_result(true, message, stack);
     *   }
     * });
     *
     * @param {reporterFunc} reporterFunc
     *        Report handler function.
     */
    setReporter(reporterFunc: reporterFunc): void;
    /**
     * 3. All of the following functions must throw an AssertionError when a
     * corresponding condition is not met, with a message that may be undefined if
     * not provided.  All assertion methods provide both the actual and expected
     * values to the assertion error for display purposes.
     *
     * This report method only throws errors on assertion failures, as per spec,
     * but consumers of this module (think: xpcshell-test, mochitest) may want to
     * override this default implementation.
     *
     * @example
     *
     * // The following will report an assertion failure.
     * this.report(1 != 2, 1, 2, "testing JS number math!", "==");
     *
     * @param {boolean} failed
     *        Indicates if the assertion failed or not.
     * @param {*} actual
     *        The result of evaluating the assertion.
     * @param {*} [expected]
     *        Expected result from the test author.
     * @param {String} [message]
     *        Short explanation of the expected result.
     * @param {String} [operator]
     *        Operation qualifier used by the assertion method (ex: '==').
     * @param {boolean} [truncate=true]
     *        Whether or not ``actual`` and ``expected`` should be truncated when printing.
     * @param {nsIStackFrame} [stack]
     *        The stack trace including the caller of the assertion method,
     *        if this cannot be inferred automatically (e.g. due to async callbacks).
     */
    report(failed: boolean, actual: any, expected?: any, message?: string, operator?: string, truncate?: boolean, stack?: nsIStackFrame): void;
    /**
     * 4. Pure assertion tests whether a value is truthy, as determined by !!guard.
     * ``assert.ok(guard, message_opt);``
     * This statement is equivalent to ``assert.equal(true, !!guard, message_opt);``.
     * To test strictly for the value true, use ``assert.strictEqual(true, guard,
     * message_opt);``.
     *
     * @param {*} value
     *        Test subject to be evaluated as truthy.
     * @param {String} [message]
     *        Short explanation of the expected result.
     */
    ok(value: any, message?: string, ...args: any[]): void;
    /**
     * 5. The equality assertion tests shallow, coercive equality with ==.
     * ``assert.equal(actual, expected, message_opt);``
     *
     * @param {*} actual
     *        Test subject to be evaluated as equivalent to ``expected``.
     * @param {*} expected
     *        Test reference to evaluate against ``actual``.
     * @param {String} [message]
     *        Short explanation of the expected result.
     */
    equal(actual: any, expected: any, message?: string): void;
    /**
     * 6. The non-equality assertion tests for whether two objects are not equal
     * with ``!=``
     *
     * @example
     * assert.notEqual(actual, expected, message_opt);
     *
     * @param {*} actual
     *        Test subject to be evaluated as NOT equivalent to ``expected``.
     * @param {*} expected
     *        Test reference to evaluate against ``actual``.
     * @param {String} [message]
     *        Short explanation of the expected result.
     */
    notEqual(actual: any, expected: any, message?: string): void;
    /**
     * 7. The equivalence assertion tests a deep equality relation.
     * assert.deepEqual(actual, expected, message_opt);
     *
     * We check using the most exact approximation of equality between two objects
     * to keep the chance of false positives to a minimum.
     * `JSON.stringify` is not designed to be used for this purpose; objects may
     * have ambiguous `toJSON()` implementations that would influence the test.
     *
     * @param {*} actual
     *        Test subject to be evaluated as equivalent to ``expected``, including nested properties.
     * @param {*} expected
     *        Test reference to evaluate against ``actual``.
     * @param {String} [message]
     *        Short explanation of the expected result.
     */
    deepEqual(actual: any, expected: any, message?: string): void;
    /**
     * 8. The non-equivalence assertion tests for any deep inequality.
     * assert.notDeepEqual(actual, expected, message_opt);
     *
     * @param {*} actual
     *        Test subject to be evaluated as NOT equivalent to ``expected``, including nested
     *        properties.
     * @param {*} expected
     *        Test reference to evaluate against ``actual``.
     * @param {String} [message]
     *        Short explanation of the expected result.
     */
    notDeepEqual(actual: any, expected: any, message?: string): void;
    /**
     * 9. The strict equality assertion tests strict equality, as determined by ===.
     * ``assert.strictEqual(actual, expected, message_opt);``
     *
     * @param {*} actual
     *        Test subject to be evaluated as strictly equivalent to ``expected``.
     * @param {*} expected
     *        Test reference to evaluate against ``actual``.
     * @param {String} [message]
     *        Short explanation of the expected result.
     */
    strictEqual(actual: any, expected: any, message?: string): void;
    /**
     * 10. The strict non-equality assertion tests for strict inequality, as
     * determined by !==. ``assert.notStrictEqual(actual, expected, message_opt);``
     *
     * @param {*} actual
     *        Test subject to be evaluated as NOT strictly equivalent to ``expected``.
     * @param {*} expected
     *        Test reference to evaluate against ``actual``.
     * @param {String} [message]
     *        Short explanation of the expected result.
     */
    notStrictEqual(actual: any, expected: any, message?: string): void;
    /**
     * 11. Expected to throw an error:
     * assert.throws(block, Error_opt, message_opt);
     *
     * Example:
     * ```js
     * // The following will verify that an error of type TypeError was thrown:
     * Assert.throws(() => testBody(), TypeError);
     * // The following will verify that an error was thrown with an error message matching "hello":
     * Assert.throws(() => testBody(), /hello/);
     * ```
     *
     * @param {Function} block
     *        Function to evaluate and catch eventual thrown errors.
     * @param {RegExp|Function} expected
     *        This parameter can be either a RegExp or a function. The function is
     *        either the error type's constructor, or it's a method that returns
     *        a boolean that describes the test outcome.
     * @param {String} [message]
     *        Short explanation of the expected result.
     */
    throws(block: Function, expected: RegExp | Function, message?: string): void;
    /**
     * A promise that is expected to reject:
     * assert.rejects(promise, expected, message);
     *
     * @param {Promise} promise
     *        A promise that is expected to reject.
     * @param {?} [expected]
     *        Test reference to evaluate against the rejection result.
     * @param {String} [message]
     *        Short explanation of the expected result.
     */
    rejects(promise: Promise<any>, expected?: unknown, message?: string): Promise<any>;
    /**
     * The lhs must be greater than the rhs.
     * assert.greater(lhs, rhs, message_opt);
     *
     * @param {Number} lhs
     *        The left-hand side value.
     * @param {Number} rhs
     *        The right-hand side value.
     * @param {String} [message]
     *        Short explanation of the comparison result.
     */
    greater(lhs: number, rhs: number, message?: string): void;
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
     *   truncate: truncate,
     *   stack: stack, // Optional, defaults to the current stack.
     * });
     *
     */
    function AssertionError(options: any): void;
}
/**
 * This callback type is used for custom assertion report handling.
 */
export type reporterFunc = (err: AssertionError | null, message: string, stack: Stack) => any;
