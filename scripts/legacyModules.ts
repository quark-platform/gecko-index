import { readFile, writeFile } from "fs/promises";
import { join } from "path";
import glob from "tiny-glob";
import { getInfo } from "./shared/general.js";
import { ModuleInfo, parseLegacyModule } from "./legacyModules/gen.js";

// Config
const indexDirectory = ["toolkit"];
const ignorePatterns = [
  "/vendor/",
  "/tests/",
  "/templates/",
  "/internal/",
  "bundle",
  "AbuseReporter.jsm", // There are some docs that need to be manually rewritten
];
const bannedFileContents = ["#include"];

// Assorted constants related to the input and output
const { geckoDevDir, geckoVersion, outFolder } = await getInfo("legacyModules");

const legacyModulesFiles = await indexLegacyModules();
const generatedData = await parseLegacyModules();

const indexOutputLocation = join(outFolder, "legacyModules.json");
await writeFile(indexOutputLocation, JSON.stringify(generatedData, null, 2));

// =============================================================================
// Functions

async function indexLegacyModules(): Promise<string[]> {
  let modules: string[] = [];

  for (const dir of indexDirectory) {
    const path = join(geckoDevDir, dir);
    const files = await glob(join(path, "**/*.jsm"));
    modules = [...modules, ...files];
  }

  return modules;
}

async function parseLegacyModules() {
  let modules: ModuleInfo[] = [];

  await Promise.all(
    legacyModulesFiles.map(async (file) => {
      // There are some patterns that we want to ignore. If this contains any of
      // those patterns, we are just going to skip over those files
      for (const pattern of ignorePatterns) {
        if (file.includes(pattern)) return;
      }

      const fileContents = await readFile(file, "utf8");

      for (const concents of bannedFileContents) {
        if (fileContents.includes(concents)) return;
      }

      const module = await parseLegacyModule(file, fileContents);
      modules.push(module);
    })
  );

  return modules;
}
