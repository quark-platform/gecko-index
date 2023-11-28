/**
 * A session to communicate with a given tab
 */
export class TabSession {
    /**
     * @param {Connection} connection
     *        The connection used to communicate with the server.
     * @param {TabTarget} target
     *        The tab target to which this session communicates with.
     * @param {number=} id
     *        If this session isn't the default one used for the HTTP endpoint we
     *        connected to, the session requires an id to distinguish it from the default
     *        one. This id is used to filter our request, responses and events between
     *        all active sessions.
     *        For now, this is only passed by `Target.attachToTarget()`.
     *        Otherwise it will be undefined when you are connecting directly to
     *        a given Tab. i.e. connect directly to the WebSocket URL provided by
     *        /json/list HTTP endpoint.
     */
    constructor(connection: Connection, target: TabTarget, id?: number | undefined);
    requestPromises: Map<any, any>;
    destructor(): void;
    execute(id: any, domain: any, command: any, params: any): any;
    executeInChild(id: any, domain: any, command: any, params: any): Promise<any>;
    get mm(): any;
    get browsingContext(): any;
    /**
     * Register the framescript and listeners for the given message manager.
     *
     * @param {MessageManager} messageManager
     *     The message manager to use.
     */
    registerFramescript(messageManager: MessageManager): void;
    handleEvent: ({ target, type }: {
        target: any;
        type: any;
    }) => void;
    receiveMessage({ name, data }: {
        name: any;
        data: any;
    }): void;
}
