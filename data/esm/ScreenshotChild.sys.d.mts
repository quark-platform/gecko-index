export class ScreenshotChild {
    receiveMessage(message: any): Promise<{
        innerWidth: any;
        innerHeight: any;
        scrollMinX: any;
        scrollMaxX: any;
        scrollMinY: any;
        scrollMaxY: any;
    }>;
    getDimensions(): Promise<{
        innerWidth: any;
        innerHeight: any;
        scrollMinX: any;
        scrollMaxX: any;
        scrollMinY: any;
        scrollMaxY: any;
    }>;
}
