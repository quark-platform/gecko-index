export class MarionetteCommandsChild extends JSWindowActorChild {
    sandboxes: any;
    actionState: any;
    get innerWindowId(): number;
    actorCreated(): void;
    didDestroy(): void;
    receiveMessage(msg: any): Promise<{
        seenNodeIds: any[];
        serializedValue: any;
        error?: undefined;
    } | {
        error: any;
        seenNodeIds?: undefined;
        serializedValue?: undefined;
    }>;
    /** Clear the text of an element.
     *
     * @param {object} options
     * @param {Element} options.elem
     */
    clearElement(options?: {
        elem: Element;
    }): void;
    /**
     * Click an element.
     */
    clickElement(options?: {}): Promise<any>;
    /**
     * Executes a JavaScript function.
     */
    executeScript(options?: {}): Promise<any>;
    /**
     * Find an element in the current browsing context's document using the
     * given search strategy.
     *
     * @param {object=} options
     * @param {string} options.strategy
     * @param {string} options.selector
     * @param {object} options.opts
     * @param {Element} options.opts.startNode
     *
     */
    findElement(options?: object | undefined): Promise<any>;
    /**
     * Find elements in the current browsing context's document using the
     * given search strategy.
     *
     * @param {object=} options
     * @param {string} options.strategy
     * @param {string} options.selector
     * @param {object} options.opts
     * @param {Element} options.opts.startNode
     *
     */
    findElements(options?: object | undefined): Promise<any>;
    /**
     * Return the active element in the document.
     */
    getActiveElement(): Promise<Element>;
    /**
     * Return the accessible label for a given element.
     */
    getComputedLabel(options?: {}): Promise<any>;
    /**
     * Return the accessible role for a given element.
     */
    getComputedRole(options?: {}): Promise<any>;
    /**
     * Get the value of an attribute for the given element.
     */
    getElementAttribute(options?: {}): Promise<any>;
    /**
     * Get the value of a property for the given element.
     */
    getElementProperty(options?: {}): Promise<any>;
    /**
     * Get the position and dimensions of the element.
     */
    getElementRect(options?: {}): Promise<{
        x: any;
        y: any;
        width: any;
        height: any;
    }>;
    /**
     * Get the tagName for the given element.
     */
    getElementTagName(options?: {}): Promise<any>;
    /**
     * Get the text content for the given element.
     */
    getElementText(options?: {}): Promise<any>;
    /**
     * Get the value of a css property for the given element.
     */
    getElementValueOfCssProperty(options?: {}): Promise<string>;
    /**
     * Get the source of the current browsing context's document.
     */
    getPageSource(): Promise<string>;
    /**
     * Returns the rect of the element to screenshot.
     *
     * Because the screen capture takes place in the parent process the dimensions
     * for the screenshot have to be determined in the appropriate child process.
     *
     * Also it takes care of scrolling an element into view if requested.
     *
     * @param {object} options
     * @param {Element} options.elem
     *     Optional element to take a screenshot of.
     * @param {boolean=} options.full
     *     True to take a screenshot of the entire document element.
     *     Defaults to true.
     * @param {boolean=} options.scroll
     *     When <var>elem</var> is given, scroll it into view.
     *     Defaults to true.
     *
     * @returns {DOMRect}
     *     The area to take a snapshot from.
     */
    getScreenshotRect(options?: {
        elem: Element;
        full?: boolean | undefined;
        scroll?: boolean | undefined;
    }): DOMRect;
    /**
     * Return the shadowRoot attached to an element
     */
    getShadowRoot(options?: {}): Promise<any>;
    /**
     * Determine the element displayedness of the given web element.
     */
    isElementDisplayed(options?: {}): Promise<any>;
    /**
     * Check if element is enabled.
     */
    isElementEnabled(options?: {}): Promise<any>;
    /**
     * Determine whether the referenced element is selected or not.
     */
    isElementSelected(options?: {}): Promise<any>;
    /**
     * Perform a series of grouped actions at the specified points in time.
     *
     * @param {object} options
     * @param {object} options.actions
     *     Array of objects with each representing an action sequence.
     * @param {object} options.capabilities
     *     Object with a list of WebDriver session capabilities.
     */
    performActions(options?: {
        actions: object;
        capabilities: object;
    }): Promise<void>;
    /**
     * The release actions command is used to release all the keys and pointer
     * buttons that are currently depressed. This causes events to be fired
     * as if the state was released by an explicit series of actions. It also
     * clears all the internal state of the virtual devices.
     */
    releaseActions(): Promise<void>;
    sendKeysToElement(options?: {}): Promise<any>;
    /**
     * Switch to the specified frame.
     *
     * @param {object=} options
     * @param {(number|Element)=} options.id
     *     If it's a number treat it as the index for all the existing frames.
     *     If it's an Element switch to this specific frame.
     *     If not specified or `null` switch to the top-level browsing context.
     */
    switchToFrame(options?: object | undefined): Promise<{
        browsingContextId: any;
    }>;
    /**
     * Switch to the parent frame.
     */
    switchToParentFrame(): Promise<{
        browsingContextId: any;
    }>;
    #private;
}
