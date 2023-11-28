/**
 * Enum of ContextDescriptor types.
 */
export type ContextDescriptorType = string;
export namespace ContextDescriptorType {
    let All: string;
    let TopBrowsingContext: string;
}
/**
 * A ContextInfo identifies a given context that can be linked to a MessageHandler
 * instance. It should be used to identify events coming from this context.
 *
 * It can either be provided by the MessageHandler itself, when the event is
 * emitted from the context it relates to.
 *
 * Or it can be assembled manually, for instance when emitting an event which
 * relates to a window global from the root layer (eg browsingContext.contextCreated).
 *
 * @typedef {object} ContextInfo
 * @property {string} contextId
 *     Unique id of the MessageHandler corresponding to this context.
 * @property {string} type
 *     One of MessageHandler.type.
 */
/**
 * MessageHandler instances are dedicated to handle both Commands and Events
 * to enable automation and introspection for remote control protocols.
 *
 * MessageHandler instances are designed to form a network, where each instance
 * should allow to inspect a specific context (eg. a BrowsingContext, a Worker,
 * etc). Those instances might live in different processes and threads but
 * should be linked together by the usage of a single sessionId, shared by all
 * the instances of a single MessageHandler network.
 *
 * MessageHandler instances will be dynamically spawned depending on which
 * Command or which Event needs to be processed and should therefore not be
 * explicitly created by consumers, nor used directly.
 *
 * The only exception is the ROOT MessageHandler. This MessageHandler will be
 * the entry point to send commands to the rest of the network. It will also
 * emit all the relevant events captured by the network.
 *
 * However, even to create this ROOT MessageHandler, consumers should use the
 * RootMessageHandlerRegistry. This singleton will ensure that MessageHandler
 * instances are properly registered and can be retrieved based on a given
 * session id as well as some other context information.
 */
