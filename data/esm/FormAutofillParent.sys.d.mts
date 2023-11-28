export namespace FormAutofillStatus {
    let _initialized: boolean;
    let _active: any;
    /**
     * Initializes observers and registers the message handler.
     */
    function init(): void;
    /**
     * Uninitializes FormAutofillStatus. This is for testing only.
     *
     * @private
     */
    function uninit(): void;
    const formAutofillStorage: any;
    /**
     * Broadcast the status to frames when the form autofill status changes.
     */
    function onStatusChanged(): void;
    /**
     * Query preference and storage status to determine the overall status of the
     * form autofill feature.
     *
     * @returns {boolean} whether form autofill is active (enabled and has data)
     */
    function computeStatus(): boolean;
    /**
     * Update the status and trigger onStatusChanged, if necessary.
     */
    function updateStatus(): void;
    function updateSavedFieldNames(): Promise<void>;
    function injectElements(doc: any): void;
    function onOpenWindow(xulWindow: any): void;
    function onCloseWindow(): void;
    function observe(subject: any, topic: any, data: any): Promise<void>;
}
export class FormAutofillParent {
    static addMessageObserver(observer: any): void;
    static removeMessageObserver(observer: any): void;
    /**
     * Get the records from profile store and return results back to content
     * process. It will decrypt the credit card number and append
     * "cc-number-decrypted" to each record if OSKeyStore isn't set.
     *
     * This is static as a unit test calls this.
     *
     * @private
     * @param  {object} data
     * @param  {string} data.collectionName
     *         The name used to specify which collection to retrieve records.
     * @param  {string} data.searchString
     *         The typed string for filtering out the matched records.
     * @param  {string} data.info
     *         The input autocomplete property's information.
     */
    private static _getRecords;
    /**
     * Handles the message coming from FormAutofillContent.
     *
     * @param   {object} message
     * @param   {string} message.name The name of the message.
     * @param   {object} message.data The data of the message.
     */
    receiveMessage({ name, data }: {
        name: string;
        data: object;
    }): Promise<any>;
    get formOrigin(): any;
    getRootBrowser(): any;
    notifyMessageObservers(callbackName: any, data: any): void;
    _onAddressSubmit(address: any, browser: any): Promise<false | (() => Promise<void>)>;
    _onCreditCardSubmit(creditCard: any, browser: any): Promise<false | (() => Promise<void>)>;
    _onFormSubmit(data: any): Promise<void>;
    #private;
}
