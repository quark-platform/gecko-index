export class LoginManagerParent {
    static setListenerForTests(listener: any): void;
    static get _recipeManager(): LoginRecipesParent;
    static getGeneratedPasswordsByPrincipalOrigin(): Map<any, any>;
    /**
     * @param {origin} formOrigin
     * @param {object} options
     * @param {origin?} options.formActionOrigin To match on. Omit this argument to match all action origins.
     * @param {origin?} options.httpRealm To match on. Omit this argument to match all realms.
     * @param {boolean} options.acceptDifferentSubdomains Include results for eTLD+1 matches
     * @param {boolean} options.ignoreActionAndRealm Include all form and HTTP auth logins for the site
     * @param {string[]} options.relatedRealms Related realms to match against when searching
     */
    static searchAndDedupeLogins(formOrigin: string, { acceptDifferentSubdomains, formActionOrigin, httpRealm, ignoreActionAndRealm, relatedRealms, }?: {
        formActionOrigin: string | null;
        httpRealm: string | null;
        acceptDifferentSubdomains: boolean;
        ignoreActionAndRealm: boolean;
        relatedRealms: string[];
    }): Promise<any>;
    /**
     * Expose `BrowsingContext` so we can stub it in tests.
     */
    static get _browsingContextGlobal(): any;
    static get recipeParentPromise(): any;
    possibleValues: {
        usernames: Set<any>;
        passwords: Set<any>;
    };
    getRootBrowser(): any;
    receiveMessage(msg: any): Promise<any>;
    /**
     * Update the remaining number of import suggestion impressions with debounce
     * to allow multiple popups showing the "same" items to count as one.
     */
    decreaseSuggestImportCount(count: any): void;
    _suggestImportCount: any;
    _suggestImportTimer: any;
    /**
     * Trigger a login form fill and send relevant data (e.g. logins and recipes)
     * to the child process (LoginManagerChild).
     */
    fillForm({ browser, loginFormOrigin, login, inputElementIdentifier, style, }: {
        browser: any;
        loginFormOrigin: any;
        login: any;
        inputElementIdentifier: any;
        style: any;
    }): Promise<void>;
    /**
     * Send relevant data (e.g. logins and recipes) to the child process (LoginManagerChild).
     */
    sendLoginDataToChild(formOrigin: any, actionOrigin: any, { guid, showPrimaryPassword }: {
        guid: any;
        showPrimaryPassword: any;
    }): Promise<any>;
    doAutocompleteSearch(formOrigin: any, { actionOrigin, searchString, previousResult, forcePasswordGeneration, hasBeenTypePassword, isProbablyANewPasswordField, scenarioName, inputMaxLength, }: {
        actionOrigin: any;
        searchString: any;
        previousResult: any;
        forcePasswordGeneration: any;
        hasBeenTypePassword: any;
        isProbablyANewPasswordField: any;
        scenarioName: any;
        inputMaxLength: any;
    }): Promise<{
        logins: any[];
        generatedPassword?: undefined;
        importable?: undefined;
        autocompleteItems?: undefined;
        willAutoSaveGeneratedPassword?: undefined;
    } | {
        generatedPassword: any;
        importable: any;
        autocompleteItems: any;
        logins: any;
        willAutoSaveGeneratedPassword: boolean;
    }>;
    useBrowsingContext(browsingContextId?: number): void;
    _overrideBrowsingContextId: number;
    getBrowsingContextToUse(): any;
    getGeneratedPassword({ inputMaxLength }?: {
        inputMaxLength: any;
    }): Promise<any>;
    maybeRecordPasswordGenerationShownTelemetryEvent(autocompleteResults: any): void;
    /**
     * Used for stubbing by tests.
     */
    _getPrompter(): any;
    showDoorhanger(browser: any, formOrigin: any, { browsingContextId, formActionOrigin, autoFilledLoginGuid, usernameField, newPasswordField, oldPasswordField, dismissedPrompt, }: {
        browsingContextId: any;
        formActionOrigin: any;
        autoFilledLoginGuid: any;
        usernameField: any;
        newPasswordField: any;
        oldPasswordField: any;
        dismissedPrompt: any;
    }): Promise<void>;
    /**
     * Performs validation of inputs against already-saved logins in order to determine whether and
     * how these inputs can be stored. Depending on validation, will either no-op or show a 'save'
     * or 'update' dialog to the user.
     *
     * This is called after any of the following:
     *   - The user edits a password
     *   - A generated password is filled
     *   - The user edits a username (when a matching password field has already been filled)
     *
     * @param {Element} browser
     * @param {string} formOrigin
     * @param {string} options.formActionOrigin
     * @param {string?} options.autoFilledLoginGuid
     * @param {Object} options.newPasswordField
     * @param {Object?} options.usernameField
     * @param {Element?} options.oldPasswordField
     * @param {boolean} [options.triggeredByFillingGenerated = false]
     */
    _onPasswordEditedOrGenerated(browser: Element, formOrigin: string, { formActionOrigin, autoFilledLoginGuid, newPasswordField, usernameField, oldPasswordField, triggeredByFillingGenerated, }: string): Promise<void>;
    #private;
}
export namespace LoginManagerParent {
    let SUGGEST_IMPORT_DEBOUNCE_MS: number;
}
