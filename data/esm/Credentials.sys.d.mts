export const Credentials: Readonly<{
    /**
     * Make constants accessible to tests
     */
    constants: {
        PROTOCOL_VERSION: string;
        PBKDF2_ROUNDS: number;
        STRETCHED_PW_LENGTH_BYTES: number;
        HKDF_SALT: any;
        HKDF_LENGTH: number;
    };
    /**
     * KW function from https://github.com/mozilla/fxa-auth-server/wiki/onepw-protocol
     *
     * keyWord derivation for use as a salt.
     *
     *
     *   @param {String} context  String for use in generating salt
     *
     *   @return {bitArray} the salt
     *
     * Note that PROTOCOL_VERSION does not refer in any way to the version of the
     * Firefox Accounts API.
     */
    keyWord(context: string): bitArray;
    /**
     * KWE function from https://github.com/mozilla/fxa-auth-server/wiki/onepw-protocol
     *
     * keyWord extended with a name and an email.
     *
     *   @param {String} name The name of the salt
     *   @param {String} email The email of the user.
     *
     *   @return {bitArray} the salt combination with the namespace
     *
     * Note that PROTOCOL_VERSION does not refer in any way to the version of the
     * Firefox Accounts API.
     */
    keyWordExtended(name: string, email: string): bitArray;
    setup(emailInput: any, passwordInput: any, options?: {}): Promise<any>;
}>;
