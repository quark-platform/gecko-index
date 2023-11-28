export namespace OSKeyStoreTestUtils {
    let TEST_ONLY_REAUTH: string;
    function setup(): void;
    function cleanup(): Promise<void>;
    /**
     * Checks whether or not the test can be run by bypassing
     * the OS login dialog. We do not want the user to be able to
     * do so with in official builds.
     * @returns {boolean} True if the test can be performed.
     */
    function canTestOSKeyStoreLogin(): boolean;
    function waitForOSKeyStoreLogin(login?: boolean): Promise<void>;
}
