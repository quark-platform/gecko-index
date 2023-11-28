export namespace Buttons {
    function init(libDir: any): void;
    namespace configurations {
        namespace navBarButtons {
            let selectors: string[];
            function applyConfig(): Promise<void>;
        }
        namespace tabsToolbarButtons {
            let selectors_1: string[];
            export { selectors_1 as selectors };
            export function applyConfig_1(): Promise<void>;
            export { applyConfig_1 as applyConfig };
        }
        namespace menuPanelButtons {
            let selectors_2: string[];
            export { selectors_2 as selectors };
            export function applyConfig_2(): Promise<void>;
            export { applyConfig_2 as applyConfig };
            export function verifyConfig(): Promise<string>;
        }
        namespace custPaletteButtons {
            let selectors_3: string[];
            export { selectors_3 as selectors };
            export function applyConfig_3(): Promise<void>;
            export { applyConfig_3 as applyConfig };
            export function verifyConfig(): Promise<string>;
        }
    }
}
