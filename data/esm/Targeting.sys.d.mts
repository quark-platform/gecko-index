export class TargetingContext {
    /**
     * Merge multiple TargetingGetters objects without accidentally evaluating
     *
     * @param {TargetingGetters[]} ...contexts
     * @returns {Proxy<TargetingGetters>}
     */
    static combineContexts(...contexts: any[]): ProxyConstructor;
    constructor(customContext: any, options?: {
        source: any;
    });
    ctx: any;
    setTelemetrySource(source: any): void;
    _sendUndesiredEvent(eventData: any): void;
    /**
     * Wrap each property of context[key] with a Proxy that captures errors and
     * timeouts
     *
     * @param {Object.<string, TargetingGetters> | TargetingGetters} context
     * @param {string} key Namespace value found in `context` param
     * @returns {TargetingGetters} Wrapped context where getter report errors and timeouts
     */
    createContextWithTimeout(context: {
        [x: string]: TargetingGetters;
    } | TargetingGetters, key?: string): TargetingGetters;
    /**
     * Merge all evaluation contexts and wrap the getters with timeouts
     *
     * @param {Object.<string, TargetingGetters>[]} contexts
     * @returns {Object.<string, TargetingGetters>} Object that follows the pattern of `namespace: getters`
     */
    mergeEvaluationContexts(contexts: {
        [x: string]: TargetingGetters;
    }[]): {
        [x: string]: TargetingGetters;
    };
    /**
     * Evaluate JEXL expressions with default `TargetingEnvironment` and custom
     * provided targeting contexts
     *
     * @example
     * eval(
     *   "ctx.locale == 'en-US' && customCtx.foo == 42",
     *   { customCtx: { foo: 42 } }
     * ); // true
     *
     * @param {string} expression JEXL expression
     * @param {Object.<string, TargetingGetters>[]} ...contexts Additional custom context
     *        objects where the keys act as namespaces for the different getters
     *
     * @returns {promise} Evaluation result
     */
    eval(expression: string, ...contexts: any[]): Promise<any>;
    /**
     * Evaluate JEXL expressions with default provided targeting context
     *
     * @example
     * new TargetingContext({ bar: 42 });
     * evalWithDefault(
     *   "bar == 42",
     * ); // true
     *
     * @param {string} expression JEXL expression
     * @returns {promise} Evaluation result
     */
    evalWithDefault(expression: string): Promise<any>;
    #private;
}
