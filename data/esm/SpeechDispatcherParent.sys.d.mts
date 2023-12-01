export class SpeechDispatcherParent extends JSWindowActorParent {
    prefName(): string;
    disableNotification(): void;
    receiveMessage(aMessage: any): Promise<void>;
}
