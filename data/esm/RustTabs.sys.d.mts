export namespace UnitTestObjs {
    export { uniffiObjectPtr };
}
export class FfiConverterI64 extends FfiConverter {
    static computeSize(): number;
    static lift(value: any): any;
    static lower(value: any): any;
    static write(dataStream: any, value: any): void;
    static read(dataStream: any): any;
}
export class FfiConverterString extends FfiConverter {
    static lift(buf: any): string;
    static lower(value: any): ArrayBufferLike;
    static write(dataStream: any, value: any): void;
    static read(dataStream: any): any;
    static computeSize(value: any): number;
}
export class TabsBridgedEngine {
    constructor(opts: any);
    lastSync(): Promise<any>;
    setLastSync(lastSync: any): Promise<any>;
    syncId(): Promise<any>;
    resetSyncId(): Promise<any>;
    ensureCurrentSyncId(newSyncId: any): Promise<any>;
    prepareForSync(clientData: any): Promise<any>;
    syncStarted(): Promise<any>;
    storeIncoming(incomingEnvelopesAsJson: any): Promise<any>;
    apply(): Promise<any>;
    setUploaded(newTimestamp: any, uploadedIds: any): Promise<any>;
    syncFinished(): Promise<any>;
    reset(): Promise<any>;
    wipe(): Promise<any>;
    [uniffiObjectPtr]: any;
}
export class FfiConverterTypeTabsBridgedEngine extends FfiConverter {
    static lift(value: any): TabsBridgedEngine;
    static lower(value: any): any;
    static read(dataStream: any): TabsBridgedEngine;
    static write(dataStream: any, value: any): void;
    static computeSize(value: any): number;
}
export class TabsStore {
    /**
     * An async constructor for TabsStore.
     *
     * @returns {Promise<TabsStore>}: A promise that resolves
     *      to a newly constructed TabsStore
     */
    static init(path: any): Promise<TabsStore>;
    constructor(opts: any);
    getAll(): Promise<any>;
    setLocalTabs(remoteTabs: any): Promise<any>;
    registerWithSyncManager(): Promise<any>;
    bridgedEngine(): Promise<any>;
    [uniffiObjectPtr]: any;
}
export class FfiConverterTypeTabsStore extends FfiConverter {
    static lift(value: any): TabsStore;
    static lower(value: any): any;
    static read(dataStream: any): TabsStore;
    static write(dataStream: any, value: any): void;
    static computeSize(value: any): number;
}
export class ClientRemoteTabs {
    constructor(clientId: any, clientName: any, deviceType: any, lastModified: any, remoteTabs: any);
    clientId: any;
    clientName: any;
    deviceType: any;
    lastModified: any;
    remoteTabs: any;
    equals(other: any): boolean;
}
export class FfiConverterTypeClientRemoteTabs extends FfiConverterArrayBuffer {
    static read(dataStream: any): ClientRemoteTabs;
    static write(dataStream: any, value: any): void;
    static computeSize(value: any): number;
}
export class RemoteTabRecord {
    constructor(title: any, urlHistory: any, icon: any, lastUsed: any);
    title: any;
    urlHistory: any;
    icon: any;
    lastUsed: any;
    equals(other: any): boolean;
}
export class FfiConverterTypeRemoteTabRecord extends FfiConverterArrayBuffer {
    static read(dataStream: any): RemoteTabRecord;
    static write(dataStream: any, value: any): void;
    static computeSize(value: any): number;
}
export class TabsApiError extends Error {
}
export class SyncError extends TabsApiError {
    constructor(reason: any, ...params: any[]);
    reason: any;
}
export class SqlError extends TabsApiError {
    constructor(reason: any, ...params: any[]);
    reason: any;
}
export class UnexpectedTabsError extends TabsApiError {
    constructor(reason: any, ...params: any[]);
    reason: any;
}
export class FfiConverterTypeTabsApiError extends FfiConverterArrayBuffer {
    static read(dataStream: any): SyncError | SqlError | UnexpectedTabsError;
    static computeSize(value: any): number;
    static write(dataStream: any, value: any): void;
    static errorClass: typeof TabsApiError;
}
export class FfiConverterOptionalstring extends FfiConverterArrayBuffer {
    static read(dataStream: any): any;
    static write(dataStream: any, value: any): void;
    static computeSize(value: any): number;
}
export class FfiConverterSequencestring extends FfiConverterArrayBuffer {
    static read(dataStream: any): any[];
    static write(dataStream: any, value: any): void;
    static computeSize(value: any): number;
}
export class FfiConverterSequenceTypeClientRemoteTabs extends FfiConverterArrayBuffer {
    static read(dataStream: any): ClientRemoteTabs[];
    static write(dataStream: any, value: any): void;
    static computeSize(value: any): number;
}
export class FfiConverterSequenceTypeRemoteTabRecord extends FfiConverterArrayBuffer {
    static read(dataStream: any): RemoteTabRecord[];
    static write(dataStream: any, value: any): void;
    static computeSize(value: any): number;
}
export class FfiConverterSequenceTypeTabsGuid extends FfiConverterArrayBuffer {
    static read(dataStream: any): any[];
    static write(dataStream: any, value: any): void;
    static computeSize(value: any): number;
}
export class FfiConverterTypeTabsGuid extends FfiConverter {
    static lift(buf: any): string;
    static lower(buf: any): ArrayBufferLike;
    static write(dataStream: any, value: any): void;
    static read(buf: any): any;
    static computeSize(value: any): number;
}
declare const uniffiObjectPtr: unique symbol;
declare class FfiConverter {
    static checkType(value: any): void;
}
declare class FfiConverterArrayBuffer extends FfiConverter {
    static lift(buf: any): any;
    static lower(value: any): ArrayBuffer;
}
export { FfiConverterTypeDeviceType, DeviceType };
