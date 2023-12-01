/// <reference types="gecko-types" />
/**
 * PolicySearchEngine represents a search engine defined by an enterprise
 * policy.
 */
export class PolicySearchEngine extends SearchEngine {
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
     * Updates a search engine that is specified from enterprise policies.
     *
     * @param {object} details
     *   An object that simulates the manifest object from a WebExtension. See
     *   nsISearchService.updatePolicyEngine for more details.
     */
    update(details: object): void;
    /**
     * Creates a JavaScript object that represents this engine.
     *
     * @returns {object}
     *   An object suitable for serialization as JSON.
     */
    toJSON(): object;
}
import { SearchEngine } from "resource://gre/modules/SearchEngine.sys.mjs";
