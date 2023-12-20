export namespace WatcherRegistry {
    /**
     * Tells if a given watcher currently watches for a given target type.
     *
     * @param WatcherActor watcher
     *               The WatcherActor which should be listening.
     * @param string targetType
     *               The new target type to query.
     * @return boolean
     *         Returns true if already watching.
     */
    function isWatchingTargets(watcher: any, targetType: any): boolean;
    /**
     * Retrieve the data saved into `sharedData` that is used to know
     * about which type of targets and resources we care listening about.
     * `sessionDataByWatcherActor` is saved into `sharedData` after each mutation,
     * but `sessionDataByWatcherActor` is the source of truth.
     *
     * @param WatcherActor watcher
     *               The related WatcherActor which starts/stops observing.
     * @param object options (optional)
     *               A dictionary object with `createData` boolean attribute.
     *               If this attribute is set to true, we create the data structure in the Map
     *               if none exists for this prefix.
     */
    function getSessionData(watcher: any, { createData }?: {
        createData?: boolean;
    }): any;
    /**
     * Given a Watcher Actor ID, return the related Watcher Actor instance.
     *
     * @param String actorID
     *        The Watcher Actor ID to search for.
     * @return WatcherActor
     *         The Watcher Actor instance.
     */
    function getWatcher(actorID: any): any;
    /**
     * Return an array of the watcher actors that match the passed browserId
     *
     * @param {Number} browserId
     * @returns {Array<WatcherActor>} An array of the matching watcher actors
     */
    function getWatchersForBrowserId(browserId: number): WatcherActor[];
    /**
     * Notify that a given watcher added or set some entries for given data type.
     *
     * @param WatcherActor watcher
     *               The WatcherActor which starts observing.
     * @param string type
     *               The type of data to be added
     * @param Array<Object> entries
     *               The values to be added to this type of data
     * @param String updateType
     *               "add" will only add the new entries in the existing data set.
     *               "set" will update the data set with the new entries.
     */
    function addOrSetSessionDataEntry(watcher: any, type: any, entries: any, updateType: any): void;
    /**
     * Notify that a given watcher removed an entry in a given data type.
     *
     * @param WatcherActor watcher
     *               The WatcherActor which stops observing.
     * @param string type
     *               The type of data to be removed
     * @param Array<Object> entries
     *               The values to be removed to this type of data
     * @params {Object} options
     * @params {Boolean} options.isModeSwitching: Set to true true when this is called as the
     *         result of a change to the devtools.browsertoolbox.scope pref.
     *
     * @return boolean
     *         True if we such entry was already registered, for this watcher actor.
     */
    function removeSessionDataEntry(watcher: any, type: any, entries: any, options: any): boolean;
    /**
     * Cleanup everything about a given watcher actor.
     * Remove it from any registry so that we stop interacting with it.
     *
     * The watcher would be automatically unregistered from removeWatcherEntry,
     * if we remove all entries. But we aren't removing all breakpoints.
     * So here, we force clearing any reference to the watcher actor when it destroys.
     */
    function unregisterWatcher(watcher: any): void;
    /**
     * Notify that a given watcher starts observing a new target type.
     *
     * @param WatcherActor watcher
     *               The WatcherActor which starts observing.
     * @param string targetType
     *               The new target type to start listening to.
     */
    function watchTargets(watcher: any, targetType: any): void;
    /**
     * Notify that a given watcher stops observing a given target type.
     *
     * @param WatcherActor watcher
     *               The WatcherActor which stops observing.
     * @param string targetType
     *               The new target type to stop listening to.
     * @params {Object} options
     * @params {Boolean} options.isModeSwitching: Set to true true when this is called as the
     *         result of a change to the devtools.browsertoolbox.scope pref.
     * @return boolean
     *         True if we were watching for this target type, for this watcher actor.
     */
    function unwatchTargets(watcher: any, targetType: any, options: any): boolean;
    /**
     * Notify that a given watcher starts observing new resource types.
     *
     * @param WatcherActor watcher
     *               The WatcherActor which starts observing.
     * @param Array<string> resourceTypes
     *               The new resource types to start listening to.
     */
    function watchResources(watcher: any, resourceTypes: any): void;
    /**
     * Notify that a given watcher stops observing given resource types.
     *
     * See `watchResources` for argument definition.
     *
     * @return boolean
     *         True if we were watching for this resource type, for this watcher actor.
     */
    function unwatchResources(watcher: any, resourceTypes: any): boolean;
    /**
     * Unregister the JS Window Actor if there is no more DevTools code observing any target/resource.
     */
    function maybeUnregisteringJSWindowActor(): void;
}
