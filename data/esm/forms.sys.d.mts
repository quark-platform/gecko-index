export function FormRec(collection: any, id: any): void;
export class FormRec {
    constructor(collection: any, id: any);
    _logName: string;
    ttl: number;
}
export function FormEngine(service: any): void;
export class FormEngine {
    constructor(service: any);
    _storeObj: typeof FormStore;
    _trackerObj: typeof FormTracker;
    _recordObj: typeof FormRec;
    syncPriority: number;
    get prefName(): string;
    _findDupe(item: any): Promise<any>;
}
export class FormValidator {
    ignoresMissingClients: boolean;
    emptyProblemData(): FormsProblemData;
    getClientItems(): Promise<any>;
    normalizeClientItem(item: any): {
        id: any;
        guid: any;
        name: any;
        fieldname: any;
        value: any;
        original: any;
    };
    normalizeServerItem(item: any): Promise<any>;
}
declare function FormStore(name: any, engine: any): void;
declare class FormStore {
    constructor(name: any, engine: any);
    _processChange(change: any): Promise<void>;
    applyIncomingBatch(records: any, countTelemetry: any): Promise<any>;
    _changes: any[];
    getAllIDs(): Promise<{}>;
    changeItemID(oldID: any, newID: any): Promise<void>;
    itemExists(id: any): Promise<boolean>;
    createRecord(id: any, collection: any): Promise<FormRec>;
    create(record: any): Promise<void>;
    remove(record: any): Promise<void>;
    update(record: any): Promise<void>;
    wipe(): Promise<void>;
}
declare function FormTracker(name: any, engine: any): void;
declare class FormTracker {
    constructor(name: any, engine: any);
    QueryInterface: any;
    onStart(): void;
    onStop(): void;
    observe(subject: any, topic: any, data: any): Promise<void>;
    trackEntry(guid: any): Promise<void>;
}
declare class FormsProblemData {
    getSummary(): any;
}
export {};
