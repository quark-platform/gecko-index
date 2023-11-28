export namespace UnitTestObjs {
    export { uniffiObjectPtr };
}
export class FfiConverterString extends FfiConverter {
    static lift(buf: any): string;
    static lower(value: any): ArrayBufferLike;
    static write(dataStream: any, value: any): void;
    static read(dataStream: any): any;
    static computeSize(value: any): number;
}
export namespace DeviceType {
    let DESKTOP: number;
    let MOBILE: number;
    let TABLET: number;
    let VR: number;
    let TV: number;
    let UNKNOWN: number;
}
export class FfiConverterTypeDeviceType extends FfiConverterArrayBuffer {
    static read(dataStream: any): number | Error;
    static write(dataStream: any, value: any): Error;
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
