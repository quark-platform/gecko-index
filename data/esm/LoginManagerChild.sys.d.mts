export namespace AUTOFILL_RESULT {
    let FILLED: string;
    let NO_PASSWORD_FIELD: string;
    let PASSWORD_DISABLED_READONLY: string;
    let NO_LOGINS_FIT: string;
    let NO_SAVED_LOGINS: string;
    let EXISTING_PASSWORD: string;
    let EXISTING_USERNAME: string;
    let MULTIPLE_LOGINS: string;
    let NO_AUTOFILL_FORMS: string;
    let AUTOCOMPLETE_OFF: string;
    let INSECURE: string;
    let PASSWORD_AUTOCOMPLETE_NEW_PASSWORD: string;
    let TYPE_NO_LONGER_PASSWORD: string;
    let FORM_IN_CROSSORIGIN_SUBFRAME: string;
    let FILLED_USERNAME_ONLY_FORM: string;
}
/**
 * Logic of Capture and Filling.
 *
 * This class will be shared with Firefox iOS and should have no references to
 * Gecko internals. See Bug 1774208.
 */
export class LoginFormState {
    /** Remove login field highlight when its value is cleared or overwritten.
     */
    static "__#1123177@#removeFillFieldHighlight"(event: any): void;
    /**
     * Highlight login fields on autocomplete or autofill on page load.
     * @param {Node} element that needs highlighting.
     */
    static _highlightFilledField(element: Node): void;
    /**
     * @param {LoginForm} form - the LoginForm to look for password fields in.
     * @param {Object} options
     * @param {bool} [options.skipEmptyFields=false] - Whether to ignore password fields with no value.
     *                                                 Used at capture time since saving empty values isn't
     *                                                 useful.
     * @param {Object} [options.fieldOverrideRecipe=null] - A relevant field override recipe to use.
     * @return {Array|null} Array of password field elements for the specified form.
     *                      If no pw fields are found, or if more than 5 are found, then null
     *                      is returned.
     */
    static _getPasswordFields(form: LoginForm, { fieldOverrideRecipe, minPasswordLength, ignoreConnect, }?: {
        skipEmptyFields?: bool;
        fieldOverrideRecipe?: any;
    }): any[] | null;
    /**
     * Keeps track of filled fields and values.
     */
    fillsByRootElement: WeakMap<WeakKey, any>;
    /**
     * Keeps track of fields we've filled with generated passwords
     */
    generatedPasswordFields: WeakFieldSet;
    /**
     * Keeps track of logins that were last submitted.
     */
    lastSubmittedValuesByRootElement: WeakMap<WeakKey, any>;
    fieldModificationsByRootElement: WeakMap<WeakKey, any>;
    /**
     * Anything entered into an <input> that we think might be a username
     */
    possibleUsernames: Set<any>;
    /**
     * Anything entered into an <input> that we think might be a password
     */
    possiblePasswords: Set<any>;
    /**
     * Keeps track of the formLike of nodes (form or formless password field)
     * that we are watching when they are removed from DOM.
     */
    formLikeByObservedNode: WeakMap<WeakKey, any>;
    /**
     * Keeps track of all formless password fields that have been
     * updated by the user.
     */
    formlessModifiedPasswordFields: WeakFieldSet;
    /**
     * Records the mock username field when its associated form is submitted.
     */
    mockUsernameOnlyField: any;
    /**
     * Records the number of possible username event received for this document.
     */
    numFormHasPossibleUsernameEvent: number;
    captureLoginTimeStamp: number;
    getScenario(inputElement: any): any;
    setScenario(formLikeRoot: any, scenario: any): void;
    storeUserInput(field: any): void;
    /**
     * Returns true if the input field is considered an email field by
     * 'LoginHelper.isInferredEmailField'.
     *
     * @param {Element} element the field to check.
     * @returns {boolean} True if the element is likely an email field
     */
    isProbablyAnEmailField(inputElement: any): boolean;
    /**
     * Returns true if the input field is considered a username field by
     * 'LoginHelper.isInferredUsernameField'. The main purpose of this method
     * is to cache the result because _getFormFields has many call sites and we
     * want to avoid applying the heuristic every time.
     *
     * @param {Element} element the field to check.
     * @returns {boolean} True if the element is likely a username field
     */
    isProbablyAUsernameField(inputElement: any): boolean;
    _togglePasswordFieldMasking(passwordField: any, unmask: any): void;
    /**
     * Track a form field as has having been filled with a generated password. This adds explicit
     * focus & blur handling to unmask & mask the value, and enables special handling of edits to
     * generated password values (see the observer's input event handler.)
     *
     * @param {HTMLInputElement} passwordField
     */
    _treatAsGeneratedPasswordField(passwordField: HTMLInputElement): void;
    _formHasModifiedFields(form: any): any;
    _stopTreatingAsGeneratedPasswordField(passwordField: any): void;
    onFocus(field: any, focusedField: any): void;
    /**
     * Returns the username field of the passed form if the form is a
     * username-only form.
     * A form is considered a username-only form only if it meets all the
     * following conditions:
     * 1. Does not have any password field,
     * 2. Only contains one input field whose type is username compatible.
     * 3. The username compatible input field looks like a username field
     *    or the form itself looks like a sign-in or sign-up form.
     *
     * @param {Element} formElement
     *                  the form to check.
     * @param {Object}  recipe=null
     *                  A relevant field override recipe to use.
     * @returns {Element} The username field or null (if the form is not a
     *                    username-only form).
     */
    getUsernameFieldFromUsernameOnlyForm(formElement: Element, recipe?: any): Element;
    /**
     * Stores passed arguments, and returns whether or not they match the args given the last time
     * this method was called with the same [formLikeRoot]. This is used to avoid sending duplicate
     * messages to the parent.
     *
     * @param {Element} formLikeRoot
     * @param {string} usernameValue
     * @param {string} passwordValue
     * @param {boolean?} [dismissed=false]
     * @param {boolean?} [triggeredByFillingGenerated=false] whether or not this call was triggered by a generated
     *        password being filled into a form-like element.
     *
     * @returns {boolean} true if args match the most recently passed values
     */
    compareAndUpdatePreviouslySentValues(formLikeRoot: Element, usernameValue: string, passwordValue: string, dismissed?: boolean | null, triggeredByFillingGenerated?: boolean | null): boolean;
    fillConfirmFieldWithGeneratedPassword(passwordField: any): void;
    /**
     * Returns the username and password fields found in the form.
     * Can handle complex forms by trying to figure out what the
     * relevant fields are.
     *
     * @param {LoginForm} form
     * @param {bool} isSubmission
     * @param {Set} recipes
     * @param {Object} options
     * @param {bool} [options.ignoreConnect] - Whether to ignore checking isConnected
     *                                         of the element.
     * @return {Object} {usernameField, newPasswordField, oldPasswordField, confirmPasswordField}
     *
     * usernameField may be null.
     * newPasswordField may be null. If null, this is a username-only form.
     * oldPasswordField may be null. If null, newPasswordField is just
     * "theLoginField". If not null, the form is apparently a
     * change-password field, with oldPasswordField containing the password
     * that is being changed.
     *
     * Note that even though we can create a LoginForm from a text field,
     * this method will only return a non-null usernameField if the
     * LoginForm has a password field.
     */
    _getFormFields(form: LoginForm, isSubmission: bool, recipes: Set<any>, { ignoreConnect }?: {
        ignoreConnect?: bool;
    }): any;
    /**
     * Returns the username and password fields found in the form by input
     * element into form.
     *
     * @param {HTMLInputElement} aField
     *                           A form field
     * @return {Array} [usernameField, newPasswordField, oldPasswordField]
     *
     * Details of these values are the same as _getFormFields.
     */
    getUserNameAndPasswordFields(aField: HTMLInputElement): any[];
    /**
     * Verify if a field is a valid login form field and
     * returns some information about it's LoginForm.
     *
     * @param {Element} aField
     *                  A form field we want to verify.
     *
     * @returns {Object} an object with information about the
     *                   LoginForm username and password field
     *                   or null if the passed field is invalid.
     */
    getFieldContext(aField: Element): any;
    #private;
}
/**
 * Integration with browser and IPC with LoginManagerParent.
 *
 * NOTE: there are still bits of code here that needs to be moved to
 * LoginFormState.
 */
