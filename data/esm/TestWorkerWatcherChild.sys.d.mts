export class TestWorkerWatcherChild {
    receiveMessage(msg: any): Promise<never>;
    startWatchingWorkers(): void;
    _workerDebuggerListener: {
        onRegister(dbg: any): void;
        onUnregister(dbg: any): void;
    };
    stopWatchingWorkers(): void;
    willDestroy(): void;
}
