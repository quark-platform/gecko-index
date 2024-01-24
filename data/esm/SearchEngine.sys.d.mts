/**
 * EngineURL holds a query URL and all associated parameters.
 */
export class EngineURL {
    /**
     * Creates an EngineURL.
     *
     * @param {string} mimeType
     *   The name of the MIME type of the search results returned by this URL.
     * @param {string} requestMethod
     *   The HTTP request method. Must be a case insensitive value of either
     *   "GET" or "POST".
     * @param {string} template
     *   The URL to which search queries should be sent. For GET requests,
     *   must contain the string "{searchTerms}", to indicate where the user
     *   entered search terms should be inserted.
     *
     * @see http://opensearch.a9.com/spec/1.1/querysyntax/#urltag
     *
     * @throws NS_ERROR_NOT_IMPLEMENTED if aType is unsupported.
     */
    constructor(mimeType: string, requestMethod: string, template: string);
    params: any[];
    rels: any[];
    type: string;
    method: string;
    template: string;
    templateHost: any;
    addParam(name: any, value: any, purpose: any): void;
    /**
     * Adds a MozParam to the parameters list for this URL. For purpose based params
     * these are saved as standard parameters, for preference based we save them
     * as a special type.
     *
     * @param {object} param
     *   The parameter to add.
     * @param {string} param.name
     *   The name of the parameter to add to the url.
     * @param {string} [param.condition]
     *   The type of parameter this is, e.g. "pref" for a preference parameter,
     *   or "purpose" for a value-based parameter with a specific purpose. The
     *   default is "purpose".
     * @param {string} [param.value]
     *   The value if it is a "purpose" parameter.
     * @param {string} [param.purpose]
     *   The purpose of the parameter for when it is applied, e.g. for `searchbar`
     *   searches.
     * @param {string} [param.pref]
     *   The preference name of the parameter, that gets appended to
     *   `browser.search.param.`.
     */
    _addMozParam(param: {
        name: string;
        condition?: string;
        value?: string;
        purpose?: string;
        pref?: string;
    }): void;
    getSubmission(searchTerms: any, engine: any, purpose: any): Submission;
    _getTermsParameterName(): any;
    _hasRelation(rel: any): boolean;
    _initWithJSON(json: any): void;
    /**
     * Creates a JavaScript object that represents this URL.
     *
     * @returns {object}
     *   An object suitable for serialization as JSON.
     */
    toJSON(): object;
}
/**
 * SearchEngine represents WebExtension based search engines.
 */
