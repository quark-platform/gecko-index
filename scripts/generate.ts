import { join, resolve } from "path";
import glob from "tiny-glob";
import {
  parse,
  NamespaceType,
  IDLTypeDescription,
  IDLNamespaceMemberType,
  Token,
} from "webidl2";
import { readFile } from "fs/promises";
import { writeFileSync } from "fs";

if (process.argv.length == 1) {
  throw new Error("Expected path to gecko-dev to be provided as the first arg");
}

const geckoDevDir = resolve(process.argv[2]);

const voidInterfaceFilter = /interface \w*;/;
const replaceContentsNewline = /,\n(\n|.)*?\]/gm;

const namespaces = new Map<string, NamespaceType[]>();

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

  const parsed = parse(contents);

  for (const idlItem of parsed) {
    if (idlItem.type == "namespace") {
      namespaces.set(idlItem.name, [
        ...(namespaces.get(idlItem.name) || []),
        idlItem,
      ]);
    }
  }
}

interface NamespaceItem {
  name: string;
  trivia: string;
}

interface NamespaceAttribute extends NamespaceItem {
  type: "attribute";
  readonly: boolean;
  valueType: IDLTypeDescription;
}

interface NamespaceMethod extends NamespaceItem {
  type: "method";
  special: "static" | "stringifier" | null;
  return: IDLTypeDescription;
}

type namespaceRecord = {
  attributes: NamespaceAttribute[];
  methods: NamespaceMethod[];
};

function cleanUpComment(comment: string): string {
  comment = comment
    .split("\n")
    .filter((line) => !line.includes("//#")) // Ignore preprocessor lines
    .join("\n")
    .trim();

  if (comment.startsWith("/**")) {
    comment = comment.replace("/**", "").replace("*/", "");
    comment = comment.replace(/\n\s*\*/gm, "\n");
  }

  if (comment.startsWith("//")) {
    comment = comment.replace(/\n\s*\/\//gm, "\n").replace("//", "");
  }

  return comment
    .split("\n")
    .map((line) => line.trim())
    .join("\n")
    .trim();
}

function getMemberTrivia(member: IDLNamespaceMemberType): string {
  const { tokens } = member.extAttrs as any;
  let trivia = "";

  for (const token in tokens) {
    const value = tokens[token] as Token;

    if (!value || !value.trivia) continue;

    // If it doesn't just contain white space
    if (!!value.trivia.replace(/\s/g, "").length) {
      trivia += cleanUpComment(value.trivia);
    }
  }

  return trivia;
}

let namespacesJson: Record<string, namespaceRecord> = {};

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
          attributes.push({
            type: "attribute",
            name: item.name,
            readonly: item.readonly,
            valueType: item.idlType,
            trivia: getMemberTrivia(item),
          });
          break;

        case "operation":
          // Setters, getters and deleters should be stored as properties rather
          // than as methods
          if (
            item.special === "getter" ||
            item.special === "setter" ||
            item.special === "deleter"
          ) {
            // If the attribute already exists, we should skip it
            if (attributes.find((attr) => attr.name == item.name)) {
              break;
            }

            attributes.push({
              type: "attribute",
              name: item.name || "unknownMember",
              readonly: false,
              valueType: item.idlType as any,
              trivia: getMemberTrivia(item),
            });
            break;
          }

          // Otherwise it should be added as a method
          methods.push({
            type: "method",
            name: item.name || "unknownMethod",
            special: item.special,
            return: item.idlType as any,
            trivia: getMemberTrivia(item),
          });

          break;
      }
    }

    namespacesJson[namespace] = {
      attributes,
      methods,
    };
  }
}

writeFileSync("./namespaces.json", JSON.stringify(namespacesJson, null, 2));
