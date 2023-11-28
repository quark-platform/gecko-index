export const gAutofillManager: AutofillManager;
declare class AutofillManager {
    sessions: Set<any>;
    autofill: any;
    ensure(sessionId: any, eventDispatcher: any): any;
    get(sessionId: any): any;
    delete(sessionId: any): void;
}
export {};
