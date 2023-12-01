export class CodeMirrorTestParent extends JSWindowActorParent {
    static setCallback(callback: any): void;
    receiveMessage(message: any): void;
}
export class CodeMirrorTestChild extends JSWindowActorChild {
    handleEvent(event: any): void;
    check(): void;
}
