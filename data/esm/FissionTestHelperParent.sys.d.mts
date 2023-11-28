export class FissionTestHelperParent {
    _testCompletePromise: Promise<any>;
    _testCompletePromiseResolver: (value: any) => void;
    embedderWindow(): any;
    docURI(): any;
    getTestCompletePromise(): Promise<any>;
    startTest(): void;
    receiveMessage(msg: any): void;
}
