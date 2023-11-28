/**
 * A set of blocked suggestions for quick suggest.
 */
export class BlockedSuggestions {
    get shouldEnable(): boolean;
    enable(enabled: any): void;
    /**
     * Blocks a suggestion.
     *
     * @param {string} originalUrl
     *   The suggestion's original URL with its unreplaced timestamp template.
     */
    add(originalUrl: string): Promise<void>;
    /**
     * Gets whether a suggestion is blocked.
     *
     * @param {string} originalUrl
     *   The suggestion's original URL with its unreplaced timestamp template.
     * @returns {boolean}
     *   Whether the suggestion is blocked.
     */
    has(originalUrl: string): boolean;
    /**
     * Unblocks all suggestions.
     */
    clear(): Promise<void>;
    /**
     * Called when a urlbar pref changes.
     *
     * @param {string} pref
     *   The name of the pref relative to `browser.urlbar`.
     */
    onPrefChanged(pref: string): void;
    get _test_readyPromise(): any;
    get _test_digests(): Set<any>;
    _test_getDigest(string: any): string;
    #private;
}
