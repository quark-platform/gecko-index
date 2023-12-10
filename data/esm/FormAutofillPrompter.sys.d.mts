/**
 * `AutofillDoorhanger` provides a base for both address capture and credit card
 * capture doorhanger notifications. It handles the UI generation and logic
 * related to displaying the doorhanger,
 *
 * The UI data sourced from the `CONTENT` variable is used for rendering. Derived classes
 * should override the `render()` method to customize the layout.
 */
export class AutofillDoorhanger {
    /**
     * Constructs an instance of the `AutofillDoorhanger` class.
     *
     * @param {object} browser   The browser where the doorhanger will be displayed.
     * @param {object} oldRecord The old record that can be merged with the new record
     * @param {object} newRecord The new record submitted by users
     */
    static headerClass: string;
    static descriptionClass: string;
    static contentClass: string;
    static menuButtonId: string;
    static preferenceURL: any;
    static learnMoreURL: any;
    static header(panel: any): any;
    static description(panel: any): any;
    static content(panel: any): any;
    static menuButton(panel: any): any;
    static preferenceButton(panel: any): any;
    static learnMoreButton(panel: any): any;
    /**
     * Create an image element for notification anchor if it doesn't already exist.
     *
     * @static
     * @param {Document} doc - The document object where the anchor element should be created or modified.
     * @param {object} anchor - An object containing the attributes for the anchor element.
     * @param {string} anchor.id - The ID to assign to the anchor element.
     * @param {string} anchor.URL - The image URL to set for the anchor element.
     * @param {string} anchor.tooltiptext - The tooltip text to set for the anchor element.
     */
    static setAnchor(doc: Document, anchor: {
        id: string;
        URL: string;
        tooltiptext: string;
    }): void;
    /**
     * Generate the main action and secondary actions from content parameters and
     * promise resolve.
     *
     * @private
     * @param  {object} mainActionParams
     *         Parameters for main action.
     * @param  {Array<object>} secondaryActionParams
     *         Array of the parameters for secondary actions.
     * @param  {Function} resolve Should be called in action callback.
     * @returns {Array<object>}
                Return the mainAction and secondary actions in an array for showing doorhanger
     */
    private static createActions;
    constructor(browser: any, oldRecord: any, newRecord: any);
    browser: any;
    oldRecord: any;
    newRecord: any;
    get ui(): any;
    get notificationId(): string;
    get panel(): any;
    get doc(): any;
    get chromeWin(): any;
    get header(): any;
    get description(): any;
    get content(): any;
    get menuButton(): any;
    get preferenceURL(): any;
    get learnMoreURL(): any;
    onMenuItemClick(evt: any): void;
    render(): void;
    renderHeader(): void;
    renderDescription(): void;
    show(resolve: any, callback?: any): any;
}
export class AddressSaveDoorhanger extends AutofillDoorhanger {
    static preferenceURL: string;
    static learnMoreURL: string;
    static editButtonId: string;
    static editButton(panel: any): any;
    constructor(browser: any, oldRecord: any, newRecord: any, editAddressCb: any);
    get editButton(): any;
    renderContent(): void;
    #private;
}
/**
 * Address Update doorhanger and Address Save doorhanger have the same implementation.
 * The only difference is UI.
 */
export class AddressUpdateDoorhanger extends AddressSaveDoorhanger {
}
export class AddressEditDoorhanger extends AutofillDoorhanger {
    static "__#1532563@#getInputIdMatchRegexp"(): RegExp;
    static getInputId(fieldName: any): string;
    constructor(browser: any, record: any);
    set country(c: any);
    get country(): any;
    get layout(): any;
    renderContent(): void;
    getRecord(): {};
    #private;
}
export namespace FormAutofillPrompter {
    /**
     * Append the link label element to the popupnotificationcontent.
     *
     * @param  {XULElement} content
     *         popupnotificationcontent
     * @param  {string} message
     *         The localized string for link title.
     * @param  {string} link
     *         Makes it possible to open and highlight a section in preferences
     */
    function _appendPrivacyPanelLink(content: XULElement, message: string, link: string): void;
    /**
     * Append the description section to the popupnotificationcontent.
     *
     * @param  {XULElement} content
     *         popupnotificationcontent
     * @param  {string} descriptionLabel
     *         The label showing above description.
     * @param  {string} descriptionIcon
     *         The src of description icon.
     * @param  {string} descriptionId
     *         The id of description
     */
    function _appendDescription(content: XULElement, descriptionLabel: string, descriptionIcon: string, descriptionId: string): void;
    function _updateDescription(content: any, descriptionId: any, description: any): void;
    function _getNotificationElm(browser: any, id: any): any;
    function _addCheckboxListener(browser: any, { notificationId, options }: {
        notificationId: any;
        options: any;
    }): void;
    function _removeCheckboxListener(browser: any, { notificationId, options }: {
        notificationId: any;
        options: any;
    }): void;
    function promptToSaveCreditCard(browser: any, storage: any, record: any, flowId: any): Promise<void>;
    function _updateStorageAfterInteractWithPrompt(state: any, storage: any, record: any, guid?: any): Promise<void>;
    function _getUpdatedCCIcon(network: any): any;
    /**
     * Show different types of doorhanger by leveraging PopupNotifications.
     *
     * @param {XULElement} browser Target browser element for showing doorhanger.
     * @param {string} type The type of the doorhanger. There will have first time use/update/credit card.
     * @param {string} description The message that provides more information on doorhanger.
     * @param {string} flowId guid used to correlate events relating to the same form
     * @param {object} [options = {}] a list of options for this method
     * @param {string} options.descriptionIcon The icon for descriotion
     * @returns {Promise} Resolved with action type when action callback is triggered.
     */
    function _showCreditCardCaptureDoorhanger(browser: XULElement, type: string, description: string, flowId: string, { descriptionIcon }?: {
        descriptionIcon: string;
    }): Promise<any>;
    /**
     * Show save or update address doorhanger
     *
     * @param {Element<browser>} browser  Browser to show the save/update address prompt
     * @param {object} storage Address storage
     * @param {string} flowId Unique GUID to record a series of the same user action
     * @param {object} options
     * @param {object} [options.oldRecord] Record to be merged
     * @param {object} [options.newRecord] Record with more information
     */
    function promptToSaveAddress(browser: any, storage: any, flowId: string, { oldRecord, newRecord }: {
        oldRecord?: any;
        newRecord?: any;
    }): Promise<void>;
    /**
     * Show save address doorhanger or update address doorhanger.
     *
     * @param {XULElement} browser Target browser element for showing doorhanger.
     * @param {string} flowId guid used to correlate events relating to the same form
     * @param {object} [options = {}] a list of options for this method
     * @param {object} options.oldRecord the saved address record that can be merged with
     *                                   the new address record
     * @param {object} options.newRecord The new address record users just submitted
     * @returns {Promise} Resolved with action type when action callback is triggered.
     */
    function _showAddressCaptureDoorhanger(browser: XULElement, flowId: string, { oldRecord, newRecord }?: {
        oldRecord: any;
        newRecord: any;
    }): Promise<any>;
    function _showAddressEditDoorhanger(browser: any, flowId: any, record: any): Promise<{
        state: any;
        editedRecord: any;
    }>;
}
