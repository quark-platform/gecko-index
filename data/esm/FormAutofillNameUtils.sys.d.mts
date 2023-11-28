export namespace FormAutofillNameUtils {
    let NAME_PREFIXES: string[];
    let NAME_SUFFIXES: string[];
    let FAMILY_NAME_PREFIXES: string[];
    let COMMON_CJK_MULTI_CHAR_SURNAMES: string[];
    let KOREAN_MULTI_CHAR_SURNAMES: string[];
    let WHITESPACE: string[];
    let MIDDLE_DOT: string[];
    let CJK_RANGE: string[];
    let HANGUL_RANGE: string[];
    let _dataLoaded: boolean;
    function _containsString(set: any, token: any): any;
    function _stripPrefixes(nameTokens: any): any;
    function _stripSuffixes(nameTokens: any): any;
    function _isCJKName(name: any): boolean;
    function _splitCJKName(nameTokens: any): {
        given: string;
        middle: string;
        family: string;
    };
    function init(): void;
    function splitName(name: any): {
        given: string;
        middle: string;
        family: string;
    };
    function joinNameParts({ given, middle, family }: {
        given: any;
        middle: any;
        family: any;
    }): any;
}
