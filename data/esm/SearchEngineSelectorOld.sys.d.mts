/**
 * SearchEngineSelector parses the JSON configuration for
 * search engines and returns the applicable engines depending
 * on their region + locale.
 */
export class SearchEngineSelectorOld {
    /**
     * @param {Function} listener
     *   A listener for configuration update changes.
     */
    constructor(listener: Function);
    QueryInterface: MozQueryInterface;
    _remoteConfig: any;
    _remoteConfigOverrides: any;
    _listenerAdded: boolean;
    /**
     * Handles updating of the configuration. Note that the search service is
     * only updated after a period where the user is observed to be idle.
     *
     * @param {object} options
     *   The options object
     * @param {object} options.data
     *   The data to update
     * @param {Array} options.data.current
     *   The new configuration object
     */
    _onConfigurationUpdated({ data: { current } }: {
        data: {
            current: any[];
        };
    }): void;
    /**
     * Handles updating of the configuration. Note that the search service is
     * only updated after a period where the user is observed to be idle.
     *
     * @param {object} options
     *   The options object
     * @param {object} options.data
     *   The data to update
     * @param {Array} options.data.current
     *   The new configuration object
     */
    _onConfigurationOverridesUpdated({ data: { current } }: {
        data: {
            current: any[];
        };
    }): void;
    _changeListener: Function;
    /**
     * Handles getting the configuration from remote settings.
     */
    getEngineConfiguration(): Promise<any[]>;
    _getConfigurationPromise: Promise<[any[], any[]]>;
    _configuration: any[];
    _configurationOverrides: any[];
    /**
     * Used by tests to get the configuration overrides.
     */
    getEngineConfigurationOverrides(): Promise<any[]>;
    /**
     * Obtains the configuration from remote settings. This includes
     * verifying the signature of the record within the database.
     *
     * If the signature in the database is invalid, the database will be wiped
     * and the stored dump will be used, until the settings next update.
     *
     * Note that this may cause a network check of the certificate, but that
     * should generally be quick.
     *
     * @param {boolean} [firstTime]
     *   Internal boolean to indicate if this is the first time check or not.
     * @returns {Array}
     *   An array of objects in the database, or an empty array if none
     *   could be obtained.
     */
    _getConfiguration(firstTime?: boolean): any[];
    /**
     * Obtains the configuration overrides from remote settings.
     *
     * @returns {Array}
     *   An array of objects in the database, or an empty array if none
     *   could be obtained.
     */
    _getConfigurationOverrides(): any[];
    /**
     * @param {object} options
     *   The options object
     * @param {string} options.locale
     *   Users locale.
     * @param {string} options.region
     *   Users region.
     * @param {string} [options.channel]
     *   The update channel the application is running on.
     * @param {string} [options.distroID]
     *   The distribution ID of the application.
     * @param {string} [options.experiment]
     *   Any associated experiment id.
     * @param {string} [options.name]
     *   The name of the application.
     * @param {string} [options.version]
     *   The version of the application.
     * @returns {object}
     *   An object with "engines" field, a sorted list of engines and
     *   optionally "privateDefault" which is an object containing the engine
     *   details for the engine which should be the default in Private Browsing mode.
     */
    fetchEngineConfiguration({ locale, region, channel, distroID, experiment, name, version, }: {
        locale: string;
        region: string;
        channel?: string;
        distroID?: string;
        experiment?: string;
        name?: string;
        version?: string;
    }): object;
    _sort(defaultEngine: any, privateEngine: any, a: any, b: any): number;
    /**
     * Create an index order to ensure default (and backup default)
     * engines are ordered correctly.
     *
     * @param {object} obj
     *   Object representing the engine configation.
     * @param {object} defaultEngine
     *   The default engine, for comparison to obj.
     * @param {object} privateEngine
     *   The private engine, for comparison to obj.
     * @returns {integer}
     *  Number indicating how this engine should be sorted.
     */
    _sortIndex(obj: object, defaultEngine: object, privateEngine: object): integer;
    /**
     * Is the engine marked to be the default search engine.
     *
     * @param {object} obj - Object representing the engine configation.
     * @returns {boolean} - Whether the engine should be default.
     */
    _isDefault(obj: object): boolean;
    /**
     * Object.assign but ignore some keys
     *
     * @param {object} target - Object to copy to.
     * @param {object} source - Object to copy from.
     * @returns {object} - The source object.
     */
    _copyObject(target: object, source: object): object;
    /**
     * Determines wether the section of the config applies to a user
     * given what region + locale they are using.
     *
     * @param {string} region - The region the user is in.
     * @param {string} locale - The language the user has configured.
     * @param {object} config - Section of configuration.
     * @returns {boolean} - Does the section apply for the region + locale.
     */
    _isInSection(region: string, locale: string, config: object): boolean;
}
