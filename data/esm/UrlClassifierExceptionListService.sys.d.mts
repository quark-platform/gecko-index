export function UrlClassifierExceptionListService(): void;
export class UrlClassifierExceptionListService {
    classID: any;
    QueryInterface: any;
    features: {};
    _initialized: boolean;
    lazyInit(): Promise<void>;
    entries: any;
    onUpdateEntries(entries: any): void;
    registerAndRunExceptionListObserver(feature: any, prefName: any, observer: any): void;
    unregisterExceptionListObserver(feature: any, observer: any): void;
    clear(): void;
}
