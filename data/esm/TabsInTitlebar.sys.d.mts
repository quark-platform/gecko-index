export namespace TabsInTitlebar {
    function init(libDir: any): void;
    namespace configurations {
        namespace tabsInTitlebar {
            let selectors: string[];
            function applyConfig(): Promise<any>;
        }
        namespace tabsOutsideTitlebar {
            let selectors_1: string[];
            export { selectors_1 as selectors };
            export function applyConfig(): Promise<void>;
        }
    }
}
