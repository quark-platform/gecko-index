export function XULStore(): void;
export class XULStore {
    classID: any;
    name: string;
    QueryInterface: any;
    _data: {};
    _storeFile: null;
    _needsSaving: boolean;
    _saveAllowed: boolean;
    _writeTimer: any;
    load(): void;
    observe(subject: any, topic: any, data: any): void;
    log(message: any): void;
    readFile(): void;
    writeFile(): Promise<void>;
    markAsChanged(): void;
    persist(node: any, attr: any): void;
    setValue(docURI: any, id: any, attr: any, value: any): void;
    hasValue(docURI: any, id: any, attr: any): boolean;
    getValue(docURI: any, id: any, attr: any): any;
    removeValue(docURI: any, id: any, attr: any): void;
    removeDocument(docURI: any): void;
    getIDsEnumerator(docURI: any): nsStringEnumerator;
    getAttributeEnumerator(docURI: any, id: any): nsStringEnumerator;
}
declare function nsStringEnumerator(items: any): void;
declare class nsStringEnumerator {
    constructor(items: any);
    _items: any;
    QueryInterface: any;
    _nextIndex: number;
    hasMore(): boolean;
    getNext(): any;
}
export {};
