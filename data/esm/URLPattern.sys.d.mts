/**
 * Check if a given URL pattern is compatible with the provided URL.
 *
 * Implements https://w3c.github.io/webdriver-bidi/#match-url-pattern
 *
 * @param {ParsedURLPattern} urlPattern
 *     The URL pattern to match.
 * @param {string} url
 *     The string representation of a URL to test against the pattern.
 *
 * @returns {boolean}
 *     True if the pattern is compatible with the provided URL, false otherwise.
 */
export function matchURLPattern(urlPattern: ParsedURLPattern, url: string): boolean;
/**
 * Parse a URLPattern into a parsed pattern object which can be used to match
 * URLs using `matchURLPattern`.
 *
 * Implements https://w3c.github.io/webdriver-bidi/#parse-url-pattern
 *
 * @param {URLPattern} pattern
 *     The pattern to parse.
 *
 * @returns {ParsedURLPattern}
 *     The parsed URL pattern.
 *
 * @throws {InvalidArgumentError}
 *     Raised if an argument is of an invalid type or value.
 * @throws {UnsupportedOperationError}
 *     Raised if the pattern uses a protocol not supported by Firefox.
 */
export function parseURLPattern(pattern: URLPattern): ParsedURLPattern;
/**
 * Parsed pattern to use for URL matching.
 */
export type ParsedURLPattern = {
    /**
     *     The protocol, for instance "https".
     */
    protocol: string | null;
    /**
     *     The hostname, for instance "example.com".
     */
    hostname: string | null;
    /**
     *     The serialized port. Empty string for default ports of special schemes.
     */
    port: string | null;
    /**
     *     The path, starting with "/".
     */
    path: string | null;
    /**
     *     The search query string, without the leading "?"
     */
    search: string | null;
};
/**
 * Subset of properties extracted from a parsed URL.
 */
export type ParsedURL = {
    host?: string | undefined;
    /**
     *     Either a string if the path is an opaque path, or an array of strings
     *     (path segments).
     */
    path: string | Array<string>;
    port?: number | undefined;
    query?: string | undefined;
    scheme?: string | undefined;
};
