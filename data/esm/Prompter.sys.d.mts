export function Prompter(): void;
export class Prompter {
    classID: unknown;
    QueryInterface: MozQueryInterface;
    pickPrompter(options: any): ModalPrompter;
    getPrompt(domWin: any, iid: any): any;
    /**
     * Puts up an alert dialog with an OK button.
     * @param {mozIDOMWindowProxy} domWin - The parent window or null.
     * @param {String} title - Text to appear in the title of the dialog.
     * @param {String} text - Text to appear in the body of the dialog.
     */
    alert(domWin: mozIDOMWindowProxy, title: string, text: string): void;
    /**
     * Puts up an alert dialog with an OK button.
     * @param {BrowsingContext} browsingContext - The browsing context the
     *        prompt should be opened for.
     * @param {Number} modalType - The modal type of the prompt.
     *        nsIPromptService.<MODAL_TYPE_WINDOW|MODAL_TYPE_TAB|MODAL_TYPE_CONTENT>
     * @param {String} title - Text to appear in the title of the dialog.
     * @param {String} text - Text to appear in the body of the dialog.
     */
    alertBC(browsingContext: BrowsingContext, modalType: number, ...promptArgs: any[]): void;
    /**
     * Puts up an alert dialog with an OK button.
     *
     * @param {BrowsingContext} browsingContext - The browsing context the
     *        prompt should be opened for.
     * @param {Number} modalType - The modal type of the prompt.
     *        nsIPromptService.<MODAL_TYPE_WINDOW|MODAL_TYPE_TAB|MODAL_TYPE_CONTENT>
     * @param {String} title - Text to appear in the title of the dialog.
     * @param {String} text - Text to appear in the body of the dialog.
     * @returns {Promise} A promise which resolves when the prompt is dismissed.
     */
    asyncAlert(browsingContext: BrowsingContext, modalType: number, ...promptArgs: any[]): Promise<any>;
    /**
     * Puts up an alert dialog with an OK button and a labeled checkbox.
     * @param {mozIDOMWindowProxy} domWin - The parent window or null.
     * @param {String} title - Text to appear in the title of the dialog.
     * @param {String} text - Text to appear in the body of the dialog.
     * @param {String} checkLabel - Text to appear with the checkbox.
     * @param {Object} checkValue - Contains the initial checked state of the
     *        checkbox when this method is called and the final checked state
     *        after this method returns.
     */
    alertCheck(domWin: mozIDOMWindowProxy, title: string, text: string, checkLabel: string, checkValue: any): void;
    /**
     * Puts up an alert dialog with an OK button and a labeled checkbox.
     * @param {BrowsingContext} browsingContext - The browsing context the
     *        prompt should be opened for.
     * @param {Number} modalType - The modal type of the prompt.
     *        nsIPromptService.<MODAL_TYPE_WINDOW|MODAL_TYPE_TAB|MODAL_TYPE_CONTENT>
     * @param {String} title - Text to appear in the title of the dialog.
     * @param {String} text - Text to appear in the body of the dialog.
     * @param {String} checkLabel - Text to appear with the checkbox.
     * @param {Object} checkValue - Contains the initial checked state of the
     *        checkbox when this method is called and the final checked state
     *        after this method returns.
     */
    alertCheckBC(browsingContext: BrowsingContext, modalType: number, ...promptArgs: any[]): void;
    /**
     * Puts up an alert dialog with an OK button and a labeled checkbox.
     * @param {BrowsingContext} browsingContext - The browsing context the
     *        prompt should be opened for.
     * @param {Number} modalType - The modal type of the prompt.
     *        nsIPromptService.<MODAL_TYPE_WINDOW|MODAL_TYPE_TAB|MODAL_TYPE_CONTENT>
     * @param {String} title - Text to appear in the title of the dialog.
     * @param {String} text - Text to appear in the body of the dialog.
     * @param {String} checkLabel - Text to appear with the checkbox.
     * @param {Boolean} checkValue - The initial checked state of the checkbox.
     * @returns {Promise<nsIPropertyBag<{ checked: Boolean }>>}
     *          A promise which resolves when the prompt is dismissed.
     */
    asyncAlertCheck(browsingContext: BrowsingContext, modalType: number, ...promptArgs: any[]): Promise<nsIPropertyBag<{
        checked: boolean;
    }>>;
    /**
     * Puts up a dialog with OK and Cancel buttons.
     * @param {mozIDOMWindowProxy} domWin - The parent window or null.
     * @param {String} title - Text to appear in the title of the dialog.
     * @param {String} text - Text to appear in the body of the dialog.
     * @returns {Boolean} true for OK, false for Cancel.
     */
    confirm(domWin: mozIDOMWindowProxy, title: string, text: string): boolean;
    /**
     * Puts up a dialog with OK and Cancel buttons.
     * @param {BrowsingContext} browsingContext - The browsing context the
     *        prompt should be opened for.
     * @param {Number} modalType - The modal type of the prompt.
     *        nsIPromptService.<MODAL_TYPE_WINDOW|MODAL_TYPE_TAB|MODAL_TYPE_CONTENT>
     * @param {String} title - Text to appear in the title of the dialog.
     * @param {String} text - Text to appear in the body of the dialog.
     * @returns {Boolean} true for OK, false for Cancel.
     */
    confirmBC(browsingContext: BrowsingContext, modalType: number, ...promptArgs: any[]): boolean;
    /**
     * Puts up a dialog with OK and Cancel buttons.
     * @param {BrowsingContext} browsingContext - The browsing context the
     *        prompt should be opened for.
     * @param {Number} modalType - The modal type of the prompt.
     *        nsIPromptService.<MODAL_TYPE_WINDOW|MODAL_TYPE_TAB|MODAL_TYPE_CONTENT>
     * @param {String} title - Text to appear in the title of the dialog.
     * @param {String} text - Text to appear in the body of the dialog.
     * @returns {Promise<nsIPropertyBag<{ ok: Boolean }>>}
     *          A promise which resolves when the prompt is dismissed.
     */
    asyncConfirm(browsingContext: BrowsingContext, modalType: number, ...promptArgs: any[]): Promise<nsIPropertyBag<{
        ok: boolean;
    }>>;
    /**
     * Puts up a dialog with OK and Cancel buttons and a labeled checkbox.
     * @param {mozIDOMWindowProxy} domWin - The parent window or null.
     * @param {String} title - Text to appear in the title of the dialog.
     * @param {String} text - Text to appear in the body of the dialog.
     * @param {String} checkLabel - Text to appear with the checkbox.
     * @param {Object} checkValue - Contains the initial checked state of the
     *        checkbox when this method is called and the final checked state
     *        after this method returns.
     */
    confirmCheck(domWin: mozIDOMWindowProxy, title: string, text: string, checkLabel: string, checkValue: any): boolean | Promise<nsIPropertyBag>;
    /**
     * Puts up a dialog with OK and Cancel buttons and a labeled checkbox.
     * @param {BrowsingContext} browsingContext - The browsing context the
     *        prompt should be opened for.
     * @param {Number} modalType - The modal type of the prompt.
     *        nsIPromptService.<MODAL_TYPE_WINDOW|MODAL_TYPE_TAB|MODAL_TYPE_CONTENT>
     * @param {String} title - Text to appear in the title of the dialog.
     * @param {String} text - Text to appear in the body of the dialog.
     * @param {String} checkLabel - Text to appear with the checkbox.
     * @param {Object} checkValue - Contains the initial checked state of the
     *        checkbox when this method is called and the final checked state
     *        after this method returns.
     * @returns {Boolean} true for OK, false for Cancel
     */
    confirmCheckBC(browsingContext: BrowsingContext, modalType: number, ...promptArgs: any[]): boolean;
    /**
     * Puts up a dialog with OK and Cancel buttons and a labeled checkbox.
     * @param {BrowsingContext} browsingContext - The browsing context the
     *        prompt should be opened for.
     * @param {Number} modalType - The modal type of the prompt.
     *        nsIPromptService.<MODAL_TYPE_WINDOW|MODAL_TYPE_TAB|MODAL_TYPE_CONTENT>
     * @param {String} title - Text to appear in the title of the dialog.
     * @param {String} text - Text to appear in the body of the dialog.
     * @param {String} checkLabel - Text to appear with the checkbox.
     * @param {Boolean} checkValue - The initial checked state of the checkbox.
     * @returns {Promise<nsIPropertyBag<{ ok: Boolean, checked: Boolean }>>}
     *          A promise which resolves when the prompt is dismissed.
     */
    asyncConfirmCheck(browsingContext: BrowsingContext, modalType: number, ...promptArgs: any[]): Promise<nsIPropertyBag<{
        ok: boolean;
        checked: boolean;
    }>>;
    /**
     * Puts up a dialog with up to 3 buttons and an optional, labeled checkbox.
     *
     * Buttons are numbered 0 - 2. Button 0 is the default button unless one of
     * the Button Default Flags is specified.
     *
     * A button may use a predefined title, specified by one of the Button Title
     * Flags values.  Each title value can be multiplied by a position value to
     * assign the title to a particular button.  If BUTTON_TITLE_IS_STRING is
     * used for a button, the string parameter for that button will be used.  If
     * the value for a button position is zero, the button will not be shown.
     *
     * In general, flags is constructed per the following example:
     *
     * flags = (BUTTON_POS_0) * (BUTTON_TITLE_AAA) +
     *         (BUTTON_POS_1) * (BUTTON_TITLE_BBB) +
     *         BUTTON_POS_1_DEFAULT;
     *
     * where "AAA" and "BBB" correspond to one of the button titles.
     *
     * @param {mozIDOMWindowProxy} domWin - The parent window or null.
     * @param {String} title - Text to appear in the title of the dialog.
     * @param {String} text - Text to appear in the body of the dialog.
     * @param {Number} flags - A combination of Button Flags.
     * @param {String} button0 - Used when button 0 uses TITLE_IS_STRING.
     * @param {String} button1 - Used when button 1 uses TITLE_IS_STRING.
     * @param {String} button2 - Used when button 2 uses TITLE_IS_STRING.
     * @param {String} checkLabel - Text to appear with the checkbox.
     *        Null if no checkbox.
     * @param {Object} checkValue - Contains the initial checked state of the
     *        checkbox when this method
     *        is called and the final checked state after this method returns.
     * @returns {Number} The index of the button pressed.
     */
    confirmEx(domWin: mozIDOMWindowProxy, title: string, text: string, flags: number, button0: string, button1: string, button2: string, checkLabel: string, checkValue: any): number;
    /**
     * Puts up a dialog with up to 3 buttons and an optional, labeled checkbox.
     * @param {BrowsingContext} browsingContext - The browsing context the
     *        prompt should be opened for.
     * @param {Number} modalType - The modal type of the prompt.
     *        nsIPromptService.<MODAL_TYPE_WINDOW|MODAL_TYPE_TAB|MODAL_TYPE_CONTENT>
     * @param {String} title - Text to appear in the title of the dialog.
     * @param {String} text - Text to appear in the body of the dialog.
     * @param {Number} flags - A combination of Button Flags.
     * @param {String} button0 - Used when button 0 uses TITLE_IS_STRING.
     * @param {String} button1 - Used when button 1 uses TITLE_IS_STRING.
     * @param {String} button2 - Used when button 2 uses TITLE_IS_STRING.
     * @param {String} checkLabel - Text to appear with the checkbox.
     *        Null if no checkbox.
     * @param {Object} checkValue - Contains the initial checked state of the
     *        checkbox when this method is called and the final checked state
     *        after this method returns.
     * @returns {Number} The index of the button pressed.
     */
    confirmExBC(browsingContext: BrowsingContext, modalType: number, ...promptArgs: any[]): number;
    /**
     * Puts up a dialog with up to 3 buttons and an optional, labeled checkbox.
     * @param {BrowsingContext} browsingContext - The browsing context the
     *        prompt should be opened for.
     * @param {Number} modalType - The modal type of the prompt.
     *        nsIPromptService.<MODAL_TYPE_WINDOW|MODAL_TYPE_TAB|MODAL_TYPE_CONTENT>
     * @param {String} title - Text to appear in the title of the dialog.
     * @param {String} text - Text to appear in the body of the dialog.
     * @param {Number} flags - A combination of Button Flags.
     * @param {String} button0 - Used when button 0 uses TITLE_IS_STRING.
     * @param {String} button1 - Used when button 1 uses TITLE_IS_STRING.
     * @param {String} button2 - Used when button 2 uses TITLE_IS_STRING.
     * @param {String} checkLabel - Text to appear with the checkbox.
     *        Null if no checkbox.
     * @param {Boolean} checkValue - The initial checked state of the checkbox.
     * @param {Object} [extraArgs] - Extra arguments for the prompt metadata.
     * @returns {Promise<nsIPropertyBag<{ buttonNumClicked: Number, checked: Boolean }>>}
     */
    asyncConfirmEx(browsingContext: BrowsingContext, modalType: number, ...promptArgs: any[]): Promise<nsIPropertyBag<{
        buttonNumClicked: number;
        checked: boolean;
    }>>;
    /**
     * Puts up a dialog with an edit field and an optional, labeled checkbox.
     * @param {mozIDOMWindowProxy} domWin - The parent window or null.
     * @param {String} title - Text to appear in the title of the dialog.
     * @param {String} text - Text to appear in the body of the dialog.
     * @param {Object} value - Contains the default value for the dialog field
     *        when this method is called (null value is ok).  Upon return, if
     *        the user pressed OK, then this parameter contains a newly
     *        allocated string value.
     *        Otherwise, the parameter's value is unmodified.
     * @param {String} checkLabel - Text to appear with the checkbox.
     *        If null, check box will not be shown.
     * @param {Object} checkValue - Contains the initial checked state of the
     *        checkbox when this method is called and the final checked state
     *        after this method returns.
     * @returns {Boolean} true for OK, false for Cancel.
     */
    prompt(domWin: mozIDOMWindowProxy, title: string, text: string, value: any, checkLabel: string, checkValue: any): boolean;
    /**
     * Puts up a dialog with an edit field and an optional, labeled checkbox.
     * @param {BrowsingContext} browsingContext - The browsing context the
     *        prompt should be opened for.
     * @param {Number} modalType - The modal type of the prompt.
     *        nsIPromptService.<MODAL_TYPE_WINDOW|MODAL_TYPE_TAB|MODAL_TYPE_CONTENT>
     * @param {String} title - Text to appear in the title of the dialog.
     * @param {String} text - Text to appear in the body of the dialog.
     * @param {Object} value - Contains the default value for the dialog field
     *        when this method is called (null value is ok).  Upon return, if
     *        the user pressed OK, then this parameter contains a newly
     *        allocated string value.
     *        Otherwise, the parameter's value is unmodified.
     * @param {String} checkLabel - Text to appear with the checkbox.
     *        If null, check box will not be shown.
     * @param {Object} checkValue - Contains the initial checked state of the
     *        checkbox when this method is called and the final checked state
     *        after this method returns.
     * @returns {Boolean} true for OK, false for Cancel.
     */
    promptBC(browsingContext: BrowsingContext, modalType: number, ...promptArgs: any[]): boolean;
    /**
     * Puts up a dialog with an edit field and an optional, labeled checkbox.
     * @param {BrowsingContext} browsingContext - The browsing context the
     *        prompt should be opened for.
     * @param {Number} modalType - The modal type of the prompt.
     *        nsIPromptService.<MODAL_TYPE_WINDOW|MODAL_TYPE_TAB|MODAL_TYPE_CONTENT>
     * @param {String} title - Text to appear in the title of the dialog.
     * @param {String} text - Text to appear in the body of the dialog.
     * @param {String} value - The default value for the dialog text field.
     * @param {String} checkLabel - Text to appear with the checkbox.
     *        If null, check box will not be shown.
     * @param {Boolean} checkValue - The initial checked state of the checkbox.
     * @returns {Promise<nsIPropertyBag<{ ok: Boolean, checked: Boolean, value: String }>>}
     *          A promise which resolves when the prompt is dismissed.
     */
    asyncPrompt(browsingContext: BrowsingContext, modalType: number, ...promptArgs: any[]): Promise<nsIPropertyBag<{
        ok: boolean;
        checked: boolean;
        value: string;
    }>>;
    /**
     * Puts up a dialog with an edit field and a password field.
     * @param {mozIDOMWindowProxy} domWin - The parent window or null.
     * @param {String} title - Text to appear in the title of the dialog.
     * @param {String} text - Text to appear in the body of the dialog.
     * @param {Object} user - Contains the default value for the username
     *        field when this method is called (null value is ok).
     *        Upon return, if the user pressed OK, then this parameter contains
     *        a newly allocated string value. Otherwise, the parameter's value
     *        is unmodified.
     * @param {Object} pass - Contains the default value for the password field
     *        when this method is called (null value is ok). Upon return, if the
     *        user pressed OK, this parameter contains a newly allocated string
     *        value. Otherwise, the parameter's value is unmodified.
     * @returns {Boolean} true for OK, false for Cancel.
     */
    promptUsernameAndPassword(domWin: mozIDOMWindowProxy, title: string, text: string, user: any, pass: any): boolean;
    /**
     * Puts up a dialog with an edit field and a password field.
     * @param {BrowsingContext} browsingContext - The browsing context the
     *        prompt should be opened for.
     * @param {Number} modalType - The modal type of the prompt.
     *        nsIPromptService.<MODAL_TYPE_WINDOW|MODAL_TYPE_TAB|MODAL_TYPE_CONTENT>
     * @param {String} title - Text to appear in the title of the dialog.
     * @param {String} text - Text to appear in the body of the dialog.
     * @param {Object} user - Contains the default value for the username
     *        field when this method is called (null value is ok).
     *        Upon return, if the user pressed OK, then this parameter contains
     *        a newly allocated string value. Otherwise, the parameter's value
     *        is unmodified.
     * @param {Object} pass - Contains the default value for the password field
     *        when this method is called (null value is ok). Upon return, if the
     *        user pressed OK, this parameter contains a newly allocated string
     *        value. Otherwise, the parameter's value is unmodified.
     * @returns {Boolean} true for OK, false for Cancel.
     */
    promptUsernameAndPasswordBC(browsingContext: BrowsingContext, modalType: number, ...promptArgs: any[]): boolean;
    /**
     * Puts up a dialog with an edit field and a password field.
     * @param {BrowsingContext} browsingContext - The browsing context the
     *        prompt should be opened for.
     * @param {Number} modalType - The modal type of the prompt.
     *        nsIPromptService.<MODAL_TYPE_WINDOW|MODAL_TYPE_TAB|MODAL_TYPE_CONTENT>
     * @param {String} title - Text to appear in the title of the dialog.
     * @param {String} text - Text to appear in the body of the dialog.
     * @param {String} user - Default value for the username field.
     * @param {String} pass - Contains the default value for the password field.
     * @returns {Promise<nsIPropertyBag<{ ok: Boolean, user: String, pass: String }>>}
     *          A promise which resolves when the prompt is dismissed.
     */
    asyncPromptUsernameAndPassword(browsingContext: BrowsingContext, modalType: number, ...promptArgs: any[]): Promise<nsIPropertyBag<{
        ok: boolean;
        user: string;
        pass: string;
    }>>;
    /**
     * Puts up a dialog with a password field.
     * @param {mozIDOMWindowProxy} domWin - The parent window or null.
     * @param {String} title - Text to appear in the title of the dialog.
     * @param {String} text - Text to appear in the body of the dialog.
     * @param {Object} pass - Contains the default value for the password field
     *        when this method is called (null value is ok). Upon return, if the
     *        user pressed OK, this parameter contains a newly allocated string
     *        value. Otherwise, the parameter's value is unmodified.
     * @returns {Boolean} true for OK, false for Cancel.
     */
    promptPassword(domWin: mozIDOMWindowProxy, title: string, text: string, pass: any): boolean;
    /**
     * Puts up a dialog with a password field.
     * @param {BrowsingContext} browsingContext - The browsing context the
     *        prompt should be opened for.
     * @param {Number} modalType - The modal type of the prompt.
     *        nsIPromptService.<MODAL_TYPE_WINDOW|MODAL_TYPE_TAB|MODAL_TYPE_CONTENT>
     * @param {String} title - Text to appear in the title of the dialog.
     * @param {String} text - Text to appear in the body of the dialog.
     * @param {Object} pass - Contains the default value for the password field
     *        when this method is called (null value is ok). Upon return, if the
     *        user pressed OK, this parameter contains a newly allocated string
     *        value. Otherwise, the parameter's value is unmodified.
     * @returns {Boolean} true for OK, false for Cancel.
     */
    promptPasswordBC(browsingContext: BrowsingContext, modalType: number, ...promptArgs: any[]): boolean;
    /**
     * Puts up a dialog with a password field.
     * @param {BrowsingContext} browsingContext - The browsing context the
     *        prompt should be opened for.
     * @param {Number} modalType - The modal type of the prompt.
     *        nsIPromptService.<MODAL_TYPE_WINDOW|MODAL_TYPE_TAB|MODAL_TYPE_CONTENT>
     * @param {String} title - Text to appear in the title of the dialog.
     * @param {String} text - Text to appear in the body of the dialog.
     * @param {String} pass - Contains the default value for the password field.
     * @returns {Promise<nsIPropertyBag<{ ok: Boolean, pass: String }>>}
     *          A promise which resolves when the prompt is dismissed.
     */
    asyncPromptPassword(browsingContext: BrowsingContext, modalType: number, ...promptArgs: any[]): Promise<nsIPropertyBag<{
        ok: boolean;
        pass: string;
    }>>;
    /**
     * Puts up a dialog box which has a list box of strings from which the user
     * may make a single selection.
     * @param {mozIDOMWindowProxy} domWin - The parent window or null.
     * @param {String} title - Text to appear in the title of the dialog.
     * @param {String} text - Text to appear in the body of the dialog.
     * @param {String[]} list - The list of strings to display.
     * @param {Object} selected - Contains the index of the selected item in the
     *        list when this method returns true.
     * @returns {Boolean} true for OK, false for Cancel.
     */
    select(domWin: mozIDOMWindowProxy, title: string, text: string, list: string[], selected: any): boolean;
    /**
     * Puts up a dialog box which has a list box of strings from which the user
     * may make a single selection.
     * @param {BrowsingContext} browsingContext - The browsing context the
     *        prompt should be opened for.
     * @param {Number} modalType - The modal type of the prompt.
     *        nsIPromptService.<MODAL_TYPE_WINDOW|MODAL_TYPE_TAB|MODAL_TYPE_CONTENT>
     * @param {String} title - Text to appear in the title of the dialog.
     * @param {String} text - Text to appear in the body of the dialog.
     * @param {String[]} list - The list of strings to display.
     * @param {Object} selected - Contains the index of the selected item in the
     *        list when this method returns true.
     * @returns {Boolean} true for OK, false for Cancel.
     */
    selectBC(browsingContext: BrowsingContext, modalType: number, ...promptArgs: any[]): boolean;
    /**
     * Puts up a dialog box which has a list box of strings from which the user
     * may make a single selection.
     * @param {BrowsingContext} browsingContext - The browsing context the
     *        prompt should be opened for.
     * @param {Number} modalType - The modal type of the prompt.
     *        nsIPromptService.<MODAL_TYPE_WINDOW|MODAL_TYPE_TAB|MODAL_TYPE_CONTENT>
     * @param {String} title - Text to appear in the title of the dialog.
     * @param {String} text - Text to appear in the body of the dialog.
     * @param {String[]} list - The list of strings to display.
     * @returns {Promise<nsIPropertyBag<{ selected: Number, ok: Boolean  }>>}
     *          A promise which resolves when the prompt is dismissed.
     */
    asyncSelect(browsingContext: BrowsingContext, modalType: number, ...promptArgs: any[]): Promise<nsIPropertyBag<{
        selected: number;
        ok: boolean;
    }>>;
    /**
     * Requests a username and a password. Shows a dialog with username and
     * password field, depending on flags also a domain field.
     * @param {mozIDOMWindowProxy} domWin - The parent window or null.
     * @param {nsIChannel} channel - The channel that requires authentication.
     * @param {Number} level - Security level of the credential transmission.
     *        Any of nsIAuthPrompt2.<LEVEL_NONE|LEVEL_PW_ENCRYPTED|LEVEL_SECURE>
     * @param {nsIAuthInformation} authInfo - Authentication information object.
     * @returns {Boolean}
     *          true: Authentication can proceed using the values
     *          in the authInfo object.
     *          false: Authentication should be cancelled, usually because the
     *          user did not provide username/password.
     */
    promptAuth(domWin: mozIDOMWindowProxy, channel: nsIChannel, level: number, authInfo: nsIAuthInformation): boolean;
    /**
     * Requests a username and a password. Shows a dialog with username and
     * password field, depending on flags also a domain field.
     * @param {BrowsingContext} browsingContext - The browsing context the
     *        prompt should be opened for.
     * @param {Number} modalType - The modal type of the prompt.
     *        nsIPromptService.<MODAL_TYPE_WINDOW|MODAL_TYPE_TAB|MODAL_TYPE_CONTENT>
     * @param {nsIChannel} channel - The channel that requires authentication.
     * @param {Number} level - Security level of the credential transmission.
     *        Any of nsIAuthPrompt2.<LEVEL_NONE|LEVEL_PW_ENCRYPTED|LEVEL_SECURE>
     * @param {nsIAuthInformation} authInfo - Authentication information object.
     * @returns {Boolean}
     *          true: Authentication can proceed using the values
     *          in the authInfo object.
     *          false: Authentication should be cancelled, usually because the
     *          user did not provide username/password.
     */
    promptAuthBC(browsingContext: BrowsingContext, modalType: number, ...promptArgs: any[]): boolean;
    /**
     * Requests a username and a password. Shows a dialog with username and
     * password field, depending on flags also a domain field.
     * @param {BrowsingContext} browsingContext - The browsing context the
     *        prompt should be opened for.
     * @param {Number} modalType - The modal type of the prompt.
     *        nsIPromptService.<MODAL_TYPE_WINDOW|MODAL_TYPE_TAB|MODAL_TYPE_CONTENT>
     * @param {nsIChannel} channel - The channel that requires authentication.
     * @param {Number} level - Security level of the credential transmission.
     *        Any of nsIAuthPrompt2.<LEVEL_NONE|LEVEL_PW_ENCRYPTED|LEVEL_SECURE>
     * @param {nsIAuthInformation} authInfo - Authentication information object.
     * @returns {Promise<nsIPropertyBag<{ ok: Boolean }>>}
     *          A promise which resolves when the prompt is dismissed.
     */
    asyncPromptAuth(browsingContext: BrowsingContext, modalType: number, ...promptArgs: any[]): Promise<nsIPropertyBag<{
        ok: boolean;
    }>>;
}
export function AuthPromptAdapterFactory(): void;
export class AuthPromptAdapterFactory {
    classID: unknown;
    QueryInterface: MozQueryInterface;
    createAdapter(oldPrompter: any): AuthPromptAdapter;
}
declare class ModalPrompter {
    constructor({ browsingContext, domWin, modalType, async, }: {
        browsingContext?: any;
        domWin?: any;
        modalType?: any;
        async?: boolean;
    });
    browsingContext: any;
    set modalType(modalType: any);
    get modalType(): any;
    async: boolean;
    QueryInterface: MozQueryInterface;
    _modalType: any;
    /**
     * Synchronous wrapper around {@link ModalPrompter#openPrompt}
     * @param {Object} args Prompt arguments. When prompt has been closed, they are updated to reflect the result state.
     */
    openPromptSync(args: any): void;
    openPrompt(args: any): Promise<any>;
    /**
     * Open a window modal prompt
     *
     * There's an implied contract that says modal prompts should still work when
     * no "parent" window is passed for the dialog (eg, the "Master Password"
     * dialog does this).  These prompts must be shown even if there are *no*
     * visible windows at all.
     * We try and find a window to use as the parent, but don't consider if that
     * is visible before showing the prompt. parentWindow may still be null if
     * there are _no_ windows open.
     * @param {Window} [parentWindow] - The parent window for the prompt, may be
     *        null.
     * @param {Object} args - Prompt options and return values.
     */
    openWindowPrompt(parentWindow?: Window, args: any): void;
    openInternalWindowPrompt(parentWindow: any, args: any): Promise<void>;
    /**
     * Calls async prompt method and optionally runs promise chained task on
     * result data. Converts result data to nsIPropertyBag.
     * @param {Object} args - Prompt arguments.
     * @param {Function} [task] - Function which is called with the modified
     *  prompt args object once the prompt has been closed. Must return a
     *  result object for the prompt caller.
     * @returns {Promise<nsIPropertyBag>} - Resolves with a property bag holding the
     * prompt result properties. Resolves once prompt has been closed.
     */
    openPromptAsync(args: any, task?: Function): Promise<nsIPropertyBag>;
    prompt(...args: any[]): any;
    promptUsernameAndPassword(...args: any[]): any;
    promptPassword(...args: any[]): any;
    alert(title: any, text: any): void | Promise<nsIPropertyBag>;
    alertCheck(title: any, text: any, checkLabel: any, checkValue: any): Promise<nsIPropertyBag>;
    confirm(title: any, text: any): boolean | Promise<nsIPropertyBag>;
    confirmCheck(title: any, text: any, checkLabel: any, checkValue: any): boolean | Promise<nsIPropertyBag>;
    confirmEx(title: any, text: any, flags: any, button0: any, button1: any, button2: any, checkLabel: any, checkValue: any, extraArgs?: {}): number | Promise<nsIPropertyBag>;
    nsIPrompt_prompt(title: any, text: any, value: any, checkLabel: any, checkValue: any): boolean | Promise<nsIPropertyBag>;
    nsIPrompt_promptUsernameAndPassword(channel: any, title: any, text: any, user: any, pass: any): boolean | Promise<nsIPropertyBag>;
    nsIPrompt_promptPassword(channel: any, title: any, text: any, pass: any): boolean | Promise<nsIPropertyBag>;
    select(title: any, text: any, list: any, selected: any): boolean | Promise<nsIPropertyBag>;
    nsIAuthPrompt_prompt(title: any, text: any, passwordRealm: any, savePassword: any, defaultText: any, result: any): boolean | Promise<nsIPropertyBag>;
    nsIAuthPrompt_promptUsernameAndPassword(title: any, text: any, passwordRealm: any, savePassword: any, user: any, pass: any): boolean | Promise<nsIPropertyBag>;
    nsIAuthPrompt_promptPassword(title: any, text: any, passwordRealm: any, savePassword: any, pass: any): boolean | Promise<nsIPropertyBag>;
    promptAuth(channel: any, level: any, authInfo: any): any;
    asyncPromptAuth(channel: any, callback: any, context: any, level: any, authInfo: any, checkLabel: any, checkValue: any): void;
    setPropertyAsUint32(name: any, value: any): void;
}
declare function AuthPromptAdapter(oldPrompter: any): void;
declare class AuthPromptAdapter {
    constructor(oldPrompter: any);
    oldPrompter: null;
    QueryInterface: MozQueryInterface;
    promptAuth(channel: any, level: any, authInfo: any, checkLabel: any, checkValue: any): any;
    asyncPromptAuth(channel: any, callback: any, context: any, level: any, authInfo: any, checkLabel: any, checkValue: any): never;
}
export {};
