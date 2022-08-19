import { join, resolve } from "path";
import glob from "tiny-glob";
import { parse, NamespaceType, IDLTypeDescription } from "webidl2";
import { readFile } from "fs/promises";
import { writeFileSync } from "fs";

if (process.argv.length == 1) {
  throw new Error("Expected path to gecko-dev to be provided as the first arg");
}

const geckoDevDir = resolve(process.argv[2]);

const voidInterfaceFilter = /interface \w*;/;
const replaceContentsNewline = /,\n(\n|.)*?\]/gm;

const namespaces = new Map<string, NamespaceType>();

for (const idl of await glob(join(geckoDevDir, "**/*.webidl"))) {
  // We do not care about webidl files that are in a test directory
  if (
    idl.includes("/test/") ||
    idl.includes("/tests/") ||
    idl.includes("/obj-")
  ) {
    continue;
  }

  console.log(idl);

  let contents = (await readFile(idl, "utf8"))
    .split("\n")
    .filter((line) => !voidInterfaceFilter.test(line)) // NOTE: Firefox includes empty interfaces for no apparent reason
    .map((line) => line.replace("legacycaller", "")) // NOTE: legacycaller is not needed and just causes the parser to die
    .map((line) => line.replace("#if", "//#if").replace("#e", "//#e")) // NOTE: Remove preprocessor statements
    .map((line) => line.replace("UTF8String", "DOMString")) // TODO: Is there a better replacement for UTF8String?
    .map((line) => line.replace("callback constructor", "callback")) // Firefox uses callback constructor instead of callback
    .join("\n");

  // This is a work around for some really random file formatting
  if (idl.includes("ReadableStream.webidl")) {
    contents = contents.replace(replaceContentsNewline, "]");
  }

  if (idl.includes("WebrtcGlobalInformation.webidl")) {
    contents = contents.replaceAll("  attribute", "  readonly attribute");
  }

  // .split("\n")
  // .filter((line) => !line.includes("import"))
  // .join("\n");

  // console.log(contents);
  const parsed = parse(contents);

  for (const idlItem of parsed) {
    if (idlItem.type == "namespace") {
      namespaces.set(idlItem.name, idlItem);
    }
  }
}

interface NamespaceAttribute {
  type: "attribute";
  name: string;
  readonly: boolean;
  valueType: IDLTypeDescription;
}

type namespaceRecord = {
  attributes: NamespaceAttribute[];
};

let namespacesJson: Record<string, namespaceRecord> = {};

for (const namespace of namespaces.keys()) {
  const namespaceObj = namespaces.get(namespace);
  if (!namespaceObj) continue;

  let attributes: NamespaceAttribute[] = [];

  for (const item of namespaceObj.members) {
    switch (item.type) {
      case "attribute":
        attributes.push({
          type: "attribute",
          name: item.name,
          readonly: item.readonly,
          valueType: item.idlType,
        });
        break;
    }
  }

  namespacesJson[namespace] = {
    attributes,
  };
}

writeFileSync("./namespaces.json", JSON.stringify(namespacesJson, null, 2));
