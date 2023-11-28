export namespace LogManager {
    /**
     * Configure the root logger for the Recipe Client. Must be called at
     * least once before using any loggers created via getLogger.
     * @param {Number} loggingLevel
     *        Logging level to use as defined in Log.sys.mjs
     */
    function configure(loggingLevel: number): void;
    /**
     * Obtain a named logger with the recipe client logger as its parent.
     * @param {String} name
     *        Name of the logger to obtain.
     * @return {Logger}
     */
    function getLogger(name: string): Logger;
}
