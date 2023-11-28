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
    /**
     * Sends a Contextual Services ping to the Mozilla data pipeline.
     *
     * Note:
     *   * All Contextual Services pings are sent as custom pings
     *     (https://docs.telemetry.mozilla.org/cookbooks/new_ping.html#sending-a-custom-ping)
     *
     *   * The full event list can be found at https://github.com/mozilla-services/mozilla-pipeline-schemas
     *     under the "contextual-services" namespace
     *
     * @param {object} payload
     *   The ping payload to be sent to the Mozilla Structured Ingestion endpoint
     * @param {String} pingType
     *   The ping type. Must be one of CONTEXTUAL_SERVICES_PING_TYPES
     */
    function sendContextualServicesPing(payload: any, pingType: string): void;
    const _pingCentre: any;
}
