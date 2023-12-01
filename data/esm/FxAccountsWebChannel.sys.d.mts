/**
 * Create a new FxAccountsWebChannel to listen for account updates
 *
 * @param {Object} options Options
 *   @param {Object} options
 *     @param {String} options.content_uri
 *     The FxA Content server uri
 *     @param {String} options.channel_id
 *     The ID of the WebChannel
 *     @param {String} options.helpers
 *     Helpers functions. Should only be passed in for testing.
 * @constructor
 */
export function FxAccountsWebChannel(options: any): void;
export class FxAccountsWebChannel {
    /**
     * Create a new FxAccountsWebChannel to listen for account updates
     *
     * @param {Object} options Options
     *   @param {Object} options
     *     @param {String} options.content_uri
     *     The FxA Content server uri
     *     @param {String} options.channel_id
     *     The ID of the WebChannel
     *     @param {String} options.helpers
     *     Helpers functions. Should only be passed in for testing.
     * @constructor
     */
    constructor(options: any);
    _contentUri: any;
    _webChannelId: null;
    _channel: null;
    _helpers: null;
    _webChannelOrigin: null;
    /**
     * Release all resources that are in use.
     */
    tearDown(): void;
    _channelCallback: (webChannelId: string, message: any, sendingContext: {
        browsingContext: BrowsingContext;
        eventTarget: EventTarget;
        principal: Principal;
    }) => void;
    /**
     * Configures and registers a new WebChannel
     *
     * @private
     */
    _setupChannel(): void;
    _receiveMessage(message: any, sendingContext: any): void;
    _sendError(error: any, incomingMessage: any, sendingContext: any): void;
    /**
     * Create a new channel with the WebChannelBroker, setup a callback listener
     * @private
     */
    _registerChannel(): void;
}
export function FxAccountsWebChannelHelpers(options: any): void;
export class FxAccountsWebChannelHelpers {
    constructor(options: any);
    _fxAccounts: any;
    _weaveXPCOM: any;
    _privateBrowsingUtils: any;
    shouldAllowRelink(acctName: any): boolean;
    /**
     * stores sync login info it in the fxaccounts service
     *
     * @param accountData the user's account data and credentials
     */
    login(accountData: any): Promise<void>;
    /**
     * logout the fxaccounts service
     *
     * @param the uid of the account which have been logged out
     */
    logout(uid: any): Promise<void>;
    /**
     * Check if `sendingContext` is in private browsing mode.
     */
    isPrivateBrowsingMode(sendingContext: any): any;
    /**
     * Check whether sending fxa_status data should be allowed.
     */
    shouldAllowFxaStatus(service: any, sendingContext: any, isPairing: any, context: any): any;
    /**
     * Get fxa_status information. Resolves to { signedInUser: <user_data> }.
     * If returning status information is not allowed or no user is signed into
     * Sync, `user_data` will be null.
     */
    getFxaStatus(service: any, sendingContext: any, isPairing: any, context: any): Promise<{
        signedInUser: {
            email: any;
            sessionToken: any;
            uid: any;
            verified: any;
        };
        clientId: string;
        capabilities: {
            multiService: boolean;
            pairing: any;
            engines: string[];
        };
    }>;
    _getAvailableExtraEngines(): string[];
    changePassword(credentials: any): Promise<void>;
    /**
     * Get the hash of account name of the previously signed in account
     */
    getPreviousAccountNameHashPref(): string;
    /**
     * Given an account name, set the hash of the previously signed in account
     *
     * @param acctName the account name of the user's account.
     */
    setPreviousAccountNameHashPref(acctName: any): void;
    /**
     * Open Sync Preferences in the current tab of the browser
     *
     * @param {Object} browser the browser in which to open preferences
     * @param {String} [entryPoint] entryPoint to use for logging
     */
    openSyncPreferences(browser: any, entryPoint?: string): void;
    /**
     * Open Firefox View in the browser's window
     *
     * @param {Object} browser the browser in whose window we'll open Firefox View
     * @param {String} [entryPoint] entryPoint Optional string to use for logging
     */
    openFirefoxView(browser: any, entryPoint?: string): void;
    /**
     * If a user signs in using a different account, the data from the
     * previous account and the new account will be merged. Ask the user
     * if they want to continue.
     *
     * @private
     */
    _needRelinkWarning(acctName: any): boolean;
    /**
     * Show the user a warning dialog that the data from the previous account
     * and the new account will be merged.
     *
     * @private
     */
    _promptForRelink(acctName: any): boolean;
}
export function EnsureFxAccountsWebChannel(): void;
