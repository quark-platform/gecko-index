/**
 * Helper dedicated to detect and interact with browser dialogs such as `alert`,
 * `confirm` etc. The current implementation only supports tabmodal dialogs,
 * not full window dialogs.
 *
 * Emits "dialog-loaded" when a javascript dialog is opened for the current
 * browser.
 *
 * @param {BrowserElement} browser
 */
export class DialogHandler {
    constructor(browser: any);
    _dialog: any;
    _browser: any;
    _onCommonDialogLoaded(dialogWindow: any): void;
    destructor(): void;
    _pageTarget: any;
    handleJavaScriptDialog({ accept, promptText }: {
        accept: any;
        promptText: any;
    }): Promise<void>;
    _getDialogType(): string;
}
