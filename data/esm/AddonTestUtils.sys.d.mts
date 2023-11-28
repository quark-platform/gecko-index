export namespace MockAsyncShutdown {
    let profileBeforeChange: MockBarrier;
    let profileChangeTeardown: MockBarrier;
    let quitApplicationGranted: MockBarrier;
    let Barrier: any;
}
export const AddonTestUtils: any;
declare class MockBarrier {
    constructor(name: any);
    name: any;
    blockers: any[];
    addBlocker(name: any, blocker: any, options: any): void;
    trigger(): Promise<void>;
}
export {};
