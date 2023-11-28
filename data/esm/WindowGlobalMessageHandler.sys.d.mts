/**
 * A WindowGlobalMessageHandler is dedicated to debugging a single window
 * global. It follows the lifecycle of the corresponding window global and will
 * therefore not survive any navigation. This MessageHandler cannot forward
 * commands further to other MessageHandlers and represents a leaf node in a
 * MessageHandler network.
 */
export class WindowGlobalMessageHandler {
    /**
     * Returns the WindowGlobalMessageHandler module path.
     *
     * @returns {string}
     */
    static get modulePath(): string;
    /**
     * Returns the WindowGlobalMessageHandler type.
     *
     * @returns {string}
     */
    static get type(): string;
    /**
     * For WINDOW_GLOBAL MessageHandlers, `context` is a BrowsingContext,
     * and BrowsingContext.id can be used as the context id.
     *
     * @param {BrowsingContext} context
     *     WindowGlobalMessageHandler contexts are expected to be
     *     BrowsingContexts.
     * @returns {string}
     *     The browsing context id.
     */
    static getIdFromContext(context: BrowsingContext): string;
    constructor(...args: any[]);
    initialize(sessionDataItems: any): void;
    destroy(): void;
    get innerWindowId(): any;
    get realms(): Map<any, any>;
    get window(): any;
    forwardCommand(command: any): any;
    /**
     * If <var>realmId</var> is null or not provided get the realm for
     * a given <var>sandboxName</var>, otherwise find the realm
     * in the cache with the realm id equal given <var>realmId</var>.
     *
     * @param {object} options
     * @param {string|null=} options.realmId
     *     The realm id.
     * @param {string=} options.sandboxName
     *     The name of sandbox
     *
     * @returns {Realm}
     *     The realm object.
     */
    getRealm(options?: {
        realmId?: (string | null) | undefined;
        sandboxName?: string | undefined;
    }): Realm;
    matchesContext(contextDescriptor: any): boolean;
    /**
     * Send a command to the root MessageHandler.
     *
     * @param {Command} command
     *     The command to send to the root MessageHandler.
     * @returns {Promise}
     *     A promise which resolves with the return value of the command.
     */
    sendRootCommand(command: Command): Promise<any>;
    #private;
}
