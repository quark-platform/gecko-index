/**
 * test helper JSWindowActors used by the browser_fullscreen_api_fission.js test.
 */
export class FullscreenFrameChild extends JSWindowActorChild {
    actorCreated(): void;
    fullscreen_events: any[];
    changed(): Promise<any>;
    requestFullscreen(): Promise<any>;
    receiveMessage(msg: any): Promise<any>;
    handleEvent(event: any): Promise<void>;
}
