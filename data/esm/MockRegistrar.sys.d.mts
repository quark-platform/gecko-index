export const MockRegistrar: Readonly<{
    _registeredComponents: Map<any, any>;
    _originalCIDs: Map<any, any>;
    readonly registrar: any;
    /**
     * Register a mock to override target interfaces.
     * The target interface may be accessed through _genuine property of the mock.
     * If you register multiple mocks to the same contract ID, you have to call
     * unregister in reverse order. Otherwise the previous factory will not be
     * restored.
     *
     * @param contractID The contract ID of the interface which is overridden by
                         the mock.
     *                   e.g. "@mozilla.org/file/directory_service;1"
     * @param mock       An object which implements interfaces for the contract ID.
     * @param args       An array which is passed in the constructor of mock.
     *
     * @return           The CID of the mock.
     */
    register(contractID: any, mock: any, args: any): nsIDPtrType;
    /**
     * Unregister the mock.
     *
     * @param cid The CID of the mock.
     */
    unregister(cid: any): void;
    /**
     * Unregister all registered mocks.
     */
    unregisterAll(): void;
}>;
