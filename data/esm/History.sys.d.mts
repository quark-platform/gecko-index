export const History: Readonly<{
    ANNOTATION_EXPIRE_NEVER: 4;
    ANNOTATION_TYPE_STRING: 3;
    ANNOTATION_TYPE_INT64: 5;
    /**
     * Fetch the available information for one page.
     *
     * @param {URL|nsIURI|string} guidOrURI: (string) or (URL, nsIURI or href)
     *      Either the full URI of the page or the GUID of the page.
     * @param {object} [options]
     *      An optional object whose properties describe options:
     *        - `includeVisits` (boolean) set this to true if `visits` in the
     *           PageInfo needs to contain VisitInfo in a reverse chronological order.
     *           By default, `visits` is undefined inside the returned `PageInfo`.
     *        - `includeMeta` (boolean) set this to true to fetch page meta fields,
     *           i.e. `description`, `site_name` and `preview_image_url`.
     *        - `includeAnnotations` (boolean) set this to true to fetch any
     *           annotations that are associated with the page.
     *
     * @return (Promise)
     *      A promise resolved once the operation is complete.
     * @resolves (PageInfo | null) If the page could be found, the information
     *      on that page.
     * @note the VisitInfo objects returned while fetching visits do not
     *       contain the property `referrer`.
     *       TODO: Add `referrer` to VisitInfo. See Bug #1365913.
     * @note the visits returned will not contain `TRANSITION_EMBED` visits.
     *
     * @throws (Error)
     *      If `guidOrURI` does not have the expected type or if it is a string
     *      that may be parsed neither as a valid URL nor as a valid GUID.
     */
    fetch(guidOrURI: URL | nsIURI | string, options?: object): any;
    /**
     * Fetches all pages which have one or more of the specified annotations.
     *
     * @param annotations: An array of strings containing the annotation names to
     *                     find.
     * @return (Promise)
     *      A promise resolved once the operation is complete.
     * @resolves (Map)
     *      A Map containing the annotations, pages and their contents, e.g.
     *      Map("anno1" => [{page, content}, {page, content}]), "anno2" => ....);
     * @rejects (Error) XXX
     *      Rejects if the insert was unsuccessful.
     */
    fetchAnnotatedPages(annotations: any): any;
    /**
     * Fetch multiple pages.
     *
     * @param {string[]|nsIURI[]|URL[]} guidOrURIs: Array of href or URLs to fetch.
     * @returns {Promise}
     *   A promise resolved once the operation is complete.
     * @resolves {Map<string, string>} Map of PageInfos, keyed by the input info,
     *   either guid or href. We don't use nsIURI or URL as keys to avoid
     *   complexity, in all the cases the caller knows which objects is handling,
     *   and can unwrap them. Unknown input pages will have no entry in the Map.
     * @throws (Error)
     *   If input is invalid, for example not a valid GUID or URL.
     */
    fetchMany(guidOrURIs: string[] | nsIURI[] | URL[]): Promise<any>;
    /**
     * Adds a number of visits for a single page.
     *
     * Any change may be observed through PlacesObservers.
     *
     * @param pageInfo: (PageInfo)
     *      Information on a page. This `PageInfo` MUST contain
     *        - a property `url`, as specified by the definition of `PageInfo`.
     *        - a property `visits`, as specified by the definition of
     *          `PageInfo`, which MUST contain at least one visit.
     *      If a property `title` is provided, the title of the page
     *      is updated.
     *      If the `date` of a visit is not provided, it defaults
     *      to now.
     *      If the `transition` of a visit is not provided, it defaults to
     *      TRANSITION_LINK.
     *
     * @return (Promise)
     *      A promise resolved once the operation is complete.
     * @resolves (PageInfo)
     *      A PageInfo object populated with data after the insert is complete.
     * @rejects (Error)
     *      Rejects if the insert was unsuccessful.
     *
     * @throws (Error)
     *      If the `url` specified was for a protocol that should not be
     *      stored (@see nsNavHistory::CanAddURI).
     * @throws (Error)
     *      If `pageInfo` has an unexpected type.
     * @throws (Error)
     *      If `pageInfo` does not have a `url`.
     * @throws (Error)
     *      If `pageInfo` does not have a `visits` property or if the
     *      value of `visits` is ill-typed or is an empty array.
     * @throws (Error)
     *      If an element of `visits` has an invalid `date`.
     * @throws (Error)
     *      If an element of `visits` has an invalid `transition`.
     */
    insert(pageInfo: any): any;
    /**
     * Adds a number of visits for a number of pages.
     *
     * Any change may be observed through PlacesObservers.
     *
     * @param pageInfos: (Array<PageInfo>)
     *      Information on a page. This `PageInfo` MUST contain
     *        - a property `url`, as specified by the definition of `PageInfo`.
     *        - a property `visits`, as specified by the definition of
     *          `PageInfo`, which MUST contain at least one visit.
     *      If a property `title` is provided, the title of the page
     *      is updated.
     *      If the `date` of a visit is not provided, it defaults
     *      to now.
     *      If the `transition` of a visit is not provided, it defaults to
     *      TRANSITION_LINK.
     * @param onResult: (function(PageInfo))
     *      A callback invoked for each page inserted.
     * @param onError: (function(PageInfo))
     *      A callback invoked for each page which generated an error
     *      when an insert was attempted.
     *
     * @return (Promise)
     *      A promise resolved once the operation is complete.
     * @resolves (null)
     * @rejects (Error)
     *      Rejects if all of the inserts were unsuccessful.
     *
     * @throws (Error)
     *      If the `url` specified was for a protocol that should not be
     *      stored (@see nsNavHistory::CanAddURI).
     * @throws (Error)
     *      If `pageInfos` has an unexpected type.
     * @throws (Error)
     *      If a `pageInfo` does not have a `url`.
     * @throws (Error)
     *      If a `PageInfo` does not have a `visits` property or if the
     *      value of `visits` is ill-typed or is an empty array.
     * @throws (Error)
     *      If an element of `visits` has an invalid `date`.
     * @throws (Error)
     *      If an element of `visits` has an invalid `transition`.
     */
    insertMany(pageInfos: any, onResult: any, onError: any): any;
    /**
     * Remove pages from the database.
     *
     * Any change may be observed through PlacesObservers.
     *
     *
     * @param page: (URL or nsIURI)
     *      The full URI of the page.
     *             or (string)
     *      Either the full URI of the page or the GUID of the page.
     *             or (Array<URL|nsIURI|string>)
     *      An array of the above, to batch requests.
     * @param onResult: (function(PageInfo))
     *      A callback invoked for each page found.
     *
     * @return (Promise)
     *      A promise resolved once the operation is complete.
     * @resolve (bool)
     *      `true` if at least one page was removed, `false` otherwise.
     * @throws (TypeError)
     *       If `pages` has an unexpected type or if a string provided
     *       is neither a valid GUID nor a valid URI or if `pages`
     *       is an empty array.
     */
    remove(pages: any, onResult?: any): Promise<boolean>;
    /**
     * Remove visits matching specific characteristics.
     *
     * Any change may be observed through PlacesObservers.
     *
     * @param filter: (object)
     *      The `object` may contain some of the following
     *      properties:
     *          - beginDate: (Date) Remove visits that have
     *                been added since this date (inclusive).
     *          - endDate: (Date) Remove visits that have
     *                been added before this date (inclusive).
     *          - limit: (Number) Limit the number of visits
     *                we remove to this number
     *          - url: (URL) Only remove visits to this URL
     *          - transition: (Integer)
     *                The type of the transition (see TRANSITIONS below)
     *      If both `beginDate` and `endDate` are specified,
     *      visits between `beginDate` (inclusive) and `end`
     *      (inclusive) are removed.
     *
     * @param onResult: (function(VisitInfo), [optional])
     *     A callback invoked for each visit found and removed.
     *     Note that the referrer property of `VisitInfo`
     *     is NOT populated.
     *
     * @return (Promise)
     * @resolve (bool)
     *      `true` if at least one visit was removed, `false`
     *      otherwise.
     * @throws (TypeError)
     *      If `filter` does not have the expected type, in
     *      particular if the `object` is empty.
     */
    removeVisitsByFilter(filter: any, onResult?: any): any;
    /**
     * Remove pages from the database based on a filter.
     *
     * Any change may be observed through PlacesObservers
     *
     *
     * @param filter: An object containing a non empty subset of the following
     * properties:
     * - host: (string)
     *     Hostname with or without subhost. Examples:
     *       "mozilla.org" removes pages from mozilla.org but not its subdomains
     *       ".mozilla.org" removes pages from mozilla.org and its subdomains
     *       "." removes local files
     * - beginDate: (Date)
     *     The first time the page was visited (inclusive)
     * - endDate: (Date)
     *     The last time the page was visited (inclusive)
     * @param [optional] onResult: (function(PageInfo))
     *      A callback invoked for each page found.
     *
     * @note This removes pages with at least one visit inside the timeframe.
     *       Any visits outside the timeframe will also be removed with the page.
     * @return (Promise)
     *      A promise resolved once the operation is complete.
     * @resolve (bool)
     *      `true` if at least one page was removed, `false` otherwise.
     * @throws (TypeError)
     *       if `filter` does not have the expected type, in particular
     *       if the `object` is empty, or its components do not satisfy the
     *       criteria given above
     */
    removeByFilter(filter: any, onResult: any): any;
    /**
     * Determine if a page has been visited.
     *
     * @param guidOrURI: (string) or (URL, nsIURI or href)
     *      Either the full URI of the page or the GUID of the page.
     * @return (Promise)
     *      A promise resolved once the operation is complete.
     * @resolve (bool)
     *      `true` if the page has been visited, `false` otherwise.
     * @throws (Error)
     *      If `guidOrURI` has an unexpected type or if a string provided
     *      is neither not a valid GUID nor a valid URI.
     */
    hasVisits(guidOrURI: any): any;
    /**
     * Clear all history.
     *
     * @return (Promise)
     *      A promise resolved once the operation is complete.
     */
    clear(): any;
    /**
     * Is a value a valid transition type?
     *
     * @param transition: (String)
     * @return (Boolean)
     */
    isValidTransition(transition: any): boolean;
    /**
     * Throw if an object is not a Date object.
     */
    ensureDate(arg: any): void;
    /**
     * Update information for a page.
     *
     * Currently, it supports updating the description, preview image URL and annotations
     * for a page, any other fields will be ignored.
     *
     * Note that this function will ignore the update if the target page has not
     * yet been stored in the database. `History.fetch` could be used to check
     * whether the page and its meta information exist or not. Beware that
     * fetch&update might fail as they are not executed in a single transaction.
     *
     * @param pageInfo: (PageInfo)
     *      pageInfo must contain a URL of the target page. It will be ignored
     *      if a valid page `guid` is also provided.
     *
     *      If a property `description` is provided, the description of the
     *      page is updated. Note that:
     *      1). An empty string or null `description` will clear the existing
     *          value in the database.
     *      2). Descriptions longer than DB_DESCRIPTION_LENGTH_MAX will be
     *          truncated.
     *
     *      If a property `siteName` is provided, the site name of the
     *      page is updated. Note that:
     *      1). An empty string or null `siteName` will clear the existing
     *          value in the database.
     *      2). Descriptions longer than DB_SITENAME_LENGTH_MAX will be
     *          truncated.
     *
     *      If a property `previewImageURL` is provided, the preview image
     *      URL of the page is updated. Note that:
     *      1). A null `previewImageURL` will clear the existing value in the
     *          database.
     *      2). It throws if its length is greater than DB_URL_LENGTH_MAX
     *          defined in PlacesUtils.jsm.
     *
     *      If a property `annotations` is provided, the annotations will be
     *      updated. Note that:
     *      1). It should be a Map containing key/value pairs to be updated.
     *      2). If the value is falsy, the annotation will be removed.
     *      3). If the value is non-falsy, the annotation will be added or updated.
     *      For `annotations` the keys must all be strings, the values should be
     *      Boolean, Number or Strings. null and undefined are supported as falsy values.
     *
     * @return (Promise)
     *      A promise resolved once the update is complete.
     * @rejects (Error)
     *      Rejects if the update was unsuccessful.
     *
     * @throws (Error)
     *      If `pageInfo` has an unexpected type.
     * @throws (Error)
     *      If `pageInfo` has an invalid `url` or an invalid `guid`.
     * @throws (Error)
     *      If `pageInfo` has neither `description` nor `previewImageURL`.
     * @throws (Error)
     *      If the length of `pageInfo.previewImageURL` is greater than
     *      DB_URL_LENGTH_MAX defined in PlacesUtils.jsm.
     */
    update(pageInfo: any): any;
    /**
     * Possible values for the `transition` property of `VisitInfo`
     * objects.
     */
    TRANSITIONS: {
        /**
         * The user followed a link and got a new toplevel window.
         */
        LINK: any;
        /**
         * The user typed the page's URL in the URL bar or selected it from
         * URL bar autocomplete results, clicked on it from a history query
         * (from the History sidebar, History menu, or history query in the
         * personal toolbar or Places organizer.
         */
        TYPED: any;
        /**
         * The user followed a bookmark to get to the page.
         */
        BOOKMARK: any;
        /**
         * Some inner content is loaded. This is true of all images on a
         * page, and the contents of the iframe. It is also true of any
         * content in a frame if the user did not explicitly follow a link
         * to get there.
         */
        EMBED: any;
        /**
         * Set when the transition was a permanent redirect.
         */
        REDIRECT_PERMANENT: any;
        /**
         * Set when the transition was a temporary redirect.
         */
        REDIRECT_TEMPORARY: any;
        /**
         * Set when the transition is a download.
         */
        DOWNLOAD: any;
        /**
         * The user followed a link and got a visit in a frame.
         */
        FRAMED_LINK: any;
        /**
         * The user reloaded a page.
         */
        RELOAD: any;
    };
}>;
