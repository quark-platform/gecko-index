export namespace PasswordGenerator {
    /**
     * @param {Object} options
     * @param {number} options.length - length of the generated password if there are no rules that override the length
     * @param {Map} options.rules - map of password rules
     * @returns {string} password that was generated
     * @throws Error if `length` is invalid
     * @copyright 2018 The Chromium Authors. All rights reserved.
     * @see https://cs.chromium.org/chromium/src/components/password_manager/core/browser/generation/password_generator.cc?l=93&rcl=a896a3ac4ea731b5ab3d2ab5bd76a139885d5c4f
     */
    function generatePassword({ length, rules, inputMaxLength, }: {
        length: number;
        rules: Map<any, any>;
    }): string;
    /**
     * Adds special characters and/or other required characters to the requiredCharacters array.
     * @param {Map} rules
     * @param {string[]} requiredClasses
     */
    function _addRequiredClassesAndCharacters(rules: Map<any, any>, requiredClasses: string[]): void;
    /**
     * @param range to generate the number in
     * @returns a random number in range [0, range).
     * @copyright 2018 The Chromium Authors. All rights reserved.
     * @see https://cs.chromium.org/chromium/src/base/rand_util.cc?l=58&rcl=648a59893e4ed5303b5c381b03ce0c75e4165617
     */
    function _randomUInt8Index(range: any): number;
    /**
     * Shuffle the order of characters in a string.
     * @param {string} str to shuffle
     * @returns {string} shuffled string
     */
    function _shuffleString(str: string): string;
    /**
     * Determine the number of consecutive characters in a string.
     * This is primarily used to validate the "max-consecutive" rule
     * of a generated password.
     * @param {string} generatedPassword
     * @param {number} value the number of consecutive characters allowed
     * @return {boolean} `true` if the generatePassword has less than the value argument number of characters, `false` otherwise
     */
    function _checkConsecutiveCharacters(generatedPassword: string, value: number): boolean;
    function _getUpperCaseCharacters(): string;
    function _getLowerCaseCharacters(): string;
    function _getDigits(): string;
    function _getSpecialCharacters(): string;
}
