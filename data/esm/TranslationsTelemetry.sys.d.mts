/**
 * Telemetry functions for Translations actors
 */
export class TranslationsTelemetry {
    /**
     * A cached value to hold the current flowId.
     */
    static "__#1264407@#flowId": any;
    /**
     * Logs the telemetry event to the console if enabled by
     * the LOG_TELEMETRY_EVENTS constant.
     */
    static logEventToConsole(eventInfo: any): void;
    /**
     * Telemetry functions for the Translations panel.
     * @returns {Panel}
     */
    static panel(): Panel;
    /**
     * Forces the creation of a new Translations telemetry flowId and returns it.
     * @returns {string}
     */
    static createFlowId(): string;
    /**
     * Returns a Translations telemetry flowId by retrieving the cached value
     * if available, or creating a new one otherwise.
     * @returns {string}
     */
    static getOrCreateFlowId(): string;
    /**
     * Records a telemetry event when full page translation fails.
     *
     * @param {string} errorMessage
     */
    static onError(errorMessage: string): void;
    /**
     * Records a telemetry event when a translation request is sent.
     *
     * @param {object} data
     * @param {string} data.docLangTag
     * @param {string} data.fromLanguage
     * @param {string} data.toLanguage
     * @param {string} data.topPreferredLanguage
     * @param {boolean} data.autoTranslate
     */
    static onTranslate(data: {
        docLangTag: string;
        fromLanguage: string;
        toLanguage: string;
        topPreferredLanguage: string;
        autoTranslate: boolean;
    }): void;
    static onRestorePage(): void;
}
/**
 * Telemetry functions for the Translations panel
 */
declare class Panel {
    /**
     * A value to retain whether this is the user's first time
     * interacting with the translations panel. It is propagated
     * to all events.
     *
     * This value is set only through the onOpen() function.
     */
    static "__#1264408@#isFirstUserInteraction": boolean;
    /**
     * True if this is the user's first time interacting with the
     * Translations panel, otherwise false.
     *
     * @returns {boolean}
     */
    static isFirstUserInteraction(): boolean;
    /**
     * Records a telemetry event when the translations panel is opened.
     *
     * @param {object} data
     * @param {string} data.viewName
     * @param {string} data.docLangTag
     * @param {boolean} data.autoShow
     * @param {boolean} data.maintainFlow
     * @param {boolean} data.openedFromAppMenu
     * @param {boolean} data.isFirstUserInteraction
     */
    static onOpen({ viewName, autoShow, docLangTag, maintainFlow, openedFromAppMenu, isFirstUserInteraction, }: {
        viewName: string;
        docLangTag: string;
        autoShow: boolean;
        maintainFlow: boolean;
        openedFromAppMenu: boolean;
        isFirstUserInteraction: boolean;
    }): void;
    static onClose(): void;
    static onOpenFromLanguageMenu(): void;
    static onChangeFromLanguage(langTag: any): void;
    static onCloseFromLanguageMenu(): void;
    static onOpenToLanguageMenu(): void;
    static onChangeToLanguage(langTag: any): void;
    static onCloseToLanguageMenu(): void;
    static onOpenSettingsMenu(): void;
    static onCloseSettingsMenu(): void;
    static onCancelButton(): void;
    static onChangeSourceLanguageButton(): void;
    static onDismissErrorButton(): void;
    static onRestorePageButton(): void;
    static onTranslateButton(): void;
    static onAlwaysOfferTranslations(toggledOn: any): void;
    static onAlwaysTranslateLanguage(langTag: any, toggledOn: any): void;
    static onNeverTranslateLanguage(langTag: any, toggledOn: any): void;
    static onNeverTranslateSite(toggledOn: any): void;
    static onManageLanguages(): void;
    static onAboutTranslations(): void;
    static onLearnMoreLink(): void;
}
export {};
