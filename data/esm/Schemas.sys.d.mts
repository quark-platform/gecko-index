/// <reference types="gecko-types" />
export let Schemas: any;
/**
 * A root schema namespace containing schema data which is isolated from data in
 * other schema roots. May extend a base namespace, in which case schemas in
 * this root may refer to types in a base, but not vice versa.
 *
 * @param {SchemaRoot|Array<SchemaRoot>|null} base
 *        A base schema root (or roots) from which to derive, or null.
 * @param {Map<string, Array|StructuredCloneHolder>} schemaJSON
 *        A map of schema URLs and corresponding JSON blobs from which to
 *        populate this root namespace.
 */
export class SchemaRoot extends Namespace {
    constructor(base: any, schemaJSON: any);
    root: this;
    base: any;
    schemaJSON: any;
    getNamespaces(path: any): Generator<any, void, any>;
    /**
     * Like getNamespace, but does not take the base SchemaRoot into account.
     *
     * @param {string} name
     *        The namespace to retrieve.
     * @returns {Namespace}
     */
    getOwnNamespace(name: string): Namespace;
    parseSchema(schema: any, path: any, extraProperties?: any[]): any;
    parseSchemas(): void;
    loadSchema(json: any): void;
    /**
     * Checks whether a given object has the necessary permissions to
     * expose the given namespace.
     *
     * @param {string} namespace
     *        The top-level namespace to check permissions for.
     * @param {object} wrapperFuncs
     *        Wrapper functions for the given context.
     * @param {Function} wrapperFuncs.hasPermission
     *        A function which, when given a string argument, returns true
     *        if the context has the given permission.
     * @returns {boolean}
     *        True if the context has permission for the given namespace.
     */
    checkPermissions(namespace: string, wrapperFuncs: {
        hasPermission: Function;
    }): boolean;
    /**
     * Inject registered extension APIs into `dest`.
     *
     * @param {object} dest The root namespace for the APIs.
     *     This object is usually exposed to extensions as "chrome" or "browser".
     * @param {object} wrapperFuncs An implementation of the InjectionContext
     *     interface, which runs the actual functionality of the generated API.
     */
    inject(dest: object, wrapperFuncs: object): void;
    injectInto(dest: any, context: any): void;
    /**
     * Normalize `obj` according to the loaded schema for `typeName`.
     *
     * @param {object} obj The object to normalize against the schema.
     * @param {string} typeName The name in the format namespace.propertyname
     * @param {object} context An implementation of Context. Any validation errors
     *     are reported to the given context.
     * @returns {object} The normalized object.
     */
    normalize(obj: object, typeName: string, context: object): object;
}
declare class Namespace extends Map<any, any> {
    constructor(root: any, name: any, path: any);
    root: any;
    _lazySchemas: any[];
    initialized: boolean;
    name: any;
    path: any[];
    superNamespace: any;
    min_manifest_version: number;
    max_manifest_version: number;
    permissions: any;
    allowedContexts: any[];
    defaultContexts: any[];
    /**
     * Adds a JSON Schema object to the set of schemas that represent this
     * namespace.
     *
     * @param {object} schema
     *        A JSON schema object which partially describes this
     *        namespace.
     */
    addSchema(schema: object): void;
    /**
     * Initializes the keys of this namespace based on the schema objects
     * added via previous `addSchema` calls.
     */
    init(): void;
    /**
     * Initializes the value of a given key, by parsing the schema object
     * associated with it and replacing its temporary value with an `Entry`
     * instance.
     *
     * @param {string} key
     *        The name of the property to initialize.
     * @param {string} type
     *        The type of property the key represents. Must have a
     *        corresponding entry in the `LOADERS` object, pointing to the
     *        initialization method for that type.
     *
     * @returns {Entry}
     */
    initKey(key: string, type: string): Entry;
    loadType(name: any, type: any): any;
    extendType(type: any): any;
    loadProperty(name: any, prop: any): ValueProperty | TypeProperty | SubModuleProperty;
    loadFunction(name: any, fun: any): any;
    loadEvent(name: any, event: any): any;
    /**
     * Injects the properties of this namespace into the given object.
     *
     * @param {object} dest
     *        The object into which to inject the namespace properties.
     * @param {InjectionContext} context
     *        The injection context with which to inject the properties.
     */
    injectInto(dest: object, context: InjectionContext): void;
    getDescriptor(path: any, context: any): {
        descriptor: {
            value: any;
        };
    };
    entries(): Generator<any[], void, unknown>;
    get(key: any): any;
    /**
     * Returns a Namespace object for the given namespace name. If a
     * namespace object with this name does not already exist, it is
     * created. If the name contains any '.' characters, namespaces are
     * recursively created, for each dot-separated component.
     *
     * @param {string} name
     *        The name of the sub-namespace to retrieve.
     * @param {boolean} [create = true]
     *        If true, create any intermediate namespaces which don't
     *        exist.
     *
     * @returns {Namespace}
     */
    getNamespace(name: string, create?: boolean): Namespace;
    getOwnNamespace(name: any): Namespace;
    has(key: any): boolean;
}
declare class Entry {
    constructor(schema?: {});
    /**
     * If set to any value which evaluates as true, this entry is
     * deprecated, and any access to it will result in a deprecation
     * warning being logged to the browser console.
     *
     * If the value is a string, it will be appended to the deprecation
     * message. If it contains the substring "${value}", it will be
     * replaced with a string representation of the value being
     * processed.
     *
     * If the value is any other truthy value, a generic deprecation
     * message will be emitted.
     */
    deprecated: unknown;
    /**
     * @property {string} [preprocessor]
     * If set to a string value, and a preprocessor of the same is
     * defined in the validation context, it will be applied to this
     * value prior to any normalization.
     */
    preprocessor: any;
    /**
     * @property {string} [postprocessor]
     * If set to a string value, and a postprocessor of the same is
     * defined in the validation context, it will be applied to this
     * value after any normalization.
     */
    postprocessor: any;
    /**
     * @property {Array<string>} allowedContexts A list of allowed contexts
     * to consider before generating the API.
     * These are not parsed by the schema, but passed to `shouldInject`.
     */
    allowedContexts: any;
    min_manifest_version: any;
    max_manifest_version: any;
    /**
     * Preprocess the given value with the preprocessor declared in
     * `preprocessor`.
     *
     * @param {*} value
     * @param {Context} context
     * @returns {*}
     */
    preprocess(value: any, context: Context): any;
    /**
     * Postprocess the given result with the postprocessor declared in
     * `postprocessor`.
     *
     * @param {object} result
     * @param {Context} context
     * @returns {object}
     */
    postprocess(result: object, context: Context): object;
    /**
     * Logs a deprecation warning for this entry, based on the value of
     * its `deprecated` property.
     *
     * @param {Context} context
     * @param {value} [value]
     */
    logDeprecation(context: Context, value?: any): void;
    /**
     * Checks whether the entry is deprecated and, if so, logs a
     * deprecation message.
     *
     * @param {Context} context
     * @param {value} [value]
     */
    checkDeprecated(context: Context, value?: any): void;
    /**
     * Returns an object containing property descriptor for use when
     * injecting this entry into an API object.
     *
     * @param {Array<string>} path The API path, e.g. `["storage", "local"]`.
     * @param {InjectionContext} context
     *
     * @returns {object?}
     *        An object containing a `descriptor` property, specifying the
     *        entry's property descriptor, and an optional `revoke`
     *        method, to be called when the entry is being revoked.
     */
    getDescriptor(path: Array<string>, context: InjectionContext): object | null;
}
declare class ValueProperty extends Entry {
    constructor(schema: any, name: any, value: any);
    name: any;
    value: any;
    getDescriptor(path: any, context: any): {
        descriptor: {
            value: any;
        };
    };
}
declare class TypeProperty extends Entry {
    constructor(schema: any, path: any, name: any, type: any, writable: any, permissions: any);
    path: any;
    name: any;
    type: any;
    writable: any;
    permissions: any;
    throwError(context: any, msg: any): void;
    getDescriptor(path: any, context: any): {
        descriptor: {
            get: any;
        };
        revoke(): void;
    };
}
declare class SubModuleProperty extends Entry {
    constructor(root: any, schema: any, path: any, name: any, reference: any, properties: any, permissions: any);
    root: any;
    name: any;
    path: any;
    namespaceName: any;
    reference: any;
    properties: any;
    permissions: any;
    get targetType(): any;
    getDescriptor(path: any, context: any): {
        descriptor: {
            value: any;
        };
        revoke(): void;
    };
}
/**
 * Holds methods that run the actual implementation of the extension APIs. These
 * methods are only called if the extension API invocation matches the signature
 * as defined in the schema. Otherwise an error is reported to the context.
 */
