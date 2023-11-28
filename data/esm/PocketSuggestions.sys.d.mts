/**
 * A feature that manages Pocket suggestions in remote settings.
 */
export class PocketSuggestions {
    get shouldEnable(): any;
    get enablingPreferences(): string[];
    get merinoProvider(): string;
    get rustSuggestionTypes(): string[];
    get showLessFrequentlyCount(): number;
    get canShowLessFrequently(): boolean;
    enable(enabled: any): void;
    queryRemoteSettings(searchString: any): Promise<any>;
    onRemoteSettingsSync(rs: any): Promise<void>;
    makeResult(queryContext: any, suggestion: any, searchString: any): any;
    handleCommand(view: any, result: any, selType: any): void;
    getResultCommands(result: any): ({
        name: string;
        l10n: {
            id: string;
        };
        children?: undefined;
    } | {
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
    })[];
    incrementShowLessFrequentlyCount(): void;
    #private;
}
