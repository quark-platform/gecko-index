export const DateTimePickerPanel: {
    new (element: any): {
        element: any;
        TIME_PICKER_WIDTH: string;
        TIME_PICKER_HEIGHT: string;
        DATE_PICKER_WIDTH: string;
        DATE_PICKER_HEIGHT: string;
        readonly dateTimePopupFrame: any;
        openPicker(type: any, rect: any, detail: any): void;
        type: any;
        pickerState: any;
        detail: any;
        closePicker(clear: any): void;
        setPopupValue(data: any): void;
        initPicker(detail: any): void;
        /**
         * @param {Boolean} passAllValues: Pass spinner values regardless if they've been set/changed or not
         */
        setInputBoxValue(passAllValues: boolean): void;
        sendPickerValueChanged(value: any): void;
        getCalendarInfo(locale: any): {
            firstDayOfWeek: any;
            weekends: any;
        };
        handleEvent(aEvent: any): void;
        handleMessage(aEvent: any): void;
        postMessageToPicker(data: any): void;
    };
};
