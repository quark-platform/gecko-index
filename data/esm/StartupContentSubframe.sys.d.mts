/**
 * test helper JSWindowActors used by the browser_startup_content_subframe.js test.
 */
export class StartupContentSubframeParent extends JSWindowActorParent {
    receiveMessage(msg: any): void;
}
export class StartupContentSubframeChild extends JSWindowActorChild {
    handleEvent(event: any): Promise<void>;
}
