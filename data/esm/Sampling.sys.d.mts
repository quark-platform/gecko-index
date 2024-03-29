export namespace Sampling {
    /**
     * Map from the range [0, 1] to [0, 2^48].
     * @param  {number} frac A float from 0.0 to 1.0.
     * @return {string} A 48 bit number represented in hex, padded to 12 characters.
     */
    function fractionToKey(frac: number): string;
    /**
     * @param {ArrayBuffer} buffer Data to convert
     * @returns {String}    `buffer`'s content, converted to a hexadecimal string.
     */
    function bufferToHex(buffer: ArrayBuffer): string;
    /**
     * Check if an input hash is contained in a bucket range.
     *
     * isHashInBucket(fractionToKey(0.5), 3, 6, 10) -> returns true
     *
     *              minBucket
     *              |     hash
     *              v     v
     *    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
     *                       ^
     *                       maxBucket
     *
     * @param inputHash {String}
     * @param minBucket {int} The lower boundary, inclusive, of the range to check.
     * @param maxBucket {int} The upper boundary, exclusive, of the range to check.
     * @param bucketCount {int} The total number of buckets. Should be greater than
     *                          or equal to maxBucket.
     */
    function isHashInBucket(inputHash: string, minBucket: int, maxBucket: int, bucketCount: int): boolean;
    /**
     * @promise A hash of `data`, truncated to the 12 most significant characters.
     */
    function truncatedHash(data: any): Promise<string>;
    /**
     * Sample by splitting the input into two buckets, one with a size (rate) and
     * another with a size (1.0 - rate), and then check if the input's hash falls
     * into the first bucket.
     *
     * @param    {object}  input Input to hash to determine the sample.
     * @param    {Number}  rate  Number between 0.0 and 1.0 to sample at. A value of
     *                           0.25 returns true 25% of the time.
     * @promises {boolean} True if the input is in the sample.
     */
    function stableSample(input: any, rate: number): Promise<boolean>;
    /**
     * Sample by splitting the input space into a series of buckets, and checking
     * if the given input is in a range of buckets.
     *
     * The range to check is defined by a start point and length, and can wrap
     * around the input space. For example, if there are 100 buckets, and we ask to
     * check 50 buckets starting from bucket 70, then buckets 70-99 and 0-19 will
     * be checked.
     *
     * @param {object}     input Input to hash to determine the matching bucket.
     * @param {integer}    start Index of the bucket to start checking.
     * @param {integer}    count Number of buckets to check.
     * @param {integer}    total Total number of buckets to group inputs into.
     * @promises {boolean} True if the given input is within the range of buckets
     *                     we're checking. */
    function bucketSample(input: any, start: integer, count: integer, total: integer): Promise<boolean>;
    /**
     * Sample over a list of ratios such that, over the input space, each ratio
     * has a number of matches in correct proportion to the other ratios.
     *
     * For example, given the ratios:
     *
     * [1, 2, 3, 4]
     *
     * 10% of all inputs will return 0, 20% of all inputs will return 1, 30% will
     * return 2, and 40% will return 3. You can determine the percent of inputs
     * that will return an index by dividing the ratio by the sum of all ratios
     * passed in. In the case above, 4 / (1 + 2 + 3 + 4) == 0.4, or 40% of the
     * inputs.
     *
     * @param {object} input
     * @param {Array<integer>} ratios
     * @promises {integer}
     *   Index of the ratio that matched the input
     * @rejects {Error}
     *   If the list of ratios doesn't have at least one element
     */
    function ratioSample(input: any, ratios: integer[]): Promise<number>;
}
