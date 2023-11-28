export namespace ContentTask {
    let _testScope: any;
    let _scopeValidId: number;
    function spawn(browser: any, arg: any, task: any): Promise<any>;
    function setTestScope(scope: any): void;
}
