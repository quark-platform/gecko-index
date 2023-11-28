export const CustomizableWidgets: ({
    id: string;
    type: string;
    viewId: string;
    shortcutId: string;
    tooltiptext: string;
    recentlyClosedTabsPanel: string;
    recentlyClosedWindowsPanel: string;
    handleEvent(event: any): void;
    onViewShowing(event: any): void;
    onViewHiding(event: any): void;
    onPanelMultiViewHidden(event: any): void;
    onWindowUnload(event: any): void;
    onSubViewShowing(event: any): void;
    l10nId?: undefined;
    onCommand?: undefined;
    keepBroadcastAttributesWhenCustomizing?: undefined;
    onCreated?: undefined;
    onBuild?: undefined;
} | {
    id: string;
    l10nId: string;
    shortcutId: string;
    onCommand(aEvent: any): void;
    type?: undefined;
    viewId?: undefined;
    tooltiptext?: undefined;
    recentlyClosedTabsPanel?: undefined;
    recentlyClosedWindowsPanel?: undefined;
    handleEvent?: undefined;
    onViewShowing?: undefined;
    onViewHiding?: undefined;
    onPanelMultiViewHidden?: undefined;
    onWindowUnload?: undefined;
    onSubViewShowing?: undefined;
    keepBroadcastAttributesWhenCustomizing?: undefined;
    onCreated?: undefined;
    onBuild?: undefined;
} | {
    id: string;
    l10nId: string;
    shortcutId: string;
    keepBroadcastAttributesWhenCustomizing: boolean;
    onCreated(aNode: any): void;
    type?: undefined;
    viewId?: undefined;
    tooltiptext?: undefined;
    recentlyClosedTabsPanel?: undefined;
    recentlyClosedWindowsPanel?: undefined;
    handleEvent?: undefined;
    onViewShowing?: undefined;
    onViewHiding?: undefined;
    onPanelMultiViewHidden?: undefined;
    onWindowUnload?: undefined;
    onSubViewShowing?: undefined;
    onCommand?: undefined;
    onBuild?: undefined;
} | {
    id: string;
    shortcutId: string;
    tooltiptext: string;
    onCommand(aEvent: any): void;
    type?: undefined;
    viewId?: undefined;
    recentlyClosedTabsPanel?: undefined;
    recentlyClosedWindowsPanel?: undefined;
    handleEvent?: undefined;
    onViewShowing?: undefined;
    onViewHiding?: undefined;
    onPanelMultiViewHidden?: undefined;
    onWindowUnload?: undefined;
    onSubViewShowing?: undefined;
    l10nId?: undefined;
    keepBroadcastAttributesWhenCustomizing?: undefined;
    onCreated?: undefined;
    onBuild?: undefined;
} | {
    id: string;
    tooltiptext: string;
    onCommand(aEvent: any): void;
    onCreated(aNode: any): void;
    type?: undefined;
    viewId?: undefined;
    shortcutId?: undefined;
    recentlyClosedTabsPanel?: undefined;
    recentlyClosedWindowsPanel?: undefined;
    handleEvent?: undefined;
    onViewShowing?: undefined;
    onViewHiding?: undefined;
    onPanelMultiViewHidden?: undefined;
    onWindowUnload?: undefined;
    onSubViewShowing?: undefined;
    l10nId?: undefined;
    keepBroadcastAttributesWhenCustomizing?: undefined;
    onBuild?: undefined;
} | {
    id: string;
    type: string;
    tooltiptext: string;
    onBuild(aDocument: any): any;
    viewId?: undefined;
    shortcutId?: undefined;
    recentlyClosedTabsPanel?: undefined;
    recentlyClosedWindowsPanel?: undefined;
    handleEvent?: undefined;
    onViewShowing?: undefined;
    onViewHiding?: undefined;
    onPanelMultiViewHidden?: undefined;
    onWindowUnload?: undefined;
    onSubViewShowing?: undefined;
    l10nId?: undefined;
    onCommand?: undefined;
    keepBroadcastAttributesWhenCustomizing?: undefined;
    onCreated?: undefined;
} | {
    id: string;
    l10nId: string;
    onCommand(aEvent: any): void;
    type?: undefined;
    viewId?: undefined;
    shortcutId?: undefined;
    tooltiptext?: undefined;
    recentlyClosedTabsPanel?: undefined;
    recentlyClosedWindowsPanel?: undefined;
    handleEvent?: undefined;
    onViewShowing?: undefined;
    onViewHiding?: undefined;
    onPanelMultiViewHidden?: undefined;
    onWindowUnload?: undefined;
    onSubViewShowing?: undefined;
    keepBroadcastAttributesWhenCustomizing?: undefined;
    onCreated?: undefined;
    onBuild?: undefined;
})[];
