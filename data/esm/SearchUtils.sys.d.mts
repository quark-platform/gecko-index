export namespace SearchUtils {
    export { BROWSER_SEARCH_PREF };
    export let SETTINGS_IGNORELIST_KEY: string;
    export let SETTINGS_ALLOWLIST_KEY: string;
    export let OLD_SETTINGS_KEY: string;
    export let NEW_SETTINGS_KEY: string;
    export let OLD_SETTINGS_OVERRIDES_KEY: string;
    export const SETTINGS_KEY: string;
    export const SETTINGS_OVERRIDES_KEY: string;
    export let TOPIC_SEARCH_SERVICE: string;
    export let TOPIC_ENGINE_MODIFIED: string;
    export namespace MODIFIED_TYPE {
        let CHANGED: string;
        let LOADED: string;
        let REMOVED: string;
        let ADDED: string;
        let DEFAULT: string;
        let DEFAULT_PRIVATE: string;
    }
    export namespace URL_TYPE {
        let SUGGEST_JSON: string;
        let SEARCH: string;
        let OPENSEARCH: string;
        let TRENDING_JSON: string;
    }
    export let ENGINES_URLS: {
        "prod-main": string;
        "prod-preview": string;
        "stage-main": string;
        "stage-preview": string;
    };
    export let MAX_ICON_SIZE: number;
    export let DEFAULT_QUERY_CHARSET: string;
    export let DEFAULT_TAG: string;
    export namespace MOZ_PARAM {
        let DATE: string;
        let LOCALE: string;
    }
    export namespace PARAM_PURPOSES {
        let CONTEXTMENU: string;
        let HOMEPAGE: string;
        let KEYWORD: string;
        let NEWTAB: string;
        let SEARCHBAR: string;
    }
    export { LoadListener };
    export let GENERAL_SEARCH_ENGINE_IDS: Set<string>;
    /**
     * Notifies watchers of SEARCH_ENGINE_TOPIC about changes to an engine or to
     * the state of the search service.
     *
     * @param {nsISearchEngine} engine
     *   The engine to which the change applies.
     * @param {string} verb
     *   A verb describing the change.
     *
     * @see nsISearchService.idl
     */
    export function notifyAction(engine: nsISearchEngine, verb: string): void;
    /**
     * Wrapper function for nsIIOService::newURI.
     *
     * @param {string} urlSpec
     *        The URL string from which to create an nsIURI.
     * @returns {nsIURI} an nsIURI object, or null if the creation of the URI failed.
     */
    export function makeURI(urlSpec: string): nsIURI;
    /**
     * Wrapper function for nsIIOService::newChannel.
     *
     * @param {string|nsIURI} url
     *   The URL string from which to create an nsIChannel.
     * @param {nsIContentPolicy} contentPolicyType
     *   The type of document being loaded.
     * @returns {nsIChannel}
     *   an nsIChannel object, or null if the url is invalid.
     */
    export function makeChannel(url: any, contentPolicyType: nsIContentPolicy): nsIChannel;
    /**
     * Tests whether this a partner distribution.
     *
     * @returns {boolean}
     *   Whether this is a partner distribution.
     */
    export function isPartnerBuild(): boolean;
    export const SETTINGS_VERSION: number;
    export const MODIFIED_APP_CHANNEL: string;
    /**
     * Sanitizes a name so that it can be used as an engine name. If it cannot be
     * sanitized (e.g. no valid characters), then it returns a random name.
     *
     * @param {string} name
     *  The name to be sanitized.
     * @returns {string}
     *  The sanitized name.
     */
    export function sanitizeName(name: string): string;
    export function getVerificationHash(name: any): any;
    /**
     * Tests whether the given URI is a secure OpenSearch submission URI or a
     * secure OpenSearch update URI.
     *
     * Note: We don't want to count something served via localhost as insecure.
     * We also don't want to count sites with .onion as their top-level domain
     * as insecure because .onion URLs actually can't use https and are secured
     * in other ways.
     *
     * @param {nsIURI} uri
     *  The URI to be tested.
     * @returns {boolean}
     *  Whether the URI is secure for OpenSearch purposes.
     */
    export function isSecureURIForOpenSearch(uri: nsIURI): boolean;
}
declare const BROWSER_SEARCH_PREF: "browser.search.";
/**
 * Load listener
 */
declare class LoadListener {
    /**
     * Constructor
     *
     * @param {nsIChannel} channel
     *   The initial channel to load from.
     * @param {RegExp} expectedContentType
     *   A regular expression to match the expected content type to.
     * @param {Function} callback
     *   A callback to receive the loaded data. The callback is passed the bytes
     *   (array) and the content type received. The bytes argument may be null if
     *   no data could be loaded.
     */
    constructor(channel: nsIChannel, expectedContentType: RegExp, callback: Function);
    _bytes: any[];
    _callback: any;
    _channel: any;
    _countRead: number;
    _expectedContentType: any;
    _stream: any;
    QueryInterface: any;
    onStartRequest(request: any): void;
    onStopRequest(request: any, statusCode: any): void;
    onDataAvailable(request: any, inputStream: any, offset: any, count: any): void;
    asyncOnChannelRedirect(oldChannel: any, newChannel: any, flags: any, callback: any): void;
    getInterface(iid: any): any;
    onProgress(request: any, progress: any, progressMax: any): void;
    onStatus(request: any, status: any, statusArg: any): void;
}
export {};
