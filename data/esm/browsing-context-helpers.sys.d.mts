/**
 * Retrieve the addon id corresponding to a given window global.
 * This is usually extracted from the principal, but in case we are dealing
 * with a DevTools webextension fallback window, the addon id will be available
 * in the URL.
 *
 * @param {WindowGlobalChild|WindowGlobalParent} windowGlobal
 *        The WindowGlobal from which we want to extract the addonId. Either a
 *        WindowGlobalParent or a WindowGlobalChild depending on where this
 *        helper is used from.
 * @return {String} Returns the addon id if any could found, null otherwise.
 */
export function getAddonIdForWindowGlobal(windowGlobal: WindowGlobalChild | WindowGlobalParent): string;
/**
 * Helper function to know if a given BrowsingContext should be debugged by scope
 * described by the given session context.
 *
 * @param {BrowsingContext} browsingContext
 *        The browsing context we want to check if it is part of debugged context
 * @param {Object} sessionContext
 *        The Session Context to help know what is debugged.
 *        See devtools/server/actors/watcher/session-context.js
 * @param {Object} options
 *        Optional arguments passed via a dictionary.
 * @param {Boolean} options.forceAcceptTopLevelTarget
 *        If true, we will accept top level browsing context even when server target switching
 *        is disabled. In case of client side target switching, the top browsing context
 *        is debugged via a target actor that is being instantiated manually by the frontend.
 *        And this target actor isn't created, nor managed by the watcher actor.
 * @param {Boolean} options.acceptInitialDocument
 *        By default, we ignore initial about:blank documents/WindowGlobals.
 *        But some code cares about all the WindowGlobals, this flag allows to also accept them.
 *        (Used by _validateWindowGlobal)
 * @param {Boolean} options.acceptSameProcessIframes
 *        If true, we will accept WindowGlobal that runs in the same process as their parent document.
 *        That, even when EFT is disabled.
 *        (Used by _validateWindowGlobal)
 * @param {Boolean} options.acceptNoWindowGlobal
 *        By default, we will reject BrowsingContext that don't have any WindowGlobal,
 *        either retrieved via BrowsingContext.currentWindowGlobal in the parent process,
 *        or via the options.windowGlobal argument.
 *        But in some case, we are processing BrowsingContext very early, before any
 *        WindowGlobal has been created for it. But they are still relevant BrowsingContexts
 *        to debug.
 * @param {WindowGlobal} options.windowGlobal
 *        When we are in the content process, we can't easily retrieve the WindowGlobal
 *        for a given BrowsingContext. So allow to pass it via this argument.
 *        Also, there is some race conditions where browsingContext.currentWindowGlobal
 *        is null, while the callsite may have a reference to the WindowGlobal.
 */
export function isBrowsingContextPartOfContext(browsingContext: BrowsingContext, sessionContext: any, options?: {
    forceAcceptTopLevelTarget: boolean;
    acceptInitialDocument: boolean;
    acceptSameProcessIframes: boolean;
    acceptNoWindowGlobal: boolean;
    windowGlobal: WindowGlobal;
}): boolean;
/**
 * Helper function to know if a given WindowGlobal should be debugged by scope
 * described by the given session context. This method could be called from any process
 * as so accept either WindowGlobalParent or WindowGlobalChild instances.
 *
 * @param {WindowGlobalParent|WindowGlobalChild} windowGlobal
 *        The WindowGlobal we want to check if it is part of debugged context
 * @param {Object} sessionContext
 *        The Session Context to help know what is debugged.
 *        See devtools/server/actors/watcher/session-context.js
 * @param {Object} options
 *        Optional arguments passed via a dictionary.
 *        See `isBrowsingContextPartOfContext` jsdoc.
 */
export function isWindowGlobalPartOfContext(windowGlobal: WindowGlobalParent | WindowGlobalChild, sessionContext: any, options: any): boolean;
/**
 * Get all the BrowsingContexts that should be debugged by the given session context.
 * Consider using WatcherActor.getAllBrowsingContexts(options) which will automatically pass the right sessionContext.
 *
 * Really all of them:
 * - For all the privileged windows (browser.xhtml, browser console, ...)
 * - For all chrome *and* content contexts (privileged windows, as well as <browser> elements and their inner content documents)
 * - For all nested browsing context. We fetch the contexts recursively.
 *
 * @param {Object} sessionContext
 *        The Session Context to help know what is debugged.
 *        See devtools/server/actors/watcher/session-context.js
 * @param {Object} options
 *        Optional arguments passed via a dictionary.
 * @param {Boolean} options.acceptSameProcessIframes
 *        If true, we will accept WindowGlobal that runs in the same process as their parent document.
 *        That, even when EFT is disabled.
 */
export function getAllBrowsingContextsForContext(sessionContext: any, { acceptSameProcessIframes }?: {
    acceptSameProcessIframes: boolean;
}): any[];
