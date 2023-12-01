export class ThumbnailsChild extends JSWindowActorChild {
    receiveMessage(message: any): Promise<any> | {
        width: any;
        height: any;
        channelError?: undefined;
        originalURL?: undefined;
    } | {
        channelError: any;
        originalURL: any;
        width?: undefined;
        height?: undefined;
    };
}