export class LoginManagerChild extends JSWindowActorChild {
    static forWindow(window: any): any;
    receiveMessage(msg: any): boolean;
    repopulateAutocompletePopup(): void;
    shouldIgnoreLoginManagerEvent(event: any): any;
    registerDOMDocFetchSuccessEventListener(document: any): void;
    unregisterDOMDocFetchSuccessEventListener(document: any): void;
    handleEvent(event: any): void;
    notifyObserversOfFormProcessed(formid: any): void;
    /**
     * Get relevant logins and recipes from the parent
     *
     * @param {HTMLFormElement} form - form to get login data for
     * @param {Object} options
     * @param {boolean} options.guid - guid of a login to retrieve
     * @param {boolean} options.showPrimaryPassword - whether to show a primary password prompt
     */
    _getLoginDataFromParent(form: HTMLFormElement, options: {
        guid: boolean;
        showPrimaryPassword: boolean;
    }): Promise<{
        form: HTMLFormElement;
        importable: any;
        loginsFound: any;
        recipes: any;
    }>;
    setupProgressListener(window: any): void;
    onDocumentVisibilityChange(event: any): void;
    _deferHandlingEventUntilDocumentVisible(event: any, document: any, fn: any): void;
    _processDOMFormHasPasswordEvent(event: any): void;
    _processDOMFormHasPossibleUsernameEvent(event: any): void;
    _processDOMInputPasswordAddedEvent(event: any): void;
    /**
     * Fetch logins from the parent for a given form and then attempt to fill it.
     *
     * @param {LoginForm} form to fetch the logins for then try autofill.
     */
    _fetchLoginsFromParentAndFillForm(form: LoginForm): void;
    isPasswordGenerationForcedOn(passwordField: any): boolean;
    /**
     * Retrieves a reference to the state object associated with the given
     * document. This is initialized to an object with default values.
     */
    stateForDocument(document: any): any;
    /**
     * Perform a password fill upon user request coming from the parent process.
     * The fill will be in the form previously identified during page navigation.
     *
     * @param An object with the following properties:
     *        {
     *          loginFormOrigin:
     *            String with the origin for which the login UI was displayed.
     *            This must match the origin of the form used for the fill.
     *          loginsFound:
     *            Array containing the login to fill. While other messages may
     *            have more logins, for this use case this is expected to have
     *            exactly one element. The origin of the login may be different
     *            from the origin of the form used for the fill.
     *          recipes:
     *            Fill recipes transmitted together with the original message.
     *          inputElementIdentifier:
     *            An identifier generated for the input element via ContentDOMReference.
     *          originMatches:
     *            True if the origin of the form matches the page URI.
     *        }
     */
    fillForm({ loginFormOrigin, loginsFound, recipes, inputElementIdentifier, originMatches, style, }: {
        loginFormOrigin: any;
        loginsFound: any;
        recipes: any;
        inputElementIdentifier: any;
        originMatches: any;
        style: any;
    }): void;
    loginsFound({ form, importable, loginsFound, recipes }: {
        form: any;
        importable: any;
        loginsFound: any;
        recipes: any;
    }): void;
    /**
     * A username or password was autocompleted into a field.
     */
    onFieldAutoComplete(acInputField: any, loginGUID: any): void;
    /**
     * A username field was filled or tabbed away from so try fill in the
     * associated password in the password field.
     */
    onUsernameAutocompleted(acInputField: any, loginGUID?: any): void;
    /**
     * @return true if the page requests autocomplete be disabled for the
     *              specified element.
     */
    _isAutocompleteDisabled(element: any): boolean;
    /**
     * Fill a page that was restored from bfcache since we wouldn't receive
     * DOMInputPasswordAdded or DOMFormHasPassword events for it.
     * @param {Document} aDocument that was restored from bfcache.
     */
    _onDocumentRestored(aDocument: Document): void;
    /**
     * Trigger capture on any relevant FormLikes due to a navigation alone (not
     * necessarily due to an actual form submission). This method is used to
     * capture logins for cases where form submit events are not used.
     *
     * To avoid multiple notifications for the same LoginForm, this currently
     * avoids capturing when dealing with a real <form> which are ideally already
     * using a submit event.
     *
     * @param {Document} document being navigated
     */
    _onNavigation(aDocument: any): void;
    /**
     * Called by our observer when notified of a form submission.
     * [Note that this happens before any DOM onsubmit handlers are invoked.]
     * Looks for a password change in the submitted form, so we can update
     * our stored password.
     *
     * @param {LoginForm} form
     */
    _onFormSubmit(form: LoginForm, reason: any): void;
    /**
     * Extracts and validates information from a form-like element on the page.  If validation is
     * successful, sends a message to the parent process requesting that it show a dialog.
     *
     * The validation works are divided into two parts:
     * 1. Whether this is a valid form with a password (validate in this function)
     * 2. Whether the password manager decides to send interaction message for this form
     *    (validate in _maybeSendFormInteractionMessageContinue)
     *
     * When the function is triggered by a form submission event, and the form is valid (pass #1),
     * We still send the message to the parent even the validation of #2 fails. This is because
     * there might be someone who is interested in form submission events regardless of whether
     * the password manager decides to show the doorhanger or not.
     *
     * @param {LoginForm} form
     * @param {string} messageName used to categorize the type of message sent to the parent process.
     * @param {Element?} options.targetField
     * @param {boolean} options.isSubmission if true, this function call was prompted by a form submission.
     * @param {boolean?} options.triggeredByFillingGenerated whether or not this call was triggered by a
     *        generated password being filled into a form-like element.
     * @param {boolean?} options.ignoreConnect Whether to ignore isConnected attribute of a element.
     *
     * @returns {Boolean} whether the message is sent to the parent process.
     */
    _maybeSendFormInteractionMessage(form: LoginForm, messageName: string, { targetField, isSubmission, triggeredByFillingGenerated, ignoreConnect }: Element | null): boolean;
    /**
     * Continues the works that are not done in _maybeSendFormInteractionMessage.
     * See comments in _maybeSendFormInteractionMessage for more details.
     */
    _maybeSendFormInteractionMessageContinue(form: any, messageName: any, { targetField, usernameField, newPasswordField, oldPasswordField, confirmPasswordField, isSubmission, triggeredByFillingGenerated, }: {
        targetField: any;
        usernameField: any;
        newPasswordField: any;
        oldPasswordField: any;
        confirmPasswordField: any;
        isSubmission: any;
        triggeredByFillingGenerated: any;
    }): void;
    /**
     * Heuristic for whether or not we should consider [field]s value to be 'new' (as opposed to
     * 'changed') after applying [event].
     *
     * @param {HTMLInputElement} event.target input element being changed.
     * @param {string?} event.data new value being input into the field.
     *
     * @returns {boolean}
     */
    _doesEventClearPrevFieldValue({ target, data, inputType }: HTMLInputElement): boolean;
    /**
     * The password field has been filled with a generated password, ensure the
     * field is handled accordingly.
     * @param {HTMLInputElement} passwordField
     */
    _filledWithGeneratedPassword(passwordField: HTMLInputElement): void;
    /**
     * Notify the parent that we are ignoring the password edit
     * so that tests can listen for this as opposed to waiting for
     * nothing to happen.
     */
    _ignorePasswordEdit(): void;
    /**
     * Notify the parent that a generated password was filled into a field or
     * edited so that it can potentially be saved.
     * @param {HTMLInputElement} passwordField
     */
    _passwordEditedOrGenerated(passwordField: HTMLInputElement, { triggeredByFillingGenerated }?: {
        triggeredByFillingGenerated?: boolean;
    }): void;
    /**
     * Filter logins for exact origin/formActionOrigin and dedupe on usernamematche
     * @param {nsILoginInfo[]} logins an array of nsILoginInfo that could be
     *        used for the form, including ones with a different form action origin
     *        which are only used when the fill is userTriggered
     * @param {LoginForm} form
     */
    _filterForExactFormOriginLogins(logins: nsILoginInfo[], form: LoginForm): nsILoginInfo[];
    /**
     * Attempt to find the username and password fields in a form, and fill them
     * in using the provided logins and recipes.
     *
     * @param {LoginForm} form
     * @param {nsILoginInfo[]} foundLogins an array of nsILoginInfo that could be
     *        used for the form, including ones with a different form action origin
     *        which are only used when the fill is userTriggered
     * @param {Set} recipes a set of recipes that could be used to affect how the
     *        form is filled
     * @param {Object} [options = {}] a list of options for this method
     * @param {HTMLInputElement} [options.inputElement = null] an optional target
     *        input element we want to fill
     * @param {bool} [options.autofillForm = false] denotes if we should fill the
     *        form in automatically
     * @param {bool} [options.clobberUsername = false] controls if an existing
     *        username can be overwritten. If this is false and an inputElement
     *        of type password is also passed, the username field will be ignored.
     *        If this is false and no inputElement is passed, if the username
     *        field value is not found in foundLogins, it will not fill the
     *        password.
     * @param {bool} [options.clobberPassword = false] controls if an existing
     *        password value can be overwritten
     * @param {bool} [options.userTriggered = false] an indication of whether
     *        this filling was triggered by the user
     */
    _fillForm(form: LoginForm, foundLogins: nsILoginInfo[], recipes: Set<any>, { inputElement, autofillForm, importable, clobberUsername, clobberPassword, userTriggered, style, }?: {
        inputElement?: HTMLInputElement;
        autofillForm?: bool;
        clobberUsername?: bool;
        clobberPassword?: bool;
        userTriggered?: bool;
    }): void;
    getScenario(inputElement: any): any;
    #private;
}
declare class WeakFieldSet extends WeakSet<WeakKey> {
    constructor(values?: readonly WeakKey[]);
    constructor(iterable: Iterable<WeakKey>);
    add(value: any): void;
}
export {};
