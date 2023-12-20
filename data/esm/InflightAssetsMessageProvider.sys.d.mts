export namespace InflightAssetsMessageProvider {
    function getMessages(): ({
        id: string;
        groups: string[];
        content: {
            anchor_id: string;
            bucket_id: string;
            buttons: {
                primary: {
                    action: {
                        type: string;
                        data?: undefined;
                    };
                    event: string;
                    label: {
                        string_id: string;
                    };
                };
                secondary: {
                    label: {
                        string_id: string;
                    };
                    action: {
                        type: string;
                    };
                    event: string;
                }[];
            };
            category: string;
            heading_text: {
                string_id: string;
            };
            layout: string;
            notification_text: string;
            skip_address_bar_notifier: boolean;
            text: string;
            priority?: undefined;
            type?: undefined;
            persistent_doorhanger?: undefined;
            info_icon?: undefined;
            action?: undefined;
        };
        frequency: {
            lifetime: number;
            custom?: undefined;
        };
        targeting: string;
        template: string;
        trigger: {
            id: string;
            params: string[];
            patterns?: undefined;
        };
    } | {
        id: string;
        groups: string[];
        targeting: string;
        template: string;
        content: {
            priority: number;
            type: string;
            text: {
                string_id: string;
            };
            buttons: ({
                label: {
                    string_id: string;
                };
                action: {
                    type: string;
                };
                primary: boolean;
                supportPage?: undefined;
                callback?: undefined;
            } | {
                label: {
                    string_id: string;
                };
                action: {
                    type: string;
                };
                primary?: undefined;
                supportPage?: undefined;
                callback?: undefined;
            } | {
                label: {
                    string_id: string;
                };
                supportPage: string;
                callback: any;
                action: {
                    type: string;
                };
                primary?: undefined;
            })[];
            bucket_id: string;
            category: string;
            anchor_id?: undefined;
            heading_text?: undefined;
            layout?: undefined;
            notification_text?: undefined;
            skip_address_bar_notifier?: undefined;
            persistent_doorhanger?: undefined;
            info_icon?: undefined;
            action?: undefined;
        };
        frequency: {
            lifetime: number;
            custom?: undefined;
        };
        trigger: {
            id: string;
            patterns: string[];
            params?: undefined;
        };
    } | {
        id: string;
        groups: string[];
        content: {
            category: string;
            bucket_id: string;
            text: {
                string_id: string;
            };
            type: string;
            buttons: {
                label: {
                    string_id: string;
                };
                action: {
                    type: string;
                };
                primary: boolean;
                accessKey: string;
            }[];
            anchor_id?: undefined;
            heading_text?: undefined;
            layout?: undefined;
            notification_text?: undefined;
            skip_address_bar_notifier?: undefined;
            priority?: undefined;
            persistent_doorhanger?: undefined;
            info_icon?: undefined;
            action?: undefined;
        };
        trigger: {
            id: string;
            params?: undefined;
            patterns?: undefined;
        };
        template: string;
        frequency: {
            lifetime: number;
            custom: {
                period: number;
                cap: number;
            }[];
        };
        targeting: string;
    } | {
        id: string;
        groups: string[];
        targeting: string;
        template: string;
        content: {
            skip_address_bar_notifier: boolean;
            persistent_doorhanger: boolean;
            anchor_id: string;
            layout: string;
            text: {
                string_id: string;
            };
            buttons: {
                secondary: {
                    label: {
                        string_id: string;
                    };
                    action: {
                        type: string;
                    };
                }[];
                primary: {
                    label: {
                        string_id: string;
                    };
                    action: {
                        type: string;
                        data: {
                            args: string;
                            where: string;
                        };
                    };
                    event?: undefined;
                };
            };
            bucket_id: string;
            heading_text: {
                string_id: string;
            };
            info_icon: {
                label: {
                    string_id: string;
                };
                sumo_path: string;
            };
            notification_text: string;
            category: string;
            priority?: undefined;
            type?: undefined;
            action?: undefined;
        };
        frequency: {
            lifetime: number;
            custom?: undefined;
        };
        trigger: {
            id: string;
            patterns: string[];
            params: string[];
        };
    } | {
        id: string;
        groups: string[];
        content: {
            action: {
                data: {
                    expire: number;
                    url: string;
                };
                id: string;
            };
            bucket_id: string;
            anchor_id?: undefined;
            buttons?: undefined;
            category?: undefined;
            heading_text?: undefined;
            layout?: undefined;
            notification_text?: undefined;
            skip_address_bar_notifier?: undefined;
            text?: undefined;
            priority?: undefined;
            type?: undefined;
            persistent_doorhanger?: undefined;
            info_icon?: undefined;
        };
        targeting: string;
        template: string;
        trigger: {
            id: string;
            params?: undefined;
            patterns?: undefined;
        };
        frequency?: undefined;
    })[];
}
