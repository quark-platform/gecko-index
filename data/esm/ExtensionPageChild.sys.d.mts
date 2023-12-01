/// <reference types="gecko-types" />
export function getContextChildManagerGetter({ envType }: {
    envType: any;
}, ChildAPIManagerClass?: typeof ExtensionChild.ChildAPIManager): () => ExtensionChild.ChildAPIManager;
export const ExtensionPageChild: any;
import { ExtensionChild } from "resource://gre/modules/ExtensionChild.sys.mjs";
