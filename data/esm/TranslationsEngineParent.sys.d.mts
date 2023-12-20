/**
 * The translations engine is in its own content process. This actor handles the
 * marshalling of the data such as the engine payload and port passing.
 */
export class TranslationsEngineParent extends JSWindowActorParent {
    receiveMessage({ name, data }: {
        name: any;
        data: any;
    }): Promise<any>;
    /**
     * @param {string} fromLanguage
     * @param {string} toLanguage
     * @param {number} innerWindowId
     * @param {MessagePort} port
     * @param {number} innerWindowId
     * @param {TranslationsParent} [translationsParent]
     */
    startTranslation(fromLanguage: string, toLanguage: string, port: MessagePort, innerWindowId: number, translationsParent?: TranslationsParent): void;
    /**
     * Remove all the translations that are currently queued, and remove
     * the communication port.
     *
     * @param {number} innerWindowId
     */
    discardTranslations(innerWindowId: number): void;
    /**
     * Manually shut down the engines, typically for testing purposes.
     */
    forceShutdown(): Promise<any>;
    didDestroy(): void;
    #private;
}
