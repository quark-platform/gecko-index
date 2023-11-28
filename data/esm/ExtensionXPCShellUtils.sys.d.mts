export namespace ExtensionTestUtils {
    export { BASE_MANIFEST };
    export const testAssertions: any;
    export function getBackgroundServiceWorkerEnabled(): any;
    export function isInBackgroundServiceWorkerTests(): any;
    export function normalizeManifest(manifest: any, manifestType?: string, baseManifest?: Readonly<{
        browser_specific_settings: Readonly<{
            gecko: Readonly<{
                id: "test@web.ext";
            }>;
        }>;
        manifest_version: 2;
        name: "name";
        version: "0";
    }>): Promise<any>;
    export let currentScope: any;
    export let profileDir: any;
    export function init(scope: any): void;
    export let addonManagerStarted: boolean;
    export function mockAppInfo(): void;
    export function startAddonManager(): any;
    export function loadExtension(data: any): ExtensionWrapper;
    export function loadExtensionXPI(xpiFile: any, data: any): InstallableWrapper;
    export function expectExtension(id: any): ExternallyInstalledWrapper;
    export function failOnSchemaWarnings(warningsAsErrors?: boolean): void;
    export let remoteContentScripts: any;
    export function fetch(...args: any[]): Promise<any>;
    /**
     * Loads a content page into a hidden docShell.
     *
     * @param {string} url
     *        The URL to load.
     * @param {object} [options = {}]
     * @param {ExtensionWrapper} [options.extension]
     *        If passed, load the URL as an extension page for the given
     *        extension.
     * @param {boolean} [options.remote]
     *        If true, load the URL in a content process. If false, load
     *        it in the parent process.
     * @param {boolean} [options.remoteSubframes]
     *        If true, load cross-origin frames in separate content processes.
     *        This is ignored if |options.remote| is false.
     * @param {string} [options.redirectUrl]
     *        An optional URL that the initial page is expected to
     *        redirect to.
     * @param {...any} args
     *        Extra parameters to ensure compatibility
     *
     * @returns {ContentPage}
     */
    export function loadContentPage(url: string, options?: {
        extension?: ExtensionWrapper;
        remote?: boolean;
        remoteSubframes?: boolean;
        redirectUrl?: string;
    }, ...args: any[]): ContentPage;
}
declare let BASE_MANIFEST: Readonly<{
    browser_specific_settings: Readonly<{
        gecko: Readonly<{
            id: "test@web.ext";
        }>;
    }>;
    manifest_version: 2;
    name: "name";
    version: "0";
}>;
declare class ExtensionWrapper {
    constructor(testScope: any, extension?: any);
    testScope: any;
    extension: any;
    handleResult(kind: any, pass: any, msg: any, expected: any, actual: any): void;
    handleMessage(kind: any, msg: any, ...args: any[]): void;
    state: string;
    testResolve: (value: any) => void;
    testDone: Promise<any>;
    messageHandler: Map<any, any>;
    messageAwaiter: Map<any, any>;
    messageQueue: Set<any>;
    id: any;
    destroy(): void;
    attachExtension(extension: any): void;
    uuid: any;
    clearMessageQueues(): void;
    awaitStartup(): any;
    awaitBackgroundStarted(): Promise<[any, any]>;
    startup(): Promise<any>;
    startupPromise: any;
    unload(): Promise<void>;
    /**
     * This method sends the message to force-sleep the background scripts.
     *
     * @returns {Promise} resolves after the background is asleep and listeners primed.
     */
    terminateBackground(...args: any[]): Promise<any>;
    wakeupBackground(): any;
    sendMessage(...args: any[]): void;
    awaitFinish(msg: any): Promise<any>;
    checkMessages(): void;
    checkDuplicateListeners(msg: any): void;
    awaitMessage(msg: any): Promise<any>;
    onMessage(msg: any, callback: any): void;
}
declare class InstallableWrapper extends AOMExtensionWrapper {
    constructor(testScope: any, xpiFile: any, addonData?: {});
    file: any;
    addonData: {};
    installType: any;
    installTelemetryInfo: any;
    cleanupFiles: any[];
    maybeSetID(uri: any, id: any): void;
    _setIncognitoOverride(): any;
    _install(xpiFile: any): Promise<any>;
}
declare class ExternallyInstalledWrapper extends AOMExtensionWrapper {
    constructor(testScope: any, id: any);
    startupPromise: Promise<any>;
    maybeSetID(uri: any, id: any): void;
}
declare class AOMExtensionWrapper extends ExtensionWrapper {
    constructor(testScope: any);
    onEvent(kind: any, ...args: any[]): void;
    addon: any;
    setRestarting(): void;
    resolveStartup: (value: any) => void;
    onEnabling(addon: any): void;
    onInstalling(addon: any): void;
    onInstalled(addon: any): void;
    onUninstalled(addon: any): void;
    addonPromise: any;
    _flushCache(): Promise<void>;
    get version(): any;
    upgrade(data: any): Promise<any>;
}
export {};
