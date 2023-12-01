export namespace LoginTestUtils {
    namespace testData {
        /**
         * Returns a new nsILoginInfo for use with form submits.
         *
         * @param modifications
         *        Each property of this object replaces the property of the same name
         *        in the returned nsILoginInfo or nsILoginMetaInfo.
         */
        function formLogin(modifications: any): unknown;
        /**
         * Returns a new nsILoginInfo for use with HTTP authentication.
         *
         * @param modifications
         *        Each property of this object replaces the property of the same name
         *        in the returned nsILoginInfo or nsILoginMetaInfo.
         */
        function authLogin(modifications: any): unknown;
        /**
         * Returns an array of typical nsILoginInfo that could be stored in the
         * database.
         */
        function loginList(): unknown[];
    }
    namespace recipes {
        function getRecipeParent(): any;
    }
    namespace primaryPassword {
        let primaryPassword_1: string;
        export { primaryPassword_1 as primaryPassword };
        export function _set(enable: any, stayLoggedIn: any): void;
        export function enable(stayLoggedIn?: boolean): void;
        export function disable(): void;
    }
    namespace loginField {
        function checkPasswordMasked(field: any, expected: any, msg: any): void;
    }
    namespace generation {
        let LENGTH: number;
        let REGEX: RegExp;
    }
    namespace telemetry {
        function waitForEventCount(count: any, process?: string, category?: string, method?: any): Promise<any>;
    }
    namespace file {
        /**
         * Given an array of strings it creates a temporary CSV file that has them as content.
         *
         * @param {string[]} csvLines
         *        The lines that make up the CSV file.
         * @param {string} extension
         *        Optional parameter. Either 'csv' or 'tsv'. Default is 'csv'.
         * @returns {window.File} The File to the CSV file that was created.
         */
        function setupCsvFileWithLines(csvLines: string[], extension?: string): window.File;
    }
    namespace remoteSettings {
        let relatedRealmsCollection: string;
        function setupWebsitesWithSharedCredentials(relatedRealms?: string[][]): Promise<void>;
        function cleanWebsitesWithSharedCredentials(): Promise<void>;
        let improvedPasswordRulesCollection: string;
        function setupImprovedPasswordRules(origin?: string, rules?: string): Promise<void>;
        function cleanImprovedPasswordRules(): Promise<void>;
    }
}
