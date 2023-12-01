export class DOMFullscreenParent extends JSWindowActorParent {
    waitingForChildEnterFullscreen: boolean;
    waitingForChildExitFullscreen: boolean;
    nextMsgRecipient: any;
    updateFullscreenWindowReference(aWindow: any): void;
    _fullscreenWindow: any;
    cleanupDomFullscreen(aWindow: any): void;
    /**
     * Clean up fullscreen state and resume chrome UI if window is in fullscreen
     * and this actor is the one where the original fullscreen enter or
     * exit request comes.
     */
    _cleanupFullscreenStateAndResumeChromeUI(aWindow: any): void;
    didDestroy(): void;
    _didDestroy: boolean;
    receiveMessage(aMessage: any): void;
    /**
     * Store the actor where the original fullscreen
     * enter or exit request comes from in the top level
     * browsing context.
     */
    set requestOrigin(aActor: any);
    /**
     * Get the actor where the original fullscreen
     * enter or exit request comes from.
     */
    get requestOrigin(): any;
    handleEvent(aEvent: any): void;
    addListeners(aWindow: any): void;
    removeListeners(aWindow: any): void;
    hasBeenDestroyed(): boolean;
}
