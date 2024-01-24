/**
 * insertPinned - Inserts pinned links in their specified slots
 *
 * @param {array} a list of links
 * @param {array} a list of pinned links
 * @return {array} resulting list of links with pinned links inserted
 */
export function insertPinned(links: any, pinned: any): any[];
export const TOP_SITES_DEFAULT_ROWS: 1;
export const TOP_SITES_MAX_SITES_PER_ROW: 8;
export namespace INITIAL_STATE {
    namespace App {
        let initialized: boolean;
        let locale: string;
        let isForStartupCache: boolean;
        let customizeMenuVisible: boolean;
    }
    namespace ASRouter {
        let initialized_1: boolean;
        export { initialized_1 as initialized };
    }
    namespace TopSites {
        let initialized_2: boolean;
        export { initialized_2 as initialized };
        export let rows: any[];
        export let editForm: any;
        export let showSearchShortcutsForm: boolean;
        export let searchShortcuts: any[];
        export namespace sov {
            let ready: boolean;
            let positions: any[];
        }
    }
    namespace Prefs {
        let initialized_3: boolean;
        export { initialized_3 as initialized };
        export namespace values {
            let featureConfig: {};
        }
    }
    namespace Dialog {
        let visible: boolean;
        let data: {};
    }
    let Sections: any[];
    namespace Pocket {
        let isUserLoggedIn: any;
        let pocketCta: {};
        let waitingForSpoc: boolean;
    }
    namespace DiscoveryStream {
        export namespace config {
            let enabled: boolean;
        }
        export let layout: any[];
        export let isPrivacyInfoModalVisible: boolean;
        export let isCollectionDismissible: boolean;
        export namespace feeds {
            let data_1: {};
            export { data_1 as data };
            export let loaded: boolean;
        }
        export namespace spocs {
            export let spocs_endpoint: string;
            export let lastUpdated: any;
            let data_2: {};
            export { data_2 as data };
            let loaded_1: boolean;
            export { loaded_1 as loaded };
            export let frequency_caps: any[];
            export let blocked: any[];
            export let placements: any[];
        }
        export namespace experimentData {
            let utmSource: string;
            let utmCampaign: any;
            let utmContent: any;
        }
        export let recentSavesData: any[];
        let isUserLoggedIn_1: boolean;
        export { isUserLoggedIn_1 as isUserLoggedIn };
        export let recentSavesEnabled: boolean;
    }
    namespace Personalization {
        let lastUpdated_1: any;
        export { lastUpdated_1 as lastUpdated };
        let initialized_4: boolean;
        export { initialized_4 as initialized };
    }
    namespace Search {
        let fakeFocus: boolean;
        let hide: boolean;
    }
}
export namespace reducers {
    export { TopSites };
    export { App };
    export { ASRouter };
    export { Prefs };
    export { Dialog };
    export { Sections };
    export { Pocket };
    export { Personalization };
    export { DiscoveryStream };
    export { Search };
}
declare function TopSites_1(prevState: {
    initialized: boolean;
    rows: any[];
    editForm: any;
    showSearchShortcutsForm: boolean;
    searchShortcuts: any[];
    sov: {
        ready: boolean;
        positions: any[];
    };
}, action: any): {
    searchShortcuts: any;
    initialized: boolean;
    rows: any[];
    editForm: any;
    showSearchShortcutsForm: boolean;
    sov: {
        ready: boolean;
        positions: any[];
    };
} | {
    sov: {
        ready: any;
        positions: any;
    };
    initialized: boolean;
    rows: any[];
    editForm: any;
    showSearchShortcutsForm: boolean;
    searchShortcuts: any[];
};
declare function App_1(prevState: {
    initialized: boolean;
    locale: string;
    isForStartupCache: boolean;
    customizeMenuVisible: boolean;
}, action: any): any;
declare function ASRouter_1(prevState: {
    initialized: boolean;
}, action: any): any;
declare function Prefs_1(prevState: {
    initialized: boolean;
    values: {
        featureConfig: {};
    };
}, action: any): {
    initialized: boolean;
    values: {
        featureConfig: {};
    };
};
declare function Dialog_1(prevState: {
    visible: boolean;
    data: {};
}, action: any): {
    visible: boolean;
    data: {};
};
declare function Sections_1(prevState: any[], action: any): any[];
declare function Pocket_1(prevState: {
    isUserLoggedIn: any;
    pocketCta: {};
    waitingForSpoc: boolean;
}, action: any): {
    waitingForSpoc: any;
    isUserLoggedIn: any;
    pocketCta: {};
};
declare function Personalization_1(prevState: {
    lastUpdated: any;
    initialized: boolean;
}, action: any): {
    lastUpdated: any;
    initialized: boolean;
};
declare function DiscoveryStream_1(prevState: {
    config: {
        enabled: boolean;
    };
    layout: any[];
    isPrivacyInfoModalVisible: boolean;
    isCollectionDismissible: boolean;
    feeds: {
        data: {};
        loaded: boolean;
    };
    spocs: {
        spocs_endpoint: string;
        lastUpdated: any;
        data: {};
        loaded: boolean;
        frequency_caps: any[];
        blocked: any[];
        placements: any[];
    };
    experimentData: {
        utmSource: string;
        utmCampaign: any;
        utmContent: any;
    };
    recentSavesData: any[];
    isUserLoggedIn: boolean;
    recentSavesEnabled: boolean;
}, action: any): {
    config: any;
    layout: any[];
    isPrivacyInfoModalVisible: boolean;
    isCollectionDismissible: boolean;
    feeds: {
        data: {};
        loaded: boolean;
    };
    spocs: {
        spocs_endpoint: string;
        lastUpdated: any;
        data: {};
        loaded: boolean;
        frequency_caps: any[];
        blocked: any[];
        placements: any[];
    };
    experimentData: {
        utmSource: string;
        utmCampaign: any;
        utmContent: any;
    };
    recentSavesData: any[];
    isUserLoggedIn: boolean;
    recentSavesEnabled: boolean;
} | {
    experimentData: any;
    config: {
        enabled: boolean;
    };
    layout: any[];
    isPrivacyInfoModalVisible: boolean;
    isCollectionDismissible: boolean;
    feeds: {
        data: {};
        loaded: boolean;
    };
    spocs: {
        spocs_endpoint: string;
        lastUpdated: any;
        data: {};
        loaded: boolean;
        frequency_caps: any[];
        blocked: any[];
        placements: any[];
    };
    recentSavesData: any[];
    isUserLoggedIn: boolean;
    recentSavesEnabled: boolean;
} | {
    layout: any;
    config: {
        enabled: boolean;
    };
    isPrivacyInfoModalVisible: boolean;
    isCollectionDismissible: boolean;
    feeds: {
        data: {};
        loaded: boolean;
    };
    spocs: {
        spocs_endpoint: string;
        lastUpdated: any;
        data: {};
        loaded: boolean;
        frequency_caps: any[];
        blocked: any[];
        placements: any[];
    };
    experimentData: {
        utmSource: string;
        utmCampaign: any;
        utmContent: any;
    };
    recentSavesData: any[];
    isUserLoggedIn: boolean;
    recentSavesEnabled: boolean;
} | {
    isCollectionDismissible: any;
    config: {
        enabled: boolean;
    };
    layout: any[];
    isPrivacyInfoModalVisible: boolean;
    feeds: {
        data: {};
        loaded: boolean;
    };
    spocs: {
        spocs_endpoint: string;
        lastUpdated: any;
        data: {};
        loaded: boolean;
        frequency_caps: any[];
        blocked: any[];
        placements: any[];
    };
    experimentData: {
        utmSource: string;
        utmCampaign: any;
        utmContent: any;
    };
    recentSavesData: any[];
    isUserLoggedIn: boolean;
    recentSavesEnabled: boolean;
} | {
    recentSavesEnabled: any;
    pocketButtonEnabled: any;
    saveToPocketCard: any;
    hideDescriptions: any;
    compactImages: any;
    imageGradient: any;
    newSponsoredLabel: any;
    titleLines: any;
    descLines: any;
    readTime: any;
    config: {
        enabled: boolean;
    };
    layout: any[];
    isPrivacyInfoModalVisible: boolean;
    isCollectionDismissible: boolean;
    feeds: {
        data: {};
        loaded: boolean;
    };
    spocs: {
        spocs_endpoint: string;
        lastUpdated: any;
        data: {};
        loaded: boolean;
        frequency_caps: any[];
        blocked: any[];
        placements: any[];
    };
    experimentData: {
        utmSource: string;
        utmCampaign: any;
        utmContent: any;
    };
    recentSavesData: any[];
    isUserLoggedIn: boolean;
} | {
    recentSavesData: any;
    config: {
        enabled: boolean;
    };
    layout: any[];
    isPrivacyInfoModalVisible: boolean;
    isCollectionDismissible: boolean;
    feeds: {
        data: {};
        loaded: boolean;
    };
    spocs: {
        spocs_endpoint: string;
        lastUpdated: any;
        data: {};
        loaded: boolean;
        frequency_caps: any[];
        blocked: any[];
        placements: any[];
    };
    experimentData: {
        utmSource: string;
        utmCampaign: any;
        utmContent: any;
    };
    isUserLoggedIn: boolean;
    recentSavesEnabled: boolean;
} | {
    isUserLoggedIn: any;
    config: {
        enabled: boolean;
    };
    layout: any[];
    isPrivacyInfoModalVisible: boolean;
    isCollectionDismissible: boolean;
    feeds: {
        data: {};
        loaded: boolean;
    };
    spocs: {
        spocs_endpoint: string;
        lastUpdated: any;
        data: {};
        loaded: boolean;
        frequency_caps: any[];
        blocked: any[];
        placements: any[];
    };
    experimentData: {
        utmSource: string;
        utmCampaign: any;
        utmContent: any;
    };
    recentSavesData: any[];
    recentSavesEnabled: boolean;
} | {
    spocs: {
        spocs_endpoint: any;
        lastUpdated: any;
        data: {};
        loaded: boolean;
        frequency_caps: any[];
        blocked: any[];
        placements: any[];
    };
    config: {
        enabled: boolean;
    };
    layout: any[];
    isPrivacyInfoModalVisible: boolean;
    isCollectionDismissible: boolean;
    feeds: {
        data: {};
        loaded: boolean;
    };
    experimentData: {
        utmSource: string;
        utmCampaign: any;
        utmContent: any;
    };
    recentSavesData: any[];
    isUserLoggedIn: boolean;
    recentSavesEnabled: boolean;
} | {
    spocs: {
        placements: any;
        spocs_endpoint: string;
        lastUpdated: any;
        data: {};
        loaded: boolean;
        frequency_caps: any[];
        blocked: any[];
    };
    config: {
        enabled: boolean;
    };
    layout: any[];
    isPrivacyInfoModalVisible: boolean;
    isCollectionDismissible: boolean;
    feeds: {
        data: {};
        loaded: boolean;
    };
    experimentData: {
        utmSource: string;
        utmCampaign: any;
        utmContent: any;
    };
    recentSavesData: any[];
    isUserLoggedIn: boolean;
    recentSavesEnabled: boolean;
} | {
    spocs: {
        lastUpdated: any;
        data: any;
        loaded: boolean;
        spocs_endpoint: string;
        frequency_caps: any[];
        blocked: any[];
        placements: any[];
    };
    config: {
        enabled: boolean;
    };
    layout: any[];
    isPrivacyInfoModalVisible: boolean;
    isCollectionDismissible: boolean;
    feeds: {
        data: {};
        loaded: boolean;
    };
    experimentData: {
        utmSource: string;
        utmCampaign: any;
        utmContent: any;
    };
    recentSavesData: any[];
    isUserLoggedIn: boolean;
    recentSavesEnabled: boolean;
};
declare function Search_1(prevState: {
    fakeFocus: boolean;
    hide: boolean;
}, action: any): any;
export {};
