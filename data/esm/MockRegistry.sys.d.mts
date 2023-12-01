export class MockRegistry {
    roots: Map<2147483650 | 2147483649 | 2147483648, Map<any, any>>;
    oldSuffixListPref: boolean;
    oldCheckForProxiesPref: boolean;
    oldCheckForNRPTPref: boolean;
    cid: any;
    shutdown(): void;
    getRoot(root: any): Map<any, any>;
    setValue(root: any, path: any, name: any, value: any): void;
}
