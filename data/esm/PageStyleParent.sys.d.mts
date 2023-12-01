export class PageStyleParent extends JSWindowActorParent {
    receiveMessage(msg: any): void;
    /**
     * Add/append styleSheets to the _pageStyleSheets weakmap.
     * @param newSheetData
     *        The stylesheet data, including new stylesheets to add,
     *        and the preferred stylesheet set for this document.
     */
    addSheetInfo(newSheetData: any): void;
    getSheetInfo(): any;
    #private;
}
