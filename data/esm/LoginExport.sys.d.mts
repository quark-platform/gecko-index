/**
 * Module to support exporting logins to a .csv file.
 */
export class LoginExport {
    /**
     * Builds an array of strings representing a row in a CSV.
     *
     * @param {nsILoginInfo} login
     *        The object that will be converted into a csv row.
     * @param {string[]} columns
     *        The CSV columns, used to find the properties from the login object.
     * @returns {string[]} Representing a row.
     */
    static _buildCSVRow(login: nsILoginInfo, columns: string[]): string[];
    /**
     * Given a path it saves all the logins as a CSV file.
     *
     * @param {string} path
     *        The file path to save the login to.
     * @param {nsILoginInfo[]} [logins = null]
     *        An optional list of logins.
     */
    static exportAsCSV(path: string, logins?: nsILoginInfo[]): Promise<void>;
}
