export const UrlbarProviderRecentSearches: ProviderRecentSearches;
/**
 * A provider that returns the Recent Searches performed by the user.
 */
declare class ProviderRecentSearches {
    get name(): string;
    get type(): any;
    isActive(queryContext: any): boolean;
    /**
     * We use the same priority as `UrlbarProviderTopSites` as these are both
     * shown on an empty urlbar query.
     *
     * @returns {number} The provider's priority for the given query.
     */
    getPriority(): number;
    onEngagement(state: any, queryContext: any, details: any, controller: any): void;
    startQuery(queryContext: any, addCallback: any): Promise<void>;
}
export {};
