/**
 * Base class for all the targets.
 */
export class Target {
    /**
     * @param {TargetList} targetList
     * @param {Class} sessionClass
     */
    constructor(targetList: TargetList, sessionClass: Class);
    targetList: TargetList;
    sessionClass: Class;
    connections: Set<any>;
    id: any;
    /**
     * Close all active connections made to this target.
     */
    destructor(): void;
    handle(request: any, response: any): Promise<void>;
    get QueryInterface(): MozQueryInterface;
}
