export namespace OSKeyStore {
    let STORE_LABEL: string;
    let _isLocked: boolean;
    let _pendingUnlockPromise: any;
    const isLoggedIn: boolean;
    const isUIBusy: boolean;
    function canReauth(): boolean;
    /**
     * If the test pref exists, this method will dispatch a observer message and
     * resolves to simulate successful reauth, or rejects to simulate failed reauth.
     *
     * @returns {Promise<undefined>} Resolves when sucessful login, rejects when
     *                               login fails.
     */
    function _reauthInTests(): Promise<undefined>;
    /**
     * Ensure the store in use is logged in. It will display the OS
     * login prompt or do nothing if it's logged in already. If an existing login
     * prompt is already prompted, the result from it will be used instead.
     *
     * Note: This method must set _pendingUnlockPromise before returning the
     * promise (i.e. the first |await|), otherwise we'll risk re-entry.
     * This is why there aren't an |await| in the method. The method is marked as
     * |async| to communicate that it's async.
     *
     * @param   {boolean|string} reauth If set to a string, prompt the reauth login dialog,
     *                                  showing the string on the native OS login dialog.
     *                                  Otherwise `false` will prevent showing the prompt.
     * @param   {string} dialogCaption  The string will be shown on the native OS
     *                                  login dialog as the dialog caption (usually Product Name).
     * @param   {Window?} parentWindow  The window of the caller, used to center the
     *                                  OS prompt in the middle of the application window.
     * @param   {boolean} generateKeyIfNotAvailable Makes key generation optional
     *                                  because it will currently cause more
     *                                  problems for us down the road on macOS since the application
     *                                  that creates the Keychain item is the only one that gets
     *                                  access to the key in the future and right now that key isn't
     *                                  specific to the channel or profile. This means if a user uses
     *                                  both DevEdition and Release on the same OS account (not
     *                                  unreasonable for a webdev.) then when you want to simply
     *                                  re-auth the user for viewing passwords you may also get a
     *                                  KeyChain prompt to allow the app to access the stored key even
     *                                  though that's not at all relevant for the re-auth. We skip the
     *                                  code here so that we can postpone deciding on how we want to
     *                                  handle this problem (multiple channels) until we actually use
     *                                  the key storage. If we start creating keys on macOS by running
     *                                  this code we'll potentially have to do extra work to cleanup
     *                                  the mess later.
     * @returns {Promise<Object>}       Object with the following properties:
     *                                    authenticated: {boolean} Set to true if the user successfully authenticated.
     *                                    auth_details: {String?} Details of the authentication result.
     */
    function ensureLoggedIn(reauth?: string | boolean, dialogCaption?: string, parentWindow?: Window, generateKeyIfNotAvailable?: boolean): Promise<any>;
    /**
     * Decrypts cipherText.
     *
     * Note: In the event of an rejection, check the result property of the Exception
     *       object. Handles NS_ERROR_ABORT as user has cancelled the action (e.g.,
     *       don't show that dialog), apart from other errors (e.g., gracefully
     *       recover from that and still shows the dialog.)
     *
     * @param   {string}         cipherText Encrypted string including the algorithm details.
     * @param   {boolean|string} reauth     If set to a string, prompt the reauth login dialog.
     *                                      The string may be shown on the native OS
     *                                      login dialog. Empty strings and `true` are disallowed.
     * @returns {Promise<string>}           resolves to the decrypted string, or rejects otherwise.
     */
    function decrypt(cipherText: string, reauth?: string | boolean): Promise<string>;
    /**
     * Encrypts a string and returns cipher text containing algorithm information used for decryption.
     *
     * @param   {string} plainText Original string without encryption.
     * @returns {Promise<string>} resolves to the encrypted string (with algorithm), otherwise rejects.
     */
    function encrypt(plainText: string): Promise<string>;
    /**
     * Resolve when the login dialogs are closed, immediately if none are open.
     *
     * An existing MP dialog will be focused and will request attention.
     *
     * @returns {Promise<boolean>}
     *          Resolves with whether the user is logged in to MP.
     */
    function waitForExistingDialog(): Promise<boolean>;
    /**
     * Remove the store. For tests.
     */
    function cleanup(): Promise<any>;
}
