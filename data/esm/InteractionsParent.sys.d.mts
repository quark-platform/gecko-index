/**
 * Receives messages from InteractionsChild and passes them to the appropriate
 * interactions object.
 */
export class InteractionsParent extends JSWindowActorParent {
    receiveMessage(msg: any): void;
}
