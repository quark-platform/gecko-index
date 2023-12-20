export const DAPVisitCounter: {
    startup(): void;
    _asyncShutdownBlocker: () => Promise<void>;
    initialize_counters(): void;
    counters: any[];
    timed_send(): Promise<void>;
    timeout_value(): number;
    send(timeout: any): Promise<void>;
    show(): any[];
};
