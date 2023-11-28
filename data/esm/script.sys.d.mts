export const script: typeof ScriptModule;
declare class ScriptModule {
    destroy(): void;
    interceptEvent(name: any, payload: any): any;
}
export {};
troy(): void;
    observe(subject: any, topic: any): void;
    /**
     * Call a function in the current window global.
     *
     * @param {object} options
     * @param {boolean} options.awaitPromise
     *     Determines if the command should wait for the return value of the
     *     expression to resolve, if this return value is a Promise.
     * @param {Array<RemoteValue>=} options.commandArguments
     *     The arguments to pass to the function call.
     * @param {string} options.functionDeclaration
     *     The body of the function to call.
     * @param {string=} options.realmId
     *     The id of the realm.
     * @param {OwnershipModel} options.resultOwnership
     *     The ownership model to use for the results of this evaluation.
     * @param {string=} options.sandbox
     *     The name of the sandbox.
     * @param {SerializationOptions=} options.serializationOptions
     *     An object which holds the information of how the result of evaluation
     *     in case of ECMAScript objects should be serialized.
     * @param {RemoteValue=} options.thisParameter
     *     The value of the this keyword for the function call.
     *
     * @returns {object}
     *     - evaluationStatus {EvaluationStatus} One of "normal", "throw".
     *     - exceptionDetails {ExceptionDetails=} the details of the exception if
     *     the evaluation status was "throw".
     *     - result {RemoteValue=} the result of the evaluation serialized as a
     *     RemoteValue if the evaluation status was "normal".
     */
    callFunctionDeclaration(options: {
        awaitPromise: boolean;
        commandArguments?: Array<RemoteValue> | undefined;
        functionDeclaration: string;
        realmId?: string | undefined;
        resultOwnership: OwnershipModel;
        sandbox?: string | undefined;
        serializationOptions?: SerializationOptions | undefined;
        thisParameter?: RemoteValue | undefined;
    }): object;
    /**
     * Delete the provided handles from the realm corresponding to the provided
     * sandbox name.
     *
     * @param {object=} options
     * @param {Array<string>} options.handles
     *     Array of handle ids to disown.
     * @param {string=} options.realmId
     *     The id of the realm.
     * @param {string=} options.sandbox
     *     The name of the sandbox.
     */
    disownHandles(options?: object | undefined): void;
    /**
     * Evaluate a provided expression in the current window global.
     *
     * @param {object} options
     * @param {boolean} options.awaitPromise
     *     Determines if the command should wait for the return value of the
     *     expression to resolve, if this return value is a Promise.
     * @param {string} options.expression
     *     The expression to evaluate.
     * @param {string=} options.realmId
     *     The id of the realm.
     * @param {OwnershipModel} options.resultOwnership
     *     The ownership model to use for the results of this evaluation.
     * @param {string=} options.sandbox
     *     The name of the sandbox.
     *
     * @returns {object}
     *     - evaluationStatus {EvaluationStatus} One of "normal", "throw".
     *     - exceptionDetails {ExceptionDetails=} the details of the exception if
     *     the evaluation status was "throw".
     *     - result {RemoteValue=} the result of the evaluation serialized as a
     *     RemoteValue if the evaluation status was "normal".
     */
    evaluateExpression(options: {
        awaitPromise: boolean;
        expression: string;
        realmId?: string | undefined;
        resultOwnership: OwnershipModel;
        sandbox?: string | undefined;
    }): object;
    /**
     * Get realms for the current window global.
     *
     * @returns {Array<object>}
     *     - context {BrowsingContext} The browsing context, associated with the realm.
     *     - origin {string} The serialization of an origin.
     *     - realm {string} The realm unique identifier.
     *     - sandbox {string=} The name of the sandbox.
     *     - type {RealmType.Window} The window realm type.
     */
    getWindowRealms(): Array<object>;
    /**
     * Internal commands
     */
    _applySessionData(params: any): void;
    #private;
}
export {};
     to `OwnershipModel.None`.
     * @param {SerializationOptions=} options.serializationOptions
     *     An object which holds the information of how the result of evaluation
     *     in case of ECMAScript objects should be serialized.
     * @param {object} options.target
     *     The target for the evaluation, which either matches the definition for
     *     a RealmTarget or for ContextTarget.
     * @param {RemoteValue=} options.this
     *     The value of the this keyword for the function call.
     *
     * @returns {ScriptEvaluateResult}
     *
     * @throws {InvalidArgumentError}
     *     If any of the arguments does not have the expected type.
     * @throws {NoSuchFrameError}
     *     If the target cannot be found.
     */
    callFunction(options?: object | undefined, ...args: any[]): any;
    /**
     * The script.disown command disowns the given handles. This does not
     * guarantee the handled object will be garbage collected, as there can be
     * other handles or strong ECMAScript references.
     *
     * @param {object=} options
     * @param {Array<string>} options.handles
     *     Array of handle ids to disown.
     * @param {object} options.target
     *     The target owning the handles, which either matches the definition for
     *     a RealmTarget or for ContextTarget.
     */
    disown(options?: object | undefined): Promise<void>;
    /**
     * Evaluate a provided expression in the provided target, which is either a
     * realm or a browsing context.
     *
     * @param {object=} options
     * @param {boolean} options.awaitPromise
     *     Determines if the command should wait for the return value of the
     *     expression to resolve, if this return value is a Promise.
     * @param {string} options.expression
     *     The expression to evaluate.
     * @param {OwnershipModel=} options.resultOwnership
     *     The ownership model to use for the results of this evaluation. Defaults
     *     to `OwnershipModel.None`.
     * @param {SerializationOptions=} options.serializationOptions
     *     An object which holds the information of how the result of evaluation
     *     in case of ECMAScript objects should be serialized.
     * @param {object} options.target
     *     The target for the evaluation, which either matches the definition for
     *     a RealmTarget or for ContextTarget.
     *
     * @returns {ScriptEvaluateResult}
     *
     * @throws {InvalidArgumentError}
     *     If any of the arguments does not have the expected type.
     * @throws {NoSuchFrameError}
     *     If the target cannot be found.
     */
    evaluate(options?: object | undefined): any;
    /**
     * An object that holds basic information about a realm.
     *
     * @typedef BaseRealmInfo
     *
     * @property {string} id
     *     The realm unique identifier.
     * @property {string} origin
     *     The serialization of an origin.
     */
    /**
     *
     * @typedef WindowRealmInfoProperties
     *
     * @property {string} context
     *     The browsing context id, associated with the realm.
     * @property {string=} sandbox
     *     The name of the sandbox. If the value is null or empty
     *     string, the default realm will be returned.
     * @property {RealmType.Window} type
     *     The window realm type.
     */
    /**
     * An object that holds information about a window realm.
     *
     * @typedef {BaseRealmInfo & WindowRealmInfoProperties} WindowRealmInfo
     */
    /**
     * An object that holds information about a realm.
     *
     * @typedef {WindowRealmInfo} RealmInfo
     */
    /**
     * An object that holds a list of realms.
     *
     * @typedef ScriptGetRealmsResult
     *
     * @property {Array<RealmInfo>} realms
     *     List of realms.
     */
    /**
     * Returns a list of all realms, optionally filtered to realms
     * of a specific type, or to the realms associated with
     * a specified browsing context.
     *
     * @param {object=} options
     * @param {string=} options.context
     *     The id of the browsing context to filter
     *     only realms associated with it. If not provided, return realms
     *     associated with all browsing contexts.
     * @param {RealmType=} options.type
     *     Type of realm to filter.
     *     If not provided, return realms of all types.
     *
     * @returns {ScriptGetRealmsResult}
     *
     * @throws {InvalidArgumentError}
     *     If any of the arguments does not have the expected type.
     * @throws {NoSuchFrameError}
     *     If the context cannot be found.
     */
    getRealms(options?: object | undefined): {
        /**
         *     List of realms.
         */
        realms: ({
            /**
             *     The realm unique identifier.
             */
            id: string;
            /**
             *     The serialization of an origin.
             */
            origin: string;
        } & {
            /**
             *     The browsing context id, associated with the realm.
             */
            context: string;
            /**
             *     The name of the sandbox. If the value is null or empty
             *     string, the default realm will be returned.
             */
            sandbox?: string | undefined;
            /**
             *     The window realm type.
             */
            type: RealmType.Window;
        })[];
    };
    /**
     * Removes a preload script.
     *
     * @param {object=} options
     * @param {string} options.script
     *     The unique id associated with a preload script.
     *
     * @throws {InvalidArgumentError}
     *     If any of the arguments does not have the expected type.
     * @throws {NoSuchScriptError}
     *     If the script cannot be found.
     */
    removePreloadScript(options?: object | undefined): Promise<void>;
    _applySessionData(params: any): void;
    #private;
}
export {};
