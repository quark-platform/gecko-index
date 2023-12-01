export function PurgeTrackerService(): void;
export class PurgeTrackerService {
    classID: unknown;
    QueryInterface: MozQueryInterface;
    _firstIteration: boolean;
    _trackingState: Map<any, any>;
    observe(aSubject: any, aTopic: any, aData: any): void;
    isTracker(principal: any): Promise<any>;
    isAllowedThirdParty(firstPartyOriginNoSuffix: any, thirdPartyHost: any): Promise<any>;
    maybePurgePrincipal(principal: any): Promise<void>;
    resetPurgeList(): void;
    submitTelemetry(): void;
    checkCookiePermissions(httpsPrincipal: any, httpPrincipal: any): boolean;
    /**
     * This loops through all cookies saved in the database and checks if they are a tracking cookie, if it is it checks
     * that they have an interaction permission which is still valid. If the Permission is not valid we delete all data
     * associated with the site that owns that cookie.
     */
    purgeTrackingCookieJars(): Promise<void>;
    _telemetryData: {
        durationIntervals: any[];
        purged: Set<any>;
        notPurged: Set<any>;
    };
    _baseDomainsWithInteraction: Map<any, any>;
    _principalsWithInteraction: any[];
}
