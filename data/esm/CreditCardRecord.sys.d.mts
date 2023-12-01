/**
 * The CreditCardRecord class serves to handle and normalize internal credit card records.
 * Unlike the CreditCard class, which represents actual card data, CreditCardRecord is used
 * for processing and consistent data representation.
 */
export class CreditCardRecord {
    static normalizeFields(creditCard: any): void;
    static "__#1533051@#normalizeCCNameFields"(creditCard: any): void;
    static "__#1533051@#normalizeCCNumberFields"(creditCard: any): void;
    static "__#1533051@#normalizeCCExpirationDateFields"(creditCard: any): void;
    static "__#1533051@#normalizeCCTypeFields"(creditCard: any): void;
}
