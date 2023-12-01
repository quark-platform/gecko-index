export class ContentMetaChild extends JSWindowActorChild {
    metaTags: Map<any, any>;
    didDestroy(): void;
    handleEvent(event: any): void;
    onMetaTag(metaTag: any): void;
}
