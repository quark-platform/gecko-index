export namespace UIDensities {
    function init(libDir: any): void;
    namespace configurations {
        namespace compactDensity {
            let selectors: string[];
            function applyConfig(): Promise<void>;
        }
        namespace normalDensity {
            let selectors_1: string[];
            export { selectors_1 as selectors };
            export function applyConfig(): Promise<void>;
        }
        namespace touchDensity {
            let selectors_2: string[];
            export { selectors_2 as selectors };
            export function applyConfig(): Promise<void>;
        }
    }
}
