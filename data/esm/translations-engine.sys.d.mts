/**
 * The TranslationsEngine encapsulates the logic for translating messages. It can
 * only be set up for a single language translation pair. In order to change languages
 * a new engine should be constructed.
 *
 * The actual work for the translations happens in a worker. This class manages
 * instantiating and messaging the worker.
 *
 * Keep 1 language engine around in the TranslationsEngine.#cachedEngine cache in case
 * page navigation happens and we can re-use the previous engine. The engines are very
 * heavy-weight, so we only want to keep one around at a time.
 */
export class TranslationsEngine {
    /** @type {null | { languagePairKey: string, enginePromise: Promise<TranslationsEngine> }} */
    static "__#640@#cachedEngine": null | {
        languagePairKey: string;
        enginePromise: Promise<TranslationsEngine>;
    };
    /** @type {null | TimeoutID} */
    static "__#640@#keepAliveTimeout": null | TimeoutID;
    /**
     * Returns a getter function that will create a translations engine on the first
     * call, and then return the cached one. After a timeout when the engine hasn't
     * been used, it is destroyed.
     *
     * @param {TranslationsChild} actor
     * @param {string} fromLanguage
     * @param {string} toLanguage
     * @returns {Promise<TranslationsEngine | null>}
     */
    static getOrCreate(actor: TranslationsChild, fromLanguage: string, toLanguage: string): Promise<TranslationsEngine | null>;
    /**
     * Create a TranslationsEngine and bypass the cache.
     *
     * @param {TranslationsChild} actor
     * @param {string} fromLanguage
     * @param {string} toLanguage
     * @returns {Promise<TranslationsEngine>}
     */
    static create(actor: TranslationsChild, fromLanguage: string, toLanguage: string): Promise<TranslationsEngine>;
    /**
     * Only get the engine from the cache if it exists.
     */
    static getFromCache(fromLanguage: any, toLanguage: any): Promise<TranslationsEngine>;
    /**
     * @param {string} languagePairKey
     */
    static keepAlive(languagePairKey: string): void;
    /**
     * Load the translation engine and translate the page.
     *
     * @param {TranslationsChild} actor
     * @param {{fromLanguage: string, toLanguage: string}} langTags
     * @returns {Promise<void>}
     */
    static translatePage(actor: TranslationsChild, { fromLanguage, toLanguage }: {
        fromLanguage: string;
        toLanguage: string;
    }): Promise<void>;
    /**
     * Stop processing the translation queue. All in-progress messages will be discarded.
     *
     * @param {number} innerWindowId
     */
    static discardTranslationQueue(innerWindowId: number): void;
    /**
     * Construct and initialize the worker.
     *
     * @param {string} fromLanguage
     * @param {string} toLanguage
     * @param {TranslationsEnginePayload} enginePayload - If there is no engine payload
     *   then the engine will be mocked. This allows this class to be used in tests.
     * @param {number} innerWindowId - This only used for creating profiler markers in
     *   the initial creation of the engine.
     */
    constructor(fromLanguage: string, toLanguage: string, enginePayload: TranslationsEnginePayload, innerWindowId: number);
    /**
     * @type {TranslationsDocument | null}
     */
    translatedDoc: TranslationsDocument | null;
    /** @type {string} */
    fromLanguage: string;
    /** @type {string} */
    toLanguage: string;
    languagePairKey: string;
    /** @type {Promise<void>} */
    isReady: Promise<void>;
    /**
     * Translate text without any HTML.
     *
     * @param {string[]} messageBatch
     * @param {number} innerWindowId
     * @returns {Promise<string[]>}
     */
    translateText(messageBatch: string[], innerWindowId: number): Promise<string[]>;
    /**
     * Translate valid HTML. Note that this method throws if invalid markup is provided.
     *
     * @param {string[]} messageBatch
     * @param {number} innerWindowId
     * @returns {Promise<string[]>}
     */
    translateHTML(messageBatch: string[], innerWindowId: number): Promise<string[]>;
    /**
     * The worker should be GCed just fine on its own, but go ahead and signal to
     * the worker that it's no longer needed. This will immediately cancel any in-progress
     * translations.
     */
    terminate(): void;
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
