export namespace Corroborate {
    function init(): Promise<void>;
    /**
     * Verify signed state of arbitrary JAR file. Currently only JAR files signed
     * with Mozilla-internal keys are supported.
     *
     * @argument file - an nsIFile pointing to the JAR to verify.
     *
     * @returns {Promise} - resolves true if file exists and is valid, false otherwise.
     *                      Never rejects.
     */
    function verifyJar(file: any): Promise<any>;
}