export class SearchEngine {
    /**
     *  Creates a Search Engine.
     *
     * @param {object} options
     *   The options for this search engine.
     * @param {string} [options.id]
     *   The identifier to use for this engine, if none is specified a random
     *   uuid is created.
     * @param {string} options.loadPath
     *   The path of the engine was originally loaded from. Should be anonymized.
     */
    constructor(options?: {
        id?: string;
        loadPath: string;
    });
    QueryInterface: MozQueryInterface;
    _metaData: {};
    _loadPath: any;
    _description: string;
    _engineToUpdate: any;
    _hasPreferredIcon: any;
    _name: any;
    _queryCharset: any;
    _sendAttributionRequest: boolean;
    _orderHint: any;
    _telemetryId: any;
    _engineAddedToStore: boolean;
    _definedAliases: any[];
    _urls: any[];
    _searchUrlQueryParamName: any;
    _searchUrlPublicSuffix: any;
    set _searchForm(value: any);
    get _searchForm(): any;
    /**
     * Attempts to find an EngineURL object in the set of EngineURLs for
     * this Engine that has the given type string.  (This corresponds to the
     * "type" attribute in the "Url" node in the OpenSearch spec.)
     *
     * @param {string} type
     *   The type to match the EngineURL's type attribute.
     * @param {string} [rel]
     *   Only return URLs that with this rel value.
     * @returns {EngineURL|null}
     *   Returns the first matching URL found, null otherwise.
     */
    _getURLOfType(type: string, rel?: string): EngineURL | null;
    /**
     * Creates a key by serializing an object that contains the icon's width
     * and height.
     *
     * @param {number} width
     *   Width of the icon.
     * @param {number} height
     *   Height of the icon.
     * @returns {string}
     *   Key string.
     */
    _getIconKey(width: number, height: number): string;
    /**
     * Add an icon to the icon map used by getIconURIBySize() and getIcons().
     *
     * @param {number} width
     *   Width of the icon.
     * @param {number} height
     *   Height of the icon.
     * @param {string} uriSpec
     *   String with the icon's URI.
     */
    _addIconToMap(width: number, height: number, uriSpec: string): void;
    _iconMapObj: any;
    /**
     * Sets the .iconURI property of the engine. If both aWidth and aHeight are
     * provided an entry will be added to _iconMapObj that will enable accessing
     * icon's data through getIcons() and getIconURIBySize() APIs.
     *
     * @param {string} iconURL
     *   A URI string pointing to the engine's icon. Must have a http[s]
     *   or data scheme. Icons with HTTP[S] schemes will be
     *   downloaded and converted to data URIs for storage in the engine
     *   XML files, if the engine is not built-in.
     * @param {boolean} isPreferred
     *   Whether or not this icon is to be preferred. Preferred icons can
     *   override non-preferred icons.
     * @param {number} [width]
     *   Width of the icon.
     * @param {number} [height]
     *   Height of the icon.
     */
    _setIcon(iconURL: string, isPreferred: boolean, width?: number, height?: number): void;
    _iconURI: any;
    /**
     * Initialize an EngineURL object from metadata.
     *
     * @param {string} type
     *   The url type.
     * @param {object} params
     *   The URL parameters.
     * @param {string | Array} [params.getParams]
     *   Any parameters for a GET method. This is either a query string, or
     *   an array of objects which have name/value pairs.
     * @param {string} [params.method]
     *   The type of method, defaults to GET.
     * @param {string} [params.mozParams]
     *   Any special Mozilla Parameters.
     * @param {string | Array} [params.postParams]
     *   Any parameters for a POST method. This is either a query string, or
     *   an array of objects which have name/value pairs.
     * @param {string} params.template
     *   The url template.
     * @returns {EngineURL}
     *   The newly created EngineURL.
     */
    _getEngineURLFromMetaData(type: string, params: {
        getParams?: string | any[];
        method?: string;
        mozParams?: string;
        postParams?: string | any[];
        template: string;
    }): EngineURL;
    /**
     * Initialize this engine object.
     *
     * @param {object} details
     *   The details of the engine.
     * @param {string} details.name
     *   The name of the engine.
     * @param {string} details.keyword
     *   The keyword for the engine.
     * @param {string} details.iconURL
     *   The url to use for the icon of the engine.
     * @param {string} details.search_url
     *   The search url template for the engine.
     * @param {string} [details.search_url_get_params]
     *   The search url parameters for use with the GET method.
     * @param {string} [details.search_url_post_params]
     *   The search url parameters for use with the POST method.
     * @param {object} [details.params]
     *   Any special Mozilla parameters.
     * @param {string} [details.suggest_url]
     *   The suggestion url template for the engine.
     * @param {string} [details.suggest_url_get_params]
     *   The suggestion url parameters for use with the GET method.
     * @param {string} [details.suggest_url_post_params]
     *   The suggestion url parameters for use with the POST method.
     * @param {string} [details.encoding]
     *   The encoding to use for the engine.
     * @param {string} [details.search_form]
     *   THe search form url for the engine.
     * @param {object} [configuration]
     *   The search engine configuration for application provided engines, that
     *   may be overriding some of the WebExtension's settings.
     */
    _initWithDetails(details: {
        name: string;
        keyword: string;
        iconURL: string;
        search_url: string;
        search_url_get_params?: string;
        search_url_post_params?: string;
        params?: object;
        suggest_url?: string;
        suggest_url_get_params?: string;
        suggest_url_post_params?: string;
        encoding?: string;
        search_form?: string;
    }, configuration?: object): void;
    /**
     * This sets the urls for the search engine based on the supplied parameters.
     * If you add anything here, please consider if it needs to be handled in the
     * overrideWithExtension / removeExtensionOverride functions as well.
     *
     * @param {object} details
     *   The details of the engine.
     * @param {string} details.search_url
     *   The search url template for the engine.
     * @param {string} [details.search_url_get_params]
     *   The search url parameters for use with the GET method.
     * @param {string} [details.search_url_post_params]
     *   The search url parameters for use with the POST method.
     * @param {object} [details.params]
     *   Any special Mozilla parameters.
     * @param {string} [details.suggest_url]
     *   The suggestion url template for the engine.
     * @param {string} [details.suggest_url_get_params]
     *   The suggestion url parameters for use with the GET method.
     * @param {string} [details.suggest_url_post_params]
     *   The suggestion url parameters for use with the POST method.
     * @param {string} [details.encoding]
     *   The encoding to use for the engine.
     * @param {string} [details.search_form]
     *   THe search form url for the engine.
     * @param {object} [configuration]
     *   The search engine configuration for application provided engines, that
     *   may be overriding some of the WebExtension's settings.
     */
    _setUrls(details: {
        search_url: string;
        search_url_get_params?: string;
        search_url_post_params?: string;
        params?: object;
        suggest_url?: string;
        suggest_url_get_params?: string;
        suggest_url_post_params?: string;
        encoding?: string;
        search_form?: string;
    }, configuration?: object): void;
    clickUrl: any;
    checkSearchUrlMatchesManifest(details: any): boolean;
    /**
     * Overrides the urls/parameters with those of the provided extension.
     * The parameters are not saved to the search settings - the code handling
     * the extension should set these on every restart, this avoids potential
     * third party modifications and means that we can verify the WebExtension is
     * still in the allow list.
     *
     * @param {string} extensionID
     *   The WebExtension ID. For Policy engines, this is currently "set-via-policy".
     * @param {object} manifest
     *   An object representing the WebExtensions' manifest.
     */
    overrideWithExtension(extensionID: string, manifest: object): void;
    _overriddenData: {
        urls: any[];
        queryCharset: any;
        searchForm: any;
    };
    /**
     * Resets the overrides for the engine if it has been overridden.
     */
    removeExtensionOverride(): void;
    /**
     * Init from a JSON record.
     *
     * @param {object} json
     *   The json record to use.
     */
    _initWithJSON(json: object): void;
    _filePath: any;
    /**
     * Creates a JavaScript object that represents this engine.
     *
     * @returns {object}
     *   An object suitable for serialization as JSON.
     */
    toJSON(): object;
    setAttr(name: any, val: any): void;
    getAttr(name: any): any;
    clearAttr(name: any): void;
    set alias(val: string);
    /**
     * Get the user-defined alias.
     *
     * @type {string}
     */
    get alias(): string;
    /**
     * Returns a list of aliases, including a user defined alias and
     * a list defined by webextension keywords.
     *
     * @returns {Array}
     */
    get aliases(): any[];
    /**
     * Returns the appropriate identifier to use for telemetry. It is based on
     * the following order:
     *
     * - telemetryId: The telemetry id from the configuration, or derived from
     *                the WebExtension name.
     * - other-<name>: The engine name prefixed by `other-` for non-app-provided
     *                 engines.
     *
     * @returns {string}
     */
    get telemetryId(): string;
    /**
     * Return the built-in identifier of app-provided engines.
     *
     * @returns {string|null}
     *   Returns a valid if this is a built-in engine, null otherwise.
     */
    get identifier(): string;
    get description(): string;
    set hidden(val: any);
    get hidden(): any;
    set hideOneOffButton(val: any);
    get hideOneOffButton(): any;
    get iconURI(): any;
    get _iconURL(): any;
    get _location(): any;
    /**
     * Whether or not this engine is provided by the application, e.g. it is
     * in the list of configured search engines.
     *
     * @returns {boolean}
     *   This returns false for most engines, but may be overridden by particular
     *   engine types, such as add-on engines which are used by the application.
     */
    get isAppProvided(): boolean;
    /**
     * Whether or not this engine is an in-memory only search engine.
     * These engines are typically application provided or policy engines,
     * where they are loaded every time on SearchService initialization
     * using the policy JSON or the extension manifest. Minimal details of the
     * in-memory engines are saved to disk, but they are never loaded
     * from the user's saved settings file.
     *
     * @returns {boolean}
     *   This results false for most engines, but may be overridden by particular
     *   engine types, such as add-on engines and policy engines.
     */
    get inMemory(): boolean;
    get isGeneralPurposeEngine(): boolean;
    get _hasUpdates(): boolean;
    get name(): any;
    /**
     * The searchForm URL points to the engine's organic search page. This should
     * not contain neither search term parameters nor partner codes, but may
     * contain parameters which set the engine in the correct way.
     *
     * This URL is typically the prePath and filePath of the search submission URI,
     * but may vary for different engines. For example, some engines may use a
     * different domain, e.g. https://sub.example.com for the search URI but
     * https://example.org/ for the organic search page.
     *
     * @returns {string}
     */
    get searchForm(): string;
    get sendAttributionRequest(): boolean;
    get queryCharset(): any;
    /**
     * Gets an object that contains information about what to send to the search
     * engine, for a request. This will be a URI and may also include data for POST
     * requests.
     *
     * @param {string} searchTerms
     *   The search term(s) for the submission.
     *   Note: If an empty data string is supplied, the search form of the search
     *   engine will be returned. This is intentional, as in some cases on the current
     *   UI an empty search is intended to open the search engine's home/search page.
     * @param {lazy.SearchUtils.URL_TYPE} [responseType]
     *   The MIME type that we'd like to receive in response
     *   to this submission.  If null, will default to "text/html".
     * @param {string} [purpose]
     *   A string that indicates the context of the search request. This may then
     *   be used to provide different submission data depending on the context.
     * @returns {nsISearchSubmission|null}
     *   The submission data. If no appropriate submission can be determined for
     *   the request type, this may be null.
     */
    getSubmission(searchTerms: string, responseType?: lazy.SearchUtils.URL_TYPE, purpose?: string): nsISearchSubmission | null;
    /**
     * Returns a search URL with no search terms. This is typically used for
     * purposes where we want to check something on the URL, but not use it for
     * an actual submission to the search engine.
     *
     * Note: getSubmission cannot be used for this case, as that returns the
     * search form when passed an empty string.
     *
     * @returns {nsIURI}
     */
    get searchURLWithNoTerms(): nsIURI;
    /**
     * Returns the search term of a possible search result URI if and only if:
     * - The URI has the same scheme, host, and path as the engine.
     * - All query parameters of the URI have a matching name and value in the engine.
     * - An exception to the equality check is the engine's termsParameterName
     *   value, which contains a placeholder, i.e. {searchTerms}.
     * - If an engine has query parameters with "null" values, they will be ignored.
     *
     * @param {nsIURI} uri
     *   A URI that may or may not be from a search result matching the engine.
     *
     * @returns {string}
     *   A string representing the termsParameterName value of the URI,
     *   or an empty string if the URI isn't matched to the engine.
     */
    searchTermFromResult(uri: nsIURI): string;
    get searchUrlQueryParamName(): any;
    get searchUrlPublicSuffix(): any;
    supportsResponseType(type: any): boolean;
    get searchUrlDomain(): any;
    /**
     * @returns {object}
     *   URL parsing properties used by _buildParseSubmissionMap.
     */
    getURLParsingInfo(): object;
    get wrappedJSObject(): this;
    /**
     * Returns a string with the URL to an engine's icon matching both width and
     * height. Returns null if icon with specified dimensions is not found.
     *
     * @param {number} width
     *   Width of the requested icon.
     * @param {number} height
     *   Height of the requested icon.
     * @returns {string|null}
     */
    getIconURLBySize(width: number, height: number): string | null;
    /**
     * Gets an array of all available icons. Each entry is an object with
     * width, height and url properties. width and height are numeric and
     * represent the icon's dimensions. url is a string with the URL for
     * the icon.
     *
     * @returns {Array<object>}
     *   An array of objects with width/height/url parameters.
     */
    getIcons(): Array<object>;
    /**
     * Opens a speculative connection to the engine's search URI
     * (and suggest URI, if different) to reduce request latency
     *
     * @param {object} options
     *   The options object
     * @param {DOMWindow} options.window
     *   The content window for the window performing the search.
     * @param {object} options.originAttributes
     *   The originAttributes for performing the search
     * @throws NS_ERROR_INVALID_ARG if options is omitted or lacks required
     *         elements
     */
    speculativeConnect(options: {
        window: DOMWindow;
        originAttributes: object;
    }): void;
    get id(): string;
    #private;
}
/**
 * Implements nsISearchSubmission.
 */
declare class Submission {
    constructor(uri: any, postData?: any);
    QueryInterface: MozQueryInterface;
    _uri: any;
    _postData: any;
    get uri(): any;
    get postData(): any;
}
export {};
