/// <reference types="gecko-types" />
/**
 * AddonSearchEngine represents a search engine defined by an add-on.
 */
export class AddonSearchEngine extends SearchEngine {
    /**
     * Gets the WebExtensionPolicy for an add-on.
     *
     * @param {string} id
     *   The WebExtension id.
     * @returns {WebExtensionPolicy}
     */
    static getWebExtensionPolicy(id: string): WebExtensionPolicy;
    /**
     * Creates a AddonSearchEngine.
     *
     * @param {object} options
     *   The options object
     * @param {boolean} options.isAppProvided
     *   Indicates whether the engine is provided by Firefox, either
     *   shipped in omni.ja or via Normandy. If it is, it will
     *   be treated as read-only.
     * @param {object} [options.details]
     *   An object that simulates the manifest object from a WebExtension.
     * @param {object} [options.json]
     *   An object that represents the saved JSON settings for the engine.
     */
    constructor({ isAppProvided, details, json }?: {
        isAppProvided: boolean;
        details?: object;
        json?: object;
    });
    _extensionID: any;
    _locale: any;
    _initWithJSON(json: any): void;
    /**
     * Call to initalise an instance with extension details. Does not need to be
     * called if json has been passed to the constructor.
     *
     * @param {object} options
     *   The options object.
     * @param {Extension} options.extension
     *   The extension object representing the add-on.
     * @param {object} options.locale
     *   The locale to use from the extension for getting details of the search
     *   engine.
     * @param {object} [options.config]
     *   The search engine configuration for application provided engines, that
     *   may be overriding some of the WebExtension's settings.
     */
    init({ extension, locale, config }: {
        extension: Extension;
        locale: object;
        config?: object;
    }): Promise<void>;
    /**
     * Manages updates to this engine.
     *
     * @param {object} options
     *   The options object.
     * @param {object} [options.configuration]
     *   The search engine configuration for application provided engines, that
     *   may be overriding some of the WebExtension's settings.
     * @param {object} [options.extension]
     *   The extension associated with this search engine, if known.
     * @param {object} [options.manifest]
     *   The extension's manifest associated with this search engine, if known.
     * @param {string} [options.locale]
     *   The locale to use from the extension for getting details of the search
     *   engine.
     */
    update({ configuration, extension, manifest, locale }?: {
        configuration?: object;
        extension?: object;
        manifest?: object;
        locale?: string;
    }): Promise<void>;
    /**
     * This will update the add-on search engine if there is no name change.
     *
     * @param {object} options
     *   The options object.
     * @param {object} [options.configuration]
     *   The search engine configuration for application provided engines, that
     *   may be overriding some of the WebExtension's settings.
     * @param {string} [options.locale]
     *   The locale to use from the extension for getting details of the search
     *   engine.
     * @returns {boolean}
     *   Returns true if the engine was updated, false otherwise.
     */
    updateIfNoNameChange({ configuration, locale }: {
        configuration?: object;
        locale?: string;
    }): boolean;
    /**
     * Creates a JavaScript object that represents this engine.
     *
     * @returns {object}
     *   An object suitable for serialization as JSON.
     */
    toJSON(): object;
    /**
     * Checks to see if this engine's settings are in sync with what the add-on
     * manager has, and reports the results to telemetry.
     */
    checkAndReportIfSettingsValid(): Promise<void>;
    #private;
}
import { SearchEngine } from "resource://gre/modules/SearchEngine.sys.mjs";
