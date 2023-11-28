/**
 * test helper JSWindowActors used by the browser_startup_content_subframe.js test.
 */
export class StartupContentSubframeParent {
    receiveMessage(msg: any): void;
}
export class StartupContentSubframeChild {
    handleEvent(event: any): Promise<void>;
}
