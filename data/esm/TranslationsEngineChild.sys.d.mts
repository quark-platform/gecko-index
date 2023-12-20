/**
 * The engine child is responsible for exposing privileged code to the un-privileged
 * space the engine runs in.
 */
export class TranslationsEngineChild extends JSWindowActorChild {
    actorCreated(): void;
    handleEvent(event: any): void;
    receiveMessage({ name, data }: {
        name: any;
        data: any;
    }): Promise<any>;
    /**
     * @param {Object} options
     * @param {number?} options.startTime
     * @param {string} options.message
     */
    TE_addProfilerMarker({ startTime, message, innerWindowId }: {
        startTime: number | null;
        message: string;
    }): void;
    /**
     * Pass the message from content that the engines were shut down.
     */
    TE_resolveForceShutdown(): void;
    /**
     * @returns {string}
     */
    TE_getLogLevel(): string;
    /**
     * Log messages if "browser.translations.logLevel" is set to "All".
     *
     * @param {...any} args
     */
    TE_log(...args: any[]): void;
    /**
     * Report an error to the console.
     *
     * @param {...any} args
     */
    TE_logError(...args: any[]): void;
    /**
     * @param {string} fromLanguage
     * @param {string} toLanguage
     */
    TE_requestEnginePayload(fromLanguage: string, toLanguage: string): Promise<any>;
    /**
     * @param {number} innerWindowId
     * @param {"ready" | "error"} status
     */
    TE_reportEngineStatus(innerWindowId: number, status: "ready" | "error"): void;
    /**
     * No engines are still alive, destroy the process.
     */
    TE_destroyEngineProcess(): void;
    #private;
}
