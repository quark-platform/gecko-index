export function setTimeout(aCallback: any, aMilliseconds: any, ...aArgs: any[]): number;
export function setTimeoutWithTarget(aCallback: any, aMilliseconds: any, aTarget: any, ...aArgs: any[]): number;
export function setInterval(aCallback: any, aMilliseconds: any, ...aArgs: any[]): number;
export function setIntervalWithTarget(aCallback: any, aMilliseconds: any, aTarget: any, ...aArgs: any[]): number;
export function requestIdleCallback(aCallback: any, aOptions: any): number;
export function cancelIdleCallback(aId: any): void;
export function clearInterval(aId: any): void;
export function clearTimeout(aId: any): void;
