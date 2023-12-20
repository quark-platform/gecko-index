export class ReftestFissionChild extends JSWindowActorChild {
    forwardAfterPaintEventToParent(rects: any, originalTargetUri: any, dispatchToSelfAsWell: any): void;
    handleEvent(evt: any): void;
    transformRect(transform: any, rect: any): DOMRect;
    SetupDisplayportRoot(): Promise<{
        infoStrings: any[];
        errorStrings: any[];
    }>;
    attrOrDefault(element: any, attr: any, def: any): any;
    setupDisplayportForElement(element: any, winUtils: any, returnStrings: any): void;
    setupDisplayportForElementSubtree(element: any, winUtils: any, returnStrings: any): void;
    setupAsyncScrollOffsetsForElement(element: any, winUtils: any, allowFailure: any, returnStrings: any): boolean;
    setupAsyncScrollOffsetsForElementSubtree(element: any, winUtils: any, allowFailure: any, returnStrings: any): boolean;
    receiveMessage(msg: any): Promise<{
        infoStrings: any[];
        errorStrings: any[];
    } | {
        errorStrings: string[];
    }>;
}
