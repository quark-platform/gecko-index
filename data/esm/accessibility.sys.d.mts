export namespace accessibility {
    export namespace State {
        const Unavailable: any;
        const Focusable: any;
        const Selectable: any;
        const Selected: any;
    }
    export let ActionableRoles: Set<string>;
    /**
     * Factory function that constructs a new {@code accessibility.Checks}
     * object with enforced strictness or not.
     */
    export function get(strict?: boolean): any;
    /**
     * Retrieve the Accessible for the provided element.
     *
     * @param {Element} element
     *     The element for which we need to retrieve the accessible.
     *
     * @returns {nsIAccessible|null}
     *     The Accessible object corresponding to the provided element or null if
     *     the accessibility service is not available.
     */
    export function getAccessible(element: Element): any;
    export { Checks };
}
declare class Checks {
    /**
     * @param {boolean} strict
     *     Flag indicating whether the accessibility issue should be logged
     *     or cause an error to be thrown.  Default is to log to stdout.
     */
    constructor(strict: boolean);
    strict: boolean;
    /**
     * Assert that the element has a corresponding accessible object, and retrieve
     * this accessible. Note that if the accessibility.Checks component was
     * created in non-strict mode, this helper will not attempt to resolve the
     * accessible at all and will simply return null.
     *
     * @param {DOMElement|XULElement} element
     *     Element to get the accessible object for.
     * @param {boolean=} mustHaveAccessible
     *     Flag indicating that the element must have an accessible object.
     *     Defaults to not require this.
     *
     * @returns {Promise.<nsIAccessible>}
     *     Promise with an accessibility object for the given element.
     */
    assertAccessible(element: DOMElement | XULElement, mustHaveAccessible?: boolean | undefined): Promise<nsIAccessible>;
    /**
     * Test if the accessible has a role that supports some arbitrary
     * action.
     *
     * @param {nsIAccessible} accessible
     *     Accessible object.
     *
     * @returns {boolean}
     *     True if an actionable role is found on the accessible, false
     *     otherwise.
     */
    isActionableRole(accessible: nsIAccessible): boolean;
    /**
     * Test if an accessible has at least one action that it supports.
     *
     * @param {nsIAccessible} accessible
     *     Accessible object.
     *
     * @returns {boolean}
     *     True if the accessible has at least one supported action,
     *     false otherwise.
     */
    hasActionCount(accessible: nsIAccessible): boolean;
    /**
     * Test if an accessible has a valid name.
     *
     * @param {nsIAccessible} accessible
     *     Accessible object.
     *
     * @returns {boolean}
     *     True if the accessible has a non-empty valid name, or false if
     *     this is not the case.
     */
    hasValidName(accessible: nsIAccessible): boolean;
    /**
     * Test if an accessible has a {@code hidden} attribute.
     *
     * @param {nsIAccessible} accessible
     *     Accessible object.
     *
     * @returns {boolean}
     *     True if the accessible object has a {@code hidden} attribute,
     *     false otherwise.
     */
    hasHiddenAttribute(accessible: nsIAccessible): boolean;
    /**
     * Verify if an accessible has a given state.
     * Test if an accessible has a given state.
     *
     * @param {nsIAccessible} accessible
     *     Accessible object to test.
     * @param {number} stateToMatch
     *     State to match.
     *
     * @returns {boolean}
     *     True if |accessible| has |stateToMatch|, false otherwise.
     */
    matchState(accessible: nsIAccessible, stateToMatch: number): boolean;
    /**
     * Test if an accessible is hidden from the user.
     *
     * @param {nsIAccessible} accessible
     *     Accessible object.
     *
     * @returns {boolean}
     *     True if element is hidden from user, false otherwise.
     */
    isHidden(accessible: nsIAccessible): boolean;
    /**
     * Test if the element's visible state corresponds to its accessibility
     * API visibility.
     *
     * @param {nsIAccessible} accessible
     *     Accessible object.
     * @param {DOMElement|XULElement} element
     *     Element associated with |accessible|.
     * @param {boolean} visible
     *     Visibility state of |element|.
     *
     * @throws ElementNotAccessibleError
     *     If |element|'s visibility state does not correspond to
     *     |accessible|'s.
     */
    assertVisible(accessible: nsIAccessible, element: DOMElement | XULElement, visible: boolean): void;
    /**
     * Test if the element's unavailable accessibility state matches the
     * enabled state.
     *
     * @param {nsIAccessible} accessible
     *     Accessible object.
     * @param {DOMElement|XULElement} element
     *     Element associated with |accessible|.
     * @param {boolean} enabled
     *     Enabled state of |element|.
     *
     * @throws ElementNotAccessibleError
     *     If |element|'s enabled state does not match |accessible|'s.
     */
    assertEnabled(accessible: nsIAccessible, element: DOMElement | XULElement, enabled: boolean): void;
    /**
     * Test if it is possible to activate an element with the accessibility
     * API.
     *
     * @param {nsIAccessible} accessible
     *     Accessible object.
     * @param {DOMElement|XULElement} element
     *     Element associated with |accessible|.
     *
     * @throws ElementNotAccessibleError
     *     If it is impossible to activate |element| with |accessible|.
     */
    assertActionable(accessible: nsIAccessible, element: DOMElement | XULElement): void;
    /**
     * Test that an element's selected state corresponds to its
     * accessibility API selected state.
     *
     * @param {nsIAccessible} accessible
     *     Accessible object.
     * @param {DOMElement|XULElement} element
     *     Element associated with |accessible|.
     * @param {boolean} selected
     *     The |element|s selected state.
     *
     * @throws ElementNotAccessibleError
     *     If |element|'s selected state does not correspond to
     *     |accessible|'s.
     */
    assertSelected(accessible: nsIAccessible, element: DOMElement | XULElement, selected: boolean): void;
    /**
     * Throw an error if strict accessibility checks are enforced and log
     * the error to the log.
     *
     * @param {string} message
     * @param {DOMElement|XULElement} element
     *     Element that caused an error.
     *
     * @throws ElementNotAccessibleError
     *     If |strict| is true.
     */
    error(message: string, element: DOMElement | XULElement): void;
}
export {};
