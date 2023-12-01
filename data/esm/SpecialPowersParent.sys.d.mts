export class SpecialPowersParent extends JSWindowActorParent {
    static registerActor(): void;
    static unregisterActor(): void;
    _messageManager: any;
    _serviceWorkerListener: {
        onRegister(): void;
        onUnregister(): void;
    };
    _observer: any;
    didDestroy: any;
    _registerObservers: {
        _self: this;
        _topics: any[];
        _add(topic: any): void;
        observe(aSubject: any, aTopic: any, aData: any): void;
    };
    _basePrefs: Map<any, any>;
    _crashDumpDir: void;
    _processCrashObserversRegistered: boolean;
    _chromeScriptListeners: any[];
    _extensions: Map<any, any>;
    _taskActors: Map<any, any>;
    init(): void;
    uninit(): void;
    observe(aSubject: any, aTopic: any, aData: any): void;
    _getCrashDumpDir(): void;
    _getPendingCrashDumpDir(): void;
    _pendingCrashDumpDir: void;
    _deleteCrashDumpFiles(aFilenames: any): boolean;
    _findCrashDumpFiles(aToIgnore: any): string[];
    _deletePendingCrashDumpFiles(): boolean;
    _addProcessCrashObservers(): void;
    _removeProcessCrashObservers(): void;
    onRegister(): void;
    _getURI(url: any): nsIURIType;
    _notifyCategoryAndObservers(subject: any, topic: any, data: any): void;
    _applyPrefs(actions: any): boolean;
    /**
     * Take in a list of pref changes to make, pushes their current values
     * onto the restore stack, and makes the changes.  When the test
     * finishes, these changes are reverted.
     *
     * |inPrefs| must be an object with up to two properties: "set" and "clear".
     * pushPrefEnv will set prefs as indicated in |inPrefs.set| and will unset
     * the prefs indicated in |inPrefs.clear|.
     *
     * For example, you might pass |inPrefs| as:
     *
     *  inPrefs = {'set': [['foo.bar', 2], ['magic.pref', 'baz']],
     *             'clear': [['clear.this'], ['also.this']] };
     *
     * Notice that |set| and |clear| are both an array of arrays.  In |set|, each
     * of the inner arrays must have the form [pref_name, value] or [pref_name,
     * value, iid].  (The latter form is used for prefs with "complex" values.)
     *
     * In |clear|, each inner array should have the form [pref_name].
     *
     * If you set the same pref more than once (or both set and clear a pref),
     * the behavior of this method is undefined.
     */
    pushPrefEnv(inPrefs: any): any;
    popPrefEnv(): Promise<any>;
    flushPrefEnv(): {
        requiresRefresh: boolean;
    };
    _setPref(name: any, type: any, value: any, iid: any): void;
    _getPref(name: any, type: any, defaultValue: any, iid: any): string | number | boolean | void;
    getBaselinePrefs(): void;
    _comparePrefs(base: any, target: any, ignorePrefs: any, partialMatches: any): any[];
    comparePrefsToBaseline(ignorePrefs: any): any[];
    _getAllPreferences(): Map<any, any>;
    _toggleMuteAudio(aMuted: any): void;
    _permOp(perm: any): void;
    pushPermissions(inPermissions: any): void;
    popPermissions(): void;
    flushPermissions(): void;
    _spawnChrome(task: any, args: any, caller: any, imports: any): any;
    /**
     * messageManager callback function
     * This will get requests from our API in the window and process them in chrome for it
     **/
    receiveMessage(aMessage: any): Promise<any>;
    _createdFiles: any[];
}
