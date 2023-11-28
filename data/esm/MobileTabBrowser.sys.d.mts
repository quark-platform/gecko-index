export class MobileTabBrowser {
    constructor(window: any);
    window: any;
    get tabs(): any[];
    set selectedTab(tab: any);
    get selectedTab(): any;
    get selectedBrowser(): any;
    addEventListener(...args: any[]): void;
    /**
     * Create a new tab.
     *
     * @param {string} uriString
     *     The URI string to load within the newly opened tab.
     *
     * @returns {Promise<Tab>}
     *     The created tab.
     * @throws {Error}
     *     Throws an error if the tab cannot be created.
     */
    addTab(uriString: string): Promise<Tab>;
    getTabForBrowser(browser: any): any;
    removeEventListener(...args: any[]): void;
    removeTab(tab: any): any;
}
