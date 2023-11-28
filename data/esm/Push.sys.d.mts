/**
 * The Push component runs in the child process and exposes the Push API
 * to the web application. The PushService running in the parent process is the
 * one actually performing all operations.
 */
export function Push(): void;
export class Push {
    __proto__: any;
    contractID: string;
    classID: any;
    QueryInterface: any;
    init(win: any): void;
    _window: any;
    _principal: any;
    _topLevelPrincipal: any;
    __init(scope: any): void;
    _scope: any;
    askPermission(): any;
    subscribe(options: any): any;
    _normalizeAppServerKey(appServerKey: any): any;
    getSubscription(): any;
    permissionState(): any;
    _testPermission(): any;
    _requestPermission(hasValidTransientUserGestureActivation: any, allowCallback: any, cancelCallback: any): void;
}
