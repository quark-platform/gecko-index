export namespace NativeManifests {
    let _initializePromise: any;
    let _lookup: any;
    function init(): any;
    function _winLookup(type: any, name: any, context: any): Promise<{
        path: any;
        manifest: any;
    }>;
    function _tryPath(type: any, path: any, name: any, context: any, logIfNotFound: any): Promise<any>;
    function _tryPaths(type: any, name: any, dirs: any, context: any): Promise<{
        path: any;
        manifest: any;
    }>;
    /**
     * Search for a valid native manifest of the given type and name.
     * The directories searched and rules for manifest validation are all
     * detailed in the Native Manifests documentation.
     *
     * @param {string} type The type, one of: "pkcs11", "stdio" or "storage".
     * @param {string} name The name of the manifest to search for.
     * @param {object} context A context object as expected by Schemas.normalize.
     * @returns {object} The contents of the validated manifest, or null if
     *                   no valid manifest can be found for this type and name.
     */
    function lookupManifest(type: string, name: string, context: any): any;
}
