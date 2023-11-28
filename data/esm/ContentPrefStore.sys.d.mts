export function ContentPrefStore(): void;
export class ContentPrefStore {
    _groups: Map<any, any>;
    _globalNames: Map<any, any>;
    set: (group: any, name: any, val: any) => void;
    setWithCast: (group: any, name: any, val: any) => void;
    has: (group: any, name: any) => any;
    get: (group: any, name: any) => any;
    remove: (group: any, name: any) => void;
    removeGroup: (group: any) => void;
    removeAllGroups: () => void;
    removeAll: () => void;
    groupsMatchIncludingSubdomains: (group: any, group2: any) => boolean;
    match(group: any, name: any, includeSubdomains: any): Generator<any[], void, unknown>;
    matchGroups(group: any, includeSubdomains: any): Generator<any, void, unknown>;
}
