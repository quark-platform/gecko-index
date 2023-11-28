export namespace UpdateUtils {
    let PER_INSTALLATION_PREFS: {
        "app.update.auto": {
            type: string;
            defaultValue: boolean;
            migrate: boolean;
            observerTopic: string;
            policyFn: () => boolean;
        };
        "app.update.background.enabled": {
            type: string;
            defaultValue: boolean;
            observerTopic: string;
            policyFn: () => boolean;
        };
    };
}
