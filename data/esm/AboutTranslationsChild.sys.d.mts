/**
 * @typedef {import("./TranslationsChild.sys.mjs").LanguageIdEngine} LanguageIdEngine
 * @typedef {import("./TranslationsChild.sys.mjs").TranslationsEngine} TranslationsEngine
 * @typedef {import("./TranslationsChild.sys.mjs").SupportedLanguages} SupportedLanguages
 */
/**
 * The AboutTranslationsChild is responsible for coordinating what privileged APIs
 * are exposed to the un-privileged scope of the about:translations page.
 */
export class AboutTranslationsChild extends JSWindowActorChild {
    /** @type {LanguageIdEngine | null} */
    languageIdEngine: LanguageIdEngine | null;
    /** @type {TranslationsEngine | null} */
    translationsEngine: TranslationsEngine | null;
    handleEvent(event: any): void;
    /**
     * Log messages if "browser.translations.logLevel" is set to "All".
     *
     * @param {...any} args
     */
    AT_log(...args: any[]): void;
    /**
     * Report an error to the console.
     *
     * @param {...any} args
     */
    AT_logError(...args: any[]): void;
    /**
     * Returns the app's locale.
     *
     * @returns {Intl.Locale}
     */
    AT_getAppLocale(): Intl.Locale;
    /**
     * Wire this function to the TranslationsChild.
     *
     * @returns {Promise<SupportedLanguages>}
     */
    AT_getSupportedLanguages(): Promise<SupportedLanguages>;
    /**
     * Does this device support the translation engine?
     * @returns {Promise<boolean>}
     */
    AT_isTranslationEngineSupported(): Promise<boolean>;
    /**
     * Creates the LanguageIdEngine which attempts to identify in which
     * human language a string is written.
     *
     * Unlike TranslationsEngine, which handles only a single language pair
     * and must be rebuilt to handle a new language pair, the LanguageIdEngine
     * is a one-to-many engine that can recognize all of its supported languages.
     *
     * Subsequent calls to this function after the engine is initialized will do nothing
     * instead of rebuilding the engine.
     *
     * @returns {Promise<void>}
     */
    AT_createLanguageIdEngine(): Promise<void>;
    /**
     * Creates the TranslationsEngine which is responsible for translating
     * from one language to the other.
     *
     * The instantiated TranslationsEngine is unique to its language pair.
     * In order to translate a different language pair, a new engine must be
     * created for that pair.
     *
     * Subsequent calls to this function will destroy the existing engine and
     * rebuild a new engine for the new language pair.
     *
     * @param {string} fromLanguage
     * @param {string} toLanguage
     * @returns {Promise<void>}
     */
    AT_createTranslationsEngine(fromLanguage: string, toLanguage: string): Promise<void>;
    /**
     * Attempts to identify the human language in which the message is written.
     * @see LanguageIdEngine#identifyLanguage for more detailed documentation.
     *
     * @param {string} message
     * @returns {Promise<{ langTag: string, confidence: number }>}
     */
    AT_identifyLanguage(message: string): Promise<{
        langTag: string;
        confidence: number;
    }>;
    /**
     * @param {string[]} messageBatch
     * @param {number} innerWindowId
     * @returns {Promise<string[]>}
     */
    AT_translate(messageBatch: string[], innerWindowId: number): Promise<string[]>;
    /**
     * This is not strictly necessary, but could free up resources quicker.
     */
    AT_destroyTranslationsEngine(): void;
    /**
     * TODO - Remove this when Intl.Locale.prototype.textInfo is available to
     * content scripts.
     *
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/textInfo
     * https://bugzilla.mozilla.org/show_bug.cgi?id=1693576
     *
     * @param {string} locale
     * @returns {string}
     */
    AT_getScriptDirection(locale: string): string;
    #private;
}
export type LanguageIdEngine = import("./TranslationsChild.sys.mjs").LanguageIdEngine;
export type TranslationsEngine = import("./TranslationsChild.sys.mjs").TranslationsEngine;
export type SupportedLanguages = import("./TranslationsChild.sys.mjs").SupportedLanguages;
