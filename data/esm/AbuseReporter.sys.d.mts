export class AbuseReportError extends Error {
    constructor(errorType: any, errorInfo?: any);
    errorType: any;
    errorInfo: any;
}
export namespace AbuseReporter {
    let _lastReportTimestamp: any;
    const amoFormEnabled: any;
    function getAMOFormURL({ addonId }: {
        addonId: any;
    }): string;
    function updateLastReportTimestamp(): void;
    function getTimeFromLastReport(): number;
    function isSupportedAddonType(addonType: any): boolean;
    /**
     * Create an AbuseReport instance, given the addonId and a reportEntryPoint.
     *
     * @param {string} addonId
     *        The id of the addon to create the report instance for.
     * @param {object} options
     * @param {string} options.reportEntryPoint
     *        An identifier that represent the entry point for the report flow.
     *
     * @returns {Promise<AbuseReport>}
     *          Returns a promise that resolves to an instance of the AbuseReport
     *          class, which represent an ongoing report.
     */
    function createAbuseReport(addonId: string, { reportEntryPoint }?: {
        reportEntryPoint: string;
    }): Promise<AbuseReport>;
    /**
     * Retrieves the addon details from the AMO API endpoint, used to create
     * abuse reports on non-installed addon-ons.
     *
     * For the addon details that may be translated (e.g. addon name, description etc.)
     * the function will try to retrieve the string localized in the same locale used
     * by Gecko (and fallback to "en-US" if that locale is unavailable).
     *
     * The addon creator properties are set to the first author available.
     *
     * @param {string} addonId
     *        The id of the addon to retrieve the details available on AMO.
     * @param {string} reportEntryPoint
     *        The entry point for the report flow (to be included in the telemetry
     *        recorded in case of failures).
     *
     * @returns {Promise<AMOAddonDetails|null>}
     *          Returns a promise that resolves to an AMOAddonDetails object,
     *          which has the subset of the AddonWrapper properties which are
     *          needed by the abuse report panel or the report data sent to
     *          the abuse report API endpoint), or null if it fails to
     *          retrieve the details from AMO.
     *
     * @typedef {object} AMOAddonDetails
     *   @prop  {string} id
     *   @prop  {string} name
     *   @prop  {string} version
     *   @prop  {string} description
     *   @prop  {string} type
     *   @prop  {string} iconURL
     *   @prop  {string} homepageURL
     *   @prop  {string} supportURL
     *   @prop  {AMOAddonCreator} creator
     *   @prop  {boolean} isRecommended
     *   @prop  {number} signedState=AddonManager.SIGNEDSTATE_UNKNOWN
     *   @prop  {object} installTelemetryInfo={ source: "not_installed" }
     *
     * @typedef {object} AMOAddonCreator
     *   @prop  {string} name
     *   @prop  {string} url
     */
    function queryAMOAddonDetails(addonId: string, reportEntryPoint: string): Promise<{
        id: string;
        name: string;
        version: string;
        description: string;
        type: string;
        iconURL: string;
        homepageURL: string;
        supportURL: string;
        creator: {
            name: string;
            url: string;
        };
        isRecommended: boolean;
        /**
         * =AddonManager.SIGNEDSTATE_UNKNOWN
         */
        signedState: number;
        /**
         * ={ source: "not_installed" }
         */
        installTelemetryInfo: any;
    }>;
    /**
     * Helper function that retrieves from an addon object all the data to send
     * as part of the submission request, besides the `reason`, `message` which are
     * going to be received from the submit method of the report object returned
     * by `createAbuseReport`.
     * (See https://addons-server.readthedocs.io/en/latest/topics/api/abuse.html)
     *
     * @param {AddonWrapper} addon
     *        The addon object to collect the detail from.
     *
     * @return {object}
     *         An object that contains the collected details.
     */
    function getReportData(addon: AddonWrapper): any;
    /**
     * Helper function that returns a reference to a report dialog window
     * already opened (if any).
     *
     * @returns {Window?}
     */
    function getOpenDialog(): Window;
    /**
     * Helper function that opens an abuse report form in a new dialog window.
     *
     * @param {string} addonId
     *        The addonId being reported.
     * @param {string} reportEntryPoint
     *        The entry point from which the user has triggered the abuse report
     *        flow.
     * @param {XULElement} browser
     *        The browser element (if any) that is opening the report window.
     *
     * @return {Promise<AbuseReportDialog>}
     *         Returns an AbuseReportDialog object, rejects if it fails to open
     *         the dialog.
     *
     * @typedef {object}                        AbuseReportDialog
     *          An object that represents the abuse report dialog.
     * @prop    {function}                      close
     *          A method that closes the report dialog (used by the caller
     *          to close the dialog when the user chooses to close the window
     *          that started the abuse report flow).
     * @prop    {Promise<AbuseReport|undefined>} promiseReport
     *          A promise resolved to an AbuseReport instance if the report should
     *          be submitted, or undefined if the user has cancelled the report.
     *          Rejects if it fails to create an AbuseReport instance or to open
     *          the abuse report window.
     */
    function openDialog(addonId: string, reportEntryPoint: string, browser: XULElement): Promise<{
        /**
         *          A method that closes the report dialog (used by the caller
         *          to close the dialog when the user chooses to close the window
         *          that started the abuse report flow).
         */
        close: Function;
        /**
         *          A promise resolved to an AbuseReport instance if the report should
         *          be submitted, or undefined if the user has cancelled the report.
         *          Rejects if it fails to create an AbuseReport instance or to open
         *          the abuse report window.
         */
        promiseReport: Promise<AbuseReport>;
    }>;
}
/**
 * Represents an ongoing abuse report. Instances of this class are created
 * by the `AbuseReporter.createAbuseReport` method.
 *
 * This object is used by the reporting UI panel and message bars to:
 *
 * - get an errorType in case of a report creation error (e.g. because of a
 *   previously submitted report)
 * - get the addon details used inside the reporting panel
 * - submit the abuse report (and re-submit if a previous submission failed
 *   and the user choose to retry to submit it again)
 * - abort an ongoing submission
 *
 * @param {object}            options
 * @param {AddonWrapper|null} options.addon
 *        AddonWrapper instance for the extension/theme being reported.
 *        (May be null if the extension has not been found).
 * @param {object|null}       options.reportData
 *        An object which contains addon and environment details to send as part of a submission
 *        (may be null if the report has a createErrorType).
 * @param {string}            options.reportEntryPoint
 *        A string that identify how the report has been triggered.
 */
