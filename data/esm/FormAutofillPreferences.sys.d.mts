export function FormAutofillPreferences(): void;
export class FormAutofillPreferences {
    bundle: any;
    /**
     * Create the Form Autofill preference group.
     *
     * @param   {HTMLDocument} document
     * @returns {XULElement}
     */
    init(document: HTMLDocument): XULElement;
    /**
     * Remove event listeners and the preference group.
     */
    uninit(): void;
    /**
     * Create Form Autofill preference group
     *
     * @param  {HTMLDocument} document
     */
    createPreferenceGroup(document: HTMLDocument): void;
    refs: {};
    /**
     * Handle events
     *
     * @param  {DOMEvent} event
     */
    handleEvent(event: DOMEvent): Promise<void>;
    /**
     * Attach event listener
     */
    attachEventListeners(): void;
    /**
     * Remove event listener
     */
    detachEventListeners(): void;
}
