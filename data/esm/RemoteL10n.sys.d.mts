export class _RemoteL10n {
    _l10n: any;
    createElement(doc: any, elem: any, options?: {}): any;
    setString(el: any, { content, attributes }: {
        content: any;
        attributes?: {};
    }): void;
    /**
     * Creates a new DOMLocalization instance with the Fluent file from Remote Settings.
     *
     * Note: it will use the local Fluent file in any of following cases:
     *   * the remote Fluent file is not available
     *   * it was told to use the local Fluent file
     */
    _createDOML10n(): any;
    get l10n(): any;
    reloadL10n(): void;
    isLocaleSupported(locale: any): boolean;
    /**
     * Format given `localizableText`.
     *
     * Format `localizableText` if it is an object using any `string_id` field,
     * otherwise return `localizableText` unmodified.
     *
     * @param {object|string} `localizableText` to format.
     * @return {string} formatted text.
     */
    formatLocalizableText(localizableText: object | string): string;
}
export const RemoteL10n: _RemoteL10n;
