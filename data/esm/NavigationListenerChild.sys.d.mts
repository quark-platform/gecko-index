export class NavigationListenerChild extends JSWindowActorChild {
    actorCreated(): void;
    didDestroy(): void;
    /**
     * See note above
     */
    handleEvent(event: any): void;
    /**
     * See note above
     */
    receiveMessage(message: any): void;
    #private;
}
