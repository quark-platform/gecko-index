/// <reference types="gecko-types" />
export namespace ExtensionActivityLogChild {
    let _initialized: boolean;
    let enabledExtensions: Set<any>;
    function init(): void;
    function receiveMessage({ name, data }: {
        name: any;
        data: any;
    }): void;
    function log(context: any, type: any, name: any, data: any): Promise<void>;
    function _sendActivity(data: any): void;
}
export namespace ExtensionChild {
    export { BrowserExtensionContent };
    export { ChildAPIManager };
    export { ChildLocalAPIImplementation };
    export { MessageEvent };
    export { Messenger };
    export { Port };
    export { ProxyAPIImplementation };
    export { SimpleEventAPI };
}
declare const BrowserExtensionContent_base: any;
declare class BrowserExtensionContent extends BrowserExtensionContent_base {
    [x: string]: any;
    constructor(policy: any);
    policy: any;
    instanceId: any;
    optionalPermissions: any;
    backgroundScripts: any;
    backgroundWorkerScript: any;
    childModules: any;
    dependencies: any;
    persistentBackground: any;
    schemaURLs: any;
    MESSAGE_EMIT_EVENT: string;
    apiManager: any;
    _manifest: any;
    _localeData: any;
    baseURI: nsIURIType;
    baseURL: string;
    principal: nsIPrincipalType;
    blockedParsingDocuments: WeakSet<object>;
    views: Set<any>;
    devtoolsViews: Set<any>;
    get id(): any;
    get uuid(): any;
    get permissions(): Set<any>;
    get allowedOrigins(): any;
    getSharedData(key: any, value: any): any;
    get localeData(): any;
    get manifest(): any;
    get manifestVersion(): any;
    get privateBrowsingAllowed(): any;
    canAccessWindow(window: any): any;
    getAPIManager(): any;
    experimentAPIManager: any;
    shutdown(): void;
    getContext(window: any): any;
    emit(event: any, ...args: any[]): void;
    emitLocalWithResult(event: any, ...args: any[]): any;
    receiveMessage({ name, data }: {
        name: any;
        data: any;
    }): void;
    localizeMessage(...args: any[]): any;
    localize(...args: any[]): any;
    hasPermission(perm: any): boolean;
    trackBlockedParsingDocument(doc: any): void;
    untrackBlockedParsingDocument(doc: any): void;
    hasContextBlockedParsingDocument(extContext: any): boolean;
}
declare class ChildAPIManager {
    constructor(context: any, messageManager: any, localAPICan: any, contextData: any);
    context: any;
    messageManager: any;
    url: any;
    localApis: any;
    apiCan: any;
    schema: any;
    id: string;
    conduit: any;
    listeners: ExtensionUtils.DefaultMap;
    callPromises: Map<any, any>;
    permissionsChangedCallbacks: Set<any>;
    updatePermissions: () => void;
    inject(obj: any): void;
    recvCallResult(data: any): void;
    recvRunListener(data: any): Promise<any>;
    recvStreamFilterSuspendCancel(): Promise<any>;
    /**
     * Call a function in the parent process and ignores its return value.
     *
     * @param {string} path The full name of the method, e.g. "tabs.create".
     * @param {Array} args The parameters for the function.
     */
    callParentFunctionNoReturn(path: string, args: any[]): void;
    /**
     * Calls a function in the parent process and returns its result
     * asynchronously.
     *
     * @param {string} path The full name of the method, e.g. "tabs.create".
     * @param {Array} args The parameters for the function.
     * @param {function(*)} [callback] The callback to be called when the function
     *     completes.
     * @param {object} [options] Extra options.
     * @returns {Promise|undefined} Must be void if `callback` is set, and a
     *     promise otherwise. The promise is resolved when the function completes.
     */
    callParentAsyncFunction(path: string, args: any[], callback?: (arg0: any) => any, options?: object): Promise<any> | undefined;
    /**
     * Create a proxy for an event in the parent process. The returned event
     * object shares its internal state with other instances. For instance, if
     * `removeListener` is used on a listener that was added on another object
     * through `addListener`, then the event is unregistered.
     *
     * @param {string} path The full name of the event, e.g. "tabs.onCreated".
     * @returns {object} An object with the addListener, removeListener and
     *   hasListener methods. See SchemaAPIInterface for documentation.
     */
    getParentEvent(path: string): object;
    close(): void;
    get cloneScope(): any;
    get principal(): any;
    get manifestVersion(): any;
    shouldInject(namespace: any, name: any, allowedContexts: any): boolean;
    getImplementation(namespace: any, name: any): ProxyAPIImplementation | ChildLocalAPIImplementation;
    getFallbackImplementation(namespace: any, name: any): ProxyAPIImplementation;
    hasPermission(permission: any): any;
    isPermissionRevokable(permission: any): any;
    setPermissionsChangedCallback(callback: any): void;
}
declare const ChildLocalAPIImplementation_base: any;
declare class ChildLocalAPIImplementation extends ChildLocalAPIImplementation_base {
    [x: string]: any;
    constructor(pathObj: any, namespace: any, name: any, childApiManager: any);
    childApiManagerId: any;
    fullname: string;
    /**
     * Call the given function and also log the call as appropriate
     * (i.e., with activity logging and/or profiler markers)
     *
     * @param {Function} callable The actual implementation to invoke.
     * @param {Array} args Arguments to the function call.
     * @returns {any} The return result of callable.
     */
    callAndLog(callable: Function, args: any[]): any;
    callFunction(args: any): any;
    callFunctionNoReturn(args: any): any;
    callAsyncFunction(args: any, callback: any, requireUserInput: any): any;
}
declare class MessageEvent extends SimpleEventAPI {
    emit(holder: any, sender: any): Promise<{
        response: boolean;
        value: any;
    }> | {
        received: boolean;
        response?: undefined;
    } | {
        received: boolean;
        response: boolean;
    };
    unwrapOrSanitizeError(error: any): any;
    wrapResponse(fire: any, message: any, sender: any): Promise<any>;
}
/**
 * Each extension context gets its own Messenger object. It handles the
 * basics of sendMessage, onMessage, connect and onConnect.
 */
