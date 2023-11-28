export namespace XPCOMUtils {
    /**
     * Defines a getter on a specified object that will be created upon first use.
     *
     * @param aObject
     *        The object to define the lazy getter on.
     * @param aName
     *        The name of the getter to define on aObject.
     * @param aLambda
     *        A function that returns what the getter should return.  This will
     *        only ever be called once.
     */
    function defineLazyGetter(aObject: any, aName: any, aLambda: any): void;
    /**
     * Defines a getter on a specified object for a script.  The script will not
     * be loaded until first use.
     *
     * @param aObject
     *        The object to define the lazy getter on.
     * @param aNames
     *        The name of the getter to define on aObject for the script.
     *        This can be a string if the script exports only one symbol,
     *        or an array of strings if the script can be first accessed
     *        from several different symbols.
     * @param aResource
     *        The URL used to obtain the script.
     */
    function defineLazyScriptGetter(aObject: any, aNames: any, aResource: any): void;
    /**
     * Overrides the scriptloader definition for tests to help with globals
     * tracking. Should only be used for tests.
     *
     * @param {object} aObject
     *        The alternative script loader object to use.
     */
    function overrideScriptLoaderForTests(aObject: any): void;
    /**
     * Defines a getter property on the given object for each of the given
     * global names as accepted by Cu.importGlobalProperties. These
     * properties are imported into the shared JSM module global, and then
     * copied onto the given object, no matter which global the object
     * belongs to.
     *
     * @param {object} aObject
     *        The object on which to define the properties.
     * @param {string[]} aNames
     *        The list of global properties to define.
     */
    function defineLazyGlobalGetters(aObject: any, aNames: string[]): void;
    /**
     * Defines a getter on a specified object for a service.  The service will not
     * be obtained until first use.
     *
     * @param aObject
     *        The object to define the lazy getter on.
     * @param aName
     *        The name of the getter to define on aObject for the service.
     * @param aContract
     *        The contract used to obtain the service.
     * @param aInterfaceName
     *        The name of the interface to query the service to.
     */
    function defineLazyServiceGetter(aObject: any, aName: any, aContract: any, aInterfaceName: any): void;
    /**
     * Defines a lazy service getter on a specified object for each
     * property in the given object.
     *
     * @param aObject
     *        The object to define the lazy getter on.
     * @param aServices
     *        An object with a property for each service to be
     *        imported, where the property name is the name of the
     *        symbol to define, and the value is a 1 or 2 element array
     *        containing the contract ID and, optionally, the interface
     *        name of the service, as passed to defineLazyServiceGetter.
     */
    function defineLazyServiceGetters(aObject: any, aServices: any): void;
    /**
     * Defines a lazy module getter on a specified object for each
     * property in the given object.
     *
     * @param aObject
     *        The object to define the lazy getter on.
     * @param aModules
     *        An object with a property for each module property to be
     *        imported, where the property name is the name of the
     *        imported symbol and the value is the module URI.
     */
    function defineLazyModuleGetters(aObject: any, aModules: any): void;
    /**
     * Defines a getter on a specified object for preference value. The
     * preference is read the first time that the property is accessed,
     * and is thereafter kept up-to-date using a preference observer.
     *
     * @param aObject
     *        The object to define the lazy getter on.
     * @param aName
     *        The name of the getter property to define on aObject.
     * @param aPreference
     *        The name of the preference to read.
     * @param aDefaultPrefValue
     *        The default value to use, if the preference is not defined.
     *        This is the default value of the pref, before applying aTransform.
     * @param aOnUpdate
     *        A function to call upon update. Receives as arguments
     *         `(aPreference, previousValue, newValue)`
     * @param aTransform
     *        An optional function to transform the value.  If provided,
     *        this function receives the new preference value as an argument
     *        and its return value is used by the getter.
     */
    function defineLazyPreferenceGetter(aObject: any, aName: any, aPreference: any, aDefaultPrefValue?: any, aOnUpdate?: any, aTransform?: (val: any) => any): void;
    /**
     * Defines a non-writable property on an object.
     */
    function defineConstant(aObj: any, aName: any, aValue: any): void;
}
