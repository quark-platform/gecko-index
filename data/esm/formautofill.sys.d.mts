export function DumpAddresses(): Promise<void>;
export function DumpCreditCards(): Promise<void>;
export class Address extends FormAutofillBase {
    constructor(props: any);
}
export class CreditCard extends FormAutofillBase {
    constructor(props: any);
}
declare class FormAutofillBase {
    constructor(props: any, subStorageName: any, fields: any);
    _subStorageName: any;
    _fields: any;
    props: {};
    updateProps: any;
    getStorage(): Promise<any>;
    Create(): Promise<void>;
    Find(): Promise<any>;
    Update(): Promise<void>;
    Remove(): Promise<void>;
}
export {};
