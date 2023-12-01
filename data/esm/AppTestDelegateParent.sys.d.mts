export class AppTestDelegateParent extends JSWindowActorParent {
    _tabs: Map<any, any>;
    get browser(): any;
    get window(): any;
    receiveMessage(message: any): Promise<any>;
}
