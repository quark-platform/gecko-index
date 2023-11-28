/**
 * The SubDialog resize callback.
 * @callback SubDialog~resizeCallback
 * @param {DOMNode} title - The title element of the dialog.
 * @param {xul:browser} frame - The browser frame of the dialog.
 */
/**
 * SubDialog constructor creates a new subdialog from a template and appends
 * it to the parentElement.
 * @param {DOMNode} template - The template is copied to create a new dialog.
 * @param {DOMNode} parentElement - New dialog is appended onto parentElement.
 * @param {String}  id - A unique identifier for the dialog.
 * @param {Object}  dialogOptions - Dialog options object.
 * @param {String[]} [dialogOptions.styleSheets] - An array of URLs to additional
 * stylesheets to inject into the frame.
 * @param {Boolean} [consumeOutsideClicks] - Whether to close the dialog when
 * its background overlay is clicked.
 * @param {SubDialog~resizeCallback} [resizeCallback] - Function to be called on
 * dialog resize.
 */
export function SubDialog({ template, parentElement, id, dialogOptions: { styleSheets, consumeOutsideClicks, resizeCallback, }, }: DOMNode): void;
export class SubDialog {
    /**
     * The SubDialog resize callback.
     * @callback SubDialog~resizeCallback
     * @param {DOMNode} title - The title element of the dialog.
     * @param {xul:browser} frame - The browser frame of the dialog.
     */
    /**
     * SubDialog constructor creates a new subdialog from a template and appends
     * it to the parentElement.
     * @param {DOMNode} template - The template is copied to create a new dialog.
     * @param {DOMNode} parentElement - New dialog is appended onto parentElement.
     * @param {String}  id - A unique identifier for the dialog.
     * @param {Object}  dialogOptions - Dialog options object.
     * @param {String[]} [dialogOptions.styleSheets] - An array of URLs to additional
     * stylesheets to inject into the frame.
     * @param {Boolean} [consumeOutsideClicks] - Whether to close the dialog when
     * its background overlay is clicked.
     * @param {SubDialog~resizeCallback} [resizeCallback] - Function to be called on
     * dialog resize.
     */
    constructor({ template, parentElement, id, dialogOptions: { styleSheets, consumeOutsideClicks, resizeCallback, }, }: DOMNode);
    _id: null;
    _injectedStyleSheets: string[];
    _consumeOutsideClicks: DOMNode;
    _resizeCallback: DOMNode;
    _overlay: null;
    _box: null;
    _titleBar: any;
    _titleElement: null;
    _closeButton: null;
    _frame: null;
    _frameCreated: null;
    _closingCallback: null;
    _closingEvent: null;
    _isClosing: boolean;
    _openedURL: null;
    _resizeObserver: null;
    _template: null;
    get frameContentWindow(): any;
    get _window(): any;
    updateTitle(aEvent: any): void;
    injectStylesheet(aStylesheetURL: any): void;
    open(aURL: any, { features, closingCallback, closedCallback, sizeTo }?: {
        features: any;
        closingCallback: any;
        closedCallback: any;
        sizeTo: any;
    }, ...aParams: any[]): Promise<void>;
    _dialogReady: Promise<any>;
    _resolveDialogReady: (value: any) => void;
    _closedCallback: (...args: any[]) => void;
    /**
     * Close the dialog and mark it as aborted.
     */
    abort(): void;
    close(aEvent?: any): void;
    _closingPromise: Promise<any>;
    _resolveClosePromise: (value: any) => void;
    handleEvent(aEvent: any): void;
    _onUnload(aEvent: any): void;
    _onContentLoaded(aEvent: any): void;
    _onLoad(aEvent: any): Promise<void>;
    resizeDialog(): Promise<void>;
    _onResize: any;
    resizeVertically(): void;
    /**
     * Helper for converting em to px because an em value from the dialog window could
     * translate to something else in the host window, as font sizes may vary.
     *
     * @param {String} val
     *                 A CSS length value.
     * @return {String} The converted CSS length value, or the original value if
     *                  no conversion took place.
     */
    _emToPx(val: string): string;
    _onDialogClosing(aEvent: any): void;
    _onKeyDown(aEvent: any): void;
    _onParentWinFocus(aEvent: any): void;
    /**
     * Setup dialog event listeners.
     * @param {Boolean} [includeLoad] - Whether to register load/unload listeners.
     */
    _addDialogEventListeners(includeLoad?: boolean): void;
    /**
     * Remove dialog event listeners.
     * @param {Boolean} [includeLoad] - Whether to remove load/unload listeners.
     */
    _removeDialogEventListeners(includeLoad?: boolean): void;
    /**
     * Focus the dialog content.
     * If the embedded document defines a custom focus handler it will be called.
     * Otherwise we will focus the first focusable element in the content window.
     * @param {boolean} [isInitialFocus] - Whether the dialog is focused for the
     * first time after opening.
     */
    focus(isInitialFocus?: boolean): void;
    _trapFocus(): void;
    _untrapFocus(): void;
}
/**
 * Manages multiple SubDialogs in a dialog stack element.
 */
