export namespace Match {
    export { Pattern };
    export { MatchError };
}
declare function Pattern(template: any): Pattern;
declare namespace Pattern {
    let ANY: Pattern;
    let NUMBER: Pattern;
    let NATURAL: Pattern;
}
declare class Pattern {
    constructor(template: any);
    template: any;
    match(act: any): any;
    matches(act: any): any;
    assert(act: any, message: any): any;
    toString: () => string;
}
declare function MatchError(msg: any): void;
declare class MatchError {
    constructor(msg: any);
    message: any;
    toString(): string;
}
export {};
