/**
 * Implements interfaces for prompting the user to enter/save/change login info
 * found in HTML forms.
 */
export class LoginManagerPrompter {
    /**
     * Displays the PopupNotifications.sys.mjs doorhanger for password save or change.
     *
     * @param {Element} browser
     *        The browser to show the doorhanger on.
     * @param {nsILoginInfo} login
     *        Login to save or change. For changes, this login should contain the
     *        new password and/or username
     * @param {string} type
     *        This is "password-save" or "password-change" depending on the
     *        original notification type. This is used for telemetry and tests.
     * @param {object} showOptions
     *        Options to pass along to PopupNotifications.show().
     * @param {bool} [options.notifySaved = false]
     *        Whether to indicate to the user that the login was already saved.
     * @param {string} [options.messageStringID = undefined]
     *        An optional string ID to override the default message.
     * @param {string} [options.autoSavedLoginGuid = ""]
     *        A string guid value for the auto-saved login to be removed if the changes
     *        match it to a different login
     * @param {string} [options.autoFilledLoginGuid = ""]
     *        A string guid value for the autofilled login
     * @param {object?} possibleValues
     *                 Contains values from anything that we think, but are not sure, might be
     *                 a username or password.  Has two properties, 'usernames' and 'passwords'.
     * @param {Set<String>} possibleValues.usernames
     * @param {Set<String>} possibleValues.passwords
     */
    static _showLoginCaptureDoorhanger(browser: Element, login: nsILoginInfo, type: string, showOptions?: object, possibleValues?: object | null, { notifySaved, messageStringID, autoSavedLoginGuid, autoFilledLoginGuid, }?: string): any;
    /**
     * Helper method to update and persist an existing nsILoginInfo object with new property values.
     */
    static _updateLogin(login: any, aNewLogin: any): void;
    /**
     * Retrieves the message of the given id from fluent
     * and extracts the label and accesskey
     *
     * @param {String} id message id
     * @returns label and accesskey
     */
    static getLabelAndAccessKey(id: string): {
        label: any;
        accessKey: any;
    };
    /**
     * Converts a login's origin field to a short string for
     * prompting purposes. Eg, "http://foo.com" --> "foo.com", or
     * "ftp://www.site.co.uk" --> "site.co.uk".
     */
    static _getShortDisplayHost(aURIString: any): any;
    /**
     * This function looks for existing logins that can be updated
     * to match a submitted login, instead of creating a new one.
     *
     * Given a login and a loginList, it filters the login list
     * to find every login with either:
     * - the same username as aLogin
     * - the same password as aLogin and an empty username
     *   so the user can add a username.
     * - the same guid as the given login when it has an empty username
     *
     * @param {nsILoginInfo} aLogin
     *                       login to use as filter.
     * @param {nsILoginInfo[]} aLoginList
     *                         Array of logins to filter.
     * @param {String} includeGUID
     *                 guid value for login that not be filtered out
     * @returns {nsILoginInfo[]} the filtered array of logins.
     */
    static _filterUpdatableLogins(aLogin: nsILoginInfo, aLoginList: nsILoginInfo[], includeGUID: string): nsILoginInfo[];
    /**
     * Set the values that will be used the next time the username autocomplete popup is opened.
     *
     * @param {nsILoginInfo} login - used only for its information about the current domain.
     * @param {Set<String>?} possibleUsernames - values that we believe may be new/changed login usernames.
     */
    static _setUsernameAutocomplete(login: nsILoginInfo, possibleUsernames?: Set<string> | null): Promise<void>;
    /**
     * @param {nsILoginInfo} login - used only for its information about the current domain.
     * @param {Set<String>?} possibleUsernames - values that we believe may be new/changed login usernames.
     *
     * @returns {object[]} an ordered list of usernames to be used the next time the username autocomplete popup is opened.
     */
    static _getUsernameSuggestions(login: nsILoginInfo, possibleUsernames?: Set<string> | null): object[];
    get classID(): unknown;
    get QueryInterface(): MozQueryInterface;
    /**
     * Called when we detect a password or username that is not yet saved as
     * an existing login.
     *
     * @param {Element} aBrowser
     *                  The browser element that the request came from.
     * @param {nsILoginInfo} aLogin
     *                       The new login from the page form.
     * @param {boolean} [dismissed = false]
     *                  If the prompt should be automatically dismissed on being shown.
     * @param {boolean} [notifySaved = false]
     *                  Whether the notification should indicate that a login has been saved
     * @param {string} [autoSavedLoginGuid = ""]
     *                 A guid value for the old login to be removed if the changes match it
     *                 to a different login
     * @param {object?} possibleValues
     *                 Contains values from anything that we think, but are not sure, might be
     *                 a username or password.  Has two properties, 'usernames' and 'passwords'.
     * @param {Set<String>} possibleValues.usernames
     * @param {Set<String>} possibleValues.passwords
     */
    promptToSavePassword(aBrowser: Element, aLogin: nsILoginInfo, dismissed?: boolean, notifySaved?: boolean, autoFilledLoginGuid?: string, possibleValues?: object | null): {
        dismiss(): void;
    };
    /**
     * Called when we think we detect a password or username change for
     * an existing login, when the form being submitted contains multiple
     * password fields.
     *
     * @param {Element} aBrowser
     *                  The browser element that the request came from.
     * @param {nsILoginInfo} aOldLogin
     *                       The old login we may want to update.
     * @param {nsILoginInfo} aNewLogin
     *                       The new login from the page form.
     * @param {boolean} [dismissed = false]
     *                  If the prompt should be automatically dismissed on being shown.
     * @param {boolean} [notifySaved = false]
     *                  Whether the notification should indicate that a login has been saved
     * @param {string} [autoSavedLoginGuid = ""]
     *                 A guid value for the old login to be removed if the changes match it
     *                 to a different login
     * @param {object?} possibleValues
     *                 Contains values from anything that we think, but are not sure, might be
     *                 a username or password.  Has two properties, 'usernames' and 'passwords'.
     * @param {Set<String>} possibleValues.usernames
     * @param {Set<String>} possibleValues.passwords
     */
    promptToChangePassword(aBrowser: Element, aOldLogin: nsILoginInfo, aNewLogin: nsILoginInfo, dismissed?: boolean, notifySaved?: boolean, autoSavedLoginGuid?: string, autoFilledLoginGuid?: string, possibleValues?: object | null): {
        dismiss(): void;
    };
    /**
     * Called when we detect a password change in a form submission, but we
     * don't know which existing login (username) it's for. Asks the user
     * to select a username and confirm the password change.
     *
     * Note: The caller doesn't know the username for aNewLogin, so this
     *       function fills in .username and .usernameField with the values
     *       from the login selected by the user.
     */
    promptToChangePasswordWithUsernames(browser: any, logins: any, aNewLogin: any): void;
}
