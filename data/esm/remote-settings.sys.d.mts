/**
 * Default entry filtering function, in charge of excluding remote settings entries
 * where the JEXL expression evaluates into a falsy value.
 * @param {Object}            entry       The Remote Settings entry to be excluded or kept.
 * @param {ClientEnvironment} environment Information about version, language, platform etc.
 * @returns {?Object} the entry or null if excluded.
 */
export function jexlFilterFunc(entry: any, environment: ClientEnvironment): any | null;
/**
 * RemoteSettings constructor.
 *
 * @param {String} collectionName The remote settings identifier
 * @param {Object} options Advanced options
 * @returns {RemoteSettingsClient} An instance of a Remote Settings client.
 */
export function RemoteSettings(collectionName: string, options: any): RemoteSettingsClient;
export namespace RemoteSettings {
    /**
     * Main polling method, called by the ping mechanism.
     *
     * @param {Object} options
  .  * @param {Object} options.expectedTimestamp (optional) The expected timestamp to be received — used by servers for cache busting.
     * @param {string} options.trigger           (optional) label to identify what triggered this sync (eg. ``"timer"``, default: `"manual"`)
     * @param {bool}   options.full              (optional) Ignore last polling status and fetch all changes (default: `false`)
     * @returns {Promise} or throws error if something goes wrong.
     */
    function pollChanges({ expectedTimestamp, trigger, full, }?: {
        expectedTimestamp: any;
        trigger: string;
        full: bool;
    }): Promise<any>;
    /**
     * Enables or disables preview mode.
     *
     * When enabled, all existing and future clients will pull data from
     * the `*-preview` buckets. This allows developers and QA to test their
     * changes before publishing them for all clients.
     */
    function enablePreviewMode(enabled: any): void;
    /**
     * Returns an object with polling status information and the list of
     * known remote settings collections.
     */
    function inspect(): Promise<{
        serverURL: any;
        pollingEndpoint: any;
        serverTimestamp: any;
        localTimestamp: any;
        lastCheck: any;
        mainBucket: any;
        defaultSigner: string;
        previewMode: any;
        collections: any;
        history: {
            "settings-sync": any;
        };
    }>;
    /**
     * Delete all local data, of every collection.
     */
    function clearAll(): Promise<void>;
    /**
     * Startup function called from nsBrowserGlue.
     */
    function init(): void;
}
export namespace remoteSettingsBroadcastHandler {
    function receivedBroadcastMessage(version: any, broadcastID: any, context: any): Promise<any>;
}
