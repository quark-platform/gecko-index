export const MAX_CAPTURE_DIMENSION: 32766;
export const MAX_CAPTURE_AREA: 472907776;
export const MAX_SNAPSHOT_DIMENSION: 1024;
export class ScreenshotsComponentParent extends JSWindowActorParent {
    receiveMessage(message: any): Promise<void>;
    didDestroy(): void;
}
export namespace UIPhases {
    let CLOSED: number;
    let INITIAL: number;
    let OVERLAYSELECTION: number;
    let PREVIEW: number;
}
export namespace ScreenshotsUtils {
    let browserToScreenshotsState: WeakMap<WeakKey, any>;
    let initialized: boolean;
    let methodsUsed: {};
    /**
     * Figures out which of various states the screenshots UI is in, for the given browser.
     * @param browser The selected browser
     * @returns One of the `UIPhases` constants
     */
    function getUIPhase(browser: any): number;
    function resetMethodsUsed(): void;
    function initialize(): void;
    function uninitialize(): void;
    function handleEvent(event: any): void;
    function observe(subj: any, topic: any, data: any): void;
    /**
     * Notify screenshots when screenshot command is used.
     * @param window The current window the screenshot command was used.
     * @param type The type of screenshot taken. Used for telemetry.
     */
    function notify(window: any, type: any): void;
    /**
     * Creates/gets and returns a Screenshots actor.
     * @param browser The current browser.
     * @returns JSWindowActor The screenshot actor.
     */
    function getActor(browser: any): any;
    /**
     * Show the Screenshots UI and start the capture flow
     * @param browser The current browser.
     * @param reason [string] Optional reason string passed along when recording telemetry events
     */
    function start(browser: any, reason?: string): void;
    /**
     * Exit the Screenshots UI for the given browser
     * Closes any of open UI elements (preview dialog, panel, overlay) and cleans up internal state.
     * @param browser The current browser.
     */
    function exit(browser: any): void;
    /**
     * Cancel/abort the screenshots operation for the given browser
     * @param browser The current browser.
     */
    function cancel(browser: any, reason: any): void;
    /**
     * Update internal UI state associated with the given browser
     * @param browser The current browser.
     * @param nameValues {object} An object with one or more named property values
     */
    function setPerBrowserState(browser: any, nameValues?: any): void;
    /**
     * Set a flag so we don't try to exit when preview dialog next closes.
     * @param browser The current browser.
     * @param reason [string] Optional reason string passed along when recording telemetry events
     */
    function scheduleRetry(browser: any, reason: any): void;
    /**
     * Open the tab dialog for preview
     * @param browser The current browser
     */
    function openPreviewDialog(browser: any): Promise<any>;
    /**
     * Returns the buttons panel for the given browser
     * @param browser The current browser
     * @returns The buttons panel
     */
    function panelForBrowser(browser: any): any;
    /**
     * Create the buttons container from its template, for this browser
     * @param browser The current browser
     * @returns The buttons panel
     */
    function createPanelForBrowser(browser: any): any;
    /**
     * Open the buttons panel.
     * @param browser The current browser
     */
    function openPanel(browser: any): Promise<void>;
    /**
     * Close the panel
     * @param browser The current browser
     */
    function closePanel(browser: any): void;
    /**
     * If the buttons panel exists and is open we will hide both the panel
     * and the overlay. If the overlay is showing, we will hide the overlay.
     * Otherwise create or display the buttons.
     * @param browser The current browser.
     */
    function showPanelAndOverlay(browser: any, data: any): Promise<void>;
    /**
     * Close the overlay UI, and clear out internal state if there was an overlay selection
     * The overlay lives in the child document; so although closing is actually async, we assume success.
     * @param browser The current browser.
     */
    function closeOverlay(browser: any, options?: {}): void;
    /**
     * Gets the screenshots dialog box
     * @param browser The selected browser
     * @returns Screenshots dialog box if it exists otherwise null
     */
    function getDialog(browser: any): any;
    /**
     * Closes the dialog box it it exists
     * @param browser The selected browser
     */
    function closeDialogBox(browser: any): boolean;
    /**
     * Callback fired when the preview dialog window closes
     * Will exit the screenshots UI if the `exitOnPreviewClose` flag is set for this browser
     * @param browser The associated browser
     */
    function onDialogClose(browser: any): void;
    /**
     * Gets the screenshots button if it is visible, otherwise it will get the
     * element that the screenshots button is nested under. If the screenshots
     * button doesn't exist then we will default to the navigator toolbox.
     * @param browser The selected browser
     * @returns The anchor element for the ConfirmationHint
     */
    function getWidgetAnchor(browser: any): any;
    /**
     * Indicate that the screenshot has been copied via ConfirmationHint.
     * @param browser The selected browser
     */
    function showCopiedConfirmationHint(browser: any): void;
    /**
     * Gets the full page bounds from the screenshots child actor.
     * @param browser The current browser.
     * @returns { object }
     *    Contains the full page bounds from the screenshots child actor.
     */
    function fetchFullPageBounds(browser: any): any;
    /**
     * Gets the visible bounds from the screenshots child actor.
     * @param browser The current browser.
     * @returns { object }
     *    Contains the visible bounds from the screenshots child actor.
     */
    function fetchVisibleBounds(browser: any): any;
    function showAlertMessage(title: any, message: any): void;
    /**
     * The max dimension of any side of a canvas is 32767 and the max canvas area is
     * 124925329. If the width or height is greater or equal to 32766 we will crop the
     * screenshot to the max width. If the area is still too large for the canvas
     * we will adjust the height so we can successfully capture the screenshot.
     * @param {Object} rect The dimensions of the screenshot. The rect will be
     * modified in place
     */
    function cropScreenshotRectIfNeeded(rect: any): void;
    /**
     * Open and add screenshot-ui to the dialog box and then take the screenshot
     * @param browser The current browser.
     * @param type The type of screenshot taken.
     */
    function doScreenshot(browser: any, type: any): Promise<void>;
    /**
     * Take the screenshot and add the image to the dialog box
     * @param browser The current browser.
     * @param dialog The dialog box to show the screenshot preview.
     * @param rect DOMRect containing bounds of the screenshot.
     */
    function takeScreenshot(browser: any, dialog: any, rect: any): Promise<void>;
    /**
     * Creates a canvas and draws a snapshot of the screenshot on the canvas
     * @param region The bounds of screenshots
     * @param browser The current browser
     * @returns The canvas
     */
    function createCanvas(region: any, browser: any): Promise<any>;
    /**
     * Copy the screenshot
     * @param region The bounds of the screenshots
     * @param browser The current browser
     */
    function copyScreenshotFromRegion(region: any, browser: any): Promise<void>;
    /**
     * Copy the image to the clipboard
     * This is called from the preview dialog
     * @param dataUrl The image data
     * @param browser The current browser
     * @param data Telemetry data
     */
    function copyScreenshot(dataUrl: any, browser: any, data: any): Promise<void>;
    /**
     * Download the screenshot
     * @param title The title of the current page
     * @param region The bounds of the screenshot
     * @param browser The current browser
     */
    function downloadScreenshotFromRegion(title: any, region: any, browser: any): Promise<void>;
    /**
     * Download the screenshot
     * This is called from the preview dialog
     * @param title The title of the current page or null and getFilename will get the title
     * @param dataUrl The image data
     * @param browser The current browser
     * @param data Telemetry data
     */
    function downloadScreenshot(title: any, dataUrl: any, browser: any, data: any): Promise<void>;
    function recordTelemetryEvent(type: any, object: any, args: any): void;
}
