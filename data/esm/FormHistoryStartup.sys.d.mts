export class FormHistoryStartup {
    classID: unknown;
    QueryInterface: MozQueryInterface;
    observe(_subject: any, topic: any, _data: any): void;
    init(): void;
    inited: boolean;
    receiveMessage(message: any): void;
    _queryInstance: {};
    #private;
}
