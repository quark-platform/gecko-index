export class FormScenarios {
    /**
     * Caches the scores when running the SignUpFormRuleset against a form
     */
    static "__#502043@#cachedSignUpFormScore": WeakMap<object, any>;
    /**
     * Detect usage scenarios of the form.
     *
     * @param {object} options named options
     * @param {HTMLInputElement} [options.input] where current focus is
     * @param {FormLike} [options.form]
     *
     * @returns {Array<string>} detected scenario names
     */
    static detect({ input, form }: {
        input?: HTMLInputElement;
        form?: FormLike;
    }): Array<string>;
    /**
     * Determine if the form is a sign-up form.
     * This is done by running the rules of the Fathom SignUpFormRuleset against the form and calucating a score between 0 and 1.
     * It's considered a sign-up form, if the score is higher than the confidence threshold (default=0.75)
     *
     * @param {HTMLFormElement} formElement
     * @returns {boolean} returns true if the calculcated score is higher than the confidenceThreshold
     */
    static "__#502043@#isProbablyASignUpForm"(formElement: HTMLFormElement): boolean;
}
