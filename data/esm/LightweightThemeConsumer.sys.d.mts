export function LightweightThemeConsumer(aDocument: any): void;
export class LightweightThemeConsumer {
    constructor(aDocument: any);
    _doc: any;
    _win: any;
    _winId: any;
    darkThemeMediaQuery: any;
    _lastData: null;
    observe(aSubject: any, aTopic: any, aData: any): void;
    handleEvent(aEvent: any): void;
    _update(themeData: any): void;
    _active: number;
    _setExperiment(active: any, experiment: any, properties: any): void;
    _lastExperimentData: {};
}
