/// <reference types="gecko-types" />
export const FirefoxRelay: RelayFeature;
declare class RelayFeature extends OptInFeature {
    constructor();
    get learnMoreUrl(): string;
    updateConfig(): void;
    autocompleteItemsAsync({ origin, scenarioName, hasInput }: {
        origin: any;
        scenarioName: any;
        hasInput: any;
    }): Promise<any[]>;
    generateUsername(browser: any, origin: any): Promise<any>;
    offerRelayIntegration(browser: any, origin: any): Promise<any>;
}
import { OptInFeature } from "resource://gre/modules/LoginHelper.sys.mjs";
export {};
