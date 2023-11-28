export namespace ProductAddonChecker {
    let NETWORK_REQUEST_ERR: string;
    let NETWORK_TIMEOUT_ERR: string;
    let ABORT_ERR: string;
    let VERIFICATION_MISSING_DATA_ERR: string;
    let VERIFICATION_FAILED_ERR: string;
    let VERIFICATION_INVALID_ERR: string;
    let XML_PARSE_ERR: string;
    /**
     * Downloads a list of add-ons from a URL optionally testing the SSL
     * certificate for certain attributes, and/or testing the content signature.
     *
     * @param  url
     *         The url to download from.
     * @param  allowNonBuiltIn
     *         Whether to trust SSL certificates without a built-in CA issuer.
     * @param  allowedCerts
     *         The list of certificate attributes to match the SSL certificate
     *         against or null to skip checks.
     * @param  verifyContentSignature
     *         When true, will verify the content signature information from the
     *         response header. Failure to verify will result in an error.
     * @return a promise that resolves to an object containing the list of add-ons
     *         and whether the local fallback was used, or rejects with a JS
     *         exception in case of error. In the case of an error, a best effort
     *         is made to set the error addonCheckerErr property to one of the
     *         more specific names used by the product addon checker.
     */
    function getProductAddonList(url: any, allowNonBuiltIn?: boolean, allowedCerts?: any, verifyContentSignature?: boolean): Promise<{
        usedFallback: boolean;
        addons: {
            size: any;
        }[];
    }>;
    /**
     * Downloads an add-on to a local file and checks that it matches the expected
     * file. The caller is responsible for deleting the temporary file returned.
     *
     * @param  addon
     *         The addon to download.
     * @param  options (optional)
     * @param  options.httpsOnlyNoUpgrade
     *         Prevents upgrade to https:// when HTTPS-Only Mode is enabled.
     * @return a promise that resolves to the temporary file downloaded or rejects
     *         with a JS exception in case of error.
     */
    function downloadAddon(addon: any, options?: {
        httpsOnlyNoUpgrade: boolean;
    }): Promise<any>;
}
export namespace ProductAddonCheckerTestUtils {
    /**
     * Used to override ServiceRequest calls with a mock request.
     * @param mockRequest The mocked ServiceRequest object.
     * @param callback Method called with the overridden ServiceRequest. The override
     *        is undone after the callback returns.
     */
    function overrideServiceRequest(mockRequest: any, callback: any): Promise<any>;
}
