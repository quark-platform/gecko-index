export const FirefoxRelay: RelayFeature;
declare class RelayFeature {
    get learnMoreUrl(): any;
    updateConfig(): void;
    autocompleteItemsAsync({ origin, scenarioName, hasInput }: {
        origin: any;
        scenarioName: any;
        hasInput: any;
    }): Promise<any[]>;
    generateUsername(browser: any, origin: any): Promise<any>;
    offerRelayIntegration(browser: any, origin: any): Promise<any>;
}
export {};
