/**
 * LightweightThemeChild forwards theme data to in-content pages.
 */
export class LightweightThemeChild {
    _initted: boolean;
    didDestroy(): void;
    _getChromeOuterWindowID(): any;
    /**
     * Handles "change" events on the child sharedData map, and notifies
     * our content page if its theme data was among the changed keys.
     */
    handleEvent(event: any): void;
    /**
     * Forward the theme data to the page.
     */
    update(): void;
}
