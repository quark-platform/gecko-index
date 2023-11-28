export class MiddleMousePasteHandlerChild {
    handleEvent(clickEvent: any): void;
    onProcessedClick(data: any): void;
}
export class ClickHandlerChild {
    handleEvent(wrapperEvent: any): void;
    handleClickEvent(event: any, isFromMiddleMousePasteHandler?: boolean): void;
}
