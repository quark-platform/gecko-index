export namespace PdfJsTelemetry {
    function onViewerIsUsed(): void;
    function onTimeToView(ms: any): void;
    function onEditing({ subtype, data }: {
        subtype: any;
        data: any;
    }): void;
    function onButtons(id: any): void;
    function onGeckoview(id: any): void;
}
