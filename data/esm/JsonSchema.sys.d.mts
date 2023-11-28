export namespace JsonSchema {
    export { Validator };
    export { validate };
    export { detectSchemaDraft };
}
/**
 * A JSONSchema validator that performs validation inside a sandbox.
 */
declare class Validator {
    /**
     * Create a new validator.
     *
     * @param {object} schema The schema to validate with.
     * @param {object} options  Options for the validator.
     * @param {string} options.draft  The draft to validate against. Should be one
     *                                of "4", "6", "7", "2019-09", or "2020-12".
     *
     *                                If the |$schema| key is present in the
     *                                |schema|, it will be used to auto-detect the
     *                                correct version.  Otherwise, 2019-09 will be
     *                                used.
     * @param {boolean} options.shortCircuit  Whether or not the validator should
     *                                        return after a single error occurs.
     */
    constructor(schema: object, { draft, shortCircuit }?: {
        draft: string;
        shortCircuit: boolean;
    });
    /**
     * Validate the instance against the known schemas.
     *
     * @param {object} instance  The instance to validate.
     *
     * @return {object}  An object with |valid| and |errors| keys that indicates
     *                   the success of validation.
     */
    validate(instance: object): object;
    /**
     * Add a schema to the validator.
     *
     * @param {object} schema  A JSON schema object.
     * @param {string} id  An optional ID to identify the schema if it does not
     *                     provide an |$id| field.
     */
    addSchema(schema: object, id: string): void;
    #private;
}
/**
 * A wrapper around validate that provides some options as an object
 * instead of positional arguments.
 *
 * @param {object} instance  The instance to validate.
 * @param {object} schema  The JSON schema to validate against.
 * @param {object} options  Options for the validator.
 * @param {string} options.draft  The draft to validate against. Should
 *                                be one of "4", "6", "7", "2019-09", or "2020-12".
 *
 *                               If the |$schema| key is present in the |schema|, it
 *                               will be used to auto-detect the correct version.
 *                               Otherwise, 2019-09 will be used.
 * @param {boolean} options.shortCircuit  Whether or not the validator should
 *                                        return after a single error occurs.
 *
 * @returns {object} An object with |valid| and |errors| keys that indicates the
 *                   success of validation.
 */
declare function validate(instance: object, schema: object, { draft, shortCircuit }?: {
    draft: string;
    shortCircuit: boolean;
}): object;
declare function detectSchemaDraft(schema: any, defaultDraft?: string): string;
export {};
