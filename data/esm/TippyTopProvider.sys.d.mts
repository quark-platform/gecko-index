export function getDomain(url: any, strip?: string): string;
export class TippyTopProvider {
    _sitesByDomain: Map<any, any>;
    initialized: boolean;
    init(): Promise<void>;
    processSite(site: any, strip: any): any;
}
