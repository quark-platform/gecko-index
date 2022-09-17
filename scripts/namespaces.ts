import { join, resolve } from "path";
import glob from "tiny-glob";
import {
  parse,
  NamespaceType,
  IDLTypeDescription,
  IDLNamespaceMemberType,
  Token,
  AttributeMemberType,
} from "webidl2";
import { mkdir, readFile } from "fs/promises";
import { existsSync, readFileSync, writeFileSync } from "fs";
import {
  ChangeMetadata,
  getIntroduced,
  getMemberTrivia,
  getNamespaces,
  merge,
  NamespaceAttribute,
  NamespaceChangeRecord,
  NamespaceItem,
  NamespaceMethod,
  NamespaceRecord,
} from "./shared/namespaces.js";

if (process.argv.length == 1) {
  throw new Error("Expected path to gecko-dev to be provided as the first arg");
}

// Assorted constants related to the input and output
const geckoDevDir = resolve(process.argv[2]);
const geckoVersion = readFileSync(
  resolve(geckoDevDir, "browser", "config", "version.txt"),
  { encoding: "utf8" }
).trim();
const outFolder = resolve(process.cwd(), "data", "namespaces");

await mkdir(outFolder, { recursive: true });

// =============================================================================
// Generate the namespace index

const namespaces = await getNamespaces(geckoDevDir);

var {
  indexOutputLocation,
  namespacesJson,
  originalJSON,
}: {
  indexOutputLocation: string;
  namespacesJson: Record<string, NamespaceRecord>;
  originalJSON: Record<string, NamespaceRecord>;
} = generateNamespaceIndex();

writeFileSync(indexOutputLocation, JSON.stringify(namespacesJson, null, 2));

// =============================================================================
// Find the removed items

function findRemovedItems(
  oldItems: NamespaceItem[],
  newItems: NamespaceItem[],
  last: string[]
): string[] {
  let removed = [];

  for (const oldItem of oldItems) {
    const newItem = newItems.find((item) => item.name === oldItem.name);
    if (!newItem) {
      removed.push(oldItem.name);
    }
  }

  return merge(last, removed);
}

const removedAPIs = join(outFolder, "removed.json");
let removedNamespaceItems: Record<
  string,
  Record<string, NamespaceChangeRecord>
> &
  ChangeMetadata = {};

if (existsSync(removedAPIs)) {
  removedNamespaceItems = JSON.parse(
    readFileSync(removedAPIs, { encoding: "utf8" })
  );

  // Initialize the metadata if it doesn't exist
  if (!removedNamespaceItems.metadata) {
    removedNamespaceItems.metadata = {
      currentVersion: geckoVersion,
      lastVersion: geckoVersion,
    };
  }

  // If the version has changed, set the last version to the current version
  if (removedNamespaceItems.metadata.currentVersion !== geckoVersion) {
    removedNamespaceItems.metadata.lastVersion =
      removedNamespaceItems.metadata.currentVersion;
    removedNamespaceItems.metadata.currentVersion = geckoVersion;
  }
}

for (const namespaceName in namespacesJson) {
  if (!removedNamespaceItems[geckoVersion]) {
    removedNamespaceItems[geckoVersion] = {};
  }

  if (!removedNamespaceItems[geckoVersion][namespaceName]) {
    removedNamespaceItems[geckoVersion][namespaceName] = {
      methods: [],
      attributes: [],
    };
  }

  removedNamespaceItems[geckoVersion][namespaceName].methods = findRemovedItems(
    originalJSON[namespaceName]?.methods || [],
    namespacesJson[namespaceName].methods,
    removedNamespaceItems[geckoVersion][namespaceName].methods || []
  );
  removedNamespaceItems[geckoVersion][namespaceName].attributes =
    findRemovedItems(
      originalJSON[namespaceName]?.attributes || [],
      namespacesJson[namespaceName].attributes,
      removedNamespaceItems[geckoVersion][namespaceName].attributes || []
    );
}

writeFileSync(removedAPIs, JSON.stringify(removedNamespaceItems, null, 2));

// Calculate added items

