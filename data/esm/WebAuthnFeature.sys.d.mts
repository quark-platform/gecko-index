/// <reference types="gecko-types" />
export const WebAuthnFeature: WebAuthnSupport;
declare class WebAuthnSupport {
    /**
     *
     * @param {int} browsingContextId the browsing context ID associated with this request
     * @param {string} formOrigin
     * @param {string} scenarioName can be "SignUpFormScenario" or undefined
     * @param {string} isWebAuthn indicates whether "webauthn" was included in the input's autocomplete value
     * @returns {ParentAutocompleteOption} the optional WebAuthn autocomplete item
     */
    autocompleteItemsAsync(browsingContextId: int, formOrigin: string, scenarioName: string, isWebAuthn: string): ParentAutocompleteOption;
    promptForAuthenticator(browser: any, selection: any): Promise<void>;
    #private;
}
import { ParentAutocompleteOption } from "resource://gre/modules/LoginHelper.sys.mjs";
export {};
