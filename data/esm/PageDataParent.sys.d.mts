/**
 * Receives messages from PageDataChild and passes them to the PageData service.
 */
export class PageDataParent {
    /**
     * Starts data collection in the child process. Returns a promise that
     * resolves to the page data or null if the page is closed before data
     * collection completes.
     *
     * @returns {Promise<PageData|null>}
     */
    collectPageData(): Promise<PageData | null>;
    /**
     * Called when the page is destroyed.
     */
    didDestroy(): void;
    /**
     * Called when a message is received from the content process.
     *
     * @param {ReceiveMessageArgument} msg
     *   The received message.
     */
    receiveMessage(msg: ReceiveMessageArgument): void;
    #private;
}
