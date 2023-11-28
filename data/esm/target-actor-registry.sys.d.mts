export namespace TargetActorRegistry {
    function registerTargetActor(targetActor: any): void;
    function unregisterTargetActor(targetActor: any): void;
    function registerXpcShellTargetActor(targetActor: any): void;
    function unregisterXpcShellTargetActor(targetActor: any): void;
    const xpcShellTargetActor: any;
    /**
     * Return the target actors matching the passed browser element id.
     * In some scenarios, the registry can have multiple target actors for a given
     * browserId (e.g. the regular DevTools content toolbox + DevTools WebExtensions targets).
     *
     * @param {Object} sessionContext: The Session Context to help know what is debugged.
     *                                 See devtools/server/actors/watcher/session-context.js
     * @param {String} connectionPrefix: DevToolsServerConnection's prefix, in order to select only actor
     *                                   related to the same connection. i.e. the same client.
     * @returns {Array<TargetActor>}
     */
    function getTargetActors(sessionContext: any, connectionPrefix: string): TargetActor[];
    /**
     * Helper for tests to help track the number of targets created for a given tab.
     * (Used by browser_ext_devtools_inspectedWindow.js)
     *
     * @param {Number} browserId: ID for the tab
     *
     * @returns {Number} Number of targets for this tab.
     */
    function getTargetActorsCountForBrowserElement(browserId: number): number;
}
