export namespace Blocklist {
    function _init(): void;
    let isLoaded: boolean;
    function shutdown(): void;
    function observe(subject: any, topic: any, prefName: any): void;
    function loadBlocklistAsync(): void;
    function getAddonBlocklistState(addon: any, appVersion: any, toolkitVersion: any): any;
    function getAddonBlocklistEntry(addon: any, appVersion: any, toolkitVersion: any): any;
    function recordAddonBlockChangeTelemetry(addon: any, reason: any): void;
    let allowDeprecatedBlocklistV2: boolean;
    function _chooseExtensionBlocklistImplementationFromPref(): void;
    function _blocklistUpdated(): void;
}
export namespace BlocklistPrivate {
    export { BlocklistTelemetry };
    export { ExtensionBlocklistMLBF };
    export { ExtensionBlocklistRS };
    export { GfxBlocklistRS };
}
declare namespace BlocklistTelemetry {
    function init(): void;
    /**
     * Record the RemoteSettings Blocklist lastModified server time into the
     * "blocklist.lastModified_rs keyed scalar (or "Missing Date" when unable
     * to retrieve a valid timestamp).
     *
     * @param {string} blocklistType
     *        The blocklist type that has been updated ("addons" or "addons_mlbf");
     *        the "gfx" blocklist is not covered by this telemetry).
     * @param {RemoteSettingsClient} remoteSettingsClient
     *        The RemoteSettings client to retrieve the lastModified timestamp from.
     */
    function recordRSBlocklistLastModified(blocklistType: string, remoteSettingsClient: RemoteSettingsClient): Promise<void>;
    /**
     * Record a timestamp in telemetry as a UTC string or "Missing Date" if the
     * input is not a valid timestamp.
     *
     * @param {string} telemetryKey
     *        The part of after "blocklist.", as defined in Scalars.yaml.
     * @param {number} time
     *        A timestamp to record. If invalid, "Missing Date" will be recorded.
     */
    function recordTimeScalar(telemetryKey: string, time: number): void;
    /**
     * Records a glean datetime if time is > than 0, otherwise 0 is submitted.
     *
     * @param {nsIGleanDatetime} gleanTelemetry
     *        A glean telemetry datetime object.
     * @param {number} time
     *        A timestamp to record.
     */
    function recordGleanDateTime(gleanTelemetry: nsIGleanDatetime, time: number): void;
    /**
     * Record whether an add-on is blocked and the parameters that guided the
     * decision to block or unblock the add-on.
     *
     * @param {AddonWrapper|object} addon
     *        The blocked or unblocked add-on. Not necessarily installed.
     *        Could be an object with the id, version and blocklistState
     *        properties when the AddonWrapper is not available (e.g. during
     *        update checks).
     * @param {string} reason
     *        The reason for recording the event,
     *        "addon_install", "addon_update", "addon_update_check",
     *        "addon_db_modified", "blocklist_update".
     */
    function recordAddonBlockChangeTelemetry(addon: any, reason: string): void;
}
declare namespace ExtensionBlocklistMLBF {
    let RS_ATTACHMENT_ID: string;
    function _fetchMLBF(record: any): Promise<any>;
    function _updateMLBF(forceUpdate?: boolean): Promise<any>;
    function _recordPostUpdateTelemetry(): void;
    function getBlocklistMetadataForTelemetry(): {
        mlbf_last_time: string;
        mlbf_generation: string;
        mlbf_source: any;
    };
    function ensureInitialized(): void;
    function shutdown(): void;
    function undoShutdown(): void;
    function getState(addon: any): Promise<any>;
    function getEntry(addon: any): Promise<{
        state: any;
        url: any;
    }>;
    function _createBlockEntry(addon: any): {
        state: any;
        url: any;
    };
    function createBlocklistURL(id: any, version: any): any;
}
declare namespace ExtensionBlocklistRS {
    function _ensureEntries(): Promise<void>;
    function _updateEntries(): Promise<void>;
    function _filterItem(entry: any, environment: any): Promise<any>;
    function sync(): any;
    function ensureInitialized(): void;
    function shutdown(): void;
    function undoShutdown(): void;
    function getState(addon: any, appVersion: any, toolkitVersion: any): Promise<any>;
    function getEntry(addon: any, appVersion: any, toolkitVersion: any): Promise<{
        state: any;
        url: string;
        prefs: any;
    }>;
    function _getEntry(addon: any, addonEntries: any, appVersion: any, toolkitVersion: any): {
        state: any;
        url: string;
        prefs: any;
    };
}
declare namespace GfxBlocklistRS {
    function _ensureInitialized(): void;
    function shutdown(): void;
    function sync(): any;
}
export {};
