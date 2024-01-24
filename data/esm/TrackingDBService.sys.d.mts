export function TrackingDBService(): void;
export class TrackingDBService {
    _initPromise: Promise<void>;
    classID: unknown;
    QueryInterface: MozQueryInterface;
    _db: null;
    waitingTasks: Set<any>;
    finishedShutdown: boolean;
    ensureDB(): Promise<any>;
    _initialize(): Promise<void>;
    _shutdown(): Promise<void>;
    recordContentBlockingLog(data: any): Promise<void>;
    identifyType(events: any): any;
    /**
     * Saves data rows to the DB.
     * @param data
     *        An array of JS objects representing row items to save.
     */
    saveEvents(data: any): Promise<void>;
    lastChecked: number;
    clearAll(): Promise<void>;
    clearSince(date: any): Promise<void>;
    getEventsByDateRange(dateFrom: any, dateTo: any): Promise<any>;
    sumAllEvents(): Promise<any>;
    getEarliestRecordedDate(): Promise<number>;
}
