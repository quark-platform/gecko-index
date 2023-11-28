/**
 * The BrowsingContextListener can be used to listen for notifications coming
 * from browsing contexts that get attached or discarded.
 *
 * Example:
 * ```
 * const listener = new BrowsingContextListener();
 * listener.on("attached", onAttached);
 * listener.startListening();
 *
 * const onAttached = (eventName, data = {}) => {
 *   const { browsingContext, why } = data;
 *   ...
 * };
 * ```
 *
 * @fires message
 *    The BrowsingContextListener emits "attached" and "discarded" events,
 *    with the following object as payload:
 *      - {BrowsingContext} browsingContext
 *            Browsing context the notification relates to.
 *      - {string} why
 *            Usually "attach" or "discard", but will contain "replace" if the
 *            browsing context gets replaced by a cross-group navigation.
 */
export class BrowsingContextListener {
    destroy(): void;
    observe(subject: any, topic: any, data: any): void;
    startListening(): void;
    stopListening(): void;
    #private;
}
