export namespace SessionStartup {
    export { TYPE_NO_SESSION as NO_SESSION };
    export { TYPE_RECOVER_SESSION as RECOVER_SESSION };
    export { TYPE_RESUME_SESSION as RESUME_SESSION };
    export { TYPE_DEFER_SESSION as DEFER_SESSION };
    export let _initialState: any;
    export let _sessionType: any;
    export let _initialized: boolean;
    export let _previousSessionCrashed: any;
    export let _resumeSessionEnabled: any;
    /**
     * Initialize the component
     */
    export function init(): void;
    export function _createSupportsString(data: any): any;
    /**
     * Complete initialization once the Session File has been read.
     *
     * @param source The Session State string read from disk.
     * @param parsed The object obtained by parsing |source| as JSON.
     */
    export function _onSessionFileRead({ source, parsed, noFilesFound }: {
        source: any;
        parsed: any;
        noFilesFound: any;
    }): void;
    /**
     * Handle notifications
     */
    export function observe(subject: any, topic: any, data: any): void;
    export const onceInitialized: Promise<any>;
    export const state: any;
    /**
     * Determines whether automatic session restoration is enabled for this
     * launch of the browser. This does not include crash restoration. In
     * particular, if session restore is configured to restore only in case of
     * crash, this method returns false.
     * @returns bool
     */
    export function isAutomaticRestoreEnabled(): any;
    /**
     * Determines whether there is a pending session restore.
     * @returns bool
     */
    export function willRestore(): boolean;
    /**
     * Determines whether there is a pending session restore and if that will refer
     * back to a crash.
     * @returns bool
     */
    export function willRestoreAsCrashed(): boolean;
    export const willOverrideHomepage: false | Promise<any>;
    export const sessionType: any;
    export const previousSessionCrashed: any;
    export function resetForTest(): void;
    export let QueryInterface: any;
}
declare const TYPE_NO_SESSION: 0;
declare const TYPE_RECOVER_SESSION: 1;
declare const TYPE_RESUME_SESSION: 2;
declare const TYPE_DEFER_SESSION: 3;
export {};
