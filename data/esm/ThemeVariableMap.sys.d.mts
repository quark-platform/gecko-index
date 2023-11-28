export const ThemeVariableMap: ((string | {
    lwtProperty: string;
})[] | (string | {
    isColor: boolean;
    lwtProperty: string;
})[] | (string | {
    lwtProperty: string;
    optionalElementID: string;
})[] | (string | {
    lwtProperty: string;
    processColor(rgbaChannels: any): string;
})[])[];
export const ThemeContentPropertyList: string[];
