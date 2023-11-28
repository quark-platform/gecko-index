export namespace AboutNewTab {
    export let QueryInterface: any;
    export let initialized: boolean;
    export let willNotifyUser: boolean;
    export let _activityStreamEnabled: boolean;
    export let activityStream: any;
    export let activityStreamDebug: boolean;
    export let _cachedTopSites: any;
    export { ABOUT_URL as _newTabURL };
    export let _newTabURLOverridden: boolean;
    /**
     * init - Initializes an instance of Activity Stream if one doesn't exist already.
     */
    export function init(): void;
    /**
     * React to changes to the activity stream being enabled or not.
     *
     * This will only act if there is a change of state and if not overridden.
     *
     * @returns {Boolean} Returns if there has been a state change
     *
     * @param {Boolean}   stateEnabled    activity stream enabled state to set to
     * @param {Boolean}   forceState      force state change
     */
    export function toggleActivityStream(stateEnabled: boolean, forceState?: boolean): boolean;
    export let newTabURL: string;
    export const newTabURLOverridden: boolean;
    export const activityStreamEnabled: boolean;
    export function resetNewTabURL(): void;
    export function notifyChange(): void;
    /**
     * onBrowserReady - Continues the initialization of Activity Stream after browser is ready.
     */
    export function onBrowserReady(): void;
    export function _subscribeToActivityStream(): void;
    /**
     * uninit - Uninitializes Activity Stream if it exists.
     */
    export function uninit(): void;
    export function getTopSites(): any;
    export let _alreadyRecordedTopsitesPainted: boolean;
    export let _nonDefaultStartup: boolean;
    export function noteNonDefaultStartup(): void;
    export function maybeRecordTopsitesPainted(timestamp: any): void;
    export function observe(subject: any, topic: any, data: any): void;
}
declare const ABOUT_URL: "about:newtab";
export {};