export class MessageHandler {
    /**
     * Returns the module path corresponding to this MessageHandler class.
     *
     * Needs to be implemented in the sub class.
     */
    static get modulePath(): void;
    /**
     * Returns the type corresponding to this MessageHandler class.
     *
     * Needs to be implemented in the sub class.
     */
    static get type(): void;
    /**
     * Returns the id corresponding to a context compatible with this
     * MessageHandler class.
     *
     * Needs to be implemented in the sub class.
     */
    static getIdFromContext(context: any): void;
    /**
     * Create a new MessageHandler instance.
     *
     * @param {string} sessionId
     *     ID of the session the handler is used for.
     * @param {object} context
     *     The context linked to this MessageHandler instance.
     * @param {MessageHandlerRegistry} registry
     *     The MessageHandlerRegistry which owns this MessageHandler instance.
     */
    constructor(sessionId: string, context: object, registry: MessageHandlerRegistry);
    get context(): any;
    get contextId(): any;
    get eventsDispatcher(): any;
    get moduleCache(): any;
    get name(): string;
    get registry(): MessageHandlerRegistry;
    get sessionId(): string;
    destroy(): void;
    /**
     * Emit a message handler event.
     *
     * Such events should bubble up to the root of a MessageHandler network.
     *
     * @param {string} name
     *     Name of the event. Protocol level events should be of the
     *     form [module name].[event name].
     * @param {object} data
     *     The event's data.
     * @param {ContextInfo=} contextInfo
     *     The event's context info, used to identify the origin of the event.
     *     If not provided, the context info of the current MessageHandler will be
     *     used.
     */
    emitEvent(name: string, data: object, contextInfo?: ContextInfo | undefined): void;
    /**
     * @typedef {object} CommandDestination
     * @property {string} type
     *     One of MessageHandler.type.
     * @property {string=} id
     *     Unique context identifier. The format depends on the type.
     *     For WINDOW_GLOBAL destinations, this is a browsing context id.
     *     Optional, should only be provided if `contextDescriptor` is missing.
     * @property {ContextDescriptor=} contextDescriptor
     *     Descriptor used to match several contexts, which will all receive the
     *     command.
     *     Optional, should only be provided if `id` is missing.
     */
    /**
     * @typedef {object} Command
     * @property {string} commandName
     *     The name of the command to execute.
     * @property {string} moduleName
     *     The name of the module.
     * @property {object} params
     *     Optional command parameters.
     * @property {CommandDestination} destination
     *     The destination describing a debuggable context.
     * @property {boolean=} retryOnAbort
     *     Optional. When true, commands will be retried upon AbortError, which
     *     can occur when the underlying JSWindowActor pair is destroyed.
     *     Defaults to `false`.
     */
    /**
     * Retrieve all module classes matching the moduleName and destination.
     * See `getAllModuleClasses` (ModuleCache.jsm) for more details.
     *
     * @param {string} moduleName
     *     The name of the module.
     * @param {Destination} destination
     *     The destination.
     * @returns {Array.<class<Module>|null>}
     *     An array of Module classes.
     */
    getAllModuleClasses(moduleName: string, destination: Destination): any[];
    /**
     * Handle a command, either in one of the modules owned by this MessageHandler
     * or in a another MessageHandler after forwarding the command.
     *
     * @param {Command} command
     *     The command that should be either handled in this layer or forwarded to
     *     the next layer leading to the destination.
     * @returns {Promise} A Promise that will resolve with the return value of the
     *     command once it has been executed.
     */
    handleCommand(command: {
        /**
         *     The name of the command to execute.
         */
        commandName: string;
        /**
         *     The name of the module.
         */
        moduleName: string;
        /**
         *     Optional command parameters.
         */
        params: object;
        /**
         *     The destination describing a debuggable context.
         */
        destination: {
            /**
             *     One of MessageHandler.type.
             */
            type: string;
            /**
             *     Unique context identifier. The format depends on the type.
             *     For WINDOW_GLOBAL destinations, this is a browsing context id.
             *     Optional, should only be provided if `contextDescriptor` is missing.
             */
            id?: string | undefined;
            /**
             *     Descriptor used to match several contexts, which will all receive the
             *     command.
             *     Optional, should only be provided if `id` is missing.
             */
            contextDescriptor?: ContextDescriptor | undefined;
        };
        /**
         *     Optional. When true, commands will be retried upon AbortError, which
         *     can occur when the underlying JSWindowActor pair is destroyed.
         *     Defaults to `false`.
         */
        retryOnAbort?: boolean | undefined;
    }): Promise<any>;
    toString(): string;
    /**
     * Execute the required initialization steps, inlcluding apply the initial session data items
     * provided to this MessageHandler on startup. Implementation is specific to each MessageHandler class.
     *
     * By default the implementation is a no-op.
     *
     * @param {Array<SessionDataItem>} sessionDataItems
     *     Initial session data items for this MessageHandler.
     */
    initialize(sessionDataItems: Array<SessionDataItem>): Promise<void>;
    /**
     * Forward a command to other MessageHandlers.
     *
     * Needs to be implemented in the sub class.
     */
    forwardCommand(command: any): void;
    /**
     * Check if contextDescriptor matches the context linked
     * to this MessageHandler instance.
     *
     * Needs to be implemented in the sub class.
     */
    matchesContext(contextDescriptor: any): void;
    /**
     * Check if the given command is supported in the module
     * for the destination
     *
     * @param {string} moduleName
     *     The name of the module.
     * @param {string} commandName
     *     The name of the command.
     * @param {Destination} destination
     *     The destination.
     * @returns {boolean}
     *     True if the command is supported.
     */
    supportsCommand(moduleName: string, commandName: string, destination: Destination): boolean;
    #private;
}
/**
 * A ContextDescriptor object provides information to decide if a broadcast or
 * a session data item should be applied to a specific MessageHandler context.
 */
export type ContextDescriptor = {
    /**
     *     The type of context
     */
    type: ContextDescriptorType;
    /**
     *     Unique id of a given context for the provided type.
     *     For ContextDescriptorType.All, id can be ommitted.
     *     For ContextDescriptorType.TopBrowsingContext, the id should be the
     *     browserId corresponding to a top-level browsing context.
     */
    id?: string | undefined;
};
/**
 * A ContextInfo identifies a given context that can be linked to a MessageHandler
 * instance. It should be used to identify events coming from this context.
 *
 * It can either be provided by the MessageHandler itself, when the event is
 * emitted from the context it relates to.
 *
 * Or it can be assembled manually, for instance when emitting an event which
 * relates to a window global from the root layer (eg browsingContext.contextCreated).
 */
export type ContextInfo = {
    /**
     *     Unique id of the MessageHandler corresponding to this context.
     */
    contextId: string;
    /**
     *     One of MessageHandler.type.
     */
    type: string;
};
