/**
 * A class to manage the actions that recipes can use in Normandy.
 */
export class ActionsManager {
    static actionConstructors: {
        "addon-rollback": any;
        "addon-rollout": any;
        "branched-addon-study": any;
        "console-log": any;
        "messaging-experiment": any;
        "multi-preference-experiment": any;
        "preference-rollback": any;
        "preference-rollout": any;
        "show-heartbeat": any;
    };
    static getCapabilities(): Set<any>;
    finalized: boolean;
    localActions: {};
    processRecipe(recipe: any, suitability: any): Promise<void>;
    finalize(options: any): Promise<void>;
}
