export namespace WebSocketHandshake {
    export { upgrade };
}
/** Upgrade an existing HTTP request from httpd.js to WebSocket. */
declare function upgrade(request: any, response: any): Promise<any>;
export {};
