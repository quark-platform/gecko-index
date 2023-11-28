export const UrlbarMuxerUnifiedComplete: MuxerUnifiedComplete;
/**
 * Class used to create a muxer.
 * The muxer receives and sorts results in a UrlbarQueryContext.
 */
declare class MuxerUnifiedComplete {
    get name(): string;
    /**
     * Sorts results in the given UrlbarQueryContext.
     *
     * @param {UrlbarQueryContext} context
     *   The query context.
     * @param {Array} unsortedResults
     *   The array of UrlbarResult that is not sorted yet.
     */
    sort(context: UrlbarQueryContext, unsortedResults: any[]): void;
    /**
     * Returns a *deep* copy of state (except for `state.context`, which is
     * shallow copied).  i.e., any Maps, Sets, and arrays in the state should be
     * recursively copied so that the original state is not modified when the copy
     * is modified.
     *
     * @param {object} state
     *   The muxer state to copy.
     * @returns {object}
     *   A deep copy of the state.
     */
    _copyState(state: object): object;
    /**
     * Recursively fills a result group and its children.
     *
     * There are two ways to limit the number of results in a group:
     *
     * (1) By max total result span using the `availableSpan` property. The group
     * will be filled so that the total span of its results does not exceed this
     * value.
     *
     * (2) By max total result count using the `maxResultCount` property. The
     * group will be filled so that the total number of its results does not
     * exceed this value.
     *
     * Both `availableSpan` and `maxResultCount` may be defined, and the group's
     * results will be capped to whichever limit is reached first. If either is
     * not defined, then the group inherits that limit from its parent group.
     *
     * In addition to limiting their total number of results, groups can also
     * control the composition of their child groups by using flex ratios. A group
     * can define a `flexChildren: true` property, and in that case each of its
     * children should have a `flex` property. Each child will be filled according
     * to the ratio of its flex value and the sum of the flex values of all the
     * children, similar to HTML flexbox. If some children do not fill up but
     * others do, the filled-up children will be allowed to grow to use up the
     * unfilled space.
     *
     * @param {object} group
     *   The result group to fill.
     * @param {object} limits
     *   An object with optional `availableSpan` and `maxResultCount` properties
     *   as described above. They will be used as the limits for the group.
     * @param {object} state
     *   The muxer state.
     * @returns {Array}
     *   `[results, usedLimits, hasMoreResults]` -- see `_addResults`.
     */
    _fillGroup(group: object, limits: object, state: object): any[];
    /**
     * Helper for `_fillGroup` that fills a group's children.
     *
     * @param {object} group
     *   The result group to fill. It's assumed to have a `children` property.
     * @param {object} limits
     *   An object with optional `availableSpan` and `maxResultCount` properties
     *   as described in `_fillGroup`.
     * @param {object} state
     *   The muxer state.
     * @param {Array} flexDataArray
     *   See `_updateFlexData`.
     * @returns {Array}
     *   `[results, usedLimits, hasMoreResults]` -- see `_addResults`.
     */
    _fillGroupChildren(group: object, limits: object, state: object, flexDataArray?: any[]): any[];
    /**
     * Updates flex-related state used while filling a group.
     *
     * @param {object} group
     *   The result group being filled.
     * @param {object} limits
     *   An object defining the group's limits as described in `_fillGroup`.
     * @param {Array} flexDataArray
     *   An array parallel to `group.children`. The object at index i corresponds
     *   to the child in `group.children` at index i. Each object maintains some
     *   flex-related state for its child and is updated during each pass in
     *   `_fillGroup` for `group`. When this method is called in the first pass,
     *   this argument should be null, and the method will create and return a new
     *   `flexDataArray` array that should be used in the remainder of the first
     *   pass and all subsequent passes.
     * @returns {Array}
     *   A new `flexDataArray` when called in the first pass, and `flexDataArray`
     *   itself when called in subsequent passes.
     */
    _updateFlexData(group: object, limits: object, flexDataArray: any[]): any[];
    /**
     * Adds results to a group using the results from its `RESULT_GROUP` in
     * `state.resultsByGroup`.
     *
     * @param {UrlbarUtils.RESULT_GROUP} groupConst
     *   The group's `RESULT_GROUP`.
     * @param {object} limits
     *   An object defining the group's limits as described in `_fillGroup`.
     * @param {object} state
     *   Global state that we use to make decisions during this sort.
     * @returns {Array}
     *   `[results, usedLimits, hasMoreResults]` where:
     *     results: A flat array of results in the group, empty if no results
     *       were added.
     *     usedLimits: An object defining the amount of each limit that the
     *       results use. For each possible limit property (see `_fillGroup`),
     *       there will be a corresponding property in this object. For example,
     *       if 3 results are added with a total span of 4, then this object will
     *       be: { maxResultCount: 3, availableSpan: 4 }
     *     hasMoreResults: True if `state.resultsByGroup` has more results of
     *       the same `RESULT_GROUP`. This is not related to the group's limits.
     */
    _addResults(groupConst: UrlbarUtils.RESULT_GROUP, limits: object, state: object): any[];
    /**
     * Returns whether a result can be added to its group given the current sort
     * state.
     *
     * @param {UrlbarResult} result
     *   The result.
     * @param {object} state
     *   Global state that we use to make decisions during this sort.
     * @returns {boolean}
     *   True if the result can be added and false if it should be discarded.
     */
    _canAddResult(result: UrlbarResult, state: object): boolean;
    /**
     * Updates the global state that we use to make decisions during sort.  This
     * should be called for results before we've decided whether to add or discard
     * them.
     *
     * @param {UrlbarResult} result
     *   The result.
     * @param {object} state
     *   Global state that we use to make decisions during this sort.
     */
    _updateStatePreAdd(result: UrlbarResult, state: object): void;
    /**
     * Updates the global state that we use to make decisions during sort.  This
     * should be called for results after they've been added.  It should not be
     * called for discarded results.
     *
     * @param {UrlbarResult} result
     *   The result.
     * @param {object} state
     *   Global state that we use to make decisions during this sort.
     */
    _updateStatePostAdd(result: UrlbarResult, state: object): void;
    /**
     * Inserts results with suggested indexes. This can be called for either
     * global or group-relative suggestedIndex results. It should be called after
     * `sortedResults` has been filled in.
     *
     * @param {Array} suggestedIndexResults
     *   Results with a `suggestedIndex` property.
     * @param {Array} sortedResults
     *   The sorted results. For global suggestedIndex results, this should be the
     *   final list of all results before suggestedIndex results are inserted. For
     *   group-relative suggestedIndex results, this should be the final list of
     *   results in the group before group-relative suggestedIndex results are
     *   inserted.
     * @param {object} state
     *   Global state that we use to make decisions during this sort.
     * @returns {object}
     *   A `usedLimits` object that describes the total span and count of all the
     *   added results. See `_addResults`.
     */
    _addSuggestedIndexResults(suggestedIndexResults: any[], sortedResults: any[], state: object): object;
    /**
     * Checks exposure eligibility and visibility for the given result.
     * If the result passes the exposure check, we set two properties
     * on the UrlbarResult: `result.exposureResultType` a string containing
     * the results of `UrlbarUtils.searchEngagementTelemetryType` and
     * `result.exposureResultHidden` a boolean which indicates whether the
     * result should be hidden from the view.
     *
     *
     * @param {UrlbarResult} result
     *   The result.
     * @returns {boolean}
     *   A boolean indicating if this is a hidden exposure result.
     */
    _checkAndSetExposureProperties(result: UrlbarResult): boolean;
}
export {};
