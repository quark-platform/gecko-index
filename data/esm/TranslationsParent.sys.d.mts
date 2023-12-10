/**
 * @typedef {import("../translations").TranslationModelRecord} TranslationModelRecord
 * @typedef {import("../translations").RemoteSettingsClient} RemoteSettingsClient
 * @typedef {import("../translations").LanguageIdEngineMockedPayload} LanguageIdEngineMockedPayload
 * @typedef {import("../translations").LanguageTranslationModelFiles} LanguageTranslationModelFiles
 * @typedef {import("../translations").WasmRecord} WasmRecord
 * @typedef {import("../translations").LangTags} LangTags
 * @typedef {import("../translations").LanguagePair} LanguagePair
 * @typedef {import("../translations").SupportedLanguages} SupportedLanguages
 * @typedef {import("../translations").LanguageIdModelRecord} LanguageIdModelRecord
 * @typedef {import("../translations").TranslationErrors} TranslationErrors
 */
/**
 * @typedef {Object} TranslationPair
 * @prop {string} fromLanguage
 * @prop {string} toLanguage
 * @prop {string} [fromDisplayLanguage]
 * @prop {string} [toDisplayLanguage]
 */
/**
 * The translations parent is used to orchestrate translations in Firefox. It can
 * download the wasm translation engines, and the machine learning language models.
 *
 * See Bug 971044 for more details of planned work.
 */
