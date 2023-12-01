export class UAWidgetsChild extends JSWindowActorChild {
    widgets: WeakMap<object, any>;
    prefsCache: Map<any, any>;
    observedPrefs: any[];
    observerFunction: (subject: any, topic: any, data: any) => void;
    didDestroy(): void;
    unwrap(obj: any): any;
    handleEvent(aEvent: any): void;
    setupOrNotifyWidget(aElement: any): void;
    setupWidget(aElement: any): void;
    teardownWidget(aElement: any): void;
    getPrefsForUAWidget(aWidgetName: any, aPrefKeys: any): any;
    observePref(prefKey: any): void;
    getPref(prefKey: any): string | number | boolean;
    observe(subject: any, topic: any, data: any): void;
    notifyWidgetsOnPrefChange(nameOfWidgetToNotify: any, prefKey: any, newValue: any): void;
}
