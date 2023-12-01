export class EncryptedMediaParent extends JSWindowActorParent {
    isUiEnabled(): boolean;
    ensureEMEEnabled(aBrowser: any, aKeySystem: any): void;
    isKeySystemVisible(aKeySystem: any): boolean;
    getMessageWithBrandName(aNotificationId: any): any;
    receiveMessage(aMessage: any): void;
    showPopupNotificationForSuccess(aBrowser: any): Promise<void>;
}
