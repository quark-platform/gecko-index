export namespace TelemetryEvents {
    function init(): void;
    function sendEvent(method: any, object: any, value: any, extra: any): void;
}
