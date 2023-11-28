export namespace LangPackMatcher {
    export { negotiateLangPackForLanguageMismatch };
    export { ensureLangPackInstalled };
    export { getAppAndSystemLocaleInfo };
    export { setRequestedAppLocales };
    export { getAvailableLocales };
    export { mockable };
}
/**
 * A serializable Intl.Locale.
 */
export type StructuredLocale = {
    baseName: string;
    language: string;
    region: string;
};
/**
 * Attempts to find an appropriate langpack for a given language. The async function
 * is infallible, but may not return a langpack.
 *
 * @returns {{
 *   langPack: LangPack | null,
 *   langPackDisplayName: string | null
 * }}
 */
declare function negotiateLangPackForLanguageMismatch(): {
    langPack: LangPack | null;
    langPackDisplayName: string | null;
};
/**
 * @typedef {LangPack}
 * @type {object}
 * @property {string} target_locale
 * @property {string} url
 * @property {string} hash
 */
/**
 * Ensure that a given lanpack is installed.
 *
 * @param {LangPack} langPack
 * @returns {Promise<boolean>} Success or failure.
 */
declare function ensureLangPackInstalled(langPack: LangPack): Promise<boolean>;
type ensureLangPackInstalled = LangPack;
/**
 * Determine the system and app locales, and how much the locales match.
 *
 * @returns {{
 *  systemLocale: StructuredLocale,
 *  appLocale: StructuredLocale,
 *  matchType: "unknown" | "language-mismatch" | "region-mismatch" | "match",
 * }}
 */
declare function getAppAndSystemLocaleInfo(): {
    systemLocale: StructuredLocale;
    appLocale: StructuredLocale;
    matchType: "unknown" | "language-mismatch" | "region-mismatch" | "match";
};
/**
 * This function is really only setting `Services.locale.requestedLocales`, but it's
 * using the `mockable` object to allow this behavior to be mocked in tests.
 *
 * @param {string[]} locales The BCP 47 locale identifiers.
 */
declare function setRequestedAppLocales(locales: string[]): void;
/**
 * Filter the lastFallbackLocale from availableLocales if it doesn't have all
 * of the needed strings.
 *
 * When the lastFallbackLocale isn't the defaultLocale, then by default only
 * fluent strings are included. To fully use that locale you need the langpack
 * to be installed, so if it isn't installed remove it from availableLocales.
 */
declare function getAvailableLocales(): Promise<string[]>;
declare namespace mockable {
    /**
     * @returns {LangPack[] | null}
     */
    function getAvailableLangpacks(): LangPack[];
    /**
     * Use the AddonManager to install an addon from the URL.
     * @param {LangPack} langPack
     */
    function installLangPack(langPack: LangPack): Promise<boolean>;
    /**
     * Returns the available locales, including the fallback locale, which may not include
     * all of the resources, in cases where the defaultLocale is not "en-US".
     *
     * @returns {string[]}
     */
    function getAvailableLocalesIncludingFallback(): string[];
    /**
     * @returns {string}
     */
    function getDefaultLocale(): string;
    /**
     * @returns {string}
     */
    function getLastFallbackLocale(): string;
    /**
     * @returns {string}
     */
    function getAppLocaleAsBCP47(): string;
    /**
     * @returns {string}
     */
    function getSystemLocale(): string;
    /**
     * @param {string[]} locales The BCP 47 locale identifiers.
     */
    function setRequestedAppLocales(locales: string[]): void;
}
export {};
