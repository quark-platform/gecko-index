export function copieDictionnaire(d: any): Promise<any>;
export function copieEnumeration(e: any): Promise<any>;
export function copieEnumerations(e: any): Promise<any>;
export function copieCarte(c: any): Promise<any>;
export function switcheroo(b: any): Promise<any>;
export namespace UnitTestObjs {
    export { uniffiObjectPtr };
}
export class FfiConverterU8 extends FfiConverter {
    static computeSize(): number;
    static lift(value: any): any;
    static lower(value: any): any;
    static write(dataStream: any, value: any): void;
    static read(dataStream: any): any;
}
export class FfiConverterI8 extends FfiConverter {
    static computeSize(): number;
    static lift(value: any): any;
    static lower(value: any): any;
    static write(dataStream: any, value: any): void;
    static read(dataStream: any): any;
}
export class FfiConverterU16 extends FfiConverter {
    static computeSize(): number;
    static lift(value: any): any;
    static lower(value: any): any;
    static write(dataStream: any, value: any): void;
    static read(dataStream: any): any;
}
export class FfiConverterI16 extends FfiConverter {
    static computeSize(): number;
    static lift(value: any): any;
    static lower(value: any): any;
    static write(dataStream: any, value: any): void;
    static read(dataStream: any): any;
}
export class FfiConverterU32 extends FfiConverter {
    static computeSize(): number;
    static lift(value: any): any;
    static lower(value: any): any;
    static write(dataStream: any, value: any): void;
    static read(dataStream: any): any;
}
export class FfiConverterI32 extends FfiConverter {
    static computeSize(): number;
    static lift(value: any): any;
    static lower(value: any): any;
    static write(dataStream: any, value: any): void;
    static read(dataStream: any): any;
}
export class FfiConverterU64 extends FfiConverter {
    static computeSize(): number;
    static lift(value: any): any;
    static lower(value: any): any;
    static write(dataStream: any, value: any): void;
    static read(dataStream: any): any;
}
export class FfiConverterI64 extends FfiConverter {
    static computeSize(): number;
    static lift(value: any): any;
    static lower(value: any): any;
    static write(dataStream: any, value: any): void;
    static read(dataStream: any): any;
}
export class FfiConverterF32 extends FfiConverter {
    static computeSize(): number;
    static lift(value: any): any;
    static lower(value: any): any;
    static write(dataStream: any, value: any): void;
    static read(dataStream: any): any;
}
export class FfiConverterF64 extends FfiConverter {
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
export class Optionneur {
    /**
     * An async constructor for Optionneur.
     *
     * @returns {Promise<Optionneur>}: A promise that resolves
     *      to a newly constructed Optionneur
     */
    static init(): Promise<Optionneur>;
    constructor(opts: any);
    sinonBoolean(value?: boolean): Promise<any>;
    sinonString(value?: string): Promise<any>;
    sinonSequence(value?: any[]): Promise<any>;
    sinonNull(value?: any): Promise<any>;
    sinonZero(value?: number): Promise<any>;
    sinonU8Dec(value?: number): Promise<any>;
    sinonI8Dec(value?: number): Promise<any>;
    sinonU16Dec(value?: number): Promise<any>;
    sinonI16Dec(value?: number): Promise<any>;
    sinonU32Dec(value?: number): Promise<any>;
    sinonI32Dec(value?: number): Promise<any>;
    sinonU64Dec(value?: number): Promise<any>;
    sinonI64Dec(value?: number): Promise<any>;
    sinonU8Hex(value?: number): Promise<any>;
    sinonI8Hex(value?: number): Promise<any>;
    sinonU16Hex(value?: number): Promise<any>;
    sinonI16Hex(value?: number): Promise<any>;
    sinonU32Hex(value?: number): Promise<any>;
    sinonI32Hex(value?: number): Promise<any>;
    sinonU64Hex(value?: number): Promise<any>;
    sinonI64Hex(value?: number): Promise<any>;
    sinonU32Oct(value?: number): Promise<any>;
    sinonF32(value?: number): Promise<any>;
    sinonF64(value?: number): Promise<any>;
    sinonEnum(value?: number): Promise<any>;
    [uniffiObjectPtr]: any;
}
export class FfiConverterTypeOptionneur extends FfiConverter {
    static lift(value: any): Optionneur;
    static lower(value: any): any;
    static read(dataStream: any): Optionneur;
    static write(dataStream: any, value: any): void;
    static computeSize(value: any): number;
}
export class Retourneur {
    /**
     * An async constructor for Retourneur.
     *
     * @returns {Promise<Retourneur>}: A promise that resolves
     *      to a newly constructed Retourneur
     */
    static init(): Promise<Retourneur>;
    constructor(opts: any);
    identiqueI8(value: any): Promise<any>;
    identiqueU8(value: any): Promise<any>;
    identiqueI16(value: any): Promise<any>;
    identiqueU16(value: any): Promise<any>;
    identiqueI32(value: any): Promise<any>;
    identiqueU32(value: any): Promise<any>;
    identiqueI64(value: any): Promise<any>;
    identiqueU64(value: any): Promise<any>;
    identiqueFloat(value: any): Promise<any>;
    identiqueDouble(value: any): Promise<any>;
    identiqueBoolean(value: any): Promise<any>;
    identiqueString(value: any): Promise<any>;
    identiqueNombresSignes(value: any): Promise<any>;
    identiqueNombres(value: any): Promise<any>;
    identiqueOptionneurDictionnaire(value: any): Promise<any>;
    [uniffiObjectPtr]: any;
}
export class FfiConverterTypeRetourneur extends FfiConverter {
    static lift(value: any): Retourneur;
    static lower(value: any): any;
    static read(dataStream: any): Retourneur;
    static write(dataStream: any, value: any): void;
    static computeSize(value: any): number;
}
export class Stringifier {
    /**
     * An async constructor for Stringifier.
     *
     * @returns {Promise<Stringifier>}: A promise that resolves
     *      to a newly constructed Stringifier
     */
    static init(): Promise<Stringifier>;
    constructor(opts: any);
    wellKnownString(value: any): Promise<any>;
    toStringI8(value: any): Promise<any>;
    toStringU8(value: any): Promise<any>;
    toStringI16(value: any): Promise<any>;
    toStringU16(value: any): Promise<any>;
    toStringI32(value: any): Promise<any>;
    toStringU32(value: any): Promise<any>;
    toStringI64(value: any): Promise<any>;
    toStringU64(value: any): Promise<any>;
    toStringFloat(value: any): Promise<any>;
    toStringDouble(value: any): Promise<any>;
    toStringBoolean(value: any): Promise<any>;
    [uniffiObjectPtr]: any;
}
export class FfiConverterTypeStringifier extends FfiConverter {
    static lift(value: any): Stringifier;
    static lower(value: any): any;
    static read(dataStream: any): Stringifier;
    static write(dataStream: any, value: any): void;
    static computeSize(value: any): number;
}
export class Dictionnaire {
    constructor(un: any, deux: any, petitNombre: any, grosNombre: any);
    un: any;
    deux: any;
    petitNombre: any;
    grosNombre: any;
    equals(other: any): boolean;
}
export class FfiConverterTypeDictionnaire extends FfiConverterArrayBuffer {
    static read(dataStream: any): Dictionnaire;
    static write(dataStream: any, value: any): void;
    static computeSize(value: any): number;
}
export class DictionnaireNombres {
    constructor(petitNombre: any, courtNombre: any, nombreSimple: any, grosNombre: any);
    petitNombre: any;
    courtNombre: any;
    nombreSimple: any;
    grosNombre: any;
    equals(other: any): boolean;
}
export class FfiConverterTypeDictionnaireNombres extends FfiConverterArrayBuffer {
    static read(dataStream: any): DictionnaireNombres;
    static write(dataStream: any, value: any): void;
    static computeSize(value: any): number;
}
export class DictionnaireNombresSignes {
    constructor(petitNombre: any, courtNombre: any, nombreSimple: any, grosNombre: any);
    petitNombre: any;
    courtNombre: any;
    nombreSimple: any;
    grosNombre: any;
    equals(other: any): boolean;
}
export class FfiConverterTypeDictionnaireNombresSignes extends FfiConverterArrayBuffer {
    static read(dataStream: any): DictionnaireNombresSignes;
    static write(dataStream: any, value: any): void;
    static computeSize(value: any): number;
}
export class OptionneurDictionnaire {
    constructor(i8Var?: number, u8Var?: number, i16Var?: number, u16Var?: number, i32Var?: number, u32Var?: number, i64Var?: number, u64Var?: number, floatVar?: number, doubleVar?: number, booleanVar?: boolean, stringVar?: string, listVar?: any[], enumerationVar?: number, dictionnaireVar?: any);
    i8Var: number;
    u8Var: number;
    i16Var: number;
    u16Var: number;
    i32Var: number;
    u32Var: number;
    i64Var: number;
    u64Var: number;
    floatVar: number;
    doubleVar: number;
    booleanVar: boolean;
    stringVar: string;
    listVar: any[];
    enumerationVar: number;
    dictionnaireVar: any;
    equals(other: any): boolean;
}
export class FfiConverterTypeOptionneurDictionnaire extends FfiConverterArrayBuffer {
    static read(dataStream: any): OptionneurDictionnaire;
    static write(dataStream: any, value: any): void;
    static computeSize(value: any): number;
}
export class MinusculeMajusculeDict {
    constructor(minusculeMajusculeField: any);
    minusculeMajusculeField: any;
    equals(other: any): boolean;
}
export class FfiConverterTypeminusculeMajusculeDict extends FfiConverterArrayBuffer {
    static read(dataStream: any): MinusculeMajusculeDict;
    static write(dataStream: any, value: any): void;
    static computeSize(value: any): number;
}
export namespace Enumeration {
    let UN: number;
    let DEUX: number;
    let TROIS: number;
}
export class FfiConverterTypeEnumeration extends FfiConverterArrayBuffer {
    static read(dataStream: any): number | Error;
    static write(dataStream: any, value: any): Error;
    static computeSize(value: any): number;
}
export class EnumerationAvecDonnees {
}
export namespace EnumerationAvecDonnees {
    export { Zero };
    export { Un };
    export { Deux };
}
export class FfiConverterTypeEnumerationAvecDonnees extends FfiConverterArrayBuffer {
    static read(dataStream: any): {} | {
        premier: any;
    } | {
        premier: any;
        second: any;
    };
    static write(dataStream: any, value: any): Error;
    static computeSize(value: any): number | Error;
}
export namespace MinusculeMajusculeEnum {
    let MINUSCULE_MAJUSCULE_VARIANT: number;
}
export class FfiConverterTypeminusculeMajusculeEnum extends FfiConverterArrayBuffer {
    static read(dataStream: any): number | Error;
    static write(dataStream: any, value: any): Error;
    static computeSize(value: any): number;
}
export class FfiConverterOptionali32 extends FfiConverterArrayBuffer {
    static read(dataStream: any): any;
    static write(dataStream: any, value: any): void;
    static computeSize(value: any): number;
}
export class FfiConverterOptionalstring extends FfiConverterArrayBuffer {
    static read(dataStream: any): any;
    static write(dataStream: any, value: any): void;
    static computeSize(value: any): number;
}
export class FfiConverterOptionalTypeminusculeMajusculeEnum extends FfiConverterArrayBuffer {
    static read(dataStream: any): number | Error;
    static write(dataStream: any, value: any): void;
    static computeSize(value: any): number;
}
export class FfiConverterSequencestring extends FfiConverterArrayBuffer {
    static read(dataStream: any): any[];
    static write(dataStream: any, value: any): void;
    static computeSize(value: any): number;
}
export class FfiConverterSequenceTypeEnumeration extends FfiConverterArrayBuffer {
    static read(dataStream: any): (number | Error)[];
    static write(dataStream: any, value: any): void;
    static computeSize(value: any): number;
}
export class FfiConverterMapStringTypeEnumerationAvecDonnees extends FfiConverterArrayBuffer {
    static read(dataStream: any): {};
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
declare class Zero extends EnumerationAvecDonnees {
}
declare class Un extends EnumerationAvecDonnees {
    constructor(premier: any);
    premier: any;
}
declare class Deux extends EnumerationAvecDonnees {
    constructor(premier: any, second: any);
    premier: any;
    second: any;
}
export {};
