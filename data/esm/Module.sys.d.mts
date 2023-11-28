export class Module {
    static get supportedEvents(): any[];
    static supportsEvent(event: any): boolean;
    static supportsMethod(methodName: any): boolean;
    /**
     * Create a new module instance.
     *
     * @param {MessageHandler} messageHandler
     *     The MessageHandler instance which owns this Module instance.
     */
    constructor(messageHandler: MessageHandler);
    /**
     * Clean-up the module instance.
     */
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
     *     The event's context info, see MessageHandler:emitEvent. Optional.
     */
    emitEvent(name: string, data: object, contextInfo?: ContextInfo): void;
    /**
     * Intercept an event and modify the payload.
     *
     * It's required to be implemented in windowglobal-in-root modules.
     *
     * @param {string} name
     *     Name of the event.
     * @param {object} payload
     *    The event's payload.
     * @returns {object}
     *     The modified event payload.
     */
    interceptEvent(name: string, payload: object): object;
    /**
     * Assert if experimental commands are enabled.
     *
     * @param {string} methodName
     *     Name of the command.
     *
     * @throws {UnknownCommandError}
     *     If experimental commands are disabled.
     */
    assertExperimentalCommandsEnabled(methodName: string): void;
    /**
     * Assert if experimental events are enabled.
     *
     * @param {string} moduleName
     *     Name of the module.
     *
     * @param {string} event
     *     Name of the event.
     *
     * @throws {InvalidArgumentError}
     *     If experimental events are disabled.
     */
    assertExperimentalEventsEnabled(moduleName: string, event: string): void;
    /**
     * Instance shortcut for supportsMethod to avoid reaching the constructor for
     * consumers which directly deal with an instance.
     */
    supportsMethod(methodName: any): any;
    get messageHandler(): MessageHandler;
    #private;
}
