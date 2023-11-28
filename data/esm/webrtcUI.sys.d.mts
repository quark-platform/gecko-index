/**
 * Add a localized stream sharing menu to the event target
 *
 * @param {Window} win - The parent `window`
 * @param {Event} event - The popupshowing event for the <menu>.
 * @param {boolean} inclWindow - Should the window stream be included in the active streams.
 */
export function showStreamSharingMenu(win: Window, event: Event, inclWindow?: boolean): void;
export namespace webrtcUI {
    let initialized: boolean;
    let peerConnectionBlockers: Set<any>;
    let emitter: any;
    function init(): void;
    function uninit(): void;
    function observe(subject: any, topic: any, data: any): void;
    let SHARING_NONE: number;
    let SHARING_WINDOW: number;
    let SHARING_SCREEN: number;
    let sharedBrowserWindows: WeakSet<object>;
    let sharingScreen: boolean;
    let allowedSharedBrowsers: WeakSet<object>;
    let allowTabSwitchesForSession: boolean;
    let tabSwitchCountForSession: number;
    let sharingDisplay: boolean;
    let sharingDisplaySessionId: number;
    let perTabIndicators: Map<any, any>;
    let activePerms: Map<any, any>;
    const showGlobalIndicator: boolean;
    const showCameraIndicator: boolean;
    const showMicrophoneIndicator: boolean;
    const showScreenSharingIndicator: string;
    let _streams: any[];
    function getActiveStreams(aCamera: any, aMicrophone: any, aScreen: any, aWindow?: boolean): {
        uri: any;
        tab: any;
        browser: any;
        types: {
            camera: any;
            microphone: any;
            screen: any;
            window: any;
        };
        devices: any;
    }[];
    /**
     * Returns true if aBrowser has an active WebRTC stream.
     */
    function browserHasStreams(aBrowser: any): boolean;
    /**
     * Determine the combined state of all the active streams associated with
     * the specified top-level browsing context.
     */
    function getCombinedStateForBrowser(aTopBrowsingContext: any): {
        camera: any;
        microphone: any;
    };
    function streamAddedOrRemoved(aBrowsingContext: any, aData: any): void;
    /**
     * Remove all the streams associated with a given
     * browsing context.
     */
    function forgetStreamsFromBrowserContext(aBrowsingContext: any): void;
    /**
     * Given some set of streams, stops device access for those streams.
     * Optionally, it's possible to stop a subset of the devices on those
     * streams by passing in optional arguments.
     *
     * Once the streams have been stopped, this method will also find the
     * newest stream's <xul:browser> and window, focus the window, and
     * select the browser.
     *
     * For camera and microphone streams, this will also revoke any associated
     * permissions from SitePermissions.
     *
     * @param {Array<Object>} activeStreams - An array of streams obtained via webrtcUI.getActiveStreams.
     * @param {boolean} stopCameras - True to stop the camera streams (defaults to true)
     * @param {boolean} stopMics - True to stop the microphone streams (defaults to true)
     * @param {boolean} stopScreens - True to stop the screen streams (defaults to true)
     * @param {boolean} stopWindows - True to stop the window streams (defaults to true)
     */
    function stopSharingStreams(activeStreams: any[], stopCameras?: boolean, stopMics?: boolean, stopScreens?: boolean, stopWindows?: boolean): void;
    /**
     * Clears permissions and stops sharing (if active) for a list of device types
     * and a specific tab.
     * @param {("camera"|"microphone"|"screen")[]} types - Device types to stop
     * and clear permissions for.
     * @param tab - Tab of the devices to stop and clear permissions.
     */
    function clearPermissionsAndStopSharing(types: ("screen" | "camera" | "microphone")[], tab: any): void;
    function updateIndicators(aTopBrowsingContext: any): {
        camera: any;
        microphone: any;
    };
    function swapBrowserForNotification(aOldBrowser: any, aNewBrowser: any): void;
    /**
     * Remove all entries from the activePerms map for a browser, including all
     * child frames.
     * Note: activePerms is an internal WebRTC UI permission map and does not
     * reflect the PermissionManager or SitePermissions state.
     * @param aBrowser - Browser to clear active permissions for.
     */
    function forgetActivePermissionsFromBrowser(aBrowser: any): void;
    /**
     * Shows the Permission Panel for the tab associated with the provided
     * active stream.
     * @param aActiveStream - The stream that the user wants to see permissions for.
     * @param aEvent - The user input event that is invoking the panel. This can be
     *        undefined / null if no such event exists.
     */
    function showSharingDoorhanger(aActiveStream: any, aEvent: any): void;
    function updateWarningLabel(aMenuList: any): void;
    function addPeerConnectionBlocker(aCallback: any): void;
    function removePeerConnectionBlocker(aCallback: any): void;
    function on(...args: any[]): any;
    function off(...args: any[]): any;
    function getHostOrExtensionName(uri: any, href: any): any;
    function updateGlobalIndicator(): void;
    function getWindowShareState(window: any): number;
    function tabAddedWhileSharing(tab: any): void;
    function shouldShowSharedTabWarning(tab: any): boolean;
    function allowSharedTabSwitch(tab: any, allowForSession: any): void;
    function recordEvent(type: any, object: any, args?: {}): void;
    /**
     * Updates the sharedData structure to reflect shared screen and window
     * state. This sets the following key: data pairs on sharedData.
     * - "webrtcUI:isSharingScreen": a boolean value reflecting
     * this.sharingScreen.
     * - "webrtcUI:sharedTopInnerWindowIds": a set containing the inner window
     * ids of each top level browser window that is in sharedBrowserWindows.
     */
    function _setSharedData(): void;
}
/**
 * Controls the visibility of screen, camera and microphone sharing indicators
 * in the macOS global menu bar. This class should only ever be instantiated
 * on macOS.
 *
 * The public methods on this class intentionally match the interface for the
 * WebRTC global sharing indicator, because the MacOSWebRTCStatusbarIndicator
 * acts as the indicator when in the legacy indicator configuration.
 */
export class MacOSWebRTCStatusbarIndicator {
    _camera: any;
    _microphone: any;
    _screen: any;
    _hiddenDoc: any;
    _statusBar: any;
    /**
     * Public method that will determine the most appropriate
     * set of indicators to show, and then show them or hide
     * them as necessary.
     */
    updateIndicatorState(): void;
    /**
     * Public method that will hide all indicators.
     */
    close(): void;
    handleEvent(event: any): void;
    /**
     * Handler for command events fired by the <menuitem> elements
     * inside any of the indicator <menu>'s.
     *
     * @param {Event} aEvent - The command event for the <menuitem>.
     */
    _command(aEvent: Event): void;
    /**
     * Handler for the popupshowing event for one of the status
     * bar indicator menus.
     *
     * @param {Event} aEvent - The popupshowing event for the <menu>.
     */
    _popupShowing(aEvent: Event): boolean;
    /**
     * Handler for the popuphiding event for one of the status
     * bar indicator menus.
     *
     * @param {Event} aEvent - The popuphiding event for the <menu>.
     */
    _popupHiding(aEvent: Event): void;
    /**
     * Updates the status bar to show or hide a screen, camera or
     * microphone indicator.
     *
     * @param {String} aName - One of the following: "screen", "camera",
     *   "microphone"
     * @param {boolean} aState - True to show the indicator for the aName
     *   type of stream, false ot hide it.
     */
    _setIndicatorState(aName: string, aState: boolean): void;
}
