export namespace CONTEXTUAL_SERVICES_PING_TYPES {
    let TOPSITES_IMPRESSION: string;
    let TOPSITES_SELECTION: string;
    let QS_BLOCK: string;
    let QS_IMPRESSION: string;
    let QS_SELECTION: string;
}
export namespace PartnerLinkAttribution {
    /**
     * Sends an attribution request to an anonymizing proxy.
     *
     * @param {string} targetURL
     *   The URL we are routing through the anonmyzing proxy.
     * @param {string} source
     *   The source of the anonmized request, e.g. "urlbar".
     * @param {string} [campaignID]
     *   The campaign ID for attribution. This should be a valid path on the
     *   anonymizing proxy. For example, if `campaignID` was `foo`, we'd send an
     *   attribution request to https://topsites.mozilla.com/cid/foo.
     *   Optional. If it's not provided, we default to the topsites campaign.
     */
    function makeRequest({ targetURL, source, campaignID }: string): Promise<void>;
    /**
     * Makes a request to the attribution URL for a search engine search.
     *
     * @param {nsISearchEngine} engine
     *   The search engine to save the attribution for.
     * @param {nsIURI} targetUrl
     *   The target URL to filter and include in the attribution.
     */
    function makeSearchEngineRequest(engine: nsISearchEngine, targetUrl: nsIURI): Promise<void>;
}
