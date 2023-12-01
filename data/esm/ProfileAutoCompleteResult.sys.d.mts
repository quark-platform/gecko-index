export class AddressResult extends ProfileAutoCompleteResult {
    constructor(...args: any[]);
    _getSecondaryLabel(focusedFieldName: any, allFieldNames: any, profile: any): any;
    _generateLabels(focusedFieldName: any, allFieldNames: any, profiles: any): any;
}
export class CreditCardResult extends ProfileAutoCompleteResult {
    constructor(...args: any[]);
    _cardTypes: any;
    _getSecondaryLabel(focusedFieldName: any, allFieldNames: any, profile: any): any;
    _generateLabels(focusedFieldName: any, allFieldNames: any, profiles: any): any;
    _generateCardTypes(focusedFieldName: any, allFieldNames: any, profiles: any): any;
    getStyleAt(index: any): any;
    getImageAt(index: any): any;
}
declare class ProfileAutoCompleteResult {
    constructor(searchString: any, focusedFieldName: any, allFieldNames: any, matchingProfiles: any, { resultCode, isSecure, isInputAutofilled }: {
        resultCode?: any;
        isSecure?: boolean;
        isInputAutofilled?: boolean;
    });
    externalEntries: any[];
    QueryInterface: MozQueryInterface;
    searchString: any;
    _focusedFieldName: any;
    _matchingProfiles: any;
    defaultIndex: number;
    errorDescription: string;
    _isSecure: boolean;
    _isInputAutofilled: boolean;
    _allFieldNames: any[];
    searchResult: any;
    _popupLabels: void;
    getAt(index: any): any;
    /**
     * @returns {number} The number of results
     */
    get matchCount(): number;
    /**
     * Get the secondary label based on the focused field name and related field names
     * in the same form.
     *
     * @param   {string} focusedFieldName The field name of the focused input
     * @param   {Array<object>} allFieldNames The field names in the same section
     * @param   {object} profile The profile providing the labels to show.
     * @returns {string} The secondary label
     */
    _getSecondaryLabel(focusedFieldName: string, allFieldNames: Array<object>, profile: object): string;
    _generateLabels(focusedFieldName: any, allFieldNames: any, profiles: any): void;
    /**
     * Get the value of the result at the given index.
     *
     * Always return empty string for form autofill feature to suppress
     * AutoCompleteController from autofilling, as we'll populate the
     * fields on our own.
     *
     * @param   {number} index The index of the result requested
     * @returns {string} The result at the specified index
     */
    getValueAt(index: number): string;
    getLabelAt(index: any): string;
    /**
     * Retrieves a comment (metadata instance)
     *
     * @param   {number} index The index of the comment requested
     * @returns {string} The comment at the specified index
     */
    getCommentAt(index: number): string;
    /**
     * Retrieves a style hint specific to a particular index.
     *
     * @param   {number} index The index of the style hint requested
     * @returns {string} The style hint at the specified index
     */
    getStyleAt(index: number): string;
    /**
     * Retrieves an image url.
     *
     * @param   {number} index The index of the image url requested
     * @returns {string} The image url at the specified index
     */
    getImageAt(index: number): string;
    /**
     * Retrieves a result
     *
     * @param   {number} index The index of the result requested
     * @returns {string} The result at the specified index
     */
    getFinalCompleteValueAt(index: number): string;
    /**
     * Returns true if the value at the given index is removable
     *
     * @param   {number}  index The index of the result to remove
     * @returns {boolean} True if the value is removable
     */
    isRemovableAt(index: number): boolean;
    /**
     * Removes a result from the resultset
     *
     * @param {number} index The index of the result to remove
     */
    removeValueAt(index: number): void;
}
export {};
