/**
 * Implements nsIPromptFactory
 *
 * Invoked by [toolkit/components/prompts/src/Prompter.jsm]
 */
export function LoginManagerAuthPromptFactory(): void;
export class LoginManagerAuthPromptFactory {
    classID: any;
    QueryInterface: any;
    _pendingPrompts: WeakMap<object, any>;
    _pendingSavePrompts: WeakMap<object, any>;
    _noBrowser: {};
    _uiBusyPromise: null;
    _uiBusyResolve: null;
    observe(subject: any, topic: any, data: any): void;
    getPrompt(aWindow: any, aIID: any): any;
    getPendingPrompt(browser: any, hashKey: any): any;
    _dismissPendingSavePrompt(browser: any): void;
    _setPendingSavePrompt(browser: any, prompt: any): void;
    _setPendingPrompt(prompt: any, hashKey: any): void;
    _removePendingPrompt(prompt: any, hashKey: any): void;
    _waitForLoginsUI(prompt: any): Promise<void>;
    _doAsyncPrompt(prompt: any, hashKey: any): Promise<void>;
}
/**
 * Implements interfaces for prompting the user to enter/save/change auth info.
 *
 * nsIAuthPrompt: Used by SeaMonkey, Thunderbird, but not Firefox.
 *
 * Note this implementation no longer provides `nsIAuthPrompt.promptPassword()`
 * and `nsIAuthPrompt.promptUsernameAndPassword()`. Use their async
 * counterparts `asyncPromptPassword` and `asyncPromptUsernameAndPassword`
 * instead.
 *
 * nsIAuthPrompt2: Is invoked by a channel for protocol-based authentication
 * (eg HTTP Authenticate, FTP login).
 *
 * nsILoginManagerAuthPrompter: Used by consumers to indicate which tab/window a
 * prompt should appear on.
 */
export function LoginManagerAuthPrompter(): void;
export class LoginManagerAuthPrompter {
    classID: any;
    QueryInterface: any;
    _factory: null;
    _chromeWindow: null;
    _browser: null;
    __strBundle: null;
    get _strBundle(): any;
    __ellipsis: null;
    get _ellipsis(): any;
    get _inPrivateBrowsing(): any;
    get _allowRememberLogin(): any;
    /**
     * Wrapper around the prompt service prompt. Saving random fields here
     * doesn't really make sense and therefore isn't implemented.
     */
    prompt(aDialogTitle: any, aText: any, aPasswordRealm: any, aSavePassword: any, aDefaultText: any, aResult: any): any;
    /**
     * Looks up a username and password in the database. Will prompt the user
     * with a dialog, even if a username and password are found.
     */
    asyncPromptUsernameAndPassword(aDialogTitle: any, aText: any, aPasswordRealm: any, aSavePassword: any, aUsername: any, aPassword: any): Promise<any>;
    /**
     * If a password is found in the database for the password realm, it is
     * returned straight away without displaying a dialog.
     *
     * If a password is not found in the database, the user will be prompted
     * with a dialog with a text field and ok/cancel buttons. If the user
     * allows it, then the password will be saved in the database.
     */
    asyncPromptPassword(aDialogTitle: any, aText: any, aPasswordRealm: any, aSavePassword: any, aPassword: any): Promise<any>;
    /**
     * Given aRealmString, such as "http://user@example.com/foo", returns an
     * array of:
     *   - the formatted origin
     *   - the realm (origin + path)
     *   - the username, if present
     *
     * If aRealmString is in the format produced by NS_GetAuthKey for HTTP[S]
     * channels, e.g. "example.com:80 (httprealm)", null is returned for all
     * arguments to let callers know the login can't be saved because we don't
     * know whether it's http or https.
     */
    _getRealmInfo(aRealmString: any): any[];
    promptAuthInternal(aChannel: any, aLevel: any, aAuthInfo: any): Promise<boolean>;
    /**
     * Implementation of nsIAuthPrompt2.
     *
     * @param {nsIChannel} aChannel
     * @param {int}        aLevel
     * @param {nsIAuthInformation} aAuthInfo
     */
    promptAuth(aChannel: nsIChannel, aLevel: int, aAuthInfo: nsIAuthInformation): boolean;
    asyncPromptAuth(aChannel: any, aCallback: any, aContext: any, aLevel: any, aAuthInfo: any): {
        QueryInterface: any;
        callback: any;
        context: any;
        cancel(): void;
    };
    init(aWindow?: any, aFactory?: any): void;
    set browser(aBrowser: any);
    get browser(): any;
    _updateLogin(login: any, aNewLogin: any): void;
    /**
     * Given a content DOM window, returns the chrome window and browser it's in.
     */
    _getChromeWindow(aWindow: any): {
        win: any;
        browser: any;
    };
    /**
     * The user might enter a login that isn't the one we prefilled, but
     * is the same as some other existing login. So, pick a login with a
     * matching username, or return null.
     */
    _repickSelectedLogin(foundLogins: any, username: any): any;
    /**
     * Can be called as:
     *   _getLocalizedString("key1");
     *   _getLocalizedString("key2", ["arg1"]);
     *   _getLocalizedString("key3", ["arg1", "arg2"]);
     *   (etc)
     *
     * Returns the localized string for the specified key,
     * formatted if required.
     *
     */
    _getLocalizedString(key: any, formatArgs: any): any;
    /**
     * Sanitizes the specified username, by stripping quotes and truncating if
     * it's too long. This helps prevent an evil site from messing with the
     * "save password?" prompt too much.
     */
    _sanitizeUsername(username: any): any;
    /**
     * The aURI parameter may either be a string uri, or an nsIURI instance.
     *
     * Returns the origin to use in a nsILoginInfo object (for example,
     * "http://example.com").
     */
    _getFormattedOrigin(aURI: any): string;
    /**
     * Converts a login's origin field (a URL) to a short string for
     * prompting purposes. Eg, "http://foo.com" --> "foo.com", or
     * "ftp://www.site.co.uk" --> "site.co.uk".
     */
    _getShortDisplayHost(aURIString: any): any;
    /**
     * Returns the origin and realm for which authentication is being
     * requested, in the format expected to be used with nsILoginInfo.
     */
    _getAuthTarget(aChannel: any, aAuthInfo: any): any[];
    /**
     * Returns [username, password] as extracted from aAuthInfo (which
     * holds this info after having prompted the user).
     *
     * If the authentication was for a Windows domain, we'll prepend the
     * return username with the domain. (eg, "domain\user")
     */
    _GetAuthInfo(aAuthInfo: any): any[];
    /**
     * Given a username (possibly in DOMAIN\user form) and password, parses the
     * domain out of the username if necessary and sets domain, username and
     * password on the auth information object.
     */
    _SetAuthInfo(aAuthInfo: any, username: any, password: any): void;
    _newAsyncPromptConsumer(aCallback: any, aContext: any): {
        QueryInterface: any;
        callback: any;
        context: any;
        cancel(): void;
    };
}
