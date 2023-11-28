export namespace DoHTestUtils {
    let providers: {
        uri: string;
        UIName: string;
        autoDefault: boolean;
        canonicalName: string;
        id: string;
    }[];
    function loadRemoteSettingsProviders(providers: any, waitForConfigFlushes?: boolean): Promise<void>;
    function loadRemoteSettingsConfig(config: any, waitForConfigFlushes?: boolean): Promise<void>;
    function loadDefaultRemoteSettingsConfig(waitForConfigFlushes?: boolean): Promise<void>;
    function resetRemoteSettingsConfig(waitForConfigFlushes?: boolean): Promise<void>;
    function triggerSync(rs: any): any;
    function waitForConfigUpdate(): any;
    function waitForControllerReload(): any;
    function waitForConfigFlush(shouldWait?: boolean): Promise<any>;
}
