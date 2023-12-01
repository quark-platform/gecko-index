export class AboutHttpsOnlyErrorParent extends JSWindowActorParent {
    get browser(): any;
    receiveMessage(aMessage: any): void;
    goBackFromErrorPage(aBrowser: any): void;
    getDefaultHomePage(win: any): any;
}
