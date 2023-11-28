export class FxAccountsCommands {
    constructor(fxAccountsInternal: any);
    _fxai: any;
    sendTab: SendTab;
    _invokeRateLimitExpiry: number;
    availableCommands(): Promise<{
        [x: number]: any;
    }>;
    invoke(command: any, device: any, payload: any): Promise<void>;
    /**
     * Poll and handle device commands for the current device.
     * This method can be called either in response to a Push message,
     * or by itself as a "commands recovery" mechanism.
     *
     * @param {Number} notifiedIndex "Command received" push messages include
     * the index of the command that triggered the message. We use it as a
     * hint when we have no "last command index" stored.
     */
    pollDeviceCommands(notifiedIndex?: number): Promise<boolean>;
    _fetchDeviceCommands(index: any, limit?: any): Promise<any>;
    _getReason(notifiedIndex: any, messageIndex: any): "push" | "poll" | "push-missed";
    _handleCommands(messages: any, notifiedIndex: any): Promise<void>;
    _notifyFxATabsReceived(tabsReceived: any): void;
}
/**
 * Send Tab is built on top of FxA commands.
 *
 * Devices exchange keys wrapped in the oldsync key between themselves (getEncryptedSendTabKeys)
 * during the device registration flow. The FxA server can theoretically never
 * retrieve the send tab keys since it doesn't know the oldsync key.
 *
 * Note about the keys:
 * The server has the `pushPublicKey`. The FxA server encrypt the send-tab payload again using the
 * push keys - after the client has encrypted the payload using the send-tab keys.
 * The push keys are different from the send-tab keys. The FxA server uses
 * the push keys to deliver the tabs using same mechanism we use for web-push.
 * However, clients use the send-tab keys for end-to-end encryption.
 */
export class SendTab {
    constructor(commands: any, fxAccountsInternal: any);
    _commands: any;
    _fxai: any;
    /**
     * @param {Device[]} to - Device objects (typically returned by fxAccounts.getDevicesList()).
     * @param {Object} tab
     * @param {string} tab.url
     * @param {string} tab.title
     * @returns A report object, in the shape of
     *          {succeded: [Device], error: [{device: Device, error: Exception}]}
     */
    send(to: Device[], tab: {
        url: string;
        title: string;
    }): Promise<{
        succeeded: any[];
        failed: any[];
    }>;
    isDeviceCompatible(device: any): any;
    handle(senderID: any, { encrypted }: {
        encrypted: any;
    }, reason: any): Promise<{
        title: any;
        uri: any;
    }>;
    _encrypt(bytes: any, device: any): Promise<any>;
    _getPersistedSendTabKeys(): Promise<any>;
    _decrypt(ciphertext: any): Promise<any>;
    _generateAndPersistSendTabKeys(): Promise<{
        publicKey: any;
        privateKey: any;
        authSecret: any;
    }>;
    _getPersistedEncryptedSendTabKey(): Promise<any>;
    _generateAndPersistEncryptedSendTabKey(): Promise<string>;
    getEncryptedSendTabKeys(): Promise<any>;
}