declare class InjectionContext extends Context {
    constructor(params: any, schemaRoot: any);
    schemaRoot: any;
    pendingEntries: Set<any>;
    children: ExtensionUtils.DefaultWeakMap;
    injectedRoots: Set<any>;
    /**
     * Check whether the API should be injected.
     *
     * @abstract
     * @param {string} namespace The namespace of the API. This may contain dots,
     *     e.g. in the case of "devtools.inspectedWindow".
     * @param {string} [name] The name of the property in the namespace.
     *     `null` if we are checking whether the namespace should be injected.
     * @param {Array<string>} allowedContexts A list of additional contexts in which
     *     this API should be available. May include any of:
     *         "main" - The main chrome browser process.
     *         "addon" - An addon process.
     *         "content" - A content process.
     * @returns {boolean} Whether the API should be injected.
     */
    shouldInject(namespace: string, name?: string, allowedContexts: Array<string>): boolean;
    /**
     * Generate the implementation for `namespace`.`name`.
     *
     * @abstract
     * @param {string} namespace The full path to the namespace of the API, minus
     *     the name of the method or property. E.g. "storage.local".
     * @param {string} name The name of the method, property or event.
     * @returns {SchemaAPIInterface} The implementation of the API.
     */
    getImplementation(namespace: string, name: string): SchemaAPIInterface;
    /**
     * Updates all injection entries which may need to be updated after a
     * permission change, revoking or re-injecting them as necessary.
     */
    permissionsChanged(): void;
    /**
     * Recursively revokes all child injection entries of the given
     * object.
     *
     * @param {object} object
     *        The object for which to invoke children.
     */
    revokeChildren(object: object): void;
    _getInjectionEntry(entry: any, dest: any, name: any, path: any, parentEntry: any): InjectionEntry;
    /**
     * Returns the property descriptor for the given entry.
     *
     * @param {Entry} entry
     *        The entry instance to return a descriptor for.
     * @param {object} dest
     *        The object into which this entry is being injected.
     * @param {string} name
     *        The property name on the destination object where the entry
     *        will be injected.
     * @param {Array<string>} path
     *        The full path from the root injection object to this entry.
     * @param {Entry} parentEntry
     *        The parent entry for this entry.
     *
     * @returns {object?}
     *        A property descriptor object, or null if the entry should
     *        not be injected.
     */
    getDescriptor(entry: Entry, dest: object, name: string, path: Array<string>, parentEntry: Entry): object | null;
    /**
     * Lazily injects the given entry into the given object.
     *
     * @param {Entry} entry
     *        The entry instance to lazily inject.
     * @param {object} dest
     *        The object into which to inject this entry.
     * @param {string} name
     *        The property name at which to inject the entry.
     * @param {Array<string>} path
     *        The full path from the root injection object to this entry.
     * @param {Entry} parentEntry
     *        The parent entry for this entry.
     */
    injectInto(entry: Entry, dest: object, name: string, path: Array<string>, parentEntry: Entry): void;
}
/**
 * A context for schema validation and error reporting. This class is only used
 * internally within Schemas.
 */
