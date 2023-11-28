export namespace LoginBreaches {
    let REMOTE_SETTINGS_COLLECTION: string;
    function update(breaches?: any): Promise<void>;
    /**
     * Return a Map of login GUIDs to a potential breach affecting that login
     * by considering only breaches affecting passwords.
     *
     * This only uses the breach `Domain` and `timePasswordChanged` to determine
     * if a login may be breached which means it may contain false-positives if
     * login timestamps are incorrect, the user didn't save their password change
     * in Firefox, or the breach didn't contain all accounts, etc. As a result,
     * consumers should avoid making stronger claims than the data supports.
     *
     * @param {nsILoginInfo[]} logins Saved logins to check for potential breaches.
     * @param {object[]} [breaches = null] Only ones involving passwords will be used.
     * @returns {Map} with a key for each login GUID potentially in a breach.
     */
    function getPotentialBreachesByLoginGUID(logins: nsILoginInfo[], breaches?: any[]): Map<any, any>;
    /**
     * Return information about logins using passwords that were potentially in a
     * breach.
     * @see the caveats in the documentation for `getPotentialBreachesByLoginGUID`.
     *
     * @param {nsILoginInfo[]} logins to check the passwords of.
     * @returns {Map} from login GUID to `true` for logins that have a password
     *                that may be vulnerable.
     */
    function getPotentiallyVulnerablePasswordsByLoginGUID(logins: nsILoginInfo[]): Map<any, any>;
    function clearAllPotentiallyVulnerablePasswords(): Promise<void>;
    function _breachAlertIsDismissed(login: any, breach: any, dismissedBreachAlerts: any): boolean;
    function _breachInvolvedPasswords(breach: any): any;
    function _breachWasAfterPasswordLastChanged(breach: any, login: any): boolean;
}
