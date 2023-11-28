/**
 * The PromptListener listens to the DialogObserver events.
 *
 * Example:
 * ```
 * const listener = new PromptListener();
 * listener.on("opened", onPromptOpened);
 * listener.startListening();
 *
 * const onPromptOpened = (eventName, data = {}) => {
 *   const { contentBrowser, prompt } = data;
 *   ...
 * };
 * ```
 *
 * @fires message
 *    The PromptListener emits "opened" events,
 *    with the following object as payload:
 *      - {XULBrowser} contentBrowser
 *            The <xul:browser> which hold the <var>prompt</var>.
 *      - {modal.Dialog} prompt
 *            Returns instance of the Dialog class.
 *
 *    The PromptListener emits "closed" events,
 *    with the following object as payload:
 *      - {XULBrowser} contentBrowser
 *            The <xul:browser> which is the target of the event.
 *      - {object} detail
 *        {boolean=} detail.accepted
 *            Returns true if a user prompt was accepted
 *            and false if it was dismissed.
 *        {string=} detail.userText
 *            The user text specified in a prompt.
 */
export class PromptListener {
    constructor(curBrowserFn: any);
    destroy(): void;
    /**
     * Waits for the prompt to be closed.
     *
     * @returns {Promise}
     *    Promise that resolves when the prompt is closed.
     */
    dialogClosed(): Promise<any>;
    /**
     * Handles `DOMModalDialogClosed` events.
     */
    handleEvent(event: any): void;
    /**
     * Observes the following notifications:
     * `common-dialog-loaded` - when a modal dialog loaded on desktop,
     * `domwindowopened` - when a new chrome window opened,
     * `geckoview-prompt-show` - when a modal dialog opened on Android.
     */
    observe(subject: any, topic: any): void;
    startListening(): void;
    stopListening(): void;
    #private;
}
