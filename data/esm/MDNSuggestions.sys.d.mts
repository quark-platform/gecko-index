/**
 * A feature that supports MDN suggestions.
 */
export class MDNSuggestions {
    get shouldEnable(): any;
    get enablingPreferences(): string[];
    get merinoProvider(): string;
    enable(enabled: any): void;
    queryRemoteSettings(searchString: any): any;
    onRemoteSettingsSync(rs: any): Promise<void>;
    makeResult(queryContext: any, suggestion: any, searchString: any): Promise<any>;
    getResultCommands(result: any): ({
        l10n: {
            id: string;
        };
        children: {
            name: string;
            l10n: {
                id: string;
            };
        }[];
        name?: undefined;
    } | {
        name: string;
        l10n?: undefined;
        children?: undefined;
    } | {
        name: string;
        l10n: {
            id: string;
        };
        children?: undefined;
    })[];
    handleCommand(view: any, result: any, selType: any): void;
    #private;
}
