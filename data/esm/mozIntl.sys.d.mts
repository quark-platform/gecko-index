export class MozIntl {
    Collator: {
        (locales?: string | string[], options?: Intl.CollatorOptions): Intl.Collator;
        new (locales?: string | string[], options?: Intl.CollatorOptions): Intl.Collator;
        supportedLocalesOf(locales: string | string[], options?: Intl.CollatorOptions): string[];
    };
    ListFormat: any;
    Locale: new (tag: string | Intl.Locale, options?: Intl.LocaleOptions) => Intl.Locale;
    NumberFormat: {
        (locales?: string | string[], options?: Intl.NumberFormatOptions): Intl.NumberFormat;
        new (locales?: string | string[], options?: Intl.NumberFormatOptions): Intl.NumberFormat;
        supportedLocalesOf(locales: string | string[], options?: Intl.NumberFormatOptions): string[];
        readonly prototype: Intl.NumberFormat;
    };
    PluralRules: {
        (locales?: string | string[], options?: Intl.PluralRulesOptions): Intl.PluralRules;
        new (locales?: string | string[], options?: Intl.PluralRulesOptions): Intl.PluralRules;
        supportedLocalesOf(locales: string | string[], options?: {
            localeMatcher?: "lookup" | "best fit";
        }): string[];
    };
    RelativeTimeFormat: typeof MozRelativeTimeFormat;
    _cache: {};
    observe(): void;
    getCalendarInfo(locales: any, ...args: any[]): any;
    getDisplayNamesDeprecated(locales: any, options?: {}): {
        locale: any;
        type: any;
        style: any;
        calendar: any;
        values: any;
    };
    getAvailableLocaleDisplayNames(type: any): any[] | Error;
    getLanguageDisplayNames(locales: any, langCodes: any): any;
    getRegionDisplayNames(locales: any, regionCodes: any): any;
    getLocaleDisplayNames(locales: any, localeCodes: any, options?: {}): any;
    getScriptDirection(locale: any): "ltr" | "rtl";
    get DateTimeFormat(): any;
    get DisplayNames(): any;
    classID: unknown;
    QueryInterface: MozQueryInterface;
}
declare class MozRelativeTimeFormat extends Intl.RelativeTimeFormat {
    constructor(locales: any, options?: {}, ...args: any[]);
    formatBestUnit(date: any, { now }?: {
        now?: Date;
    }): string;
}
export {};
