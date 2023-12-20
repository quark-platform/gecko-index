export type RealmType = string;
export namespace RealmType {
    let AudioWorklet: string;
    let DedicatedWorker: string;
    let PaintWorklet: string;
    let ServiceWorker: string;
    let SharedWorker: string;
    let Window: string;
    let Worker: string;
    let Worklet: string;
}
/**
 * Base class that wraps any kind of WebDriver BiDi realm.
 */
export class Realm {
    destroy(): void;
    /**
     * Get the browsing context of the realm instance.
     */
    get browsingContext(): any;
    /**
     * Get the unique identifier of the realm instance.
     *
     * @returns {string} The unique identifier.
     */
    get id(): string;
    /**
     * A getter to get a realm origin.
     *
     * It's required to be implemented in the sub class.
     */
    get origin(): void;
    /**
     * Ensure the provided object can be used within this realm.
  
     * @param {object} obj
     *     Any non-primitive object.
  
     * @returns {object}
     *     An object usable in the current realm.
     */
    cloneIntoRealm(obj: object): object;
    /**
     * Remove the reference corresponding to the provided unique handle.
     *
     * @param {string} handle
     *     The unique handle of an object reference tracked in this realm.
     */
    removeObjectHandle(handle: string): void;
    /**
     * Get a new unique handle for the provided object, creating a strong
     * reference on the object.
     *
     * @param {object} object
     *     Any non-primitive object.
     * @returns {string} The unique handle created for this strong reference.
     */
    getHandleForObject(object: object): string;
    /**
     * Get the basic realm information.
     *
     * @returns {BaseRealmInfo}
     */
    getInfo(): BaseRealmInfo;
    /**
     * Retrieve the object corresponding to the provided unique handle.
     *
     * @param {string} handle
     *     The unique handle of an object reference tracked in this realm.
     * @returns {object} object
     *     Any non-primitive object.
     */
    getObjectForHandle(handle: string): object;
    #private;
}
/**
 * Wrapper for Window realms including sandbox objects.
 */
export class WindowRealm extends Realm {
    static type: any;
    /**
     *
     * @param {Window} window
     *     The window global to wrap.
     * @param {object} options
     * @param {string=} options.sandboxName
     *     Name of the sandbox to create if specified. Defaults to `null`.
     */
    constructor(window: Window, options?: {
        sandboxName?: string | undefined;
    });
    get globalObjectReference(): any;
    get isSandbox(): boolean;
    get origin(): string;
    set userActivationEnabled(enable: boolean);
    get userActivationEnabled(): boolean;
    /**
     * Evaluates a provided expression in the context of the current realm.
     *
     * @param {string} expression
     *     The expression to evaluate.
     *
     * @returns {object}
     *     - evaluationStatus {EvaluationStatus} One of "normal", "throw".
     *     - exceptionDetails {ExceptionDetails=} the details of the exception if
     *       the evaluation status was "throw".
     *     - result {RemoteValue=} the result of the evaluation serialized as a
     *       RemoteValue if the evaluation status was "normal".
     */
    executeInGlobal(expression: string): object;
    /**
     * Call a function in the context of the current realm.
     *
     * @param {string} functionDeclaration
     *     The body of the function to call.
     * @param {Array<object>} functionArguments
     *     The arguments to pass to the function call.
     * @param {object} thisParameter
     *     The value of the `this` keyword for the function call.
     *
     * @returns {object}
     *     - evaluationStatus {EvaluationStatus} One of "normal", "throw".
     *     - exceptionDetails {ExceptionDetails=} the details of the exception if
     *       the evaluation status was "throw".
     *     - result {RemoteValue=} the result of the evaluation serialized as a
     *       RemoteValue if the evaluation status was "normal".
     */
    executeInGlobalWithBindings(functionDeclaration: string, functionArguments: Array<object>, thisParameter: object): object;
    /**
     * Log an error caused by a script evaluation.
     *
     * @param {string} message
     *     The error message.
     * @param {Stack} stack
     *     The JavaScript stack trace.
     */
    reportError(message: string, stack: Stack): void;
    #private;
}
