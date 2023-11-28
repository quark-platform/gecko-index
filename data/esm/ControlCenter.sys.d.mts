export namespace ControlCenter {
    function init(libDir: any): void;
    namespace configurations {
        namespace about {
            export { CC_SELECTORS as selectors };
            export function applyConfig(): Promise<void>;
        }
        namespace localFile {
            let selectors: string[];
            function applyConfig(): Promise<void>;
        }
        namespace http {
            export { CC_SELECTORS as selectors };
            export function applyConfig(): Promise<void>;
        }
        namespace httpSubView {
            export { CC_SELECTORS as selectors };
            export function applyConfig(): Promise<void>;
        }
        namespace https {
            export { CC_SELECTORS as selectors };
            export function applyConfig(): Promise<void>;
        }
        namespace httpsSubView {
            export { CC_SELECTORS as selectors };
            export function applyConfig(): Promise<void>;
        }
        namespace singlePermission {
            export { CC_SELECTORS as selectors };
            export function applyConfig(): Promise<void>;
        }
        namespace allPermissions {
            export { CC_SELECTORS as selectors };
            export function applyConfig(): Promise<void>;
        }
        namespace mixed {
            export { CC_SELECTORS as selectors };
            export function applyConfig(): Promise<void>;
        }
        namespace mixedSubView {
            export { CC_SELECTORS as selectors };
            export function applyConfig(): Promise<void>;
        }
        namespace mixedPassive {
            export { CC_SELECTORS as selectors };
            export function applyConfig(): Promise<void>;
        }
        namespace mixedPassiveSubView {
            export { CC_SELECTORS as selectors };
            export function applyConfig(): Promise<void>;
        }
        namespace mixedActive {
            export { CC_SELECTORS as selectors };
            export function applyConfig(): Promise<void>;
        }
        namespace mixedActiveSubView {
            export { CC_SELECTORS as selectors };
            export function applyConfig(): Promise<void>;
        }
        namespace mixedActiveUnblocked {
            export { CC_SELECTORS as selectors };
            export function applyConfig(): Promise<void>;
        }
        namespace mixedActiveUnblockedSubView {
            export { CC_SELECTORS as selectors };
            export function applyConfig(): Promise<void>;
        }
        namespace httpPassword {
            export { CC_SELECTORS as selectors };
            export function applyConfig(): Promise<void>;
        }
        namespace httpPasswordSubView {
            export { CC_SELECTORS as selectors };
            export function applyConfig(): Promise<void>;
        }
        namespace trackingProtectionNoElements {
            export { PP_SELECTORS as selectors };
            export function applyConfig(): Promise<void>;
        }
        namespace trackingProtectionEnabled {
            export { PP_SELECTORS as selectors };
            export function applyConfig(): Promise<void>;
        }
        namespace trackingProtectionDisabled {
            export { PP_SELECTORS as selectors };
            export function applyConfig(): Promise<void>;
        }
    }
}
declare const CC_SELECTORS: string[];
declare const PP_SELECTORS: string[];
export {};
