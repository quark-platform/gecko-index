export namespace TelemetryEnvironmentTesting {
    export { EXPECTED_HDD_FIELDS };
    export function init(appInfo: any): void;
    export function setSysInfoOverrides(overrides: any): void;
    export function spoofGfxAdapter(): void;
    export function spoofProfileReset(): Promise<number>;
    export function spoofPartnerInfo(): void;
    export function spoofAttributionData(): Promise<void>;
    export function cleanupAttributionData(): void;
    export function registerFakeSysInfo(): void;
    /**
     * Check that a value is a string and not empty.
     *
     * @param aValue The variable to check.
     * @return True if |aValue| has type "string" and is not empty, False otherwise.
     */
    export function checkString(aValue: any): boolean;
    /**
     * If value is non-null, check if it's a valid string.
     *
     * @param aValue The variable to check.
     * @return True if it's null or a valid string, false if it's non-null and an invalid
     *         string.
     */
    export function checkNullOrString(aValue: any): boolean;
    /**
     * If value is non-null, check if it's a boolean.
     *
     * @param aValue The variable to check.
     * @return True if it's null or a valid boolean, false if it's non-null and an invalid
     *         boolean.
     */
    export function checkNullOrBool(aValue: any): boolean;
    export function checkBuildSection(data: any): void;
    export function checkSettingsSection(data: any): void;
    export function checkIntlSettings({ intl }: {
        intl: any;
    }): void;
    export function checkProfileSection(data: any): void;
    export function checkPartnerSection(data: any, isInitial: any): void;
    export function checkGfxAdapter(data: any): void;
    export function checkSystemSection(data: any, assertProcessData: any): void;
    export function checkActiveAddon(data: any, partialRecord: any): void;
    export function checkTheme(data: any): void;
    export function checkActiveGMPlugin(data: any): void;
    export function checkAddonsSection(data: any, expectBrokenAddons: any, partialAddonsRecords: any): void;
    export function checkEnvironmentData(data: any, options?: {}): void;
}
declare const EXPECTED_HDD_FIELDS: string[];
export {};
