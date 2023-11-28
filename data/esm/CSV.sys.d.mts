export class CSV {
    /**
     * Parses a csv formated string into rows split into [headerLine, parsedLines].
     * The csv string format has to follow RFC 4180, otherwise the parsing process is stopped and a ParsingFailedException is thrown, e.g.:
     * (wrong format => right format):
     * 'abc"def' => 'abc""def'
     * abc,def => "abc,def"
     *
     * @param {string} text
     * @param {string} delimiter a comma for CSV files and a tab for TSV files
     * @returns {Array[]} headerLine: column names (first line of text), parsedLines: Array of Login Objects with column name as properties and login data as values.
     */
    static parse(text: string, delimiter: string): any[][];
    static readCSV(text: any, delimiter: any): Generator<{}, void, unknown>;
    static mapValuesToRows(values: any): Generator<any[], void, unknown>;
}
