/// <reference types="gecko-types" />
export class GeckoViewPrompterParent extends GeckoViewActorParent {
    _prompts: Map<any, any>;
    get rootActor(): any;
    registerPrompt(promptId: any, promptType: any, actor: any): Map<any, any>;
    unregisterPrompt(promptId: any): void;
    notifyPromptShow(promptId: any): void;
    getPrompts(): {
        args: {
            modalType: string;
            promptType: any;
            isDialog: any;
        };
    }[];
    /**
     * Handles the message coming from GeckoViewPrompterChild.
     *
     * @param   {string} message.name The subject of the message.
     * @param   {object} message.data The data of the message.
     */
    receiveMessage({ name, data }: string): Promise<any>;
}
import { GeckoViewActorParent } from "resource://gre/modules/GeckoViewActorParent.sys.mjs";
