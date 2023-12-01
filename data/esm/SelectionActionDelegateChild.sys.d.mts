/// <reference types="gecko-types" />
export class SelectionActionDelegateChild extends GeckoViewActorChild {
    constructor(aModuleName: any, aMessageManager: any);
    _actionCallback: () => void;
    _isActive: boolean;
    _previousMessage: string;
    _observerFunction: (subject: any, topic: any, data: any) => void;
    _magnifierEnabled: boolean;
    _accessiblecaretHeight: number;
    didDestroy(): void;
    _actions: {
        id: string;
        predicate: (e: any) => any;
        perform: (_: any) => any;
    }[];
    receiveMessage({ name, data }: {
        name: any;
        data: any;
    }): void;
    _performPaste(): void;
    _performPasteAsPlainText(): void;
    _isPasswordField(aEvent: any): boolean;
    _isContentHtmlEditable(aEvent: any): boolean;
    _getDefaultMagnifierPoint(aEvent: any): {
        x: any;
        y: any;
    };
    _getBetterMagnifierPoint(aEvent: any): {
        x: any;
        y: any;
    };
    _handleMagnifier(aEvent: any): void;
    /**
     * Receive and act on AccessibleCarets caret state-change
     * (mozcaretstatechanged and pagehide) events.
     */
    handleEvent(aEvent: any): void;
    observe(aSubject: any, aTopic: any, aData: any): void;
}
import { GeckoViewActorChild } from "resource://gre/modules/GeckoViewActorChild.sys.mjs";
