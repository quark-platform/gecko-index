export namespace NimbusRolloutMessageProvider {
    function getMessages(): ({
        id: string;
        groups: string[];
        content: {
            text: {
                string_id: string;
            };
            layout: string;
            buttons: {
                primary: {
                    label: {
                        string_id: string;
                    };
                    action: {
                        data: {
                            args: string;
                            where: string;
                        };
                        type: string;
                    };
                };
                secondary: {
                    label: {
                        string_id: string;
                    };
                    action: {
                        type: string;
                    };
                }[];
            };
            anchor_id: string;
            bucket_id: string;
            heading_text: {
                string_id: string;
            };
            skip_address_bar_notifier: boolean;
            id?: undefined;
            modal?: undefined;
            screens?: undefined;
            backdrop?: undefined;
            template?: undefined;
            transitions?: undefined;
        };
        trigger: {
            id: string;
        };
        template: string;
        frequency: {
            custom: {
                cap: number;
                period: number;
            }[];
            lifetime: number;
        };
        targeting: string;
        priority?: undefined;
    } | {
        id: string;
        groups: string[];
        content: {
            id: string;
            modal: string;
            screens: {
                id: string;
                content: {
                    logo: {
                        height: string;
                        imageURL: string;
                    };
                    title: {
                        fontSize: string;
                        string_id: string;
                        paddingBlock: string;
                        letterSpacing: number;
                        paddingInline: string;
                    };
                    subtitle: {
                        fontSize: string;
                        string_id: string;
                        lineHeight: string;
                        marginBlock: string;
                        letterSpacing: number;
                        paddingInline: string;
                    };
                    dismiss_button: {
                        action: {
                            data: {
                                id: string;
                            };
                            type: string;
                            navigate: boolean;
                        };
                    };
                    primary_button: {
                        label: {
                            string_id: string;
                            paddingBlock: string;
                        };
                        action: {
                            data: {
                                args: string;
                                where: string;
                            };
                            type: string;
                            navigate: boolean;
                        };
                    };
                    secondary_button: {
                        label: {
                            string_id: string;
                            marginBlock: string;
                        };
                        action: {
                            navigate: boolean;
                        };
                    };
                };
            }[];
            backdrop: string;
            template: string;
            transitions: boolean;
            text?: undefined;
            layout?: undefined;
            buttons?: undefined;
            anchor_id?: undefined;
            bucket_id?: undefined;
            heading_text?: undefined;
            skip_address_bar_notifier?: undefined;
        };
        trigger: {
            id: string;
        };
        template: string;
        frequency: {
            custom: {
                cap: number;
                period: number;
            }[];
            lifetime: number;
        };
        targeting: string;
        priority?: undefined;
    } | {
        id: string;
        groups: string[];
        content: {
            id: string;
            screens: {
                id: string;
                content: {
                    logo: {
                        height: string;
                        imageURL: string;
                    };
                    title: {
                        fontSize: string;
                        string_id: string;
                        fontWeight: string;
                        lineHeight: string;
                        marginBlock: string;
                        letterSpacing: string;
                    };
                    subtitle: {
                        fontSize: string;
                        string_id: string;
                        lineHeight: string;
                        marginBlock: string;
                        letterSpacing: string;
                        paddingInline: string;
                    };
                    title_style: string;
                    primary_button: {
                        label: {
                            string_id: string;
                            paddingBlock: string;
                            paddingInline: string;
                        };
                        action: {
                            type: string;
                            navigate: boolean;
                        };
                    };
                    secondary_button: {
                        label: {
                            fontSize: string;
                            string_id: string;
                            lineHeight: string;
                            marginBlock: string;
                        };
                        action: {
                            navigate: boolean;
                        };
                    };
                };
            }[];
            backdrop: string;
            template: string;
            transitions: boolean;
            text?: undefined;
            layout?: undefined;
            buttons?: undefined;
            anchor_id?: undefined;
            bucket_id?: undefined;
            heading_text?: undefined;
            skip_address_bar_notifier?: undefined;
            modal?: undefined;
        };
        trigger: {
            id: string;
        };
        priority: number;
        template: string;
        frequency: {
            lifetime: number;
            custom?: undefined;
        };
        targeting: string;
    })[];
}
