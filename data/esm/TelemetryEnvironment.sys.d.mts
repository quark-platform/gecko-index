export namespace Policy {
    function now(): Date;
    let _intlLoaded: boolean;
    function _browserDelayedStartup(): Promise<any>;
}
export namespace TelemetryEnvironment {
    const currentEnvironment: any;
    function onInitialized(): any;
    function delayedInit(): any;
    function registerChangeListener(name: any, listener: any): any;
    function unregisterChangeListener(name: any): any;
    /**
     * Add an experiment annotation to the environment.
     * If an annotation with the same id already exists, it will be overwritten.
     * This triggers a new subsession, subject to throttling.
     *
     * @param {String} id The id of the active experiment.
     * @param {String} branch The experiment branch.
     * @param {Object} [options] Optional object with options.
     * @param {String} [options.type=false] The specific experiment type.
     * @param {String} [options.enrollmentId=undefined] The id of the enrollment.
     */
    function setExperimentActive(id: string, branch: string, options?: {
        type?: string;
        enrollmentId?: string;
    }): void;
    /**
     * Remove an experiment annotation from the environment.
     * If the annotation exists, a new subsession will triggered.
     *
     * @param {String} id The id of the active experiment.
     */
    function setExperimentInactive(id: string): void;
    /**
     * Returns an object containing the data for the active experiments.
     *
     * The returned object is of the format:
     *
     * {
     *   "<experiment id>": { branch: "<branch>" },
     *   // …
     * }
     */
    function getActiveExperiments(): any;
    function shutdown(): any;
    let RECORD_PREF_STATE: number;
    let RECORD_PREF_VALUE: number;
    let RECORD_DEFAULTPREF_VALUE: number;
    let RECORD_DEFAULTPREF_STATE: number;
    function testWatchPreferences(prefMap: any): Promise<any>;
    /**
     * Intended for use in tests only.
     *
     * In multiple tests we need a way to shut and re-start telemetry together
     * with TelemetryEnvironment. This is problematic due to the fact that
     * TelemetryEnvironment is a singleton. We, therefore, need this helper
     * method to be able to re-set TelemetryEnvironment.
     */
    function testReset(): any;
    /**
     * Intended for use in tests only.
     */
    function testCleanRestart(): any;
}
