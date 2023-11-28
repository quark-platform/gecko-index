export const UrlbarProviderClipboard: ProviderClipboard;
export const CLIPBOARD_IMPRESSION_LIMIT: 2;
/**
 * A provider that returns a suggested url to the user based
 * on a valid URL stored in the clipboard.
 */
declare class ProviderClipboard {
    get name(): string;
    get type(): any;
    setPreviousClipboardValue(newValue: any): void;
    isActive(queryContext: any, controller: any): boolean;
    getPriority(queryContext: any): number;
    startQuery(queryContext: any, addCallback: any): Promise<void>;
    onEngagement(state: any, queryContext: any, details: any, controller: any): void;
    #private;
}
export {};