export class TranslationsParent extends JSWindowActorParent {
    /**
     * Remember the detected languages on a page reload. This will keep the translations
     * button from disappearing and reappearing, which causes the button to lose focus.
     *
     * @type {LangTags | null} previousDetectedLanguages
     */
    static "__#1665702@#previousDetectedLanguages": LangTags | null;
    /**
     * The remote settings client that retrieves the language-identification model binary.
     *
     * @type {RemoteSettingsClient | null}
     */
    static "__#1665702@#languageIdModelsRemoteClient": RemoteSettingsClient | null;
    /**
     * A map of the TranslationModelRecord["id"] to the record of the model in Remote Settings.
     * Used to coordinate the downloads.
     *
     * @type {null | Promise<Map<string, TranslationModelRecord>>}
     */
    static "__#1665702@#translationModelRecords": null | Promise<Map<string, TranslationModelRecord>>;
    /**
     * The RemoteSettingsClient that downloads the translation models.
     *
     * @type {RemoteSettingsClient | null}
     */
    static "__#1665702@#translationModelsRemoteClient": RemoteSettingsClient | null;
    /**
     * The RemoteSettingsClient that downloads the wasm binaries.
     *
     * @type {RemoteSettingsClient | null}
     */
    static "__#1665702@#translationsWasmRemoteClient": RemoteSettingsClient | null;
    /**
     * The page may auto-translate due to user settings. On a page restore, always
     * skip the page restore logic.
     */
    static "__#1665702@#isPageRestored": boolean;
    /**
     * Allows the actor's behavior to be changed when the translations engine is mocked via
     * a dummy RemoteSettingsClient.
     *
     * @type {bool}
     */
    static "__#1665702@#isTranslationsEngineMocked": bool;
    /**
     * The language identification engine can be mocked for testing
     * by pre-defining this value.
     *
     * @type {string | null}
     */
    static "__#1665702@#mockedLangTag": string | null;
    /**
     * The language identification engine can be mocked for testing
     * by pre-defining this value.
     *
     * @type {number | null}
     */
    static "__#1665702@#mockedLanguageIdConfidence": number | null;
    /**
     * @type {null | Promise<boolean>}
     */
    static "__#1665702@#isTranslationsEngineSupported": null | Promise<boolean>;
    /**
     * When reloading the page, store the translation pair that needs translating.
     *
     * @type {null | TranslationPair}
     */
    static "__#1665702@#translateOnPageReload": null | TranslationPair;
    /**
     * An ordered list of preferred languages based on:
     *   1. App languages
     *   2. Web requested languages
     *   3. OS language
     *
     * @type {null | string[]}
     */
    static "__#1665702@#preferredLanguages": null | string[];
    /**
     * The value of navigator.languages.
     *
     * @type {null | Set<string>}
     */
    static "__#1665702@#webContentLanguages": null | Set<string>;
    static "__#1665702@#observingLanguages": boolean;
    static MAX_CONCURRENT_DOWNLOADS: number;
    static MAX_DOWNLOAD_RETRIES: number;
    static "__#1665702@#hostsOffered": Set<any>;
    static testAutomaticPopup: boolean;
    /**
     * Telemetry functions for Translations
     * @returns {TranslationsTelemetry}
     */
    static telemetry(): TranslationsTelemetry;
    /**
     * TODO(Bug 1834306) - Cu.isInAutomation doesn't recognize Marionette and RemoteAgent
     * tests.
     */
    static isInAutomation(): any;
    /**
     * This is for testing purposes.
     */
    static resetHostsOffered(): void;
    /**
     * Detect if Wasm SIMD is supported, and cache the value. It's better to check
     * for support before downloading large binary blobs to a user who can't even
     * use the feature. This function also respects mocks and simulating unsupported
     * engines.
     *
     * @type {Promise<boolean>}
     */
    static getIsTranslationsEngineSupported(): Promise<boolean>;
    /**
     * Invokes the provided callback after retrieving whether the translations engine is supported.
     * @param {function(boolean)} callback - The callback which takes a boolean argument that will
     *                                       be true if the engine is supported and false otherwise.
     */
    static onIsTranslationsEngineSupported(callback: (arg0: boolean) => any): void;
    /**
     * Only translate pages that match certain protocols, that way internal pages like
     * about:* pages will not be translated. Keep this logic up to date with the "matches"
     * array in the `toolkit/modules/ActorManagerParent.sys.mjs` definition.
     *
     * @param {string} scheme - The URI spec
     * @returns {boolean}
     */
    static isRestrictedPage(scheme: string): boolean;
    static "__#1665702@#resetPreferredLanguages"(): void;
    static observe(_subject: any, topic: any, _data: any): Promise<void>;
    /**
     * Provide a way for tests to override the system locales.
     * @type {null | string[]}
     */
    static mockedSystemLocales: null | string[];
    /**
     * The "Accept-Language" values that the localizer or user has indicated for
     * the preferences for the web. https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language
     *
     * Note that this preference always has English in the fallback chain, even if the
     * user doesn't actually speak English, and to other languages they potentially do
     * not speak. However, this preference will be used as an indication that a user may
     * prefer this language.
     *
     * https://transvision.flod.org/string/?entity=toolkit/chrome/global/intl.properties:intl.accept_languages&repo=gecko_strings
     */
    static getWebContentLanguages(): Set<string>;
    /**
     * An ordered list of preferred languages based on:
     *
     *   1. App languages
     *   2. Web requested languages
     *   3. OS language
     *
     * @returns {string[]}
     */
    static getPreferredLanguages(): string[];
    /**
     * @param {string} fromLanguage
     * @param {string} toLanguage
     */
    static getTranslationsEnginePayload(fromLanguage: string, toLanguage: string): Promise<{
        bergamotWasmArrayBuffer: ArrayBuffer;
        languageModelFiles: import("../translations").LanguageTranslationModelFiles[];
        isMocked: bool;
    }>;
    /**
     * Returns true if translations should auto-translate from the given
     * language, otherwise returns false.
     *
     * @param {LangTags} langTags
     * @returns {boolean}
     */
    static "__#1665702@#maybeAutoTranslate"(langTags: LangTags): boolean;
    /** @type {Promise<LanguageIdModelRecord> | null} */
    static "__#1665702@#languageIdModelRecord": Promise<LanguageIdModelRecord> | null;
    /**
     * Retrieves the language-identification model binary from remote settings.
     *
     * @returns {Promise<ArrayBuffer>}
     */
    static "__#1665702@#getLanguageIdModelArrayBuffer"(): Promise<ArrayBuffer>;
    /**
     * Initializes the RemoteSettingsClient for the language-identification model binary.
     *
     * @returns {RemoteSettingsClient}
     */
    static "__#1665702@#getLanguageIdModelRemoteClient"(): RemoteSettingsClient;
    /** @type {Promise<LanguageIdModelRecord> | null} */
    static "__#1665702@#languageIdWasmRecord": Promise<LanguageIdModelRecord> | null;
    /**
     * Retrieves the language-identification wasm binary from remote settings.
     *
     * @returns {Promise<ArrayBuffer>}
     */
    static "__#1665702@#getLanguageIdWasmArrayBuffer"(): Promise<ArrayBuffer>;
    /**
     * Creates a lookup key that is unique to each fromLanguage-toLanguage pair.
     *
     * @param {string} fromLanguage
     * @param {string} toLanguage
     * @returns {string}
     */
    static languagePairKey(fromLanguage: string, toLanguage: string): string;
    /**
     * The cached language pairs.
     * @type {Promise<Array<LanguagePair>> | null}
     */
    static "__#1665702@#languagePairs": Promise<Array<LanguagePair>> | null;
    /**
     * Get the list of translation pairs supported by the translations engine.
     *
     * @returns {Promise<Array<LanguagePair>>}
     */
    static getLanguagePairs(): Promise<Array<LanguagePair>>;
    /**
     * Get the list of languages and their display names, sorted by their display names.
     * This is more expensive of a call than getLanguagePairs since the display names
     * are looked up.
     *
     * This is all of the information needed to render dropdowns for translation
     * language selection.
     *
     * @returns {Promise<SupportedLanguages>}
     */
    static getSupportedLanguages(): Promise<SupportedLanguages>;
    /**
     * Create a unique list of languages, sorted by the display name.
     *
     * @param {Object} supportedLanguages
     * @returns {Array<{ langTag: string, displayName: string}}
     */
    static getLanguageList(supportedLanguages: any): Array<{
        langTag: string;
        displayName: string;
    }>;
    /**
     * @param {Object} event
     * @param {Object} event.data
     * @param {TranslationModelRecord[]} event.data.created
     * @param {TranslationModelRecord[]} event.data.updated
     * @param {TranslationModelRecord[]} event.data.deleted
     */
    static "__#1665702@#handleTranslationsModelsSync"({ data: { created, updated, deleted }, }: {
        data: {
            created: TranslationModelRecord[];
            updated: TranslationModelRecord[];
            deleted: TranslationModelRecord[];
        };
    }): Promise<void>;
    /**
     * Lazily initializes the RemoteSettingsClient for the language models.
     *
     * @returns {RemoteSettingsClient}
     */
    static "__#1665702@#getTranslationModelsRemoteClient"(): RemoteSettingsClient;
    /**
     * Retrieves the maximum version of each record in the RemoteSettingsClient.
     *
     * If the client contains two different-version copies of the same record (e.g. 1.0 and 1.1)
     * then only the 1.1-version record will be returned in the resulting collection.
     *
     * @param {RemoteSettingsClient} remoteSettingsClient
     * @param {Object} [options]
     *   @param {Object} [options.filters={}]
     *     The filters to apply when retrieving the records from RemoteSettings.
     *     Filters should correspond to properties on the RemoteSettings records themselves.
     *     For example, A filter to retrieve only records with a `fromLang` value of "en" and a `toLang` value of "es":
     *     { filters: { fromLang: "en", toLang: "es" } }
     *   @param {Function} [options.lookupKey=(record => record.name)]
     *     The function to use to extract a lookup key from each record.
     *     This function should take a record as input and return a string that represents the lookup key for the record.
     *     For most record types, the name (default) is sufficient, however if a collection contains records with
     *     non-unique name values, it may be necessary to provide an alternative function here.
     * @returns {Array<TranslationModelRecord | LanguageIdModelRecord | WasmRecord>}
     */
    static getMaxVersionRecords(remoteSettingsClient: RemoteSettingsClient, { filters, lookupKey }?: {
        filters?: any;
        lookupKey?: Function;
    }): Array<TranslationModelRecord | LanguageIdModelRecord | WasmRecord>;
    /**
     * Lazily initializes the model records, and returns the cached ones if they
     * were already retrieved. The key of the returned `Map` is the record id.
     *
     * @returns {Promise<Map<string, TranslationModelRecord>>}
     */
    static "__#1665702@#getTranslationModelRecords"(): Promise<Map<string, TranslationModelRecord>>;
    /**
     * This implementation assumes that every language pair has access to the
     * pivot language. If any languages are added without a pivot language, or the
     * pivot language is changed, then this implementation will need a more complicated
     * language solver. This means that any UI pickers would need to be updated, and
     * the pivot language selection would need a solver.
     *
     * @param {TranslationModelRecord[] | LanguagePair[]} records
     */
    static ensureLanguagePairsHavePivots(records: TranslationModelRecord[] | LanguagePair[]): import("../translations").LanguagePair[];
    /**
     * Lazily initializes the RemoteSettingsClient for the downloaded wasm binary data.
     *
     * @returns {RemoteSettingsClient}
     */
    static "__#1665702@#getTranslationsWasmRemoteClient"(): RemoteSettingsClient;
    /** @type {Promise<WasmRecord> | null} */
    static "__#1665702@#bergamotWasmRecord": Promise<WasmRecord> | null;
    /**
     * Bergamot is the translation engine that has been compiled to wasm. It is shipped
     * to the user via Remote Settings.
     *
     * https://github.com/mozilla/bergamot-translator/
     */
    /**
     * @returns {Promise<ArrayBuffer>}
     */
    static "__#1665702@#getBergamotWasmArrayBuffer"(): Promise<ArrayBuffer>;
    /**
     * Deletes language files that match a language.
     *
     * @param {string} requestedLanguage The BCP 47 language tag.
     */
    static deleteLanguageFiles(language: any): Promise<any[]>;
    /**
     * Download language files that match a language.
     *
     * @param {string} requestedLanguage The BCP 47 language tag.
     */
    static downloadLanguageFiles(language: any): Promise<void>;
    /**
     * Download all files used for translations.
     */
    static downloadAllFiles(): Promise<void>;
    /**
     * Delete all language model files.
     * @returns {Promise<string[]>} A list of record IDs.
     */
    static deleteAllLanguageFiles(): Promise<string[]>;
    /**
     * Only returns true if all language files are present for a requested language.
     * It's possible only half the files exist for a pivot translation into another
     * language, or there was a download error, and we're still missing some files.
     *
     * @param {string} requestedLanguage The BCP 47 language tag.
     */
    static hasAllFilesForLanguage(requestedLanguage: string): Promise<boolean>;
    /**
     * Get the necessary files for translating to and from the app language and a
     * requested language. This may require the files for a pivot language translation
     * if there is no language model for a direct translation.
     *
     * @param {string} requestedLanguage The BCP 47 language tag.
     * @param {boolean} isForDeletion - Return a more restrictive set of languages, as
     *                  these files are marked for deletion. We don't want to remove
     *                  files that are needed for some other language's pivot translation.
     * @returns {Set<TranslationModelRecord>}
     */
    static getRecordsForTranslatingToAndFromAppLanguage(requestedLanguage: string, isForDeletion?: boolean): Set<TranslationModelRecord>;
    /**
     * Gets the language model files in an array buffer by downloading attachments from
     * Remote Settings, or retrieving them from the local cache. Each translation
     * requires multiple files.
     *
     * Results are only returned if the model is found.
     *
     * @param {string} fromLanguage
     * @param {string} toLanguage
     * @param {boolean} withQualityEstimation
     * @returns {null | LanguageTranslationModelFiles}
     */
    static getLanguageTranslationModelFiles(fromLanguage: string, toLanguage: string, withQualityEstimation?: boolean): null | LanguageTranslationModelFiles;
    /**
     * For testing purposes, allow the Translations Engine to be mocked. If called
     * with `null` the mock is removed.
     *
     * @param {null | RemoteSettingsClient} [translationModelsRemoteClient]
     * @param {null | RemoteSettingsClient} [translationsWasmRemoteClient]
     */
    static mockTranslationsEngine(translationModelsRemoteClient?: null | RemoteSettingsClient, translationsWasmRemoteClient?: null | RemoteSettingsClient): void;
    /**
     * Most values are cached for performance, in tests we want to be able to clear them.
     */
    static clearCache(): void;
    /**
     * Remove the mocks for the translations engine, make sure and call clearCache after
     * to remove the cached values.
     */
    static unmockTranslationsEngine(): void;
    /**
     * For testing purposes, allow the LanguageIdEngine to be mocked. If called
     * with `null` in each argument, the mock is removed.
     *
     * @param {string} langTag - The BCP 47 language tag.
     * @param {number} confidence  - The confidence score of the detected language.
     * @param {RemoteSettingsClient} client
     */
    static mockLanguageIdentification(langTag: string, confidence: number, client: RemoteSettingsClient): void;
    /**
     * Remove the mocks for the language identification, make sure and call clearCache after
     * to remove the cached values.
     */
    static unmockLanguageIdentification(): void;
    /**
     * Report an error. Having this as a method allows tests to check that an error
     * was properly reported.
     * @param {Error} error - Providing an Error object makes sure the stack is properly
     *                        reported.
     * @param {any[]} args - Any args to pass on to console.error.
     */
    static reportError(error: Error, ...args: any[]): void;
    /**
     * Keep track of when the location changes.
     */
    static "__#1665702@#locationChangeId": number;
    static onLocationChange(browser: any): void;
    /**
     * Is this actor active for the current location change?
     *
     * @param {number} locationChangeId - The id sent by the "TranslationsParent:LanguageState" event.
     * @returns {boolean}
     */
    static isActiveLocation(locationChangeId: number): boolean;
    /**
     * The pref for if we can always offer a translation when it's available.
     */
    static shouldAlwaysOfferTranslations(): any;
    /**
     * Returns true if the given language tag is present in the always-translate
     * languages preference, otherwise false.
     *
     * @param {LangTags} langTags
     * @returns {boolean}
     */
    static shouldAlwaysTranslateLanguage(langTags: LangTags): boolean;
    /**
     * Returns true if the given language tag is present in the never-translate
     * languages preference, otherwise false.
     *
     * @param {string} langTag - A BCP-47 language tag
     * @returns {boolean}
     */
    static shouldNeverTranslateLanguage(langTag: string): boolean;
    /**
     * Removes the given language tag from the given preference.
     *
     * @param {string} langTag - A BCP-47 language tag
     * @param {string} prefName - The pref name
     */
    static "__#1665702@#removeLangTagFromPref"(langTag: string, prefName: string): void;
    /**
     * Adds the given language tag to the given preference.
     *
     * @param {string} langTag - A BCP-47 language tag
     * @param {string} prefName - The pref name
     */
    static "__#1665702@#addLangTagToPref"(langTag: string, prefName: string): void;
    /**
     * Toggles the always-translate language preference by adding the language
     * to the pref list if it is not present, or removing it if it is present.
     *
     * @param {LangTags} langTags
     * @returns {boolean}
     *  True if always-translate was enabled for this language.
     *  False if always-translate was disabled for this language.
     */
    static toggleAlwaysTranslateLanguagePref(langTags: LangTags): boolean;
    /**
     * Toggle the automatically popup pref, which will either
     * enable or disable translations being offered to the user.
     *
     * @returns {boolean}
     *  True if offering translations was enabled by this call.
     *  False if offering translations was disabled by this call.
     */
    static toggleAutomaticallyPopupPref(): boolean;
    /**
     * Toggles the never-translate language preference by adding the language
     * to the pref list if it is not present, or removing it if it is present.
     *
     * @param {string} langTag - A BCP-47 language tag
     * @returns {boolean} Whether the pref was toggled on or off for this langTag.
     *  True if never-translate was enabled for this language.
     *  False if never-translate was disabled for this language.
     */
    static toggleNeverTranslateLanguagePref(langTag: string): boolean;
    /**
     * Contains the state that would affect UI. Anytime this state is changed, a dispatch
     * event is sent so that UI can react to it. The actor is inside of /toolkit and
     * needs a way of notifying /browser code (or other users) of when the state changes.
     *
     * @type {TranslationsLanguageState}
     */
    languageState: TranslationsLanguageState;
    /**
     * The cached URI spec where the panel was first ever shown, as determined by the
     * browser.translations.panelShown pref.
     *
     * Holding on to this URI value allows us to show the introductory message in the panel
     * when the panel opens, as long as the active panel is open on that particular URI.
     *
     * @type {string | null}
     */
    firstShowUriSpec: string | null;
    actorCreated(): void;
    /**
     * Offer translations (for instance by automatically opening the popup panel) whenever
     * languages are detected, but only do it once per host per session.
     * @param {LangTags} detectedLanguages
     */
    maybeOfferTranslations(detectedLanguages: LangTags): void;
    receiveMessage({ name, data }: {
        name: any;
        data: any;
    }): Promise<any>;
    isEngineReady: boolean;
    /**
     * @param {string} fromLanguage
     * @param {string} toLanguage
     * @param {boolean} reportAsAutoTranslate - In telemetry, report this as
     *   an auto-translate.
     */
    translate(fromLanguage: string, toLanguage: string, reportAsAutoTranslate: boolean): void;
    /**
     * Restore the page to the original language by doing a hard reload.
     */
    restorePage(): void;
    queryIdentifyLanguage(): Promise<any>;
    /**
     * Returns the language from the document element.
     *
     * @returns {Promise<string>}
     */
    queryDocumentElementLang(): Promise<string>;
    /**
     * @param {LangTags} langTags
     */
    shouldAutoTranslate(langTags: LangTags): boolean;
    /**
     * Returns the lang tags that should be offered for translation. This is in the parent
     * rather than the child to remove the per-content process memory allocation amount.
     *
     * @param {string} [documentElementLang]
     * @param {string} [href]
     * @returns {Promise<LangTags | null>} - Returns null if the actor was destroyed before
     *   the result could be resolved.
     */
    getDetectedLanguages(documentElementLang?: string, href?: string): Promise<LangTags | null>;
    /**
     * Returns true if the current site is denied permissions to translate,
     * otherwise returns false.
     *
     * @returns {Promise<boolean>}
     */
    shouldNeverTranslateSite(): Promise<boolean>;
    /**
     * Toggles the never-translate site permissions by adding DENY_ACTION to
     * the site principal if it is not present, or removing it if it is present.
     *
     * @returns {boolean}
     *  True if never-translate was enabled for this site.
     *  False if never-translate was disabled for this site.
     */
    toggleNeverTranslateSitePermissions(): boolean;
    didDestroy(): void;
    #private;
}
export type QueueItem = {
    download: Function;
    onSuccess?: Function;
    onFailure?: Function;
    retriesLeft?: number;
};
export type TranslationModelRecord = import("../translations").TranslationModelRecord;
export type RemoteSettingsClient = import("../translations").RemoteSettingsClient;
export type LanguageIdEngineMockedPayload = import("../translations").LanguageIdEngineMockedPayload;
export type LanguageTranslationModelFiles = import("../translations").LanguageTranslationModelFiles;
export type WasmRecord = import("../translations").WasmRecord;
export type LangTags = import("../translations").LangTags;
export type LanguagePair = import("../translations").LanguagePair;
export type SupportedLanguages = import("../translations").SupportedLanguages;
export type LanguageIdModelRecord = import("../translations").LanguageIdModelRecord;
export type TranslationErrors = import("../translations").TranslationErrors;
export type TranslationPair = {
    fromLanguage: string;
    toLanguage: string;
    fromDisplayLanguage?: string;
    toDisplayLanguage?: string;
};
/**
 * State that affects the UI. Any of the state that gets set triggers a dispatch to update
 * the UI.
 */
