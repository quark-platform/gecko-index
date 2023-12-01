export function gradient(ln: any): Promise<any>;
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
export class Line {
    constructor(start: any, end: any);
    start: any;
    end: any;
    equals(other: any): any;
}
export class FfiConverterTypeLine extends FfiConverterArrayBuffer {
    static read(dataStream: any): Line;
    static write(dataStream: any, value: any): void;
    static computeSize(value: any): number;
}
export class Point {
    constructor(coordX: any, coordY: any);
    coordX: any;
    coordY: any;
    equals(other: any): boolean;
}
export class FfiConverterTypePoint extends FfiConverterArrayBuffer {
    static read(dataStream: any): Point;
    static write(dataStream: any, value: any): void;
    static computeSize(value: any): number;
}
export class FfiConverterOptionalTypePoint extends FfiConverterArrayBuffer {
    static read(dataStream: any): Point;
    static write(dataStream: any, value: any): void;
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
