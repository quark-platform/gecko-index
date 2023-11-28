export namespace MacOSImpl {
    function registerTask(id: any, command: any, intervalSeconds: any, options: any): Promise<boolean>;
    function deleteTask(id: any): Promise<boolean>;
    function _deleteTaskByLabel(label: any): Promise<boolean>;
    function _listAllLabelsForThisApp(): Promise<any>;
    function deleteAllTasks(): Promise<void>;
    function taskExists(id: any): Promise<any>;
    /**
     * Turn an object into a macOS plist.
     *
     * Properties of type array-of-string, dict-of-string, string,
     * number, and boolean are supported.
     *
     * @param   options object to turn into macOS plist.
     * @returns plist as an XML DOM object.
     */
    function _toLaunchdPlist(options: any): Document;
    /**
     * Turn an object into a macOS plist encoded as a string.
     *
     * Properties of type array-of-string, dict-of-string, string,
     * number, and boolean are supported.
     *
     * @param   options object to turn into macOS plist.
     * @returns plist as a string.
     */
    function _formatLaunchdPlist(options: any): string;
    function _formatLabelForThisApp(id: any): string;
    function _labelMatchesThisApp(label: any): any;
    function _formatPlistPath(label: any): any;
    let _cachedUid: number;
    function _uid(): Promise<number>;
}
