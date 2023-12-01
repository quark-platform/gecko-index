export function add(a: any, b: any): Promise<any>;
export function sub(a: any, b: any): Promise<any>;
export function div(dividend: any, divisor: any): Promise<any>;
export function equal(a: any, b: any): Promise<any>;
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
export class ArithmeticError extends Error {
}
export class IntegerOverflow extends ArithmeticError {
    constructor(message: any, ...params: any[]);
    message: any;
}
export class FfiConverterTypeArithmeticError extends FfiConverterArrayBuffer {
    static read(dataStream: any): IntegerOverflow;
    static computeSize(value: any): number;
    static write(dataStream: any, value: any): void;
    static errorClass: typeof ArithmeticError;
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
