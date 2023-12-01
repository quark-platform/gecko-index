export namespace LoginFormFactory {
    let _loginFormsByRootElement: WeakMap<any, any>;
    let _loginFormRootElementsByDocument: WeakMap<WeakKey, any>;
    /**
     * Create a LoginForm object from a <form>.
     *
     * @param {HTMLFormElement} aForm
     * @return {LoginForm}
     * @throws Error if aForm isn't an HTMLFormElement
     */
    function createFromForm(aForm: HTMLFormElement): LoginForm;
    /**
     * Create a LoginForm object from a password or username field.
     *
     * If the field is in a <form>, construct the LoginForm from the form.
     * Otherwise, create a LoginForm with a rootElement (wrapper) according to
     * heuristics. Currently all <input> not in a <form> are one LoginForm but this
     * shouldn't be relied upon as the heuristics may change to detect multiple
     * "forms" (e.g. registration and login) on one page with a <form>.
     *
     * Note that two LoginForms created from the same field won't return the same LoginForm object.
     * Use the `rootElement` property on the LoginForm as a key instead.
     *
     * @param {HTMLInputElement} aField - a password or username field in a document
     * @return {LoginForm}
     * @throws Error if aField isn't a password or username field in a document
     */
    function createFromField(aField: HTMLInputElement): LoginForm;
    function getRootElementsWeakSetForDocument(aDocument: any): any;
    function getForRootElement(aRootElement: any): any;
    function setForRootElement(aRootElement: any, aLoginForm: any): WeakMap<any, any>;
}
