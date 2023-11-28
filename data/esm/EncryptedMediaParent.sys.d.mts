export class EncryptedMediaParent {
    isUiEnabled(): any;
    ensureEMEEnabled(aBrowser: any, aKeySystem: any): void;
    isKeySystemVisible(aKeySystem: any): any;
    getMessageWithBrandName(aNotificationId: any): any;
    receiveMessage(aMessage: any): void;
    showPopupNotificationForSuccess(aBrowser: any): Promise<void>;
}
