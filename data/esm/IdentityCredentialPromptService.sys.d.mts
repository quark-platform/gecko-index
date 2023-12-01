/**
 * Class implementing the nsIIdentityCredentialPromptService
 * */
export class IdentityCredentialPromptService {
    classID: unknown;
    QueryInterface: MozQueryInterface;
    loadIconFromManifest(providerManifest: any, bestIconSize?: number, defaultIcon?: any): Promise<any>;
    /**
     * Ask the user, using a PopupNotification, to select an Identity Provider from a provided list.
     * @param {BrowsingContext} browsingContext - The BrowsingContext of the document requesting an identity credential via navigator.credentials.get()
     * @param {IdentityProviderConfig[]} identityProviders - The list of identity providers the user selects from
     * @param {IdentityProviderAPIConfig[]} identityManifests - The manifests corresponding 1-to-1 with identityProviders
     * @returns {Promise<number>} The user-selected identity provider
     */
    showProviderPrompt(browsingContext: BrowsingContext, identityProviders: IdentityProviderConfig[], identityManifests: IdentityProviderAPIConfig[]): Promise<number>;
    /**
     * Ask the user, using a PopupNotification, to approve or disapprove of the policies of the Identity Provider.
     * @param {BrowsingContext} browsingContext - The BrowsingContext of the document requesting an identity credential via navigator.credentials.get()
     * @param {IdentityProviderConfig} identityProvider - The Identity Provider that the user has selected to use
     * @param {IdentityProviderAPIConfig} identityManifest - The Identity Provider that the user has selected to use's manifest
     * @param {IdentityCredentialMetadata} identityCredentialMetadata - The metadata displayed to the user
     * @returns {Promise<bool>} A boolean representing the user's acceptance of the metadata.
     */
    showPolicyPrompt(browsingContext: BrowsingContext, identityProvider: IdentityProviderConfig, identityManifest: IdentityProviderAPIConfig, identityCredentialMetadata: IdentityCredentialMetadata): Promise<bool>;
    /**
     * Ask the user, using a PopupNotification, to select an account from a provided list.
     * @param {BrowsingContext} browsingContext - The BrowsingContext of the document requesting an identity credential via navigator.credentials.get()
     * @param {IdentityProviderAccountList} accountList - The list of accounts the user selects from
     * @param {IdentityProviderConfig} provider - The selected identity provider
     * @param {IdentityProviderAPIConfig} providerManifest - The manifest of the selected identity provider
     * @returns {Promise<IdentityProviderAccount>} The user-selected account
     */
    showAccountListPrompt(browsingContext: BrowsingContext, accountList: IdentityProviderAccountList, provider: IdentityProviderConfig, providerManifest: IdentityProviderAPIConfig): Promise<IdentityProviderAccount>;
    /**
     * Close all UI from the other methods of this module for the provided window.
     * @param {BrowsingContext} browsingContext - The BrowsingContext of the document requesting an identity credential via navigator.credentials.get()
     * @returns
     */
    close(browsingContext: BrowsingContext): void;
}
