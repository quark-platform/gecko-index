/**
 * Handles interactions between PasswordRulesParser and the "password-rules" Remote Settings collection
 *
 * @class PasswordRulesManagerParent
 * @extends {JSWindowActorParent}
 */
export class PasswordRulesManagerParent extends JSWindowActorParent {
    /**
     * @type RemoteSettingsClient
     *
     * @memberof PasswordRulesManagerParent
     */
    _passwordRulesClient: RemoteSettingsClient;
    initPasswordRulesCollection(): Promise<void>;
    /**
     * Transforms the parsed rules returned from PasswordRulesParser into a Map for easier access.
     * The returned Map could have the following keys: "allowed", "required", "maxlength", "minlength", and "max-consecutive"
     * @example
     * // Returns a Map with a key-value pair of "allowed": "ascii-printable"
     * _transformRulesToMap([{ _name: "allowed", value: [{ _name: "ascii-printable" }] }])
     * @param {Object[]} rules rules from PasswordRulesParser.parsePasswordRules
     * @return {Map} mapped rules
     * @memberof PasswordRulesManagerParent
     */
    _transformRulesToMap(rules: any[]): Map<any, any>;
    /**
     * Generates a password based on rules from the origin parameters.
     * @param {nsIURI} uri
     * @return {string} password
     * @memberof PasswordRulesManagerParent
     */
    generatePassword(uri: nsIURI, { inputMaxLength }?: {
        inputMaxLength: any;
    }): string;
}
