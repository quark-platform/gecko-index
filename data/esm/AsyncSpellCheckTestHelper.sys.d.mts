/**
 * Waits until spell checking has stopped on the given element.
 *
 * When a spell check is pending, this waits indefinitely until the spell check
 * ends.  When a spell check is not pending, it waits a small number of turns of
 * the event loop: if a spell check begins, it resumes waiting indefinitely for
 * the end, and otherwise it stops waiting and calls the callback.
 *
 * This this can therefore trap spell checks that have not started at the time
 * of calling, spell checks that have already started, multiple consecutive
 * spell checks, and the absence of spell checks altogether.
 *
 * @param editableElement  The element being spell checked.
 * @param callback         Called when spell check has completed or enough turns
 *                         of the event loop have passed to determine it has not
 *                         started.
 */
export function maybeOnSpellCheck(editableElement: any, callback: any): void;
/**
 * Waits until spell checking has stopped on the given element.
 *
 * @param editableElement  The element being spell checked.
 * @param callback         Called when spell check has completed or enough turns
 *                         of the event loop have passed to determine it has not
 *                         started.
 */
export function onSpellCheck(editableElement: any, callback: any): void;
export function getDictionaryContentPref(): Promise<any>;
