export namespace workerManager {
    let LARGE_STRING: number;
    let IDLE_TIMEOUT: number;
    let detectionQueue: any[];
    function detectLanguage(aParams: any): any;
    let _worker: any;
    let _workerReadyPromise: any;
    const workerReady: any;
    let _idleTimeout: any;
    function flushWorker(): void;
    function _flushWorker(): void;
}
export namespace LanguageDetector {
    /**
     * Detect the language of a given string.
     *
     * The argument may be either a string containing the text to analyze,
     * or an object with the following properties:
     *
     *  - 'text' The text to analyze.
     *
     *  - 'isHTML' (optional) A boolean, indicating whether the text
     *      should be analyzed as HTML rather than plain text.
     *
     *  - 'language' (optional) A string indicating the expected language.
     *      For text extracted from HTTP documents, this is expected to
     *      come from the Content-Language header.
     *
     *  - 'tld' (optional) A string indicating the top-level domain of the
     *      document the text was extracted from.
     *
     *  - 'encoding' (optional) A string describing the encoding of the
     *      document the string was extracted from. Note that, regardless
     *      of the value of this property, the 'text' property must be a
     *      UTF-16 JavaScript string.
     *
     * @returns {Promise<Object>}
     * @resolves When detection is finished, with a object containing
     * these fields:
     *  - 'language' (string with a language code)
     *  - 'confident' (boolean) Whether the detector is confident of the
     *      result.
     *  - 'languages' (array) An array of up to three elements, containing
     *      the most prevalent languages detected. It contains a
     *      'languageCode' property, containing the ISO language code of
     *      the language, and a 'percent' property, describing the
     *      approximate percentage of the input which is in that language.
     *      For text of an unknown language, the result may contain an
     *      entry with the languge code 'un', indicating the percent of
     *      the text which is unknown.
     */
    function detectLanguage(aParams: any): Promise<any>;
    /**
     * Attempts to determine the language in which the document's content is written.
     *
     * For the moment, while we investigate which language identification library
     * we would like to use, keep this logic in sync with language-id-engine.sys.mjs
     * @returns {string | null}
     */
    function detectLanguageFromDocument(aDocument: any): string;
}
