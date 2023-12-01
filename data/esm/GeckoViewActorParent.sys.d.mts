export class GeckoViewActorParent extends JSWindowActorParent {
    static initLogging(aModuleName: any): any;
    get browser(): any;
    get window(): any;
    get eventDispatcher(): any;
    receiveMessage(aMessage: any): any;
}
