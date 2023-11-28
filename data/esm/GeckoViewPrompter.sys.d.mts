export class GeckoViewPrompter {
    constructor(aParent: any);
    id: any;
    _domWin: any;
    _innerWindowId: any;
    get domWin(): any;
    get prompterActor(): any;
    _changeModalState(aEntering: any): boolean;
    _dismissUi(): void;
    accept(aInputText?: any): void;
    dismiss(): void;
    getPromptType(): any;
    getPromptText(): any;
    getInputText(): any;
    setInputText(aInput: any): void;
    inputText: any;
    /**
     * Shows a native prompt, and then spins the event loop for this thread while we wait
     * for a response
     */
    showPrompt(aMsg: any): any;
    checkInnerWindow(): boolean;
    asyncShowPromptPromise(aMsg: any): Promise<any>;
    asyncShowPrompt(aMsg: any, aCallback: any): Promise<void>;
    message: any;
    callback: any;
    update(aMsg: any): void;
}
