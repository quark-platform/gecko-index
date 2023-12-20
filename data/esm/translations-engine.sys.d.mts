/**
 * @typedef {import("./translations-document.sys.mjs").TranslationsDocument} TranslationsDocument
 * @typedef {import("../translations.js").TranslationsEnginePayload} TranslationsEnginePayload
 */
/**
 * The TranslationsEngine encapsulates the logic for translating messages. It can
 * only be set up for a single language translation pair. In order to change languages
 * a new engine should be constructed.
 *
 * The actual work for the translations happens in a worker. This class manages
 * instantiating and messaging the worker.
 *
 * Keep unused engines around in the TranslationsEngine.#cachedEngine cache in case
 * page navigation happens and we can re-use previous engines. The engines are very
 * heavy-weight, so get rid of them after a timeout. Once all are destroyed the
 * TranslationsEngineParent is notified that it can be destroyed.
 */
export class TranslationsEngine {
    /**
     * Maps a language pair key to a cached engine. Engines are kept around for a timeout
     * before they are removed so that they can be re-used during navigation.
     *
     * @type {Map<string, Promise<TranslationsEngine>>}
     */
    static "__#1803667@#cachedEngines": Map<string, Promise<TranslationsEngine>>;
    /**
     * Returns a getter function that will create a translations engine on the first
     * call, and then return the cached one. After a timeout when the engine hasn't
     * been used, it is destroyed.
     *
     * @param {string} fromLanguage
     * @param {string} toLanguage
     * @param {number} innerWindowId
     * @returns {Promise<TranslationsEngine>}
     */
    static getOrCreate(fromLanguage: string, toLanguage: string, innerWindowId: number): Promise<TranslationsEngine>;
    /**
     * Removes the engine, and if it's the last, call the process to destroy itself.
     * @param {string} languagePairKey
     * @param {boolean} force - On forced shutdowns, it's not necessary to notify the
     *                          parent process.
     */
    static "__#1803667@#removeEngineFromCache"(languagePairKey: string, force: boolean): void;
    /**
     * Create a TranslationsEngine and bypass the cache.
     *
     * @param {string} fromLanguage
     * @param {string} toLanguage
     * @param {number} innerWindowId
     * @returns {Promise<TranslationsEngine>}
     */
    static create(fromLanguage: string, toLanguage: string, innerWindowId: number): Promise<TranslationsEngine>;
    /**
     * Signal to the engines that they are being forced to shutdown.
     */
    static forceShutdown(): Promise<PromiseSettledResult<void>[]>;
    /**
     * Applies a function only if a cached engine exists.
     *
     * @param {string} fromLanguage
     * @param {string} toLanguage
     * @param {(engine: TranslationsEngine) => void} fn
     */
    static withCachedEngine(fromLanguage: string, toLanguage: string, fn: (engine: TranslationsEngine) => void): void;
    /**
     * Pause or resume the translations from a cached engine.
     *
     * @param {boolean} pause
     * @param {string} fromLanguage
     * @param {string} toLanguage
     * @param {number} innerWindowId
     */
    static pause(pause: boolean, fromLanguage: string, toLanguage: string, innerWindowId: number): void;
    /**
     * Construct and initialize the worker.
     *
     * @param {string} fromLanguage
     * @param {string} toLanguage
     * @param {TranslationsEnginePayload} enginePayload - If there is no engine payload
     *   then the engine will be mocked. This allows this class to be used in tests.
     */
    constructor(fromLanguage: string, toLanguage: string, enginePayload: TranslationsEnginePayload);
    /**
     * Terminates the engine and its worker after a timeout.
     * @param {boolean} force
     */
    terminate: (force?: boolean) => void;
    /**
     * The worker needs to be shutdown after some amount of time of not being used.
     */
    keepAlive(): void;
    /** @type {string} */
    fromLanguage: string;
    /** @type {string} */
    toLanguage: string;
    languagePairKey: string;
    /** @type {Promise<void>} */
    isReady: Promise<void>;
    /**
     * The implementation for translation. Use translateText or translateHTML for the
     * public API.
     *
     * @param {string} sourceText
     * @param {boolean} isHTML
     * @param {number} innerWindowId
     * @returns {Promise<string[]>}
     */
    translate(sourceText: string, isHTML: boolean, innerWindowId: number): Promise<string[]>;
    /**
     * Stop processing the translation queue. All in-progress messages will be discarded.
     *
     * @param {number} innerWindowId
     */
    discardTranslationQueue(innerWindowId: number): void;
    #private;
}
export type TranslationsDocument = import("./translations-document.sys.mjs").TranslationsDocument;
export type TranslationsEnginePayload = import("../translations.js").TranslationsEnginePayload;
