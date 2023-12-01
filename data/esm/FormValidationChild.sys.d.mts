export class FormValidationChild extends JSWindowActorChild {
    _validationMessage: string;
    _element: any;
    handleEvent(aEvent: any): void;
    notifyInvalidSubmit(aInvalidElements: any): void;
    _onInput(aEvent: any): void;
    _onBlur(aEvent: any): void;
    _showPopup(aElement: any): void;
    _hidePopup(): void;
    _isRootDocumentEvent(aEvent: any): boolean;
}
