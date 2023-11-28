export function sanitizeStorageObject(ob: any): {};
export function AutofillRecord(collection: any, id: any): void;
export class AutofillRecord {
    constructor(collection: any, id: any);
    toEntry(): any;
    fromEntry(entry: any): void;
    id: any;
    entry: any;
    cleartextToString(): string;
}
export function AddressesEngine(service: any): void;
export class AddressesEngine {
    constructor(service: any);
    _trackerObj: typeof FormAutofillTracker;
    _storeObj: typeof AddressesStore;
    _recordObj: typeof AddressesRecord;
    get prefName(): string;
}
export function CreditCardsEngine(service: any): void;
export class CreditCardsEngine {
    constructor(service: any);
    _trackerObj: typeof FormAutofillTracker;
    _storeObj: typeof CreditCardsStore;
    _recordObj: typeof CreditCardsRecord;
    get prefName(): string;
}
declare function FormAutofillTracker(name: any, engine: any): void;
declare class FormAutofillTracker {
    constructor(name: any, engine: any);
    observe(subject: any, topic: any, data: any): Promise<void>;
    onStart(): void;
    onStop(): void;
}
declare function AddressesStore(name: any, engine: any): void;
declare class AddressesStore {
    constructor(name: any, engine: any);
    _subStorageName: string;
}
declare function AddressesRecord(collection: any, id: any): void;
declare class AddressesRecord {
    constructor(collection: any, id: any);
    _logName: string;
}
declare function CreditCardsStore(name: any, engine: any): void;
declare class CreditCardsStore {
    constructor(name: any, engine: any);
    _subStorageName: string;
}
declare function CreditCardsRecord(collection: any, id: any): void;
declare class CreditCardsRecord {
    constructor(collection: any, id: any);
    _logName: string;
}
export {};
