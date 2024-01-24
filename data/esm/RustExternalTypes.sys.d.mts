export function gradient(value: any): Promise<any>;
export function intersection(ln1: any, ln2: any): Promise<any>;
export namespace UnitTestObjs {
    export { uniffiObjectPtr };
}
export class FfiConverterF64 extends FfiConverter {
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
export class FfiConverterOptionalTypeLine extends FfiConverterArrayBuffer {
    static read(dataStream: any): any;
    static write(dataStream: any, value: any): void;
    static computeSize(value: any): any;
}
export class FfiConverterOptionalTypePoint extends FfiConverterArrayBuffer {
    static read(dataStream: any): any;
    static write(dataStream: any, value: any): void;
    static computeSize(value: any): any;
}
declare const uniffiObjectPtr: unique symbol;
declare class FfiConverter {
    static checkType(value: any): void;
}
declare class FfiConverterArrayBuffer extends FfiConverter {
    static lift(buf: any): any;
    static lower(value: any): ArrayBuffer;
}
export { FfiConverterTypeLine, Line, FfiConverterTypePoint, Point };
