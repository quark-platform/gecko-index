export function getCustomTypesDemo(demo: any): Promise<any>;
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
export class CustomTypesDemo {
    constructor(url: any, handle: any);
    url: any;
    handle: any;
    equals(other: any): boolean;
}
export class FfiConverterTypeCustomTypesDemo extends FfiConverterArrayBuffer {
    static read(dataStream: any): CustomTypesDemo;
    static write(dataStream: any, value: any): void;
    static computeSize(value: any): number;
}
export class FfiConverterOptionalTypeCustomTypesDemo extends FfiConverterArrayBuffer {
    static read(dataStream: any): CustomTypesDemo;
    static write(dataStream: any, value: any): void;
    static computeSize(value: any): number;
}
export class FfiConverterTypeHandle extends FfiConverter {
    static lift(buf: any): any;
    static lower(buf: any): any;
    static write(dataStream: any, value: any): void;
    static read(buf: any): any;
    static computeSize(value: any): number;
}
export class FfiConverterTypeUrl extends FfiConverter {
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