declare class Context {
    /**
     * @param {object} params Provides the implementation of this class.
     * @param {Array<string>} overridableMethods
     */
    constructor(params: object, overridableMethods?: Array<string>);
    params: any;
    path: any[];
    preprocessors: {
        localize(value: any, context: any): any;
    };
    postprocessors: {
        convertImageDataToURL(imageData: any, context: any): any;
        webRequestBlockingPermissionRequired(string: any, context: any): any;
        requireBackgroundServiceWorkerEnabled(value: any, context: any): any;
        manifestVersionCheck(value: any, context: any): any;
        webAccessibleMatching(value: any, context: any): any;
    };
    isChromeCompat: boolean;
    currentChoices: Set<any>;
    choicePathIndex: number;
    get choicePath(): string;
    get cloneScope(): any;
    get url(): any;
    get principal(): any;
    /**
     * Checks whether `url` may be loaded by the extension in this context.
     *
     * @param {string} url The URL that the extension wished to load.
     * @returns {boolean} Whether the context may load `url`.
     */
    checkLoadURL(url: string): boolean;
    /**
     * Checks whether this context has the given permission.
     *
     * @param {string} permission
     *        The name of the permission to check.
     *
     * @returns {boolean} True if the context has the given permission.
     */
    hasPermission(permission: string): boolean;
    /**
     * Checks whether the given permission can be dynamically revoked or
     * granted.
     *
     * @param {string} permission
     *        The name of the permission to check.
     *
     * @returns {boolean} True if the given permission is revokable.
     */
    isPermissionRevokable(permission: string): boolean;
    /**
     * Returns an error result object with the given message, for return
     * by Type normalization functions.
     *
     * If the context has a `currentTarget` value, this is prepended to
     * the message to indicate the location of the error.
     *
     * @param {string | Function} errorMessage
     *        The error message which will be displayed when this is the
     *        only possible matching schema. If a function is passed, it
     *        will be evaluated when the error string is first needed, and
     *        must return a string.
     * @param {string | Function} choicesMessage
     *        The message describing the valid what constitutes a valid
     *        value for this schema, which will be displayed when multiple
     *        schema choices are available and none match.
     *
     *        A caller may pass `null` to prevent a choice from being
     *        added, but this should *only* be done from code processing a
     *        choices type.
     * @param {boolean} [warning = false]
     *        If true, make message prefixed `Warning`. If false, make message
     *        prefixed `Error`
     * @returns {object}
     */
    error(errorMessage: string | Function, choicesMessage?: string | Function, warning?: boolean): object;
    /**
     * Creates an `Error` object belonging to the current unprivileged
     * scope. If there is no unprivileged scope associated with this
     * context, the message is returned as a string.
     *
     * If the context has a `currentTarget` value, this is prepended to
     * the message, in the same way as for the `error` method.
     *
     * @param {string} message
     * @param {object} [options]
     * @param {boolean} [options.warning = false]
     * @returns {Error}
     */
    makeError(message: string, { warning }?: {
        warning?: boolean;
    }): Error;
    /**
     * Logs the given error to the console. May be overridden to enable
     * custom logging.
     *
     * @param {Error|string} error
     */
    logError(error: Error | string): void;
    /**
     * Logs a warning. An error might be thrown when we treat warnings as errors.
     *
     * @param {string} warningMessage
     */
    logWarning(warningMessage: string): void;
    /**
     * Returns the name of the value currently being normalized. For a
     * nested object, this is usually approximately equivalent to the
     * JavaScript property accessor for that property. Given:
     *
     *   { foo: { bar: [{ baz: x }] } }
     *
     * When processing the value for `x`, the currentTarget is
     * 'foo.bar.0.baz'
     */
    get currentTarget(): string;
    /**
     * Executes the given callback, and returns an array of choice strings
     * passed to {@see #error} during its execution.
     *
     * @param {Function} callback
     * @returns {object}
     *          An object with a `result` property containing the return
     *          value of the callback, and a `choice` property containing
     *          an array of choices.
     */
    withChoices(callback: Function): object;
    /**
     * Appends the given component to the `currentTarget` path to indicate
     * that it is being processed, calls the given callback function, and
     * then restores the original path.
     *
     * This is used to identify the path of the property being processed
     * when reporting type errors.
     *
     * @param {string} component
     * @param {Function} callback
     * @returns {*}
     */
    withPath(component: string, callback: Function): any;
    matchManifestVersion(entry: any): boolean;
}
import { ExtensionUtils } from "resource://gre/modules/ExtensionUtils.sys.mjs";
/**
 * Represents a schema entry to be injected into an object. Handles the
 * injection, revocation, and permissions of said entry.
 *
 * @param {InjectionContext} context
 *        The injection context for the entry.
 * @param {Entry} entry
 *        The entry to inject.
 * @param {object} parentObject
 *        The object into which to inject this entry.
 * @param {string} name
 *        The property name at which to inject this entry.
 * @param {Array<string>} path
 *        The full path from the root entry to this entry.
 * @param {Entry} parentEntry
 *        The parent entry for the injected entry.
 */
