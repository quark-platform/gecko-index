export class FormAutofillChild {
    /**
     * Creates an instance of FormAutofillChild.
     *
     * @param {object} callbacks - An object containing callback functions.
     * @param {object} callbacks.address - Callbacks related to addresses.
     * @param {Function} callbacks.address.autofill - Function called to autofill address fields.
     * @param {Function} callbacks.address.submit - Function called on address form submission.
     * @param {object} callbacks.creditCard - Callbacks related to credit cards.
     * @param {Function} callbacks.creditCard.autofill - Function called to autofill credit card fields.
     * @param {Function} callbacks.creditCard.submit - Function called on credit card form submission.
     */
    constructor(callbacks: {
        address: {
            autofill: Function;
            submit: Function;
        };
        creditCard: {
            autofill: Function;
            submit: Function;
        };
    });
    onFocusIn(evt: any): void;
    onSubmit(evt: any): void;
    callbacks: {
        address: {
            autofill: Function;
            submit: Function;
        };
        creditCard: {
            autofill: Function;
            submit: Function;
        };
    };
    fieldDetailsManager: any;
    _doIdentifyAutofillFields(element: any): void;
    transformToFieldNamesWithValues(details: any): any;
    fillFormFields(payload: any): void;
}
export default FormAutofillChild;
