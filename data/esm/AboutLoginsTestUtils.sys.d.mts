/**
 * An utility class to help out with the about:logins and about:loginsimportreport DOM interaction for the tests.
 *
 */
export class AboutLoginsTestUtils {
    /**
     * An utility method to fetch the data from the CSV import success dialog.
     *
     * @param {content} content
     *        The content object.
     * @param {ContentTaskUtils} ContentTaskUtils
     *        The ContentTaskUtils object.
     * @returns {Promise<Object>} A promise that contains added, modified, noChange and errors count.
     */
    static getCsvImportSuccessDialogData(content: any, ContentTaskUtils: any): Promise<any>;
    /**
     * An utility method to fetch the data from the CSV import error dialog.
     *
     * @param {content} content
     *        The content object.
     * @returns {Promise<Object>} A promise that contains the hidden state and l10n id for title, description and focused element.
     */
    static getCsvImportErrorDialogData(content: any): Promise<any>;
    /**
     * An utility method to fetch data from the about:loginsimportreport page.
     * It also cleans up the tab so you don't have to.
     *
     * @param {content} content
     *        The content object.
     * @returns {Promise<Object>} A promise that contains the detailed report data like added, modified, noChange, errors and rows.
     */
    static getCsvImportReportData(content: any): Promise<any>;
}
