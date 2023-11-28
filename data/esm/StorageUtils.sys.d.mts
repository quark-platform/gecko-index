export function setStoragePrefs(optionalPrefsToSet: any): void;
export function clearStoragePrefs(optionalPrefsToClear: any): void;
export function getUsageForOrigin(principal: any, fromMemory: any): Promise<any>;
export function clearStoragesForOrigin(principal: any): Promise<any>;
export function resetStorage(): Promise<any>;
