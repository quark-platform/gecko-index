export namespace ShoppingUtils {
    let initialized: boolean;
    let registered: boolean;
    let handledAutoActivate: boolean;
    let nimbusEnabled: boolean;
    let nimbusControl: boolean;
    function _updateNimbusVariables(): void;
    function onNimbusUpdate(): void;
    function init(): void;
    function uninit(): void;
    function isProductPageNavigation(aLocationURI: any, aFlags: any): number | boolean;
    function maybeRecordExposure(aLocationURI: any, aFlags: any): void;
    function setOnUpdate(_pref: any, _prev: any, current: any): void;
    function recordUserAdsPreference(): void;
    /**
     * If the user has not opted in, automatically set the sidebar to `active` if:
     * 1. The sidebar has not already been automatically set to `active` twice.
     * 2. It's been at least 24 hours since the user last saw the sidebar because
     *    of this auto-activation behavior.
     * 3. This method has not already been called (handledAutoActivate is false)
     */
    function handleAutoActivateOnProduct(): void;
    /**
     * Send a Shopping-related trigger message to ASRouter.
     *
     * @param {object} trigger The trigger object to send to ASRouter.
     * @param {object} trigger.context Additional trigger properties to pass to
     *   the targeting context.
     * @param {string} trigger.id The id of the trigger.
     * @param {MozBrowser} trigger.browser The browser to associate with the
     *   trigger. (This can determine the tab/window the message is shown in,
     *   depending on the message surface)
     */
    function sendTrigger(trigger: {
        context: any;
        id: string;
        browser: MozBrowser;
    }): Promise<void>;
}
