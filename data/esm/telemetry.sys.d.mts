export class SyncedRecordsTelemetry {
    incomingCounts: {
        applied: number;
        failed: number;
        newFailed: number;
        reconciled: number;
        failedReasons: any;
    };
    outgoingCounts: {
        failed: number;
        sent: number;
        failedReasons: any;
    };
    addIncomingFailedReason(reason: any): void;
    addOutgoingFailedReason(reason: any): void;
}
export class ErrorSanitizer {
    static E_PERMISSION_DENIED: string;
    static E_NO_FILE_OR_DIR: string;
    static DOMErrorSubstitutions: {
        NotFoundError: string;
        NotAllowedError: string;
    };
    static "__#335066@#cleanOSErrorMessage"(message: any, error?: any): any;
    static reProfileDir: RegExp;
    /**
     * Clean an error message, removing PII and normalizing OS-specific messages.
     *
     * @param {string} message The error message
     * @param {Error?} error The error class instance, if any.
     */
    static cleanErrorMessage(message: string, error?: Error | null): any;
}
export class SyncRecord {
    constructor(allowedEngines: any, why: any);
    allowedEngines: any;
    failureReason: {
        name: string;
        error?: undefined;
        from?: undefined;
        code?: undefined;
    } | {
        name: string;
        error: any;
        from?: undefined;
        code?: undefined;
    } | {
        name: string;
        from: any;
        error?: undefined;
        code?: undefined;
    } | {
        name: string;
        code: any;
        error?: undefined;
        from?: undefined;
    };
    syncNodeType: any;
    when: number;
    startTime: any;
    took: number;
    why: any;
    engines: any[];
    currentEngine: EngineRecord;
    toJSON(): {
        when: number;
        took: number;
        failureReason: {
            name: string;
            error?: undefined;
            from?: undefined;
            code?: undefined;
        } | {
            name: string;
            error: any;
            from?: undefined;
            code?: undefined;
        } | {
            name: string;
            from: any;
            error?: undefined;
            code?: undefined;
        } | {
            name: string;
            code: any;
            error?: undefined;
            from?: undefined;
        };
        status: {
            service: any;
            sync: any;
        };
    };
    finished(error: any): void;
    status: {
        service: any;
        sync: any;
    };
    onEngineStart(engineName: any): void;
    onEngineStop(engineName: any, error: any): void;
    onEngineApplied(engineName: any, counts: any): void;
    onEngineStep(engineName: any, step: any): void;
    onEngineValidated(engineName: any, validationData: any): void;
    onEngineValidateError(engineName: any, error: any): void;
    onEngineUploaded(engineName: any, counts: any): void;
    _shouldIgnoreEngine(engineName: any, shouldBeCurrent?: boolean): boolean;
}
export const SyncTelemetry: SyncTelemetryImpl;
declare class EngineRecord {
    constructor(name: any);
    startTime: any;
    name: any;
    overrideTelemetryName: any;
    toJSON(): {
        name: any;
    };
    finished(error: any): void;
    took: number;
    failureReason: {
        name: string;
        error?: undefined;
        from?: undefined;
        code?: undefined;
    } | {
        name: string;
        error: any;
        from?: undefined;
        code?: undefined;
    } | {
        name: string;
        from: any;
        error?: undefined;
        code?: undefined;
    } | {
        name: string;
        code: any;
        error?: undefined;
        from?: undefined;
    };
    recordApplied(counts: any): void;
    incoming: {};
    recordStep(stepResult: any): void;
    steps: {
        name: any;
    }[];
    recordValidation(validationResult: any): void;
    validation: {
        version: any;
        checked: any;
    } | {
        failureReason: {
            name: string;
            error?: undefined;
            from?: undefined;
            code?: undefined;
        } | {
            name: string;
            error: any;
            from?: undefined;
            code?: undefined;
        } | {
            name: string;
            from: any;
            error?: undefined;
            code?: undefined;
        } | {
            name: string;
            code: any;
            error?: undefined;
            from?: undefined;
        };
    };
    recordValidationError(e: any): void;
    recordUploaded(counts: any): void;
    outgoing: any[];
}
declare class SyncTelemetryImpl {
    constructor(allowedEngines: any);
    allowedEngines: any;
    current: SyncRecord;
    payloads: any[];
    discarded: number;
    events: any[];
    histograms: {};
    migrations: any[];
    maxEventsCount: any;
    maxPayloadCount: any;
    submissionInterval: number;
    lastSubmissionTime: any;
    lastUID: string;
    lastSyncNodeType: any;
    currentSyncNodeType: any;
    sessionStartDate: any;
    sanitizeFxaDeviceId(deviceId: any): any;
    prepareFxaDevices(devices: any): any;
    syncIsEnabled(): any;
    getClientsEngineRecords(): any;
    updateFxaDevices(devices: any): {
        deviceID?: undefined;
        devices?: undefined;
    } | {
        deviceID: any;
        devices: any;
    };
    getFxaDevices(): any;
    getPingJSON(reason: any): {
        os: any;
        why: any;
        devices: any;
        discarded: number;
        version: number;
        syncs: any[];
        uid: string;
        syncNodeType: any;
        deviceID: any;
        sessionStartDate: any;
        events: any[];
        migrations: any[];
        histograms: {};
    };
    _addMigrationRecord(type: any, info: any): void;
    finish(reason: any): void;
    setupObservers(): void;
    shutdown(): void;
    submit(record: any): boolean;
    isProductionSyncUser(): boolean;
    onSyncStarted(data: any): void;
    onAccountInitOrChange(): void;
    onAccountLogout(): void;
    _checkCurrent(topic: any): boolean;
    _shouldSubmitForDataChange(): boolean;
    maybeSubmitForDataChange(): void;
    maybeSubmitForInterval(): void;
    onSyncFinished(error: any): void;
    takeTelemetryRecord(record: any): void;
    _addHistogram(hist: any): void;
    _recordEvent(eventDetails: any): void;
    observe(subject: any, topic: any, data: any): void;
    transformError(error: any): {
        name: string;
        error?: undefined;
        from?: undefined;
        code?: undefined;
    } | {
        name: string;
        error: any;
        from?: undefined;
        code?: undefined;
    } | {
        name: string;
        from: any;
        error?: undefined;
        code?: undefined;
    } | {
        name: string;
        code: any;
        error?: undefined;
        from?: undefined;
    };
}
export {};
