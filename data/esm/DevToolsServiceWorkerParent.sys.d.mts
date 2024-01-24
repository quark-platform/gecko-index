export class DevToolsServiceWorkerParent {
    _destroyed: boolean;
    _connections: Map<any, any>;
    _onConnectionClosed(status: any, prefix: any): void;
    /**
     * Request the content process to create Service Worker Targets if workers matching the context
     * are already available.
     */
    instantiateServiceWorkerTargets({ watcherActorID, connectionPrefix, sessionContext, sessionData, }: {
        watcherActorID: any;
        connectionPrefix: any;
        sessionContext: any;
        sessionData: any;
    }): Promise<void>;
    destroyServiceWorkerTargets({ watcherActorID, sessionContext }: {
        watcherActorID: any;
        sessionContext: any;
    }): any;
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
    serviceWorkerTargetAvailable({ watcherActorID, forwardingPrefix, serviceWorkerTargetForm, }: {
        watcherActorID: any;
        forwardingPrefix: any;
        serviceWorkerTargetForm: any;
    }): void;
    serviceWorkerTargetDestroyed({ watcherActorID, forwardingPrefix, serviceWorkerTargetForm, }: {
        watcherActorID: any;
        forwardingPrefix: any;
        serviceWorkerTargetForm: any;
    }): void;
    _cleanupConnection(connection: any): Promise<void>;
    _destroy(): void;
    /**
     * Part of JSActor API
     * https://searchfox.org/mozilla-central/rev/d9f92154813fbd4a528453c33886dc3a74f27abb/dom/chrome-webidl/JSActor.webidl#41-42,52
     *
     * > The didDestroy method, if present, will be called after the ProcessActor is no
     * > longer able to receive any more messages.
     */
    didDestroy(): void;
    /**
     * Supported Queries
     */
    sendPacket(packet: any, prefix: any): Promise<any>;
    /**
     * JsWindowActor API
     */
    sendQuery(msg: any, args: any): Promise<any>;
    receiveMessage(message: any): any;
}
