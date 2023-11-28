export class MockRegistry {
    roots: Map<any, Map<any, any>>;
    oldSuffixListPref: any;
    oldCheckForProxiesPref: any;
    oldCheckForNRPTPref: any;
    cid: any;
    shutdown(): void;
    getRoot(root: any): Map<any, any>;
    setValue(root: any, path: any, name: any, value: any): void;
}
