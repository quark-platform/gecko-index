export namespace Logger {
    let _foStream: any;
    let _converter: any;
    let _potentialError: any;
    function init(path: any): void;
    function write(data: any): void;
    function close(): void;
    function AssertTrue(bool: any, msg: any, showPotentialError: any): void;
    function AssertFalse(bool: any, msg: any, showPotentialError: any): void;
    function AssertEqual(got: any, expected: any, msg: any): void;
    function log(msg: any, withoutPrefix: any): void;
    function clearPotentialError(): void;
    function logPotentialError(msg: any): void;
    function logLastPotentialError(msg: any): void;
    function logError(msg: any): void;
    function logInfo(msg: any, withoutPrefix: any): void;
    function logPass(msg: any): void;
}
