export let Calculator: BaseCalculator;
export const UrlbarProviderCalculator: ProviderCalculator;
/**
 * Base implementation of a basic calculator.
 */
declare class BaseCalculator {
    stack: any[];
    numberSystems: any[];
    addNumberSystem(system: any): void;
    isNumeric(value: any): any;
    isOperator(value: any): boolean;
    isNumericToken(char: any): boolean;
    parsel10nFloat(num: any): number;
    precedence(val: any): 2 | 3;
    infix2postfix(infix: any): any[];
    evaluate: {
        "*": (a: any, b: any) => number;
        "+": (a: any, b: any) => any;
        "-": (a: any, b: any) => number;
        "/": (a: any, b: any) => number;
    };
    evaluatePostfix(postfix: any): any;
}
/**
 * A provider that returns a suggested url to the user based on what
 * they have currently typed so they can navigate directly.
 */
declare class ProviderCalculator {
    /**
     * Returns the name of this provider.
     *
     * @returns {string} the name of this provider.
     */
    get name(): string;
    /**
     * The type of the provider.
     *
     * @returns {UrlbarUtils.PROVIDER_TYPE}
     */
    get type(): UrlbarUtils.PROVIDER_TYPE;
    /**
     * Whether this provider should be invoked for the given context.
     * If this method returns false, the providers manager won't start a query
     * with this provider, to save on resources.
     *
     * @param {UrlbarQueryContext} queryContext The query context object
     * @returns {boolean} Whether this provider should be invoked for the search.
     */
    isActive(queryContext: UrlbarQueryContext): boolean;
    /**
     * Starts querying. Extended classes should return a Promise resolved when the
     * provider is done searching AND returning results.
     *
     * @param {UrlbarQueryContext} queryContext The query context object
     * @param {Function} addCallback Callback invoked by the provider to add a new
     *        result. A UrlbarResult should be passed to it.
     */
    startQuery(queryContext: UrlbarQueryContext, addCallback: Function): Promise<void>;
    getViewUpdate(result: any): {
        icon: {
            attributes: {
                src: string;
            };
        };
        input: {
            l10n: {
                id: string;
                args: {
                    result: any;
                };
            };
        };
        action: {
            l10n: {
                id: string;
            };
        };
    };
    onEngagement(state: any, queryContext: any, details: any, controller: any): void;
}
export {};
