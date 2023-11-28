export class GeckoViewContentBlocking {
    onEnable(): void;
    progressFilter: any;
    onDisable(): void;
    onEvent(aEvent: any, aData: any, aCallback: any): void;
    onContentBlockingEvent(aWebProgress: any, aRequest: any, aEvent: any): void;
}
