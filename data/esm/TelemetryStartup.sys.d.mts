/**
 * TelemetryStartup is needed to forward the "profile-after-change" notification
 * to TelemetryController.jsm.
 */
export function TelemetryStartup(): void;
export class TelemetryStartup {
    QueryInterface: any;
    observe(aSubject: any, aTopic: any, aData: any): void;
}
