export class AsyncPrefsChild {
    set(pref: any, value: any): any;
    reset(pref: any): any;
}
export namespace AsyncPrefs {
    function set(pref: any, value: any): any;
    function reset(pref: any, value: any): any;
}
export class AsyncPrefsParent {
    static set(pref: any, value: any): Promise<any>;
    static reset(pref: any): Promise<void>;
    receiveMessage(msg: any): Promise<any>;
}
