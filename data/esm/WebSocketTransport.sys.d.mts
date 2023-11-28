export function WebSocketTransport(socket: any): void;
export class WebSocketTransport {
    constructor(socket: any);
    active: boolean;
    hooks: any;
    socket: any;
    ready(): void;
    send(object: any): void;
    startBulkSend(): never;
    /**
     * Force closing the active connection and WebSocket.
     */
    close(): void;
    /**
     * Callback for socket on close event,
     * it is used in case websocket was closed by the client.
     */
    onClose(): void;
    /**
     * Callback which is called when we can be sure that websocket is closed.
     */
    onSocketClose(): void;
    handleEvent(event: any): void;
    onMessage({ data }: {
        data: any;
    }): void;
}