declare class InjectionEntry {
    constructor(context: any, entry: any, parentObj: any, name: any, path: any, parentEntry: any);
    context: any;
    entry: any;
    parentObj: any;
    name: any;
    path: any;
    parentEntry: any;
    injected: any;
    lazyInjected: boolean;
    /**
     * @property {Array<string>} allowedContexts
     *        The list of allowed contexts into which the entry may be
     *        injected.
     */
    get allowedContexts(): any;
    /**
     * @property {boolean} isRevokable
     *        Returns true if this entry may be dynamically injected or
     *        revoked based on its permissions.
     */
    get isRevokable(): any;
    /**
     * @property {boolean} hasPermission
     *        Returns true if the injection context currently has the
     *        appropriate permissions to access this entry.
     */
    get hasPermission(): any;
    /**
     * @property {boolean} shouldInject
     *        Returns true if this entry should be injected in the given
     *        context, without respect to permissions.
     */
    get shouldInject(): any;
    /**
     * Revokes this entry, removing its property from its parent object,
     * and invalidating its wrappers.
     */
    revoke(): void;
    /**
     * Returns a property descriptor object for this entry, if it should
     * be injected, or undefined if it should not.
     *
     * @returns {object?}
     *        A property descriptor object, or undefined if the property
     *        should be removed.
     */
    getDescriptor(): object | null;
    /**
     * Injects a lazy property descriptor into the parent object which
     * checks permissions and eligibility for injection the first time it
     * is accessed.
     */
    lazyInject(): void;
    /**
     * Injects or revokes this entry if its current state does not match
     * the context's current permissions.
     */
    permissionsChanged(): void;
    maybeInject(): void;
    maybeRevoke(): void;
}
export {};
