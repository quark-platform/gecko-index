export namespace WindowsInstallsInfo {
    /**
     * Retrieve install paths of this app, based on the values in the TaskBarIDs registry key.
     *
     * Installs from unarchived packages do not have a TaskBarID registry key and
     * therefore won't appear in the result.
     *
     * @param {Number} [limit] Optional, maximum number of installation paths to count.
              Defaults to 1024.
     * @param {Set} [exclude] Optional, an Set of paths to exclude from the count.
     * @returns {Set} Set of install paths, lower cased.
     */
    function getInstallPaths(limit?: number, exclude?: Set<any>): Set<any>;
}
