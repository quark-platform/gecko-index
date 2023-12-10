export namespace HeuristicsRegExp {
    let RULES: {
        email: any;
        tel: any;
        organization: any;
        "street-address": any;
        "address-line1": any;
        "address-line2": any;
        "address-line3": any;
        "address-level2": any;
        "address-level1": any;
        "postal-code": any;
        country: any;
        "cc-name": any;
        name: any;
        "given-name": any;
        "additional-name": any;
        "family-name": any;
        "cc-csc": any;
        "cc-number": any;
        "cc-exp-month": any;
        "cc-exp-year": any;
        "cc-exp": any;
        "cc-type": any;
    };
    let LABEL_RULES: {
        "address-line1": any;
        "address-line2": any;
    };
    let RULE_SETS: ({
        "address-line1": string;
        "address-line2": string;
        "address-line3": string;
        "address-level1": string;
        "additional-name": string;
        "cc-name": string;
        "cc-number": string;
        "cc-exp": string;
        "cc-exp-month": string;
        "cc-exp-year": string;
        "cc-type": string;
        "cc-csc": string;
        email?: undefined;
        tel?: undefined;
        organization?: undefined;
        "street-address"?: undefined;
        "address-level2"?: undefined;
        "postal-code"?: undefined;
        country?: undefined;
        name?: undefined;
        "given-name"?: undefined;
        "family-name"?: undefined;
    } | {
        email: string;
        tel: string;
        organization: string;
        "street-address": string;
        "address-line1": string;
        "address-line2": string;
        "address-line3": string;
        "address-level2": string;
        "address-level1": string;
        "postal-code": string;
        country: string;
        name: string;
        "given-name": string;
        "additional-name": string;
        "family-name": string;
        "cc-name": string;
        "cc-number": string;
        "cc-exp": string;
        "cc-exp-month": string;
        "cc-exp-year": string;
        "cc-type": string;
        "cc-csc"?: undefined;
    } | {
        email: string;
        tel: string;
        organization: string;
        "street-address": string;
        "address-line1": string;
        "address-line2": string;
        "address-line3": string;
        "address-level2": string;
        "address-level1": string;
        "postal-code": string;
        country: string;
        "cc-name": string;
        name: string;
        "given-name": string;
        "additional-name": string;
        "family-name": string;
        "cc-number": string;
        "cc-exp-month": string;
        "cc-exp-year": string;
        "cc-exp": string;
        "cc-csc": string;
        "cc-type"?: undefined;
    })[];
    let LABEL_RULE_SETS: ({
        "address-line1": string;
        "address-line2"?: undefined;
    } | {
        "address-line2": string;
        "address-line1"?: undefined;
    })[];
    function _getRules(rules: any, rulesets: any): any;
    function getLabelRules(): any;
    function getRules(): any;
}
export default HeuristicsRegExp;