export class FormValidationParent extends JSWindowActorParent {
    static hasOpenPopups(): boolean;
    _panel: any;
    _obs: PopupShownObserver;
    uninit(): void;
    hidePopup(): void;
    receiveMessage(aMessage: any): void;
    handleEvent(aEvent: any): void;
    _onPopupHidden(aEvent: any): void;
    _showPopup(aBrowser: any, aPanelData: any): void;
    _hidePopup(): void;
    _getAndMaybeCreatePanel(): any;
}
declare class PopupShownObserver {
    constructor(browsingContext: any);
    _weakContext: any;
    observe(subject: any, topic: any, data: any): void;
    QueryInterface: any;
}
export {};
