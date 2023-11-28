export class AppTestDelegateParent {
    _tabs: Map<any, any>;
    get browser(): any;
    get window(): any;
    receiveMessage(message: any): Promise<any>;
}
