export function setStoragePrefs(optionalPrefsToSet: any): void;
export function clearStoragePrefs(optionalPrefsToClear: any): void;
export function getUsageForOrigin(principal: any, fromMemory: any): Promise<nsIVariant>;
export function clearStoragesForOrigin(principal: any): Promise<nsIVariant>;
export function resetStorage(): Promise<nsIVariant>;
