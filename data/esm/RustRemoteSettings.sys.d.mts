export namespace UnitTestObjs {
    export { uniffiObjectPtr };
}
export class FfiConverterU64 extends FfiConverter {
    static computeSize(): number;
    static lift(value: any): any;
    static lower(value: any): any;
    static write(dataStream: any, value: any): void;
    static read(dataStream: any): any;
}
export class FfiConverterBool extends FfiConverter {
    static computeSize(): number;
    static lift(value: any): boolean;
    static lower(value: any): 0 | 1;
    static write(dataStream: any, value: any): void;
    static read(dataStream: any): boolean;
}
export class FfiConverterString extends FfiConverter {
    static lift(buf: any): string;
    static lower(value: any): ArrayBufferLike;
    static write(dataStream: any, value: any): void;
    static read(dataStream: any): any;
    static computeSize(value: any): number;
}
export class RemoteSettings {
    /**
     * A constructor for RemoteSettings.
     *
     * @returns { RemoteSettings }
     */
    static init(remoteSettingsConfig: any): RemoteSettings;
    constructor(opts: any);
    downloadAttachmentToPath(attachmentId: any, path: any): Promise<any>;
    getRecords(): Promise<any>;
    getRecordsSince(timestamp: any): Promise<any>;
    [uniffiObjectPtr]: any;
}
export class FfiConverterTypeRemoteSettings extends FfiConverter {
    static lift(value: any): RemoteSettings;
    static lower(value: any): any;
    static read(dataStream: any): RemoteSettings;
    static write(dataStream: any, value: any): void;
    static computeSize(value: any): number;
}
export class Attachment {
    constructor(filename: any, mimetype: any, location: any, hash: any, size: any);
    filename: any;
    mimetype: any;
    location: any;
    hash: any;
    size: any;
    equals(other: any): boolean;
}
export class FfiConverterTypeAttachment extends FfiConverterArrayBuffer {
    static read(dataStream: any): Attachment;
    static write(dataStream: any, value: any): void;
    static computeSize(value: any): number;
}
export class RemoteSettingsConfig {
    constructor(serverUrl: any, bucketName: any, collectionName: any);
    serverUrl: any;
    bucketName: any;
    collectionName: any;
    equals(other: any): boolean;
}
export class FfiConverterTypeRemoteSettingsConfig extends FfiConverterArrayBuffer {
    static read(dataStream: any): RemoteSettingsConfig;
    static write(dataStream: any, value: any): void;
    static computeSize(value: any): number;
}
export class RemoteSettingsRecord {
    constructor(id: any, lastModified: any, deleted: any, attachment: any, fields: any);
    id: any;
    lastModified: any;
    deleted: any;
    attachment: any;
    fields: any;
    equals(other: any): boolean;
}
export class FfiConverterTypeRemoteSettingsRecord extends FfiConverterArrayBuffer {
    static read(dataStream: any): RemoteSettingsRecord;
    static write(dataStream: any, value: any): void;
    static computeSize(value: any): number;
}
export class RemoteSettingsResponse {
    constructor(records: any, lastModified: any);
    records: any;
    lastModified: any;
    equals(other: any): boolean;
}
export class FfiConverterTypeRemoteSettingsResponse extends FfiConverterArrayBuffer {
    static read(dataStream: any): RemoteSettingsResponse;
    static write(dataStream: any, value: any): void;
    static computeSize(value: any): number;
}
export class RemoteSettingsError extends Error {
}
export class JsonError extends RemoteSettingsError {
    constructor(message: any, ...params: any[]);
    message: any;
}
export class FileError extends RemoteSettingsError {
    constructor(message: any, ...params: any[]);
    message: any;
}
export class RequestError extends RemoteSettingsError {
    constructor(message: any, ...params: any[]);
    message: any;
}
export class UrlParsingError extends RemoteSettingsError {
    constructor(message: any, ...params: any[]);
    message: any;
}
export class BackoffError extends RemoteSettingsError {
    constructor(message: any, ...params: any[]);
    message: any;
}
export class ResponseError extends RemoteSettingsError {
    constructor(message: any, ...params: any[]);
    message: any;
}
export class AttachmentsUnsupportedError extends RemoteSettingsError {
    constructor(message: any, ...params: any[]);
    message: any;
}
export class FfiConverterTypeRemoteSettingsError extends FfiConverterArrayBuffer {
    static read(dataStream: any): JsonError | FileError | RequestError | UrlParsingError | BackoffError | ResponseError | AttachmentsUnsupportedError;
    static computeSize(value: any): number;
    static write(dataStream: any, value: any): void;
    static errorClass: typeof RemoteSettingsError;
}
export class FfiConverterOptionalstring extends FfiConverterArrayBuffer {
    static read(dataStream: any): any;
    static write(dataStream: any, value: any): void;
    static computeSize(value: any): number;
}
export class FfiConverterOptionalTypeAttachment extends FfiConverterArrayBuffer {
    static read(dataStream: any): Attachment;
    static write(dataStream: any, value: any): void;
    static computeSize(value: any): number;
}
export class FfiConverterSequenceTypeRemoteSettingsRecord extends FfiConverterArrayBuffer {
    static read(dataStream: any): RemoteSettingsRecord[];
    static write(dataStream: any, value: any): void;
    static computeSize(value: any): number;
}
export class FfiConverterTypeRsJsonObject extends FfiConverter {
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
export {};
