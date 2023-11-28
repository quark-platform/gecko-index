export namespace ProductValidator {
    export { validate };
}
/**
 * Validate JSON result from the shopping API.
 *
 * @param {object} json
 *  JSON object from the API request.
 * @param {string} SchemaURL
 *  URL string for the schema to validate with.
 * @param {boolean} logErrors
 *  Should invalid JSON log out the errors.
 * @returns {boolean} result
 *  If the JSON is valid or not.
 */
declare function validate(json: object, SchemaURL: string, logErrors: boolean): boolean;
export {};
