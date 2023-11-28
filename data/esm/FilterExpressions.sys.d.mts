export namespace FilterExpressions {
    function getAvailableTransforms(): string[];
    function eval(expr: any, context?: {}): any;
}
