/**
 * The AddressComparison class compares two AddressComponent instances and
 * provides information about the differences or similarities between them.
 *
 * The comparison result is stored and the object and can be retrieved by calling
 * 'result' getter.
 */
export class AddressComparison {
    static BOTH_EMPTY: number;
    static A_IS_EMPTY: number;
    static B_IS_EMPTY: number;
    static A_CONTAINS_B: number;
    static B_CONTAINS_A: number;
    static SIMILAR: number;
    static SAME: number;
    static DIFFERENT: number;
    /**
     * Compares two address fields and returns the comparison result.
     *
     * @param  {AddressField} fieldA The first field to compare.
     * @param  {AddressField} fieldB The second field to compare.
     * @returns {number}       A constant representing the comparison result.
     */
    static compare(fieldA: AddressField, fieldB: AddressField): number;
    /**
     * Converts a comparison result constant to a readable string.
     *
     * @param  {number} result The comparison result constant.
     * @returns {string}        A readable string representing the comparison result.
     */
    static resultToString(result: number): string;
    /**
     * Constructs AddressComparison by comparing two AddressComponent objects.
     *
     * @class
     * @param {AddressComponent} addressA - The first address to compare.
     * @param {AddressComponent} addressB - The second address to compare.
     */
    constructor(addressA: AddressComponent, addressB: AddressComponent);
    /**
     * Retrieves the result object containing the comparison results.
     *
     * @returns {object} The result object with keys corresponding to field names
     *                  and values being comparison constants.
     */
    get result(): any;
    /**
     * Returns a formatted string representing the comparison results for each field.
     *
     * @returns {string} A formatted string with field names and their respective
     *                  comparison results.
     */
    toString(): string;
    #private;
}
/**
 * The AddressComponent class represents a structured address that is transformed
 * from address record created in FormAutofillHandler 'createRecord' function.
 *
 * An AddressComponent object consisting of various fields such as state, city,
 * country, postal code, etc. The class provides a compare methods
 * to compare another AddressComponent against the current instance.
 *
 * Note. This class assumes records that pass to it have already been normalized.
 */
export class AddressComponent {
    /**
     * Constructs an AddressComponent object by converting passed address record object.
     *
     * @class
     * @param {object}  record         The address record object containing address data.
     * @param {object}  [options = {}] a list of options for this method
     * @param {boolean} [options.ignoreInvalid = true]  Whether to ignore invalid address
     *                                 fields in the AddressComponent object. If set to true,
     *                                 invalid fields will be ignored.
     */
    constructor(record: object, { ignoreInvalid }?: {
        ignoreInvalid?: boolean;
    });
    record: {};
    /**
     * Retrieves all the address fields.
     *
     * @returns {Array} An array of address field objects.
     */
    getAllFields(): any[];
    /**
     * Retrieves the field object with the specified name.
     *
     * @param  {string} name The name of the field to retrieve.
     * @returns {object}      The address field object with the specified name,
     *                       or undefined if the field is not found.
     */
    getField(name: string): object;
    /**
     * Compares the current AddressComponent with another AddressComponent.
     *
     * @param  {AddressComponent} address The AddressComponent object to compare
     *                                    against the current one.
     * @returns {object} An object containing comparison results. The keys of the object represent
     *                  individual address field, and the values are strings indicating the comparison result:
     *                  - "same" if both components are either empty or the same,
     *                  - "superset" if the current contains the input or the input is empty,
     *                  - "subset" if the input contains the current or the current is empty,
     *                  - "similar" if the two address components are similar,
     *                  - "different" if the two address components are different.
     */
    compare(address: AddressComponent): object;
    /**
     * Print all the fields in this AddressComponent object.
     */
    toString(): string;
    #private;
}
/**
 * The AddressField class is a base class representing a single address field.
 */
declare class AddressField {
    /**
     * Create a representation of a single address field.
     *
     * @param {string} value
     *        The unnormalized value of an address field.
     *
     * @param {string} region
     *        The region of a single address field. Used to determine what collator should be
     *        for string comparisons of the address's field value.
     */
    constructor(value: string, region: string);
    /**
     * Get the unnormalized value of the address field.
     *
     * @returns {string} The unnormalized field value.
     */
    get userValue(): string;
    /**
     * Get the collator used for string comparisons.
     *
     * @returns {Intl.Collator} The collator.
     */
    get collator(): Intl.Collator;
    get region(): any;
    /**
     * Compares two strings using the collator.
     *
     * @param   {string} a The first string to compare.
     * @param   {string} b The second string to compare.
     * @returns {number} A negative, zero, or positive value, depending on the comparison result.
     */
    localeCompare(a: string, b: string): number;
    /**
     * Checks if the field value is empty.
     *
     * @returns {boolean} True if the field value is empty, false otherwise.
     */
    isEmpty(): boolean;
    /**
     * Normalizes the unnormalized field value using the provided options.
     *
     * @param {object} options - Options for normalization.
     * @returns {string} The normalized field value.
     */
    normalizeUserValue(options: object): string;
    /**
     * Returns a string representation of the address field.
     * Ex. "Country: US", "PostalCode: 55123", etc.
     */
    toString(): string;
    /**
     * Checks if the field value is valid.
     *
     * @returns {boolean} True if the field value is valid, false otherwise.
     */
    isValid(): boolean;
    /**
     * Compares the current field value with another field value for equality.
     */
    equals(): void;
    /**
     * Checks if the current field value contains another field value.
     */
    contains(): void;
    #private;
}
export {};
