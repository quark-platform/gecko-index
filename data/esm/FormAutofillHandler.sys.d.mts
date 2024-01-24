/**
 * Handles profile autofill for a DOM Form element.
 */
export class FormAutofillHandler {
    /**
     * Initialize the form from `FormLike` object to handle the section or form
     * operations.
     *
     * @param {FormLike} form Form that need to be auto filled
     * @param {Function} onFormSubmitted Function that can be invoked
     *                   to simulate form submission. Function is passed
     *                   four arguments: (1) a FormLike for the form being
     *                   submitted, (2) the reason for infering the form
     *                   submission (3) the corresponding Window, and (4)
     *                   the responsible FormAutofillHandler.
     * @param {Function} onAutofillCallback Function that can be invoked
     *                   when we want to suggest autofill on a form.
     */
    constructor(form: FormLike, onFormSubmitted?: Function, onAutofillCallback?: Function);
    window: any;
    winUtils: any;
    form: any;
    sections: any[];
    /**
     * Array of collected data about relevant form fields.  Each item is an object
     * storing the identifying details of the field and a reference to the
     * originally associated element from the form.
     *
     * The "section", "addressType", "contactType", and "fieldName" values are
     * used to identify the exact field when the serializable data is received
     * from the backend.  There cannot be multiple fields which have
     * the same exact combination of these values.
     *
     * A direct reference to the associated element cannot be sent to the user
     * interface because processing may be done in the parent process.
     */
    fieldDetails: any;
    FIELD_STATE_ENUM: {
        [x: number]: string;
    };
    /**
     * This function is used if the form handler (or one of its sections)
     * determines that it needs to act as if the form had been submitted.
     */
    onFormSubmitted: (formSubmissionReason: any) => void;
    onAutofillCallback: Function;
    handleEvent(event: any): void;
    set focusedInput(element: any);
    getSectionByElement(element: any): any;
    getFieldDetailByElement(element: any): any;
    get activeSection(): any;
    /**
     * Check the form is necessary to be updated. This function should be able to
     * detect any changes including all control elements in the form.
     *
     * @param {HTMLElement} element The element supposed to be in the form.
     * @returns {boolean} FormAutofillHandler.form is updated or not.
     */
    updateFormIfNeeded(element: HTMLElement): boolean;
    /**
     * Update the form with a new FormLike, and the related fields should be
     * updated or clear to ensure the data consistency.
     *
     * @param {FormLike} form a new FormLike to replace the original one.
     */
    _updateForm(form: FormLike): void;
    /**
     * Set fieldDetails from the form about fields that can be autofilled.
     *
     * @returns {Array} The valid address and credit card details.
     */
    collectFormFields(ignoreInvalid?: boolean): any[];
    getFilledStateByElement(element: any): any;
    /**
     * Change the state of a field to correspond with different presentations.
     *
     * @param {object} fieldDetail
     *        A fieldDetail of which its element is about to update the state.
     * @param {string} nextState
     *        Used to determine the next state
     */
    changeFieldState(fieldDetail: object, nextState: string): void;
    /**
     * Processes form fields that can be autofilled, and populates them with the
     * profile provided by backend.
     *
     * @param {object} profile
     *        A profile to be filled in.
     */
    autofillFormFields(profile: object): Promise<void>;
    /**
     * Collect the filled sections within submitted form and convert all the valid
     * field data into multiple records.
     *
     * @returns {object} records
     *          {Array.<Object>} records.address
     *          {Array.<Object>} records.creditCard
     */
    createRecords(): object;
    #private;
}
