export const TabModalPrompt: {
    new (win: any): {
        win: any;
        element: any;
        ui: {
            prompt: any;
            promptContainer: any;
            mainContainer: any;
            loginContainer: any;
            loginTextbox: any;
            loginLabel: any;
            password1Container: any;
            password1Textbox: any;
            password1Label: any;
            infoContainer: any;
            infoBody: any;
            infoTitle: any;
            infoIcon: any;
            rows: any;
            checkbox: any;
            checkboxContainer: any;
            button3: any;
            button2: any;
            button1: any;
            button0: any;
        };
        init(args: any, linkedTab: any, onCloseCallback: any): void;
        args: any;
        linkedTab: any;
        onCloseCallback: any;
        Dialog: any;
        shutdownPrompt(): void;
        abortPrompt(): void;
        handleEvent(aEvent: any): void;
        onButtonClick(buttonNum: any): void;
        onKeyAction(action: any, event: any): void;
    };
};
