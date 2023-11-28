export class AboutMessagePreviewParent {
    showInfoBar(message: any, browser: any): void;
    showSpotlight(message: any, browser: any): void;
    showCFR(message: any, browser: any): void;
    showFeatureCallout(message: any, browser: any): void;
    showMessage(data: any): Promise<void>;
    receiveMessage(message: any): void;
}
