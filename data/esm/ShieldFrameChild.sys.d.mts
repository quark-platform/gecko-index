/**
 * Listen for DOM events bubbling up from the about:studies page, and perform
 * privileged actions in response to them. If we need to do anything that the
 * content process can't handle (such as reading IndexedDB), we send a message
 * to the parent process and handle it there.
 */
export class ShieldFrameChild extends JSWindowActorChild {
    handleEvent(event: any): Promise<void>;
    receiveMessage(msg: any): void;
    /**
     * Trigger an event to communicate with the unprivileged about:studies page.
     * @param {String} type The type of event to trigger.
     * @param {Object} detail The data to pass along to the event.
     */
    triggerPageCallback(type: string, detail: any): void;
}
