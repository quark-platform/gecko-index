/**
 * A feature that supports Addon suggestions.
 */
export class AddonSuggestions {
    get shouldEnable(): any;
    get enablingPreferences(): string[];
    get merinoProvider(): string;
    get rustSuggestionTypes(): string[];
    enable(enabled: any): void;
    queryRemoteSettings(searchString: any): any;
    onRemoteSettingsSync(rs: any): Promise<void>;
    makeResult(queryContext: any, suggestion: any, searchString: any): Promise<any>;
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
    handleCommand(view: any, result: any, selType: any): void;
    incrementShowLessFrequentlyCount(): void;
    get showLessFrequentlyCount(): number;
    get canShowLessFrequently(): boolean;
    #private;
}
