/**
 * The StartupRecorder component observes notifications at various stages of
 * startup and records the set of JS modules that were already loaded at
 * each of these points.
 * The records are meant to be used by startup tests in
 * browser/base/content/test/performance
 * This component only exists in nightly and debug builds, it doesn't ship in
 * our release builds.
 */
export function StartupRecorder(): void;
export class StartupRecorder {
    wrappedJSObject: this;
    data: {
        images: {
            "image-drawing": Set<any>;
            "image-loading": Set<any>;
        };
        code: {};
        extras: {};
        prefStats: {};
    };
    done: Promise<any>;
    _resolve: (value: any) => void;
    QueryInterface: any;
    record(name: any): void;
    observe(subject: any, topic: any, data: any): void;
}