export class SubDialogManager {
    /**
     * @param {Object} options - Dialog manager options.
     * @param {DOMNode} options.dialogStack - Container element for all dialogs
     * this instance manages.
     * @param {DOMNode} options.dialogTemplate - Element to use as template for
     * constructing new dialogs.
     * @param {Number} [options.orderType] - Whether dialogs should be ordered as
     * a stack or a queue.
     * @param {Boolean} [options.allowDuplicateDialogs] - Whether to allow opening
     * duplicate dialogs (same URI) at the same time. If disabled, opening a
     * dialog with the same URI as an existing dialog will be a no-op.
     * @param {Object} options.dialogOptions - Options passed to every
     * SubDialog instance.
     * @see {@link SubDialog} for a list of dialog options.
     */
    constructor({ dialogStack, dialogTemplate, orderType, allowDuplicateDialogs, dialogOptions, }: {
        dialogStack: DOMNode;
        dialogTemplate: DOMNode;
        orderType?: number;
        allowDuplicateDialogs?: boolean;
        dialogOptions: any;
    });
    /**
     * New dialogs are pushed to the end of the _dialogs array.
     * Depending on the orderType either the last element (stack) or the first
     * element (queue) in the array will be the top and visible.
     * @type {SubDialog[]}
     */
    _dialogs: SubDialog[];
    _dialogStack: DOMNode;
    _dialogTemplate: DOMNode;
    _topLevelPrevActiveElement: any;
    _orderType: number;
    _allowDuplicateDialogs: boolean;
    _dialogOptions: any;
    _preloadDialog: any;
    /**
     * Get the dialog which is currently on top. This depends on whether the
     * dialogs are in a stack or a queue.
     */
    get _topDialog(): SubDialog;
    open(aURL: any, { features, closingCallback, closedCallback, allowDuplicateDialogs, sizeTo, hideContent, }?: {
        features: any;
        closingCallback: any;
        closedCallback: any;
        allowDuplicateDialogs: any;
        sizeTo: any;
        hideContent: any;
    }, ...aParams: any[]): any;
    close(): void;
    /**
     * Hides the dialog stack for a specific browser, without actually destroying
     * frames for stuff within it.
     *
     * @param aBrowser - The browser associated with the tab dialog.
     */
    hideDialog(aBrowser: any): void;
    /**
     * Abort open dialogs.
     * @param {function} [filterFn] - Function which should return true for
     * dialogs that should be aborted and false for dialogs that should remain
     * open. Defaults to aborting all dialogs.
     */
    abortDialogs(filterFn?: Function): void;
    get hasDialogs(): boolean;
    get dialogs(): SubDialog[];
    focusTopDialog(): void;
    handleEvent(aEvent: any): void;
    _onDialogOpen(dialog: any): void;
    _onDialogClose(dialog: any): void;
    _ensureStackEventListeners(): void;
    _removeStackEventListeners(): void;
}
export namespace SubDialogManager {
    let ORDER_STACK: number;
    let ORDER_QUEUE: number;
    let _nextDialogID: number;
}
