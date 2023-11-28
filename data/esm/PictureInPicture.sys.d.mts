export class PictureInPictureLauncherParent {
    receiveMessage(aMessage: any): void;
}
export class PictureInPictureToggleParent {
    receiveMessage(aMessage: any): void;
}
/**
 * This module is responsible for creating a Picture in Picture window to host
 * a clone of a video element running in web content.
 */
export class PictureInPictureParent {
    receiveMessage(aMessage: any): void;
}
export namespace PictureInPicture {
    let weakPipToWin: WeakMap<object, any>;
    let weakWinToBrowser: WeakMap<object, any>;
    let browserWeakMap: WeakMap<object, any>;
    let originatingWinWeakMap: WeakMap<object, any>;
    let weakGlobalToEligiblePipCount: WeakMap<object, any>;
    /**
     * Returns the player window if one exists and if it hasn't yet been closed.
     *
     * @param {PictureInPictureParent} pipActorRef
     *   Reference to the calling PictureInPictureParent actor
     *
     * @returns {Window} the player window if it exists and is not in the
     * process of being closed. Returns null otherwise.
     */
    function getWeakPipPlayer(pipActorRef: PictureInPictureParent): Window;
    /**
     * Get the PiP panel for a browser. Create the panel if needed.
     * @param {Browser} browser The current browser
     * @returns panel The panel element
     */
    function getPanelForBrowser(browser: Browser): any;
    function handleEvent(event: any): void;
    /**
     * Increase the count of PiP windows for a given browser
     * @param browser The browser to increase PiP count in browserWeakMap
     */
    function addPiPBrowserToWeakMap(browser: any): void;
    /**
     * Increase the count of PiP windows for a given AppWindow.
     *
     * @param {Browser} browser
     *   The content browser that the originating video lives in and from which
     *   we'll read its parent window to increase PiP window count in originatingWinWeakMap.
     */
    function addOriginatingWinToWeakMap(browser: Browser): void;
    /**
     * Decrease the count of PiP windows for a given browser.
     * If the count becomes 0, we will remove the browser from the WeakMap
     * @param browser The browser to decrease PiP count in browserWeakMap
     */
    function removePiPBrowserFromWeakMap(browser: any): void;
    /**
     * Decrease the count of PiP windows for a given AppWindow.
     * If the count becomes 0, we will remove the AppWindow from the WeakMap.
     *
     * @param {Browser} browser
     *   The content browser that the originating video lives in and from which
     *   we'll read its parent window to decrease PiP window count in originatingWinWeakMap.
     */
    function removeOriginatingWinFromWeakMap(browser: Browser): void;
    function onPipSwappedBrowsers(event: any): void;
    function updatePlayingDurationHistograms(): void;
    /**
     * Called when the browser UI handles the View:PictureInPicture command via
     * the keyboard.
     *
     * @param {Event} event
     */
    function onCommand(event: Event): void;
    function focusTabAndClosePip(window: any, pipActor: any): Promise<void>;
    /**
     * Update the respect PiPDisabled pref value when the toggle is clicked.
     * @param {Event} event The event from toggling the respect
     *   PiPDisabled in the PiP panel
     */
    function toggleRespectDisablePip(event: Event): void;
    /**
     * Updates the PiP count and PiPDisabled count of eligible PiP videos for a
     * respective WindowGlobal.
     * @param {BrowsingContext} browsingContext The BrowsingContext with eligible videos
     * @param {Object} object
     *    pipCount: The number of eligible videos for the respective WindowGlobal
     *    pipDisabledCount: The number of disablePiP videos for the respective WindowGlobal
     */
    function updateEligiblePipVideoCount(browsingContext: BrowsingContext, object: any): void;
    /**
     * A generator function that yeilds a WindowGlobal, it's respective PiP
     * count, and if any of the videos have PiPDisabled set.
     * @param {Browser} browser The selected browser
     */
    function windowGlobalPipCountGenerator(browser: Browser): Generator<{
        windowGlobal: any;
        pipCount: any;
        pipDisabledCount: any;
    }, void, unknown>;
    /**
     * Gets the total eligible video count and total PiPDisabled count for a
     * given browser.
     * @param {Browser} browser The selected browser
     * @returns Total count of eligible PiP videos for the selected broser
     */
    function getEligiblePipVideoCount(browser: Browser): {
        totalPipCount: number;
        totalPipDisabled: number;
    };
    /**
     * This function updates the hover text on the urlbar PiP button when we enter or exit PiP
     * @param {Document} document The window document
     * @param {Element} pipToggle The urlbar PiP button
     * @param {String} dataL10nId The data l10n id of the string we want to show
     */
    function updateUrlbarHoverText(document: Document, pipToggle: Element, dataL10nId: string): void;
    /**
     * Toggles the visibility of the PiP urlbar button. If the total video count
     * is 1, then we will show the button. If any eligible video has PiPDisabled,
     * then the button will show. Otherwise the button is hidden.
     * @param {Browser} browser The selected browser
     */
    function updateUrlbarToggle(browser: Browser): void;
    /**
     * Open the PiP panel if any video has PiPDisabled, otherwise finds the
     * correct WindowGlobal to open the eligible PiP video.
     * @param {Event} event Event from clicking the PiP urlbar button
     */
    function toggleUrlbar(event: Event): void;
    /**
     * Set the toggle for PiPDisabled when the panel is shown.
     * If the pref is set from about:config, we need to update
     * the toggle switch in the panel to match the pref.
     * @param {Event} event The panel shown event
     */
    function onPipPanelShown(event: Event): void;
    /**
     * Update the visibility of the urlbar PiP button when the panel is hidden.
     * The button will show when there is more than 1 video and at least 1 video
     * has PiPDisabled. If we no longer want to respect PiPDisabled then we
     * need to check if the urlbar button should still be visible.
     * @param {Event} event The panel hidden event
     */
    function onPipPanelHidden(event: Event): void;
    /**
     * Create the PiP panel if needed and toggle the display of the panel
     * @param {Browser} browser The current browser
     */
    function togglePipPanel(browser: Browser): void;
    /**
     * Sets the PiP urlbar to an active state. This changes the icon in the
     * urlbar button to the unpip icon.
     * @param {Window} win The current Window
     */
    function setUrlbarPipIconActive(win: Window): void;
    /**
     * Sets the PiP urlbar to an inactive state. This changes the icon in the
     * urlbar button to the open pip icon.
     * @param {Window} win The current window
     */
    function setUrlbarPipIconInactive(win: Window): void;
    /**
     * Remove attribute which enables pip icon in tab
     *
     * @param {Window} window
     *   A PictureInPicture player's window, used to resolve the player's
     *   associated originating content browser
     */
    function clearPipTabIcon(window: Window): void;
    /**
     * Closes and waits for passed PiP player window to finish closing.
     *
     * @param {Window} pipWin
     *   Player window to close
     */
    function closePipWindow(pipWin: Window): Promise<void>;
    /**
     * Closes a single PiP window. Used exclusively in conjunction with support
     * for multiple PiP windows
     *
     * @param {Object} closeData
     *   Additional data required to complete a close operation on a PiP window
     * @param {PictureInPictureParent} closeData.actorRef
     *   The PictureInPictureParent actor associated with the PiP window being closed
     * @param {string} closeData.reason
     *   The reason for closing this PiP window
     */
    function closeSinglePipWindow(closeData: {
        actorRef: PictureInPictureParent;
        reason: string;
    }): Promise<void>;
    /**
     * A request has come up from content to open a Picture in Picture
     * window.
     *
     * @param {WindowGlobalParent} wgps
     *   The WindowGlobalParent that is requesting the Picture in Picture
     *   window.
     *
     * @param {object} videoData
     *   An object containing the following properties:
     *
     *   videoHeight (int):
     *     The preferred height of the video.
     *
     *   videoWidth (int):
     *     The preferred width of the video.
     *
     * @returns {Promise}
     *   Resolves once the Picture in Picture window has been created, and
     *   the player component inside it has finished loading.
     */
    function handlePictureInPictureRequest(wgp: any, videoData: any): Promise<any>;
    /**
     * Calls the browsingContext's `forceAppWindowActive` flag to determine if the
     * the top level chrome browsingContext should be forcefully set as active or not.
     * When the originating window's browsing context is set to active, captions on the
     * PiP window are properly updated. Forcing active while a PiP window is open ensures
     * that captions are still updated when the originating window is occluded.
     *
     * @param {BrowsingContext} browsingContext
     *   The browsing context of the originating window
     * @param {boolean} isActive
     *   True to force originating window as active, or false to not enforce it
     * @see CanonicalBrowsingContext
     */
    function setOriginatingWindowActive(browsingContext: BrowsingContext, isActive: boolean): void;
    /**
     * unload event has been called in player.js, cleanup our preserved
     * browser object.
     *
     * @param {Window} window
     */
    function unload(window: Window): void;
    /**
     * Open a Picture in Picture window on the same screen as parentWin,
     * sized based on the information in videoData.
     *
     * @param {ChromeWindow} parentWin
     *   The window hosting the browser that requested the Picture in
     *   Picture window.
     *
     * @param {object} videoData
     *   An object containing the following properties:
     *
     *   videoHeight (int):
     *     The preferred height of the video.
     *
     *   videoWidth (int):
     *     The preferred width of the video.
     *
     * @param {PictureInPictureParent} actorReference
     *   Reference to the calling PictureInPictureParent
     *
     * @returns {Promise}
     *   Resolves once the window has opened and loaded the player component.
     */
    function openPipWindow(parentWin: ChromeWindow, videoData: any): Promise<any>;
    /**
     * This function tries to restore the last known Picture-in-Picture location
     * and size. If those values are unknown or offscreen, then a default
     * location and size is used.
     *
     * @param {ChromeWindow|PlayerWindow} requestingWin
     *   The window hosting the browser that requested the Picture in
     *   Picture window. If this is an existing player window then the returned
     *   player size and position will be determined based on the existing
     *   player window's size and position.
     *
     * @param {object} videoData
     *   An object containing the following properties:
     *
     *   videoHeight (int):
     *     The preferred height of the video.
     *
     *   videoWidth (int):
     *     The preferred width of the video.
     *
     * @returns {object}
     *   The size and position for the player window, in CSS pixels relative to
     *   requestingWin.
     *
     *   top (int):
     *     The top position for the player window.
     *
     *   left (int):
     *     The left position for the player window.
     *
     *   width (int):
     *     The width of the player window.
     *
     *   height (int):
     *     The height of the player window.
     */
    function fitToScreen(requestingWin: any, videoData: any): any;
    /**
     * This function will take the size and potential location of a new
     * Picture-in-Picture player window, and try to return the location
     * coordinates that will best ensure that the player window will not overlap
     * with other pre-existing player windows.
     *
     * @param {int} left
     *  x position of left edge for Picture-in-Picture window that is being
     *  opened
     * @param {int} top
     *  y position of top edge for Picture-in-Picture window that is being
     *  opened
     * @param {int} width
     *  Width of Picture-in-Picture window that is being opened
     * @param {int} height
     *  Height of Picture-in-Picture window that is being opened
     *
     * @returns {object}
     *  An object with the following properties:
     *
     *   top (int):
     *     The recommended top position for the player window.
     *
     *   left (int):
     *     The recommended left position for the player window.
     */
    function resolveOverlapConflicts(left: int, top: int, width: int, height: int): any;
    /**
     * Resizes the the PictureInPicture player window.
     *
     * @param {object} videoData
     *    The source video's data.
     * @param {PictureInPictureParent} actorRef
     *    Reference to the PictureInPicture parent actor.
     */
    function resizePictureInPictureWindow(videoData: any, actorRef: PictureInPictureParent): void;
    /**
     * Opens the context menu for toggling PictureInPicture.
     *
     * @param {Window} window
     * @param {object} data
     *  Message data from the PictureInPictureToggleParent
     */
    function openToggleContextMenu(window: Window, data: any): void;
    function hideToggle(): void;
    /**
     * This is used in AsyncTabSwitcher.sys.mjs and tabbrowser.js to check if the browser
     * currently has a PiP window.
     * If the browser has a PiP window we want to keep the browser in an active state because
     * the browser is still partially visible.
     * @param browser The browser to check if it has a PiP window
     * @returns true if browser has PiP window else false
     */
    function isOriginatingBrowser(browser: any): boolean;
    function moveToggle(): void;
    /**
     * This function takes a screen and will return the left, top, width and
     * height of the screen
     * @param {Screen} screen
     * The screen we need to get the size and coordinates of
     *
     * @returns {array}
     * Size and location of screen in desktop pixels.
     *
     *   screenLeft.value (int):
     *     The left position for the screen.
     *
     *   screenTop.value (int):
     *     The top position for the screen.
     *
     *   screenWidth.value (int):
     *     The width of the screen.
     *
     *   screenHeight.value (int):
     *     The height of the screen.
     */
    function getAvailScreenSize(screen: Screen): any[];
    /**
     * This function takes in a rect in desktop pixels, and returns the screen it
     * is located on.
     *
     * If the left and top are not on any screen, it will return the default
     * screen.
     *
     * @param {int} left
     *  left or x coordinate
     *
     * @param {int} top
     *  top or y coordinate
     *
     * @param {int} width
     *  top or y coordinate
     *
     * @param {int} height
     *  top or y coordinate
     *
     * @returns {Screen} screen
     *  the screen the left and top are on otherwise, default screen
     */
    function getWorkingScreen(left: int, top: int, width?: int, height?: int): Screen;
    /**
     * Saves position and size of Picture-in-Picture window
     * @param {Window} win The Picture-in-Picture window
     */
    function savePosition(win: Window): void;
    /**
     * Load last Picture in Picture location and size
     * @returns {object}
     *   The size and position of the last Picture in Picture window.
     *
     *   top (int):
     *     The top position for the last player window.
     *     Otherwise NaN
     *
     *   left (int):
     *     The left position for the last player window.
     *     Otherwise NaN
     *
     *   width (int):
     *     The width of the player last window.
     *     Otherwise NaN
     *
     *   height (int):
     *     The height of the player last window.
     *     Otherwise NaN
     */
    function loadPosition(): any;
    function setFirstSeen(dateSeconds: any): void;
    function setHasUsed(hasUsed: any): void;
}
