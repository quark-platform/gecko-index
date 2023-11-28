export class ContentPrefsParent {
    _prefsToObserve: Set<any>;
    _observer: {
        onContentPrefSet(group: any, name: any, value: any, isPrivate: any): void;
        onContentPrefRemoved(group: any, name: any, isPrivate: any): void;
    };
    didDestroy(): void;
    receiveMessage(msg: any): Promise<any>;
    onContentPrefSet(group: any, name: any, value: any, isPrivate: any): void;
    onContentPrefRemoved(group: any, name: any, isPrivate: any): void;
}
