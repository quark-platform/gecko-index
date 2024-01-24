/**
 * The purpose of this singleton is to handle sending of DAP telemetry data.
 * The current DAP draft standard is available here:
 * https://github.com/ietf-wg-ppm/draft-ietf-ppm-dap
 *
 * The specific purpose of this singleton is to make the necessary calls to fetch to do networking.
 */
export const DAPTelemetrySender: {
    startup(): void;
    _asyncShutdownBlocker: () => Promise<void>;
    sendTestReports(tasks: any, timeout: any, reason: any): Promise<void>;
    timedSendTestReports(tasks: any): Promise<void>;
    timeout_value(): number;
    /**
     * Creates a DAP report for a specific task from a measurement and sends it.
     *
     * @param {Task} task
     *   Definition of the task for which the measurement was taken.
     * @param {number} measurement
     *   The measured value for which a report is generated.
     */
    sendDAPMeasurement(task: Task, measurement: number, timeout: any, reason: any): Promise<void>;
    /**
     * Downloads HPKE configs for endpoints and generates report.
     *
     * @param {Task} task
     *   Definition of the task for which the measurement was taken.
     * @param {number} measurement
     *   The measured value for which a report is generated.
     * @returns Promise
     * @resolves {Uint8Array} The generated binary report data.
     * @rejects {Error} If an exception is thrown while generating the report.
     */
    generateReport(task: Task, measurement: number, abortSignal: any): Promise<Uint8Array>;
    /**
     * Fetches TLS encoded HPKE config from a URL.
     *
     * @param {string} endpoint
     *   The URL from where to get the data.
     * @returns Promise
     * @resolves {Uint8Array} The binary representation of the endpoint configuration.
     * @rejects {Error} If an exception is thrown while fetching the configuration.
     */
    getHpkeConfig(endpoint: string, abortSignal: any): Promise<Uint8Array>;
    /**
     * Sends a report to the leader.
     *
     * @param {string} leader_endpoint
     *   The URL for the leader.
     * @param {Uint8Array} report
     *   Raw bytes of the TLS encoded report.
     * @returns Promise
     * @resolves {undefined} Once the attempt to send the report completes, whether or not it was successful.
     */
    sendReport(leader_endpoint: string, task_id: any, report: Uint8Array, abortSignal: any, reason: any): Promise<void>;
};
