/**
 * SyncedTabsDeckStore
 *
 * This store keeps track of the deck view state, including the panels and which
 * one is selected. The view listens for change events on the store, which are
 * triggered whenever the state changes. If it's a small change, the state
 * will have `isUpdatable` set to true so the view can skip rerendering the whole
 * DOM.
 */
export function SyncedTabsDeckStore(): void;
export class SyncedTabsDeckStore {
    _panels: any[];
}
