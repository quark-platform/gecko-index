export namespace TelemetryEvents {
    let NO_ENROLLMENT_ID_MARKER: string;
    function init(): void;
    function sendEvent(method: any, object: any, value: any, extra: any): void;
}
