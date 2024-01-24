export namespace CFRMessageProvider {
    function getMessages(): Promise<({
        id: string;
        template: string;
        groups: string[];
        content: {
            layout: string;
            category: string;
            bucket_id: string;
            notification_text: {
                string_id: string;
            };
            heading_text: {
                string_id: string;
            };
            info_icon: {
                label: {
                    string_id: string;
                };
                sumo_path: string;
            };
            addon: {
                id: string;
                title: string;
                icon: string;
                rating: string;
                users: string;
                author: string;
                amo_url: string;
            };
            text: string;
            buttons: {
                primary: {
                    label: {
                        string_id: string;
                        value?: undefined;
                        attributes?: undefined;
                    };
                    action: {
                        type: string;
                        data: {
                            url: string;
                            telemetrySource: string;
                            category?: undefined;
                            entrypoint?: undefined;
                            homePage?: undefined;
                            newtab?: undefined;
                            layout?: undefined;
                        };
                    };
                    event?: undefined;
                };
                secondary: ({
                    label: {
                        string_id: string;
                    };
                    action: {
                        type: string;
                        data?: undefined;
                    };
                } | {
                    label: {
                        string_id: string;
                    };
                    action?: undefined;
                } | {
                    label: {
                        string_id: string;
                    };
                    action: {
                        type: string;
                        data: {
                            category: string;
                        };
                    };
                })[];
            };
            skip_address_bar_notifier?: undefined;
            persistent_doorhanger?: undefined;
            anchor_id?: undefined;
            icon?: undefined;
            icon_class?: undefined;
            active_color?: undefined;
            action?: undefined;
            type?: undefined;
        };
        frequency: {
            lifetime: number;
        };
        targeting: string;
        trigger: {
            id: string;
            params: string[];
            patterns?: undefined;
        };
        exclude?: undefined;
    } | {
        id: string;
        groups: string[];
        template: string;
        exclude: boolean;
        content: {
            layout: string;
            category: string;
            bucket_id: string;
            notification_text: {
                string_id: string;
            };
            heading_text: {
                string_id: string;
            };
            info_icon: {
                label: {
                    string_id: string;
                };
                sumo_path: string;
            };
            addon: {
                id: string;
                title: string;
                icon: string;
                rating: string;
                users: string;
                author: string;
                amo_url: string;
            };
            text: string;
            buttons: {
                primary: {
                    label: {
                        string_id: string;
                        value?: undefined;
                        attributes?: undefined;
                    };
                    action: {
                        type: string;
                        data: {
                            url: string;
                            telemetrySource: string;
                            category?: undefined;
                            entrypoint?: undefined;
                            homePage?: undefined;
                            newtab?: undefined;
                            layout?: undefined;
                        };
                    };
                    event?: undefined;
                };
                secondary: ({
                    label: {
                        string_id: string;
                    };
                    action: {
                        type: string;
                        data?: undefined;
                    };
                } | {
                    label: {
                        string_id: string;
                    };
                    action?: undefined;
                } | {
                    label: {
                        string_id: string;
                    };
                    action: {
                        type: string;
                        data: {
                            category: string;
                        };
                    };
                })[];
            };
            skip_address_bar_notifier?: undefined;
            persistent_doorhanger?: undefined;
            anchor_id?: undefined;
            icon?: undefined;
            icon_class?: undefined;
            active_color?: undefined;
            action?: undefined;
            type?: undefined;
        };
        frequency: {
            lifetime: number;
        };
        targeting: string;
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
            skip_address_bar_notifier: boolean;
            persistent_doorhanger: boolean;
            anchor_id: string;
            layout: string;
            text: {
                string_id: string;
            };
            icon: string;
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
                        value?: undefined;
                        attributes?: undefined;
                    };
                    action: {
                        type: string;
                        data?: undefined;
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
            addon?: undefined;
            icon_class?: undefined;
            active_color?: undefined;
            action?: undefined;
            type?: undefined;
        };
        trigger: {
            id: string;
            patterns: string[];
            params?: undefined;
        };
        frequency?: undefined;
        exclude?: undefined;
    } | {
        id: string;
        groups: string[];
        frequency: {
            lifetime: number;
        };
        targeting: string;
        template: string;
        content: {
            layout: string;
            text: string;
            icon: string;
            icon_class: string;
            buttons: {
                secondary: ({
                    label: {
                        string_id: string;
                    };
                    action: {
                        type: string;
                        data?: undefined;
                    };
                } | {
                    label: {
                        string_id: string;
                    };
                    action?: undefined;
                } | {
                    label: {
                        string_id: string;
                    };
                    action: {
                        type: string;
                        data: {
                            category: string;
                        };
                    };
                })[];
                primary: {
                    label: {
                        value: string;
                        attributes: {
                            accesskey: string;
                        };
                        string_id?: undefined;
                    };
                    action: {
                        type: string;
                        data: {
                            category: string;
                            entrypoint: string;
                            url?: undefined;
                            telemetrySource?: undefined;
                            homePage?: undefined;
                            newtab?: undefined;
                            layout?: undefined;
                        };
                    };
                    event?: undefined;
                };
            };
            bucket_id: string;
            heading_text: string;
            info_icon: {
                label: {
                    string_id: string;
                };
                sumo_path: string;
            };
            notification_text: {
                string_id: string;
            };
            category: string;
            addon?: undefined;
            skip_address_bar_notifier?: undefined;
            persistent_doorhanger?: undefined;
            anchor_id?: undefined;
            active_color?: undefined;
            action?: undefined;
            type?: undefined;
        };
        trigger: {
            id: string;
            params?: undefined;
            patterns?: undefined;
        };
        exclude?: undefined;
    } | {
        id: string;
        groups: string[];
        template: string;
        content: {
            layout: string;
            category: string;
            anchor_id: string;
            skip_address_bar_notifier: boolean;
            bucket_id: string;
            heading_text: {
                string_id: string;
            };
            notification_text: string;
            text: string;
            buttons: {
                primary: {
                    label: {
                        string_id: string;
                        value?: undefined;
                        attributes?: undefined;
                    };
                    action: {
                        type: string;
                        data?: undefined;
                    };
                    event: string;
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
            info_icon?: undefined;
            addon?: undefined;
            persistent_doorhanger?: undefined;
            icon?: undefined;
            icon_class?: undefined;
            active_color?: undefined;
            action?: undefined;
            type?: undefined;
        };
        targeting: string;
        frequency: {
            lifetime: number;
        };
        trigger: {
            id: string;
            params: string[];
            patterns?: undefined;
        };
        exclude?: undefined;
    } | {
        id: string;
        groups: string[];
        template: string;
        content: {
            layout: string;
            category: string;
            bucket_id: string;
            notification_text: string;
            active_color: string;
            action: {
                url: string;
                where: string;
            };
            heading_text?: undefined;
            info_icon?: undefined;
            addon?: undefined;
            text?: undefined;
            buttons?: undefined;
            skip_address_bar_notifier?: undefined;
            persistent_doorhanger?: undefined;
            anchor_id?: undefined;
            icon?: undefined;
            icon_class?: undefined;
            type?: undefined;
        };
        targeting: string;
        frequency: {
            lifetime: number;
        };
        trigger: {
            id: string;
            patterns: string[];
            params?: undefined;
        };
        exclude?: undefined;
    } | {
        id: string;
        groups: string[];
        frequency: {
            lifetime: number;
        };
        targeting: string;
        template: string;
        content: {
            layout: string;
            text: string;
            icon: string;
            buttons: {
                secondary: ({
                    label: {
                        string_id: string;
                    };
                    action: {
                        type: string;
                        data?: undefined;
                    };
                } | {
                    label: {
                        string_id: string;
                    };
                    action?: undefined;
                } | {
                    label: {
                        string_id: string;
                    };
                    action: {
                        type: string;
                        data: {
                            category: string;
                        };
                    };
                })[];
                primary: {
                    label: {
                        value: string;
                        attributes: {
                            accesskey: string;
                        };
                        string_id?: undefined;
                    };
                    action: {
                        type: string;
                        data: {
                            homePage: string;
                            newtab: string;
                            layout: {
                                search: boolean;
                                topsites: boolean;
                                highlights: boolean;
                                topstories: boolean;
                            };
                            url?: undefined;
                            telemetrySource?: undefined;
                            category?: undefined;
                            entrypoint?: undefined;
                        };
                    };
                    event?: undefined;
                };
            };
            bucket_id: string;
            heading_text: string;
            info_icon: {
                label: {
                    string_id: string;
                };
                sumo_path: string;
            };
            notification_text: {
                string_id: string;
            };
            category: string;
            addon?: undefined;
            skip_address_bar_notifier?: undefined;
            persistent_doorhanger?: undefined;
            anchor_id?: undefined;
            icon_class?: undefined;
            active_color?: undefined;
            action?: undefined;
            type?: undefined;
        };
        trigger: {
            id: string;
            params: string[];
            patterns?: undefined;
        };
        exclude?: undefined;
    } | {
        id: string;
        groups: string[];
        targeting: string;
        template: string;
        content: {
            type: string;
            text: {
                string_id: string;
            };
            buttons: {
                label: {
                    string_id: string;
                };
                primary: boolean;
                accessKey: string;
                action: {
                    type: string;
                };
            }[];
            layout?: undefined;
            category?: undefined;
            bucket_id?: undefined;
            notification_text?: undefined;
            heading_text?: undefined;
            info_icon?: undefined;
            addon?: undefined;
            skip_address_bar_notifier?: undefined;
            persistent_doorhanger?: undefined;
            anchor_id?: undefined;
            icon?: undefined;
            icon_class?: undefined;
            active_color?: undefined;
            action?: undefined;
        };
        trigger: {
            id: string;
            params?: undefined;
            patterns?: undefined;
        };
        frequency?: undefined;
        exclude?: undefined;
    } | {
        id: string;
        groups: string[];
        targeting: string;
        template: string;
        content: {
            type: string;
            text: string;
            buttons: {
                label: string;
                primary: boolean;
                accessKey: string;
                action: {
                    type: string;
                };
            }[];
            layout?: undefined;
            category?: undefined;
            bucket_id?: undefined;
            notification_text?: undefined;
            heading_text?: undefined;
            info_icon?: undefined;
            addon?: undefined;
            skip_address_bar_notifier?: undefined;
            persistent_doorhanger?: undefined;
            anchor_id?: undefined;
            icon?: undefined;
            icon_class?: undefined;
            active_color?: undefined;
            action?: undefined;
        };
        trigger: {
            id: string;
            params: string[];
            patterns?: undefined;
        };
        frequency?: undefined;
        exclude?: undefined;
    })[]>;
}
