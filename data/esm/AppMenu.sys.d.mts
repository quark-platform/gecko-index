export namespace AppMenu {
    function init(libDir: any): void;
    namespace configurations {
        namespace appMenuMainView {
            let selectors: string[];
            function applyConfig(): Promise<void>;
        }
        namespace appMenuHistorySubview {
            let selectors_1: string[];
            export { selectors_1 as selectors };
            export function applyConfig(): Promise<void>;
            export { verifyConfigHelper as verifyConfig };
        }
        namespace appMenuHelpSubview {
            let selectors_2: string[];
            export { selectors_2 as selectors };
            export function applyConfig(): Promise<void>;
            export { verifyConfigHelper as verifyConfig };
        }
    }
}
declare function verifyConfigHelper(): string;
export {};
