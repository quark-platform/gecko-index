export namespace PromptTestUtils {
    /**
     * Wait for a prompt from nsIPrompt or nsIPromptsService, interact with it and
     * click the specified button to close it.
     * @param {Browser|Window} [parent] - Parent of the prompt. This can be
     * either the parent window or the browser. For tab prompts, if given a
     * window, the currently selected browser in that window will be used.
     * @param {Object} promptOptions - @see waitForPrompt
     * @param {Object} promptActions - @see handlePrompt
     * @returns {Promise} - A promise which resolves once the prompt has been
     * closed.
     */
    function handleNextPrompt(parent?: any, promptOptions: any, promptActions: any): Promise<any>;
    /**
     * Interact with an existing prompt and close it.
     * @param {Dialog} dialog - The dialog instance associated with the prompt.
     * @param {Object} [actions] - Options on how to interact with the
     * prompt and how to close it.
     * @param {Boolean} [actions.checkboxState] - Set the checkbox state.
     * true = checked, false = unchecked.
     * @param {Number} [actions.buttonNumClick] - Which button to click to close
     * the prompt.
     * @param {String} [actions.loginInput] - Input text for the login text field.
     * This field is also used for text input for the "prompt" type.
     * @param {String} [actions.passwordInput] - Input text for the password text
     * field.
     * @returns {Promise} - A promise which resolves once the prompt has been
     * closed.
     */
    function handlePrompt(dialog: Dialog, { checkboxState, buttonNumClick, loginInput, passwordInput, }?: {
        checkboxState?: boolean;
        buttonNumClick?: number;
        loginInput?: string;
        passwordInput?: string;
    }): Promise<any>;
    /**
     * Wait for a prompt from nsIPrompt or nsIPromptsService to open.
     * @param {Browser|Window} [parent] - Parent of the prompt. This can be either
     * the parent window or the browser. For tab prompts, if given a window, the
     * currently selected browser in that window will be used.
     * If not given a parent, the method will return on prompts of any window.
     * @param {Object} attrs - The prompt attributes to filter for.
     * @param {Number} attrs.modalType - Whether the expected prompt is a content, tab or window prompt.
     * nsIPromptService.<MODAL_TYPE_WINDOW|MODAL_TYPE_TAB|MODAL_TYPE_CONTENT>
     * @param {String} [attrs.promptType] - Common dialog type of the prompt to filter for.
     *  @see {@link CommonDialog} for possible prompt types.
     * @returns {Promise<CommonDialog>} - A Promise which resolves with a dialog
     * object once the prompt has loaded.
     */
    function waitForPrompt(parent?: any, { modalType, promptType }?: {
        modalType: number;
        promptType?: string;
    }): Promise<CommonDialog>;
}
