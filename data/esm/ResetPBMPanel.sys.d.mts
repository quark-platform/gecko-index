export namespace ResetPBMPanel {
    let _widgetConfig: any;
    /**
     * Initialize the widget code depending on pref state.
     */
    function init(): void;
    /**
     * Called when the reset pbm panelview is showing as the result of clicking
     * the toolbar button.
     */
    function onViewShowing(event: any): Promise<void>;
    /**
     * Handles the confirmation panel cancel button.
     * @param {MozButton} button - Cancel button that triggered the action.
     */
    function onCancel(button: MozButton): void;
    /**
     * Handles the confirmation panel confirm button which triggers the clear
     * action.
     * @param {MozButton} button - Confirm button that triggered the action.
     */
    function onConfirm(button: MozButton): Promise<void>;
    /**
     * Restart the private browsing session. This is achieved by closing all other
     * PBM windows, closing all tabs in the current window but
     * about:privatebrowsing and triggering PBM data clearing.
     *
     * @param {ChromeWindow} triggeringWindow - The (private browsing) chrome window which
     * triggered the restart action.
     */
    function _restartPBM(triggeringWindow: ChromeWindow): Promise<void>;
    function _toolbarButton(win: any): any;
    function _rememberCheck(win: any): any;
}
