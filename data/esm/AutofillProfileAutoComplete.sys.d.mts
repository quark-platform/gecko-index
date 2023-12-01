export namespace ProfileAutocomplete {
    let QueryInterface: MozQueryInterface;
    let lastProfileAutoCompleteResult: any;
    let lastProfileAutoCompleteFocusedInput: any;
    let _registered: boolean;
    let _factory: any;
    function ensureRegistered(): void;
    function ensureUnregistered(): void;
    function observe(subject: any, topic: any, data: any): Promise<void>;
    let fillRequestId: number;
    function sendFillRequestToFormAutofillParent(input: any, comment: any): Promise<boolean>;
    function _getSelectedIndex(contentWindow: any): any;
    function _fillFromAutocompleteRow(focusedInput: any): Promise<void>;
    function _clearProfilePreview(): void;
    function _previewSelectedProfile(selectedIndex: any): void;
}
