export namespace CrashSubmit {
    export let SUBMITTED_FROM_AUTO: string;
    export let SUBMITTED_FROM_INFOBAR: string;
    export let SUBMITTED_FROM_ABOUT_CRASHES: string;
    export let SUBMITTED_FROM_CRASH_TAB: string;
    export function submit(id: any, submittedFrom: any, params: any): Promise<any>;
    export function _delete(id: any): Promise<void>;
    export { _delete as delete };
    export function ignore(id: any): Promise<void>;
    export function pendingIDs(minFileDate: any): Promise<any[]>;
    export function pruneSavedDumps(): Promise<any[]>;
    export let _activeSubmissions: any[];
}
