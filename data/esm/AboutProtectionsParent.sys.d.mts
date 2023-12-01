export class AboutProtectionsParent extends JSWindowActorParent {
    static setTestOverride(callback: any): void;
    /**
     * Fetches and validates data from the Monitor endpoint. If successful, then return
     * expected data. Otherwise, throw the appropriate error depending on the status code.
     *
     * @return valid data from endpoint.
     */
    fetchUserBreachStats(token: any): Promise<any>;
    /**
     * Retrieves login data for the user.
     *
     * @return {{
     *            numLogins: Number,
     *            potentiallyBreachedLogins: Number,
     *            mobileDeviceConnected: Boolean }}
     */
    getLoginData(): {
        numLogins: number;
        potentiallyBreachedLogins: number;
        mobileDeviceConnected: boolean;
    };
    /**
     * Retrieves monitor data for the user.
     *
     * @return {{ monitoredEmails: Number,
     *            numBreaches: Number,
     *            passwords: Number,
     *            userEmail: String|null,
     *            error: Boolean }}
     *         Monitor data.
     */
    getMonitorData(): {
        monitoredEmails: number;
        numBreaches: number;
        passwords: number;
        userEmail: string | null;
        error: boolean;
    };
    getMonitorScopedOAuthToken(): Promise<any>;
    /**
     * The proxy card will only show if the user is in the US, has the browser language in "en-US",
     * and does not yet have Proxy installed.
     */
    shouldShowProxyCard(): Promise<any>;
    VPNSubStatus(): Promise<any>;
    receiveMessage(aMessage: any): Promise<any>;
}
