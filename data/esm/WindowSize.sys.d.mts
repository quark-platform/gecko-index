export namespace WindowSize {
    function init(libDir: any): void;
    namespace configurations {
        namespace maximized {
            let selectors: string[];
            function applyConfig(): Promise<void>;
        }
        namespace normal {
            let selectors_1: string[];
            export { selectors_1 as selectors };
            export function applyConfig(): Promise<void>;
        }
        namespace fullScreen {
            let selectors_2: string[];
            export { selectors_2 as selectors };
            export function applyConfig(): Promise<void>;
        }
    }
}
