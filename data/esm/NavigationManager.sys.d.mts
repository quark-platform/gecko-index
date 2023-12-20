/**
 * See NavigationRegistry.notifyLocationChanged.
 *
 * This entry point is only intended to be called from NavigationListenerParent,
 * to avoid setting up observers or listeners, which are unnecessary since
 * NavigationRegistry has to be a singleton.
 */
export function notifyLocationChanged(data: any): NavigationInfo;
/**
 * See NavigationRegistry.notifyNavigationStarted.
 *
 * This entry point is only intended to be called from NavigationListenerParent,
 * to avoid setting up observers or listeners, which are unnecessary since
 * NavigationRegistry has to be a singleton.
 */
export function notifyNavigationStarted(data: any): NavigationInfo;
/**
 * See NavigationRegistry.notifyNavigationStopped.
 *
 * This entry point is only intended to be called from NavigationListenerParent,
 * to avoid setting up observers or listeners, which are unnecessary since
 * NavigationRegistry has to be a singleton.
 */
export function notifyNavigationStopped(data: any): NavigationInfo;
export function registerNavigationId(data: any): string;
/**
 * The NavigationManager exposes the NavigationRegistry data via a class which
 * needs to be individually instantiated by each consumer. This allow to track
 * how many consumers need navigation data at any point so that the
 * NavigationRegistry can register or unregister the underlying JSWindowActors
 * correctly.
 *
 * @fires navigation-started
 *    The NavigationManager emits "navigation-started" when a new navigation is
 *    detected, with the following object as payload:
 *      - {string} navigationId - The UUID for the navigation.
 *      - {string} navigableId - The UUID for the navigable.
 *      - {string} url - The target url for the navigation.
 * @fires navigation-stopped
 *    The NavigationManager emits "navigation-stopped" when a known navigation
 *    is stopped, with the following object as payload:
 *      - {string} navigationId - The UUID for the navigation.
 *      - {string} navigableId - The UUID for the navigable.
 *      - {string} url - The target url for the navigation.
 */
export class NavigationManager {
    destroy(): void;
    getNavigationForBrowsingContext(context: any): NavigationInfo;
    startMonitoring(): void;
    stopMonitoring(): void;
    #private;
}
export type BrowsingContextDetails = {
    /**
     * - The browsing context id.
     */
    browsingContextId: string;
    /**
     * - The id of the Browser owning the browsing
     * context.
     */
    browserId: string;
    /**
     * - The BrowsingContext itself, if
     * available.
     */
    context?: BrowsingContext;
    /**
     * - Whether the browsing context is
     * top level.
     */
    isTopBrowsingContext: boolean;
};
export type NavigationInfo = {
    /**
     * - Whether the navigation is finished or not.
     */
    finished: boolean;
    /**
     * - The UUID for the navigation.
     */
    navigationId: string;
    /**
     * - The UUID for the navigable.
     */
    navigable: string;
    /**
     * - The target url for the navigation.
     */
    url: string;
};
