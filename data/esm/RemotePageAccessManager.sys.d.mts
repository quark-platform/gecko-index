export namespace RemotePageAccessManager {
    let accessMap: {
        "about:certerror": {
            RPMSendAsyncMessage: string[];
            RPMRecordTelemetryEvent: string[];
            RPMAddMessageListener: string[];
            RPMRemoveMessageListener: string[];
            RPMGetFormatURLPref: string[];
            RPMGetBoolPref: string[];
            RPMGetIntPref: string[];
            RPMGetAppBuildID: string[];
            RPMGetInnerMostURI: string[];
            RPMIsWindowPrivate: string[];
            RPMAddToHistogram: string[];
        };
        "about:home": {
            RPMSendAsyncMessage: string[];
            RPMAddMessageListener: string[];
        };
        "about:httpsonlyerror": {
            RPMGetFormatURLPref: string[];
            RPMGetIntPref: string[];
            RPMSendAsyncMessage: string[];
            RPMAddMessageListener: string[];
            RPMTryPingSecureWWWLink: string[];
            RPMOpenSecureWWWLink: string[];
        };
        "about:certificate": {
            RPMSendQuery: string[];
        };
        "about:neterror": {
            RPMSendAsyncMessage: string[];
            RPMCheckAlternateHostAvailable: string[];
            RPMRecordTelemetryEvent: string[];
            RPMAddMessageListener: string[];
            RPMRemoveMessageListener: string[];
            RPMGetFormatURLPref: string[];
            RPMGetBoolPref: string[];
            RPMSetPref: string[];
            RPMAddToHistogram: string[];
            RPMGetInnerMostURI: string[];
            RPMGetHttpResponseHeader: string[];
            RPMIsTRROnlyFailure: string[];
            RPMIsFirefox: string[];
            RPMIsNativeFallbackFailure: string[];
            RPMGetTRRSkipReason: string[];
            RPMGetTRRDomain: string[];
            RPMIsSiteSpecificTRRError: string[];
            RPMSetTRRDisabledLoadFlags: string[];
            RPMSendQuery: string[];
            RPMGetIntPref: string[];
        };
        "about:newtab": {
            RPMSendAsyncMessage: string[];
            RPMAddMessageListener: string[];
        };
        "about:plugins": {
            RPMSendQuery: string[];
        };
        "about:pocket-saved": {
            RPMSendAsyncMessage: string[];
            RPMAddMessageListener: string[];
            RPMRemoveMessageListener: string[];
            RPMGetStringPref: string[];
        };
        "about:pocket-signup": {
            RPMSendAsyncMessage: string[];
            RPMAddMessageListener: string[];
            RPMRemoveMessageListener: string[];
            RPMGetStringPref: string[];
        };
        "about:pocket-home": {
            RPMSendAsyncMessage: string[];
            RPMAddMessageListener: string[];
            RPMRemoveMessageListener: string[];
            RPMGetStringPref: string[];
        };
        "about:pocket-style-guide": {
            RPMSendAsyncMessage: string[];
            RPMAddMessageListener: string[];
            RPMRemoveMessageListener: string[];
        };
        "about:privatebrowsing": {
            RPMSendAsyncMessage: string[];
            RPMSendQuery: string[];
            RPMAddMessageListener: string[];
            RPMRemoveMessageListener: string[];
            RPMGetFormatURLPref: string[];
            RPMIsWindowPrivate: string[];
            RPMGetBoolPref: string[];
        };
        "about:protections": {
            RPMSendAsyncMessage: string[];
            RPMSendQuery: string[];
            RPMAddMessageListener: string[];
            RPMRemoveMessageListener: string[];
            RPMSetPref: string[];
            RPMGetBoolPref: string[];
            RPMGetStringPref: string[];
            RPMGetIntPref: string[];
            RPMGetFormatURLPref: string[];
            RPMRecordTelemetryEvent: string[];
        };
        "about:shoppingsidebar": {
            RPMSetPref: string[];
            RPMGetFormatURLPref: string[];
        };
        "about:tabcrashed": {
            RPMSendAsyncMessage: string[];
            RPMAddMessageListener: string[];
            RPMRemoveMessageListener: string[];
        };
        "about:welcome": {
            RPMSendAsyncMessage: string[];
            RPMAddMessageListener: string[];
        };
    };
    /**
     * Check if access is allowed to the given feature for a given document.
     * This should be called from within the child process.
     *
     * The feature within the accessMap must list the given aValue, for access to
     * be granted.
     *
     * @param aDocument child process document to call from
     * @param aFeature to feature to check access to
     * @param aValue value that must be included with that feature's allow list
     * @returns true if access is allowed or false otherwise
     */
    function checkAllowAccess(aDocument: any, aFeature: any, aValue: any): boolean;
    /**
     * Check if access is allowed to the given feature for a given principal.
     * This may be called from within the child or parent process.
     *
     * The feature within the accessMap must list the given aValue, for access to
     * be granted.
     *
     * In the parent process, the passed-in document is expected to be null.
     *
     * @param aPrincipal principal being called from
     * @param aFeature to feature to check access to
     * @param aValue value that must be included with that feature's allow list
     * @param aDocument optional child process document to call from
     * @returns true if access is allowed or false otherwise
     */
    function checkAllowAccessWithPrincipal(aPrincipal: any, aFeature: any, aValue: any, aDocument: any): boolean;
    /**
     * Check if a particular feature can be accessed without checking for a
     * specific feature value.
     *
     * @param aPrincipal principal being called from
     * @param aFeature to feature to check access to
     * @param aDocument optional child process document to call from
     * @returns non-null allow list if access is allowed or null otherwise
     */
    function checkAllowAccessToFeature(aPrincipal: any, aFeature: any, aDocument: any): any;
    /**
     * This function adds a new page to the access map, but can only
     * be used in a test environment.
     */
    function addPage(aUrl: any, aFunctionMap: any): void;
}
