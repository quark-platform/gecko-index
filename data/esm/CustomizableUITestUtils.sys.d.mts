export class CustomizableUITestUtils {
    /**
     * Constructs an instance that operates with the specified browser window.
     */
    constructor(window: any);
    window: any;
    document: any;
    PanelUI: any;
    /**
     * Opens a closed PanelMultiView via the specified function while waiting for
     * the main view with the specified ID to become fully interactive.
     */
    openPanelMultiView(panel: any, mainView: any, openFn: any): Promise<void>;
    /**
     * Closes an open PanelMultiView via the specified function while waiting for
     * the operation to complete.
     */
    hidePanelMultiView(panel: any, closeFn: any): Promise<void>;
    /**
     * Opens the main menu and waits for it to become fully interactive.
     */
    openMainMenu(): Promise<void>;
    /**
     * Closes the main menu and waits for the operation to complete.
     */
    hideMainMenu(): Promise<void>;
    /**
     * Add the search bar into the nav bar and verify it does not overflow.
     *
     * @returns {Promise}
     * @resolves The search bar element.
     * @rejects If search bar is not found, or overflows.
     */
    addSearchBar(): Promise<any>;
    removeSearchBar(): void;
}
