export class AboutNewTabParent {
    static get loadedTabs(): Map<any, any>;
    getTabDetails(): any;
    handleEvent(event: any): void;
    receiveMessage(message: any): Promise<void>;
    notifyActivityStreamChannel(name: any, message: any, tabDetails: any): void;
    getByBrowsingContext(expectedBrowsingContext: any): any;
    getChannel(): any;
}
