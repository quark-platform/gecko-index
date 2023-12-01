/** E10s compatible wrapper for the standard logger from Log.sys.mjs. */
export class Log {
    static TYPES: {
        CDP: string;
        MARIONETTE: string;
        REMOTE_AGENT: string;
        WEBDRIVER_BIDI: string;
    };
    /**
     * Get a logger instance. For each provided type, a dedicated logger instance
     * will be returned, but all loggers are relying on the same preference.
     *
     * @param {string} type
     *     The type of logger to use. Protocol-specific modules should use the
     *     corresponding logger type. Eg. files under /marionette should use
     *     Log.TYPES.MARIONETTE.
     */
    static get(type?: string): any;
    /**
     * Check if the current log level matches the Debug log level, or any level
     * above that. This should be used to guard logger.debug calls and avoid
     * instanciating logger instances unnecessarily.
     */
    static get isDebugLevelOrMore(): boolean;
    /**
     * Check if the current log level matches the Trace log level, or any level
     * above that. This should be used to guard logger.trace calls and avoid
     * instanciating logger instances unnecessarily.
     */
    static get isTraceLevelOrMore(): boolean;
    static get verbose(): boolean;
}
