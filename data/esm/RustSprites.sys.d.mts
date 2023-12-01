export function translate(position: any, direction: any): Promise<any>;
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
export class Sprite {
    /**
     * An async constructor for Sprite.
     *
     * @returns {Promise<Sprite>}: A promise that resolves
     *      to a newly constructed Sprite
     */
    static init(initialPosition: any): Promise<Sprite>;
    /**
     * An async constructor for Sprite.
     *
     * @returns {Promise<Sprite>}: A promise that resolves
     *      to a newly constructed Sprite
     */
    static newRelativeTo(reference: any, direction: any): Promise<Sprite>;
    constructor(opts: any);
    getPosition(): Promise<any>;
    moveTo(position: any): Promise<any>;
    moveBy(direction: any): Promise<any>;
    [uniffiObjectPtr]: any;
}
export class FfiConverterTypeSprite extends FfiConverter {
    static lift(value: any): Sprite;
    static lower(value: any): any;
    static read(dataStream: any): Sprite;
    static write(dataStream: any, value: any): void;
    static computeSize(value: any): number;
}
export class Point {
    constructor(x: any, y: any);
    x: any;
    y: any;
    equals(other: any): boolean;
}
export class FfiConverterTypePoint extends FfiConverterArrayBuffer {
    static read(dataStream: any): Point;
    static write(dataStream: any, value: any): void;
    static computeSize(value: any): number;
}
export class Vector {
    constructor(dx: any, dy: any);
    dx: any;
    dy: any;
    equals(other: any): boolean;
}
export class FfiConverterTypeVector extends FfiConverterArrayBuffer {
    static read(dataStream: any): Vector;
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
