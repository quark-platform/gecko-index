/**
 * test helper JSWindowActors used by the browser_fullscreen_api_fission.js test.
 */
export class FullscreenFrameChild {
    actorCreated(): void;
    fullscreen_events: any[];
    changed(): Promise<any>;
    requestFullscreen(): Promise<any>;
    receiveMessage(msg: any): any;
    handleEvent(event: any): Promise<void>;
}