function findAddedItems(
  oldItems: NamespaceItem[],
  newItems: NamespaceItem[],
  last: string[]
): string[] {
  // Added items can be done by reversing the removed items
  return findRemovedItems(newItems, oldItems, last);
}

const addedAPIs = join(outFolder, "added.json");
let addedNamespaceItems: Record<
  string,
  Record<string, NamespaceChangeRecord>
> = {};

if (existsSync(addedAPIs)) {
  addedNamespaceItems = JSON.parse(
    readFileSync(addedAPIs, { encoding: "utf8" })
  );
}

for (const namespaceName in namespacesJson) {
  if (!addedNamespaceItems[geckoVersion]) {
    addedNamespaceItems[geckoVersion] = {};
  }

  if (!addedNamespaceItems[geckoVersion][namespaceName]) {
    addedNamespaceItems[geckoVersion][namespaceName] = {
      methods: [],
      attributes: [],
    };
  }

  addedNamespaceItems[geckoVersion][namespaceName].methods = findAddedItems(
    originalJSON[namespaceName]?.methods || [],
    namespacesJson[namespaceName].methods,
    addedNamespaceItems[geckoVersion][namespaceName].methods || []
  );
  addedNamespaceItems[geckoVersion][namespaceName].attributes = findAddedItems(
    originalJSON[namespaceName]?.attributes || [],
    namespacesJson[namespaceName].attributes,
    addedNamespaceItems[geckoVersion][namespaceName].attributes || []
  );
}

writeFileSync(addedAPIs, JSON.stringify(addedNamespaceItems, null, 2));

function generateNamespaceIndex() {
  let originalJSON: Record<string, NamespaceRecord> = {};
  let namespacesJson: Record<string, NamespaceRecord> = {};
  const indexOutputLocation = join(outFolder, "namespaces.json");

  if (existsSync(indexOutputLocation)) {
    originalJSON = JSON.parse(
      readFileSync(indexOutputLocation, { encoding: "utf8" })
    );
  }

  for (const namespace of namespaces.keys()) {
    for (const namespaceObj of namespaces.get(namespace) || []) {
      if (!namespaceObj) continue;

      let attributes: NamespaceAttribute[] = [];
      let methods: NamespaceMethod[] = [];

      if (namespacesJson[namespace]) {
        attributes = namespacesJson[namespace].attributes;
        methods = namespacesJson[namespace].methods;
      }

      for (const item of namespaceObj.members) {
        switch (item.type) {
          case "attribute":
            attributes.push(
              new NamespaceAttribute(
                item,
                getIntroduced(
                  originalJSON[namespace]?.attributes,
                  item.name,
                  geckoVersion
                )
              )
            );
            break;

          case "operation":
            // Setters, getters and deleters should be stored as properties rather
            // than as methods, because that is how documentation should treat them
            if (
              item.special === "getter" ||
              item.special === "setter" ||
              item.special === "deleter"
            ) {
              // If the attribute already exists (e.g. this is a getter related to
              // an existing setter), we should skip it
              if (attributes.find((attr) => attr.name == item.name)) {
                break;
              }

              let attributeItem: AttributeMemberType = {
                ...item,
                type: "attribute",
                name: item.name || "unknownAttribute",
                special: null,
                idlType: item.idlType as IDLTypeDescription,
                parent: item.parent as any,
                inherit: false,
                readonly: false,
              };

              attributes.push(
                new NamespaceAttribute(
                  attributeItem,
                  getIntroduced(
                    originalJSON[namespace]?.attributes,
                    attributeItem.name,
                    geckoVersion
                  )
                )
              );

              break;
            }

            // Otherwise it should be added as a method
            methods.push(
              new NamespaceMethod(
                item,
                getIntroduced(
                  originalJSON[namespace]?.methods,
                  item.name || "unknownMethod",
                  geckoVersion
                )
              )
            );

            break;

          default:
            console.log("Unknown member type", (item as any).type);
            break;
        }
      }

      namespacesJson[namespace] = {
        attributes,
        methods,
      };
    }
  }
  return { indexOutputLocation, namespacesJson, originalJSON };
}
