/**
 * Get a trimmed version of the given string if it is longer than 80 chars (used in telemetry
 * when a string may be longer than allowed).
 *
 * @param {string} str
 *        The original string content.
 *
 * @returns {string}
 *          The trimmed version of the string when longer than 80 chars, or the given string
 *          unmodified otherwise.
 */
export function getTrimmedString(str: string): string;
/**
 * Get a string representing the error which can be included in telemetry data.
 * If the resulting string is longer than 80 characters it is going to be
 * trimmed using the `getTrimmedString` helper function.
 *
 * @param {Error | DOMException | Components.Exception} error
 *        The error object to convert into a string representation.
 *
 * @returns {string}
 *          - The `error.name` string on DOMException or Components.Exception
 *            (trimmed to 80 chars).
 *          - "NoError" if error is falsey.
 *          - "UnkownError" as a fallback.
 */
export function getErrorNameForTelemetry(error: Error | DOMException | typeof Components.Exception): string;
/**
 * This proxy object provides the telemetry helpers for the currently supported metrics (the ones listed in
 * HISTOGRAMS_IDS), the telemetry helpers for a particular metric are lazily created
 * when the related property is being accessed on this object for the first time, e.g.:
 *
 *      ExtensionTelemetry.extensionStartup.stopwatchStart(extension);
 *      ExtensionTelemetry.browserActionPreloadResult.histogramAdd({category: "Shown", extension});
 */
export const ExtensionTelemetry: Map<any, any>;
