export function HandlerService(): void;
export class HandlerService {
    QueryInterface: MozQueryInterface;
    __store: null;
    get _store(): any;
    __storeInitialized: boolean;
    _ensureStoreInitialized(): void;
    _dataPostProcessor(data: any): any;
    /**
     * Injects new default protocol handlers if the version in the preferences is
     * newer than the one in the data store.
     */
    _injectDefaultProtocolHandlersIfNeeded(): void;
    _injectDefaultProtocolHandlers(): void;
    /**
     * Execute any migrations. Migrations are defined here for any changes or removals for
     * existing handlers. Additions are still handled via the localized prefs infrastructure.
     *
     * This depends on the browser.handlers.migrations pref being set by migrateUI in
     * nsBrowserGlue (for Fx Desktop) or similar mechanisms for other products.
     * This is a comma-separated list of identifiers of migrations that need running.
     * This avoids both re-running older migrations and keeping an additional
     * pref around permanently.
     */
    _migrateProtocolHandlersIfNeeded(): void;
    _onDBChange(): Promise<void>;
    observe(subject: any, topic: any, data: any): void;
    asyncInit(): void;
    enumerate(): any;
    store(handlerInfo: any): void;
    fillHandlerInfo(handlerInfo: any, overrideType: any): void;
    /**
     * Private method to inject stored handler information into an nsIHandlerInfo
     * instance.
     * @param handlerInfo           the nsIHandlerInfo instance to write to
     * @param storedHandlers        the stored handlers
     * @param keepPreferredApp      whether to keep the handlerInfo's
     *                              preferredApplicationHandler or override it
     *                              (default: false, ie override it)
     */
    _appendStoredHandlers(handlerInfo: any, storedHandlers: any, keepPreferredApp: any): void;
    /**
     * @param handler
     *        A nsIHandlerApp handler app
     * @returns  Serializable representation of a handler app object.
     */
    handlerAppToSerializable(handler: any): {
        name: any;
        path: any;
        uriTemplate?: undefined;
        service?: undefined;
        method?: undefined;
        objectPath?: undefined;
        dBusInterface?: undefined;
        command?: undefined;
    } | {
        name: any;
        uriTemplate: any;
        path?: undefined;
        service?: undefined;
        method?: undefined;
        objectPath?: undefined;
        dBusInterface?: undefined;
        command?: undefined;
    } | {
        name: any;
        service: any;
        method: any;
        objectPath: any;
        dBusInterface: any;
        path?: undefined;
        uriTemplate?: undefined;
        command?: undefined;
    } | {
        name: any;
        command: any;
        path?: undefined;
        uriTemplate?: undefined;
        service?: undefined;
        method?: undefined;
        objectPath?: undefined;
        dBusInterface?: undefined;
    };
    /**
     * @param handlerObj
     *        Serializable representation of a handler object.
     * @returns  {nsIHandlerApp}  the handler app, if any; otherwise null
     */
    handlerAppFromSerializable(handlerObj: any): nsIHandlerApp;
    /**
     * The function returns a reference to the "mimeTypes" or "schemes" object
     * based on which type of handlerInfo is provided.
     */
    _getHandlerListByHandlerInfoType(handlerInfo: any): any;
    /**
     * Determines whether an nsIHandlerInfo instance represents a MIME type.
     */
    _isMIMEInfo(handlerInfo: any): any;
    exists(handlerInfo: any): boolean;
    remove(handlerInfo: any): void;
    getTypeFromExtension(fileExtension: any): string;
    _mockedHandler: null;
    _mockedProtocol: null;
    _insertMockedHandler(handlerInfo: any): void;
    mockProtocolHandler(protocol: any): void;
}
