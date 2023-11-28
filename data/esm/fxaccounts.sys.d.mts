export namespace Authentication {
    /**
     * Check if an user has been logged in
     */
    function isLoggedIn(): Promise<boolean>;
    function isReady(): Promise<any>;
    function _getRestmailUsername(user: any): any;
    function shortWaitForVerification(ms: any): Promise<any>;
    function _openVerificationPage(uri: any): Promise<any>;
    function _completeVerification(user: any): Promise<any>;
    function deleteEmail(user: any): Promise<boolean>;
    /**
     * Wrapper to retrieve the currently signed in user
     *
     * @returns Information about the currently signed in user
     */
    function getSignedInUser(): Promise<any>;
    /**
     * Wrapper to synchronize the login of a user
     *
     * @param account
     *        Account information of the user to login
     * @param account.username
     *        The username for the account (utf8)
     * @param account.password
     *        The user's password
     */
    function signIn(account: any): Promise<boolean>;
    /**
     * Sign out of Firefox Accounts.
     */
    function signOut(): Promise<void>;
}
