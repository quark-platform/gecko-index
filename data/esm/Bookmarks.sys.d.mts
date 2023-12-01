export const Bookmarks: Readonly<{
    /**
     * Item's type constants.
     * These should stay consistent with nsINavBookmarksService.idl
     */
    TYPE_BOOKMARK: 1;
    TYPE_FOLDER: 2;
    TYPE_SEPARATOR: 3;
    /**
     * Sync status constants, stored for each item.
     */
    SYNC_STATUS: {
        UNKNOWN: 0;
        NEW: 1;
        NORMAL: 2;
    };
    /**
     * Default index used to append a bookmark-item at the end of a folder.
     * This should stay consistent with nsINavBookmarksService.idl
     */
    DEFAULT_INDEX: -1;
    /**
     * Maximum length of a tag.
     * Any tag above this length is rejected.
     */
    MAX_TAG_LENGTH: 100;
    /**
     * Bookmark change source constants, passed as optional properties and
     * forwarded to observers. See nsINavBookmarksService.idl for an explanation.
     */
    SOURCES: {
        DEFAULT: 0;
        SYNC: 1;
        IMPORT: 2;
        SYNC_REPARENT_REMOVED_FOLDER_CHILDREN: 4;
        RESTORE: 5;
        RESTORE_ON_STARTUP: 6;
    };
    /**
     * Special GUIDs associated with bookmark roots.
     * It's guaranteed that the roots will always have these guids.
     */
    rootGuid: "root________";
    menuGuid: "menu________";
    toolbarGuid: "toolbar_____";
    unfiledGuid: "unfiled_____";
    mobileGuid: "mobile______";
    tagsGuid: "tags________";
    /**
     * The GUIDs of the user content root folders that we support, for easy access
     * as a set.
     */
    userContentRoots: string[];
    /**
     * GUID associated with bookmarks that haven't been saved to the database yet.
     */
    unsavedGuid: "new_________";
    /**
     * GUIDs associated with virtual queries that are used for displaying bookmark
     * folders in the left pane.
     */
    virtualMenuGuid: "menu_______v";
    virtualToolbarGuid: "toolbar____v";
    virtualUnfiledGuid: "unfiled____v";
    virtualMobileGuid: "mobile_____v";
    /**
     * Checks if a guid is a virtual root.
     *
     * @param {String} guid The guid of the item to look for.
     * @returns {Boolean} true if guid is a virtual root, false otherwise.
     */
    isVirtualRootItem(guid: string): boolean;
    /**
     * Returns the title to use on the UI for a bookmark item. Root folders
     * in the database don't store fully localised versions of the title. To
     * get those this function should be called.
     *
     * Hence, this function should only be called if a root folder object is
     * likely to be displayed to the user.
     *
     * @param {Object} info An object representing a bookmark-item.
     * @returns {String} The correct string.
     * @throws {Error} If the guid in PlacesUtils.bookmarks.userContentRoots is
     *                 not supported.
     */
    getLocalizedTitle(info: any): string;
    /**
     * Inserts a bookmark-item into the bookmarks tree.
     *
     * For creating a bookmark, the following set of properties is required:
     *  - type
     *  - parentGuid
     *  - url, only for bookmarked URLs
     *
     * If an index is not specified, it defaults to appending.
     * It's also possible to pass a non-existent GUID to force creation of an
     * item with the given GUID, but unless you have a very sound reason, such as
     * an undo manager implementation or synchronization, don't do that.
     *
     * Note that any known properties that don't apply to the specific item type
     * cause an exception.
     *
     * @param info
     *        object representing a bookmark-item.
     *
     * @return {Promise} resolved when the creation is complete.
     * @resolves to an object representing the created bookmark.
     * @rejects if it's not possible to create the requested bookmark.
     * @throws if the arguments are invalid.
     */
    insert(info: any): Promise<any>;
    /**
     * Inserts a bookmark-tree into the existing bookmarks tree.
     *
     * All the specified folders and bookmarks will be inserted as new, even
     * if duplicates. There's no merge support at this time.
     *
     * The input should be of the form:
     * {
     *   guid: "<some-existing-guid-to-use-as-parent>",
     *   source: "<some valid source>", (optional)
     *   children: [
     *     ... valid bookmark objects.
     *   ]
     * }
     *
     * Children will be appended to any existing children of the parent
     * that is specified. The source specified on the root of the tree
     * will be used for all the items inserted. Any indices or custom parentGuids
     * set on children will be ignored and overwritten.
     *
     * @param {Object} tree
     *        object representing a tree of bookmark items to insert.
     * @param {Object} options [optional]
     *        object with properties representing options.  Current options are:
     *         - fixupOrSkipInvalidEntries: makes the insert more lenient to
     *           mistakes in the input tree.  Properties of an entry that are
     *           fixable will be corrected, otherwise the entry will be skipped.
     *           This is particularly convenient for import/restore operations,
     *           but should not be abused for common inserts, since it may hide
     *           bugs in the calling code.
     *
     * @return {Promise} resolved when the creation is complete.
     * @resolves to an array of objects representing the created bookmark(s).
     * @rejects if it's not possible to create the requested bookmark.
     * @throws if the arguments are invalid.
     */
    insertTree(tree: any, options: any): Promise<any>;
    /**
     * Updates a bookmark-item.
     *
     * Only set the properties which should be changed (undefined properties
     * won't be taken into account).
     * Moreover, the item's type or dateAdded cannot be changed, since they are
     * immutable after creation.  Trying to change them will reject.
     *
     * Note that any known properties that don't apply to the specific item type
     * cause an exception.
     *
     * @param info
     *        object representing a bookmark-item, as defined above.
     *
     * @return {Promise} resolved when the update is complete.
     * @resolves to an object representing the updated bookmark.
     * @rejects if it's not possible to update the given bookmark.
     * @throws if the arguments are invalid.
     */
    update(info: any): Promise<any>;
    /**
     * Moves multiple bookmark-items to a specific folder.
     *
     * If you are only updating/moving a single bookmark, use update() instead.
     *
     * @param {Array} guids
     *        An array of GUIDs representing the bookmarks to move.
     * @param {String} parentGuid
     *        Optional, the parent GUID to move the bookmarks to.
     * @param {Integer} index
     *        The index to move the bookmarks to. If this is -1, the bookmarks
     *        will be appended to the folder.
     * @param {Integer} source
     *        One of the Bookmarks.SOURCES.* options, representing the source of
     *        this change.
     *
     * @return {Promise} resolved when the move is complete.
     * @resolves to an array of objects representing the moved bookmarks.
     * @rejects if it's not possible to move the given bookmark(s).
     * @throws if the arguments are invalid.
     */
    moveToFolder(guids: any[], parentGuid: string, index: Integer, source: Integer): Promise<any>;
    /**
     * Removes one or more bookmark-items.
     *
     * @param guidOrInfo This may be:
     *        - The globally unique identifier of the item to remove
     *        - an object representing the item, as defined above
     *        - an array of objects representing the items to be removed
     * @param {Object} [options={}]
     *        Additional options that can be passed to the function.
     *        Currently supports the following properties:
     *         - preventRemovalOfNonEmptyFolders: Causes an exception to be
     *           thrown when attempting to remove a folder that is not empty.
     *         - source: The change source, forwarded to all bookmark observers.
     *           Defaults to nsINavBookmarksService::SOURCE_DEFAULT.
     *
     * @return {Promise}
     * @resolves when the removal is complete
     * @rejects if the provided guid doesn't match any existing bookmark.
     * @throws if the arguments are invalid.
     */
    remove(guidOrInfo: any, options?: any): Promise<any>;
    /**
     * Removes ALL bookmarks, resetting the bookmarks storage to an empty tree.
     *
     * Note that roots are preserved, only their children will be removed.
     *
     * @param {Object} [options={}]
     *        Additional options. Currently supports the following properties:
     *         - source: The change source, forwarded to all bookmark observers.
     *           Defaults to nsINavBookmarksService::SOURCE_DEFAULT.
     *
     * @return {Promise} resolved when the removal is complete.
     * @resolves once the removal is complete.
     */
    eraseEverything(options?: any): Promise<any>;
    /**
     * Returns a list of recently bookmarked items.
     * Only includes actual bookmarks. Excludes folders, separators and queries.
     *
     * @param {integer} numberOfItems
     *        The maximum number of bookmark items to return.
     *
     * @return {Promise} resolved when the listing is complete.
     * @resolves to an array of recent bookmark-items.
     * @rejects if an error happens while querying.
     */
    getRecent(numberOfItems: integer): Promise<any>;
    /**
     * Fetches information about a bookmark-item.
     *
     * REMARK: any successful call to this method resolves to a single
     *         bookmark-item (or null), even when multiple bookmarks may exist
     *         (e.g. fetching by url).  If you wish to retrieve all of the
     *         bookmarks for a given match, use the callback instead.
     *
     * Input can be either a guid or an object with one, and only one, of these
     * filtering properties set:
     *  - guid
     *      retrieves the item with the specified guid.
     *  - parentGuid and index
     *      retrieves the item by its position.
     *  - url
     *      retrieves the most recent bookmark having the given URL.
     *      To retrieve ALL of the bookmarks for that URL, you must pass in an
     *      onResult callback, that will be invoked once for each found bookmark.
     *  - guidPrefix
     *      retrieves the most recent item with the specified guid prefix.
     *      To retrieve ALL of the bookmarks for that guid prefix, you must pass
     *      in an onResult callback, that will be invoked once for each bookmark.
     *  - tags
     *      Retrieves the most recent item with all the specified tags.
     *      The tags are matched in a case-insensitive way.
     *      To retrieve ALL of the bookmarks having these tags, pass in an
     *      onResult callback, that will be invoked once for each bookmark.
     *      Note, there can be multiple bookmarks for the same url, if you need
     *      unique tagged urls you can filter duplicates by accumulating in a Set.
     *
     * @param guidOrInfo
     *        The globally unique identifier of the item to fetch, or an
     *        object representing it, as defined above.
     * @param onResult [optional]
     *        Callback invoked for each found bookmark.
     * @param options [optional]
     *        an optional object whose properties describe options for the fetch:
     *         - concurrent: fetches concurrently to any writes, returning results
     *                       faster. On the negative side, it may return stale
     *                       information missing the currently ongoing write.
     *         - includePath: additionally fetches the path for the bookmarks.
     *                        This is a potentially expensive operation.  When
     *                        set to true, the path property is set on results
     *                        containing an array of {title, guid} objects
     *                        ordered from root to leaf.
     *         - includeItemIds:
     *             include .itemId and .parentId in the results.
     *             ALWAYS USE THE GUIDs instead of these, unless it's _really_
     *             necessary to get them, e.g. when sending Places notifications.
     *
     * @return {Promise} resolved when the fetch is complete.
     * @resolves to an object representing the found item, as described above, or
     *           an array of such objects.  if no item is found, the returned
     *           promise is resolved to null.
     * @rejects if an error happens while fetching.
     * @throws if the arguments are invalid.
     *
     * @note Any unknown property in the info object is ignored.  Known properties
     *       may be overwritten.
     */
    fetch(guidOrInfo: any, onResult?: any, options?: {}): Promise<any>;
    /**
     * Retrieves an object representation of a bookmark-item, along with all of
     * its descendants, if any.
     *
     * Each node in the tree is an object that extends the item representation
     * described above with some additional properties:
     *
     *  - [deprecated] itemId (number)
     *      the item's id.  Defined only if aOptions.includeItemIds is set.
     *  - [deprecated] parentId (number)
     *      the item's parent id.  Defined only if aOptions.includeItemIds is set.
     *  - annos (array)
     *      the item's annotations.  This is not set if there are no annotations
     *      set for the item.
     *
     * The root object of the tree also has the following properties set:
     *  - itemsCount (number, not enumerable)
     *      the number of items, including the root item itself, which are
     *      represented in the resolved object.
     *
     * Bookmarked URLs may also have the following properties:
     *  - tags (string)
     *      csv string of the bookmark's tags, if any.
     *  - charset (string)
     *      the last known charset of the bookmark, if any.
     *  - iconurl (URL)
     *      the bookmark's favicon URL, if any.
     *
     * Folders may also have the following properties:
     *  - children (array)
     *      the folder's children information, each of them having the same set of
     *      properties as above.
     *
     * @param [optional] guid
     *        the topmost item to be queried.  If it's not passed, the Places
     *        root folder is queried: that is, you get a representation of the
     *        entire bookmarks hierarchy.
     * @param [optional] options
     *        Options for customizing the query behavior, in the form of an
     *        object with any of the following properties:
     *         - excludeItemsCallback: a function for excluding items, along with
     *           their descendants.  Given an item object (that has everything set
     *           apart its potential children data), it should return true if the
     *           item should be excluded.  Once an item is excluded, the function
     *           isn't called for any of its descendants.  This isn't called for
     *           the root item.
     *           WARNING: since the function may be called for each item, using
     *           this option can slow down the process significantly if the
     *           callback does anything that's not relatively trivial.  It is
     *           highly recommended to avoid any synchronous I/O or DB queries.
     *         - includeItemIds: opt-in to include the deprecated id property.
     *           Use it if you must. It'll be removed once the switch to guids is
     *           complete.
     *
     * @return {Promise} resolved when the fetch is complete.
     * @resolves to an object that represents either a single item or a
     *           bookmarks tree.  if guid points to a non-existent item, the
     *           returned promise is resolved to null.
     * @rejects if an error happens while fetching.
     * @throws if the arguments are invalid.
     */
    fetchTree(guid?: string, options?: {}): Promise<any>;
    /**
     * Fetch all the existing tags, sorted alphabetically.
     * @return {Promise} resolves to an array of objects representing tags, when
     *         fetching is complete.
     *         Each object looks like {
     *           name: the name of the tag,
     *           count: number of bookmarks with this tag
     *         }
     */
    fetchTags(): Promise<any>;
    /**
     * Reorders contents of a folder based on a provided array of GUIDs.
     *
     * @param parentGuid
     *        The globally unique identifier of the folder whose contents should
     *        be reordered.
     * @param orderedChildrenGuids
     *        Ordered array of the children's GUIDs.  If this list contains
     *        non-existing entries they will be ignored.  If the list is
     *        incomplete, and the current child list is already in order with
     *        respect to orderedChildrenGuids, no change is made. Otherwise, the
     *        new items are appended but maintain their current order relative to
     *        eachother.
     * @param {Object} [options={}]
     *        Additional options. Currently supports the following properties:
     *         - lastModified: The last modified time to use for the folder and
                 reordered children. Defaults to the current time.
     *         - source: The change source, forwarded to all bookmark observers.
     *           Defaults to nsINavBookmarksService::SOURCE_DEFAULT.
     *
     * @return {Promise} resolved when reordering is complete.
     * @rejects if an error happens while reordering.
     * @throws if the arguments are invalid.
     */
    reorder(parentGuid: any, orderedChildrenGuids: any, options?: any): Promise<any>;
    /**
     * Searches a list of bookmark-items by a search term, url or title.
     *
     * IMPORTANT:
     * This is intended as an interim API for the web-extensions implementation.
     * It will be removed as soon as we have a new querying API.
     *
     * Note also that this used to exclude separators but no longer does so.
     *
     * If you just want to search bookmarks by URL, use .fetch() instead.
     *
     * @param query
     *        Either a string to use as search term, or an object
     *        containing any of these keys: query, title or url with the
     *        corresponding string to match as value.
     *        The url property can be either a string or an nsIURI.
     *
     * @return {Promise} resolved when the search is complete.
     * @resolves to an array of found bookmark-items.
     * @rejects if an error happens while searching.
     * @throws if the arguments are invalid.
     *
     * @note Any unknown property in the query object is ignored.
     *       Known properties may be overwritten.
     */
    search(query: any): Promise<any>;
}>;
