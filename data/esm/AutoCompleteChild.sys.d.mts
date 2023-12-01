export class AutoCompleteChild extends JSWindowActorChild {
    static addPopupStateListener(listener: any): void;
    static removePopupStateListener(listener: any): void;
    _input: any;
    _popupOpen: boolean;
    receiveMessage(message: any): void;
    set selectedIndex(index: any);
    get selectedIndex(): any;
    notifyListeners(messageName: any, data: any): void;
    get input(): any;
    get popupOpen(): boolean;
    openAutocompletePopup(input: any, element: any): void;
    closePopup(): void;
    invalidate(): void;
    selectBy(reverse: any, page: any): void;
    getResultsFromController(inputField: any): any[];
    QueryInterface: MozQueryInterface;
}
