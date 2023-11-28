/**
 * This class represent a debuggable context onto which we can evaluate Javascript.
 * This is typically a document, but it could also be a worker, an add-on, ... or
 * any kind of context involving JS scripts.
 *
 * @param {Debugger} dbg
 *   A Debugger instance that we can use to inspect the given global.
 * @param {GlobalObject} debuggee
 *   The debuggable context's global object. This is typically the document window
 *   object. But it can also be any global object, like a worker global scope object.
 */
export class ExecutionContext {
    constructor(dbg: any, debuggee: any, id: any, isDefault: any);
    _debugger: any;
    _debuggee: any;
    window: any;
    windowId: any;
    id: any;
    frameId: any;
    isDefault: any;
    _remoteObjects: Map<any, any>;
    destructor(): void;
    get browsingContext(): any;
    hasRemoteObject(objectId: any): boolean;
    getRemoteObject(objectId: any): any;
    getRemoteObjectByNodeId(nodeId: any): any;
    releaseObject(objectId: any): boolean;
    /**
     * Add a new debuggerObj to the object cache.
     *
     * Whenever an object is returned as reference, a new entry is added
     * to the internal object cache. It means the same underlying object or node
     * can be represented via multiple references.
     */
    setRemoteObject(debuggerObj: any): any;
    /**
     * Evaluate a Javascript expression.
     *
     * @param {string} expression
     *   The JS expression to evaluate against the JS context.
     * @param {boolean} awaitPromise
     *     Whether execution should `await` for resulting value
     *     and return once awaited promise is resolved.
     * @param {boolean} returnByValue
     *     Whether the result is expected to be a JSON object
     *     that should be sent by value.
     *
     * @returns {object} A multi-form object depending if the execution
     *   succeed or failed. If the expression failed to evaluate,
     *   it will return an object with an `exceptionDetails` attribute
     *   matching the `ExceptionDetails` CDP type. Otherwise it will
     *   return an object with `result` attribute whose type is
     *   `RemoteObject` CDP type.
     */
    evaluate(expression: string, awaitPromise: boolean, returnByValue: boolean): object;
    /**
     * Given a Debugger.Object reference for an Exception, return a JSON object
     * describing the exception by following CDP ExceptionDetails specification.
     */
    _returnError(exception: any): {
        exceptionDetails: {
            text: any;
            exception?: undefined;
        };
    } | {
        exceptionDetails: {
            exception: RemoteObject;
            text?: undefined;
        };
    };
    callFunctionOn(functionDeclaration: any, callArguments?: any[], returnByValue?: boolean, awaitPromise?: boolean, objectId?: any): Promise<{
        exceptionDetails: {
            text: any;
            exception?: undefined;
        };
    } | {
        exceptionDetails: {
            exception: RemoteObject;
            text?: undefined;
        };
    } | {
        result: any;
    }>;
    getProperties({ objectId, ownProperties }: {
        objectId: any;
        ownProperties: any;
    }): {
        result: any[];
    };
    /**
     * Given a CDP `CallArgument`, return a JS value that represent this argument.
     * Note that `CallArgument` is actually very similar to `RemoteObject`
     */
    _fromCallArgument(arg: any): any;
    /**
     * Given a JS value, create a copy of it within the debugee compartment.
     */
    _deserialize(obj: any): any;
    /**
     * Given a `Debugger.Object` object, return a JSON-serializable description of it
     * matching `RemoteObject` CDP type.
     *
     * @param {Debugger.Object} debuggerObj
     *  The object to serialize
     * @returns {RemoteObject}
     *  The serialized description of the given object
     */
    _toRemoteObject(debuggerObj: Debugger.Object): RemoteObject;
    /**
     * Given a `Debugger.Object` object, return a JSON-serializable description of it
     * matching `RemoteObject` CDP type.
     *
     * @param {Debugger.Object} debuggerObj
     *  The object to serialize
     * @returns {RemoteObject}
     *  The serialized description of the given object
     */
    _toRemoteObjectByValue(debuggerObj: Debugger.Object): RemoteObject;
    /**
     * Convert a given `Debugger.Object` to an object.
     *
     * @param {Debugger.Object} debuggerObj
     *  The object to convert
     *
     * @returns {object}
     *  The converted object
     */
    _serialize(debuggerObj: Debugger.Object): object;
    _toRawObject(maybeDebuggerObject: any): any;
}
