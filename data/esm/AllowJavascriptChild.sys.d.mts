export class AllowJavascriptChild extends JSWindowActorChild {
    receiveMessage(msg: any): Promise<any>;
    handleEvent(event: any): void;
    checkScriptsAllowed(): any;
    createIframe(url: any): Promise<any>;
}
