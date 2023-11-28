export namespace Uptake {
    let ACTION_NETWORK_ERROR: any;
    let ACTION_PRE_EXECUTION_ERROR: any;
    let ACTION_POST_EXECUTION_ERROR: any;
    let ACTION_SERVER_ERROR: any;
    let ACTION_SUCCESS: any;
    let RECIPE_ACTION_DISABLED: any;
    let RECIPE_DIDNT_MATCH_FILTER: any;
    let RECIPE_INCOMPATIBLE_CAPABILITIES: any;
    let RECIPE_EXECUTION_ERROR: any;
    let RECIPE_FILTER_BROKEN: any;
    let RECIPE_ARGUMENTS_INVALID: any;
    let RECIPE_INVALID_ACTION: any;
    let RECIPE_SUCCESS: any;
    let RECIPE_INVALID_SIGNATURE: any;
    let RUNNER_NETWORK_ERROR: any;
    let RUNNER_SERVER_ERROR: any;
    let RUNNER_SUCCESS: any;
    function _report(status: any, source: any): Promise<void>;
    function reportRunner(status: any): Promise<void>;
    function reportRecipe(recipe: any, status: any): Promise<void>;
    function reportAction(actionName: any, status: any): Promise<void>;
}
