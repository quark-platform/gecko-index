export namespace ExtensionWorkerChild {
    let extensionWorkerContexts: Map<any, any>;
    let apiManager: any;
    /**
     * Create an extension worker context (on a mozExtensionAPIRequest with
     * requestType "initWorkerContext").
     *
     * @param {BrowserExtensionContent} extension
     *     The extension for which the context should be created.
     * @param {mozIExtensionServiceWorkerInfo} serviceWorkerInfo
     */
    function initExtensionWorkerContext(extension: BrowserExtensionContent, serviceWorkerInfo: mozIExtensionServiceWorkerInfo): void;
    /**
     * Get an existing extension worker context for the given extension and
     * service worker.
     *
     * @param {BrowserExtensionContent} extension
     *     The extension for which the context should be created.
     * @param {mozIExtensionServiceWorkerInfo} serviceWorkerInfo
     *
     * @returns {ExtensionWorkerContextChild}
     */
    function getExtensionWorkerContext(extension: BrowserExtensionContent, serviceWorkerInfo: mozIExtensionServiceWorkerInfo): ExtensionWorkerContextChild;
    /**
     * Notify the main process when an extension worker script has been loaded.
     *
     * @param {number} descriptorId The service worker descriptor ID of the destroyed context.
     * @param {WebExtensionPolicy} policy
     */
    function notifyExtensionWorkerContextLoaded(descriptorId: number, policy: WebExtensionPolicy): void;
    /**
     * Close the ExtensionWorkerContextChild belonging to the given service worker, if any.
     *
     * @param {number} descriptorId The service worker descriptor ID of the destroyed context.
     */
    function destroyExtensionWorkerContext(descriptorId: number): void;
    function shutdownExtension(extensionId: any): void;
}
