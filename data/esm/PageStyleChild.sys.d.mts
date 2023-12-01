export class PageStyleChild extends JSWindowActorChild {
    actorCreated(): void;
    handleEvent(event: any): void;
    receiveMessage(msg: any): void;
    /**
     * Returns links that would represent stylesheets once loaded.
     */
    _collectLinks(document: any): any[];
    /**
     * Switch the stylesheet so that only the sheet with the given title is enabled.
     */
    _switchStylesheet(title: any): void;
    #private;
}
