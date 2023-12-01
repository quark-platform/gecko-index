/**
 * Enable MarionetteEvents actors to start forwarding page load events from the
 * child actor to the parent actor. Register the MarionetteEvents actor if necessary.
 */
export function enableEventsActor(): void;
/**
 * Disable MarionetteEvents actors to stop forwarding page load events from the
 * child actor to the parent actor.
 */
export function disableEventsActor(): void;
export namespace EventDispatcher {
    function init(): void;
}
export class MarionetteEventsParent extends JSWindowActorParent {
    receiveMessage(msg: any): Promise<undefined>;
}
