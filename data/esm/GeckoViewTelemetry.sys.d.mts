export namespace InitializationTracker {
    let initialized: boolean;
    function onInitialized(profilerTime: any): void;
}
export class HistogramStopwatch {
    constructor(aName: any, aAssociated: any);
    _name: any;
    _obj: any;
    isRunning(): boolean;
    start(): void;
    finish(): void;
    cancel(): void;
    timeElapsed(): number;
}
