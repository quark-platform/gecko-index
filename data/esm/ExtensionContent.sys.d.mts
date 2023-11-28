export namespace ExtensionContent {
    export { BrowserExtensionContent };
    export { contentScripts };
    export function shutdownExtension(extension: any): void;
    export function getContentScriptGlobals(window: any): any;
    export function initExtensionContext(extension: any, window: any): void;
    export function getContext(extension: any, window: any): any;
    export function getContextByExtensionId(extensionId: any, window: any): any;
    export function handleDetectLanguage({ windows }: {
        windows: any;
    }): Promise<any>;
    export function handleActivateScripts({ options, windows }: {
        options: any;
        windows: any;
    }): void;
    export function handleActorExecute({ options, windows }: {
        options: any;
        windows: any;
    }): Promise<any>;
}
/**
 * Child side of the ExtensionContent process actor, handles some tabs.* APIs.
 */
export class ExtensionContentChild {
    receiveMessage({ name, data }: {
        name: any;
        data: any;
    }): void | Promise<any>;
}
declare const BrowserExtensionContent: any;
declare var contentScripts: any;
export {};
