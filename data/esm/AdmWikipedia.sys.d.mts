/**
 * A feature that manages sponsored adM and non-sponsored Wikpedia (sometimes
 * called "expanded Wikipedia") suggestions in remote settings.
 */
export class AdmWikipedia {
    get shouldEnable(): any;
    get enablingPreferences(): string[];
    get merinoProvider(): string;
    get rustSuggestionTypes(): string[];
    getSuggestionTelemetryType(suggestion: any): "adm_sponsored" | "adm_nonsponsored";
    enable(enabled: any): void;
    queryRemoteSettings(searchString: any): Promise<any>;
    onRemoteSettingsSync(rs: any): Promise<void>;
    makeResult(queryContext: any, suggestion: any, searchString: any): any;
    #private;
}
