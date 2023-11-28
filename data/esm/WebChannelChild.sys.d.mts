export class WebChannelChild {
    handleEvent(event: any): void;
    receiveMessage(msg: any): void;
    _getWhitelistedPrincipals(): any;
    _onMessageToChrome(e: any): void;
    _onMessageToContent(msg: any): void;
}
