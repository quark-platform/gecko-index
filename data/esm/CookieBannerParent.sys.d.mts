export class CookieBannerParent extends JSWindowActorParent {
    receiveMessage(message: any): Promise<{
        rules: any;
        hasExecuted: boolean;
    }>;
    #private;
}
