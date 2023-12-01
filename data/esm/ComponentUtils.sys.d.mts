export namespace ComponentUtils {
    /**
     * Generates a singleton nsIFactory implementation that can be used as
     * an argument to nsIComponentRegistrar.registerFactory.
     * @param aServiceConstructor
     *        Constructor function of the component.
     */
    function generateSingletonFactory(aServiceConstructor: any): {
        _instance: any;
        createInstance(aIID: any): any;
        QueryInterface: MozQueryInterface;
    };
}
