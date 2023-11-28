export namespace NLP {
    /**
     * Calculate the Levenshtein distance between two words.
     * The implementation of this method was heavily inspired by
     * http://locutus.io/php/strings/levenshtein/index.html
     * License: MIT.
     *
     * @param  {String} word1   Word to compare against
     * @param  {String} word2   Word that may be different
     * @param  {Number} costIns The cost to insert a character
     * @param  {Number} costRep The cost to replace a character
     * @param  {Number} costDel The cost to delete a character
     * @return {Number}
     */
    function levenshtein(word1?: string, word2?: string, costIns?: number, costRep?: number, costDel?: number): number;
}
