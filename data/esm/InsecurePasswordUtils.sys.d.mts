export namespace InsecurePasswordUtils {
    let _formRootsWarned: WeakMap<WeakKey, any>;
    /**
     * Gets the ID of the inner window of this DOM window.
     *
     * @param nsIDOMWindow window
     * @return integer
     *         Inner ID for the given window.
     */
    function _getInnerWindowId(window: any): any;
    function _sendWebConsoleMessage(messageTag: any, domDoc: any): void;
    /**
     * Gets the security state of the passed form.
     *
     * @param {FormLike} aForm A form-like object. @See {FormLikeFactory}
     *
     * @returns {Object} An object with the following boolean values:
     *  isFormSubmitHTTP: if the submit action is an http:// URL
     *  isFormSubmitSecure: if the submit action URL is secure,
     *    either because it is HTTPS or because its origin is considered trustworthy
     */
    function _checkFormSecurity(aForm: FormLike): any;
    function _isPrincipalForLocalIPAddress(aPrincipal: any): any;
    /**s
     * Checks if there are insecure password fields present on the form's document
     * i.e. passwords inside forms with http action, inside iframes with http src,
     * or on insecure web pages.
     *
     * @param {FormLike} aForm A form-like object. @See {LoginFormFactory}
     * @return {boolean} whether the form is secure
     */
    function isFormSecure(aForm: FormLike): boolean;
    /**
     * Report insecure password fields in a form to the web console to warn developers.
     *
     * @param {FormLike} aForm A form-like object. @See {FormLikeFactory}
     */
    function reportInsecurePasswords(aForm: FormLike): void;
}
