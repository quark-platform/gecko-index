export function resolveURI(id: any, mapping: any): any;
export function Require(loader: any, requirer: any): {
    (id: any): any;
    resolve: (id: any) => any;
    context(prefix: any): (id: any) => any;
};
export function Module(id: any, uri: any): any;
export function unload(loader: any, reason: any): void;
export function Loader(options: any): any;
