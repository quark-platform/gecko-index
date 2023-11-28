export const session: typeof SessionModule;
declare class SessionModule {
    constructor(messageHandler: any);
    destroy(): void;
    /**
     * Commands
     */
    /**
     * End the current session.
     *
     * Session clean up will happen later in WebDriverBiDiConnection class.
     */
    end(): Promise<void>;
    /**
     * Enable certain events either globally, or for a list of browsing contexts.
     *
     * @param {object=} params
     * @param {Array<string>} params.events
     *     List of events to subscribe to.
     * @param {Array<string>=} params.contexts
     *     Optional list of top-level browsing context ids
     *     to subscribe the events for.
     *
     * @throws {InvalidArgumentError}
     *     If <var>events</var> or <var>contexts</var> are not valid types.
     */
    subscribe(params?: object | undefined): Promise<void>;
    /**
     * Disable certain events either globally, or for a list of browsing contexts.
     *
     * @param {object=} params
     * @param {Array<string>} params.events
     *     List of events to unsubscribe from.
     * @param {Array<string>=} params.contexts
     *     Optional list of top-level browsing context ids
     *     to unsubscribe the events from.
     *
     * @throws {InvalidArgumentError}
     *     If <var>events</var> or <var>contexts</var> are not valid types.
     */
    unsubscribe(params?: object | undefined): Promise<void>;
    #private;
}
export {};
