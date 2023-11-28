export namespace ManifestFinder {
    /**
     * Check from content process if DOM Window has a conforming
     * manifest link relationship.
     * @param aContent DOM Window to check.
     * @return {Promise<Boolean>}
     */
    function contentHasManifestLink(aContent: any): Promise<boolean>;
    /**
     * Check from a XUL browser (parent process) if it's content document has a
     * manifest link relationship.
     * @param aBrowser The XUL browser to check.
     * @return {Promise}
     */
    function browserHasManifestLink(aBrowser: any): Promise<any>;
}
