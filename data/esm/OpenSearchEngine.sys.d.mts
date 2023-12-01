/// <reference types="gecko-types" />
/**
 * OpenSearchEngine represents an OpenSearch base search engine.
 */
export class OpenSearchEngine extends SearchEngine {
    static getAnonymizedLoadPath(shortName: any, uri: any): string;
    /**
     * Creates a OpenSearchEngine.
     *
     * @param {object} [options]
     *   The options object
     * @param {object} [options.json]
     *   An object that represents the saved JSON settings for the engine.
     * @param {boolean} [options.shouldPersist]
     *   A flag indicating whether the engine should be persisted to disk and made
     *   available wherever engines are used (e.g. it can be set as the default
     *   search engine, used for search shortcuts, etc.). Non-persisted engines
     *   are intended for more limited or temporary use. Defaults to true.
     */
    constructor(options?: {
        json?: object;
        shouldPersist?: boolean;
    });
    _data: any;
    _updateInterval: any;
    _updateURL: any;
    _iconUpdateURL: any;
    _shouldPersist: boolean;
    /**
     * Creates a JavaScript object that represents this engine.
     *
     * @returns {object}
     *   An object suitable for serialization as JSON.
     */
    toJSON(): object;
    /**
     * Retrieves the engine data from a URI. Initializes the engine, flushes to
     * disk, and notifies the search service once initialization is complete.
     *
     * @param {string|nsIURI} uri
     *   The uri to load the search plugin from.
     * @param {Function} [callback]
     *   A callback to receive any details of errors.
     */
    install(uri: string | nsIURI, callback?: Function): void;
    _uri: any;
    /**
     * Handle the successful download of an engine. Initializes the engine and
     * triggers parsing of the data. The engine is then flushed to disk. Notifies
     * the search service once initialization is complete.
     *
     * @param {Function} callback
     *   A callback to receive success or failure notifications. May be null.
     * @param {Array} bytes
     *  The loaded search engine data.
     */
    _onLoad(callback: Function, bytes: any[]): void;
    /**
     * Initialize this Engine object from the collected data.
     */
    _initFromData(): void;
    /**
     * Extracts data from an OpenSearch URL element and creates an EngineURL
     * object which is then added to the engine's list of URLs.
     *
     * @param {HTMLLinkElement} element
     *   The OpenSearch URL element.
     * @throws NS_ERROR_FAILURE if a URL object could not be created.
     *
     * @see http://opensearch.a9.com/spec/1.1/querysyntax/#urltag.
     * @see EngineURL()
     */
    _parseURL(element: HTMLLinkElement): void;
    /**
     * Get the icon from an OpenSearch Image element.
     *
     * @param {HTMLLinkElement} element
     *   The OpenSearch URL element.
     * @see http://opensearch.a9.com/spec/1.1/description/#image
     */
    _parseImage(element: HTMLLinkElement): void;
    /**
     * Extract search engine information from the collected data to initialize
     * the engine object.
     */
    _parse(): void;
    _extensionID: any;
    /**
     * Returns the engine's updateURI if it exists and returns null otherwise
     *
     * @returns {string?}
     */
    get _updateURI(): string;
}
import { SearchEngine } from "resource://gre/modules/SearchEngine.sys.mjs";
