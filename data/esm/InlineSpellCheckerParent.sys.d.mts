export class InlineSpellCheckerParent {
    selectDictionaries({ localeCodes }: {
        localeCodes: any;
    }): void;
    replaceMisspelling({ suggestion }: {
        suggestion: any;
    }): void;
    toggleEnabled(): void;
    recheckSpelling(): void;
    uninit(): void;
    _destructionObservers: Set<any>;
    registerDestructionObserver(obj: any): void;
    unregisterDestructionObserver(obj: any): void;
    didDestroy(): void;
}
