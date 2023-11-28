/**
 * This file is extremely sensitive to memory size and performance!
 */
export class TranslationsChild {
    /**
     * Store this since the window may be dead when the value is needed.
     * @type {number | null}
     */
    innerWindowId: number | null;
    handleEvent(event: any): void;
    receiveMessage({ name, data }: {
        name: any;
        data: any;
    }): Promise<any>;
    sendTelemetryError(error: any): void;
    getSupportedLanguages(): any;
    sendEngineIsReady(): void;
    isTranslationsEngineSupported(): any;
    getTranslationsEnginePayload(fromLanguage: any, toLanguage: any): any;
    getOrCreateLanguageIdEngine(): any;
    createTranslationsEngine(fromLanguage: any, toLanguage: any): any;
    didDestroy(): void;
    #private;
}
