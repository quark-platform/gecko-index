export namespace FormLikeFactory {
    let _propsFromForm: string[];
    /**
     * Create a FormLike object from a <form>.
     *
     * @param {HTMLFormElement} aForm
     * @return {FormLike}
     * @throws Error if aForm isn't an HTMLFormElement
     */
    function createFromForm(aForm: HTMLFormElement): FormLike;
    /**
     * Create a FormLike object from an <input>/<select> in a document.
     *
     * If the field is in a <form>, construct the FormLike from the form.
     * Otherwise, create a FormLike with a rootElement (wrapper) according to
     * heuristics. Currently all <input>/<select> not in a <form> are one FormLike
     * but this shouldn't be relied upon as the heuristics may change to detect
     * multiple "forms" (e.g. registration and login) on one page with a <form>.
     *
     * Note that two FormLikes created from the same field won't return the same FormLike object.
     * Use the `rootElement` property on the FormLike as a key instead.
     *
     * @param {HTMLInputElement|HTMLSelectElement} aField - an <input> or <select> field in a document
     * @return {FormLike}
     * @throws Error if aField isn't a password or username field in a document
     */
    function createFromField(aField: HTMLInputElement | HTMLSelectElement): FormLike;
    /**
     * Find the closest <form> if any when aField is inside a ShadowRoot.
     *
     * @param {HTMLInputElement} aField - a password or username field in a document
     * @return {HTMLFormElement|null}
     */
    function closestFormIgnoringShadowRoots(aField: HTMLInputElement): HTMLFormElement;
    /**
     * Determine the Element that encapsulates the related fields. For example, if
     * a page contains a login form and a checkout form which are "submitted"
     * separately, and the username field is passed in, ideally this would return
     * an ancestor Element of the username and password fields which doesn't
     * include any of the checkout fields.
     *
     * @param {HTMLInputElement|HTMLSelectElement} aField - a field in a document
     * @return {HTMLElement} - the root element surrounding related fields
     */
    function findRootForField(aField: HTMLInputElement | HTMLSelectElement): HTMLElement;
    /**
     * Add a `toJSON` property to a FormLike so logging which ends up going
     * through dump doesn't include usless garbage from DOM objects.
     */
    function _addToJSONProperty(aFormLike: any): void;
}
