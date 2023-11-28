/**
 * This creates a console object that somewhat replicates Firebug's console
 * object
 *
 * @param {object} aConsoleOptions
 *        Optional dictionary with a set of runtime console options:
 *        - prefix {string} : An optional prefix string to be printed before
 *                            the actual logged message
 *        - maxLogLevel {string} : String identifier (See LOG_LEVELS for
 *                            possible values) that allows to filter which
 *                            messages are logged based on their log level.
 *                            If falsy value, all messages will be logged.
 *                            If wrong value that doesn't match any key of
 *                            LOG_LEVELS, no message will be logged
 *        - maxLogLevelPref {string} : String pref name which contains the
 *                            level to use for maxLogLevel. If the pref doesn't
 *                            exist or gets removed, the maxLogLevel will default
 *                            to the value passed to this constructor (or "all"
 *                            if it wasn't specified).
 *        - dump {function} : An optional function to intercept all strings
 *                            written to stdout
 *        - innerID {string}: An ID representing the source of the message.
 *                            Normally the inner ID of a DOM window.
 *        - consoleID {string} : String identified for the console, this will
 *                            be passed through the console notifications
 * @return {object}
 *        A console API instance object
 */
export function ConsoleAPI(aConsoleOptions?: object): object;
export class ConsoleAPI {
    /**
     * This creates a console object that somewhat replicates Firebug's console
     * object
     *
     * @param {object} aConsoleOptions
     *        Optional dictionary with a set of runtime console options:
     *        - prefix {string} : An optional prefix string to be printed before
     *                            the actual logged message
     *        - maxLogLevel {string} : String identifier (See LOG_LEVELS for
     *                            possible values) that allows to filter which
     *                            messages are logged based on their log level.
     *                            If falsy value, all messages will be logged.
     *                            If wrong value that doesn't match any key of
     *                            LOG_LEVELS, no message will be logged
     *        - maxLogLevelPref {string} : String pref name which contains the
     *                            level to use for maxLogLevel. If the pref doesn't
     *                            exist or gets removed, the maxLogLevel will default
     *                            to the value passed to this constructor (or "all"
     *                            if it wasn't specified).
     *        - dump {function} : An optional function to intercept all strings
     *                            written to stdout
     *        - innerID {string}: An ID representing the source of the message.
     *                            Normally the inner ID of a DOM window.
     *        - consoleID {string} : String identified for the console, this will
     *                            be passed through the console notifications
     * @return {object}
     *        A console API instance object
     */
    constructor(aConsoleOptions?: object);
    dump: any;
    prefix: any;
    set maxLogLevel(aValue: any);
    get maxLogLevel(): any;
    innerID: any;
    consoleID: any;
    _maxLogLevel: null;
    _maxExplicitLogLevel: null;
    debug: Function;
    assert: Function;
    log: Function;
    info: Function;
    warn: Function;
    error: Function;
    exception: Function;
    trace: (...args: any[]) => void;
    clear: () => void;
    dir: Function;
    dirxml: Function;
    group: Function;
    groupEnd: Function;
    time: (...args: any[]) => void;
    timeEnd: (...args: any[]) => void;
    profile(profileName: any): void;
    profileEnd(profileName: any): void;
    shouldLog(aLevel: any): boolean;
}
export const console: ConsoleAPI;
