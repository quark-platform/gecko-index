/// <reference types="gecko-types" />
export class GeckoViewAutoFillChild extends GeckoViewActorChild {
    _autofillElements: Map<any, any>;
    _autofillInfos: WeakMap<object, any>;
    handleEvent(aEvent: any): void;
    /**
     * Process an auto-fillable form and send the relevant details of the form
     * to Java. Multiple calls within a short time period for the same form are
     * coalesced, so that, e.g., if multiple inputs are added to a form in
     * succession, we will only perform one processing pass. Note that for inputs
     * without forms, FormLikeFactory treats the document as the "form", but
     * there is no difference in how we process them.
     *
     * @param aFormLike A FormLike object produced by FormLikeFactory.
     */
    addElement(aFormLike: any): Promise<void>;
    _getInfo(aElement: any, aParent: any, aRoot: any, aUsernameField: any): any;
    _updateInfoValues(aElements: any): any[];
    /**
     * Called when an auto-fillable field is focused or blurred.
     *
     * @param aTarget Focused element, or null if an element has lost focus.
     */
    onFocus(aTarget: any): void;
    commitAutofill(aFormLike: any): void;
    /**
     * Clear all tracked auto-fill forms and notify Java.
     */
    clearElements(browsingContext: any): void;
    /**
     * Scan for auto-fillable forms and add them if necessary. Called when a page
     * is navigated to through history, in which case we don't get our typical
     * "input added" notifications.
     *
     * @param aDoc Document to scan.
     */
    scanDocument(aDoc: any): void;
}
import { GeckoViewActorChild } from "resource://gre/modules/GeckoViewActorChild.sys.mjs";
