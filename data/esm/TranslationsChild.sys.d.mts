/**
 * This file is extremely sensitive to memory size and performance!
 */
export class TranslationsChild extends JSWindowActorChild {
    handleEvent(event: any): void;
    addProfilerMarker(message: any): void;
    receiveMessage({ name, data }: {
        name: any;
        data: any;
    }): Promise<any>;
    #private;
}
