/**
 * The push subscription record, stored in IndexedDB.
 */
export function PushRecord(props: any): void;
export class PushRecord {
    /**
     * The push subscription record, stored in IndexedDB.
     */
    constructor(props: any);
    pushEndpoint: any;
    scope: any;
    originAttributes: any;
    pushCount: any;
    lastPush: any;
    p256dhPublicKey: any;
    p256dhPrivateKey: any;
    authenticationSecret: any;
    systemRecord: boolean;
    appServerKey: any;
    recentMessageIDs: any;
    ctime: any;
    setQuota(suggestedQuota: any): void;
    quota: any;
    resetQuota(): void;
    updateQuota(lastVisit: any): void;
    receivedPush(lastVisit: any): void;
    /**
     * Records a message ID sent to this push registration. We track the last few
     * messages sent to each registration to avoid firing duplicate events for
     * unacknowledged messages.
     */
    noteRecentMessageID(id: any): void;
    hasRecentMessageID(id: any): any;
    reduceQuota(): void;
    /**
     * Queries the Places database for the last time a user visited the site
     * associated with a push registration.
     *
     * @returns {Promise} A promise resolved with either the last time the user
     *  visited the site, or `-Infinity` if the site is not in the user's history.
     *  The time is expressed in milliseconds since Epoch.
     */
    getLastVisit(): Promise<any>;
    isTabOpen(): boolean;
    /**
     * Indicates whether the registration can deliver push messages to its
     * associated service worker. System subscriptions are exempt from the
     * permission check.
     */
    hasPermission(): boolean;
    quotaChanged(): Promise<boolean>;
    quotaApplies(): boolean;
    isExpired(): boolean;
    matchesOriginAttributes(pattern: any): any;
    hasAuthenticationSecret(): boolean;
    matchesAppServerKey(key: any): any;
    toSubscription(): {
        endpoint: any;
        lastPush: any;
        pushCount: any;
        p256dhKey: any;
        p256dhPrivateKey: any;
        authenticationSecret: any;
        appServerKey: any;
        quota: any;
        systemRecord: boolean;
    };
}
