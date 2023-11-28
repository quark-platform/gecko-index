export class Runtime {
    constructor(session: any);
    enabled: boolean;
    contexts: Map<any, any>;
    innerWindowIdToContexts: SetMap;
    /**
     * Helper method in order to instantiate the ExecutionContext for a given
     * DOM Window as well as emitting the related
     * `Runtime.executionContextCreated` event
     *
     * @param {string} name
     *     Event name
     * @param {object=} options
     * @param {number} options.windowId
     *     The inner window id of the newly instantiated document.
     * @param {Window} options.window
     *     The window object of the newly instantiated document.
     * @param {string=} options.contextName
     *     Human-readable name to describe the execution context.
     * @param {boolean=} options.isDefault
     *     Whether the execution context is the default one.
     * @param {string=} options.contextType
     *     "default" or "isolated"
     *
     * @returns {number} ID of created context
     *
     */
    _onContextCreated(name: string, options?: object | undefined): number;
    /**
     * Helper method to destroy the ExecutionContext of the given id. Also emit
     * the related `Runtime.executionContextDestroyed` and
     * `Runtime.executionContextsCleared` events.
     * ContextObserver will call this method with either `id` or `frameId` argument
     * being set.
     *
     * @param {string} name
     *     Event name
     * @param {object=} options
     * @param {number} options.id
     *     The execution context id to destroy.
     * @param {number} options.windowId
     *     The inner-window id of the execution context to destroy.
     * @param {number} options.frameId
     *     The frame id of execution context to destroy.
     * Either `id` or `frameId` or `windowId` is passed.
     */
    _onContextDestroyed(name: string, { id, frameId, windowId }?: object | undefined): void;
    destructor(): void;
    enable(): Promise<void>;
    onConsoleLogEvent(message: any): void;
    disable(): void;
    releaseObject(options?: {}): void;
    /**
     * Calls function with given declaration on the given object.
     *
     * Object group of the result is inherited from the target object.
     *
     * @param {object} options
     * @param {string} options.functionDeclaration
     *     Declaration of the function to call.
     * @param {Array.<object>=} options.arguments
     *     Call arguments. All call arguments must belong to the same
     *     JavaScript world as the target object.
     * @param {boolean=} options.awaitPromise
     *     Whether execution should `await` for resulting value
     *     and return once awaited promise is resolved.
     * @param {number=} options.executionContextId
     *     Specifies execution context which global object will be used
     *     to call function on. Either executionContextId or objectId
     *     should be specified.
     * @param {string=} options.objectId
     *     Identifier of the object to call function on.
     *     Either objectId or executionContextId should be specified.
     * @param {boolean=} options.returnByValue
     *     Whether the result is expected to be a JSON object
     *     which should be sent by value.
     *
     * @returns {Object<RemoteObject, ExceptionDetails>}
     */
    callFunctionOn(options?: {
        functionDeclaration: string;
        arguments?: Array<object> | undefined;
        awaitPromise?: boolean | undefined;
        executionContextId?: number | undefined;
        objectId?: string | undefined;
        returnByValue?: boolean | undefined;
    }): any;
    /**
     * Evaluate expression on global object.
     *
     * @param {object} options
     * @param {string} options.expression
     *     Expression to evaluate.
     * @param {boolean=} options.awaitPromise
     *     Whether execution should `await` for resulting value
     *     and return once awaited promise is resolved.
     * @param {number=} options.contextId
     *     Specifies in which execution context to perform evaluation.
     *     If the parameter is omitted the evaluation will be performed
     *     in the context of the inspected page.
     * @param {boolean=} options.returnByValue
     *     Whether the result is expected to be a JSON object
     *     that should be sent by value. Defaults to false.
     * @param {boolean=} options.userGesture [unsupported]
     *     Whether execution should be treated as initiated by user in the UI.
     *
     * @returns {Object<RemoteObject, exceptionDetails>}
     *     The evaluation result, and optionally exception details.
     */
    evaluate(options?: {
        expression: string;
        awaitPromise?: boolean | undefined;
        contextId?: number | undefined;
        returnByValue?: boolean | undefined;
        userGesture?: boolean | undefined;
    }): any;
    getProperties(options?: {}): any;
    /**
     * Internal methods: the following methods are not part of CDP;
     * note the _ prefix.
     */
    get _debugger(): any;
    __debugger: any;
    _buildExceptionStackTrace(stack: any): {
        callFrames: {
            functionName: any;
            scriptId: any;
            url: any;
            lineNumber: number;
            columnNumber: number;
        }[];
    };
    _buildConsoleStackTrace(stack?: any[]): {
        callFrames: {
            functionName: any;
            scriptId: any;
            url: any;
            lineNumber: number;
            columnNumber: number;
        }[];
    };
    _getRemoteObject(objectId: any): any;
    _serializeRemoteObject(debuggerObj: any, executionContextId: any): any;
    _getRemoteObjectByNodeId(nodeId: any, executionContextId: any): any;
    _setRemoteObject(debuggerObj: any, context: any): any;
    _getDefaultContextForWindow(innerWindowId: any): any;
    _getContextsForFrame(frameId: any): any[];
    _emitConsoleAPICalled(payload: any): void;
    _emitExceptionThrown(payload: any): void;
    /**
     * Takes a console message belonging to the current window and emits a
     * "exceptionThrown" event if it's a Javascript error, otherwise a
     * "consoleAPICalled" event.
     *
     * @param {nsIConsoleMessage} subject
     *     Console message.
     */
    observe(subject: nsIConsoleMessage, topic: any, data: any): void;
    get QueryInterface(): any;
}
declare class SetMap extends Map<any, any> {
    constructor();
    _count: number;
    set(key: any, value: any): this;
    get count(): number;
}
export {};
