/**
 * Deserialize a local value.
 *
 * @see https://w3c.github.io/webdriver-bidi/#deserialize-local-value
 *
 * @param {Realm} realm
 *     The Realm in which the value is deserialized.
 * @param {object} serializedValue
 *     Value of any type to be deserialized.
 * @param {ExtraDeserializationOptions} extraOptions
 *     Extra Remote Value deserialization options.
 *
 * @returns {object} Deserialized representation of the value.
 */
export function deserialize(realm: Realm, serializedValue: object, extraOptions: ExtraDeserializationOptions): object;
/**
 * Serialize a value as a remote value.
 *
 * @see https://w3c.github.io/webdriver-bidi/#serialize-as-a-remote-value
 *
 * @param {object} value
 *     Value of any type to be serialized.
 * @param {SerializationOptions} serializationOptions
 *     Options which define how ECMAScript objects should be serialized.
 * @param {OwnershipModel} ownershipType
 *     The ownership model to use for this serialization.
 * @param {Map} serializationInternalMap
 *     Map of internal ids.
 * @param {Realm} realm
 *     The Realm from which comes the value being serialized.
 * @param {ExtraSerializationOptions} extraOptions
 *     Extra Remote Value serialization options.
 *
 * @returns {object} Serialized representation of the value.
 */
export function serialize(value: object, serializationOptions: SerializationOptions, ownershipType: OwnershipModel, serializationInternalMap: Map<any, any>, realm: Realm, extraOptions: ExtraSerializationOptions): object;
/**
 * Set default serialization options.
 *
 * @param {SerializationOptions} options
 *    Options which define how ECMAScript objects should be serialized.
 * @returns {SerializationOptions}
 *    Serialiation options with default value added.
 */
export function setDefaultSerializationOptions(options?: SerializationOptions): SerializationOptions;
/**
 * Set default values and assert if serialization options have
 * expected types.
 *
 * @param {SerializationOptions} options
 *    Options which define how ECMAScript objects should be serialized.
 * @returns {SerializationOptions}
 *    Serialiation options with default value added.
 */
export function setDefaultAndAssertSerializationOptions(options?: SerializationOptions): SerializationOptions;
/**
 * Safely stringify a value.
 *
 * @param {object} obj
 *     Value of any type to be stringified.
 *
 * @returns {string} String representation of the value.
 */
export function stringify(obj: object): string;
export type IncludeShadowTreeMode = object;
export namespace IncludeShadowTreeMode {
    let All: string;
    let None: string;
    let Open: string;
}
export type OwnershipModel = object;
export namespace OwnershipModel {
    let None_1: string;
    export { None_1 as None };
    export let Root: string;
}
/**
 * Extra options for deserializing remote values.
 */
export type ExtraDeserializationOptions = {
    /**
     *     The cache containing DOM node references.
     */
    nodeCache?: NodeCache;
    /**
     *     The function to emit "script.message" event.
     */
    emitScriptMessage?: Function | undefined;
};
/**
 * Extra options for serializing remote values.
 */
export type ExtraSerializationOptions = {
    /**
     *     The cache containing DOM node references.
     */
    nodeCache?: NodeCache;
    /**
     *     Map of browsing contexts to their seen node ids during the current
     *     serialization.
     */
    seenNodeIds: Map<BrowsingContext, Array<string>>;
};
/**
 * An object which holds the information of how
 * ECMAScript objects should be serialized.
 */
export type SerializationOptions = {
    /**
     * Depth of a serialization of DOM Nodes. Defaults to 0.
     */
    maxDomDepth?: number;
    /**
     * Depth of a serialization of objects. Defaults to null.
     */
    maxObjectDepth?: number;
    /**
     * Mode of a serialization of shadow dom. Defaults to "none".
     */
    includeShadowTree?: IncludeShadowTreeMode;
};
