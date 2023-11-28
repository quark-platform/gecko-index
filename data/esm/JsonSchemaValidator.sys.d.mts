/**
 * To validate a single value, use the static `JsonSchemaValidator.validate`
 * method.  If you need to validate multiple values, you instead might want to
 * make a JsonSchemaValidator instance with the options you need and then call
 * the `validate` instance method.
 */
export class JsonSchemaValidator {
    /**
     * Validates a value against a schema.
     *
     * @param {*} value
     *   The value to validate.
     * @param {object} schema
     *   The schema to validate against.
     * @param {boolean} allowArrayNonMatchingItems
     *   When true:
     *     Invalid items in arrays will be ignored, and they won't be included in
     *     result.parsedValue.
     *   When false:
     *     Invalid items in arrays will cause validation to fail.
     * @param {boolean} allowExplicitUndefinedProperties
     *   When true:
     *     `someProperty: undefined` will be allowed for non-required properties.
     *   When false:
     *     `someProperty: undefined` will cause validation to fail even for
     *     properties that are not required.
     * @param {boolean} allowNullAsUndefinedProperties
     *   When true:
     *     `someProperty: null` will be allowed for non-required properties whose
     *     expected types are non-null.
     *   When false:
     *     `someProperty: null` will cause validation to fail for non-required
     *     properties, except for properties whose expected types are null.
     * @param {boolean} allowAdditionalProperties
     *   When true:
     *     Properties that are not defined in the schema will be ignored, and they
     *     won't be included in result.parsedValue.
     *   When false:
     *     Properties that are not defined in the schema will cause validation to
     *     fail.
     *   Note: Schema objects of type "object" can also contain a boolean property
     *     called `additionalProperties` that functions as a local version of this
     *     param. When true, extra properties will be allowed in the corresponding
     *     input objects regardless of `allowAdditionalProperties`, and as with
     *     `allowAdditionalProperties`, extra properties won't be included in
     *     `result.parsedValue`. (The inverse is not true: If a schema object
     *     defines `additionalProperties: false` but `allowAdditionalProperties`
     *     is true, extra properties will be allowed.)
     * @return {object}
     *   The result of the validation, an object that looks like this:
     *
     *   {
     *     valid,
     *     parsedValue,
     *     error: {
     *       message,
     *       rootValue,
     *       rootSchema,
     *       invalidValue,
     *       invalidPropertyNameComponents,
     *     }
     *   }
     *
     *   {boolean} valid
     *     True if validation is successful, false if not.
     *   {*} parsedValue
     *     If validation is successful, this is the validated value.  It can
     *     differ from the passed-in value in the following ways:
     *       * If a type in the schema is "URL" or "URLorEmpty", the passed-in
     *         value can use a string instead and it will be converted into a
     *         `URL` object in parsedValue.
     *       * Some of the `allow*` parameters control the properties that appear.
     *         See above.
     *   {Error} error
     *     If validation fails, `error` will be present.  It contains a number of
     *     properties useful for understanding the validation failure.
     *   {string} error.message
     *     The validation failure message.
     *   {*} error.rootValue
     *     The passed-in value.
     *   {object} error.rootSchema
     *     The passed-in schema.
     *   {*} invalidValue
     *     The value that caused validation to fail.  If the passed-in value is a
     *     scalar type, this will be the value itself.  If the value is an object
     *     or array, it will be the specific nested value in the object or array
     *     that caused validation to fail.
     *   {array} invalidPropertyNameComponents
     *     If the passed-in value is an object or array, this will contain the
     *     names of the object properties or array indexes where invalidValue can
     *     be found.  For example, assume the passed-in value is:
     *       { foo: { bar: { baz: 123 }}}
     *     And assume `baz` should be a string instead of a number.  Then
     *     invalidValue will be 123, and invalidPropertyNameComponents will be
     *     ["foo", "bar", "baz"], indicating that the erroneous property in the
     *     passed-in object is `foo.bar.baz`.
     */
    static validate(value: any, schema: object, { allowArrayNonMatchingItems, allowExplicitUndefinedProperties, allowNullAsUndefinedProperties, allowAdditionalProperties, }?: boolean): object;
    /**
     * Constructor.
     *
     * @param {boolean} allowArrayNonMatchingItems
     *   See the static `validate` method above.
     * @param {boolean} allowExplicitUndefinedProperties
     *   See the static `validate` method above.
     * @param {boolean} allowNullAsUndefinedProperties
     *   See the static `validate` method above.
     * @param {boolean} allowAdditionalProperties
     *   See the static `validate` method above.
     */
    constructor({ allowArrayNonMatchingItems, allowExplicitUndefinedProperties, allowNullAsUndefinedProperties, allowAdditionalProperties, }?: boolean);
    allowArrayNonMatchingItems: any;
    allowExplicitUndefinedProperties: any;
    allowNullAsUndefinedProperties: any;
    allowAdditionalProperties: any;
    /**
     * Validates a value against a schema.
     *
     * @param {*} value
     *   The value to validate.
     * @param {object} schema
     *   The schema to validate against.
     * @return {object}
     *   The result object.  See the static `validate` method above.
     */
    validate(value: any, schema: object): object;
    _validateRecursive(param: any, properties: any, keyPath: any, state: any): any;
    _validateSimpleParam(param: any, type: any, keyPath: any, state: any): {
        valid: boolean;
        parsedValue: any;
    };
}
