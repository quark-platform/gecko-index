export class GeckoViewPrompterChild {
    _prompts: Map<any, any>;
    dismissPrompt(prompt: any): void;
    updatePrompt(message: any): void;
    unregisterPrompt(prompt: any): void;
    prompt(prompt: any, message: any): any;
    /**
     * Handles the message coming from GeckoViewPrompterParent.
     *
     * @param   {string} message.name The subject of the message.
     * @param   {object} message.data The data of the message.
     */
    receiveMessage({ name, data }: string): Promise<any>;
}
