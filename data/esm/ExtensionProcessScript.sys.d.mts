export namespace ExtensionProcessScript {
    export { extensions };
    export function initExtension(extension: any): any;
    export function initExtensionDocument(policy: any, doc: any, privileged: any): void;
    export function getExtensionChild(id: any): any;
    export function preloadContentScript(contentScript: any): void;
    export function loadContentScript(contentScript: any, window: any): any;
}
export namespace ExtensionAPIRequestHandler {
    function initExtensionWorker(policy: any, serviceWorkerInfo: any): void;
    function onExtensionWorkerLoaded(policy: any, serviceWorkerDescriptorId: any): void;
    function onExtensionWorkerDestroyed(policy: any, serviceWorkerDescriptorId: any): void;
    function handleAPIRequest(policy: any, request: any): any;
    function getExtensionContextForAPIRequest({ extension, request }: {
        extension: any;
        request: any;
    }): any;
    function validateAndNormalizeRequestArgs({ context, request }: {
        context: any;
        request: any;
    }): any;
}
declare var extensions: any;
export {};
