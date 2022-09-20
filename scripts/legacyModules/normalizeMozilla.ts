/**
 * Should match somethung like this
 * ```
 * {{key: String, value: String}[]}
 * {Promise<response>[]}
 * ```
 */
const objectArrayMatch = /\{(?<type>(.*))\[\]\}/g;

/**
 * For some reason, mozilla documents stuff as objects, which messes with all
 * kinds of stuff. Here we rewrite it so that it is a broken object
 * ```
 * @param {object*}
 * @param {string*}
 * ```
 *
 */
const rewriteObjectsInDocs = /(?<intro>\w*\s\w*):\n(\s*\*\s*){/g;

/**
 * There are some places where type definitions are written as:
 * ```
 * @type Promise
 * @type Map<ConduitID, ConduitAddress>
 * ```
 *
 * Which will not be parsed correctly
 */
const rewriteTypeDefinitions = /@type (?<type>\w*(\<.*\>)?)/g;

/**
 * ```
 * {Function(newValue: boolean)}
 * {(input: type, type) => Return<type>}
 * ```
 */
const removeFunctionInformation = /\{((\(.*\) => .*)|(Function(.*)))\}/g;

/**
 * ```
 * {{defaultValues?: {[variableName: string]: any}}}
 * {{[variableName: string]: any}}
 * ```
 */
const rewriteRecords =
  /\{\[(?<variableName>\w*): (?<itype>\w*)\]: (?<type>\w*)\}/gm;

/**
 * ```
 * {{type: string, data?: any, test?: c}}
 * {{defaultValues?: {[variableName: string]: any}}}
 * {{slug?: string, featureId: string?}} // Ignore the ? after string
 * ```
 */
const rewriteOptionalObjects = /(?<name>\w*)\?: (?<type>.*?)(?<closing>}|,)/gm;

/**
 * ```
 * @returns {[number, boolean]} mergeNextNFields and creatNewSection for use in _classifySections
 * ```
 */
const rewriteWeirdArrayTypes = /\{\[(\w*, )*\w*\]\}/gm;

/**
 * ```
 * @returns {[Branches]|undefined} An array of branches for the given slug
 * @return {Array[String]|undefined}
 * ```
 */
const rewriteEnclosingArrays = / \{(Array)?\[(?<type>\w*)\]/gm;

/**
 * ```
 *    * @throws
 * ```
 */
const rewriteThrowsWithoutTypes = /\* @throws(?<description>\s.*)?\n/gm;

/**
 * ```
 *  @return {{
 *   {bool} absolute |true| if the path is absolute, |false| otherwise
 *   {array} components the string components of the path
 *   {string?} winDrive the drive or server for this path
 *  }}
 * @returns { entry, url, postData }
 * ```
 */
const rewriteReturnObjects = /\*\s*@returns? {{?(\n|\s)(.|\n|\s)*?}}?\n/g;

/**
 * ```
 * @type {}{string}
 * @type {}{WeakSet<Document>}
 * @type {}{Queue<{deferred:deferred, closure:*=}>}
 * @type {}{Array.<SubDialog>}
 * ```
 */
const rewriteDoubleObjectTypes = /@type {}{(?<type>\w*.?(<.*>)?)}/g;

/**
 * ```
 * @param {Array<{slug: string; ratio: number}>}
 * ```
 */
const rewriteObjectSemicolons = /(?<before>\{\w*: \w*);(?<after> \w*)/g;

/**
 * ```
 * @param {number=0} aMaxDepth
 * ```
 */
const removeUnneededDefaultValue = /@param {(?<type>\w*=).*}/g;

/**
 * ```
 * @return
 *         {
 *           directory: <nsIFile>, // Directory to save pings
 *           file: <string>, // File name for this ping (or pattern for all pings)
 *         }
 * ```
 */
const addObjectToReturnType = /\* @return(?! {)/g;

/**
 * ```
 * @param {...}
 * ```
 */
const anyTypeForAllArgs = /@param {...}/gm;

/**
 * ```
 * @param {string...} candidates A list of system libraries that may
 * ```
 */
const reorderArgsType = /@param {(?<type>\w*)...}/gm;

/**
 * ```
 * @param {Typed array} candidate
 * @param {Typed array | C pointer} test
 * ```
 */
const deleteScaryTypes = /@param {Typed array( \| C pointer)?}/gm;

/**
 * Mozilla's javascript code (currently their doc comments) are not always
 * correct. The goal with this function is to rewrite them to make them
 * compatible with jsdoc with as minimal disruption as possible. Specific
 * changes include:
 *
 * - Replacing `object*` with `object=`
 * - Rewrite typescript-esc functions into `Function` (loses information)
 * - Correct array syntax to not use `[]`
 * - A special case for downloadCore: https://searchfox.org/mozilla-central/source/toolkit/components/downloads/DownloadCore.jsm#1566
 * - Rewrite type definitions to be within spec
 * - Rewrite dictionaries to be more correct
 * - Rewrite optional objects to match closure spec
 * - Rewrite weird array types to any (loses information)
 *
 * @param fileContents The file contents to normalize
 */
export function normalizeMozillaJS(fileContents: string): string {
  let out = fileContents
    .replace(objectArrayMatch, "{Array.<$<type>>}")
    .replace(/\{(?<type>\w*)\*\}/g, "{$type=}")
    .replace(removeFunctionInformation, "{Function}")
    .replace(rewriteObjectsInDocs, "$<intro>: \n * @example \n * {")
    .replace(rewriteTypeDefinitions, "@type {$<type>}")
    .replace(rewriteRecords, "Object.<$<itype>, $<type>>")
    .replace(rewriteOptionalObjects, "$<name>: $<type> | undefined$<closing>")
    .replace(rewriteWeirdArrayTypes, "{any}")
    .replace(/{Typed Array \| C pointer}/gm, "{any}")
    .replace(rewriteEnclosingArrays, " {Array.<$<type>>")
    .replace(rewriteThrowsWithoutTypes, "* @throws {any} $<description>\n")
    .replace(rewriteReturnObjects, "* @return {Object}\n")
    .replace(rewriteDoubleObjectTypes, "@type {$<type>}")
    .replace(rewriteObjectSemicolons, "$<before>,$<after>")
    .replace(removeUnneededDefaultValue, "@param {$<type>}")
    .replace(addObjectToReturnType, "* @return {Object}")
    .replace(anyTypeForAllArgs, "@param {...any}")
    .replace(reorderArgsType, "@param {...$<type>}")
    .replace(deleteScaryTypes, "@param {any}");

  return out;
}
