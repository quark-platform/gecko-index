/**
 * This module converts temperature unit.
 */
export class UnitConverterTemperature {
    /**
     * Convert the given search string.
     *
     * @param {string} searchString
     *   The string to be converted
     * @returns {string} conversion result.
     */
    convert(searchString: string): string;
    c2k(t: any): any;
    c2f(t: any): number;
    k2c(t: any): number;
    k2f(t: any): number;
    f2c(t: any): number;
    f2k(t: any): any;
}
