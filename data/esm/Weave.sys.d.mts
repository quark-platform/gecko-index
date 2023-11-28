/**
 * Sync's XPCOM service.
 *
 * It is named "Weave" for historical reasons.
 *
 * It's worth noting how Sync is lazily loaded. We register a timer that
 * loads Sync a few seconds after app startup. This is so Sync does not
 * adversely affect application start time.
 *
 * If Sync is not configured, no extra Sync code is loaded. If an
 * external component (say the UI) needs to interact with Sync, it
 * should use the promise-base function whenLoaded() - something like the
 * following:
 *
 * // 1. Grab a handle to the Sync XPCOM service.
 * let service = Cc["@mozilla.org/weave/service;1"]
 *                 .getService(Components.interfaces.nsISupports)
 *                 .wrappedJSObject;
 *
 * // 2. Use the .then method of the promise.
 * service.whenLoaded().then(() => {
 *   // You are free to interact with "Weave." objects.
 *   return;
 * });
 *
 * And that's it!  However, if you really want to avoid promises and do it
 * old-school, then
 *
 * // 1. Get a reference to the service as done in (1) above.
 *
 * // 2. Check if the service has been initialized.
 * if (service.ready) {
 *   // You are free to interact with "Weave." objects.
 *   return;
 * }
 *
 * // 3. Install "ready" listener.
 * Services.obs.addObserver(function onReady() {
 *   Services.obs.removeObserver(onReady, "weave:service:ready");
 *
 *   // You are free to interact with "Weave." objects.
 * }, "weave:service:ready", false);
 *
 * // 4. Trigger loading of Sync.
 * service.ensureLoaded();
 */
export function WeaveService(): void;
export class WeaveService {
    wrappedJSObject: this;
    ready: boolean;
    classID: any;
    QueryInterface: any;
    get Weave(): any;
    ensureLoaded(): void;
    whenLoaded(): Promise<any>;
    init(): void;
    timer: any;
    /**
     * Whether Sync appears to be enabled.
     *
     * This returns true if we have an associated FxA account and Sync is enabled.
     *
     * It does *not* perform a robust check to see if the client is working.
     * For that, you'll want to check Weave.Status.checkSetup().
     */
    get enabled(): any;
}
export function AboutWeaveLog(): void;
export class AboutWeaveLog {
    classID: any;
    QueryInterface: any;
    getURIFlags(aURI: any): number;
    newChannel(aURI: any, aLoadInfo: any): any;
}
