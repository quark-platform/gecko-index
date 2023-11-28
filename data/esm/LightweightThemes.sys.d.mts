export namespace LightweightThemes {
    function init(libDir: any): void;
    namespace configurations {
        namespace noLWT {
            let selectors: any[];
            function applyConfig(): Promise<void>;
        }
        namespace compactLight {
            let selectors_1: any[];
            export { selectors_1 as selectors };
            export function applyConfig(): Promise<void>;
        }
        namespace compactDark {
            let selectors_2: any[];
            export { selectors_2 as selectors };
            export function applyConfig(): Promise<void>;
        }
        namespace alpenGlow {
            let selectors_3: any[];
            export { selectors_3 as selectors };
            export function applyConfig(): Promise<void>;
        }
    }
}
