export function UrlClassifierRemoteSettingsService(): void;
export class UrlClassifierRemoteSettingsService {
    classID: any;
    QueryInterface: any;
    _initialized: boolean;
    _entries: {};
    lazyInit(): Promise<void>;
    _onUpdateEntries(aEntries: any): void;
    _parseRequest(aRequest: any): any[][];
    _getLists(aRequest: any, aListener: any): Promise<void>;
    fetchList(aPayload: any, aListener: any): void;
    clear(): void;
}
export const SBRS_UPDATE_MINIMUM_DELAY: 21600;
