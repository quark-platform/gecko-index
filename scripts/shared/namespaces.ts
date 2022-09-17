import { join } from "path";
import glob from "tiny-glob";
import {
  parse,
  NamespaceType,
  IDLTypeDescription,
  IDLNamespaceMemberType,
  Token,
  AttributeMemberType,
  OperationMemberType,
} from "webidl2";
import { readFile } from "fs/promises";

const voidInterfaceFilter = /interface \w*;/;
const replaceContentsNewline = /,\n(\n|.)*?\]/gm;

export abstract class NamespaceItem {
  type = "abstract";

  name: string;
  trivia: string;
  introduced: string;

  constructor(object: IDLNamespaceMemberType, introduced: string) {
    this.name = object.name || "";
    this.trivia = getMemberTrivia(object);
    this.introduced = introduced;
  }
}

export class NamespaceAttribute extends NamespaceItem {
  type = "attribute";
  readonly: boolean;
  valueType: IDLTypeDescription;

  constructor(object: AttributeMemberType, introduced: string) {
    super(object, introduced);

    this.readonly = object.readonly;
    this.valueType = object.idlType;
  }
}

export class NamespaceMethod extends NamespaceItem {
  type = "method";
  special: "static" | "stringifier" | null;
  return: IDLTypeDescription;

  constructor(object: OperationMemberType, introduced: string) {
    super(object, introduced);

    if (
      object.special == "getter" ||
      object.special == "setter" ||
      object.special == "deleter"
    ) {
      throw new Error(
        "Getter, setter and deleter should not be stored as methods"
      );
    }

    this.special = object.special;
    this.return = object.idlType as any;
  }
}

export type NamespaceRecord = {
  attributes: NamespaceAttribute[];
  methods: NamespaceMethod[];
};

export type NamespaceChangeRecord = {
  attributes: string[];
  methods: string[];
};

export type ChangeMetadata = {
  metadata?: {
    currentVersion: string;
    lastVersion: string;
  };
};

export function getIntroduced(
  items: NamespaceItem[],
  name: string,
  currentGeckoVersion: string
): string {
  if (!items) return currentGeckoVersion;

  if (items.some((item) => item.name == name)) {
    return (
      items.find((item) => item.name == name)?.introduced || currentGeckoVersion
    );
  }

  return currentGeckoVersion;
}

export function merge<T>(array1: T[], array2: T[]): T[] {
  return [...new Set([...array1, ...array2])];
}

export async function getNamespaces(geckoDevDir: string) {
  const namespaces = new Map<string, NamespaceType[]>();

  // Perf: webidl files only seem to be stored in `dom/`, so we can skip the
  // rest of mozilla-central
  for (const idl of await glob(join(geckoDevDir, "dom/**/*.webidl"))) {
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

  return namespaces;
}

export function cleanUpComment(comment: string): string {
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

export function getMemberTrivia(member: IDLNamespaceMemberType): string {
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
