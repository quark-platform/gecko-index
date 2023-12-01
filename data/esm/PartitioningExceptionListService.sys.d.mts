export function PartitioningExceptionListService(): void;
export class PartitioningExceptionListService {
    classID: unknown;
    QueryInterface: MozQueryInterface;
    _initialized: boolean;
    lazyInit(): Promise<void>;
    feature: Feature;
    onUpdateEntries(entries: any): void;
    registerAndRunExceptionListObserver(observer: any): void;
    unregisterExceptionListObserver(observer: any): void;
}
declare class Feature {
    prefName: string;
    observers: Set<any>;
    prefValue: any[];
    remoteEntries: any[];
    addAndRunObserver(observer: any): Promise<void>;
    removeObserver(observer: any): void;
    observe(subject: any, topic: any, data: any): void;
    onRemoteSettingsUpdate(entries: any): void;
    notifyObservers(observer?: any): void;
}
export {};
