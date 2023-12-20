export class ReftestFissionParent extends JSWindowActorParent {
    tellChildrenToFlushRendering(browsingContext: any, ignoreThrottledAnimations: any, needsAnimationFrame: any): Promise<PromiseSettledResult<any>[]>;
    tellChildrenToFlushRenderingRecursive(browsingContext: any, ignoreThrottledAnimations: any, needsAnimationFrame: any, promises: any): void;
    getNearestProcessRootProperDescendants(browsingContext: any): any[];
    getNearestProcessRootProperDescendantsRecursive(browsingContext: any, result: any): void;
    tellChildrenToUpdateLayerTree(browsingContext: any): Promise<{
        errorStrings: any[];
        infoStrings: any[];
    }>;
    tellChildrenToSetupDisplayport(browsingContext: any, promises: any): void;
    tellChildrenToSetupAsyncScrollOffsets(browsingContext: any, allowFailure: any, promises: any): void;
    receiveMessage(msg: any): Promise<{
        errorStrings: any[];
        infoStrings: any[];
    }>;
}
