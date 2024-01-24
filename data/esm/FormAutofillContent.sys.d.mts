export namespace FormAutofillContent {
    const savedFieldNames: Set<any>;
    let _popupPending: boolean;
    let _autofillPending: boolean;
    function init(): void;
    const activeFieldDetail: any;
    const activeFormDetails: any;
    const activeInput: any;
    const activeHandler: any;
    const activeSection: any;
    /**
     * Send the profile to parent for doorhanger and storage saving/updating.
     *
     * @param {object} profile Submitted form's address/creditcard guid and record.
     * @param {object} domWin Current content window.
     */
    function _onFormSubmit(profile: any, domWin: any): void;
    /**
     * Handle a form submission and early return when:
     * 1. In private browsing mode.
     * 2. Could not map any autofill handler by form element.
     * 3. Number of filled fields is less than autofill threshold
     *
     * @param {HTMLElement} formElement Root element which receives submit event.
     * @param {string} formSubmissionReason Reason for invoking the form submission
     *                 (see options for FORM_SUBMISSION_REASON in FormAutofillChild))
     * @param {Window} domWin Content window; passed for unit tests and when
     *                 invoked by the FormAutofillSection
     * @param {object} handler FormAutofillHander, if known by caller
     */
    function formSubmitted(formElement: HTMLElement, formSubmissionReason: string, domWin?: Window, handler?: any): void;
    function _showPopup(): void;
    function handleEvent(evt: any): void;
    /**
     * All active items should be updated according the active element of
     * `formFillController.focusedInput`. All of them including element,
     * handler, section, and field detail, can be retrieved by their own getters.
     *
     * @param {HTMLElement|null} element The active item should be updated based
     * on this or `formFillController.focusedInput` will be taken.
     */
    function updateActiveInput(element: HTMLElement): void;
    let autofillPending: any;
    /**
     * Identifies and marks each autofill field
     *
     * @param {HTMLElement} element
     *        Element that serves as an anchor for the formautofill heuristics to retrieve
     *        the root form and run the formautofill heuristics on the form elements
     * @returns {boolean}
     *        whether any autofill fields were identified
     */
    function identifyAutofillFields(element: HTMLElement): boolean;
    function clearForm(): void;
    function previewProfile(doc: any): void;
    function onPopupClosed(selectedRowStyle: any): void;
    function onPopupOpened(): void;
    function _markAsAutofillField(field: any): void;
    function _onKeyDown(e: any): void;
    function didDestroy(): void;
}
