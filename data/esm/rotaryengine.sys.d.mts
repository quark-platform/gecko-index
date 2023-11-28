export function RotaryRecord(collection: any, id: any): void;
export class RotaryRecord {
}
export function RotaryStore(name: any, engine: any): void;
export class RotaryStore {
    constructor(name: any, engine: any);
    items: {};
    create(record: any): Promise<void>;
    remove(record: any): Promise<void>;
    update(record: any): Promise<void>;
    itemExists(id: any): Promise<boolean>;
    createRecord(id: any, collection: any): Promise<RotaryRecord>;
    changeItemID(oldID: any, newID: any): Promise<void>;
    getAllIDs(): Promise<{}>;
    wipe(): Promise<void>;
}
export function RotaryTracker(name: any, engine: any): void;
export class RotaryTracker {
}
export function RotaryEngine(service: any): void;
export class RotaryEngine {
    constructor(service: any);
    toFetch: any;
    previousFailed: any;
    _storeObj: typeof RotaryStore;
    _trackerObj: typeof RotaryTracker;
    _recordObj: typeof RotaryRecord;
    _findDupe(item: any): Promise<string>;
}
