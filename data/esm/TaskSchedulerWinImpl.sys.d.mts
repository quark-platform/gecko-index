export namespace WinImpl {
    function registerTask(id: any, command: any, intervalSeconds: any, options: any): void;
    function deleteTask(id: any): void;
    /**
     * Delete all tasks created by this installation.
     *
     * The Windows Default Browser Agent task is special: it's
     * registered by the installer and might run as a different user and
     * require permissions to delete.  We ignore it and leave it for the
     * uninstaller to remove.
     */
    function deleteAllTasks(): void;
    function taskExists(id: any): any;
    function _formatTaskDefinitionXML(command: any, intervalSeconds: any, options: any): string;
    function _createFolderIfNonexistent(): void;
    function _deleteFolderIfEmpty(): void;
    /**
     * Quotes a string for use as a single command argument, using Windows quoting
     * conventions.
     *
     * copied from quoteString() in toolkit/modules/subproces/subprocess_worker_win.js
     *
     *
     * @see https://msdn.microsoft.com/en-us/library/17w5ykft(v=vs.85).aspx
     *
     * @param {string} str
     *        The argument string to quote.
     * @returns {string}
     */
    function _quoteString(str: string): string;
    function _taskFolderName(): string;
    function _taskFolderNameParts(): {
        parentName: string;
        subName: string;
    };
    function _formatTaskName(id: any): string;
    function _matchAppTaskName(name: any): any;
}
