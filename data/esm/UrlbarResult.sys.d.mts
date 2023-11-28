/**
 * Class used to create a single result.
 */
export class UrlbarResult {
    /**
     * A convenience function that takes a payload annotated with
     * UrlbarUtils.HIGHLIGHT enums and returns the payload and the payload's
     * highlights. Use this function when the highlighting required by your
     * payload is based on simple substring matching, as done by
     * UrlbarUtils.getTokenMatches(). Pass the return values as the `payload` and
     * `payloadHighlights` params of the UrlbarResult constructor.
     * `payloadHighlights` is optional. If omitted, payload will not be
     * highlighted.
     *
     * If the payload doesn't have a title or has an empty title, and it also has
     * a URL, then this function also sets the title to the URL's domain.
     *
     * @param {Array} tokens The tokens that should be highlighted in each of the
     *        payload properties.
     * @param {object} payloadInfo An object that looks like this:
     *        { payloadPropertyName: payloadPropertyInfo }
     *
     *        Each payloadPropertyInfo may be either a string or an array.  If
     *        it's a string, then the property value will be that string, and no
     *        highlighting will be applied to it.  If it's an array, then it
     *        should look like this: [payloadPropertyValue, highlightType].
     *        payloadPropertyValue may be a string or an array of strings.  If
     *        it's a string, then the payloadHighlights in the return value will
     *        be an array of match highlights as described in
     *        UrlbarUtils.getTokenMatches().  If it's an array, then
     *        payloadHighlights will be an array of arrays of match highlights,
     *        one element per element in payloadPropertyValue.
     * @returns {Array} An array [payload, payloadHighlights].
     */
    static payloadAndSimpleHighlights(tokens: any[], payloadInfo: object): any[];
    static _dynamicResultTypesByName: Map<any, any>;
    /**
     * Registers a dynamic result type.  Dynamic result types are types that are
     * created at runtime, for example by an extension.  A particular type should
     * be added only once; if this method is called for a type more than once, the
     * `type` in the last call overrides those in previous calls.
     *
     * @param {string} name
     *   The name of the type.  This is used in CSS selectors, so it shouldn't
     *   contain any spaces or punctuation except for -, _, etc.
     * @param {object} type
     *   An object that describes the type.  Currently types do not have any
     *   associated metadata, so this object should be empty.
     */
    static addDynamicResultType(name: string, type?: object): void;
    /**
     * Unregisters a dynamic result type.
     *
     * @param {string} name
     *   The name of the type.
     */
    static removeDynamicResultType(name: string): void;
    /**
     * Returns an object describing a registered dynamic result type.
     *
     * @param {string} name
     *   The name of the type.
     * @returns {object}
     *   Currently types do not have any associated metadata, so the return value
     *   is an empty object if the type exists.  If the type doesn't exist,
     *   undefined is returned.
     */
    static getDynamicResultType(name: string): object;
    /**
     * Creates a result.
     *
     * @param {integer} resultType one of UrlbarUtils.RESULT_TYPE.* values
     * @param {integer} resultSource one of UrlbarUtils.RESULT_SOURCE.* values
     * @param {object} payload data for this result. A payload should always
     *        contain a way to extract a final url to visit. The url getter
     *        should have a case for each of the types.
     * @param {object} [payloadHighlights] payload highlights, if any. Each
     *        property in the payload may have a corresponding property in this
     *        object. The value of each property should be an array of [index,
     *        length] tuples. Each tuple indicates a substring in the corresponding
     *        payload property.
     */
    constructor(resultType: integer, resultSource: integer, payload: object, payloadHighlights?: object);
    type: integer;
    source: integer;
    rowIndex: number;
    heuristic: boolean;
    exposureResultType: string;
    exposureResultHidden: boolean;
    payload: any;
    payloadHighlights: any;
    /**
     * Returns a title that could be used as a label for this result.
     *
     * @returns {string} The label to show in a simplified title / url view.
     */
    get title(): string;
    /**
     * Returns an array of highlights for the title.
     *
     * @returns {Array} The array of highlights.
     */
    get titleHighlights(): any[];
    /**
     * Returns an array [title, highlights].
     *
     * @returns {Array} The title and array of highlights.
     */
    get _titleAndHighlights(): any[];
    /**
     * Returns an icon url.
     *
     * @returns {string} url of the icon.
     */
    get icon(): string;
    /**
     * Returns whether the result's `suggestedIndex` property is defined.
     * `suggestedIndex` is an optional hint to the muxer that can be set to
     * suggest a specific position among the results.
     *
     * @returns {boolean} Whether `suggestedIndex` is defined.
     */
    get hasSuggestedIndex(): boolean;
    /**
     * Returns the given payload if it's valid or throws an error if it's not.
     * The schemas in UrlbarUtils.RESULT_PAYLOAD_SCHEMA are used for validation.
     *
     * @param {object} payload The payload object.
     * @returns {object} `payload` if it's valid.
     */
    validatePayload(payload: object): object;
    /**
     * This is useful for logging results. If you need the full payload, then it's
     * better to JSON.stringify the result object itself.
     *
     * @returns {string} string representation of the result.
     */
    toString(): string;
}
