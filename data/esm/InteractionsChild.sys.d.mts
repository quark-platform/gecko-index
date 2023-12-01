/**
 * Listens for interactions in the child process and passes information to the
 * parent.
 */
export class InteractionsChild extends JSWindowActorChild {
    actorCreated(): void;
    isContentWindowPrivate: any;
    didDestroy(): void;
    onLocationChange(webProgress: any, request: any, location: any, flags: any): void;
    handleEvent(event: any): Promise<void>;
    #private;
}
