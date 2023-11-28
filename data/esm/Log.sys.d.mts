export class Log {
    constructor(session: any);
    enabled: boolean;
    destructor(): void;
    enable(): void;
    disable(): void;
    _getLogCategory(category: any): "network" | "other" | "javascript";
    /**
     * Takes all script error messages that do not have an exception attached,
     * and emits a "Log.entryAdded" event.
     *
     * @param {nsIConsoleMessage} message
     *     Message originating from the nsIConsoleService.
     */
    observe(message: nsIConsoleMessage): void;
    get QueryInterface(): any;
}
umber;
            let ERROR: number;
            let WARN: number;
            let INFO: number;
            let CONFIG: number;
            let DEBUG: number;
            let TRACE: number;
            let ALL: number;
        }
    }
    let repository: any;
    function _formatError(e: any): string;
    function exceptionStr(e: any): string;
    function stackTrace(e: any): any;
}
e(): boolean;
    /**
     * Check if the current log level matches the Trace log level, or any level
     * above that. This should be used to guard logger.trace calls and avoid
     * instanciating logger instances unnecessarily.
     */
    static get isTraceLevelOrMore(): boolean;
    static get verbose(): boolean;
}
