export namespace StartupPerformance {
    let RESTORED_TOPIC: string;
    let _startTimeStamp: any;
    let _latestRestoredTimeStamp: any;
    let _promiseFinished: any;
    let _resolveFinished: any;
    let _deadlineTimer: any;
    let _hasFired: boolean;
    let _isRestored: boolean;
    let _totalNumberOfEagerTabs: number;
    let _totalNumberOfTabs: number;
    let _totalNumberOfWindows: number;
    function init(): void;
    const latestRestoredTimeStamp: any;
    const isRestored: boolean;
    function _onRestorationStarts(isAutoRestore: any): void;
    function _startTimer(): void;
    function observe(subject: any, topic: any, details: any): void;
}
