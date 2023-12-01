export class LanguageIdEngine {
    static "__#1666180@#cachedEngine": any;
    static "__#1666180@#cachedEngineTimeoutId": any;
    static "__#1666180@#cachedEngineTimeoutMS": number;
    /**
     * Gets a cached engine, or creates a new one. Returns `null` when the engine
     * payload fails to download.
     *
     * @param {() => Object} getPayload
     * @returns {LanguageIdEngine | null}
     */
    static getOrCreate(getPayload: () => any): LanguageIdEngine | null;
    /**
     * @param {() => Object} getPayload
     * @returns {Promise<LanguageIdEngine | null>}
     */
    static "__#1666180@#create"(getPayload: () => any): Promise<LanguageIdEngine | null>;
    static "__#1666180@#resetCacheTimeout"(): void;
    static "__#1666180@#clearEngineCache"(): void;
    /**
     * Construct and initialize the language-id worker.
     *
     * @param {Object} data
     * @param {string} data.type - The message type, expects "initialize".
     * @param {ArrayBuffer} data.wasmBuffer - The buffer containing the wasm binary.
     * @param {ArrayBuffer} data.modelBuffer - The buffer containing the language-id model binary.
     * @param {null | string} data.mockedLangTag - The mocked language tag value (only present when mocking).
     * @param {null | number} data.mockedConfidence - The mocked confidence value (only present when mocking).
     * @param {boolean} data.isLoggingEnabled
     */
    constructor(data: {
        type: string;
        wasmBuffer: ArrayBuffer;
        modelBuffer: ArrayBuffer;
        mockedLangTag: null | string;
        mockedConfidence: null | number;
        isLoggingEnabled: boolean;
    });
    isReady: Promise<any>;
    /**
     * Attempts to identify the human language in which the message is written.
     * Generally, the longer a message is, the higher the likelihood that the
     * identified language will be correct. Shorter messages increase the chance
     * of false identification.
     *
     * The returned confidence is a number between 0.0 and 1.0 of how confident
     * the language identification model was that it identified the correct language.
     *
     * @param {string} message
     * @returns {Promise<{ langTag: string, confidence: number }>}
     */
    identifyLanguage(message: string): Promise<{
        langTag: string;
        confidence: number;
    }>;
    /**
     * Attempts to determine the language in which the document's content is written.
     *
     * For the moment, while we investigate which language identification library
     * we would like to use, keep this logic in sync with LanguageDetector.sys.mjs
     * @returns {string | null}
     */
    identifyLanguageFromDocument(document: any): string | null;
    #private;
}
