export function logEvenNumbers(logger: any, items: any): Promise<any>;
export function logEvenNumbersMainThread(logger: any, items: any): any;
export namespace UnitTestObjs {
    export { uniffiObjectPtr };
    export { callbackHandlerLogger };
}
export class FfiConverterI32 extends FfiConverter {
    static computeSize(): number;
    static lift(value: any): any;
    static lower(value: any): any;
    static write(dataStream: any, value: any): void;
    static read(dataStream: any): any;
}
export class FfiConverterString extends FfiConverter {
    static lift(buf: any): string;
    static lower(value: any): ArrayBufferLike;
    static write(dataStream: any, value: any): void;
    static read(dataStream: any): any;
    static computeSize(value: any): number;
}
export class FfiConverterCallbackInterfaceLogger extends FfiConverter {
    static lower(callbackObj: any): int;
    static lift(handleId: any): obj;
    static read(dataStream: any): obj;
    static write(dataStream: any, callbackObj: any): void;
    static computeSize(callbackObj: any): number;
}
export class FfiConverterSequencei32 extends FfiConverterArrayBuffer {
    static read(dataStream: any): any[];
    static write(dataStream: any, value: any): void;
    static computeSize(value: any): number;
}
declare const uniffiObjectPtr: unique symbol;
declare const callbackHandlerLogger: UniFFICallbackHandler;
declare class FfiConverter {
    static checkType(value: any): void;
}
declare class FfiConverterArrayBuffer extends FfiConverter {
    static lift(buf: any): any;
    static lower(value: any): ArrayBuffer;
}
/**
 * Handler for a single UniFFI CallbackInterface
 *
 * This class stores objects that implement a callback interface in a handle
 * map, allowing them to be referenced by the Rust code using an integer
 * handle.
 *
 * While the callback object is stored in the map, it allows the Rust code to
 * call methods on the object using the callback object handle, a method id,
 * and an ArrayBuffer packed with the method arguments.
 *
 * When the Rust code drops its reference, it sends a call with the methodId=0,
 * which causes callback object to be removed from the map.
 */
declare class UniFFICallbackHandler {
    /**
     * Create a UniFFICallbackHandler
     * @param {string} name - Human-friendly name for this callback interface
     * @param {int} interfaceId - Interface ID for this CallbackInterface.
     * @param {UniFFICallbackMethodHandler[]} methodHandlers -- UniFFICallbackHandler for each method, in the same order as the UDL file
     */
    constructor(name: string, interfaceId: int, methodHandlers: UniFFICallbackMethodHandler[]);
    /**
     * Store a callback object in the handle map and return the handle
     *
     * @param {obj} callbackObj - Object that implements the callback interface
     * @returns {int} - Handle for this callback object, this is what gets passed back to Rust.
     */
    storeCallbackObj(callbackObj: obj): int;
    /**
     * Get a previously stored callback object
     *
     * @param {int} handle - Callback object handle, returned from `storeCallbackObj()`
     * @returns {obj} - Callback object
     */
    getCallbackObj(handle: int): obj;
    /**
     * Set if new callbacks are allowed for this handler
     *
     * This is called with false during shutdown to ensure the callback maps don't
     * prevent JS objects from being GCed.
     */
    setAllowNewCallbacks(allow: any): void;
    /**
     * Check that no callbacks are currently registered
     *
     * If there are callbacks registered a UniFFIError will be thrown.  This is
     * called during shutdown to generate an alert if there are leaked callback
     * interfaces.
     */
    assertNoRegisteredCallbacks(): void;
    /**
     * Invoke a method on a stored callback object
     * @param {int} handle - Object handle
     * @param {int} methodId - Method identifier.  This the 1-based index of
     *   the method from the UDL file.  0 is the special drop method, which
     *   removes the callback object from the handle map.
     * @param {ArrayBuffer} argsArrayBuffer - Arguments to pass to the method, packed in an ArrayBuffer
     */
    invokeCallback(handle: int, methodId: int, argsArrayBuffer: ArrayBuffer): void;
    /**
     * xpcom-shutdown observer method
     *
     * This handles:
     *  - Deregistering ourselves as the UniFFI callback handler
     *  - Checks for any leftover stored callbacks which indicate memory leaks
     */
    observe(aSubject: any, aTopic: any, aData: any): void;
    #private;
}
/**
 * Handles calling a single method for a callback interface
 */
declare class UniFFICallbackMethodHandler {
    /**
     * Create a UniFFICallbackMethodHandler

     * @param {string} name -- Name of the method to call on the callback object
     * @param {FfiConverter[]} argsConverters - FfiConverter for each argument type
     */
    constructor(name: string, argsConverters: FfiConverter[]);
    /**
     * Invoke the method
     *
     * @param {obj} callbackObj -- Object implementing the callback interface for this method
     * @param {ArrayBuffer} argsArrayBuffer -- Arguments for the method, packed in an ArrayBuffer
     */
    call(callbackObj: obj, argsArrayBuffer: ArrayBuffer): void;
    #private;
}
export {};
