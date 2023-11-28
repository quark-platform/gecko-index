export namespace PluginManager {
    let gmpCrashes: Map<any, any>;
    function observe(subject: any, topic: any, data: any): void;
    function _registerGMPCrash(subject: any): void;
    /**
     * Submit a crash report for a crashed plugin.
     *
     * @param pluginCrashID
     *        An object with a pluginID.
     * @param keyVals
     *        An object whose key-value pairs will be merged
     *        with the ".extra" file submitted with the report.
     *        The properties of htis object will override properties
     *        of the same name in the .extra file.
     */
    function submitCrashReport(pluginCrashID: any, keyVals?: {}): void;
    function getCrashReport(pluginCrashID: any): any;
}
export class PluginParent {
    receiveMessage(msg: any): any;
    /**
     * Shows a plugin-crashed notification bar for a browser that has had a
     * GMP plugin crash.
     *
     * @param browser
     *        The browser to show the notification for.
     * @param pluginCrashID
     *        The unique-per-process identifier for GMP.
     */
    showPluginCrashedNotification(browser: any, pluginCrashID: any): void;
}
