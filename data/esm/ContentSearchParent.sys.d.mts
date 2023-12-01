export namespace ContentSearch {
    let initialized: boolean;
    let _eventQueue: any[];
    let _currentEventPromise: any;
    let _suggestionMap: WeakMap<WeakKey, any>;
    let _destroyedPromise: any;
    let _currentSuggestion: any;
    function init(): void;
    const searchSuggestionUIStrings: any;
    function destroy(): any;
    function observe(subj: any, topic: any, data: any): void;
    /**
     * Observes changes in prefs tracked by UrlbarPrefs.
     * @param {string} pref
     *   The name of the pref, relative to `browser.urlbar.` if the pref is
     *   in that branch.
     */
    function onPrefChanged(pref: string): void;
    function removeFormHistoryEntry(browser: any, entry: any): void;
    function performSearch(actor: any, browser: any, data: any): void;
    function getSuggestions(engineName: any, searchString: any, browser: any): Promise<{}>;
    function addFormHistoryEntry(browser: any, entry?: any): Promise<boolean>;
    function currentStateObj(window: any): Promise<{
        engines: any[];
        currentEngine: {
            name: any;
            iconData: any;
            isAppProvided: any;
        };
        currentPrivateEngine: {
            name: any;
            iconData: any;
            isAppProvided: any;
        };
    }>;
    function _processEventQueue(): void;
    function _cancelSuggestions({ actor, browser }: {
        actor: any;
        browser: any;
    }): void;
    function _onMessage(eventItem: any): Promise<void>;
    function _onMessageGetState({ actor, browser }: {
        actor: any;
        browser: any;
    }): Promise<void>;
    function _onMessageGetEngine({ actor, browser }: {
        actor: any;
        browser: any;
    }): Promise<void>;
    function _onMessageGetHandoffSearchModePrefs({ actor }: {
        actor: any;
    }): void;
    function _onMessageGetStrings({ actor }: {
        actor: any;
    }): void;
    function _onMessageSearch({ actor, browser, data }: {
        actor: any;
        browser: any;
        data: any;
    }): void;
    function _onMessageSetCurrentEngine({ data }: {
        data: any;
    }): void;
    function _onMessageManageEngines({ browser }: {
        browser: any;
    }): void;
    function _onMessageGetSuggestions({ actor, browser, data }: {
        actor: any;
        browser: any;
        data: any;
    }): Promise<void>;
    function _onMessageAddFormHistoryEntry({ browser, data: entry }: {
        browser: any;
        data: any;
    }): Promise<void>;
    function _onMessageRemoveFormHistoryEntry({ browser, data: entry }: {
        browser: any;
        data: any;
    }): void;
    function _onMessageSpeculativeConnect({ browser, data: engineName }: {
        browser: any;
        data: any;
    }): void;
    function _onObserve(eventItem: any): Promise<void>;
    function _suggestionDataForBrowser(browser: any, create?: boolean): any;
    function _reply(actor: any, type: any, data: any): void;
    function _broadcast(type: any, data: any): void;
    function _currentEngineObj(usePrivate: any): Promise<{
        name: any;
        iconData: any;
        isAppProvided: any;
    }>;
    /**
     * Converts the engine's icon into an appropriate URL for display at
     */
    function _getEngineIconURL(engine: any): Promise<any>;
    function _ensureDataHasProperties(data: any, requiredProperties: any): void;
    function _initService(): any;
}
export class ContentSearchParent extends JSWindowActorParent {
    didDestroy(): void;
    receiveMessage(msg: any): void;
}
