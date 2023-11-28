export function ResponsivenessMonitor(intervalMS?: number): void;
export class ResponsivenessMonitor {
    constructor(intervalMS?: number);
    _intervalMS: number;
    _prevTimestamp: number;
    _accumulatedDelay: number;
    _timer: any;
    QueryInterface: any;
    name: string;
    notify(): void;
    abort(): void;
    finish(): number;
}
