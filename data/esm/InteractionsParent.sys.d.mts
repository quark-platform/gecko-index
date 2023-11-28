/**
 * Receives messages from InteractionsChild and passes them to the appropriate
 * interactions object.
 */
export class InteractionsParent {
    receiveMessage(msg: any): void;
}
