/**
 * Create an object that provides general information about the client application.
 *
 * Components like Normandy RecipeRunner use this as part of the context for filter expressions,
 * so avoid adding non-getter functions as attributes, as filter expressions
 * cannot execute functions.
 *
 * Also note that, because filter expressions implicitly resolve promises, you
 * can add getter functions that return promises for async data.
 */
export class ClientEnvironmentBase {
    static get distribution(): string;
    static get telemetry(): Promise<{}>;
    static get liveTelemetry(): {
        main: any;
    };
    static get randomizationId(): string;
    static get version(): any;
    static get channel(): any;
    static get isDefaultBrowser(): any;
    static get searchEngine(): Promise<any>;
    static get syncSetup(): boolean;
    static get syncDesktopDevices(): number;
    static get syncMobileDevices(): number;
    static get syncTotalDevices(): number;
    static get addons(): Promise<any>;
    static get plugins(): Promise<any>;
    static get locale(): string;
    static get doNotTrack(): boolean;
    static get os(): {
        isWindows: boolean;
        isMac: boolean;
        isLinux: boolean;
        readonly windowsVersion: any;
        /**
         * Gets the windows build number by querying the OS directly. The initial
         * version was copied from toolkit/components/telemetry/app/TelemetryEnvironment.jsm
         * @returns {number | null} The build number, or null on non-Windows platform or if there is an error.
         */
        readonly windowsBuildNumber: number;
        readonly macVersion: number;
        readonly darwinVersion: any;
    };
    static get attribution(): any;
    static get appinfo(): nsIXULRuntimeType & nsIXULAppInfoType & nsICrashReporterType;
}
