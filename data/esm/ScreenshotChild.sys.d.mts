export class ScreenshotChild extends JSWindowActorChild {
    receiveMessage(message: any): Promise<{
        innerWidth: number;
        innerHeight: number;
        scrollMinX: any;
        scrollMaxX: any;
        scrollMinY: any;
        scrollMaxY: any;
    }>;
    getDimensions(): Promise<{
        innerWidth: number;
        innerHeight: number;
        scrollMinX: any;
        scrollMaxX: any;
        scrollMinY: any;
        scrollMaxY: any;
    }>;
}