declare class AbuseReport {
    constructor({ addon, createErrorType, reportData, reportEntryPoint }: {
        addon: any;
        createErrorType: any;
        reportData: any;
        reportEntryPoint: any;
    });
    recordTelemetry(errorType: any): void;
    /**
     * Submit the current report, given a reason and a message.
     *
     * @returns {Promise<void>}
     *          Resolves once the report has been successfully submitted.
     *          It rejects with an AbuseReportError if the report couldn't be
     *          submitted for a known reason (or another Error type otherwise).
     */
    submit(): Promise<void>;
    /**
     * Abort the report submission.
     */
    abort(): void;
    get addon(): any;
    get reportEntryPoint(): any;
    /**
     * Set the open message (called from the panel when the user submit the report)
     *
     * @parm {string} message
     *         An optional string which contains a description for the reported issue.
     */
    setMessage(message: any): void;
    /**
     * Set the report reason (called from the panel when the user submit the report)
     *
     * @parm {string} reason
     *       String identifier for the report reason.
     */
    setReason(reason: any): void;
    [PRIVATE_REPORT_PROPS]: {
        aborted: boolean;
        abortController: AbortController;
        addon: any;
        reportData: any;
        reportEntryPoint: any;
        message: any;
        reason: any;
    };
}
declare const PRIVATE_REPORT_PROPS: unique symbol;
export {};
