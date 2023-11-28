/**
 * PolicySearchEngine represents a search engine defined by an enterprise
 * policy.
 */
export class PolicySearchEngine {
    /**
     * Creates a PolicySearchEngine.
     *
     * @param {object} options
     *   The options for this search engine.
     * @param {object} [options.details]
     *   An object with the details for this search engine. See
     *   nsISearchService.addPolicyEngine for more details.
     * @param {object} [options.json]
     *   An object that represents the saved JSON settings for the engine.
     */
    constructor(options?: {
        details?: object;
        json?: object;
    });
    /**
     * Whether or not this engine is an in-memory only search engine.
     * These engines are typically application provided or policy engines,
     * where they are loaded every time on SearchService initialization
     * using the policy JSON or the extension manifest. Minimal details of the
     * in-memory engines are saved to disk, but they are never loaded
     * from the user's saved settings file.
     *
     * @returns {boolean}
     *   All policy engines are in-memory, so this always returns true.
     */
    get inMemory(): boolean;
    /**
     * Returns the appropriate identifier to use for telemetry.
     *
     * @returns {string}
     */
    get telemetryId(): string;
    /**
     * Updates a search engine that is specified from enterprise policies.
     *
     * @param {object} details
     *   An object that simulates the manifest object from a WebExtension. See
     *   nsISearchService.updatePolicyEngine for more details.
     */
    update(details: object): void;
    _urls: any[];
    _iconMapObj: any;
    /**
     * Creates a JavaScript object that represents this engine.
     *
     * @returns {object}
     *   An object suitable for serialization as JSON.
     */
    toJSON(): object;
}
