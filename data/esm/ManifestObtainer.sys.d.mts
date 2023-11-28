export namespace ManifestObtainer {
    /**
     * Public interface for obtaining a web manifest from a XUL browser, to use
     * on the parent process.
     * @param  {XULBrowser} The browser to check for the manifest.
     * @param {Object} aOptions
     * @param {Boolean} aOptions.checkConformance If spec conformance messages should be collected.
     *                                            Adds proprietary moz_* members to manifest.
     * @return {Promise<Object>} The processed manifest.
     */
    function browserObtainManifest(aBrowser: any, aOptions?: {
        checkConformance: boolean;
    }): Promise<any>;
    /**
     * Public interface for obtaining a web manifest from a XUL browser.
     * @param {Window} aContent A content Window from which to extract the manifest.
     * @param {Object} aOptions
     * @param {Boolean} aOptions.checkConformance If spec conformance messages should be collected.
     *                                            Adds proprietary moz_* members to manifest.
     * @return {Promise<Object>} The processed manifest.
     */
    function contentObtainManifest(aContent: Window, aOptions?: {
        checkConformance: boolean;
    }): Promise<any>;
}
