export class FormAutofillSection {
    static SHOULD_FOCUS_ON_AUTOFILL: boolean;
    constructor(fieldDetails: any, handler: any);
    handler: any;
    filledRecordGUID: any;
    _cacheValue: {
        allFieldNames: any;
        matchingSelectOption: any;
    };
    flowId: any;
    get fieldDetails(): any[];
    isValidSection(): void;
    isEnabled(): void;
    isRecordCreatable(record: any): void;
    /**
     * Override this method if the profile is needed to apply some transformers.
     *
     * @param {object} profile
     *        A profile should be converted based on the specific requirement.
     */
    applyTransformers(profile: object): void;
    /**
     * Override this method if the profile is needed to be customized for
     * previewing values.
     *
     * @param {object} profile
     *        A profile for pre-processing before previewing values.
     */
    preparePreviewProfile(profile: object): void;
    /**
     * Override this method if the profile is needed to be customized for filling
     * values.
     *
     * @param {object} profile
     *        A profile for pre-processing before filling values.
     * @returns {boolean} Whether the profile should be filled.
     */
    prepareFillingProfile(profile: object): boolean;
    /**
     * Override this method if the profile is needed to be customized for filling
     * values.
     *
     * @param {object} fieldDetail A fieldDetail of the related element.
     * @param {object} profile The profile to fill.
     * @returns {string} The value to fill for the given field.
     */
    getFilledValueFromProfile(fieldDetail: object, profile: object): string;
    computeFillingValue(value: any, fieldName: any, element: any): any;
    set focusedInput(element: any);
    getFieldDetailByElement(element: any): any;
    getFieldDetailByName(fieldName: any): any;
    get allFieldNames(): any;
    matchSelectOptions(profile: any): void;
    adaptFieldMaxLength(profile: any): void;
    fillFieldValue(element: any, value: any): void;
    getAdaptedProfiles(originalProfiles: any): any;
    /**
     * Processes form fields that can be autofilled, and populates them with the
     * profile provided by backend.
     *
     * @param {object} profile
     *        A profile to be filled in.
     * @returns {boolean}
     *          True if successful, false if failed
     */
    autofillFields(profile: object): boolean;
    /**
     * Populates result to the preview layers with given profile.
     *
     * @param {object} profile
     *        A profile to be previewed with
     */
    previewFormFields(profile: object): void;
    /**
     * Clear a previously autofilled field in this section
     */
    clearFilled(fieldDetail: any): void;
    /**
     * Clear preview text and background highlight of all fields.
     */
    clearPreviewedFormFields(): void;
    /**
     * Clear value and highlight style of all filled fields.
     */
    clearPopulatedForm(): void;
    resetFieldStates(): void;
    isFilled(): boolean;
    /**
     *  Condenses multiple credit card number fields into one fieldDetail
     *  in order to submit the credit card record correctly.
     *
     * @param {Array.<object>} condensedDetails
     *  An array of fieldDetails
     * @memberof FormAutofillSection
     */
    _condenseMultipleCCNumberFields(condensedDetails: Array<object>): void;
    /**
     * Return the record that is converted from `fieldDetails` and only valid
     * form record is included.
     *
     * @returns {object | null}
     *          A record object consists of three properties:
     *            - guid: The id of the previously-filled profile or null if omitted.
     *            - record: A valid record converted from details with trimmed result.
     *            - untouchedFields: Fields that aren't touched after autofilling.
     *          Return `null` for any uncreatable or invalid record.
     */
    createRecord(): object | null;
    /**
     * Resets a <select> element to its selected option or the first option if there is none selected.
     *
     * @param {HTMLElement} element
     * @memberof FormAutofillSection
     */
    _resetSelectElementValue(element: HTMLElement): void;
    #private;
}
export class FormAutofillAddressSection extends FormAutofillSection {
    isValidSection(): boolean;
    isEnabled(): any;
    isRecordCreatable(record: any): boolean;
    _getOneLineStreetAddress(address: any): any;
    addressTransformer(profile: any): void;
    /**
     * Replace tel with tel-national if tel violates the input element's
     * restriction.
     *
     * @param {object} profile
     *        A profile to be converted.
     */
    telTransformer(profile: object): void;
    applyTransformers(profile: any): void;
}
export class FormAutofillCreditCardSection extends FormAutofillSection {
    /**
     * Credit Card Section Constructor
     *
     * @param {Array<FieldDetails>} fieldDetails
     *        The fieldDetail objects for the fields in this section
     * @param {Object<FormAutofillHandler>} handler
     *        The handler responsible for this section
     */
    constructor(fieldDetails: Array<FieldDetails>, handler: any);
    _handlePageHide(event: any): void;
    /**
     * Determine whether a set of cc fields identified by our heuristics form a
     * valid credit card section.
     * There are 4 different cases when a field is considered a credit card field
     * 1. Identified by autocomplete attribute. ex <input autocomplete="cc-number">
     * 2. Identified by fathom and fathom is pretty confident (when confidence
     *    value is higher than `highConfidenceThreshold`)
     * 3. Identified by fathom. Confidence value is between `fathom.confidenceThreshold`
     *    and `fathom.highConfidenceThreshold`
     * 4. Identified by regex-based heurstic. There is no confidence value in thise case.
     *
     * A form is considered a valid credit card form when one of the following condition
     * is met:
     * A. One of the cc field is identified by autocomplete (case 1)
     * B. One of the cc field is identified by fathom (case 2 or 3), and there is also
     *    another cc field found by any of our heuristic (case 2, 3, or 4)
     * C. Only one cc field is found in the section, but fathom is very confident (Case 2).
     *    Currently we add an extra restriction to this rule to decrease the false-positive
     *    rate. See comments below for details.
     *
     * @returns {boolean} True for a valid section, otherwise false
     */
    isValidSection(): boolean;
    isEnabled(): any;
    isRecordCreatable(record: any): any;
    /**
     * Handles credit card expiry date transformation when
     * the expiry date exists in a cc-exp field.
     *
     * @param {object} profile
     * @memberof FormAutofillCreditCardSection
     */
    creditCardExpiryDateTransformer(profile: object): void;
    /**
     * Handles credit card expiry date transformation when the expiry date exists in
     * the separate cc-exp-month and cc-exp-year fields
     *
     * @param {object} profile
     * @memberof FormAutofillCreditCardSection
     */
    creditCardExpMonthAndYearTransformer(profile: object): void;
    /**
     * Handles credit card name transformation when the name exists in
     * the separate cc-given-name, cc-middle-name, and cc-family name fields
     *
     * @param {object} profile
     * @memberof FormAutofillCreditCardSection
     */
    creditCardNameTransformer(profile: object): void;
    _decrypt(cipherText: any, reauth: any): Promise<any>;
    applyTransformers(profile: any): void;
    getFilledValueFromProfile(fieldDetail: any, profile: any): string;
    autofillFields(profile: any): Promise<boolean>;
}
