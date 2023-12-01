export class MiddleMousePasteHandlerChild extends JSWindowActorChild {
    handleEvent(clickEvent: any): void;
    onProcessedClick(data: any): void;
}
export class ClickHandlerChild extends JSWindowActorChild {
    handleEvent(wrapperEvent: any): void;
    handleClickEvent(event: any, isFromMiddleMousePasteHandler?: boolean): void;
}
