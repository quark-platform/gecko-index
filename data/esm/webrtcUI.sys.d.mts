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
    let sharedBrowserWindows: WeakSet<WeakKey>;
    let sharingScreen: boolean;
    let allowedSharedBrowsers: WeakSet<WeakKey>;
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
        camera: 0 | 2 | 1;
        microphone: 0 | 2 | 1;
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
        camera: 0 | 2 | 1;
        microphone: 0 | 2 | 1;
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
