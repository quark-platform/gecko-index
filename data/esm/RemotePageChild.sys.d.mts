export class RemotePageChild {
    actorCreated(): void;
    listeners: Map<any, any>;
    exportBaseFunctions(): void;
    /**
     * Exports a list of functions to be accessible by the privileged page.
     * Subclasses may call this function to add functions that are specific
     * to a page. When the page calls a function, a function with the same
     * name is called within the child actor.
     *
     * Only functions that appear in the whitelist in the
     * RemotePageAccessManager for that page will be exported.
     *
     * @param array of function names.
     */
    exportFunctions(functions: any): void;
    handleEvent(): void;
    receiveMessage(messagedata: any): void;
    wrapPromise(promise: any): any;
    /**
     * Returns true if a feature cannot be accessed by the current page.
     * Throws an exception if the feature may not be accessed.
  
     * @param aDocument child process document to call from
     * @param aFeature to feature to check access to
     * @param aValue value that must be included with that feature's whitelist
     * @returns true if access is allowed or throws an exception otherwise
     */
    checkAllowAccess(aFeature: any, aValue: any): boolean;
    addPage(aUrl: any, aFunctionMap: any): void;
    RPMSendAsyncMessage(aName: any, aData?: any): void;
    RPMSendQuery(aName: any, aData?: any): any;
    /**
     * Adds a listener for messages. Many callbacks can be registered for the
     * same message if necessary. An attempt to register the same callback for the
     * same message twice will be ignored. When called the callback is passed an
     * object with these properties:
     *   name:   The message name
     *   data:   Any data sent with the message
     */
    RPMAddMessageListener(aName: any, aCallback: any): void;
    /**
     * Removes a listener for messages.
     */
    RPMRemoveMessageListener(aName: any, aCallback: any): void;
    RPMGetIntPref(aPref: any, defaultValue: any): any;
    RPMGetStringPref(aPref: any): any;
    RPMGetBoolPref(aPref: any, defaultValue: any): any;
    RPMSetPref(aPref: any, aVal: any): any;
    RPMGetFormatURLPref(aFormatURL: any): any;
    RPMIsWindowPrivate(): any;
}
