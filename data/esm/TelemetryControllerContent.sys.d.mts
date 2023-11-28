export function getTelemetryController(): Readonly<{
    /**
     * Used only for testing purposes.
     */
    testInitLogging(): void;
    /**
     * Used only for testing purposes.
     */
    testSetupContent(): void;
    /**
     * Send a notification.
     */
    observe(aSubject: any, aTopic: any, aData: any): void;
    QueryInterface: any;
}>;
export const TelemetryController: Readonly<{
    /**
     * Used only for testing purposes.
     */
    testInitLogging(): void;
    /**
     * Used only for testing purposes.
     */
    testSetupContent(): void;
    /**
     * Send a notification.
     */
    observe(aSubject: any, aTopic: any, aData: any): void;
    QueryInterface: any;
}>;
