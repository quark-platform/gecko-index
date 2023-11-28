export class FormAutofillChild {
    constructor(onSubmitCallback: any, onAutofillCallback: any);
    onFocusIn(evt: any): void;
    onSubmit(evt: any): void;
    onSubmitCallback: any;
    onAutofillCallback: any;
    fieldDetailsManager: any;
    _doIdentifyAutofillFields(element: any): void;
    fillFormFields(payload: any): void;
}
export default FormAutofillChild;
