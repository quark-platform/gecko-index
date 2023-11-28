export class AddonRolloutAction {
    get schema(): any;
    _run(recipe: any): Promise<void>;
    reportError(error: any, eventName: any): void;
}
