/**
 * Propagates "MozClipboardReadPaste" events from a content process to the
 * chrome process.
 * Receives messages from the chrome process.
 */
export class ClipboardReadPasteChild extends JSWindowActorChild {
    handleEvent(aEvent: any): void;
    receiveMessage(value: any): void;
}
