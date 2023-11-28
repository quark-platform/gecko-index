export class ClientEnvironment {
    /**
     * Fetches information about the client that is calculated on the server,
     * like geolocation and the current time.
     *
     * The server request is made lazily and is cached for the entire browser
     * session.
     */
    static getClientClassification(): Promise<any>;
    static clearClassifyCache(): void;
    /**
     * Test wrapper that mocks the server request for classifying the client.
     * @param  {Object}   data          Fake server data to use
     * @param  {Function} testFunction  Test function to execute while mock data is in effect.
     */
    static withMockClassify(data: any, testFunction: Function): () => Promise<void>;
    static get userId(): any;
    static get country(): Promise<any>;
    static get request_time(): Promise<any>;
    static get experiments(): Promise<{
        all: any[];
        active: any[];
        expired: any[];
    }>;
    static get studies(): Promise<{
        pref: {};
        addon: {};
    }>;
    static get rollouts(): Promise<{
        pref: {};
        addon: {};
    }>;
    static get isFirstRun(): any;
}
   isWindows: boolean;
        isMac: boolean;
        isLinux: boolean;
        readonly windowsVersion: any;
        /**
         * Gets the windows build number by querying the OS directly. The initial
         * version was copied from toolkit/components/telemetry/app/TelemetryEnvironment.jsm
         * @returns {number | null} The build number, or null on non-Windows platform or if there is an error.
         */
        readonly windowsBuildNumber: number;
        readonly macVersion: number;
        readonly darwinVersion: any;
    };
    static get attribution(): any;
    static get appinfo(): any;
}
