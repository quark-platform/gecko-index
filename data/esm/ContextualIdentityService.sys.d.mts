export const ContextualIdentityService: _ContextualIdentityService;
declare function _ContextualIdentityService(path: any): void;
declare class _ContextualIdentityService {
    constructor(path: any);
    LAST_CONTAINERS_JSON_VERSION: number;
    _userIdentities: {
        icon: string;
        color: string;
        l10nID: string;
        accessKey: string;
    }[];
    _systemIdentities: ({
        public: boolean;
        icon: string;
        color: string;
        name: string;
        accessKey: string;
    } | {
        userContextId: number;
        public: boolean;
        icon: string;
        color: string;
        name: string;
        accessKey: string;
    })[];
    _defaultIdentities: undefined[];
    _identities: null;
    _openedIdentities: Set<any>;
    _lastUserContextId: number;
    _path: null;
    _dataReady: boolean;
    _saver: null;
    init(path: any): void;
    observe(aSubject: any, aTopic: any): Promise<void>;
    load(): any;
    resetDefault(): void;
    loadError(error: any): void;
    saveSoon(): void;
    _saverCallback: () => any;
    save(): any;
    create(name: any, icon: any, color: any): any;
    update(userContextId: any, name: any, icon: any, color: any): boolean;
    remove(userContextId: any): boolean;
    getIdentityObserverOutput(identity: any): {
        wrappedJSObject: {
            name: any;
            icon: any;
            color: any;
            userContextId: any;
        };
    };
    parseData(bytes: any): void;
    ensureDataReady(): void;
    getPublicUserContextIds(): any;
    getPrivateUserContextIds(): any;
    getPublicIdentities(): any;
    getPrivateIdentity(name: any): any;
    getDefaultPrivateIdentity(name: any): any;
    getPublicIdentityFromId(userContextId: any): any;
    getUserContextLabel(userContextId: any): any;
    setTabStyle(tab: any): void;
    countContainerTabs(userContextId?: number): number;
    closeContainerTabs(userContextId?: number): Promise<any>;
    notifyAllContainersCleared(): void;
    _forEachContainerTab(callback: any, userContextId?: number): void;
    createNewInstanceForTesting(path: any): _ContextualIdentityService;
    deleteContainerData(): void;
    migrate2to3(data: any): any;
    migrate3to4(data: any): any;
}
export {};
