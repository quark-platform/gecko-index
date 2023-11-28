/**
 * Observe various notifications and send them to a telemetry endpoint.
 *
 * @param {Object} options
 * @param {string} options.topic - a unique ID for users of PingCentre to distinguish
 *                  their data on the server side.
 */
export class PingCentre {
    static _sendStandalonePing(endpoint: any, payload: any): any;
    constructor(options: any);
    _topic: any;
    _prefs: any;
    _enabled: any;
    _onTelemetryPrefChange(aSubject: any, aTopic: any, prefKey: any): void;
    _fhrEnabled: any;
    _onFhrPrefChange(aSubject: any, aTopic: any, prefKey: any): void;
    logging: any;
    _onLoggingPrefChange(aSubject: any, aTopic: any, prefKey: any): void;
    get enabled(): any;
    _createExperimentsPayload(): {};
    _createStructuredIngestionPing(data: any): any;
    /**
     * Sends a ping to the Structured Ingestion telemetry pipeline.
     *
     * The payload would be compressed using gzip.
     *
     * @param {Object} data      The payload to be sent.
     * @param {String} endpoint  The destination endpoint. Note that Structured Ingestion
     *                           requires a different endpoint for each ping. It's up to the
     *                           caller to provide that. See more details at
     *                           https://github.com/mozilla/gcp-ingestion/blob/master/docs/edge.md#postput-request
     * @param {String} namespace Optional. The structured ingestion namespace.
     *                           Used for data collection.
     */
    sendStructuredIngestionPing(data: any, endpoint: string, namespace?: string): any;
    uninit(): void;
}
export namespace PingCentreConstants {
    export { FHR_UPLOAD_ENABLED_PREF };
    export { TELEMETRY_PREF };
    export { LOGGING_PREF };
}
declare const FHR_UPLOAD_ENABLED_PREF: "datareporting.healthreport.uploadEnabled";
declare const TELEMETRY_PREF: "browser.ping-centre.telemetry";
declare const LOGGING_PREF: "browser.ping-centre.log";
export {};