declare class Messenger {
    constructor(context: any);
    context: any;
    conduit: any;
    initEventManagers(): void;
    onConnect: SimpleEventAPI;
    onConnectEx: SimpleEventAPI;
    onMessage: MessageEvent;
    onMessageEx: MessageEvent;
    sendNativeMessage(nativeApp: any, json: any): any;
    sendRuntimeMessage({ extensionId, message, callback, ...args }: {
        [x: string]: any;
        extensionId: any;
        message: any;
        callback: any;
    }): any;
    connect({ name, native, ...args }: {
        [x: string]: any;
        name: any;
        native: any;
    }): any;
    recvPortConnect({ extensionId, portId, name, sender }: {
        extensionId: any;
        portId: any;
        name: any;
        sender: any;
    }): number;
    recvRuntimeMessage({ extensionId, holder, sender }: {
        extensionId: any;
        holder: any;
        sender: any;
    }): Promise<{
        response: boolean;
        value: any;
    }> | {
        received: boolean;
        response?: undefined;
    } | {
        received: boolean;
        response: boolean;
    };
}
declare class Port {
    /**
     * @param {BaseContext} context The context that owns this port.
     * @param {number} portId Uniquely identifies this port's channel.
     * @param {string} name Arbitrary port name as defined by the addon.
     * @param {boolean} native Is this a Port for native messaging.
     * @param {object} sender The `Port.sender` property.
     */
    constructor(context: BaseContext, portId: number, name: string, native: boolean, sender: object);
    context: BaseContext;
    name: string;
    sender: any;
    holdMessage: typeof holdMessage;
    conduit: any;
    initEventManagers(): void;
    onMessage: SimpleEventAPI;
    onDisconnect: SimpleEventAPI;
    getAPI(): {
        name: string;
        sender: any;
        error: any;
        onMessage: any;
        onDisconnect: any;
        postMessage: any;
        disconnect: () => any;
    };
    recvPortMessage({ holder }: {
        holder: any;
    }): void;
    recvPortDisconnect({ error }: {
        error?: any;
    }): void;
    sendPortMessage(json: any): any;
}
declare const ProxyAPIImplementation_base: any;
/**
 * An object that runs an remote implementation of an API.
 */
declare class ProxyAPIImplementation extends ProxyAPIImplementation_base {
    [x: string]: any;
    /**
     * @param {string} namespace The full path to the namespace that contains the
     *     `name` member. This may contain dots, e.g. "storage.local".
     * @param {string} name The name of the method or property.
     * @param {ChildAPIManager} childApiManager The owner of this implementation.
     * @param {boolean} alreadyLogged Whether the child already logged the event.
     */
    constructor(namespace: string, name: string, childApiManager: ChildAPIManager, alreadyLogged?: boolean);
    path: string;
    childApiManager: ChildAPIManager;
    alreadyLogged: boolean;
    revoke(): void;
    callFunctionNoReturn(args: any): void;
    callAsyncFunction(args: any, callback: any, requireUserInput: any): any;
    addListener(listener: any, args: any): void;
    removeListener(listener: any): void;
    hasListener(listener: any): any;
}
declare const SimpleEventAPI_base: any;
declare class SimpleEventAPI extends SimpleEventAPI_base {
    [x: string]: any;
    constructor(context: any, name: any);
    fires: Set<any>;
    emit(...args: any[]): any[];
}
import { ExtensionUtils } from "resource://gre/modules/ExtensionUtils.sys.mjs";
declare function holdMessage(name: any, anonymizedName: any, data: any, native?: any): any;
export {};
