export class MarionetteEventsChild extends JSWindowActorChild {
    get innerWindowId(): number;
    actorCreated(): void;
    handleEvent({ target, type }: {
        target: any;
        type: any;
    }): void;
}
