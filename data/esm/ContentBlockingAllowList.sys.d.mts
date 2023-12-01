export namespace ContentBlockingAllowList {
    let _observingLastPBContext: boolean;
    function _maybeSetupLastPBContextObserver(): void;
    function _basePrincipalForAntiTrackingCommon(browser: any): any;
    function _permissionTypeFor(browser: any): "trackingprotection-pb" | "trackingprotection";
    function _expiryFor(browser: any): any;
    /**
     * Returns false if this module cannot handle the current document loaded in
     * the browser object.  This can happen for example for about: or file:
     * documents.
     */
    function canHandle(browser: any): boolean;
    /**
     * Add the given browser object to the Content Blocking allow list.
     */
    function add(browser: any): void;
    /**
     * Remove the given browser object from the Content Blocking allow list.
     */
    function remove(browser: any): void;
    /**
     * Returns true if the current browser has loaded a document that is on the
     * Content Blocking allow list.
     */
    function includes(browser: any): boolean;
}
