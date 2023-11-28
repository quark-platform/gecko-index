export const NETWORK_NAMES: {
    "american express": string;
    "master card": string;
    "union pay": string;
};
export class CreditCard {
    /**
     * Normalizes a credit card number.
     * @param {string} number
     * @return {string | null}
     * @memberof CreditCard
     */
    static normalizeCardNumber(number: string): string | null;
    /**
     * Attempts to match the number against known network identifiers.
     *
     * @param {string} ccNumber Credit card number with no spaces or special characters in it.
     *
     * @returns {string|null}
     */
    static getType(ccNumber: string): string | null;
    /**
     * Attempts to retrieve a card network identifier based
     * on a name.
     *
     * @param {string|undefined|null} name
     *
     * @returns {string|null}
     */
    static getNetworkFromName(name: string | undefined | null): string | null;
    /**
     * Get credit card display label. It should display masked numbers, the
     * cardholder's name, and the expiration date, separated by a commas.
     * In addition, the card type is provided in the accessibility label.
     */
    static getLabelInfo({ number, name, month, year, type }: {
        number: any;
        name: any;
        month: any;
        year: any;
        type: any;
    }): {
        id: string;
        args: {
            number: string;
            name: any;
            month: any;
            year: any;
            type: any;
        };
    };
    /**
     *
     * Please use getLabelInfo above, as it allows for localization.
     * @deprecated
     */
    static getLabel({ number, name }: {
        number: any;
        name: any;
    }): string;
    static normalizeExpirationMonth(month: any): any;
    static normalizeExpirationYear(year: any): any;
    static parseExpirationString(expirationString: any): {
        month: number;
        year: number;
    };
    static normalizeExpiration({ expirationString, expirationMonth, expirationYear, }: {
        expirationString: any;
        expirationMonth: any;
        expirationYear: any;
    }): {
        month: any;
        year: any;
    };
    static formatMaskedNumber(maskedNumber: any): {
        affix: string;
        label: any;
    };
    static getCreditCardLogo(network: any): string;
    static getMaskedNumber(number: any): string;
    static getLongMaskedNumber(number: any): string;
    static isValidNumber(number: any): boolean;
    static isValidNetwork(network: any): boolean;
    static getSupportedNetworks(): readonly string[];
    /**
     * Localised names for supported networks are available in
     * `browser/preferences/formAutofill.ftl`.
     */
    static getNetworkL10nId(network: any): string;
    /**
     * A CreditCard object represents a credit card, with
     * number, name, expiration, network, and CCV.
     * The number is the only required information when creating
     * an object, all other members are optional. The number
     * is validated during construction and will throw if invalid.
     *
     * @param {string} name, optional
     * @param {string} number
     * @param {string} expirationString, optional
     * @param {string|number} expirationMonth, optional
     * @param {string|number} expirationYear, optional
     * @param {string} network, optional
     * @param {string|number} ccv, optional
     * @param {string} encryptedNumber, optional
     * @throws if number is an invalid credit card number
     */
    constructor({ name, number, expirationString, expirationMonth, expirationYear, network, ccv, encryptedNumber, }: string);
    _name: any;
    _unmodifiedNumber: any;
    _encryptedNumber: any;
    _ccv: any;
    /**
     * Sets the number member of a CreditCard object. If the number
     * is not valid according to the Luhn algorithm then the member
     * will get set to the empty string before throwing an exception.
     *
     * @param {string} value
     * @throws if the value is an invalid credit card number
     */
    set number(value: string);
    get number(): string;
    _expirationMonth: any;
    _expirationYear: any;
    set network(value: any);
    get network(): any;
    set name(value: any);
    set expirationMonth(value: any);
    get expirationMonth(): any;
    set expirationYear(value: any);
    get expirationYear(): any;
    set expirationString(value: any);
    set ccv(value: any);
    _number: string;
    _network: any;
    isValidNumber(): boolean;
    /**
     * Returns true if the card number is valid and the
     * expiration date has not passed. Otherwise false.
     *
     * @returns {boolean}
     */
    isValid(): boolean;
    get maskedNumber(): string;
    get longMaskedNumber(): string;
}
