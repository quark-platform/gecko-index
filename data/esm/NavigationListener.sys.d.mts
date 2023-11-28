/**
 * The NavigationListener simply wraps a NavigationManager instance and exposes
 * it with a convenient listener API, more consistent with the rest of the
 * remote codebase. NavigationManager is a singleton per session so it can't
 * be instanciated for each and every consumer.
 *
 * Example:
 * ```
 * const onNavigationStarted = (eventName, data = {}) => {
 *   const { level, message, stacktrace, timestamp } = data;
 *   ...
 * };
 *
 * const listener = new NavigationListener(this.messageHandler.navigationManager);
 * listener.on("navigation-started", onNavigationStarted);
 * listener.startListening();
 * ...
 * listener.stopListening();
 * ```
 *
 * @fires message
 *    The NavigationListener emits "navigation-started", "location-changed" and
 *    "navigation-stopped" events, with the following object as payload:
 *      - {string} navigationId - The UUID for the navigation.
 *      - {string} navigableId - The UUID for the navigable.
 *      - {string} url - The target url for the navigation.
 */
export class NavigationListener {
    /**
     * Create a new NavigationListener instance.
     *
     * @param {NavigationManager} navigationManager
     *     The underlying NavigationManager for this listener.
     */
    constructor(navigationManager: NavigationManager);
    get listening(): boolean;
    destroy(): void;
    startListening(): void;
    stopListening(): void;
    #private;
}
