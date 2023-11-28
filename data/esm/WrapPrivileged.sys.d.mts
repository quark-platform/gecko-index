export namespace WrapPrivileged {
    export { wrapIfUnwrapped as wrap };
    export { unwrapIfWrapped as unwrap };
    export { isWrapper };
    export { wrapCallback };
    export { wrapCallbackObject };
    export { disableAutoWrap };
}
declare function wrapIfUnwrapped(x: any, w: any): any;
declare function unwrapIfWrapped(x: any): any;
declare function isWrapper(x: any): boolean;
declare function wrapCallback(cb: any, win: any): any;
declare function wrapCallbackObject(obj: any, win: any): any;
declare function disableAutoWrap(...objs: any[]): void;
export {};
