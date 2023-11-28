export namespace Toolbars {
    function init(libDir: any): void;
    namespace configurations {
        namespace onlyNavBar {
            let selectors: string[];
            function applyConfig(): Promise<void>;
        }
        namespace allToolbars {
            let selectors_1: string[];
            export { selectors_1 as selectors };
            export function applyConfig(): Promise<void>;
            export function verifyConfig(): Promise<string>;
        }
    }
}
