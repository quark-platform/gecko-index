export class PreferenceRollbackAction {
    get schema(): any;
    _run(recipe: any): Promise<void>;
    _finalize(): Promise<void>;
}
