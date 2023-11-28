export namespace SearchUIUtils {
    let initialized: boolean;
    function init(): void;
    function observe(engine: any, topic: any, data: any): void;
    /**
     * Adds an open search engine and handles error UI.
     *
     * @param {string} locationURL
     *   The URL where the OpenSearch definition is located.
     * @param {string} image
     *   A URL string to an icon file to be used as the search engine's
     *   icon. This value may be overridden by an icon specified in the
     *   engine description file.
     * @param {object} browsingContext
     *  The browsing context any error prompt should be opened for.
     */
    function addOpenSearchEngine(locationURL: string, image: string, browsingContext: any): Promise<boolean>;
    const searchEnginesURL: string;
    /**
     * Update the placeholderName preference for the default search engine.
     *
     * @param {SearchEngine} engine The new default search engine.
     * @param {boolean} isPrivate Whether this change applies to private windows.
     */
    function updatePlaceholderNamePreference(engine: SearchEngine, isPrivate: boolean): void;
}
