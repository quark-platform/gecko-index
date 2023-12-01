/**
 * See nsICookieBannerListService
 */
export class CookieBannerListService {
    classId: unknown;
    QueryInterface: MozQueryInterface;
    init(): Promise<void>;
    initForTest(): Promise<void>;
    importAllRules(): Promise<void>;
    shutdown(): void;
    /**
     * Called for remote settings "sync" events.
     */
    onSync({ data: { created, updated, deleted } }: {
        data: {
            created: any;
            updated: any;
            deleted: any;
        };
    }): void;
    observe(subject: any, topic: any, prefName: any): void;
    #private;
}
