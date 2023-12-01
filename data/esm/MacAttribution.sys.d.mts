export namespace MacAttribution {
    const applicationPath: any;
    function setAttributionString(aAttrStr: any, path?: any): Promise<undefined>;
    function getAttributionString(path?: any): Promise<string>;
    function delAttributionString(path?: any): Promise<undefined>;
}
