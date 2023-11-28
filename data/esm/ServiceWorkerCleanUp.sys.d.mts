export namespace ServiceWorkerCleanUp {
    function removeFromHost(aHost: any): Promise<any[]>;
    function removeFromBaseDomain(aBaseDomain: any): Promise<any[]>;
    function removeFromPrincipal(aPrincipal: any): Promise<any[]>;
    function removeFromOriginAttributes(aOriginAttributesString: any): Promise<void>;
    function removeAll(): Promise<any[]>;
}
