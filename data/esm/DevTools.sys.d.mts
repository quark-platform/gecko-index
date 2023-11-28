export namespace DevTools {
    function init(libDir: any): void;
    namespace configurations {
        namespace bottomToolbox {
            function applyConfig(): Promise<void>;
        }
        namespace sideToolbox {
            function applyConfig(): Promise<void>;
            function verifyConfig(): Promise<string>;
        }
        namespace undockedToolbox {
            let windowType: string;
            function applyConfig(): Promise<void>;
            function verifyConfig(): Promise<string>;
        }
    }
}
