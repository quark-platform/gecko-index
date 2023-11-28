export class UTEventReporting {
    sendUserEvent(data: any): void;
    sendSessionEndEvent(data: any): void;
    _createExtras(data: any): any;
    uninit(): void;
}
