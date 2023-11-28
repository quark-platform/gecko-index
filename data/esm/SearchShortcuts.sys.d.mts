export function getSearchProvider(candidateShortURL: any): {
    keyword: string;
    shortURL: string;
    url: string;
};
export function getSearchFormURL(keyword: any): Promise<any>;
export function checkHasSearchEngine(keyword: any): Promise<boolean>;
export const SEARCH_SHORTCUTS: {
    keyword: string;
    shortURL: string;
    url: string;
}[];
export const CUSTOM_SEARCH_SHORTCUTS: {
    keyword: string;
    shortURL: string;
    url: string;
}[];
export const SEARCH_SHORTCUTS_EXPERIMENT: "improvesearch.topSiteSearchShortcuts";
export const SEARCH_SHORTCUTS_SEARCH_ENGINES_PREF: "improvesearch.topSiteSearchShortcuts.searchEngines";
export const SEARCH_SHORTCUTS_HAVE_PINNED_PREF: "improvesearch.topSiteSearchShortcuts.havePinned";
