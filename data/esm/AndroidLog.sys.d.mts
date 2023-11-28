export namespace AndroidLog {
    export { MAX_TAG_LENGTH };
    export function v(tag: any, msg: any): any;
    export function d(tag: any, msg: any): any;
    export function i(tag: any, msg: any): any;
    export function w(tag: any, msg: any): any;
    export function e(tag: any, msg: any): any;
    export function bind(tag: any): {
        MAX_TAG_LENGTH: number;
        v: any;
        d: any;
        i: any;
        w: any;
        e: any;
    };
}
declare const MAX_TAG_LENGTH: 18;
export {};
