export class AllowJavascriptParent extends JSWindowActorParent {
    static promiseLoad(bc: any): any;
    receiveMessage(msg: any): Promise<void>;
}
