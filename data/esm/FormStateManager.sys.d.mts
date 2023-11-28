export class FormStateManager {
    constructor(onSubmit: any, onAutofillCallback: any);
    /**
     * @type {WeakMap} mapping FormLike root HTML elements to FormAutofillHandler objects.
     */
    _formsDetails: WeakMap<any, any>;
    /**
     * @type {object} The object where to store the active items, e.g. element,
     * handler, section, and field detail.
     */
    _activeItems: object;
    onSubmit: any;
    onAutofillCallback: any;
    /**
     * Get the active input's information from cache which is created after page
     * identified.
     *
     * @returns {object | null}
     *          Return the active input's information that cloned from content cache
     *          (or return null if the information is not found in the cache).
     */
    get activeFieldDetail(): any;
    /**
     * Get the active form's information from cache which is created after page
     * identified.
     *
     * @returns {Array<object> | null}
     *          Return target form's information from content cache
     *          (or return null if the information is not found in the cache).
     *
     */
    get activeFormDetails(): any[];
    get activeInput(): any;
    get activeHandler(): any[];
    get activeSection(): any;
    /**
     * Get the form's handler from cache which is created after page identified.
     *
     * @param {HTMLInputElement} element Focused input which triggered profile searching
     * @returns {Array<object> | null}
     *          Return target form's handler from content cache
     *          (or return null if the information is not found in the cache).
     *
     */
    _getFormHandler(element: HTMLInputElement): Array<object> | null;
    identifyAutofillFields(element: any): any;
    updateActiveInput(element: any): void;
    getRecords(formElement: any, handler: any): any;
    didDestroy(): void;
}
export default FormStateManager;
