/**
 * @typedef {import("./TranslationsChild.sys.mjs").TranslationsEngine} TranslationsEngine
 * @typedef {import("./TranslationsChild.sys.mjs").SupportedLanguages} SupportedLanguages
 */
/**
 * The AboutTranslationsChild is responsible for coordinating what privileged APIs
 * are exposed to the un-privileged scope of the about:translations page.
 */
export class AboutTranslationsChild extends JSWindowActorChild {
    handleEvent(event: any): void;
    receiveMessage({ name, data }: {
        name: any;
        data: any;
    }): void;
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
     * Expose the #isHtmlTranslation property.
     *
     * @returns {bool}
     */
    AT_isHtmlTranslation(): bool;
    /**
     * Requests a port to the TranslationsEngine process. An engine will be created on
     * the fly for translation requests through this port. This port is unique to its
     * language pair. In order to translate a different language pair, a new port must be
     * created for that pair. The lifecycle of the engine is managed by the
     * TranslationsEngine.
     *
     * @param {string} fromLanguage
     * @param {string} toLanguage
     * @returns {void}
     */
    AT_createTranslationsPort(fromLanguage: string, toLanguage: string): void;
    /**
     * Attempts to identify the human language in which the message is written.
     *
     * @param {string} message
     * @returns {Promise<{ langTag: string, confidence: number }>}
     */
    AT_identifyLanguage(message: string): Promise<{
        langTag: string;
        confidence: number;
    }>;
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
export type TranslationsEngine = import("./TranslationsChild.sys.mjs").TranslationsEngine;
export type SupportedLanguages = import("./TranslationsChild.sys.mjs").SupportedLanguages;
