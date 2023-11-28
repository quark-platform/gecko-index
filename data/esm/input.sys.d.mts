export const input: typeof InputModule;
declare class InputModule {
    constructor(messageHandler: any);
    destroy(): void;
    performActions(options: any): Promise<void>;
    releaseActions(): Promise<void>;
    #private;
}
export {};
ontext.
     *
     * @param {object=} options
     * @param {string} options.context
     *     Id of the browsing context to reset the input state.
     *
     * @throws {InvalidArgumentError}
     *     If <var>context</var> is not valid type.
     * @throws {NoSuchFrameError}
     *     If the browsing context cannot be found.
     */
    releaseActions(options?: object | undefined): Promise<{}>;
}
export {};
