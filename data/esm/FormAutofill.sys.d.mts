export namespace FormAutofill {
    export { ENABLED_AUTOFILL_ADDRESSES_PREF };
    export { ENABLED_AUTOFILL_ADDRESSES_CAPTURE_PREF };
    export { ENABLED_AUTOFILL_ADDRESSES_CAPTURE_V2_PREF };
    export { ENABLED_AUTOFILL_CREDITCARDS_PREF };
    export { ENABLED_AUTOFILL_CREDITCARDS_REAUTH_PREF };
    export { AUTOFILL_CREDITCARDS_AUTOCOMPLETE_OFF_PREF };
    export { AUTOFILL_ADDRESSES_AUTOCOMPLETE_OFF_PREF };
    export let _region: any;
    export let DEFAULT_REGION: any;
    /**
     * Determines if an autofill feature should be enabled based on the "available"
     * and "supportedCountries" parameters.
     *
     * @param {string} available Available can be one of the following: "on", "detect", "off".
     * "on" forces the particular Form Autofill feature on, while "detect" utilizes the supported countries
     * to see if the feature should be available.
     * @param {string[]} supportedCountries
     * @returns {boolean} `true` if autofill feature is supported in the current browser search region
     */
    export function _isSupportedRegion(available: string, supportedCountries: string[]): boolean;
    export function isAutofillAddressesAvailableInCountry(country: any): any;
    export const isAutofillEnabled: boolean;
    export const isAutofillCreditCardsAvailable: boolean;
    export const isAutofillAddressesAvailable: boolean;
    export const isAutofillCreditCardsEnabled: boolean;
    export const isAutofillCreditCardsLocked: boolean;
    export const isAutofillAddressesEnabled: boolean;
    export const isAutofillAddressesLocked: boolean;
    export function defineLogGetter(scope: any, logPrefix: any): any;
}
declare const ENABLED_AUTOFILL_ADDRESSES_PREF: "extensions.formautofill.addresses.enabled";
declare const ENABLED_AUTOFILL_ADDRESSES_CAPTURE_PREF: "extensions.formautofill.addresses.capture.enabled";
declare const ENABLED_AUTOFILL_ADDRESSES_CAPTURE_V2_PREF: "extensions.formautofill.addresses.capture.v2.enabled";
declare const ENABLED_AUTOFILL_CREDITCARDS_PREF: "extensions.formautofill.creditCards.enabled";
declare const ENABLED_AUTOFILL_CREDITCARDS_REAUTH_PREF: "extensions.formautofill.reauth.enabled";
declare const AUTOFILL_CREDITCARDS_AUTOCOMPLETE_OFF_PREF: "extensions.formautofill.creditCards.ignoreAutocompleteOff";
declare const AUTOFILL_ADDRESSES_AUTOCOMPLETE_OFF_PREF: "extensions.formautofill.addresses.ignoreAutocompleteOff";
export {};
