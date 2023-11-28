export class AutoScrollChild {
    _scrollable: any;
    _scrolldir: string;
    _startX: any;
    _startY: any;
    _screenX: any;
    _screenY: any;
    _lastFrame: any;
    _autoscrollHandledByApz: boolean;
    _scrollId: any;
    observer: AutoScrollObserver;
    autoscrollLoop(timestamp: any): void;
    isAutoscrollBlocker(event: any): boolean;
    isScrollableElement(aNode: any): any;
    computeWindowScrollDirection(global: any): "NSEW" | "EW" | "NS";
    computeNodeScrollDirection(node: any): "NSEW" | "EW" | "NS";
    findNearestScrollableElement(aNode: any): void;
    startScroll(event: any): Promise<void>;
    _scrollErrorX: any;
    _scrollErrorY: any;
    startMainThreadScroll(): void;
    stopScroll(): void;
    accelerate(curr: any, start: any): number;
    roundToZero(num: any): number;
    canStartAutoScrollWith(event: any): boolean;
    handleEvent(event: any): void;
    receiveMessage(msg: any): void;
    rejectedByApz(data: any): void;
}
declare class AutoScrollObserver {
    constructor(actor: any);
    actor: any;
    observe(subject: any, topic: any, data: any): void;
}
export {};
