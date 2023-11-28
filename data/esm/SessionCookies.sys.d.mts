/**
 * The external API implemented by the SessionCookies module.
 */
export const SessionCookies: Readonly<{
    collect(): any[];
    restore(cookies: any): void;
}>;
