/**
 * Represents the detailed information about a form field, including
 * the inferred field name, the approach used for inferring, and additional metadata.
 */
export class FieldDetail {
    constructor(element: any, fieldName?: any, { autocompleteInfo, confidence }?: {
        autocompleteInfo?: {};
        confidence?: any;
    });
    elementWeakRef: any;
    identifier: string;
    fieldName: any;
    reason: any;
    section: string;
    addressType: string;
    contactType: string;
    part: any;
    confidence: any;
    get element(): any;
    get sectionName(): string;
}
/**
 * A scanner for traversing all elements in a form. It also provides a
 * cursor (parsingIndex) to indicate which element is waiting for parsing.
 *
 * The scanner retrives the field detail by calling heuristics handlers
 * `inferFieldInfo` function.
 */
export class FieldScanner {
    /**
     * Create a FieldScanner based on form elements with the existing
     * fieldDetails.
     *
     * @param {Array.DOMElement} elements
     *        The elements from a form for each parser.
     * @param {Funcion} inferFieldInfoFn
     *        The callback function that is used to infer the field info of a given element
     */
    constructor(elements: Array.DOMElement, inferFieldInfoFn: Funcion);
    fieldDetails: any[];
    /**
     * Move the parsingIndex to the next elements. Any elements behind this index
     * means the parsing tasks are finished.
     *
     * @param {number} index
     *        The latest index of elements waiting for parsing.
     */
    set parsingIndex(index: number);
    /**
     * This cursor means the index of the element which is waiting for parsing.
     *
     * @returns {number}
     *          The index of the element which is waiting for parsing.
     */
    get parsingIndex(): number;
    get parsingFinished(): boolean;
    /**
     * Retrieve the field detail by the index. If the field detail is not ready,
     * the elements will be traversed until matching the index.
     *
     * @param {number} index
     *        The index of the element that you want to retrieve.
     * @returns {object}
     *          The field detail at the specific index.
     */
    getFieldDetailByIndex(index: number): object;
    /**
     * This function retrieves the first unparsed element and obtains its
     * information by invoking the `inferFieldInfoFn` callback function.
     * The field information is then stored in a FieldDetail object and
     * appended to the `fieldDetails` array.
     *
     * Any element without the related detail will be used for adding the detail
     * to the end of field details.
     */
    pushDetail(): void;
    /**
     * When a field detail should be changed its fieldName after parsing, use
     * this function to update the fieldName which is at a specific index.
     *
     * @param {number} index
     *        The index indicates a field detail to be updated.
     * @param {string} fieldName
     *        The new name of the field
     * @param {boolean} [ignoreAutocomplete=false]
     *        Whether to change the field name when the field name is determined by
     *        autocomplete attribute
     */
    updateFieldName(index: number, fieldName: string, ignoreAutocomplete?: boolean): void;
    elementExisting(index: any): boolean;
    #private;
}
export default FieldScanner;
