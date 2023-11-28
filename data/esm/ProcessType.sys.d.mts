export const ProcessType: Readonly<{
    /**
     * Converts a key string to a fluent ID defined in processTypes.ftl.
     */
    kProcessTypeMap: {
        default: string;
        gpu: string;
        tab: string;
        rdd: string;
        socket: string;
        utility: string;
        extension: string;
        file: string;
        prealloc: string;
        privilegedabout: string;
        privilegedmozilla: string;
        web: string;
        webIsolated: string;
        webServiceWorker: string;
    };
    kFallback: "process-type-unknown";
    fluentNameFromProcessTypeString(type: any): any;
}>;
