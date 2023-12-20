export class DevToolsWorkerParent extends JSWindowActorParent {
    _destroyed: boolean;
    _connections: Map<any, any>;
    _onConnectionClosed(status: any, prefix: any): void;
    /**
     * Request the content process to create Worker Targets if workers matching the context
     * are already available.
     */
    instantiateWorkerTargets({ watcherActorID, connectionPrefix, sessionContext, sessionData, }: {
        watcherActorID: any;
        connectionPrefix: any;
        sessionContext: any;
        sessionData: any;
    }): Promise<void>;
    destroyWorkerTargets({ watcherActorID, sessionContext }: {
        watcherActorID: any;
        sessionContext: any;
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
    workerTargetAvailable({ watcherActorID, forwardingPrefix, workerTargetForm, }: {
        watcherActorID: any;
        forwardingPrefix: any;
        workerTargetForm: any;
    }): void;
    workerTargetDestroyed({ watcherActorID, forwardingPrefix, workerTargetForm, }: {
        watcherActorID: any;
        forwardingPrefix: any;
        workerTargetForm: any;
    }): void;
    _unregisterWatcher(connectionPrefix: any): Promise<void>;
    _destroy(): void;
    /**
     * Part of JSActor API
     * https://searchfox.org/mozilla-central/rev/d9f92154813fbd4a528453c33886dc3a74f27abb/dom/chrome-webidl/JSActor.webidl#41-42,52
     *
     * > The didDestroy method, if present, will be called after the (JSWindow)actor is no
     * > longer able to receive any more messages.
     */
    didDestroy(): void;
    /**
     * Supported Queries
     */
    sendPacket(packet: any, prefix: any): Promise<void>;
    /**
     * JsWindowActor API
     */
    sendQuery(msg: any, args: any): Promise<any>;
    receiveMessage(message: any): any;
}
