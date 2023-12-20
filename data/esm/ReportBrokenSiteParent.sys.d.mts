export class ReportBrokenSiteParent extends JSWindowActorParent {
    receiveMessage(msg: any): Promise<{
        antitracking: {
            blockList: string;
            isPrivateBrowsing: any;
            hasTrackingContentBlocked: boolean;
            hasMixedActiveContentBlocked: boolean;
            hasMixedDisplayContentBlocked: boolean;
        };
        graphics: any;
        locales: any;
        screenshot: any;
    }>;
    #private;
}
