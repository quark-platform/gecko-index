export type UIState = {
    /**
     * The Sync/FxA status, see STATUS_* constants.
     */
    status: string;
    /**
     * The FxA email configured to log-in with Sync.
     */
    email?: string;
    /**
     * The user's FxA display name.
     */
    displayName?: string;
    /**
     * The user's FxA avatar URL.
     */
    avatarURL?: string;
    /**
     * The last sync time.
     */
    lastSync?: Date;
    /**
     * Whether or not we are currently syncing.
     */
    syncing?: boolean;
};
export namespace UIState {
    export { UIStateInternal as _internal };
    export { ON_UPDATE };
    export { STATUS_NOT_CONFIGURED };
    export { STATUS_LOGIN_FAILED };
    export { STATUS_NOT_VERIFIED };
    export { STATUS_SIGNED_IN };
    /**
     * Returns true if the module has been initialized and the state set.
     * If not, return false and trigger an init in the background.
     */
    export function isReady(): boolean;
    /**
     * @returns {UIState} The current Sync/FxA UI State.
     */
    export function get(): UIState;
    /**
     * Refresh the state. Used for testing, don't call this directly since
     * UIState already listens to Sync/FxA notifications to determine if the state
     * needs to be refreshed. ON_UPDATE will be fired once the state is refreshed.
     *
     * @returns {Promise<UIState>} Resolved once the state is refreshed.
     */
    export function refresh(): Promise<UIState>;
    /**
     * Reset the state of the whole module. Used for testing.
     */
    export function reset(): void;
}
declare namespace UIStateInternal {
    let _initialized: boolean;
    let _state: any;
    let _syncing: boolean;
    const state: any;
    function isReady(): boolean;
    function init(): void;
    function reset(): void;
    function observe(subject: any, topic: any, data: any): void;
    function refreshState(): Promise<any>;
    function toggleSyncActivity(syncing: any): void;
    function notifyStateUpdated(): void;
    function _refreshFxAState(newState: any): Promise<void>;
    function _populateWithUserData(state: any, userData: any): Promise<void>;
    function _getUserData(): Promise<any>;
    function _setLastSyncTime(state: any): void;
    function _loginFailed(): Promise<boolean>;
    let fxAccounts: any;
}
declare const ON_UPDATE: "sync-ui-state:update";
declare const STATUS_NOT_CONFIGURED: "not_configured";
declare const STATUS_LOGIN_FAILED: "login_failed";
declare const STATUS_NOT_VERIFIED: "not_verified";
declare const STATUS_SIGNED_IN: "signed_in";
export {};
