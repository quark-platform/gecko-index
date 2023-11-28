export class Performance {
    constructor(session: any);
    enabled: boolean;
    destructor(): void;
    enable(): Promise<void>;
    disable(): void;
}
