export class FormSection {
    static ADDRESS: string;
    static CREDIT_CARD: string;
    constructor(fieldDetails: any);
    type: string;
    get fieldDetails(): any[];
    get name(): string;
    addField(fieldDetail: any): void;
    #private;
}
export namespace FormAutofillHeuristics {
    let RULES: any;
    let LABEL_RULES: any;
    let CREDIT_CARD_FIELDNAMES: any[];
    let ADDRESS_FIELDNAMES: any[];
    /**
     * Try to find a contiguous sub-array within an array.
     *
     * @param {Array} array
     * @param {Array} subArray
     *
     * @returns {boolean}
     *          Return whether subArray was found within the array or not.
     */
    function _matchContiguousSubArray(array: any[], subArray: any[]): boolean;
    /**
     * Try to find the field that is look like a month select.
     *
     * @param {DOMElement} element
     * @returns {boolean}
     *          Return true if we observe the trait of month select in
     *          the current element.
     */
    function _isExpirationMonthLikely(element: DOMElement): boolean;
    /**
     * Try to find the field that is look like a year select.
     *
     * @param {DOMElement} element
     * @returns {boolean}
     *          Return true if we observe the trait of year select in
     *          the current element.
     */
    function _isExpirationYearLikely(element: DOMElement): boolean;
    /**
     * Try to match the telephone related fields to the grammar
     * list to see if there is any valid telephone set and correct their
     * field names.
     *
     * @param {FieldScanner} scanner
     *        The current parsing status for all elements
     * @returns {boolean}
     *          Return true if there is any field can be recognized in the parser,
     *          otherwise false.
     */
    function _parsePhoneFields(scanner: FieldScanner, detail: any): boolean;
    /**
     * Try to find the correct address-line[1-3] sequence and correct their field
     * names.
     *
     * @param {FieldScanner} scanner
     *        The current parsing status for all elements
     * @returns {boolean}
     *          Return true if there is any field can be recognized in the parser,
     *          otherwise false.
     */
    function _parseStreetAddressFields(scanner: FieldScanner, fieldDetail: any): boolean;
    function _parseAddressFields(scanner: any, fieldDetail: any): boolean;
    /**
     * Try to look for expiration date fields and revise the field names if needed.
     *
     * @param {FieldScanner} scanner
     *        The current parsing status for all elements
     * @returns {boolean}
     *          Return true if there is any field can be recognized in the parser,
     *          otherwise false.
     */
    function _parseCreditCardExpiryFields(scanner: FieldScanner, fieldDetail: any): boolean;
    /**
     * Look for cc-*-name fields when *-name field is present
     *
     * @param {FieldScanner} scanner
     *        The current parsing status for all elements
     * @returns {boolean}
     *          Return true if there is any field can be recognized in the parser,
     *          otherwise false.
     */
    function _parseCreditCardNameFields(scanner: FieldScanner, fieldDetail: any): boolean;
    /**
     * This function should provide all field details of a form which are placed
     * in the belonging section. The details contain the autocomplete info
     * (e.g. fieldName, section, etc).
     *
     * @param {HTMLFormElement} form
     *        the elements in this form to be predicted the field info.
     * @returns {Array<FormSection>}
     *        all sections within its field details in the form.
     */
    function getFormInfo(form: HTMLFormElement): FormSection[];
    /**
     * Get form elements that are of credit card or address type and filtered by either
     * visibility or focusability - depending on the interactivity mode (default = focusability)
     * This distinction is only temporary as we want to test switching from visibility mode
     * to focusability mode. The visibility mode is then removed.
     *
     * @param {HTMLElement} form
     * @returns {Array<HTMLElement>} elements filtered by interactivity mode (visibility or focusability)
     */
    function getFormElements(form: HTMLElement): HTMLElement[];
    /**
     * The result is an array contains the sections with its belonging field details.
     *
     * @param   {Array<FieldDetails>} fieldDetails field detail array to be classified
     * @returns {Array<FormSection>} The array with the sections.
     */
    function _classifySections(fieldDetails: FieldDetails[]): FormSection[];
    function _getPossibleFieldNames(element: any): any[];
    /**
     * Get inferred information about an input element using autocomplete info, fathom and regex-based heuristics.
     *
     * @param {HTMLElement} element - The input element to infer information about.
     * @param {Array<HTMLElement>} elements - See `getFathomField` for details
     * @returns {Array} - An array containing:
     *                    [0]the inferred field name
     *                    [1]autocomplete information if the element has autocompelte attribute, null otherwise.
     *                    [2]fathom confidence if fathom considers it a cc field, null otherwise.
     */
    function inferFieldInfo(element: HTMLElement, elements?: HTMLElement[]): any[];
    /**
     * Using Fathom, say what kind of CC field an element is most likely to be.
     * This function deoesn't only run fathom on the passed elements. It also
     * runs fathom for all elements in the FieldScanner for optimization purpose.
     *
     * @param {HTMLElement} element
     * @param {Array} fields
     * @param {Array<HTMLElement>} elements - All other eligible elements in the same form. This is mainly used as an
     *                                        optimization approach to run fathom model on all eligible elements
     *                                        once instead of one by one
     * @returns {Array} A tuple of [field name, probability] describing the
     *   highest-confidence classification
     */
    function getFathomField(element: HTMLElement, fields: any[], elements?: HTMLElement[]): any[];
    /**
     * @param {Array} elements Array of elements that we want to get result from fathom cc rules
     * @returns {object} Fathom confidence keyed by field-type.
     */
    function getFormAutofillConfidences(elements: any[]): any;
    /**
     * @typedef ElementStrings
     * @type {object}
     * @yields {string} id - element id.
     * @yields {string} name - element name.
     * @yields {Array<string>} labels - extracted labels.
     */
    /**
     * Extract all the signature strings of an element.
     *
     * @param {HTMLElement} element
     * @returns {Array<string>}
     */
    function _getElementStrings(element: HTMLElement): string[];
    /**
     * Extract all the label strings associated with an element.
     *
     * @param {HTMLElement} element
     * @returns {ElementStrings}
     */
    function _getElementLabelStrings(element: HTMLElement): {};
    function testRegex(regex: any, string: any): boolean;
    /**
     * Find the first matching field name from a given list of field names
     * that matches an HTML element.
     *
     * The function first tries to match the element against a set of
     * pre-defined regular expression rules. If no match is found, it
     * then checks for label-specific rules, if they exist.
     *
     * Note: For label rules, the keyword is often more general
     * (e.g., "^\\W*address"), hence they are only searched within labels
     * to reduce the occurrence of false positives.
     *
     * @param {HTMLElement} element The element to match.
     * @param {Array<string>} fieldNames An array of field names to compare against.
     * @returns {string|null} The name of the matched field, or null if no match was found.
     */
    function _findMatchedFieldName(element: HTMLElement, fieldNames: string[]): string;
    /**
     * Determine whether the regexp can match any of element strings.
     *
     * @param {HTMLElement} element The HTML element to match.
     * @param {RegExp} regexp       The regular expression to match against.
     * @param {object} [options]    Optional parameters for matching.
     * @param {boolean} [options.attribute=true]
     *                              Whether to match against the element's attributes.
     * @param {boolean} [options.label=true]
     *                              Whether to match against the element's labels.
     * @returns {boolean} True if a match is found, otherwise false.
     */
    function _matchRegexp(element: HTMLElement, regexp: RegExp, { attribute, label }?: {
        attribute?: boolean;
        label?: boolean;
    }): boolean;
    let PHONE_FIELD_GRAMMARS: (string | number)[][];
}
export default FormAutofillHeuristics;
