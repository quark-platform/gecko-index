/**
 * Converts a URL-like string which might include the `*` character as a wildcard
 * to a regular expression. They are used to match against actual URLs for the
 * request blocking feature from DevTools.
 *
 * The returned regular expression is case insensitive.
 *
 * @param {string} url
 *     A URL-like string which can contain one or several `*` as wildcard
 *     characters.
 * @return {RegExp}
 *     A regular expression which can be used to match URLs compatible with the
 *     provided url "template".
 */
export function wildcardToRegExp(url: string): RegExp;
