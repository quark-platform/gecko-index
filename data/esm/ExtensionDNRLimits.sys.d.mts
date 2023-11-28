export namespace ExtensionDNRLimits {
    export { GUARANTEED_MINIMUM_STATIC_RULES };
    export { MAX_NUMBER_OF_STATIC_RULESETS };
    export { MAX_NUMBER_OF_ENABLED_STATIC_RULESETS };
    export { MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES };
    export { MAX_NUMBER_OF_REGEX_RULES };
}
/**
 * The minimum number of static rules guaranteed to an extension across its
 * enabled static rulesets. Any rules above this limit will count towards the
 * global static rule limit.
 */
declare const GUARANTEED_MINIMUM_STATIC_RULES: 30000;
/**
 * The maximum number of static Rulesets an extension can specify as part of
 * the "rule_resources" manifest key.
 *
 * NOTE: this limit may be increased in the future, see https://github.com/w3c/webextensions/issues/318
 */
declare const MAX_NUMBER_OF_STATIC_RULESETS: 50;
/**
 * The maximum number of static Rulesets an extension can enable at any one time.
 *
 * NOTE: this limit may be increased in the future, see https://github.com/w3c/webextensions/issues/318
 */
declare const MAX_NUMBER_OF_ENABLED_STATIC_RULESETS: 10;
/**
 * The maximum number of dynamic and session rules an extension can add.
 * NOTE: in the Firefox we are enforcing this limit to the session and dynamic rules count separately,
 * instead of enforcing it to the rules count for both combined as the Chrome implementation does.
 *
 * NOTE: this limit may be increased in the future, see https://github.com/w3c/webextensions/issues/319
 */
declare const MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES: 5000;
/**
 * The maximum number of regular expression rules that an extension can add.
 * Session, dynamic and static rules have their own quota.
 *
 * TODO bug 1821033: Bump limit after optimizing regexFilter.
 */
declare const MAX_NUMBER_OF_REGEX_RULES: 1000;
export {};
