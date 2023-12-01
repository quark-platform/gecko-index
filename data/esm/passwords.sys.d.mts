export function LoginRec(collection: any, id: any): void;
export class LoginRec {
    constructor(collection: any, id: any);
    _logName: string;
    cleartextToString(): string;
}
export function PasswordEngine(service: any): void;
export class PasswordEngine {
    constructor(service: any);
    _storeObj: typeof PasswordStore;
    _trackerObj: typeof PasswordTracker;
    _recordObj: typeof LoginRec;
    syncPriority: number;
    emptyChangeset(): PasswordsChangeset;
    ensureCurrentSyncID(newSyncID: any): Promise<any>;
    getLastSync(): Promise<any>;
    setLastSync(timestamp: any): Promise<void>;
    markSynced(guid: any): Promise<void>;
    pullAllChanges(): Promise<{}>;
    getChangedIDs(): Promise<{}>;
    _getChangedIDs(getAll: any): Promise<{}>;
    trackRemainingChanges(): Promise<void>;
    _findDupe(item: any): Promise<any>;
    _deleteId(id: any): void;
    getValidator(): PasswordValidator;
}
export class PasswordValidator {
    getClientItems(): Promise<any>;
    normalizeClientItem(item: any): {
        id: any;
        guid: any;
        hostname: any;
        formSubmitURL: any;
        httpRealm: any;
        password: any;
        passwordField: any;
        username: any;
        usernameField: any;
        original: any;
    };
    normalizeServerItem(item: any): Promise<any>;
}
export class PasswordsChangeset {
    getModifiedTimestamp(id: any): any;
    has(id: any): boolean;
    delete(id: any): void;
}
declare function PasswordStore(name: any, engine: any): void;
declare class PasswordStore {
    constructor(name: any, engine: any);
    _nsLoginInfo: any;
    storage: any;
    _newPropertyBag(): any;
    _processUnknownFields(record: any): string;
    /**
     * Return an instance of nsILoginInfo (and, implicitly, nsILoginMetaInfo).
     */
    _nsLoginInfoFromRecord(record: any): any;
    _getLoginFromGUID(guid: any): Promise<any>;
    applyIncoming(record: any): Promise<void>;
    getAllIDs(): Promise<{}>;
    changeItemID(oldID: any, newID: any): Promise<void>;
    itemExists(id: any): Promise<boolean>;
    createRecord(id: any, collection: any): Promise<LoginRec>;
    create(record: any): Promise<void>;
    remove(record: any, { sourceSync }?: {
        sourceSync?: boolean;
    }): Promise<void>;
    update(record: any): Promise<void>;
    wipe(): Promise<void>;
}
declare function PasswordTracker(name: any, engine: any): void;
declare class PasswordTracker {
    constructor(name: any, engine: any);
    onStart(): void;
    onStop(): void;
    observe(subject: any, topic: any, data: any): Promise<void>;
}
export {};
