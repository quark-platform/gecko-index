export class GeckoViewSettings {
    onInit(): void;
    _userAgentMode: any;
    _userAgentOverride: any;
    _sessionContextId: any;
    onEvent(aEvent: any, aData: any, aCallback: any): void;
    onSettingsUpdate(): void;
    set displayMode(aMode: any);
    unsafeSessionContextId: any;
    set userAgentMode(aMode: any);
    get userAgentMode(): any;
    set userAgentOverride(aUserAgent: any);
    get userAgentOverride(): any;
    set sessionContextId(aAttribute: any);
    get sessionContextId(): any;
    set suspendMediaWhenInactive(aSuspendMediaWhenInactive: any);
    get suspendMediaWhenInactive(): any;
    set allowJavascript(aAllowJavascript: any);
    get allowJavascript(): any;
    set viewportMode(aViewportMode: any);
    set useTrackingProtection(aUse: any);
    get customUserAgent(): any;
    get browsingContext(): any;
    displayModeSettingToValue(aSetting: any): "browser" | "minimal-ui" | "standalone" | "fullscreen";
}
