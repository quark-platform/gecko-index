export namespace print {
    namespace defaults {
        namespace page {
            let width: number;
            let height: number;
        }
        namespace margin {
            let top: number;
            let bottom: number;
            let left: number;
            let right: number;
        }
        let orientationValue: string[];
    }
    function addDefaultSettings(settings: any): {
        background: any;
        margin: any;
        orientation: any;
        page: any;
        pageRanges: any;
        scale: any;
        shrinkToFit: any;
    };
    function getPrintSettings(settings: any): any;
    function printToBinaryString(browsingContext: any, printSettings: any): Promise<any>;
}
