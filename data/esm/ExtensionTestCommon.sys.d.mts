export const ExtensionTestCommon: any;
/**
 * A skeleton Extension-like object, used for testing, which installs an
 * add-on via the add-on manager when startup() is called, and
 * uninstalles it on shutdown().
 *
 * @param {string} id
 * @param {nsIFile} file
 * @param {nsIURI} rootURI
 * @param {string} installType
 */
export class MockExtension {
    constructor(file: any, rootURI: any, addonData: any);
    id: any;
    file: any;
    rootURI: any;
    installType: any;
    addonData: any;
    addon: any;
    _extension: any;
    _extensionPromise: Promise<any>;
    _readyPromise: Promise<any>;
    _uninstallPromise: Promise<any>;
    maybeSetID(uri: any, id: any): void;
    testMessage(...args: any[]): any;
    get tabManager(): any;
    on(...args: any[]): void;
    off(...args: any[]): void;
    _setIncognitoOverride(): any;
    startup(): Promise<any>;
    addonPromise: Promise<any>;
    resolveAddon: (value: any) => void;
    shutdown(): Promise<undefined>;
    cleanupGeneratedFile(): Promise<undefined>;
    terminateBackground(...args: any[]): Promise<any>;
    wakeupBackground(): Promise<any>;
}
