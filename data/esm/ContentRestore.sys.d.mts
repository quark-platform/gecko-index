/**
 * This module implements the content side of session restoration. The chrome
 * side is handled by SessionStore.sys.mjs. The functions in this module are called
 * by content-sessionStore.js based on messages received from SessionStore.sys.mjs
 * (or, in one case, based on a "load" event). Each tab has its own
 * ContentRestore instance, constructed by content-sessionStore.js.
 *
 * In a typical restore, content-sessionStore.js will call the following based
 * on messages and events it receives:
 *
 *   restoreHistory(tabData, loadArguments, callbacks)
 *     Restores the tab's history and session cookies.
 *   restoreTabContent(loadArguments, finishCallback)
 *     Starts loading the data for the current page to restore.
 *   restoreDocument()
 *     Restore form and scroll data.
 *
 * When the page has been loaded from the network, we call finishCallback. It
 * should send a message to SessionStore.sys.mjs, which may cause other tabs to be
 * restored.
 *
 * When the page has finished loading, a "load" event will trigger in
 * content-sessionStore.js, which will call restoreDocument. At that point,
 * form data is restored and the restore is complete.
 *
 * At any time, SessionStore.sys.mjs can cancel the ongoing restore by sending a
 * reset message, which causes resetRestore to be called. At that point it's
 * legal to begin another restore.
 */
export function ContentRestore(chromeGlobal: any): Readonly<{}>;
