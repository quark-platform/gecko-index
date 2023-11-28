export function CommonDialog(args: any, ui: any): void;
export class CommonDialog {
    constructor(args: any, ui: any);
    args: null;
    ui: null;
    initialFocusPromise: null;
    initialFocusResolver: null;
    hasInputField: boolean;
    numButtons: undefined;
    iconClass: undefined;
    soundID: undefined;
    focusTimer: null;
    /**
     * @param [commonDialogEl] - Dialog element from commonDialog.xhtml,
     * null for TabModalPrompts.
     */
    onLoad(commonDialogEl?: any): Promise<void>;
    delayHelper: any;
    setLabelForNode(aNode: any, aLabel: any): void;
    initTextbox(aName: any, aValue: any): void;
    setButtonsEnabledState(enabled: any): void;
    setDefaultFocus(isInitialLoad: any): void;
    onCheckbox(): void;
    onButton0(): void;
    onButton1(): void;
    onButton2(): void;
    onButton3(): void;
    abortPrompt(): void;
}
