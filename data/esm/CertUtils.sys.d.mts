export namespace CertUtils {
    export { BadCertHandler };
    export { checkCert };
    export { readCertPrefs };
    export { validateCert };
}
/**
 * This class implements nsIChannelEventSink. Its job is to perform extra checks
 * on the certificates used for some connections when those connections
 * redirect.
 *
 * @param  aAllowNonBuiltInCerts (optional)
 *         When true certificates that aren't builtin are allowed. When false
 *         or not specified the certificate must be a builtin certificate.
 */
declare function BadCertHandler(aAllowNonBuiltInCerts: any): void;
declare class BadCertHandler {
    /**
     * This class implements nsIChannelEventSink. Its job is to perform extra checks
     * on the certificates used for some connections when those connections
     * redirect.
     *
     * @param  aAllowNonBuiltInCerts (optional)
     *         When true certificates that aren't builtin are allowed. When false
     *         or not specified the certificate must be a builtin certificate.
     */
    constructor(aAllowNonBuiltInCerts: any);
    allowNonBuiltInCerts: any;
    asyncOnChannelRedirect(oldChannel: any, newChannel: any, flags: any, callback: any): void;
    getInterface(iid: any): any;
    QueryInterface: MozQueryInterface;
}
/**
 * Checks if the connection must be HTTPS and if so, only allows built-in
 * certificates and validates application specified certificate attribute
 * values.
 * See bug 340198 and bug 544442.
 *
 * @param  aChannel
 *         The nsIChannel that will have its certificate checked.
 * @param  aAllowNonBuiltInCerts (optional)
 *         When true certificates that aren't builtin are allowed. When false
 *         or not specified the certificate must be a builtin certificate.
 * @param  aCerts (optional)
 *         An array of JS objects with names / values corresponding to the
 *         channel's expected certificate's attribute names / values. If it
 *         isn't null or not specified the the scheme for the channel's
 *         originalURI must be https.
 * @throws NS_ERROR_UNEXPECTED if a certificate is expected and the URI scheme
 *         is not https.
 *         NS_ERROR_ILLEGAL_VALUE if a certificate attribute name from the
 *         aCerts param does not exist or the value for a certificate attribute
 *         from the aCerts  param is different than the expected value.
 *         NS_ERROR_ABORT if the certificate issuer is not built-in.
 */
declare function checkCert(aChannel: any, aAllowNonBuiltInCerts: any, aCerts: any): void;
/**
 * Reads a set of expected certificate attributes from preferences. The returned
 * array can be passed to validateCert or checkCert to validate that a
 * certificate matches the expected attributes. The preferences should look like
 * this:
 *   prefix.1.attribute1
 *   prefix.1.attribute2
 *   prefix.2.attribute1
 *   etc.
 * Each numeric branch contains a set of required attributes for a single
 * certificate. Having multiple numeric branches means that multiple
 * certificates would be accepted by validateCert.
 *
 * @param  aPrefBranch
 *         The prefix for all preferences, should end with a ".".
 * @return An array of JS objects with names / values corresponding to the
 *         expected certificate's attribute names / values.
 */
declare function readCertPrefs(aPrefBranch: any): {}[];
/**
 * Verifies that an nsIX509Cert matches the expected certificate attribute
 * values.
 *
 * @param  aCertificate
 *         The nsIX509Cert to compare to the expected attributes.
 * @param  aCerts
 *         An array of JS objects with names / values corresponding to the
 *         expected certificate's attribute names / values. If this is null or
 *         an empty array then no checks are performed.
 * @throws NS_ERROR_ILLEGAL_VALUE if a certificate attribute name from the
 *         aCerts param does not exist or the value for a certificate attribute
 *         from the aCerts param is different than the expected value or
 *         aCertificate wasn't specified and aCerts is not null or an empty
 *         array.
 */
declare function validateCert(aCertificate: any, aCerts: any): void;
export {};
