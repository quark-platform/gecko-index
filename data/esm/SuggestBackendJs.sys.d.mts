/**
 * The Suggest JS backend. Not used when the Rust backend is enabled.
 */
export class SuggestBackendJs {
    constructor(...args: any[]);
    get shouldEnable(): boolean;
    /**
     * @returns {RemoteSettings}
     *   The underlying `RemoteSettings` client object.
     */
    get rs(): RemoteSettings;
    /**
     * @returns {EventEmitter}
     *   The client will emit events on this object.
     */
    get emitter(): EventEmitter;
    /**
     * @returns {object}
     *   Global quick suggest configuration stored in remote settings. When the
     *   config changes the `emitter` property will emit a "config-set" event. The
     *   config is an object that looks like this:
     *
     *   {
     *     impression_caps: {
     *       nonsponsored: {
     *         lifetime,
     *         custom: [
     *           { interval_s, max_count },
     *         ],
     *       },
     *       sponsored: {
     *         lifetime,
     *         custom: [
     *           { interval_s, max_count },
     *         ],
     *       },
     *     },
     *     show_less_frequently_cap,
     *   }
     */
    get config(): any;
    /**
     * @returns {Array}
     *   Array of `BasicFeature` instances.
     */
    get features(): any[];
    enable(enabled: any): void;
    /**
     * Registers a quick suggest feature that uses remote settings.
     *
     * @param {BaseFeature} feature
     *   An instance of a `BaseFeature` subclass. See `BaseFeature` for methods
     *   that the subclass must implement.
     */
    register(feature: BaseFeature): void;
    /**
     * Unregisters a quick suggest feature that uses remote settings.
     *
     * @param {BaseFeature} feature
     *   An instance of a `BaseFeature` subclass.
     */
    unregister(feature: BaseFeature): void;
    /**
     * Queries remote settings suggestions from all registered features.
     *
     * @param {string} searchString
     *   The search string.
     * @returns {Array}
     *   The remote settings suggestions. If there are no matches, an empty array
     *   is returned.
     */
    query(searchString: string): any[];
    #private;
}
/**
 * A wrapper around `Map` that handles quick suggest suggestions from remote
 * settings. It maps keywords to suggestions. It has two benefits over `Map`:
 *
 * - The main benefit is that map entries are added in batches on idle to avoid
 *   blocking the main thread for too long, since there can be many suggestions
 *   and keywords.
 * - A secondary benefit is that the interface is tailored to quick suggest
 *   suggestions, which have a `keywords` property.
 */
export class SuggestionsMap {
    /**
     * @returns {Function}
     *   A `mapKeyword` function that maps a keyword to an array containing the
     *   keyword's first word plus every subsequent prefix of the keyword. The
     *   strings in `KEYWORD_PREFIXES_TO_TREAT_AS_SINGLE_WORDS` will modify this
     *   behavior: When a full keyword starts with one of the prefixes in that
     *   list, the generated prefixes will start at that prefix instead of the
     *   first word.
     */
    static get MAP_KEYWORD_PREFIXES_STARTING_AT_FIRST_WORD(): Function;
    static chunkSize: number;
    /**
     * Returns the list of suggestions for a keyword.
     *
     * @param {string} keyword
     *   The keyword.
     * @returns {Array}
     *   The array of suggestions for the keyword. If the keyword isn't in the
     *   map, the array will be empty.
     */
    get(keyword: string): any[];
    /**
     * Adds a list of suggestion objects to the results map. Each suggestion must
     * have a property whose value is an array of keyword strings. The
     * suggestion's keywords will be taken from this array either exactly as they
     * are specified or by generating new keywords from them; see `mapKeyword`.
     *
     * @param {Array} suggestions
     *   Array of suggestion objects.
     * @param {object} options
     *   Options object.
     * @param {string} options.keywordsProperty
     *   The name of the keywords property in each suggestion.
     * @param {Function} options.mapKeyword
     *   If null, the keywords for each suggestion will be taken from the keywords
     *   array exactly as they are specified. Otherwise, this function will be
     *   called for each string in the array, and it should return an array of
     *   strings. The suggestion's final list of keywords will be the union of all
     *   strings returned by this function. See also the `MAP_KEYWORD_*` consts.
     */
    add(suggestions: any[], { keywordsProperty, mapKeyword }?: {
        keywordsProperty: string;
        mapKeyword: Function;
    }): Promise<void>;
    clear(): void;
    #private;
}
