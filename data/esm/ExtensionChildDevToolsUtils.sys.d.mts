export namespace ExtensionChildDevToolsUtils {
    /**
     * Creates an cached instance of the ThemeChangeObserver class and
     * initializes it with the current themeName. This cached instance is
     * destroyed when all of the contexts added to it are closed.
     *
     * @param {string} themeName The name of the current devtools theme.
     * @param {DevToolsContextChild} context The newly created devtools page context.
     */
    function initThemeChangeObserver(themeName: string, context: DevToolsContextChild): void;
    /**
     * Returns the cached instance of ThemeChangeObserver.
     *
     * @returns {ThemeChangeObserver} The cached instance of ThemeChangeObserver.
     */
    function getThemeChangeObserver(): ThemeChangeObserver;
}
/**
 * An observer that watches for changes to the devtools theme and provides
 * that information to the devtools.panels.themeName API property, as well as
 * emits events for the devtools.panels.onThemeChanged event. It also caches
 * the current value of devtools.themeName.
 */
declare class ThemeChangeObserver {
    constructor(themeName: any, onDestroyed: any);
    themeName: any;
    onDestroyed: any;
    contexts: Set<any>;
    addContext(context: any): void;
    onContextClosed(context: any): void;
    onThemeChanged(themeName: any): void;
    receiveMessage({ name, data }: {
        name: any;
        data: any;
    }): void;
    destroy(): void;
}
export {};
