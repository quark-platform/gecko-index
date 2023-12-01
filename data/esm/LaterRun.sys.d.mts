export namespace LaterRun {
    const ENABLE_REASON_NEW_PROFILE: number;
    const ENABLE_REASON_UPDATE_APPLIED: number;
    function init(reason: any): void;
    const enabled: boolean;
    function enable(reason: any): void;
    const hoursSinceInstall: number;
    const hoursSinceUpdate: number;
    let sessionCount: any;
    function selfDestruct(): void;
    function readPages(): Page[];
    function getURL(): any;
}
declare class Page {
    constructor({ pref, minimumHoursSinceInstall, minimumSessionCount, requireBoth, url, }: {
        pref: any;
        minimumHoursSinceInstall: any;
        minimumSessionCount: any;
        requireBoth: any;
        url: any;
    });
    pref: any;
    minimumHoursSinceInstall: any;
    minimumSessionCount: any;
    requireBoth: any;
    url: any;
    get hasRun(): boolean;
    applies(sessionInfo: any): boolean;
}
export {};
