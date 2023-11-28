export class Domain {
    static implements(command: any): boolean;
    constructor(session: any);
    session: any;
    name: string;
    eventListeners_: Set<any>;
    _requestCounter: number;
    destructor(): void;
    emit(eventName: any, params?: {}): void;
    /**
     * Execute the provided method in the child domain that has the same domain
     * name. eg. calling this.executeInChild from domains/parent/Input.jsm will
     * attempt to execute the method in domains/content/Input.jsm.
     *
     * This can only be called from parent domains managed by a TabSession.
     *
     * @param {string} method
     *        Name of the method to call on the child domain.
     * @param {object} params
     *        Optional parameters. Must be serializable.
     */
    executeInChild(method: string, params: object): any;
    addEventListener(listener: any): void;
}
