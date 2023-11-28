export class MarionetteEventsChild {
    get innerWindowId(): any;
    actorCreated(): void;
    handleEvent({ target, type }: {
        target: any;
        type: any;
    }): void;
}
