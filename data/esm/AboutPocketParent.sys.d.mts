export class AboutPocketParent extends JSWindowActorParent {
    sendResponseMessageToPanel(messageId: any, payload: any): void;
    isPanalAvailable(): boolean;
    receiveMessage(message: any): Promise<void>;
}