declare class TranslationsLanguageState {
    /**
     * @param {TranslationsParent} actor
     * @param {LangTags | null} previousDetectedLanguages
     */
    constructor(actor: TranslationsParent, previousDetectedLanguages?: LangTags | null);
    /**
     * Dispatch anytime the language details change, so that any UI can react to it.
     */
    dispatch(): void;
    set requestedTranslationPair(requestedTranslationPair: TranslationPair);
    /**
     * When a translation is requested, this contains the translation pair. This means
     * that the TranslationsChild should be creating a TranslationsDocument and keep
     * the page updated with the target language.
     *
     * @returns {TranslationPair | null}
     */
    get requestedTranslationPair(): TranslationPair;
    set detectedLanguages(detectedLanguages: import("../translations").LangTags);
    /**
     * The TranslationsChild will detect languages and offer them up for translation.
     * The results are stored here.
     *
     * @returns {LangTags | null}
     */
    get detectedLanguages(): import("../translations").LangTags;
    set locationChangeId(locationChangeId: number);
    /**
     * This id represents the last location change that happened for this actor. This
     * allows the UI to disambiguate when there are races and out of order events that
     * are dispatched. Only the most up to date `locationChangeId` is used.
     *
     * @returns {number}
     */
    get locationChangeId(): number;
    set error(error: "engine-load-error");
    /**
     * The last error that occured during translation.
     */
    get error(): "engine-load-error";
    set isEngineReady(isEngineReady: boolean);
    /**
     * Stores when the translations engine is ready. The wasm and language files must
     * be downloaded, which can take some time.
     */
    get isEngineReady(): boolean;
    #private;
}
export {};
