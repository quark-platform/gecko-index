/// <reference types="gecko-types" />
export namespace MockAsyncShutdown {
    let profileBeforeChange: MockBarrier;
    let profileChangeTeardown: MockBarrier;
    let quitApplicationGranted: MockBarrier;
    let Barrier: typeof AsyncShutdown.Barrier;
}
export const AddonTestUtils: any;
declare class MockBarrier {
    constructor(name: any);
    name: any;
    blockers: any[];
    addBlocker(name: any, blocker: any, options: any): void;
    trigger(): Promise<void>;
}
import { AsyncShutdown } from "resource://gre/modules/AsyncShutdown.sys.mjs";
export {};
