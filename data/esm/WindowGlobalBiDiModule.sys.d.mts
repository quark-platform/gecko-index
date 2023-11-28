/**
 * Base class for all WindowGlobal BiDi MessageHandler modules.
 */
export class WindowGlobalBiDiModule {
    /**
     * Wrapper to deserialize a local / remote value.
     *
     * @param {Realm} realm
     *     The Realm in which the value is deserialized.
     * @param {object} serializedValue
     *     Value of any type to be deserialized.
     * @param {ExtraSerializationOptions=} extraOptions
     *     Extra Remote Value deserialization options.
     *
     * @returns {object}
     *     Deserialized representation of the value.
     */
    deserialize(realm: Realm, serializedValue: object, extraOptions?: ExtraSerializationOptions): object;
    /**
     * Wrapper to serialize a value as a remote value.
     *
     * @param {object} value
     *     Value of any type to be serialized.
     * @param {SerializationOptions} serializationOptions
     *     Options which define how ECMAScript objects should be serialized.
     * @param {OwnershipModel} ownershipType
     *     The ownership model to use for this serialization.
     * @param {Realm} realm
     *     The Realm from which comes the value being serialized.
     * @param {ExtraSerializationOptions} extraOptions
     *     Extra Remote Value serialization options.
     *
     * @returns {object}
     *     Promise that resolves to the serialized representation of the value.
     */
    serialize(value: object, serializationOptions: SerializationOptions, ownershipType: OwnershipModel, realm: Realm, extraOptions?: ExtraSerializationOptions): object;
    #private;
}
