export namespace GeckoViewSessionStore {
    let _browserSHistoryListener: WeakMap<object, any>;
    function observe(aSubject: any, aTopic: any, aData: any): void;
    function onTabStateUpdate(permanentKey: any, win: any, data: any): void;
    function getOrCreateSHistoryListener(permanentKey: any, browsingContext: any, collectImmediately?: boolean): any;
}
