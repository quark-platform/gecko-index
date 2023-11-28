export function ClientsRec(collection: any, id: any): void;
export class ClientsRec {
    constructor(collection: any, id: any);
    _logName: string;
    ttl: number;
}
export function ClientEngine(service: any): void;
export class ClientEngine {
    constructor(service: any);
    fxAccounts: any;
    addClientCommandQueue: any;
    _storeObj: typeof ClientStore;
    _recordObj: typeof ClientsRec;
    _trackerObj: typeof ClientsTracker;
    allowSkippedRecord: boolean;
    _knownStaleFxADeviceIds: null;
    _lastDeviceCounts: null;
    _lastFxaDeviceRefresh: number;
    initialize(): Promise<void>;
    _localClientLastModified: number;
    set _lastModifiedOnProcessCommands(value: any);
    get _lastModifiedOnProcessCommands(): any;
    get isFirstSync(): boolean;
    get enabled(): boolean;
    set lastRecordUpload(value: any);
    get lastRecordUpload(): any;
    get remoteClients(): any[];
    remoteClient(id: any): any;
    remoteClientExists(id: any): boolean;
    get stats(): {
        hasMobile: boolean;
        names: any[];
        numClients: number;
    };
    /**
     * Obtain information about device types.
     *
     * Returns a Map of device types to integer counts. Guaranteed to include
     * "desktop" (which will have at least 1 - this device) and "mobile" (which
     * may have zero) counts. It almost certainly will include only these 2.
     */
    get deviceTypes(): Map<any, any>;
    get brandName(): any;
    set localName(value: any);
    get localName(): any;
    get localType(): any;
    getClientName(id: any): any;
    getClientFxaDeviceId(id: any): any;
    getClientByFxaDeviceId(fxaDeviceId: any): any;
    getClientType(id: any): "desktop" | "tablet" | "phone";
    _readCommands(): Promise<any>;
    /**
     * Low level function, do not use directly (use _addClientCommand instead).
     */
    _saveCommands(commands: any): Promise<void>;
    _prepareCommandsForUpload(): Promise<any>;
    _deleteUploadedCommands(): Promise<void>;
    getClientCommands(clientId: any): Promise<any>;
    removeLocalCommand(command: any): Promise<void>;
    _addClientCommand(clientId: any, command: any): Promise<any>;
    _removeClientCommands(clientId: any): Promise<void>;
    updateKnownStaleClients(): Promise<void>;
    _fetchFxADevices(): Promise<void>;
    _syncStartup(): Promise<any>;
    _processIncoming(): Promise<void>;
    _incomingClients: {};
    _uploadOutgoing(): Promise<void>;
    _currentlySyncingCommands: any;
    _onRecordsWritten(succeeded: any, failed: any): Promise<void>;
    localCommands: any;
    _notifyOtherClientsModified(ids: any): void;
    _notifyClientRecordUploaded(): void;
    /**
     * @param {?string[]} ids FxA Client IDs to notify. null means everyone else.
     * @param {number} ttl TTL of the push notification.
     * @param {string} reason Reason for sending this push notification.
     */
    _notifyCollectionChanged(ids: string[] | null, ttl: number, reason: string): Promise<void>;
    _syncFinish(): Promise<any>;
    _reconcile(item: any): Promise<boolean>;
    _resetClient(): Promise<void>;
    _wipeClient(): Promise<void>;
    removeClientData(): Promise<void>;
    handleHMACMismatch(item: any, mayRetry: any): Promise<any>;
    _commands: {
        resetAll: {
            args: number;
            importance: number;
            desc: string;
        };
        resetEngine: {
            args: number;
            importance: number;
            desc: string;
        };
        wipeEngine: {
            args: number;
            importance: number;
            desc: string;
        };
        logout: {
            args: number;
            importance: number;
            desc: string;
        };
    };
    /**
     * Sends a command+args pair to a specific client.
     *
     * @param command Command string
     * @param args Array of arguments/data for command
     * @param clientId Client to send command to
     */
    _sendCommandToClient(command: any, args: any, clientId: any, telemetryExtra: any): Promise<void>;
    /**
     * Check if the local client has any remote commands and perform them.
     *
     * @return false to abort sync
     */
    processIncomingCommands(): Promise<any>;
    /**
     * Validates and sends a command to a client or all clients.
     *
     * Calling this does not actually sync the command data to the server. If the
     * client already has the command/args pair, it won't receive a duplicate
     * command.
     * This method is async since it writes the command to a file.
     *
     * @param command
     *        Command to invoke on remote clients
     * @param args
     *        Array of arguments to give to the command
     * @param clientId
     *        Client ID to send command to. If undefined, send to all remote
     *        clients.
     * @param flowID
     *        A unique identifier used to track success for this operation across
     *        devices.
     */
    sendCommand(command: any, args: any, clientId?: any, telemetryExtra?: {}): Promise<void>;
    _removeRemoteClient(id: any): Promise<void>;
}
declare function ClientStore(name: any, engine: any): void;
declare class ClientStore {
    constructor(name: any, engine: any);
    _remoteClients: {};
    create(record: any): Promise<void>;
    update(record: any): Promise<void>;
    createRecord(id: any, collection: any): Promise<ClientsRec>;
    itemExists(id: any): Promise<boolean>;
    getAllIDs(): Promise<{}>;
    wipe(): Promise<void>;
}
declare function ClientsTracker(name: any, engine: any): void;
declare class ClientsTracker {
    constructor(name: any, engine: any);
    _enabled: boolean;
    onStart(): void;
    onStop(): void;
    observe(subject: any, topic: any, data: any): Promise<void>;
}
export {};
