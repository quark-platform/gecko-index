export class PromptParent extends JSWindowActorParent {
    didDestroy(): void;
    /**
     * Registers a new Prompt to be tracked for a particular BrowsingContext.
     * We need to track a Prompt so that we can, for example, force-close the
     * TabModalPrompt if the originating subframe or tab unloads or crashes.
     *
     * @param {Object} tabModalPrompt
     *        The TabModalPrompt that will be shown to the user.
     * @param {string} id
     *        A unique ID to differentiate multiple Prompts coming from the same
     *        BrowsingContext.
     * @return {Promise}
     * @resolves {Object}
     *           Resolves with the arguments returned from the TabModalPrompt when it
     *           is dismissed.
     */
    registerPrompt(tabModalPrompt: any, id: string): Promise<any>;
    /**
     * Removes a Prompt for a BrowsingContext with a particular ID from the registry.
     * This needs to be done to avoid leaking <xul:browser>'s.
     *
     * @param {string} id
     *        A unique ID to differentiate multiple Prompts coming from the same
     *        BrowsingContext.
     */
    unregisterPrompt(id: string): void;
    /**
     * Programmatically closes all Prompts for the current BrowsingContext.
     */
    forceClosePrompts(): void;
    isAboutAddonsOptionsPage(browsingContext: any): boolean;
    receiveMessage(message: any): Promise<any>;
    /**
     * Opens a TabModalPrompt for a BrowsingContext, and puts the associated browser
     * in the modal state until the TabModalPrompt is closed.
     *
     * @param {Object} args
     *        The arguments passed up from the BrowsingContext to be passed directly
     *        to the TabModalPrompt.
     * @param {string} id
     *        A unique ID to differentiate multiple Prompts coming from the same
     *        BrowsingContext.
     * @return {Promise}
     *         Resolves when the TabModalPrompt is dismissed.
     * @resolves {Object}
     *           The arguments returned from the TabModalPrompt.
     */
    openContentPrompt(args: any, id: string): Promise<any>;
    /**
     * Opens either a window prompt or TabDialogBox at the content or tab level
     * for a BrowsingContext, and puts the associated browser in the modal state
     * until the prompt is closed.
     *
     * @param {Object} args
     *        The arguments passed up from the BrowsingContext to be passed
     *        directly to the modal prompt.
     * @return {Promise}
     *         Resolves when the modal prompt is dismissed.
     * @resolves {Object}
     *           The arguments returned from the modal prompt.
     */
    openPromptWithTabDialogBox(args: any): Promise<any>;
    getClosingEventDetail(args: any): {
        wasPermitUnload: any;
        areLeaving: any;
        value: any;
    };
    getOpenEventDetail(args: any): {
        inPermitUnload: any;
        promptPrincipal: any;
        tabPrompt: boolean;
    };
    /**
     * Set properties on `args` needed by the dialog to allow tab switching for the
     * page that opened the prompt.
     *
     * @param {TabDialogBox}  dialogBox
     *        The dialog to show the tab-switch checkbox for.
     * @param {Object}  args
     *        The `args` object to set tab switching permission info on.
     */
    addTabSwitchCheckboxToArgs(dialogBox: TabDialogBox, args: any): void;
}
export type Prompt = {
    /**
     *           The resolve function to be called with the data from the Prompt
     *           after the user closes it.
     */
    resolver: Function;
    /**
     *           The TabModalPrompt being shown to the user.
     */
    tabModalPrompt: any;
};
