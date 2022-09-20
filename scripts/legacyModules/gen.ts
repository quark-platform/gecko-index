import { execa } from "execa";
import { readFile, writeFile } from "fs/promises";
import { basename, extname } from "path";
import { file } from "tmp-promise";
import { waitForThread } from "../shared/thread.js";
import { normalizeMozillaJS } from "./normalizeMozilla.js";

export interface ModuleInfo {
  name: string;
  exportedSymbols: string[];
  jsDoc: any[];
}

/**
 * Gecko's legacy modules use a variable named `EXPORTED_SYMBOLS` to define the
 * symbols that a module should export
 *
 * Within this regex, the group at the second index will contain the symbols
 * surrounded by quotes and separated by commas
 */
const exportedSymbolRegex =
  /(var|let|const) EXPORTED_SYMBOLS = \[(.*)\](;|\n)/gm;

export async function parseLegacyModule(
  filePath: string,
  contents: string
): Promise<ModuleInfo> {
  const fileName = basename(filePath, extname(filePath));

  const exportedSymbols = (exportedSymbolRegex.exec(contents) || [
    "",
    "",
    "",
  ])[2]
    .replace(/"|'/g, "")
    .split(",")
    .map((s) => s.trim());

  return {
    name: fileName,
    exportedSymbols,
    jsDoc: await jsdocSingleFile(filePath),
  };
}

async function jsdocSingleFile(filePath: string): Promise<any[]> {
  let releaseThread;

  try {
    // We need to normalize the code so jsdoc doesn't throw errors. Currently, I
    // am creating a copy of the file in /tmp/ with the changes so jsdoc can
    // reference it
    const { path: validJSPath, cleanup } = await file({ postfix: ".js" });
    await writeFile(
      validJSPath,
      `// Original file: ${filePath}}\n` +
        normalizeMozillaJS(await readFile(filePath, "utf8"))
    );

    releaseThread = await waitForThread();
    const { stdout } = await execa("jsdoc", [
      "-X",
      validJSPath,
      "-c",
      "jsdoc.json",
    ]);

    releaseThread();
    releaseThread = null;

    await cleanup();

    let out = [];

    out = JSON.parse(stdout);

    return out;
  } catch (e) {
    console.error((e as any).stderr);

    // We need to release this async "thread" after an error, or else the thread
    // pool will just get smaller and smaller...
    if (releaseThread) releaseThread();

    return [];
  }
}
