export namespace AddonUpdateChecker {
    /**
     * Retrieves the best matching compatibility update for the application from
     * a list of available update objects.
     *
     * @param  aUpdates
     *         An array of update objects
     * @param  aVersion
     *         The version of the add-on to get new compatibility information for
     * @param  aIgnoreCompatibility
     *         An optional parameter to get the first compatibility update that
     *         is compatible with any version of the application or toolkit
     * @param  aAppVersion
     *         The version of the application or null to use the current version
     * @param  aPlatformVersion
     *         The version of the platform or null to use the current version
     * @param  aIgnoreMaxVersion
     *         Ignore maxVersion when testing if an update matches. Optional.
     * @param  aIgnoreStrictCompat
     *         Ignore strictCompatibility when testing if an update matches. Optional.
     * @return an update object if one matches or null if not
     */
    function getCompatibilityUpdate(aUpdates: any, aVersion: any, aIgnoreCompatibility: any, aAppVersion: any, aPlatformVersion: any, aIgnoreMaxVersion: any, aIgnoreStrictCompat: any): any;
    /**
     * Asynchronously returns the newest available update from a list of update objects.
     *
     * @param  aUpdates
     *         An array of update objects
     * @param  aAddon
     *         The add-on that is being updated.
     * @param  aAppVersion
     *         The version of the application or null to use the current version
     * @param  aPlatformVersion
     *         The version of the platform or null to use the current version
     * @param  aIgnoreMaxVersion
     *         When determining compatible updates, ignore maxVersion. Optional.
     * @param  aIgnoreStrictCompat
     *         When determining compatible updates, ignore strictCompatibility. Optional.
     * @return an update object if one matches or null if not
     */
    function getNewestCompatibleUpdate(aUpdates: any, aAddon: any, aAppVersion: any, aPlatformVersion: any, aIgnoreMaxVersion: any, aIgnoreStrictCompat: any): Promise<any>;
    /**
     * Starts an update check.
     *
     * @param  aId
     *         The ID of the add-on being checked for updates
     * @param  aUrl
     *         The URL of the add-on's update manifest
     * @param  aObserver
     *         An observer to notify of results
     * @return UpdateParser so that the caller can use UpdateParser.cancel() to shut
     *         down in-progress update requests
     */
    function checkForUpdates(aId: any, aUrl: any, aObserver: any): UpdateParser;
}
/**
 * Starts downloading an update manifest and then passes it to an appropriate
 * parser to convert to an array of update objects
 *
 * @param  aId
 *         The ID of the add-on being checked for updates
 * @param  aUrl
 *         The URL of the update manifest
 * @param  aObserver
 *         An observer to pass results to
 */
declare function UpdateParser(aId: any, aUrl: any, aObserver: any): void;
declare class UpdateParser {
    /**
     * Starts downloading an update manifest and then passes it to an appropriate
     * parser to convert to an array of update objects
     *
     * @param  aId
     *         The ID of the add-on being checked for updates
     * @param  aUrl
     *         The URL of the update manifest
     * @param  aObserver
     *         An observer to pass results to
     */
    constructor(aId: any, aUrl: any, aObserver: any);
    id: null;
    observer: null;
    url: null;
    request: null;
    /**
     * Called when the manifest has been successfully loaded.
     */
    onLoad(): void;
    _doneAt: Error;
    /**
     * Called when the request times out
     */
    onTimeout(): void;
    /**
     * Called when the manifest failed to load.
     */
    onError(): void;
    /**
     * Helper method to notify the observer that an error occurred.
     */
    notifyError(aStatus: any): void;
    /**
     * Called to cancel an in-progress update check.
     */
    cancel(): void;
}
export {};
