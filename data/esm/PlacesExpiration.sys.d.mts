export function nsPlacesExpiration(): void;
export class nsPlacesExpiration {
    wrappedJSObject: this;
    _pagesLimit: any;
    _dbInitializedPromise: any;
    _shuttingDown: boolean;
    set expireOnIdle(aExpireOnIdle: any);
    get expireOnIdle(): any;
    _timer: any;
    observe(aSubject: any, aTopic: any, aData: any): void;
    _debugLimit: number;
    _testingMode: boolean;
    set status(aNewStatus: number);
    get status(): number;
    name: string;
    notify(): void;
    _handleQueryResultAndAddNotification(row: any, notifications: any): void;
    _expectedResultsCount: any;
    _mostRecentExpiredVisitDays: number;
    _status: number;
    getPagesLimit(): Promise<any>;
    _isIdleObserver: boolean;
    _expireOnIdle: boolean;
    _telemetrySteps: number;
    /**
     * Expires visits and orphans.
     *
     * @param aAction
     *        The ACTION we are expiring for.  See the ACTION const for values.
     * @param aLimit
     *        Whether to use small, large or no limits when expiring.  See the
     *        LIMIT const for values.
     */
    _expire(aAction: any, aLimit: any): Promise<void>;
    /**
     * Generate a query used for expiration.
     *
     * @param aQueryType
     *        Type of the query.
     * @param aLimit
     *        Whether to use small, large or no limits when expiring.  See the
     *        LIMIT const for values.
     * @param aAction
     *        Current action causing the expiration.  See the ACTION const.
     */
    _getQueryParams(aQueryType: any, aLimit: any, aAction: any): Promise<{
        limit_visits: number;
        max_uris?: undefined;
        limit_uris?: undefined;
        limit_annos?: undefined;
        limit_inputhistory?: undefined;
        days_interactions?: undefined;
        limit_interactions?: undefined;
    } | {
        max_uris: any;
        limit_visits: number;
        limit_uris?: undefined;
        limit_annos?: undefined;
        limit_inputhistory?: undefined;
        days_interactions?: undefined;
        limit_interactions?: undefined;
    } | {
        limit_uris: number;
        limit_visits?: undefined;
        max_uris?: undefined;
        limit_annos?: undefined;
        limit_inputhistory?: undefined;
        days_interactions?: undefined;
        limit_interactions?: undefined;
    } | {
        limit_annos: number;
        limit_visits?: undefined;
        max_uris?: undefined;
        limit_uris?: undefined;
        limit_inputhistory?: undefined;
        days_interactions?: undefined;
        limit_interactions?: undefined;
    } | {
        limit_inputhistory: number;
        limit_visits?: undefined;
        max_uris?: undefined;
        limit_uris?: undefined;
        limit_annos?: undefined;
        days_interactions?: undefined;
        limit_interactions?: undefined;
    } | {
        days_interactions: any;
        limit_interactions: number;
        limit_visits?: undefined;
        max_uris?: undefined;
        limit_uris?: undefined;
        limit_annos?: undefined;
        limit_inputhistory?: undefined;
    }>;
    /**
     * Creates a new timer based on this.intervalSeconds.
     *
     * @return a REPEATING_SLACK nsITimer that runs every this.intervalSeconds.
     */
    _newTimer(): any;
    classID: any;
    QueryInterface: any;
}
