export namespace webauthn {
    /**
     * Add a virtual authenticator.
     *
     * @param {string} protocol one of "ctap1/u2f", "ctap2", "ctap2_1"
     * @param {string} transport one of "usb", "nfc", "ble", "smart-card",
     *                 "hybrid", "internal"
     * @param {boolean} hasResidentKey
     * @param {boolean} hasUserVerification
     * @param {boolean} isUserConsenting
     * @param {boolean} isUserVerified
     * @returns {id} the id of the added authenticator
     */
    function addVirtualAuthenticator(protocol: string, transport: string, hasResidentKey: boolean, hasUserVerification: boolean, isUserConsenting: boolean, isUserVerified: boolean): id;
    /**
     * Removes a virtual authenticator.
     *
     * @param {id} authenticatorId the id of the virtual authenticator
     */
    function removeVirtualAuthenticator(authenticatorId: id): void;
    /**
     * Adds a credential to a previously-added virtual authenticator.
     *
     * @param {id} authenticatorId the id of the virtual authenticator
     * @param {string} credentialId a probabilistically-unique byte sequence
     *                 identifying a public key credential source and its
     *                 authentication assertions (encoded using Base64url
     *                 Encoding).
     * @param {boolean} isResidentCredential if set to true, a client-side
     *                  discoverable credential is created. If set to false, a
     *                  server-side credential is created instead.
     * @param {string} rpId The Relying Party ID the credential is scoped to.
     * @param {string} privateKey An asymmetric key package containing a single
     *                 private key per RFC5958, encoded using Base64url Encoding.
     * @param {string} userHandle The userHandle associated to the credential
     *                 encoded using Base64url Encoding.
     * @param {number} signCount The initial value for a signature counter
     *                 associated to the public key credential source.
     */
    function addCredential(authenticatorId: id, credentialId: string, isResidentCredential: boolean, rpId: string, privateKey: string, userHandle: string, signCount: number): void;
    /**
     * Gets all credentials from a virtual authenticator.
     *
     * @param {id} authenticatorId the id of the virtual authenticator
     * @returns {object} the credentials on the authenticator
     */
    function getCredentials(authenticatorId: id): any;
    /**
     * Removes a credential from a virtual authenticator.
     *
     * @param {id} authenticatorId the id of the virtual authenticator
     * @param {string} credentialId the id of the credential
     */
    function removeCredential(authenticatorId: id, credentialId: string): void;
    /**
     * Removes all credentials from a virtual authenticator.
     *
     * @param {id} authenticatorId the id of the virtual authenticator
     */
    function removeAllCredentials(authenticatorId: id): void;
    /**
     * Sets the "isUserVerified" bit on a virtual authenticator.
     *
     * @param {id} authenticatorId the id of the virtual authenticator
     * @param {bool} isUserVerified the value to set the "isUserVerified" bit to
     */
    function setUserVerified(authenticatorId: id, isUserVerified: bool): void;
}
