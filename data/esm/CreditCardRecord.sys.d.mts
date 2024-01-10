/**
 * The CreditCardRecord class serves to handle and normalize internal credit card records.
 * Unlike the CreditCard class, which represents actual card data, CreditCardRecord is used
 * for processing and consistent data representation.
 */
export class CreditCardRecord {
    static normalizeFields(creditCard: any): void;
    static "__#1534100@#normalizeCCNameFields"(creditCard: any): void;
    static "__#1534100@#normalizeCCNumberFields"(creditCard: any): void;
    static "__#1534100@#normalizeCCExpirationDateFields"(creditCard: any): void;
    static "__#1534100@#normalizeCCTypeFields"(creditCard: any): void;
}
