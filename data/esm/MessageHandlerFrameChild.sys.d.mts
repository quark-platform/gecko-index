/**
 * Retrieve the MessageHandlerFrameChild which is linked to the provided
 * WindowGlobalMessageHandler instance.
 *
 * @param {WindowGlobalMessageHandler} messageHandler
 *     The WindowGlobalMessageHandler for which to get the JSWindowActor.
 * @returns {MessageHandlerFrameChild}
 *     The corresponding MessageHandlerFrameChild instance.
 */
export function getMessageHandlerFrameChildActor(messageHandler: WindowGlobalMessageHandler): MessageHandlerFrameChild;
/**
 * Child actor for the MessageHandlerFrame JSWindowActor. The
 * MessageHandlerFrame actor is used by RootTransport to communicate between
 * ROOT MessageHandlers and WINDOW_GLOBAL MessageHandlers.
 */
export class MessageHandlerFrameChild extends JSWindowActorChild {
    actorCreated(): void;
    type: any;
    context: BrowsingContext;
    _registry: any;
    _onRegistryEvent(eventName: any, wrappedEvent: any): void;
    handleEvent({ persisted, type }: {
        persisted: any;
        type: any;
    }): void;
    receiveMessage(message: any): Promise<any>;
    sendCommand(command: any, sessionId: any): Promise<any>;
    didDestroy(): void;
}
