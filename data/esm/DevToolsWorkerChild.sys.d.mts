export class DevToolsWorkerChild {
    _connections: Map<any, any>;
    _onWorkerRegistered(dbg: any): void;
    _onWorkerUnregistered(dbg: any): void;
    onDOMWindowCreated(): void;
    /**
     * Function handling messages sent by DevToolsWorkerParent (part of JSWindowActor API).
     *
     * @param {Object} message
     * @param {String} message.name
     * @param {*} message.data
     */
    receiveMessage(message: {
        name: string;
        data: any;
    }): any;
    /**
     * Instantiate targets for existing workers, watch for worker registration and listen
     * for resources on those workers, for given connection and context. Targets are sent
     * to the DevToolsWorkerParent via the DevToolsWorkerChild:workerTargetAvailable message.
     *
     * @param {Object} options
     * @param {Integer} options.watcherActorID: The ID of the WatcherActor who requested to
     *        observe and create these target actors.
     * @param {String} options.parentConnectionPrefix: The prefix of the DevToolsServerConnection
     *        of the Watcher Actor. This is used to compute a unique ID for the target actor.
     * @param {Object} options.sessionData: Data (targets, resources, …) the watcher wants
     *        to be notified about. See WatcherRegistry.getSessionData to see the full list
     *        of properties.
     */
    _watchWorkerTargets({ watcherActorID, parentConnectionPrefix, sessionData, }: {
        watcherActorID: Integer;
        parentConnectionPrefix: string;
        sessionData: any;
    }): Promise<void>;
    _workerDebuggerListener: {
        onRegister: any;
        onUnregister: any;
    };
    _createConnection(forwardingPrefix: any): any;
    /**
     * Indicates whether or not we should handle the worker debugger
     *
     * @param {WorkerDebugger} dbg: The worker debugger we want to check.
     * @returns {Boolean}
     */
    _shouldHandleWorker(dbg: WorkerDebugger): boolean;
    _createWorkerTargetActor({ dbg, connection, forwardingPrefix, watcherActorID, }: {
        dbg: any;
        connection: any;
        forwardingPrefix: any;
        watcherActorID: any;
    }): Promise<void>;
    _destroyTargetActors(watcherActorID: any): void;
    sendPacket(packet: any, prefix: any): Promise<any>;
    _addSessionDataEntry(watcherActorID: any, type: any, entries: any): Promise<void>;
    _removeSessionDataEntry(watcherActorID: any, type: any, entries: any): void;
    handleEvent({ type }: {
        type: any;
    }): void;
    _removeExistingWorkerDebuggerListener(): void;
    /**
     * Part of JSActor API
     * https://searchfox.org/mozilla-central/rev/d9f92154813fbd4a528453c33886dc3a74f27abb/dom/chrome-webidl/JSActor.webidl#41-42,52
     *
     * > The didDestroy method, if present, will be called after the actor is no
     * > longer able to receive any more messages.
     */
    didDestroy(): void;
}
