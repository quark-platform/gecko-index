export class DevToolsServiceWorkerChild {
    _connections: Map<any, any>;
    /**
     * Destroy the server once its last connection closes. Note that multiple
     * worker scripts may be running in parallel and reuse the same server.
     */
    _onConnectionChange(): void;
    /**
     * Called by nsIWorkerDebuggerManager when a worker get created.
     *
     * Go through all registered connections (in case we have more than one client connected)
     * to eventually instantiate a target actor for this worker.
     *
     * @param {nsIWorkerDebugger} dbg
     */
    _onWorkerRegistered(dbg: nsIWorkerDebugger): void;
    /**
     * Called by nsIWorkerDebuggerManager when a worker get destroyed.
     *
     * Go through all registered connections (in case we have more than one client connected)
     * to destroy the related target which may have been created for this worker.
     *
     * @param {nsIWorkerDebugger} dbg
     */
    _onWorkerUnregistered(dbg: nsIWorkerDebugger): void;
    /**
     * To be called when we know a Service Worker target should be destroyed for a specific connection
     * for which we pass the related "watcher connection data".
     *
     * @param {String} watcherActorID
     *        Watcher actor ID for which we should unregister this service worker.
     * @param {Object} watcherConnectionData
     *        The metadata object for a given watcher, stored in the _connections Map.
     * @param {nsIWorkerDebugger} dbg
     */
    _destroyServiceWorkerTargetForWatcher(watcherActorID: string, watcherConnectionData: any, dbg: nsIWorkerDebugger): void;
    /**
     * Function handling messages sent by DevToolsServiceWorkerParent (part of ProcessActor API).
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
     * "chrome-event-target-created" event handler. Supposed to be fired very early when the process starts
     */
    observe(): void;
    /**
     * Instantiate targets for existing workers, watch for worker registration and listen
     * for resources on those workers, for given connection and context. Targets are sent
     * to the DevToolsServiceWorkerParent via the DevToolsServiceWorkerChild:serviceWorkerTargetAvailable message.
     *
     * @param {Object} options
     * @param {String} options.watcherActorID: The ID of the WatcherActor who requested to
     *        observe and create these target actors.
     * @param {String} options.parentConnectionPrefix: The prefix of the DevToolsServerConnection
     *        of the Watcher Actor. This is used to compute a unique ID for the target actor.
     * @param {Object} options.sessionData: Data (targets, resources, …) the watcher wants
     *        to be notified about. See WatcherRegistry.getSessionData to see the full list
     *        of properties.
     */
    _watchWorkerTargets({ watcherActorID, parentConnectionPrefix, sessionData, }: {
        watcherActorID: string;
        parentConnectionPrefix: string;
        sessionData: any;
    }): Promise<void>;
    _workerDebuggerListener: {
        onRegister: any;
        onUnregister: any;
    };
    /**
     * Initialize a DevTools Server and return a new DevToolsServerConnection
     * using this server in order to communicate to the parent process via
     * the JSProcessActor message / queries.
     *
     * @param String forwardingPrefix
     *        A unique prefix used to distinguish message coming from distinct service workers.
     * @return DevToolsServerConnection
     *        A connection to communicate with the parent process.
     */
    _createConnection(forwardingPrefix: any): any;
    /**
     * Indicates whether or not we should handle the worker debugger for a given
     * watcher's session data.
     *
     * @param {Object} sessionData
     *        The session data for a given watcher, which includes metadata
     *        about the debugged context.
     * @param {WorkerDebugger} dbg
     *        The worker debugger we want to check.
     *
     * @returns {Boolean}
     */
    _shouldHandleWorker(sessionData: any, dbg: WorkerDebugger): boolean;
    _createWorkerTargetActor({ dbg, connection, forwardingPrefix, watcherActorID, }: {
        dbg: any;
        connection: any;
        forwardingPrefix: any;
        watcherActorID: any;
    }): Promise<void>;
    /**
     * Request the service worker threads to destroy all their service worker Targets currently registered for a given Watcher actor.
     *
     * @param {String} watcherActorID
     */
    _destroyTargetActors(watcherActorID: string): void;
    _destroyed: boolean;
    /**
     * Used by DevTools transport layer to communicate with the parent process.
     *
     * @param {String} packet
     * @param {String prefix
     */
    sendPacket(packet: string, prefix: string): Promise<any>;
    /**
     * Go through all registered service workers for a given watcher actor
     * to send them new session data entries.
     *
     * See addOrSetSessionDataEntryInWorkerTarget for more info about arguments.
     */
    _addOrSetSessionDataEntry(watcherActorID: any, type: any, entries: any, updateType: any): Promise<void>;
    /**
     * Called whenever the debugged browser element navigates to a new page
     * and the URL's host changes.
     * This is used to maintain the list of active Service Worker targets
     * based on that host name.
     *
     * @param {String} watcherActorID
     *        Watcher actor ID for which we should unregister this service worker.
     * @param {Object} watcherConnectionData
     *        The metadata object for a given watcher, stored in the _connections Map.
     */
    updateBrowserElementHost(watcherActorID: string, watcherConnectionData: any): Promise<void>;
    /**
     * Go through all registered service workers for a given watcher actor
     * to send them request to clear some session data entries.
     *
     * See addOrSetSessionDataEntryInWorkerTarget for more info about arguments.
     */
    _removeSessionDataEntry(watcherActorID: any, type: any, entries: any): void;
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
