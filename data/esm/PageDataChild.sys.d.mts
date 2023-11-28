/**
 * The actor responsible for monitoring a page for page data.
 */
export class PageDataChild {
    /**
     * Called when the actor is created for a new page.
     */
    actorCreated(): void;
    /**
     * Called when the page is destroyed.
     */
    didDestroy(): void;
    /**
     * Called when a message is received from the parent process.
     *
     * @param {ReceiveMessageArgument} msg
     *   The received message.
     *
     * @returns {Promise | undefined}
     *   A promise for the requested data or undefined if no data was requested.
     */
    receiveMessage(msg: ReceiveMessageArgument): Promise<any> | undefined;
    /**
     * DOM event handler.
     *
     * @param {Event} event
     *   The DOM event.
     */
    handleEvent(event: Event): void;
    #private;
}
