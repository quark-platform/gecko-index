export class FormAutofillStorage {
    constructor(path: any);
    getAddresses(): Addresses;
    _addresses: Addresses;
    getCreditCards(): CreditCards;
    _creditCards: CreditCards;
    /**
     * Loads the profile data from file to memory.
     *
     * @returns {JSONFile}
     *          The JSONFile store.
     */
    _initializeStore(): JSONFile;
    _dataPostProcessor(data: any): any;
}
export const formAutofillStorage: FormAutofillStorage;
declare class Addresses {
}
declare class CreditCards {
    constructor(store: any);
    _encryptNumber(creditCard: any): Promise<void>;
}
export {};
