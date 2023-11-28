export class FissionTestHelperChild {
    _msgCounter: number;
    _oopifResponsePromiseResolvers: any[];
    cw(): any;
    initialize(): void;
    _startTestPromiseResolver: any;
    subtestDone(): void;
    subtestFailed(msg: any): void;
    sendToOopif(iframeElement: any, stringToEval: any): any;
    fireEventInEmbedder(eventType: any, data: any): void;
    handleEvent(evt: any): void;
    receiveMessage(msg: any): void;
}
