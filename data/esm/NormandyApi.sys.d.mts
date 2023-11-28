export namespace NormandyApi {
    export { InvalidSignatureError };
    export function clearIndexCache(): void;
    export function get(endpoint: any, data: any): Promise<Response>;
    export function absolutify(url: any): any;
    export function getApiUrl(name: any): Promise<any>;
    /**
     * Verify content signature, by serializing the specified `object` as
     * canonical JSON, and using the Normandy signer verifier to check that
     * it matches the signature specified in `signaturePayload`.
     *
     * If the the signature is not valid, an error is thrown. Otherwise this
     * function returns undefined.
     *
     * @param {object|String} data The object (or string) to be checked
     * @param {object} signaturePayload The signature information
     * @param {String} signaturePayload.x5u The certificate chain URL
     * @param {String} signaturePayload.signature base64 signature bytes
     * @param {String} type The object type (eg. `"recipe"`, `"action"`)
     * @returns {Promise<undefined>} If the signature is valid, this function returns without error
     * @throws {NormandyApi.InvalidSignatureError} if signature is invalid.
     */
    export function verifyObjectSignature(data: any, signaturePayload: {
        x5u: string;
        signature: string;
    }, type: string): Promise<undefined>;
    /**
     * Fetch metadata about this client determined by the server.
     * @return {object} Metadata specified by the server
     */
    export function classifyClient(): any;
    /**
     * Fetch details for an extension from the server.
     * @param extensionId {integer} The ID of the extension to look up
     * @resolves {Object}
     */
    export function fetchExtensionDetails(extensionId: integer): Promise<any>;
}
declare class InvalidSignatureError extends Error {
}
export {};
