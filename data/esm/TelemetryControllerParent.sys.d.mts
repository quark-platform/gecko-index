export namespace Policy {
    function now(): Date;
    function generatePingId(): any;
    function getCachedClientID(): any;
}
export const TelemetryController: Readonly<{
    /**
     * Used only for testing purposes.
     */
    testInitLogging(): void;
    /**
     * Used only for testing purposes.
     */
    testReset(): Promise<void>;
    /**
     * Used only for testing purposes.
     */
    testSetup(): Promise<any>;
    /**
     * Used only for testing purposes.
     */
    testShutdown(): any;
    /**
     * Used only for testing purposes.
     */
    testPromiseJsProbeRegistration(): Promise<any>;
    /**
     * Register 'dynamic builtin' probes from the JSON definition files.
     * This is needed to support adding new probes in developer builds
     * without rebuilding the whole codebase.
     *
     * This is not meant to be used outside of local developer builds.
     */
    testRegisterJsProbes(): Promise<void>;
    /**
     * Used only for testing purposes.
     */
    testPromiseDeletionRequestPingSubmitted(): Promise<any>;
    /**
     * Send a notification.
     */
    observe(aSubject: any, aTopic: any, aData: any): void | Promise<any>;
    /**
     * Submit ping payloads to Telemetry. This will assemble a complete ping, adding
     * environment data, client id and some general info.
     * Depending on configuration, the ping will be sent to the server (immediately or later)
     * and archived locally.
     *
     * To identify the different pings and to be able to query them pings have a type.
     * A type is a string identifier that should be unique to the type ping that is being submitted,
     * it should only contain alphanumeric characters and '-' for separation, i.e. satisfy:
     * /^[a-z0-9][a-z0-9-]+[a-z0-9]$/i
     *
     * @param {String} aType The type of the ping.
     * @param {Object} aPayload The actual data payload for the ping.
     * @param {Object} [aOptions] Options object.
     * @param {Boolean} [aOptions.addClientId=false] true if the ping should contain the client
     *                  id, false otherwise.
     * @param {Boolean} [aOptions.addEnvironment=false] true if the ping should contain the
     *                  environment data.
     * @param {Object}  [aOptions.overrideEnvironment=null] set to override the environment data.
     * @param {Boolean} [aOptions.usePingSender=false] if true, send the ping using the PingSender.
     * @param {String} [aOptions.overrideClientId=undefined] if set, override the
     *                 client id to the provided value. Implies aOptions.addClientId=true.
     * @returns {Promise} Test-only - a promise that resolves with the ping id once the ping is stored or sent.
     */
    submitExternalPing(aType: string, aPayload: any, aOptions?: {
        addClientId?: boolean;
        addEnvironment?: boolean;
        overrideEnvironment?: any;
        usePingSender?: boolean;
        overrideClientId?: string;
    }): Promise<any>;
    /**
     * Get the current session ping data as it would be sent out or stored.
     *
     * @param {bool} aSubsession Whether to get subsession data. Optional, defaults to false.
     * @return {object} The current ping data if Telemetry is enabled, null otherwise.
     */
    getCurrentPingData(aSubsession?: bool): object;
    /**
     * Save a ping to disk.
     *
     * @param {String} aType The type of the ping.
     * @param {Object} aPayload The actual data payload for the ping.
     * @param {Object} [aOptions] Options object.
     * @param {Boolean} [aOptions.addClientId=false] true if the ping should contain the client
     *                  id, false otherwise.
     * @param {Boolean} [aOptions.addEnvironment=false] true if the ping should contain the
     *                  environment data.
     * @param {Boolean} [aOptions.overwrite=false] true overwrites a ping with the same name,
     *                  if found.
     * @param {Object}  [aOptions.overrideEnvironment=null] set to override the environment data.
     * @param {String} [aOptions.overrideClientId=undefined] if set, override the
     *                 client id to the provided value. Implies aOptions.addClientId=true.
     *
     * @returns {Promise} A promise that resolves with the ping id when the ping is saved to
     *                    disk.
     */
    addPendingPing(aType: string, aPayload: any, aOptions?: {
        addClientId?: boolean;
        addEnvironment?: boolean;
        overwrite?: boolean;
        overrideEnvironment?: any;
        overrideClientId?: string;
    }): Promise<any>;
    /**
     * Check if we have an aborted-session ping from a previous session.
     * If so, submit and then remove it.
     *
     * @return {Promise} Promise that is resolved when the ping is saved.
     */
    checkAbortedSessionPing(): Promise<any>;
    /**
     * Save an aborted-session ping to disk without adding it to the pending pings.
     *
     * @param {Object} aPayload The ping payload data.
     * @return {Promise} Promise that is resolved when the ping is saved.
     */
    saveAbortedSessionPing(aPayload: any): Promise<any>;
    /**
     * Remove the aborted-session ping if any exists.
     *
     * @return {Promise} Promise that is resolved when the ping was removed.
     */
    removeAbortedSessionPing(): Promise<any>;
    /**
     * Create an uninstall ping and write it to disk, replacing any already present.
     * This is stored independently from other pings, and only read by
     * the Windows uninstaller.
     *
     * WINDOWS ONLY, does nothing and resolves immediately on other platforms.
     *
     * @return {Promise} Resolved when the ping has been saved.
     */
    saveUninstallPing(): Promise<any>;
    /**
     * Allows the sync ping to tell the controller that it is initializing, so
     * should be included in the orderly shutdown process.
     *
     * @param {Function} aFnShutdown The function to call as telemetry shuts down.
  
     */
    registerSyncPingShutdown(afnShutdown: any): void;
    /**
     * Allows waiting for TelemetryControllers delayed initialization to complete.
     * The returned promise is guaranteed to resolve before TelemetryController is shutting down.
     * @return {Promise} Resolved when delayed TelemetryController initialization completed.
     */
    promiseInitialized(): Promise<any>;
}>;
