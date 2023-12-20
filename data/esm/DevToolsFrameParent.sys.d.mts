export class DevToolsFrameParent extends JSWindowActorParent {
    _connections: Map<any, any>;
    _onConnectionClosed(status: any, connectionPrefix: any): void;
    /**
     * Request the content process to create the Frame Target if there is one
     * already available that matches the Browsing Context ID
     */
    instantiateTarget({ watcherActorID, connectionPrefix, sessionContext, sessionData, }: {
        watcherActorID: any;
        connectionPrefix: any;
        sessionContext: any;
        sessionData: any;
    }): Promise<void>;
    /**
     * @param {object} arg
     * @param {object} arg.sessionContext
     * @param {object} arg.options
     * @param {boolean} arg.options.isModeSwitching
     *        true when this is called as the result of a change to the devtools.browsertoolbox.scope pref
     */
    destroyTarget({ watcherActorID, sessionContext, options }: {
        sessionContext: object;
        options: {
            isModeSwitching: boolean;
        };
    }): void;
    /**
     * Communicate to the content process that some data have been added.
     */
    addOrSetSessionDataEntry({ watcherActorID, sessionContext, type, entries, updateType, }: {
        watcherActorID: any;
        sessionContext: any;
        type: any;
        entries: any;
        updateType: any;
    }): Promise<void>;
    /**
     * Communicate to the content process that some data have been removed.
     */
    removeSessionDataEntry({ watcherActorID, sessionContext, type, entries }: {
        watcherActorID: any;
        sessionContext: any;
        type: any;
        entries: any;
    }): void;
    connectFromContent({ watcherActorID, forwardingPrefix, actor }: {
        watcherActorID: any;
        forwardingPrefix: any;
        actor: any;
    }): void;
    /**
     * Given a watcher connection prefix, unregister everything related to the Watcher
     * in this JSWindowActor.
     *
     * @param {String} connectionPrefix
     *        The connection prefix of the watcher to unregister
     */
    _unregisterWatcher(connectionPrefix: string): Promise<void>;
    /**
     * Destroy everything that we did related to the current WindowGlobal that
     * this JSWindow Actor represents:
     *  - close all transports that were used as bridge to communicate with the
     *    DevToolsFrameChild, running in the content process
     *  - unregister these transports from DevToolsServer (cancelForwarding)
     *  - notify the client, via the WatcherActor that all related targets,
     *    one per client/connection are all destroyed
     *
     * Note that with bfcacheInParent, we may reuse a JSWindowActor pair after closing all connections.
     * This is can happen outside of the destruction of the actor.
     * We may reuse a DevToolsFrameParent and DevToolsFrameChild pair.
     * When navigating away, we will destroy them and call this method.
     * Then when navigating back, we will reuse the same instances.
     * So that we should be careful to keep the class fully function and only clear all its state.
     *
     * @param {object} options
     * @param {boolean} options.isModeSwitching
     *        true when this is called as the result of a change to the devtools.browsertoolbox.scope pref
     */
    _closeAllConnections(options: {
        isModeSwitching: boolean;
    }): void;
    /**
     * Supported Queries
     */
    sendPacket(packet: any, prefix: any): void;
    /**
     * JsWindowActor API
     */
    receiveMessage(message: any): any;
    didDestroy(): void;
}
