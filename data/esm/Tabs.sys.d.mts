export namespace Tabs {
    function init(libDir: any): void;
    namespace configurations {
        namespace fiveTabs {
            let selectors: string[];
            function applyConfig(): Promise<void>;
        }
        namespace fourPinned {
            let selectors_1: string[];
            export { selectors_1 as selectors };
            export function applyConfig(): Promise<void>;
        }
        namespace twoPinnedWithOverflow {
            let selectors_2: string[];
            export { selectors_2 as selectors };
            export function applyConfig(): Promise<void>;
        }
    }
}
