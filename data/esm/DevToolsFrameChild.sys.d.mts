export class DevToolsFrameChild extends JSWindowActorChild {
    _connections: Map<any, any>;
    /**
     * Try to instantiate new target actors for the current WindowGlobal, and that,
     * for all the currently registered Watcher actors.
     *
     * Read the `sharedData` to get metadata about all registered watcher actors.
     * If these watcher actors are interested in the current WindowGlobal,
     * instantiate a new dedicated target actor for each of the watchers.
     *
     * @param Object options
     * @param Boolean options.isBFCache
     *        True, if the request to instantiate a new target comes from a bfcache navigation.
     *        i.e. when we receive a pageshow event with persisted=true.
     *        This will be true regardless of bfcacheInParent being enabled or disabled.
     * @param Boolean options.ignoreIfExisting
     *        By default to false. If true is passed, we avoid instantiating a target actor
     *        if one already exists for this windowGlobal.
     */
    instantiate({ isBFCache, ignoreIfExisting }?: {
        isBFCache?: boolean;
        ignoreIfExisting?: boolean;
    }): void;
    /**
     * Instantiate a new WindowGlobalTarget for the given connection.
     *
     * @param Object options
     * @param String options.watcherActorID
     *        The ID of the WatcherActor who requested to observe and create these target actors.
     * @param String options.parentConnectionPrefix
     *        The prefix of the DevToolsServerConnection of the Watcher Actor.
     *        This is used to compute a unique ID for the target actor.
     * @param Object options.sessionData
     *        All data managed by the Watcher Actor and WatcherRegistry.jsm, containing
     *        target types, resources types to be listened as well as breakpoints and any
     *        other data meant to be shared across processes and threads.
     * @param Boolean options.isDocumentCreation
     *        Set to true if the function is called from `instantiate`, i.e. when we're
     *        handling a new document being created.
     * @param Boolean options.fromInstantiateAlreadyAvailable
     *        Set to true if the function is called from handling `DevToolsFrameParent:instantiate-already-available`
     *        query.
     */
    _createTargetActor({ watcherActorID, parentConnectionPrefix, sessionData, isDocumentCreation, fromInstantiateAlreadyAvailable, }: {
        watcherActorID: any;
        parentConnectionPrefix: any;
        sessionData: any;
        isDocumentCreation: any;
        fromInstantiateAlreadyAvailable: any;
    }): void;
    /**
     * @param {string} watcherActorID
     * @param {object} options
     * @param {boolean} options.isModeSwitching
     *        true when this is called as the result of a change to the devtools.browsertoolbox.scope pref
     */
    _destroyTargetActor(watcherActorID: string, options: {
        isModeSwitching: boolean;
    }): void;
    _createConnectionAndActor(forwardingPrefix: any, sessionData: any): {
        connection: any;
        targetActor: any;
    };
    useCustomLoader: any;
    loader: any;
    /**
     * Supported Queries
     */
    sendPacket(packet: any, prefix: any): void;
    /**
     * JsWindowActor API
     */
    sendQuery(msg: any, args: any): Promise<any>;
    receiveMessage(message: any): any;
    /**
     * Return an existing target given a WatcherActor id, a browserId and an optional
     * browsing context id.
     * /!\ Note that we may have multiple targets for a given (watcherActorId, browserId) couple,
     * for example if we have 2 remote iframes sharing the same origin, which is why you
     * might want to pass a specific browsing context id to filter the list down.
     *
     * @param {Object} options
     * @param {Object} options.watcherActorID
     * @param {Object} options.sessionContext
     * @param {Object} options.browsingContextId: Optional browsing context id to narrow the
     *                 search to a specific browsing context.
     *
     * @returns {WindowGlobalTargetActor|null}
     */
    _findTargetActor({ watcherActorID, sessionContext, browsingContextId }: {
        watcherActorID: any;
        sessionContext: any;
        browsingContextId: any;
    }): WindowGlobalTargetActor | null;
    _addOrSetSessionDataEntry(watcherActorID: any, sessionContext: any, type: any, entries: any, updateType: any): any;
    _removeSessionDataEntry(watcherActorID: any, sessionContext: any, type: any, entries: any): any;
    handleEvent({ type, persisted, target }: {
        type: any;
        persisted: any;
        target: any;
    }): void;
    didDestroy(options: any): void;
}
