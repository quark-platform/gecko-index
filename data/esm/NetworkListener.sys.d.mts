/**
 * The NetworkListener listens to all network activity from the parent
 * process.
 *
 * Example:
 * ```
 * const listener = new NetworkListener();
 * listener.on("before-request-sent", onBeforeRequestSent);
 * listener.startListening();
 *
 * const onBeforeRequestSent = (eventName, data = {}) => {
 *   const { cntextId, redirectCount, requestData, requestId, timestamp } = data;
 *   ...
 * };
 * ```
 *
 * @fires before-request-sent
 *    The NetworkListener emits "before-request-sent" events, with the
 *    following object as payload:
 *      - {number} browsingContextId - The browsing context id of the browsing
 *        context where this request was performed.
 *      - {number} redirectCount - The request's redirect count.
 *      - {RequestData} requestData - The request's data as expected by
 *        WebDriver BiDi.
 *      - {string} requestId - The id of the request, consistent across
 *        redirects.
 *      - {number} timestamp - Timestamp when the event was generated.
 */
export class NetworkListener {
    destroy(): void;
    startListening(): void;
    stopListening(): void;
    #private;
}
