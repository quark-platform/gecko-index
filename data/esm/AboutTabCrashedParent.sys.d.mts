export class AboutTabCrashedParent extends JSWindowActorParent {
    didDestroy(): void;
    receiveMessage(message: any): Promise<void>;
    removeCrashedPage(): void;
    updateTabCrashedCount(): void;
}
