export namespace InlineSpellCheckerContent {
    let _spellChecker: any;
    let _actor: any;
    function initContextMenu(event: any, editFlags: any, actor: any): Promise<{
        canSpellCheck: boolean;
        initialSpellCheckPending: any;
        enableRealTimeSpell: boolean;
        overMisspelling?: undefined;
        misspelling?: undefined;
        spellSuggestions?: undefined;
        currentDictionaries?: undefined;
        dictionaryList?: undefined;
    } | {
        canSpellCheck: any;
        initialSpellCheckPending: any;
        enableRealTimeSpell: any;
        overMisspelling: any;
        misspelling: any;
        spellSuggestions: any;
        currentDictionaries: any;
        dictionaryList: any;
    }>;
    function uninitContextMenu(): void;
    function actorDestroyed(): void;
    function _generateSpellSuggestions(): Promise<any>;
    function selectDictionaries(localeCodes: any): void;
    function replaceMisspelling(suggestion: any): void;
    function toggleEnabled(): void;
    function recheck(): void;
}
