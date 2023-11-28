export class ContentPrefsChild {
    _observers: Map<any, any>;
    _requests: Map<any, any>;
    _getRandomId(): any;
    receiveMessage(msg: any): void;
    callFunction(call: any, args: any, callback: any): void;
    addObserverForName(name: any, observer: any): void;
    removeObserverForName(name: any, observer: any): void;
}
export namespace ContentPrefServiceChild {
    export let QueryInterface: any;
    export function addObserverForName(name: any, observer: any): void;
    export function removeObserverForName(name: any, observer: any): void;
    export { NYI as getCachedByDomainAndName };
    export { NYI as getCachedBySubdomainAndName };
    export { NYI as getCachedGlobal };
    export { NYI as extractDomain };
}
declare function NYI(): void;
export {};
