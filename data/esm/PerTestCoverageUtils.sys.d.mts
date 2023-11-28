export const PerTestCoverageUtils: {
    new (): {};
    beforeTest(): Promise<void>;
    beforeTestSync(): void;
    afterTest(): Promise<void>;
    afterTestSync(): void;
    enabled: boolean;
};
