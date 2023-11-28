export namespace GeckoViewIdentityCredential {
    function onShowProviderPrompt(aBrowser: any, providers: any, resolve: any, reject: any): Promise<void>;
    function onShowAccountsPrompt(aBrowser: any, accounts: any, resolve: any, reject: any): Promise<void>;
    function onShowPolicyPrompt(aBrowser: any, privacyPolicyUrl: any, termsOfServiceUrl: any, providerDomain: any, host: any, icon: any, resolve: any, reject: any): Promise<void>;
}
