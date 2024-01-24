/// <reference types="gecko-types" />
/**
 * AppProvidedSearchEngine represents a search engine defined by the
 * search configuration.
 */
export class AppProvidedSearchEngine extends SearchEngine {
    static URL_TYPE_MAP: Map<string, any>;
    /**
     * @param {object} config
     *   The engine config from Remote Settings.
     */
    constructor(config: object);
    _extensionID: any;
    _locale: string;
    /**
     * Update this engine based on new config, used during
     * config upgrades.
  
     * @param {object} options
     *   The options object.
     *
     * @param {object} options.locale
     *   The locale that is being used for the engine.
     * @param {object} options.configuration
     *   The search engine configuration for application provided engines.
     */
    update({ locale, configuration }?: {
        locale: object;
        configuration: object;
    }): void;
    /**
     * This will update the application provided search engine if there is no
     * name change.
     *
     * @param {object} options
     *   The options object.
     * @param {object} [options.configuration]
     *   The search engine configuration for application provided engines.
     * @param {string} [options.locale]
     *   The locale to use for getting details of the search engine.
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
    #private;
}
import { SearchEngine } from "resource://gre/modules/SearchEngine.sys.mjs";
