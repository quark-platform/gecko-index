export function rawSuggestionUrlMatches(rawUrl: any, url: any): any;
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
export class SuggestStore {
    /**
     * A constructor for SuggestStore.
     *
     * @returns { SuggestStore }
     */
    static init(path: any, settingsConfig?: any): SuggestStore;
    constructor(opts: any);
    clear(): Promise<any>;
    ingest(constraints: any): Promise<any>;
    interrupt(): any;
    query(query: any): Promise<any>;
    [uniffiObjectPtr]: any;
}
export class FfiConverterTypeSuggestStore extends FfiConverter {
    static lift(value: any): SuggestStore;
    static lower(value: any): any;
    static read(dataStream: any): SuggestStore;
    static write(dataStream: any, value: any): void;
    static computeSize(value: any): number;
}
export class SuggestIngestionConstraints {
    constructor(maxSuggestions?: any);
    maxSuggestions: any;
    equals(other: any): boolean;
}
export class FfiConverterTypeSuggestIngestionConstraints extends FfiConverterArrayBuffer {
    static read(dataStream: any): SuggestIngestionConstraints;
    static write(dataStream: any, value: any): void;
    static computeSize(value: any): number;
}
export class SuggestionQuery {
    constructor(keyword: any, providers: any, limit?: any);
    keyword: any;
    providers: any;
    limit: any;
    equals(other: any): boolean;
}
export class FfiConverterTypeSuggestionQuery extends FfiConverterArrayBuffer {
    static read(dataStream: any): SuggestionQuery;
    static write(dataStream: any, value: any): void;
    static computeSize(value: any): number;
}
export class SuggestApiError extends Error {
}
export class Other extends SuggestApiError {
    constructor(reason: any, ...params: any[]);
    reason: any;
}
export class FfiConverterTypeSuggestApiError extends FfiConverterArrayBuffer {
    static read(dataStream: any): Other;
    static computeSize(value: any): number;
    static write(dataStream: any, value: any): void;
    static errorClass: typeof SuggestApiError;
}
export class Suggestion {
}
export namespace Suggestion {
    export { Amp };
    export { Pocket };
    export { Wikipedia };
    export { Amo };
}
export class FfiConverterTypeSuggestion extends FfiConverterArrayBuffer {
    static read(dataStream: any): Error | {
        title: any;
        url: any;
        rawUrl: any;
        icon: any;
        fullKeyword: any;
        blockId: any;
        advertiser: any;
        iabCategory: any;
        impressionUrl: any;
        clickUrl: any;
        rawClickUrl: any;
    } | {
        title: any;
        url: any;
        score: any;
        isTopPick: any;
    } | {
        title: any;
        url: any;
        icon: any;
        fullKeyword: any;
    } | {
        title: any;
        url: any;
        iconUrl: any;
        description: any;
        rating: any;
        numberOfRatings: any;
        guid: any;
        score: any;
    };
    static write(dataStream: any, value: any): Error;
    static computeSize(value: any): number | Error;
}
export namespace SuggestionProvider {
    let AMP: number;
    let POCKET: number;
    let WIKIPEDIA: number;
    let AMO: number;
}
export class FfiConverterTypeSuggestionProvider extends FfiConverterArrayBuffer {
    static read(dataStream: any): number | Error;
    static write(dataStream: any, value: any): Error;
    static computeSize(value: any): number;
}
export class FfiConverterOptionali32 extends FfiConverterArrayBuffer {
    static read(dataStream: any): any;
    static write(dataStream: any, value: any): void;
    static computeSize(value: any): number;
}
export class FfiConverterOptionalu64 extends FfiConverterArrayBuffer {
    static read(dataStream: any): any;
    static write(dataStream: any, value: any): void;
    static computeSize(value: any): number;
}
export class FfiConverterOptionalstring extends FfiConverterArrayBuffer {
    static read(dataStream: any): any;
    static write(dataStream: any, value: any): void;
    static computeSize(value: any): number;
}
export class FfiConverterOptionalSequenceu8 extends FfiConverterArrayBuffer {
    static read(dataStream: any): any[];
    static write(dataStream: any, value: any): void;
    static computeSize(value: any): number;
}
export class FfiConverterOptionalTypeRemoteSettingsConfig extends FfiConverterArrayBuffer {
    static read(dataStream: any): any;
    static write(dataStream: any, value: any): void;
    static computeSize(value: any): any;
}
export class FfiConverterSequenceu8 extends FfiConverterArrayBuffer {
    static read(dataStream: any): any[];
    static write(dataStream: any, value: any): void;
    static computeSize(value: any): number;
}
export class FfiConverterSequenceTypeSuggestion extends FfiConverterArrayBuffer {
    static read(dataStream: any): (Error | {
        title: any;
        url: any;
        rawUrl: any;
        icon: any;
        fullKeyword: any;
        blockId: any;
        advertiser: any;
        iabCategory: any;
        impressionUrl: any;
        clickUrl: any;
        rawClickUrl: any;
    } | {
        title: any;
        url: any;
        score: any;
        isTopPick: any;
    } | {
        title: any;
        url: any;
        icon: any;
        fullKeyword: any;
    } | {
        title: any;
        url: any;
        iconUrl: any;
        description: any;
        rating: any;
        numberOfRatings: any;
        guid: any;
        score: any;
    })[];
    static write(dataStream: any, value: any): void;
    static computeSize(value: any): number;
}
export class FfiConverterSequenceTypeSuggestionProvider extends FfiConverterArrayBuffer {
    static read(dataStream: any): (number | Error)[];
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
declare class Amp extends Suggestion {
    constructor(title: any, url: any, rawUrl: any, icon: any, fullKeyword: any, blockId: any, advertiser: any, iabCategory: any, impressionUrl: any, clickUrl: any, rawClickUrl: any);
    title: any;
    url: any;
    rawUrl: any;
    icon: any;
    fullKeyword: any;
    blockId: any;
    advertiser: any;
    iabCategory: any;
    impressionUrl: any;
    clickUrl: any;
    rawClickUrl: any;
}
declare class Pocket extends Suggestion {
    constructor(title: any, url: any, score: any, isTopPick: any);
    title: any;
    url: any;
    score: any;
    isTopPick: any;
}
declare class Wikipedia extends Suggestion {
    constructor(title: any, url: any, icon: any, fullKeyword: any);
    title: any;
    url: any;
    icon: any;
    fullKeyword: any;
}
declare class Amo extends Suggestion {
    constructor(title: any, url: any, iconUrl: any, description: any, rating: any, numberOfRatings: any, guid: any, score: any);
    title: any;
    url: any;
    iconUrl: any;
    description: any;
    rating: any;
    numberOfRatings: any;
    guid: any;
    score: any;
}
export { FfiConverterTypeRemoteSettingsConfig, RemoteSettingsConfig };
