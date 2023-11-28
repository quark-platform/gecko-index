export class PrintingChild {
    actorCreated(): void;
    didDestroy(): void;
    handleEvent(event: any): void;
    _scrollTask: any;
    receiveMessage(message: any): Promise<void>;
    parseDocument(URL: any, contentWindow: any): Promise<void>;
    updateCurrentPage(): void;
    navigate(navType: any, pageNum: any): void;
}
