export namespace PermissionPrompts {
    function init(libDir: any): void;
    namespace configurations {
        namespace shareDevices {
            let selectors: string[];
            function applyConfig(): Promise<void>;
        }
        namespace shareMicrophone {
            let selectors_1: string[];
            export { selectors_1 as selectors };
            export function applyConfig(): Promise<void>;
        }
        namespace shareVideoAndMicrophone {
            let selectors_2: string[];
            export { selectors_2 as selectors };
            export function applyConfig(): Promise<void>;
        }
        namespace shareScreen {
            let selectors_3: string[];
            export { selectors_3 as selectors };
            export function applyConfig(): Promise<void>;
        }
        namespace geo {
            let selectors_4: string[];
            export { selectors_4 as selectors };
            export function applyConfig(): Promise<void>;
        }
        namespace persistentStorage {
            let selectors_5: string[];
            export { selectors_5 as selectors };
            export function applyConfig(): Promise<void>;
        }
        namespace loginCapture {
            let selectors_6: string[];
            export { selectors_6 as selectors };
            export function applyConfig(): Promise<void>;
        }
        namespace notifications {
            let selectors_7: string[];
            export { selectors_7 as selectors };
            export function applyConfig(): Promise<void>;
        }
        namespace addons {
            let selectors_8: string[];
            export { selectors_8 as selectors };
            export function applyConfig(): Promise<void>;
        }
        namespace addonsNoWhitelist {
            let selectors_9: string[];
            export { selectors_9 as selectors };
            export function applyConfig(): Promise<any>;
        }
    }
}
