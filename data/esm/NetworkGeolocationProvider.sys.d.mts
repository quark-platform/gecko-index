export function NetworkGeolocationProvider(): void;
export class NetworkGeolocationProvider {
    wifiService: any;
    timer: any;
    started: boolean;
    classID: any;
    name: string;
    QueryInterface: any;
    listener: null;
    get isWifiScanningEnabled(): any;
    resetTimer(): void;
    startup(): void;
    watch(c: any): void;
    shutdown(): void;
    setHighAccuracy(enable: any): void;
    onChange(accessPoints: any): void;
    onError(code: any): void;
    onStatus(err: any, statusMessage: any): void;
    notify(timer: any): void;
    /**
     * After wifi (and possible cell tower) data has been gathered, this method is
     * invoked to perform the request to network geolocation provider.
     * The result of each request is sent to all registered listener (@see watch)
     * by invoking its respective `update`, `notifyError` or `notifyStatus`
     * callbacks.
     * `update` is called upon a successful request with its response data; this will be a `NetworkGeoPositionObject` instance.
     * `notifyError` is called whenever the request gets an error from the local
     * network subsystem, the server or simply times out.
     * `notifyStatus` is called for each status change of the request that may be
     * of interest to the consumer of this class. Currently the following status
     * changes are reported: 'xhr-start', 'xhr-timeout', 'xhr-error' and
     * 'xhr-empty'.
     *
     * @param  {Array} wifiData Optional set of publicly available wifi networks
     *                          in the following structure:
     *                          <code>
     *                          [
     *                            { macAddress: <mac1>, signalStrength: <signal1> },
     *                            { macAddress: <mac2>, signalStrength: <signal2> }
     *                          ]
     *                          </code>
     */
    sendLocationRequest(wifiData: any[]): Promise<void>;
    makeRequest(url: any, wifiData: any): Promise<any>;
}
