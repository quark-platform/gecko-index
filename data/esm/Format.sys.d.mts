/**
 * Pretty-print values passed to template strings.
 *
 * Usage::
 *
 *     let bool = {value: true};
 *     pprint`Expected boolean, got ${bool}`;
 *     => 'Expected boolean, got [object Object] {"value": true}'
 *
 *     let htmlElement = document.querySelector("input#foo");
 *     pprint`Expected element ${htmlElement}`;
 *     => 'Expected element <input id="foo" class="bar baz" type="input">'
 *
 *     pprint`Current window: ${window}`;
 *     => '[object Window https://www.mozilla.org/]'
 */
export function pprint(ss: any, ...values: any[]): string;
/**
 * Template literal that truncates string values in arbitrary objects.
 *
 * Given any object, the template will walk the object and truncate
 * any strings it comes across to a reasonable limit.  This is suitable
 * when you have arbitrary data and data integrity is not important.
 *
 * The strings are truncated in the middle so that the beginning and
 * the end is preserved.  This will make a long, truncated string look
 * like "X <...> Y", where X and Y are half the number of characters
 * of the maximum string length from either side of the string.
 *
 *
 * Usage::
 *
 *     truncate`Hello ${"x".repeat(260)}!`;
 *     // Hello xxx ... xxx!
 *
 * Functions named `toJSON` or `toString` on objects will be called.
 */
export function truncate(strings: any, ...values: any[]): string;
