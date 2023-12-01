export class DOMFullscreenChild extends JSWindowActorChild {
    receiveMessage(aMessage: any): void;
    _isNotTheRequestSource: boolean;
    _waitForMozAfterPaint: boolean;
    _lastTransactionId: any;
    handleEvent(aEvent: any): void;
    _listeningWindow: any;
    hasBeenDestroyed(): boolean;
}
