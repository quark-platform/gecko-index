export namespace FxAccountsConfig {
    function promiseEmailURI(email: any, entrypoint: any, extraParams?: {}): Promise<string>;
    function promiseConnectAccountURI(entrypoint: any, extraParams?: {}): Promise<string>;
    function promiseForceSigninURI(entrypoint: any, extraParams?: {}): Promise<string>;
    function promiseManageURI(entrypoint: any, extraParams?: {}): Promise<string>;
    function promiseChangeAvatarURI(entrypoint: any, extraParams?: {}): Promise<string>;
    function promiseManageDevicesURI(entrypoint: any, extraParams?: {}): Promise<string>;
    function promiseConnectDeviceURI(entrypoint: any, extraParams?: {}): Promise<string>;
    function promisePairingURI(extraParams?: {}): Promise<string>;
    function promiseOAuthURI(extraParams?: {}): Promise<string>;
    function promiseMetricsFlowURI(entrypoint: any, extraParams?: {}): Promise<string>;
    namespace defaultParams {
        let context: any;
    }
    /**
     * @param path should be parsable by the URL constructor first parameter.
     * @param {bool} [options.includeDefaultParams] If true include the default search params.
     * @param {Object.<string, string>} [options.extraParams] Additionnal search params.
     * @param {bool} [options.addAccountIdentifiers] if true we add the current logged-in user uid and email to the search params.
     */
    function _buildURL(path: any, { includeDefaultParams, extraParams, addAccountIdentifiers, }?: bool): Promise<string>;
    function _buildURLFromString(href: any, extraParams?: {}): Promise<string>;
    function resetConfigURLs(): void;
    function getAutoConfigURL(): any;
    function ensureConfigured(): Promise<void>;
    function isProductionConfig(): boolean;
    function updateConfigURLs(): Promise<void>;
    function fetchConfigDocument(rootURL?: any): Promise<any>;
    function getSignedInUser(): any;
}
