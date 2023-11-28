export namespace DownloadUtils {
    function getDownloadStatus(aCurrBytes: any, aMaxBytes: any, aSpeed: any, aLastSec: any): any[];
    function getDownloadStatusNoRate(aCurrBytes: any, aMaxBytes: any, aSpeed: any, aLastSec: any): any[];
    function _deriveTransferRate(aCurrBytes: any, aMaxBytes: any, aSpeed: any, aLastSec: any): any[];
    function getTransferTotal(aCurrBytes: any, aMaxBytes: any): any;
    function getTimeLeft(aSeconds: any, aLastSec: any): any[];
    function getReadableDates(aDate: any, aNow: any): any[];
    function getURIHost(aURIString: any): any[];
    function convertByteUnits(aBytes: any): any[];
    function convertTimeUnits(aSecs: any): any[];
    function getFormattedTimeStatus(aSeconds: any): {
        l10n: {
            id: string;
            args?: undefined;
        } | {
            id: string;
            args: {
                seconds: any;
                minutes?: undefined;
                hours?: undefined;
            };
        } | {
            args: {
                seconds: number;
                minutes: number;
                hours?: undefined;
            };
            id: string;
        } | {
            args: {
                minutes: number;
                seconds?: undefined;
                hours?: undefined;
            };
            id: string;
        } | {
            args: {
                hours: number;
                minutes: number;
                seconds?: undefined;
            };
            id: string;
        };
    };
}
