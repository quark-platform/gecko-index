export const ADLINK_CHECK_TIMEOUT_MS: 1000;
export const domainExtractor: DomainExtractor;
/**
 * SearchTelemetryChild monitors for pages that are partner searches, and
 * looks through them to find links which looks like adverts and sends back
 * a notification to SearchTelemetry for possible telemetry reporting.
 *
 * Only the partner details and the fact that at least one ad was found on the
 * page are returned to SearchTelemetry. If no ads are found, no notification is
 * given.
 */
export class SearchSERPTelemetryChild {
    /**
     * Determines if there is a provider that matches the supplied URL and returns
     * the information associated with that provider.
     *
     * @param {string} url The url to check
     * @returns {array|null} Returns null if there's no match, otherwise an array
     *   of provider name and the provider information.
     */
    _getProviderInfoForUrl(url: string): any[] | null;
    /**
     * Checks to see if the page is a partner and has an ad link within it. If so,
     * it will notify SearchTelemetry.
     */
    _checkForAdLink(eventType: any): void;
    /**
     * Handles events received from the actor child notifications.
     *
     * @param {object} event The event details.
     */
    handleEvent(event: object): void;
    _waitForContentTimeout: any;
    #private;
}
/**
 * An object indicating which elements to examine for domains to extract and
 * which heuristic technique to use to extract that element's domain.
 */
export type ExtractorInfo = {
    /**
     *  A string representing the CSS selector that targets the elements on the
     *  page that contain domains we want to extract.
     */
    selectors: string;
    /**
     *  A string representing which domain extraction heuristic to use.
     *  One of: "href" or "data-attribute".
     */
    method: string;
    /**
     *  Options related to the domain extraction heuristic used.
     */
    options: object | null;
    /**
     *  The key name of the data attribute to lookup.
     */
    dataAttributeKey: string | null;
    /**
     *  The key name of the query param value to lookup.
     */
    queryParamKey: string | null;
};
/**
 * An object indicating which elements to examine for domains to extract and
 * which heuristic technique to use to extract that element's domain.
 *
 * @typedef {object} ExtractorInfo
 * @property {string} selectors
 *  A string representing the CSS selector that targets the elements on the
 *  page that contain domains we want to extract.
 * @property {string} method
 *  A string representing which domain extraction heuristic to use.
 *  One of: "href" or "data-attribute".
 * @property {object | null} options
 *  Options related to the domain extraction heuristic used.
 * @property {string | null} options.dataAttributeKey
 *  The key name of the data attribute to lookup.
 * @property {string | null} options.queryParamKey
 *  The key name of the query param value to lookup.
 */
/**
 * DomainExtractor examines elements on a page to retrieve the domains.
 */
declare class DomainExtractor {
    /**
     * Extract domains from the page using an array of information pertaining to
     * the SERP.
     *
     * @param {Document} document
     *  The document for the SERP we are extracting domains from.
     * @param {Array<ExtractorInfo>} extractorInfos
     *  Information used to target the domains we need to extract.
     * @return {Set<string>}
     *  A set of the domains extracted from the page.
     */
    extractDomainsFromDocument(document: Document, extractorInfos: Array<ExtractorInfo>): Set<string>;
    #private;
}
export {};
