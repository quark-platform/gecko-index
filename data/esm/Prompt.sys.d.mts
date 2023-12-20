export namespace modal {
    /**
     * Check for already existing modal or tab modal dialogs and
     * return the first one.
     *
     * @param {browser.Context} context
     *     Reference to the browser context to check for existent dialogs.
     *
     * @returns {modal.Dialog}
     *     Returns instance of the Dialog class, or `null` if no modal dialog
     *     is present.
     */
    export function findPrompt(context: browser.Context): {
        curBrowserFn_: any;
        win_: any;
        readonly args: any;
        readonly curBrowser_: any;
        readonly isOpen: boolean;
        readonly isWindowModal: boolean;
        readonly tabModal: any;
        readonly promptType: any;
        readonly ui: any;
        /**
         * For Android, this returns a GeckoViewPrompter, which can be used to control prompts.
         * Otherwise, this returns the ChromeWindow associated with an open dialog window if
         * it is currently attached to the DOM.
         */
        readonly window: any;
        text: any;
        accept(): void;
        dismiss(): void;
        /**
         * Returns text of the prompt.
         *
         * @returns {string | Promise}
         *     Returns string on desktop and Promise on Android.
         */
        getText(): string | Promise<any>;
        /**
         * Returns text of the prompt input.
         *
         * @returns {string}
         *     Returns string on desktop and Promise on Android.
         */
        getInputText(): string;
    };
    export { Dialog };
}
declare class Dialog {
    constructor(curBrowserFn: any, dialog: any);
    curBrowserFn_: any;
    win_: any;
    get args(): any;
    get curBrowser_(): any;
    get isOpen(): boolean;
    get isWindowModal(): boolean;
    get tabModal(): any;
    get promptType(): any;
    get ui(): any;
    /**
     * For Android, this returns a GeckoViewPrompter, which can be used to control prompts.
     * Otherwise, this returns the ChromeWindow associated with an open dialog window if
     * it is currently attached to the DOM.
     */
    get window(): any;
    set text(inputText: any);
    accept(): void;
    dismiss(): void;
    /**
     * Returns text of the prompt.
     *
     * @returns {string | Promise}
     *     Returns string on desktop and Promise on Android.
     */
    getText(): string | Promise<any>;
    /**
     * Returns text of the prompt input.
     *
     * @returns {string}
     *     Returns string on desktop and Promise on Android.
     */
    getInputText(): string;
}
export {};
