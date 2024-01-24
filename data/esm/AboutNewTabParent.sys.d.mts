export class AboutNewTabParent extends JSWindowActorParent {
    static get loadedTabs(): Map<any, any>;
    static "__#1@#queuedMessages": any[];
    /**
     * If there were any messages sent from content before the
     * ActivityStreamMessageChannel was set up, dispatch them now.
     */
    static flushQueuedMessagesFromContent(): void;
    getTabDetails(): any;
    handleEvent(event: any): void;
    receiveMessage(message: any): Promise<void>;
    notifyActivityStreamChannel(name: any, message: any, tabDetails: any): void;
    getByBrowsingContext(expectedBrowsingContext: any): any;
    getChannel(): any;
}
