export class AboutPocketParent {
    sendResponseMessageToPanel(messageId: any, payload: any): void;
    isPanalAvailable(): boolean;
    receiveMessage(message: any): Promise<void>;
}
