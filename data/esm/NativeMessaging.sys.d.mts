export const NativeApp: {
    new (context: BaseContext, application: string): {
        context: BaseContext;
        name: string;
        proc: any;
        readPromise: any;
        sendQueue: any[];
        writePromise: any;
        cleanupStarted: boolean;
        startupPromise: any;
        /**
         * Open a connection to a native messaging host.
         *
         * @param {number} portId A unique internal ID that identifies the port.
         * @param {NativeMessenger} port Parent NativeMessenger used to send messages.
         * @returns {ParentPort}
         */
        onConnect(portId: number, port: NativeMessenger): ParentPort;
        readonly _isDisconnected: boolean;
        _startRead(): void;
        _startWrite(): void;
        _startStderrRead(): void;
        send(holder: any): void;
        _cleanup(err: any, fromExtension?: boolean): Promise<void>;
        close(): void;
        sendMessage(holder: any): any;
    };
    /**
     * @param {BaseContext} context The scope from where `message` originates.
     * @param {*} message A message from the extension, meant for a native app.
     * @returns {ArrayBuffer} An ArrayBuffer that can be sent to the native app.
     */
    encodeMessage(context: BaseContext, message: any): ArrayBuffer;
};
