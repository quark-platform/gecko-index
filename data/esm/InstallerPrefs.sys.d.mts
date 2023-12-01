export function InstallerPrefs(prefsList: any): void;
export class InstallerPrefs {
    constructor(prefsList: any);
    prefsList: any;
    classID: unknown;
    contractID: string;
    QueryInterface: MozQueryInterface;
    observe(subject: any, topic: any, data: any): void;
    _registerPrefListeners(): void;
    _cleanRegistryKey(regKey: any): void;
    _reflectPrefsToRegistry(regKey: any): void;
    _reflectOnePrefToRegistry(regKey: any, pref: any): void;
    _openRegKey(): any;
}
