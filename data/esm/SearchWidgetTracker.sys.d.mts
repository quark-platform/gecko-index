export namespace SearchWidgetTracker {
    function init(): void;
    function onWidgetAdded(widgetId: any, area: any): void;
    function onWidgetRemoved(aWidgetId: any, aArea: any): void;
    function onAreaNodeRegistered(aArea: any): void;
    function onCustomizeEnd(): void;
    function syncPreferenceWithWidget(): void;
    function syncWidgetWithPreference(): void;
    function removePersistedWidths(): void;
    const widgetIsInNavBar: boolean;
}
