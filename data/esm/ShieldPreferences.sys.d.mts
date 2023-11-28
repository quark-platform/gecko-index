export namespace ShieldPreferences {
    function init(): void;
    function observe(subject: any, topic: any, data: any): void;
    function observePrefChange(prefName: any): Promise<void>;
}
