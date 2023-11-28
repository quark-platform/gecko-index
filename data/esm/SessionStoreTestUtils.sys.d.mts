export namespace SessionStoreTestUtils {
    /**
     * Running this init allows helpers to access test scope helpers, like Assert
     * and SimpleTest.
     * Tests should call this init() before using the helpers which rely on properties assign here.
     *
     * @param {object} scope The global scope where tests are being run.
     * @param {DOmWindow} scope The global window object, for acessing gBrowser etc.
     */
    function init(scope: any, windowGlobal: any): void;
    function closeTab(tab: any): Promise<void>;
    function openAndCloseTab(window: any, url: any): Promise<any>;
    function waitForBrowserState(aState: any, aSetStateCallback: any): void;
    function promiseBrowserState(aState: any): Promise<any>;
}
