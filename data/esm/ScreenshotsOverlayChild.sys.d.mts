export class ScreenshotsOverlay {
    constructor(contentDocument: any);
    get markup(): string;
    get fragment(): any;
    overlayTemplate: any;
    get initialized(): boolean;
    get state(): string;
    document: any;
    window: any;
    windowDimensions: any;
    selectionRegion: any;
    hoverElementRegion: any;
    get content(): any;
    getElementById(id: any): any;
    initialize(): Promise<void>;
    _content: any;
    /**
     * Get all the elements that will be used.
     */
    initializeElements(): void;
    previewCancelButton: any;
    cancelButton: any;
    copyButton: any;
    downloadButton: any;
    previewContainer: any;
    hoverElementContainer: any;
    selectionContainer: any;
    buttonsContainer: any;
    screenshotsContainer: any;
    leftEye: any;
    rightEye: any;
    leftBackgroundEl: any;
    topBackgroundEl: any;
    rightBackgroundEl: any;
    bottomBackgroundEl: any;
    highlightEl: any;
    selectionSize: any;
    /**
     * Removes all event listeners and removes the overlay from the Anonymous Content
     */
    tearDown(): void;
    /**
     * Add required event listeners to the overlay
     */
    addEventListeners(): void;
    /**
     * Remove the events listeners from the overlay
     */
    removeEventListeners(): void;
    /**
     * Returns the x and y coordinates of the event relative to both the
     * viewport and the page.
     * @param {Event} event The event
     * @returns
     *  {
     *    clientX: The x position relative to the viewport
     *    clientY: The y position relative to the viewport
     *    pageX: The x position relative to the entire page
     *    pageY: The y position relative to the entire page
     *  }
     */
    getCoordinatesFromEvent(event: Event): any;
    handleEvent(event: any): void;
    handleClick(event: any): void;
    /**
     * Handles the pointerdown event depending on the state.
     * Early return when a pointer down happens on a button.
     * @param {Event} event The pointerown event
     */
    handlePointerDown(event: Event): void;
    /**
     * Handles the pointermove event depending on the state
     * @param {Event} event The pointermove event
     */
    handlePointerMove(event: Event): void;
    /**
     * Handles the pointerup event depending on the state
     * @param {Event} event The pointerup event
     */
    handlePointerUp(event: Event): void;
    /**
     * Hide hover element, selection and buttons containers.
     * Show the preview container and the panel.
     * This is the initial state of the overlay.
     */
    crosshairsStart(): void;
    /**
     * Hide the panel because we have started dragging.
     */
    draggingReadyStart(): void;
    /**
     * Hide the preview, hover element and buttons containers.
     * Show the selection container.
     */
    draggingStart(): void;
    /**
     * Hide the preview and hover element containers.
     * Draw the selection and buttons containers.
     */
    selectedStart(): void;
    /**
     * Hide the buttons container.
     * Store the width and height of the current selected region.
     * The dimensions will be used when moving the region along the edge of the
     * page and for recording telemetry.
     */
    resizingStart(): void;
    /**
     * Dragging has started so we set the initial selection region and set the
     * state to draggingReady.
     * @param {Number} pageX The x position relative to the page
     * @param {Number} pageY The y position relative to the page
     */
    crosshairsDragStart(pageX: number, pageY: number): void;
    /**
     * If the background is clicked we set the state to crosshairs
     * otherwise set the state to resizing
     * @param {Number} pageX The x position relative to the page
     * @param {Number} pageY The y position relative to the page
     * @param {String} targetId The id of the event target
     */
    selectedDragStart(pageX: number, pageY: number, targetId: string): void;
    /**
     * Draw the eyes in the preview container and find the element currently
     * being hovered.
     * @param {Number} clientX The x position relative to the viewport
     * @param {Number} clientY The y position relative to the viewport
     */
    crosshairsMove(clientX: number, clientY: number): void;
    /**
     * Set the selection region dimensions and if the region is at least 40
     * pixels diagnally in distance, set the state to dragging.
     * @param {Number} pageX The x position relative to the page
     * @param {Number} pageY The y position relative to the page
     */
    draggingReadyDrag(pageX: number, pageY: number): void;
    /**
     * Scroll if along the edge of the viewport, update the selection region
     * dimensions and draw the selection container.
     * @param {Number} pageX The x position relative to the page
     * @param {Number} pageY The y position relative to the page
     */
    draggingDrag(pageX: number, pageY: number): void;
    /**
     * Resize the selection region depending on the mover that started the resize.
     * @param {Number} pageX The x position relative to the page
     * @param {Number} pageY The y position relative to the page
     */
    resizingDrag(pageX: number, pageY: number): void;
    /**
     * If there is a valid element region, update and draw the selection
     * container and set the state to selected.
     * Otherwise set the state to crosshairs.
     */
    draggingReadyDragEnd(): void;
    /**
     * Update the selection region dimensions and set the state to selected.
     * @param {Number} pageX The x position relative to the page
     * @param {Number} pageY The y position relative to the page
     */
    draggingDragEnd(pageX: number, pageY: number): void;
    /**
     * Update the selection region dimensions by calling `resizingDrag` and set
     * the state to selected.
     * @param {Number} pageX The x position relative to the page
     * @param {Number} pageY The y position relative to the page
     */
    resizingDragEnd(pageX: number, pageY: number, targetId: any): void;
    /**
     * Draw the preview eyes pointer towards the mouse.
     * @param {Number} clientX The x position relative to the viewport
     * @param {Number} clientY The y position relative to the viewport
     */
    drawPreviewEyes(clientX: number, clientY: number): void;
    showPreviewContainer(): void;
    hidePreviewContainer(): void;
    /**
     * Update the screenshots overlay container based on the window dimensions.
     */
    updateScreenshotsOverlayContainer(): void;
    showScreenshotsOverlayContainer(): void;
    hideScreenshotsOverlayContainer(): void;
    /**
     * Draw the hover element container based on the hover element region.
     */
    drawHoverElementRegion(): void;
    showHoverElementContainer(): void;
    hideHoverElementContainer(): void;
    /**
     * Draw each background element and the highlight element base on the
     * selection region.
     */
    drawSelectionContainer(): void;
    updateSelectionSizeText(): void;
    showSelectionContainer(): void;
    hideSelectionContainer(): void;
    /**
     * Draw the buttons container in the bottom right corner of the selection
     * container if possible.
     * The buttons will be visible in the viewport if the selection container
     * is within the viewport, otherwise skip drawing the buttons.
     */
    drawButtonsContainer(): void;
    showButtonsContainer(): void;
    hideButtonsContainer(): void;
    /**
     * Set the pointer events to none on the screenshots elements so
     * elementFromPoint can find the real element at the given point.
     */
    setPointerEventsNone(): void;
    resetPointerEvents(): void;
    /**
     * Try to find a reasonable element for a given point.
     * If a reasonable element is found, draw the hover element container for
     * that element region.
     * @param {Number} clientX The x position relative to the viewport
     * @param {Number} clientY The y position relative to the viewport
     */
    handleElementHover(clientX: number, clientY: number): void;
    /**
     * Scroll the viewport if near one or both of the edges.
     * @param {Number} pageX The x position relative to the page
     * @param {Number} pageY The y position relative to the page
     */
    scrollIfByEdge(pageX: number, pageY: number): void;
    /**
     * Scroll the window by the given amount.
     * @param {Number} x The x amount to scroll
     * @param {Number} y The y amount to scroll
     */
    scrollWindow(x: number, y: number): void;
    /**
     * The page was resized or scrolled. We need to update the screenshots
     * container size so we don't draw outside the page bounds.
     * @param {String} eventType will be "scroll" or "resize"
     */
    updateScreenshotsOverlayDimensions(eventType: string): void;
    /**
     * Returns the window's dimensions for the current window.
     *
     * @return {Object} An object containing window dimensions
     *   {
     *     clientWidth: The width of the viewport
     *     clientHeight: The height of the viewport
     *     scrollWidth: The width of the enitre page
     *     scrollHeight: The height of the entire page
     *     scrollX: The X scroll offset of the viewport
     *     scrollY: The Y scroll offest of the viewport
     *     scrollMinX: The X mininmun the viewport can scroll to
     *     scrollMinY: The Y mininmun the viewport can scroll to
     *   }
     */
    getDimensionsFromWindow(): any;
    /**
     * Update the screenshots container because the window has changed size of
     * scrolled. The screenshots-overlay-container doesn't shrink with the page
     * when the window is resized so we have to manually find the width and
     * height of the page and make sure we aren't drawing outside the actual page
     * dimensions.
     */
    updateWindowDimensions(): void;
    #private;
}
