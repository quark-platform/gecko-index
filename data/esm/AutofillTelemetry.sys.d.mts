export class AddressTelemetry extends AutofillTelemetryBase {
    static SUPPORTED_FIELDS_IN_FORM: string[];
    static SUPPORTED_FIELDS_IN_FORM_EXT: string[];
    EVENT_CATEGORY: string;
    EVENT_OBJECT_FORM_INTERACTION: string;
    EVENT_OBJECT_FORM_INTERACTION_EXT: string;
    SCALAR_DETECTED_SECTION_COUNT: string;
    SCALAR_SUBMITTED_SECTION_COUNT: string;
    SCALAR_AUTOFILL_PROFILE_COUNT: string;
    HISTOGRAM_PROFILE_NUM_USES: string;
    HISTOGRAM_PROFILE_NUM_USES_KEY: string;
    SUPPORTED_FIELDS: {
        "street-address": string;
        "address-line1": string;
        "address-line2": string;
        "address-line3": string;
        "address-level1": string;
        "address-level2": string;
        "postal-code": string;
        country: string;
        name: string;
        "given-name": string;
        "additional-name": string;
        "family-name": string;
        email: string;
        organization: string;
        tel: string;
    };
}
export class AutofillTelemetry {
    static "__#443913@#creditCardTelemetry": CreditCardTelemetry;
    static "__#443913@#addressTelemetry": AddressTelemetry;
    static ADDRESS: string;
    static CREDIT_CARD: string;
    static "__#443913@#getTelemetryBySection"(section: any): AddressTelemetry | CreditCardTelemetry;
    static "__#443913@#getTelemetryByType"(type: any): AddressTelemetry | CreditCardTelemetry;
    /**
     * Utility functions for `doorhanger` event (defined in Events.yaml)
     *
     * Category: address or creditcard
     * Event name: doorhanger
     */
    static recordDoorhangerShown(type: any, flowId: any, isCapture: any): void;
    static recordDoorhangerClicked(type: any, method: any, flowId: any, isCapture: any): void;
    /**
     * Utility functions for form event (defined in Events.yaml)
     *
     * Category: address or creditcard
     * Event name: cc_form, cc_form_v2, or address_form
     */
    static recordFormInteractionEvent(method: any, section: any, { fieldName, profile, record, form }?: {
        fieldName: any;
        profile: any;
        record: any;
        form: any;
    }): void;
    /**
     * Utility functions for submitted section count scalar (defined in Scalars.yaml)
     *
     * Category: formautofill.creditCards or formautofill.addresses
     * Scalar name: submitted_sections_count
     */
    static recordDetectedSectionCount(section: any): void;
    static recordSubmittedSectionCount(type: any, count: any): void;
    static recordManageEvent(type: any, method: any): void;
    static recordAutofillProfileCount(type: any, count: any): void;
    /**
     * Utility functions for address/credit card number of use
     */
    static recordNumberOfUse(type: any, records: any): void;
}
declare class AutofillTelemetryBase {
    SUPPORTED_FIELDS: {};
    EVENT_CATEGORY: any;
    EVENT_OBJECT_FORM_INTERACTION: any;
    SCALAR_DETECTED_SECTION_COUNT: any;
    SCALAR_SUBMITTED_SECTION_COUNT: any;
    HISTOGRAM_NUM_USES: any;
    HISTOGRAM_PROFILE_NUM_USES: any;
    HISTOGRAM_PROFILE_NUM_USES_KEY: any;
    recordFormDetected(section: any): void;
    recordPopupShown(section: any, fieldName: any): void;
    recordFormFilled(section: any, profile: any): void;
    recordFilledModified(section: any, fieldName: any): void;
    recordFormSubmitted(section: any, record: any, form: any): void;
    recordFormCleared(section: any, fieldName: any): void;
    recordFormEvent(method: any, flowId: any, extra: any): void;
    recordGleanFormEvent(eventName: any, flowId: any, extra: any): void;
    recordFormInteractionEvent(method: any, section: any, { fieldName, profile, record, form }?: {
        fieldName: any;
        profile: any;
        record: any;
        form: any;
    }): void;
    recordDoorhangerEvent(method: any, flowId: any, isCapture: any): void;
    recordManageEvent(method: any, object: any): void;
    recordAutofillProfileCount(count: any): void;
    recordDetectedSectionCount(): void;
    recordSubmittedSectionCount(count: any): void;
    recordNumberOfUse(records: any): void;
    #private;
}
declare class CreditCardTelemetry extends AutofillTelemetryBase {
    EVENT_CATEGORY: string;
    EVENT_OBJECT_FORM_INTERACTION: string;
    SCALAR_DETECTED_SECTION_COUNT: string;
    SCALAR_SUBMITTED_SECTION_COUNT: string;
    HISTOGRAM_NUM_USES: string;
    HISTOGRAM_PROFILE_NUM_USES: string;
    HISTOGRAM_PROFILE_NUM_USES_KEY: string;
    SUPPORTED_FIELDS: {
        "cc-name": string;
        "cc-number": string;
        "cc-type": string;
        "cc-exp": string;
        "cc-exp-month": string;
        "cc-exp-year": string;
    };
    recordLegacyFormEvent(method: any, flowId: any, extra?: any): void;
    /**
     * Called when a credit card form is submitted
     *
     * @param {object} section Section that produces this record
     * @param {object} record Credit card record filled in the form.
     * @param {Array<HTMLForm>} form Form that contains the section
     */
    recordFormSubmitted(section: object, record: object, form: Array<HTMLForm>): void;
}
export {};
