export class LoginEntry {
    static parse(aObj: any): LoginEntry;
    static fromLoginInfo(aInfo: any): LoginEntry;
    constructor({ origin, formActionOrigin, httpRealm, username, password, guid, timeCreated, timeLastUsed, timePasswordChanged, timesUsed, }: {
        origin: any;
        formActionOrigin: any;
        httpRealm: any;
        username: any;
        password: any;
        guid: any;
        timeCreated: any;
        timeLastUsed: any;
        timePasswordChanged: any;
        timesUsed: any;
    });
    origin: any;
    formActionOrigin: any;
    httpRealm: any;
    username: any;
    password: any;
    guid: any;
    timeCreated: any;
    timeLastUsed: any;
    timePasswordChanged: any;
    timesUsed: any;
    toLoginInfo(): any;
}
export class Address {
    static fromGecko(aObj: any): Address;
    static parse(aObj: any): Address;
    constructor({ name, givenName, additionalName, familyName, organization, streetAddress, addressLevel1, addressLevel2, addressLevel3, postalCode, country, tel, email, guid, timeCreated, timeLastUsed, timeLastModified, timesUsed, version, }: {
        name: any;
        givenName: any;
        additionalName: any;
        familyName: any;
        organization: any;
        streetAddress: any;
        addressLevel1: any;
        addressLevel2: any;
        addressLevel3: any;
        postalCode: any;
        country: any;
        tel: any;
        email: any;
        guid: any;
        timeCreated: any;
        timeLastUsed: any;
        timeLastModified: any;
        timesUsed: any;
        version: any;
    });
    name: any;
    givenName: any;
    additionalName: any;
    familyName: any;
    organization: any;
    streetAddress: any;
    addressLevel1: any;
    addressLevel2: any;
    addressLevel3: any;
    postalCode: any;
    country: any;
    tel: any;
    email: any;
    guid: any;
    timeCreated: any;
    timeLastUsed: any;
    timeLastModified: any;
    timesUsed: any;
    version: any;
    isValid(): boolean;
    toGecko(): {
        version: any;
        name: any;
        "given-name": any;
        "additional-name": any;
        "family-name": any;
        organization: any;
        "street-address": any;
        "address-level1": any;
        "address-level2": any;
        "address-level3": any;
        "postal-code": any;
        country: any;
        tel: any;
        email: any;
        guid: any;
    };
}
export class CreditCard {
    static fromGecko(aObj: any): CreditCard;
    static parse(aObj: any): CreditCard;
    constructor({ name, number, expMonth, expYear, type, guid, timeCreated, timeLastUsed, timeLastModified, timesUsed, version, }: {
        name: any;
        number: any;
        expMonth: any;
        expYear: any;
        type: any;
        guid: any;
        timeCreated: any;
        timeLastUsed: any;
        timeLastModified: any;
        timesUsed: any;
        version: any;
    });
    name: any;
    number: any;
    expMonth: any;
    expYear: any;
    type: any;
    guid: any;
    timeCreated: any;
    timeLastUsed: any;
    timeLastModified: any;
    timesUsed: any;
    version: any;
    isValid(): boolean;
    toGecko(): {
        version: any;
        "cc-name": any;
        "cc-number": any;
        "cc-exp-month": any;
        "cc-exp-year": any;
        "cc-type": any;
        guid: any;
    };
}
export class SelectOption {
    static Hint: {
        NONE: number;
        GENERATED: number;
        INSECURE_FORM: number;
        DUPLICATE_USERNAME: number;
        MATCHING_ORIGIN: number;
    };
    constructor({ value, hint }: {
        value: any;
        hint: any;
    });
    value: any;
    hint: any;
}
export namespace GeckoViewAutocomplete {
    let _prompt: any;
    /**
     * Delegates login entry fetching for the given domain to the attached
     * LoginStorage GeckoView delegate.
     *
     * @param aDomain
     *        The domain string to fetch login entries for. If null, all logins
     *        will be fetched.
     * @return {Promise}
     *         Resolves with an array of login objects or null.
     *         Rejected if no delegate is attached.
     *         Login object string properties:
     *         { guid, origin, formActionOrigin, httpRealm, username, password }
     */
    function fetchLogins(aDomain?: any): Promise<any>;
    /**
     * Delegates credit card entry fetching to the attached LoginStorage
     * GeckoView delegate.
     *
     * @return {Promise}
     *         Resolves with an array of credit card objects or null.
     *         Rejected if no delegate is attached.
     *         Login object string properties:
     *         { guid, name, number, expMonth, expYear, type }
     */
    function fetchCreditCards(): Promise<any>;
    /**
     * Delegates address entry fetching to the attached LoginStorage
     * GeckoView delegate.
     *
     * @return {Promise}
     *         Resolves with an array of address objects or null.
     *         Rejected if no delegate is attached.
     *         Login object string properties:
     *         { guid, name, givenName, additionalName, familyName,
     *           organization, streetAddress, addressLevel1, addressLevel2,
     *           addressLevel3, postalCode, country, tel, email }
     */
    function fetchAddresses(): Promise<any>;
    /**
     * Delegates credit card entry saving to the attached LoginStorage GeckoView delegate.
     * Call this when a new or modified credit card entry has been submitted.
     *
     * @param aCreditCard The {CreditCard} to be saved.
     */
    function onCreditCardSave(aCreditCard: any): void;
    /**
     * Delegates address entry saving to the attached LoginStorage GeckoView delegate.
     * Call this when a new or modified address entry has been submitted.
     *
     * @param aAddress The {Address} to be saved.
     */
    function onAddressSave(aAddress: any): void;
    /**
     * Delegates login entry saving to the attached LoginStorage GeckoView delegate.
     * Call this when a new login entry or a new password for an existing login
     * entry has been submitted.
     *
     * @param aLogin The {LoginEntry} to be saved.
     */
    function onLoginSave(aLogin: any): void;
    /**
     * Delegates login entry password usage to the attached LoginStorage GeckoView
     * delegate.
     * Call this when the password of an existing login entry, as returned by
     * fetchLogins, has been used for autofill.
     *
     * @param aLogin The {LoginEntry} whose password was used.
     */
    function onLoginPasswordUsed(aLogin: any): void;
    let _numActiveSelections: number;
    /**
     * Delegates login entry selection.
     * Call this when there are multiple login entry option for a form to delegate
     * the selection.
     *
     * @param aBrowser The browser instance the triggered the selection.
     * @param aOptions The list of {SelectOption} depicting viable options.
     */
    function onLoginSelect(aBrowser: any, aOptions: any): Promise<any>;
    /**
     * Delegates credit card entry selection.
     * Call this when there are multiple credit card entry option for a form to delegate
     * the selection.
     *
     * @param aBrowser The browser instance the triggered the selection.
     * @param aOptions The list of {SelectOption} depicting viable options.
     */
    function onCreditCardSelect(aBrowser: any, aOptions: any): Promise<any>;
    /**
     * Delegates address entry selection.
     * Call this when there are multiple address entry option for a form to delegate
     * the selection.
     *
     * @param aBrowser The browser instance the triggered the selection.
     * @param aOptions The list of {SelectOption} depicting viable options.
     */
    function onAddressSelect(aBrowser: any, aOptions: any): Promise<any>;
    function delegateSelection({ browsingContext, options, inputElementIdentifier, formOrigin, }: {
        browsingContext: any;
        options: any;
        inputElementIdentifier: any;
        formOrigin: any;
    }): Promise<void>;
    function delegateDismiss(): void;
}
