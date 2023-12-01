export class WebChannelParent extends JSWindowActorParent {
    receiveMessage(msg: any): void;
    /**
     *
     * @param id {String}
     *        The WebChannel id to include in the message
     * @param sendingContext {Object}
     *        Message sending context
     * @param [errorMsg] {String}
     *        Error message
     * @private
     */
    private _sendErrorEventToContent;
}
