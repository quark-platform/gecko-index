export class FxAccountsDevice {
    constructor(fxai: any);
    _fxai: any;
    _deviceListCache: {
        lastFetch: any;
        devices: any;
    };
    _fetchAndCacheDeviceListPromise: any;
    DEVICE_REGISTRATION_VERSION: number;
    TIME_BETWEEN_FXA_DEVICES_FETCH_MS: number;
    getLocalId(): Promise<any>;
    getDefaultLocalName(): any;
    getLocalName(): any;
    setLocalName(newName: any): void;
    getLocalType(): any;
    /**
     * Returns the most recently fetched device list, or `null` if the list
     * hasn't been fetched yet. This is synchronous, so that consumers like
     * Send Tab can render the device list right away, without waiting for
     * it to refresh.
     *
     * @type {?Array}
     */
    get recentDeviceList(): any[];
    /**
     * Refreshes the device list. After this function returns, consumers can
     * access the new list using the `recentDeviceList` getter. Note that
     * multiple concurrent calls to `refreshDeviceList` will only refresh the
     * list once.
     *
     * @param  {Boolean} [options.ignoreCached]
     *         If `true`, forces a refresh, even if the cached device list is
     *         still fresh. Defaults to `false`.
     * @return {Promise<Boolean>}
     *         `true` if the list was refreshed, `false` if the cached list is
     *         fresh. Rejects if an error occurs refreshing the list or device
     *         push registration.
     */
    refreshDeviceList({ ignoreCached }?: boolean): Promise<boolean>;
    _refreshRemoteDevice(currentState: any, accountData: any, remoteDevices: any): Promise<void>;
    updateDeviceRegistration(): Promise<any>;
    updateDeviceRegistrationIfNecessary(): Promise<any>;
    reset(): void;
    /**
     * Here begin our internal helper methods.
     *
     * Many of these methods take the current account state as first argument,
     * in order to avoid racing our state updates with e.g. the uer signing
     * out while we're in the middle of an update. If this does happen, the
     * resulting promise will be rejected rather than persisting stale state.
     *
     */
    _withCurrentAccountState(func: any): any;
    _withVerifiedAccountState(func: any): any;
    _checkDeviceUpdateNeeded(device: any): Promise<boolean>;
    _checkRemoteCommandsUpdateNeeded(remoteAvailableCommands: any): Promise<boolean>;
    _updateDeviceRegistrationIfNecessary(currentState: any): Promise<any>;
    _registerOrUpdateDevice(currentState: any, signedInUser: any): Promise<any>;
    _handleDeviceError(currentState: any, error: any, sessionToken: any): Promise<any>;
    _recoverFromUnknownDevice(currentState: any): Promise<any>;
    _recoverFromDeviceSessionConflict(currentState: any, error: any, sessionToken: any): Promise<any>;
    _logErrorAndResetDeviceRegistrationVersion(currentState: any, error: any): Promise<void>;
    observe(subject: any, topic: any, data: any): void;
    QueryInterface: any;
}
