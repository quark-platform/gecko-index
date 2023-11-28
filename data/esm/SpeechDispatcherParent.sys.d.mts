export class SpeechDispatcherParent {
    prefName(): string;
    disableNotification(): void;
    receiveMessage(aMessage: any): Promise<void>;
}
