/**
 * Color class, which describes a color.
 * In the future, this object may be extended to allow for conversions between
 * different color formats and notations, support transparency.
 *
 * @param {Number} r Red color component
 * @param {Number} g Green color component
 * @param {Number} b Blue color component
 */
export class Color {
    constructor(r: any, g: any, b: any);
    r: any;
    g: any;
    b: any;
    /**
     * Formula from W3C's WCAG 2.0 spec's relative luminance, section 1.4.1,
     * http://www.w3.org/TR/WCAG20/.
     *
     * @return {Number} Relative luminance, represented as number between 0 and 1.
     */
    get relativeLuminance(): number;
    /**
     * @return {Boolean} TRUE if you need to use a bright color (e.g. 'white'), when
     *                   this color is set as the background.
     */
    get useBrightText(): boolean;
    /**
     * Get the contrast ratio between the current color and a second other color.
     * A common use case is to express the difference between a foreground and a
     * background color in numbers.
     * Formula from W3C's WCAG 2.0 spec's contrast ratio, section 1.4.1,
     * http://www.w3.org/TR/WCAG20/.
     *
     * @param  {Color}  otherColor Color instance to calculate the contrast with
     * @return {Number} Contrast ratios can range from 1 to 21, commonly written
     *                  as 1:1 to 21:1.
     */
    contrastRatio(otherColor: Color): number;
    /**
     * Method to check if the contrast ratio between two colors is high enough to
     * be discernable.
     *
     * @param  {Color}  otherColor Color instance to calculate the contrast with
     * @param  {String} [level]    WCAG conformance level that maps to the minimum
     *                             required contrast ratio. Defaults to 'AA'
     * @return {Boolean}
     */
    isContrastRatioAcceptable(otherColor: Color, level?: string): boolean;
}
