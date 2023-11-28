export class FindBarContent {
    constructor(actor: any);
    actor: any;
    findMode: number;
    inQuickFind: boolean;
    addedEventListener: boolean;
    start(event: any): void;
    inPassThrough: boolean;
    startQuickFind(event: any, autostart?: boolean): void;
    updateState(data: any): void;
    handleEvent(event: any): void;
    onKeypress(event: any): void;
    passKeyToParent(event: any): void;
    onMouseup(event: any): void;
}
