/**
 * FinderIterator. See the documentation for the `start()` method to
 * learn more.
 */
export class FinderIterator {
    _listeners: Map<any, any>;
    _currentParams: any;
    _catchingUp: Set<any>;
    _previousParams: any;
    _previousRanges: any[];
    _spawnId: number;
    _timer: number;
    ranges: any[];
    running: boolean;
    useSubFrames: boolean;
    _timeout: number;
    get kIterationSizeMax(): number;
    get params(): any;
    /**
     * Start iterating the active Finder docShell, using the options below. When
     * it already started at the request of another consumer, we first yield the
     * results we already collected before continuing onward to yield fresh results.
     * We make sure to pause every `kIterationSizeMax` iterations to make sure we
     * don't block the host process too long. In the case of a break like this, we
     * yield `undefined`, instead of a range.
     * Upon re-entrance after a break, we check if `stop()` was called during the
     * break and if so, we stop iterating.
     * Results are also passed to the `listener.onIteratorRangeFound` callback
     * method, along with a flag that specifies if the result comes from the cache
     * or is fresh. The callback also adheres to the `limit` flag.
     * The returned promise is resolved when 1) the limit is reached, 2) when all
     * the ranges have been found or 3) when `stop()` is called whilst iterating.
     *
     * @param {Number}  [options.allowDistance] Allowed edit distance between the
     *                                          current word and `options.word`
     *                                          when the iterator is already running
     * @param {Boolean} options.caseSensitive   Whether to search in case sensitive
     *                                          mode
     * @param {Boolean} options.entireWord      Whether to search in entire-word mode
     * @param {Finder}  options.finder          Currently active Finder instance
     * @param {Number}  [options.limit]         Limit the amount of results to be
     *                                          passed back. Optional, defaults to no
     *                                          limit.
     * @param {Boolean} [options.linksOnly]     Only yield ranges that are inside a
     *                                          hyperlink (used by QuickFind).
     *                                          Optional, defaults to `false`.
     * @param {Object}  options.listener        Listener object that implements the
     *                                          following callback functions:
     *                                           - onIteratorRangeFound({Range} range);
     *                                           - onIteratorReset();
     *                                           - onIteratorRestart({Object} iterParams);
     *                                           - onIteratorStart({Object} iterParams);
     * @param {Boolean} options.matchDiacritics Whether to search in
     *                                          diacritic-matching mode
     * @param {Boolean} [options.useCache]        Whether to allow results already
     *                                            present in the cache or demand fresh.
     *                                            Optional, defaults to `false`.
     * @param {Boolean} [options.useSubFrames]    Whether to iterate over subframes.
     *                                            Optional, defaults to `false`.
     * @param {String}  options.word              Word to search for
     * @return {Promise}
     */
    start({ allowDistance, caseSensitive, entireWord, finder, limit, linksOnly, listener, matchDiacritics, useCache, word, useSubFrames, }?: number): Promise<any>;
    /**
     * Stop the currently running iterator as soon as possible and optionally cache
     * the result for later.
     *
     * @param {Boolean} [cachePrevious] Whether to save the result for later.
     *                                  Optional.
     */
    stop(cachePrevious?: boolean): void;
    _runningFindResolver: (value: any) => void;
    /**
     * Stops the iteration that currently running, if it is, and start a new one
     * with the exact same params as before.
     *
     * @param {Finder} finder Currently active Finder instance
     */
    restart(finder: Finder): void;
    /**
     * Reset the internal state of the iterator. Typically this would be called
     * when the docShell is not active anymore, which makes the current and cached
     * previous result invalid.
     * If the iterator is running, it will be stopped as soon as possible.
     */
    reset(): void;
    /**
     * Check if the currently running iterator parameters are the same as the ones
     * passed through the arguments. When `true`, we can keep it running as-is and
     * the consumer should stop the iterator when `false`.
     *
     * @param {Boolean}  options.caseSensitive Whether to search in case sensitive
     *                                         mode
     * @param {Boolean}  options.entireWord    Whether to search in entire-word mode
     * @param  {Boolean} options.linksOnly     Whether to search for the word to be
     *                                         present in links only
     * @param {Boolean}  options.matchDiacritics Whether to search in
     *                                           diacritic-matching mode
     * @param  {String}  options.word          The word being searched for
     * @param  (Boolean) options.useSubFrames  Whether to search subframes
     * @return {Boolean}
     */
    continueRunning({ caseSensitive, entireWord, linksOnly, matchDiacritics, word, useSubFrames, }: boolean): boolean;
    /**
     * The default mode of operation of the iterator is to not accept duplicate
     * listeners, resolve the promise of the older listeners and replace it with
     * the new listener.
     * Consumers may opt-out of this behavior by using this check and not call
     * start().
     *
     * @param  {Object} paramSet Property bag with the same signature as you would
     *                           pass into `start()`
     * @return {Boolean}
     */
    isAlreadyRunning(paramSet: any): boolean;
    /**
     * Safely notify all registered listeners that an event has occurred.
     *
     * @param {String}   callback    Name of the callback to invoke
     * @param {mixed}    [params]    Optional argument that will be passed to the
     *                               callback
     * @param {Iterable} [listeners] Set of listeners to notify. Optional, defaults
     *                               to `this._listeners.keys()`.
     */
    _notifyListeners(callback: string, params?: mixed, listeners?: Iterable<any>): void;
    /**
     * Internal; check if an iteration request is available in the previous result
     * that we cached.
     *
     * @param  {Boolean} options.caseSensitive Whether to search in case sensitive
     *                                         mode
     * @param  {Boolean} options.entireWord    Whether to search in entire-word mode
     * @param  {Boolean} options.linksOnly     Whether to search for the word to be
     *                                         present in links only
     * @param  {Boolean} options.matchDiacritics Whether to search in
     *                                           diacritic-matching mode
     * @param  {Boolean} options.useCache      Whether the consumer wants to use the
     *                                         cached previous result at all
     * @param  {String}  options.word          The word being searched for
     * @return {Boolean}
     */
    _previousResultAvailable({ caseSensitive, entireWord, linksOnly, matchDiacritics, useCache, word, }: boolean): boolean;
    /**
     * Internal; compare if two sets of iterator parameters are equivalent.
     *
     * @param  {Object} paramSet1       First set of params (left hand side)
     * @param  {Object} paramSet2       Second set of params (right hand side)
     * @param  {Number} [allowDistance] Allowed edit distance between the two words.
     *                                  Optional, defaults to '0', which means 'no
     *                                  distance'.
     * @return {Boolean}
     */
    _areParamsEqual(paramSet1: any, paramSet2: any, allowDistance?: number): boolean;
    /**
     * Internal; iterate over a predefined set of ranges that have been collected
     * before.
     * Also here, we make sure to pause every `kIterationSizeMax` iterations to
     * make sure we don't block the host process too long. In the case of a break
     * like this, we yield `undefined`, instead of a range.
     *
     * @param {Object}       listener    Listener object
     * @param {Array}        rangeSource Set of ranges to iterate over
     * @param {nsIDOMWindow} window      The window object is only really used
     *                                   for access to `setTimeout`
     * @param {Boolean}      [withPause] Whether to pause after each `kIterationSizeMax`
     *                                   number of ranges yielded. Optional, defaults
     *                                   to `true`.
     * @yield {Range}
     */
    _yieldResult(listener: any, rangeSource: any[], window: nsIDOMWindow, withPause?: boolean): Promise<void>;
    /**
     * Internal; iterate over the set of previously found ranges. Meanwhile it'll
     * mark the listener as 'catching up', meaning it will not receive fresh
     * results from a running iterator.
     *
     * @param {Object}       listener Listener object
     * @param {nsIDOMWindow} window   The window object is only really used
     *                                for access to `setTimeout`
     * @yield {Range}
     */
    _yieldPreviousResult(listener: any, window: nsIDOMWindow): Promise<void>;
    /**
     * Internal; iterate over the set of already found ranges. Meanwhile it'll
     * mark the listener as 'catching up', meaning it will not receive fresh
     * results from the running iterator.
     *
     * @param {Object}       listener Listener object
     * @param {nsIDOMWindow} window   The window object is only really used
     *                                for access to `setTimeout`
     * @yield {Range}
     */
    _yieldIntermediateResult(listener: any, window: nsIDOMWindow): Promise<void>;
    /**
     * Internal; see the documentation of the start() method above.
     *
     * @param {Finder}       finder  Currently active Finder instance
     * @param {Number}       spawnId Since `stop()` is synchronous and this method
     *                               is not, this identifier is used to learn if
     *                               it's supposed to still continue after a pause.
     * @yield {Range}
     */
    _findAllRanges(finder: Finder, spawnId: number): Promise<void>;
    /**
     * Internal; basic wrapper around nsIFind that provides a generator yielding
     * a range each time an occurence of `word` string is found.
     *
     * @param {Boolean}      options.caseSensitive Whether to search in case
     *                                             sensitive mode
     * @param {Boolean}      options.entireWord    Whether to search in entire-word
     *                                             mode
     * @param {Boolean}      options.matchDiacritics Whether to search in
     *                                               diacritic-matching mode
     * @param {String}       options.word          The word to search for
     * @param {nsIDOMWindow} window                The window to search in
     * @yield {Range}
     */
    _iterateDocument({ caseSensitive, entireWord, matchDiacritics, word }: boolean, window: nsIDOMWindow): Generator<any, void, unknown>;
    /**
     * Internal; helper method for the iterator that recursively collects all
     * visible (i)frames inside a window.
     *
     * @param  {nsIDOMWindow} window The window to extract the (i)frames from
     * @param  {Finder}       finder The Finder instance
     * @return {Array}        Stack of frames to iterate over
     */
    _collectFrames(window: nsIDOMWindow, finder: Finder): any[];
    /**
     * Internal; helper method to extract the docShell reference from a Window or
     * Range object.
     *
     * @param  {Range} windowOrRange Window object to query. May also be a
     *                               Range, from which the owner window will
     *                               be queried.
     * @return {nsIDocShell}
     */
    _getDocShell(windowOrRange: Range): nsIDocShell;
    /**
     * Internal; determines whether a range is inside a link.
     *
     * @param  {Range} range the range to check
     * @return {Boolean}     True if the range starts in a link
     */
    _rangeStartsInLink(range: Range): boolean;
}
