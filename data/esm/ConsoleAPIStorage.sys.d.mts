/**
 * The ConsoleAPIStorage is meant to cache window.console API calls for later
 * reuse by other components when needed. For example, the Web Console code can
 * display the cached messages when it opens for the active tab.
 *
 * ConsoleAPI messages are stored as they come from the ConsoleAPI code, with
 * all their properties. They are kept around until the inner window object that
 * created the messages is destroyed. Messages are indexed by the inner window
 * ID.
 *
 * Usage:
 *    let ConsoleAPIStorage = Cc["@mozilla.org/consoleAPI-storage;1"]
 *                              .getService(Ci.nsIConsoleAPIStorage);
 *
 *    // Get the cached events array for the window you want (use the inner
 *    // window ID).
 *    let events = ConsoleAPIStorage.getEvents(innerWindowID);
 *    events.forEach(function(event) { ... });
 *
 *    // Clear the events for the given inner window ID.
 *    ConsoleAPIStorage.clearEvents(innerWindowID);
 */
export function ConsoleAPIStorageService(): void;
export class ConsoleAPIStorageService {
    classID: unknown;
    QueryInterface: MozQueryInterface;
    observe: (aSubject: any, aTopic: any, aData: any) => void;
    init: () => void;
    getEvents: (aId: any) => any;
    addLogEventListener: (aListener: any, aPrincipal: any) => void;
    removeLogEventListener: (aListener: any) => void;
    recordEvent: (aId: any, aEvent: any) => void;
    clearEvents: (aId: any) => void;
}
