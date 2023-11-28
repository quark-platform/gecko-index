export const ImportFailedErrorType: Readonly<{
    CONFLICTING_VALUES_ERROR: "CONFLICTING_VALUES_ERROR";
    FILE_FORMAT_ERROR: "FILE_FORMAT_ERROR";
    FILE_PERMISSIONS_ERROR: "FILE_PERMISSIONS_ERROR";
    UNABLE_TO_READ_ERROR: "UNABLE_TO_READ_ERROR";
}>;
export class ImportFailedException extends Error {
    constructor(errorType: any, message: any);
    errorType: any;
}
/**
 * Provides an object that has a method to import login-related data CSV files
 */
export class LoginCSVImport {
    /**
     * Returns a map that has the csv column name as key and the value the field name.
     *
     * @returns {Map} A map that has the csv column name as key and the value the field name.
     */
    static _getCSVColumnToFieldMap(): Map<any, any>;
    /**
     * Builds a vanilla JS object containing all the login fields from a row of CSV cells.
     *
     * @param {object} csvObject
     *        An object created from a csv row. The keys are the csv column names, the values are the cells.
     * @param {Map} csvColumnToFieldMap
     *        A map where the keys are the csv properties and the values are the object keys.
     * @returns {object} Representing login object with only properties, not functions.
     */
    static _getVanillaLoginFromCSVObject(csvObject: object, csvColumnToFieldMap: Map<any, any>): object;
    static _recordHistogramTelemetry(histogram: any, report: any): void;
    /**
     * Imports logins from a CSV file (comma-separated values file).
     * Existing logins may be updated in the process.
     *
     * @param {string} filePath
     * @returns {Object[]} An array of rows where each is mapped to a row in the CSV and it's import information.
     */
    static importFromCSV(filePath: string): any[];
}
