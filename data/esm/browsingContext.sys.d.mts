export const browsingContext: typeof BrowsingContextModule;
declare class BrowsingContextModule {
    destroy(): void;
    interceptEvent(name: any, payload: any): any;
}
export {};
ommands
     */
    _applySessionData(params: any): void;
    /**
     * Waits until the viewport has reached the new dimensions.
     *
     * @param {object} options
     * @param {number} options.height
     *     Expected height the viewport will resize to.
     * @param {number} options.width
     *     Expected width the viewport will resize to.
     *
     * @returns {Promise}
     *     Promise that resolves when the viewport has been resized.
     */
    _awaitViewportDimensions(options: {
        height: number;
        width: number;
    }): Promise<any>;
    _getBaseURL(): any;
    _getScreenshotRect(params?: {}): DOMRect;
    #private;
}
export {};
focuses the given top-level browsing context.
     *
     * @param {object=} options
     * @param {string} options.context
     *     Id of the browsing context.
     *
     * @throws {InvalidArgumentError}
     *     Raised if an argument is of an invalid type or value.
     * @throws {NoSuchFrameError}
     *     If the browsing context cannot be found.
     */
    activate(options?: object | undefined): Promise<void>;
    /**
     * Used as an argument for browsingContext.captureScreenshot command, as one of the available variants
     * {BoxClipRectangle} or {ElementClipRectangle}, to represent a target of the command.
     *
     * @typedef ClipRectangle
     */
    /**
     * Used as an argument for browsingContext.captureScreenshot command
     * to represent a viewport which is going to be a target of the command.
     *
     * @typedef BoxClipRectangle
     *
     * @property {ClipRectangleType} [type=ClipRectangleType.Viewport]
     * @property {number} x
     * @property {number} y
     * @property {number} width
     * @property {number} height
     */
    /**
     * Used as an argument for browsingContext.captureScreenshot command
     * to represent an element which is going to be a target of the command.
     *
     * @typedef ElementClipRectangle
     *
     * @property {ClipRectangleType} [type=ClipRectangleType.Element]
     * @property {SharedReference} element
     * @property {boolean=} scrollIntoView
     */
    /**
     * Capture a base64-encoded screenshot of the provided browsing context.
     *
     * @param {object=} options
     * @param {string} options.context
     *     Id of the browsing context to screenshot.
     * @param {ClipRectangle=} options.clip
     *     An element or a viewport of which a screenshot should be taken.
     *     If not present, take a screenshot of the whole viewport.
     *
     * @throws {NoSuchFrameError}
     *     If the browsing context cannot be found.
     */
    captureScreenshot(options?: object | undefined): Promise<{
        data: any;
    }>;
    /**
     * Close the provided browsing context.
     *
     * @param {object=} options
     * @param {string} options.context
     *     Id of the browsing context to close.
     *
     * @throws {NoSuchFrameError}
     *     If the browsing context cannot be found.
     * @throws {InvalidArgumentError}
     *     If the browsing context is not a top-level one.
     */
    close(options?: object | undefined): Promise<void>;
    /**
     * Create a new browsing context using the provided type "tab" or "window".
     *
     * @param {object=} options
     * @param {boolean=} options.background
     *     Whether the tab/window should be open in the background. Defaults to false,
     *     which means that the tab/window will be open in the foreground.
     * @param {string=} options.referenceContext
     *     Id of the top-level browsing context to use as reference.
     *     If options.type is "tab", the new tab will open in the same window as
     *     the reference context, and will be added next to the reference context.
     *     If options.type is "window", the reference context is ignored.
     * @param {CreateType} options.type
     *     Type of browsing context to create.
     *
     * @throws {InvalidArgumentError}
     *     If the browsing context is not a top-level one.
     * @throws {NoSuchFrameError}
     *     If the browsing context cannot be found.
     */
    create(options?: object | undefined): Promise<{
        context: any;
    }>;
    /**
     * An object that holds the WebDriver Bidi browsing context information.
     *
     * @typedef BrowsingContextInfo
     *
     * @property {string} context
     *     The id of the browsing context.
     * @property {string=} parent
     *     The parent of the browsing context if it's the root browsing context
     *     of the to be processed browsing context tree.
     * @property {string} url
     *     The current documents location.
     * @property {Array<BrowsingContextInfo>=} children
     *     List of child browsing contexts. Only set if maxDepth hasn't been
     *     reached yet.
     */
    /**
     * An object that holds the WebDriver Bidi browsing context tree information.
     *
     * @typedef BrowsingContextGetTreeResult
     *
     * @property {Array<BrowsingContextInfo>} contexts
     *     List of child browsing contexts.
     */
    /**
     * Returns a tree of all browsing contexts that are descendents of the
     * given context, or all top-level contexts when no root is provided.
     *
     * @param {object=} options
     * @param {number=} options.maxDepth
     *     Depth of the browsing context tree to traverse. If not specified
     *     the whole tree is returned.
     * @param {string=} options.root
     *     Id of the root browsing context.
     *
     * @returns {BrowsingContextGetTreeResult}
     *     Tree of browsing context information.
     * @throws {NoSuchFrameError}
     *     If the browsing context cannot be found.
     */
    getTree(options?: object | undefined): {
        /**
         *     List of child browsing contexts.
         */
        contexts: {
            /**
             *     The id of the browsing context.
             */
            context: string;
            /**
             *     The parent of the browsing context if it's the root browsing context
             *     of the to be processed browsing context tree.
             */
            parent?: string | undefined;
            /**
             *     The current documents location.
             */
            url: string;
            /**
             *     List of child browsing contexts. Only set if maxDepth hasn't been
             *     reached yet.
             */
            children?: any[];
        }[];
    };
    /**
     * Closes an open prompt.
     *
     * @param {object=} options
     * @param {string} options.context
     *     Id of the browsing context.
     * @param {boolean=} options.accept
     *     Whether user prompt should be accepted or dismissed.
     *     Defaults to true.
     * @param {string=} options.userText
     *     Input to the user prompt's value field.
     *     Defaults to an empty string.
     *
     * @throws {InvalidArgumentError}
     *     Raised if an argument is of an invalid type or value.
     * @throws {NoSuchAlertError}
     *     If there is no current user prompt.
     * @throws {NoSuchFrameError}
     *     If the browsing context cannot be found.
     * @throws {UnsupportedOperationError}
     *     Raised when the command is called for "beforeunload" prompt.
     */
    handleUserPrompt(options?: object | undefined): Promise<void>;
    /**
     * An object that holds the WebDriver Bidi navigation information.
     *
     * @typedef BrowsingContextNavigateResult
     *
     * @property {string} navigation
     *     Unique id for this navigation.
     * @property {string} url
     *     The requested or reached URL.
     */
    /**
     * Navigate the given context to the provided url, with the provided wait condition.
     *
     * @param {object=} options
     * @param {string} options.context
     *     Id of the browsing context to navigate.
     * @param {string} options.url
     *     Url for the navigation.
     * @param {WaitCondition=} options.wait
     *     Wait condition for the navigation, one of "none", "interactive", "complete".
     *
     * @returns {BrowsingContextNavigateResult}
     *     Navigation result.
     *
     * @throws {InvalidArgumentError}
     *     Raised if an argument is of an invalid type or value.
     * @throws {NoSuchFrameError}
     *     If the browsing context for context cannot be found.
     */
    navigate(options?: object | undefined): {
        /**
         *     Unique id for this navigation.
         */
        navigation: string;
        /**
         *     The requested or reached URL.
         */
        url: string;
    };
    /**
     * An object that holds the information about margins
     * for Webdriver BiDi browsingContext.print command.
     *
     * @typedef BrowsingContextPrintMarginParameters
     *
     * @property {number=} bottom
     *     Bottom margin in cm. Defaults to 1cm (~0.4 inches).
     * @property {number=} left
     *     Left margin in cm. Defaults to 1cm (~0.4 inches).
     * @property {number=} right
     *     Right margin in cm. Defaults to 1cm (~0.4 inches).
     * @property {number=} top
     *     Top margin in cm. Defaults to 1cm (~0.4 inches).
     */
    /**
     * An object that holds the information about paper size
     * for Webdriver BiDi browsingContext.print command.
     *
     * @typedef BrowsingContextPrintPageParameters
     *
     * @property {number=} height
     *     Paper height in cm. Defaults to US letter height (27.94cm / 11 inches).
     * @property {number=} width
     *     Paper width in cm. Defaults to US letter width (21.59cm / 8.5 inches).
     */
    /**
     * Used as return value for Webdriver BiDi browsingContext.print command.
     *
     * @typedef BrowsingContextPrintResult
     *
     * @property {string} data
     *     Base64 encoded PDF representing printed document.
     */
    /**
     * Creates a paginated PDF representation of a document
     * of the provided browsing context, and returns it
     * as a Base64-encoded string.
     *
     * @param {object=} options
     * @param {string} options.context
     *     Id of the browsing context.
     * @param {boolean=} options.background
     *     Whether or not to print background colors and images.
     *     Defaults to false, which prints without background graphics.
     * @param {BrowsingContextPrintMarginParameters=} options.margin
     *     Paper margins.
     * @param {('landscape'|'portrait')=} options.orientation
     *     Paper orientation. Defaults to 'portrait'.
     * @param {BrowsingContextPrintPageParameters=} options.page
     *     Paper size.
     * @param {Array<number|string>=} options.pageRanges
     *     Paper ranges to print, e.g., ['1-5', 8, '11-13'].
     *     Defaults to the empty array, which means print all pages.
     * @param {number=} options.scale
     *     Scale of the webpage rendering. Defaults to 1.0.
     * @param {boolean=} options.shrinkToFit
     *     Whether or not to override page size as defined by CSS.
     *     Defaults to true, in which case the content will be scaled
     *     to fit the paper size.
     *
     * @returns {BrowsingContextPrintResult}
     *
     * @throws {InvalidArgumentError}
     *     Raised if an argument is of an invalid type or value.
     * @throws {NoSuchFrameError}
     *     If the browsing context cannot be found.
     */
    print(options?: object | undefined): {
        /**
         *     Base64 encoded PDF representing printed document.
         */
        data: string;
    };
    /**
     * Reload the given context's document, with the provided wait condition.
     *
     * @param {object=} options
     * @param {string} options.context
     *     Id of the browsing context to navigate.
     * @param {bool=} options.ignoreCache
     *     If true ignore the browser cache. [Not yet supported]
     * @param {WaitCondition=} options.wait
     *     Wait condition for the navigation, one of "none", "interactive", "complete".
     *
     * @returns {BrowsingContextNavigateResult}
     *     Navigation result.
     *
     * @throws {InvalidArgumentError}
     *     Raised if an argument is of an invalid type or value.
     * @throws {NoSuchFrameError}
     *     If the browsing context for context cannot be found.
     */
    reload(options?: object | undefined): {
        /**
         *     Unique id for this navigation.
         */
        navigation: string;
        /**
         *     The requested or reached URL.
         */
        url: string;
    };
    /**
     * Set the top-level browsing context's viewport to a given dimension.
     *
     * @param {object=} options
     * @param {string} options.context
     *     Id of the browsing context.
     * @param {Viewport|null} options.viewport
     *     Dimensions to set the viewport to, or `null` to reset it
     *     to the original dimensions.
     *
     * @throws {InvalidArgumentError}
     *     Raised if an argument is of an invalid type or value.
     * @throws UnsupportedOperationError
     *     Raised when the command is called on Android.
     */
    setViewport(options?: object | undefined): Promise<void>;
    /**
     * Internal commands
     */
    _applySessionData(params: any): void;
    #private;
}
export {};
