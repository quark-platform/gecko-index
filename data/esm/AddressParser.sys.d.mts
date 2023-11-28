/**
 * Class represents a street address with the following fields:
 * - street number
 * - street name
 * - apartment number
 * - floor number
 */
export class StructuredStreetAddress {
    constructor(street_number: any, street_name: any, apartment_number: any, floor_number: any);
    get street_number(): any;
    get street_name(): any;
    get apartment_number(): any;
    get floor_number(): any;
    toString(): string;
    #private;
}
export class AddressParser {
    /**
     * Parse street address with the following pattern.
     * street number, street name, apartment number(optional), floor number(optional)
     * For example, 2 Harrison St #175 floor 2
     *
     * @param {string} address The street address to be parsed.
     * @returns {StructuredStreetAddress}
     */
    static parseStreetAddress(address: string): StructuredStreetAddress;
    static parse(address: any, regexpes: any): any;
    static normalizeString(s: any, options: any): any;
    static replacePunctuation(s: any, replace: any): any;
    static removePunctuation(s: any): any;
    static replaceControlCharacters(s: any, replace: any): any;
    static removeWhitespace(s: any): any;
    static mergeWhitespace(s: any): any;
}
