/**
 * TestLogger: Logger class generating messages compliant with the
 * structured logging protocol for tests exposed by mozlog
 *
 * @param {string} name
 *        The name of the logger to instantiate.
 * @param {function} [dumpFun]
 *        An underlying function to be used to log raw messages. This function
 *        will receive the complete serialized json string to log.
 * @param {object} [scope]
 *        The scope that the dumpFun is loaded in, so that messages are cloned
 *        into that scope before passing them.
 */
export class StructuredLogger {
    constructor(name: any, dumpFun?: any, scope?: any);
    name: any;
    testStart(test: any): void;
    testStatus(test: any, subtest: any, status: any, expected?: string, message?: any, stack?: any, extra?: any): void;
    testEnd(test: any, status: any, expected?: string, message?: any, stack?: any, extra?: any): void;
    assertionCount(test: any, count: any, minExpected?: number, maxExpected?: number): void;
    suiteStart(ids: any, name?: any, runinfo?: any, versioninfo?: any, deviceinfo?: any, extra?: any): void;
    suiteEnd(extra?: any): void;
    /**
     * Unstructured logging functions. The "extra" parameter can always by used to
     * log suite specific data. If a "stack" field is provided it is logged at the
     * top level of the data object for the benefit of mozlog's formatters.
     */
    log(level: any, message: any, extra?: any): void;
    debug(message: any, extra?: any): void;
    info(message: any, extra?: any): void;
    warning(message: any, extra?: any): void;
    error(message: any, extra?: any): void;
    critical(message: any, extra?: any): void;
    processOutput(thread: any, message: any): void;
    logData(action: any, data?: {}): void;
    #private;
}
/**
 * StructuredFormatter: Formatter class turning structured messages
 * into human-readable messages.
 */
export class StructuredFormatter {
    log(message: any): any;
    suite_start(message: any): string;
    test_start(message: any): string;
    test_status(message: any): string;
    test_end(message: any): string;
    suite_end(message: any): string;
    #private;
}
