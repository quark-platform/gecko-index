export class ParentAutocompleteOption {
    constructor(icon: any, title: any, subtitle: any, fillMessageName: any, fillMessageData: any);
    icon: any;
    title: any;
    subtitle: any;
    fillMessageName: any;
    fillMessageData: any;
}
export namespace LoginHelper {
    let debug: any;
    let enabled: any;
    let storageEnabled: any;
    let formlessCaptureEnabled: any;
    let formRemovalCaptureEnabled: any;
    let generationAvailable: any;
    let generationConfidenceThreshold: any;
    let generationEnabled: any;
    let improvedPasswordRulesEnabled: any;
    let improvedPasswordRulesCollection: string;
    let includeOtherSubdomainsInLookup: any;
    let insecureAutofill: any;
    let privateBrowsingCaptureEnabled: any;
    let remoteRecipesEnabled: any;
    let remoteRecipesCollection: string;
    let relatedRealmsEnabled: any;
    let relatedRealmsCollection: string;
    let schemeUpgrades: any;
    let showAutoCompleteFooter: any;
    let showAutoCompleteImport: any;
    let testOnlyUserHasInteractedWithDocument: any;
    let userInputRequiredToCapture: any;
    let captureInputChanges: any;
    function init(): void;
    function updateSignonPrefs(): void;
    function createLogger(aLogPrefix: any): any;
    /**
     * Due to the way the signons2.txt file is formatted, we need to make
     * sure certain field values or characters do not cause the file to
     * be parsed incorrectly.  Reject origins that we can't store correctly.
     *
     * @throws String with English message in case validation failed.
     */
    function checkOriginValue(aOrigin: any): void;
    /**
     * Due to the way the signons2.txt file was formatted, we needed to make
     * sure certain field values or characters do not cause the file to
     * be parsed incorrectly. These characters can cause problems in other
     * formats/languages too so reject logins that may not be stored correctly.
     *
     * @throws String with English message in case validation failed.
     */
    function checkLoginValues(aLogin: any): void;
    /**
     * Returns a new XPCOM property bag with the provided properties.
     *
     * @param {Object} aProperties
     *        Each property of this object is copied to the property bag.  This
     *        parameter can be omitted to return an empty property bag.
     *
     * @return A new property bag, that is an instance of nsIWritablePropertyBag,
     *         nsIWritablePropertyBag2, nsIPropertyBag, and nsIPropertyBag2.
     */
    function newPropertyBag(aProperties: any): any;
    /**
     * Helper to avoid the property bags when calling
     * Services.logins.searchLogins from JS.
     * @deprecated Use Services.logins.searchLoginsAsync instead.
     *
     * @param {Object} aSearchOptions - A regular JS object to copy to a property bag before searching
     * @return {nsILoginInfo[]} - The result of calling searchLogins.
     */
    function searchLoginsWithObject(aSearchOptions: any): nsILoginInfo[];
    /**
     * @param {string} aURL
     * @returns {string} which is the hostPort of aURL if supported by the scheme
     *                   otherwise, returns the original aURL.
     */
    function maybeGetHostPortForURL(aURL: string): string;
    /**
     * Get the parts of the URL we want for identification.
     * Strip out things like the userPass portion and handle javascript:.
     */
    function getLoginOrigin(uriString: any, allowJS?: boolean): string;
    function getFormActionOrigin(form: any): string;
    /**
     * @param {String} aLoginOrigin - An origin value from a stored login's
     *                                origin or formActionOrigin properties.
     * @param {String} aSearchOrigin - The origin that was are looking to match
     *                                 with aLoginOrigin. This would normally come
     *                                 from a form or page that we are considering.
     * @param {nsILoginFindOptions} aOptions - Options to affect whether the origin
     *                                         from the login (aLoginOrigin) is a
     *                                         match for the origin we're looking
     *                                         for (aSearchOrigin).
     */
    function isOriginMatching(aLoginOrigin: string, aSearchOrigin: string, aOptions?: nsILoginFindOptions): boolean;
    function doLoginsMatch(aLogin1: any, aLogin2: any, { ignorePassword, ignoreSchemes }: {
        ignorePassword?: boolean;
        ignoreSchemes?: boolean;
    }): boolean;
    /**
     * Creates a new login object that results by modifying the given object with
     * the provided data.
     *
     * @param {nsILoginInfo} aOldStoredLogin
     *        Existing login object to modify.
     * @param {nsILoginInfo|nsIProperyBag} aNewLoginData
     *        The new login values, either as an nsILoginInfo or nsIProperyBag.
     *
     * @return {nsILoginInfo} The newly created nsILoginInfo object.
     *
     * @throws {Error} With English message in case validation failed.
     */
    function buildModifiedLogin(aOldStoredLogin: nsILoginInfo, aNewLoginData: any): nsILoginInfo;
    /**
     * Remove http: logins when there is an https: login with the same username and hostPort.
     * Sort order is preserved.
     *
     * @param {nsILoginInfo[]} logins
     *        A list of logins we want to process for shadowing.
     * @returns {nsILoginInfo[]} A subset of of the passed logins.
     */
    function shadowHTTPLogins(logins: nsILoginInfo[]): nsILoginInfo[];
    /**
     * Generate a unique key string from a login.
     * @param {nsILoginInfo} login
     * @param {string[]} uniqueKeys containing nsILoginInfo attribute names or "hostPort"
     * @returns {string} to use as a key in a Map
     */
    function getUniqueKeyForLogin(login: nsILoginInfo, uniqueKeys: string[]): string;
    /**
     * Removes duplicates from a list of logins while preserving the sort order.
     *
     * @param {nsILoginInfo[]} logins
     *        A list of logins we want to deduplicate.
     * @param {string[]} [uniqueKeys = ["username", "password"]]
     *        A list of login attributes to use as unique keys for the deduplication.
     * @param {string[]} [resolveBy = ["timeLastUsed"]]
     *        Ordered array of keyword strings used to decide which of the
     *        duplicates should be used. "scheme" would prefer the login that has
     *        a scheme matching `preferredOrigin`'s if there are two logins with
     *        the same `uniqueKeys`. The default preference to distinguish two
     *        logins is `timeLastUsed`. If there is no preference between two
     *        logins, the first one found wins.
     * @param {string} [preferredOrigin = undefined]
     *        String representing the origin to use for preferring one login over
     *        another when they are dupes. This is used with "scheme" for
     *        `resolveBy` so the scheme from this origin will be preferred.
     * @param {string} [preferredFormActionOrigin = undefined]
     *        String representing the action origin to use for preferring one login over
     *        another when they are dupes. This is used with "actionOrigin" for
     *        `resolveBy` so the scheme from this action origin will be preferred.
     *
     * @returns {nsILoginInfo[]} list of unique logins.
     */
    function dedupeLogins(logins: nsILoginInfo[], uniqueKeys?: string[], resolveBy?: string[], preferredOrigin?: string, preferredFormActionOrigin?: string): nsILoginInfo[];
    /**
     * Open the password manager window.
     *
     * @param {Window} window
     *                 the window from where we want to open the dialog
     *
     * @param {object?} args
     *                  params for opening the password manager
     * @param {string} [args.filterString=""]
     *                 the domain (not origin) to pass to the login manager dialog
     *                 to pre-filter the results
     * @param {string} args.entryPoint
     *                 The name of the entry point, used for telemetry
     */
    function openPasswordManager(window: Window, { filterString, entryPoint, loginGuid }?: any): void;
    /**
     * Checks if a field type is password compatible.
     *
     * @param {Element} element
     *                  the field we want to check.
     * @param {Object} options
     * @param {bool} [options.ignoreConnect] - Whether to ignore checking isConnected
     *                                         of the element.
     *
     * @returns {Boolean} true if the field can
     *                    be treated as a password input
     */
    function isPasswordFieldType(element: Element, { ignoreConnect }?: {
        ignoreConnect?: bool;
    }): boolean;
    /**
     * Checks if a field type is username compatible.
     *
     * @param {Element} element
     *                  the field we want to check.
     * @param {Object} options
     * @param {bool} [options.ignoreConnect] - Whether to ignore checking isConnected
     *                                         of the element.
     *
     * @returns {Boolean} true if the field type is one
     *                    of the username types.
     */
    function isUsernameFieldType(element: Element, { ignoreConnect }?: {
        ignoreConnect?: bool;
    }): boolean;
    /**
     * Infer whether a form is a sign-in form by searching keywords
     * in its attributes
     *
     * @param {Element} element
     *                  the form we want to check.
     *
     * @returns {boolean} True if any of the rules matches
     */
    function isInferredLoginForm(formElement: any): boolean;
    /**
     * Infer whether an input field is a username field by searching
     * 'username' keyword in its attributes
     *
     * @param {Element} element
     *                  the field we want to check.
     *
     * @returns {boolean} True if any of the rules matches
     */
    function isInferredUsernameField(element: Element): boolean;
    /**
     * Search for keywords that indicates the input field is not likely a
     * field of a username login form.
     *
     * @param {Element} element
     *                  the input field we want to check.
     *
     * @returns {boolean} True if any of the rules matches
     */
    function isInferredNonUsernameField(element: Element): boolean;
    /**
     * Infer whether an input field is an email field by searching
     * 'email' keyword in its attributes.
     *
     * @param {Element} element
     *                  the field we want to check.
     *
     * @returns {boolean} True if any of the rules matches
     */
    function isInferredEmailField(element: Element): boolean;
    /**
     * For each login, add the login to the password manager if a similar one
     * doesn't already exist. Merge it otherwise with the similar existing ones.
     *
     * @param {Object[]} loginDatas - For each login, the data that needs to be added.
     * @returns {Object[]} An entry for each processed row containing how the row was processed and the login data.
     */
    function maybeImportLogins(loginDatas: any[]): any[];
    /**
     * Convert an array of nsILoginInfo to vanilla JS objects suitable for
     * sending over IPC. Avoid using this in other cases.
     *
     * NB: All members of nsILoginInfo (not nsILoginMetaInfo) are strings.
     */
    function loginsToVanillaObjects(logins: any): any;
    /**
     * Same as above, but for a single login.
     */
    function loginToVanillaObject(login: any): {};
    /**
     * Convert an object received from IPC into an nsILoginInfo (with guid).
     */
    function vanillaObjectToLogin(login: any): any;
    /**
     * As above, but for an array of objects.
     */
    function vanillaObjectsToLogins(vanillaObjects: any): any[];
    /**
     * Returns true if the user has a primary password set and false otherwise.
     */
    function isPrimaryPasswordSet(): any;
    /**
     * Shows the Primary Password prompt if enabled, or the
     * OS auth dialog otherwise.
     * @param {Element} browser
     *        The <browser> that the prompt should be shown on
     * @param OSReauthEnabled Boolean indicating if OS reauth should be tried
     * @param expirationTime Optional timestamp indicating next required re-authentication
     * @param messageText Formatted and localized string to be displayed when the OS auth dialog is used.
     * @param captionText Formatted and localized string to be displayed when the OS auth dialog is used.
     */
    function requestReauth(browser: Element, OSReauthEnabled: any, expirationTime: any, messageText: any, captionText: any): Promise<{
        isAuthorized: boolean;
        telemetryEvent: {
            object: string;
            method: string;
            value: string;
            extra?: undefined;
        };
    } | {
        isAuthorized: boolean;
        telemetryEvent: {
            object: string;
            method: string;
            value: any;
            extra: any;
        };
    }>;
    /**
     * Send a notification when stored data is changed.
     */
    function notifyStorageChanged(changeType: any, data: any): void;
    function isUserFacingLogin(login: any): boolean;
    function getAllUserFacingLogins(): Promise<any>;
    function createLoginAlreadyExistsError(guid: any): any;
    /**
     * Determine the <browser> that a prompt should be shown on.
     *
     * Some sites pop up a temporary login window, which disappears
     * upon submission of credentials. We want to put the notification
     * prompt in the opener window if this seems to be happening.
     *
     * @param {Element} browser
     *        The <browser> that a prompt was triggered for
     * @returns {Element} The <browser> that the prompt should be shown on,
     *                    which could be in a different window.
     */
    function getBrowserForPrompt(browser: Element): Element;
}
export class OptInFeature {
    static PREF_AVAILABLE_VALUE: string;
    static PREF_OFFERED_VALUE: string;
    static PREF_ENABLED_VALUE: string;
    static PREF_DISABLED_VALUE: string;
    constructor(offered: any, enabled: any, disabled: any, pref: any);
    implementation: any;
    get isAvailable(): boolean;
    get isEnabled(): boolean;
    get isDisabled(): boolean;
    markAsAvailable(): void;
    markAsOffered(): void;
    markAsEnabled(): void;
    markAsDisabled(): void;
    #private;
}
