export namespace PanelTestProvider {
    function getMessages(): Promise<({
        targeting: string;
        id: string;
        template: string;
        content: {
            action: {
                id: string;
                data: {
                    url: string;
                    expireDelta: number;
                };
            };
            bucket_id?: undefined;
            published_date?: undefined;
            title?: undefined;
            icon_url?: undefined;
            icon_alt?: undefined;
            body?: undefined;
            link_text?: undefined;
            cta_url?: undefined;
            cta_type?: undefined;
            cta_where?: undefined;
            layout?: undefined;
            category?: undefined;
            notification_text?: undefined;
            heading_text?: undefined;
            info_icon?: undefined;
            text?: undefined;
            icon?: undefined;
            icon_class?: undefined;
            persistent_doorhanger?: undefined;
            buttons?: undefined;
            id?: undefined;
            template?: undefined;
            backdrop?: undefined;
            transitions?: undefined;
            screens?: undefined;
            promoEnabled?: undefined;
            promoType?: undefined;
            infoEnabled?: undefined;
            infoBody?: undefined;
            infoLinkText?: undefined;
            infoTitleEnabled?: undefined;
            promoLinkType?: undefined;
            promoLinkText?: undefined;
            promoSectionStyle?: undefined;
            promoHeader?: undefined;
            promoTitle?: undefined;
            promoTitleEnabled?: undefined;
            promoImageLarge?: undefined;
            promoButton?: undefined;
            infoIcon?: undefined;
            infoTitle?: undefined;
            image_url?: undefined;
            launch_url?: undefined;
            requireInteraction?: undefined;
            actions?: undefined;
            tag?: undefined;
            launch_action?: undefined;
            disableHistoryUpdates?: undefined;
        };
        trigger: {
            id: string;
            patterns?: undefined;
        };
        order?: undefined;
        groups?: undefined;
        frequency?: undefined;
        priority?: undefined;
        weight?: undefined;
    } | {
        targeting: string;
        id: string;
        template: string;
        order: number;
        content: {
            bucket_id: string;
            published_date: number;
            title: string;
            icon_url: string;
            icon_alt: {
                string_id: string;
            };
            body: string;
            link_text: string;
            cta_url: string;
            cta_type: string;
            action?: undefined;
            cta_where?: undefined;
            layout?: undefined;
            category?: undefined;
            notification_text?: undefined;
            heading_text?: undefined;
            info_icon?: undefined;
            text?: undefined;
            icon?: undefined;
            icon_class?: undefined;
            persistent_doorhanger?: undefined;
            buttons?: undefined;
            id?: undefined;
            template?: undefined;
            backdrop?: undefined;
            transitions?: undefined;
            screens?: undefined;
            promoEnabled?: undefined;
            promoType?: undefined;
            infoEnabled?: undefined;
            infoBody?: undefined;
            infoLinkText?: undefined;
            infoTitleEnabled?: undefined;
            promoLinkType?: undefined;
            promoLinkText?: undefined;
            promoSectionStyle?: undefined;
            promoHeader?: undefined;
            promoTitle?: undefined;
            promoTitleEnabled?: undefined;
            promoImageLarge?: undefined;
            promoButton?: undefined;
            infoIcon?: undefined;
            infoTitle?: undefined;
            image_url?: undefined;
            launch_url?: undefined;
            requireInteraction?: undefined;
            actions?: undefined;
            tag?: undefined;
            launch_action?: undefined;
            disableHistoryUpdates?: undefined;
        };
        trigger: {
            id: string;
            patterns?: undefined;
        };
        groups?: undefined;
        frequency?: undefined;
        priority?: undefined;
        weight?: undefined;
    } | {
        targeting: string;
        id: string;
        template: string;
        order: number;
        content: {
            bucket_id: string;
            published_date: number;
            title: string;
            icon_url: string;
            icon_alt: string;
            body: string;
            cta_url: string;
            cta_type: string;
            action?: undefined;
            link_text?: undefined;
            cta_where?: undefined;
            layout?: undefined;
            category?: undefined;
            notification_text?: undefined;
            heading_text?: undefined;
            info_icon?: undefined;
            text?: undefined;
            icon?: undefined;
            icon_class?: undefined;
            persistent_doorhanger?: undefined;
            buttons?: undefined;
            id?: undefined;
            template?: undefined;
            backdrop?: undefined;
            transitions?: undefined;
            screens?: undefined;
            promoEnabled?: undefined;
            promoType?: undefined;
            infoEnabled?: undefined;
            infoBody?: undefined;
            infoLinkText?: undefined;
            infoTitleEnabled?: undefined;
            promoLinkType?: undefined;
            promoLinkText?: undefined;
            promoSectionStyle?: undefined;
            promoHeader?: undefined;
            promoTitle?: undefined;
            promoTitleEnabled?: undefined;
            promoImageLarge?: undefined;
            promoButton?: undefined;
            infoIcon?: undefined;
            infoTitle?: undefined;
            image_url?: undefined;
            launch_url?: undefined;
            requireInteraction?: undefined;
            actions?: undefined;
            tag?: undefined;
            launch_action?: undefined;
            disableHistoryUpdates?: undefined;
        };
        trigger: {
            id: string;
            patterns?: undefined;
        };
        groups?: undefined;
        frequency?: undefined;
        priority?: undefined;
        weight?: undefined;
    } | {
        targeting: string;
        id: string;
        template: string;
        order: number;
        content: {
            bucket_id: string;
            published_date: number;
            title: string;
            body: string;
            link_text: string;
            cta_url: string;
            cta_type: string;
            action?: undefined;
            icon_url?: undefined;
            icon_alt?: undefined;
            cta_where?: undefined;
            layout?: undefined;
            category?: undefined;
            notification_text?: undefined;
            heading_text?: undefined;
            info_icon?: undefined;
            text?: undefined;
            icon?: undefined;
            icon_class?: undefined;
            persistent_doorhanger?: undefined;
            buttons?: undefined;
            id?: undefined;
            template?: undefined;
            backdrop?: undefined;
            transitions?: undefined;
            screens?: undefined;
            promoEnabled?: undefined;
            promoType?: undefined;
            infoEnabled?: undefined;
            infoBody?: undefined;
            infoLinkText?: undefined;
            infoTitleEnabled?: undefined;
            promoLinkType?: undefined;
            promoLinkText?: undefined;
            promoSectionStyle?: undefined;
            promoHeader?: undefined;
            promoTitle?: undefined;
            promoTitleEnabled?: undefined;
            promoImageLarge?: undefined;
            promoButton?: undefined;
            infoIcon?: undefined;
            infoTitle?: undefined;
            image_url?: undefined;
            launch_url?: undefined;
            requireInteraction?: undefined;
            actions?: undefined;
            tag?: undefined;
            launch_action?: undefined;
            disableHistoryUpdates?: undefined;
        };
        trigger: {
            id: string;
            patterns?: undefined;
        };
        groups?: undefined;
        frequency?: undefined;
        priority?: undefined;
        weight?: undefined;
    } | {
        targeting: string;
        id: string;
        template: string;
        order: number;
        content: {
            bucket_id: string;
            published_date: number;
            title: string;
            icon_url: string;
            icon_alt: string;
            body: string;
            cta_url: string;
            cta_type: string;
            link_text: string;
            action?: undefined;
            cta_where?: undefined;
            layout?: undefined;
            category?: undefined;
            notification_text?: undefined;
            heading_text?: undefined;
            info_icon?: undefined;
            text?: undefined;
            icon?: undefined;
            icon_class?: undefined;
            persistent_doorhanger?: undefined;
            buttons?: undefined;
            id?: undefined;
            template?: undefined;
            backdrop?: undefined;
            transitions?: undefined;
            screens?: undefined;
            promoEnabled?: undefined;
            promoType?: undefined;
            infoEnabled?: undefined;
            infoBody?: undefined;
            infoLinkText?: undefined;
            infoTitleEnabled?: undefined;
            promoLinkType?: undefined;
            promoLinkText?: undefined;
            promoSectionStyle?: undefined;
            promoHeader?: undefined;
            promoTitle?: undefined;
            promoTitleEnabled?: undefined;
            promoImageLarge?: undefined;
            promoButton?: undefined;
            infoIcon?: undefined;
            infoTitle?: undefined;
            image_url?: undefined;
            launch_url?: undefined;
            requireInteraction?: undefined;
            actions?: undefined;
            tag?: undefined;
            launch_action?: undefined;
            disableHistoryUpdates?: undefined;
        };
        trigger: {
            id: string;
            patterns?: undefined;
        };
        groups?: undefined;
        frequency?: undefined;
        priority?: undefined;
        weight?: undefined;
    } | {
        targeting: string;
        id: string;
        template: string;
        order: number;
        content: {
            bucket_id: string;
            published_date: number;
            title: string;
            body: string;
            cta_url: string;
            cta_where: string;
            cta_type: string;
            link_text: string;
            action?: undefined;
            icon_url?: undefined;
            icon_alt?: undefined;
            layout?: undefined;
            category?: undefined;
            notification_text?: undefined;
            heading_text?: undefined;
            info_icon?: undefined;
            text?: undefined;
            icon?: undefined;
            icon_class?: undefined;
            persistent_doorhanger?: undefined;
            buttons?: undefined;
            id?: undefined;
            template?: undefined;
            backdrop?: undefined;
            transitions?: undefined;
            screens?: undefined;
            promoEnabled?: undefined;
            promoType?: undefined;
            infoEnabled?: undefined;
            infoBody?: undefined;
            infoLinkText?: undefined;
            infoTitleEnabled?: undefined;
            promoLinkType?: undefined;
            promoLinkText?: undefined;
            promoSectionStyle?: undefined;
            promoHeader?: undefined;
            promoTitle?: undefined;
            promoTitleEnabled?: undefined;
            promoImageLarge?: undefined;
            promoButton?: undefined;
            infoIcon?: undefined;
            infoTitle?: undefined;
            image_url?: undefined;
            launch_url?: undefined;
            requireInteraction?: undefined;
            actions?: undefined;
            tag?: undefined;
            launch_action?: undefined;
            disableHistoryUpdates?: undefined;
        };
        trigger: {
            id: string;
            patterns?: undefined;
        };
        groups?: undefined;
        frequency?: undefined;
        priority?: undefined;
        weight?: undefined;
    } | {
        targeting: string;
        id: string;
        template: string;
        groups: string[];
        content: {
            layout: string;
            category: string;
            bucket_id: string;
            notification_text: string;
            heading_text: {
                string_id: string;
            };
            info_icon: {
                label: {
                    attributes: {
                        tooltiptext: {
                            string_id: string;
                        };
                    };
                };
                sumo_path: string;
            };
            text: {
                string_id: string;
            };
            icon: string;
            icon_class: string;
            persistent_doorhanger: boolean;
            buttons: {
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
            action?: undefined;
            published_date?: undefined;
            title?: undefined;
            icon_url?: undefined;
            icon_alt?: undefined;
            body?: undefined;
            link_text?: undefined;
            cta_url?: undefined;
            cta_type?: undefined;
            cta_where?: undefined;
            id?: undefined;
            template?: undefined;
            backdrop?: undefined;
            transitions?: undefined;
            screens?: undefined;
            promoEnabled?: undefined;
            promoType?: undefined;
            infoEnabled?: undefined;
            infoBody?: undefined;
            infoLinkText?: undefined;
            infoTitleEnabled?: undefined;
            promoLinkType?: undefined;
            promoLinkText?: undefined;
            promoSectionStyle?: undefined;
            promoHeader?: undefined;
            promoTitle?: undefined;
            promoTitleEnabled?: undefined;
            promoImageLarge?: undefined;
            promoButton?: undefined;
            infoIcon?: undefined;
            infoTitle?: undefined;
            image_url?: undefined;
            launch_url?: undefined;
            requireInteraction?: undefined;
            actions?: undefined;
            tag?: undefined;
            launch_action?: undefined;
            disableHistoryUpdates?: undefined;
        };
        trigger: {
            id: string;
            patterns: string[];
        };
        order?: undefined;
        frequency?: undefined;
        priority?: undefined;
        weight?: undefined;
    } | {
        targeting: string;
        id: string;
        groups: string[];
        template: string;
        content: {
            id: string;
            template: string;
            backdrop: string;
            transitions: boolean;
            screens: ({
                id: string;
                content: {
                    has_noodles: boolean;
                    title: {
                        string_id: string;
                        fontSize?: undefined;
                        fontWeight?: undefined;
                        raw?: undefined;
                    };
                    logo: {
                        imageURL: string;
                        darkModeImageURL: string;
                        reducedMotionImageURL: string;
                        darkModeReducedMotionImageURL: string;
                        alt: string;
                        height?: undefined;
                    };
                    hero_text: {
                        string_id: string;
                    };
                    primary_button: {
                        label: {
                            string_id: string;
                        };
                        action: {
                            navigate: boolean;
                            type: string;
                        };
                    };
                    secondary_button: {
                        label: {
                            string_id: string;
                        };
                        action: {
                            navigate: boolean;
                        };
                    };
                    dismiss_button: {
                        action: {
                            dismiss: boolean;
                        };
                    };
                    subtitle?: undefined;
                    background?: undefined;
                    text_color?: undefined;
                    progress_bar?: undefined;
                    title_style?: undefined;
                };
            } | {
                id: string;
                content: {
                    has_noodles: boolean;
                    logo: {
                        imageURL: string;
                        height: string;
                        darkModeImageURL?: undefined;
                        reducedMotionImageURL?: undefined;
                        darkModeReducedMotionImageURL?: undefined;
                        alt?: undefined;
                    };
                    title: {
                        fontSize: string;
                        fontWeight: number;
                        string_id: string;
                        raw?: undefined;
                    };
                    subtitle: {
                        string_id: string;
                    };
                    primary_button: {
                        label: {
                            string_id: string;
                        };
                        action: {
                            navigate: boolean;
                            type: string;
                        };
                    };
                    secondary_button: {
                        label: {
                            string_id: string;
                        };
                        action: {
                            navigate: boolean;
                        };
                    };
                    hero_text?: undefined;
                    dismiss_button?: undefined;
                    background?: undefined;
                    text_color?: undefined;
                    progress_bar?: undefined;
                    title_style?: undefined;
                };
            } | {
                id: string;
                content: {
                    background: string;
                    text_color: string;
                    progress_bar: boolean;
                    logo: {
                        imageURL: string;
                        darkModeImageURL?: undefined;
                        reducedMotionImageURL?: undefined;
                        darkModeReducedMotionImageURL?: undefined;
                        alt?: undefined;
                        height?: undefined;
                    };
                    title: string;
                    subtitle: string;
                    primary_button: {
                        label: string;
                        action: {
                            navigate: boolean;
                            type?: undefined;
                        };
                    };
                    secondary_button: {
                        label: {
                            string_id: string;
                        };
                        action: {
                            navigate: boolean;
                        };
                    };
                    has_noodles?: undefined;
                    hero_text?: undefined;
                    dismiss_button?: undefined;
                    title_style?: undefined;
                };
            } | {
                id: string;
                content: {
                    background: string;
                    progress_bar: boolean;
                    logo: {
                        height: string;
                        imageURL: string;
                        darkModeImageURL?: undefined;
                        reducedMotionImageURL?: undefined;
                        darkModeReducedMotionImageURL?: undefined;
                        alt?: undefined;
                    };
                    title: {
                        fontSize: string;
                        fontWeight: number;
                        raw: string;
                        string_id?: undefined;
                    };
                    title_style: string;
                    text_color: string;
                    subtitle: string;
                    primary_button: {
                        label: string;
                        action: {
                            navigate: boolean;
                            type?: undefined;
                        };
                    };
                    secondary_button: {
                        label: {
                            string_id: string;
                        };
                        action: {
                            navigate: boolean;
                        };
                    };
                    has_noodles?: undefined;
                    hero_text?: undefined;
                    dismiss_button?: undefined;
                };
            })[];
            action?: undefined;
            bucket_id?: undefined;
            published_date?: undefined;
            title?: undefined;
            icon_url?: undefined;
            icon_alt?: undefined;
            body?: undefined;
            link_text?: undefined;
            cta_url?: undefined;
            cta_type?: undefined;
            cta_where?: undefined;
            layout?: undefined;
            category?: undefined;
            notification_text?: undefined;
            heading_text?: undefined;
            info_icon?: undefined;
            text?: undefined;
            icon?: undefined;
            icon_class?: undefined;
            persistent_doorhanger?: undefined;
            buttons?: undefined;
            promoEnabled?: undefined;
            promoType?: undefined;
            infoEnabled?: undefined;
            infoBody?: undefined;
            infoLinkText?: undefined;
            infoTitleEnabled?: undefined;
            promoLinkType?: undefined;
            promoLinkText?: undefined;
            promoSectionStyle?: undefined;
            promoHeader?: undefined;
            promoTitle?: undefined;
            promoTitleEnabled?: undefined;
            promoImageLarge?: undefined;
            promoButton?: undefined;
            infoIcon?: undefined;
            infoTitle?: undefined;
            image_url?: undefined;
            launch_url?: undefined;
            requireInteraction?: undefined;
            actions?: undefined;
            tag?: undefined;
            launch_action?: undefined;
            disableHistoryUpdates?: undefined;
        };
        frequency: {
            lifetime: number;
            custom?: undefined;
        };
        trigger: {
            id: string;
            patterns?: undefined;
        };
        order?: undefined;
        priority?: undefined;
        weight?: undefined;
    } | {
        targeting: string;
        id: string;
        groups: string[];
        template: string;
        content: {
            template: string;
            backdrop: string;
            screens: {
                id: string;
                order: number;
                content: {
                    logo: {
                        imageURL: string;
                        height: string;
                    };
                    title: {
                        string_id: string;
                    };
                    subtitle: {
                        string_id: string;
                    };
                    dismiss_button: {
                        action: {
                            dismiss: boolean;
                        };
                    };
                    ios: {
                        action: {
                            data: {
                                args: string;
                                where: string;
                            };
                            type: string;
                            navigate: boolean;
                        };
                    };
                    android: {
                        action: {
                            data: {
                                args: string;
                                where: string;
                            };
                            type: string;
                            navigate: boolean;
                        };
                    };
                    email_link: {
                        action: {
                            data: {
                                args: string;
                                where: string;
                            };
                            type: string;
                            navigate: boolean;
                        };
                    };
                    tiles: {
                        type: string;
                        data: {
                            QR_code: {
                                image_url: string;
                                alt_text: {
                                    string_id: string;
                                };
                            };
                            email: {
                                link_text: string;
                            };
                            marketplace_buttons: string[];
                        };
                    };
                };
            }[];
            action?: undefined;
            bucket_id?: undefined;
            published_date?: undefined;
            title?: undefined;
            icon_url?: undefined;
            icon_alt?: undefined;
            body?: undefined;
            link_text?: undefined;
            cta_url?: undefined;
            cta_type?: undefined;
            cta_where?: undefined;
            layout?: undefined;
            category?: undefined;
            notification_text?: undefined;
            heading_text?: undefined;
            info_icon?: undefined;
            text?: undefined;
            icon?: undefined;
            icon_class?: undefined;
            persistent_doorhanger?: undefined;
            buttons?: undefined;
            id?: undefined;
            transitions?: undefined;
            promoEnabled?: undefined;
            promoType?: undefined;
            infoEnabled?: undefined;
            infoBody?: undefined;
            infoLinkText?: undefined;
            infoTitleEnabled?: undefined;
            promoLinkType?: undefined;
            promoLinkText?: undefined;
            promoSectionStyle?: undefined;
            promoHeader?: undefined;
            promoTitle?: undefined;
            promoTitleEnabled?: undefined;
            promoImageLarge?: undefined;
            promoButton?: undefined;
            infoIcon?: undefined;
            infoTitle?: undefined;
            image_url?: undefined;
            launch_url?: undefined;
            requireInteraction?: undefined;
            actions?: undefined;
            tag?: undefined;
            launch_action?: undefined;
            disableHistoryUpdates?: undefined;
        };
        trigger: {
            id: string;
            patterns?: undefined;
        };
        order?: undefined;
        frequency?: undefined;
        priority?: undefined;
        weight?: undefined;
    } | {
        targeting: string;
        id: string;
        template: string;
        content: {
            promoEnabled: boolean;
            promoType: string;
            infoEnabled: boolean;
            infoBody: string;
            infoLinkText: string;
            infoTitleEnabled: boolean;
            promoLinkType: string;
            promoLinkText: string;
            promoSectionStyle: string;
            promoHeader: string;
            promoTitle: string;
            promoTitleEnabled: boolean;
            promoImageLarge: string;
            promoButton: {
                action: {
                    type: string;
                    data: {
                        args: string;
                        actions?: undefined;
                    };
                };
            };
            action?: undefined;
            bucket_id?: undefined;
            published_date?: undefined;
            title?: undefined;
            icon_url?: undefined;
            icon_alt?: undefined;
            body?: undefined;
            link_text?: undefined;
            cta_url?: undefined;
            cta_type?: undefined;
            cta_where?: undefined;
            layout?: undefined;
            category?: undefined;
            notification_text?: undefined;
            heading_text?: undefined;
            info_icon?: undefined;
            text?: undefined;
            icon?: undefined;
            icon_class?: undefined;
            persistent_doorhanger?: undefined;
            buttons?: undefined;
            id?: undefined;
            template?: undefined;
            backdrop?: undefined;
            transitions?: undefined;
            screens?: undefined;
            infoIcon?: undefined;
            infoTitle?: undefined;
            image_url?: undefined;
            launch_url?: undefined;
            requireInteraction?: undefined;
            actions?: undefined;
            tag?: undefined;
            launch_action?: undefined;
            disableHistoryUpdates?: undefined;
        };
        groups: string[];
        frequency: {
            lifetime: number;
            custom?: undefined;
        };
        trigger?: undefined;
        order?: undefined;
        priority?: undefined;
        weight?: undefined;
    } | {
        targeting: string;
        id: string;
        template: string;
        groups: string[];
        content: {
            infoBody: string;
            infoEnabled: boolean;
            infoIcon: string;
            infoLinkText: string;
            infoTitle: string;
            infoTitleEnabled: boolean;
            promoEnabled: boolean;
            promoType: string;
            promoHeader: string;
            promoImageLarge: string;
            promoLinkText: string;
            promoLinkType: string;
            promoSectionStyle: string;
            promoTitle: string;
            promoTitleEnabled: boolean;
            promoButton: {
                action: {
                    type: string;
                    data: {
                        actions: ({
                            type: string;
                            data: {
                                pref: {
                                    name: string;
                                    value: boolean;
                                };
                                id?: undefined;
                                args?: undefined;
                                where?: undefined;
                            };
                        } | {
                            type: string;
                            data?: undefined;
                        } | {
                            type: string;
                            data: {
                                id: string;
                                pref?: undefined;
                                args?: undefined;
                                where?: undefined;
                            };
                        } | {
                            type: string;
                            data: {
                                args: string;
                                where: string;
                                pref?: undefined;
                                id?: undefined;
                            };
                        })[];
                        args?: undefined;
                    };
                };
            };
            action?: undefined;
            bucket_id?: undefined;
            published_date?: undefined;
            title?: undefined;
            icon_url?: undefined;
            icon_alt?: undefined;
            body?: undefined;
            link_text?: undefined;
            cta_url?: undefined;
            cta_type?: undefined;
            cta_where?: undefined;
            layout?: undefined;
            category?: undefined;
            notification_text?: undefined;
            heading_text?: undefined;
            info_icon?: undefined;
            text?: undefined;
            icon?: undefined;
            icon_class?: undefined;
            persistent_doorhanger?: undefined;
            buttons?: undefined;
            id?: undefined;
            template?: undefined;
            backdrop?: undefined;
            transitions?: undefined;
            screens?: undefined;
            image_url?: undefined;
            launch_url?: undefined;
            requireInteraction?: undefined;
            actions?: undefined;
            tag?: undefined;
            launch_action?: undefined;
            disableHistoryUpdates?: undefined;
        };
        priority: number;
        frequency: {
            custom: {
                cap: number;
                period: number;
            }[];
            lifetime: number;
        };
        trigger?: undefined;
        order?: undefined;
        weight?: undefined;
    } | {
        targeting: string;
        id: string;
        weight: number;
        template: string;
        content: {
            title: {
                string_id: string;
            };
            body: string;
            image_url: string;
            launch_url: string;
            requireInteraction: boolean;
            actions: ({
                action: string;
                title: string;
                windowsSystemActivationType: boolean;
            } | {
                action: string;
                title: string;
                windowsSystemActivationType?: undefined;
            })[];
            tag: string;
            action?: undefined;
            bucket_id?: undefined;
            published_date?: undefined;
            icon_url?: undefined;
            icon_alt?: undefined;
            link_text?: undefined;
            cta_url?: undefined;
            cta_type?: undefined;
            cta_where?: undefined;
            layout?: undefined;
            category?: undefined;
            notification_text?: undefined;
            heading_text?: undefined;
            info_icon?: undefined;
            text?: undefined;
            icon?: undefined;
            icon_class?: undefined;
            persistent_doorhanger?: undefined;
            buttons?: undefined;
            id?: undefined;
            template?: undefined;
            backdrop?: undefined;
            transitions?: undefined;
            screens?: undefined;
            promoEnabled?: undefined;
            promoType?: undefined;
            infoEnabled?: undefined;
            infoBody?: undefined;
            infoLinkText?: undefined;
            infoTitleEnabled?: undefined;
            promoLinkType?: undefined;
            promoLinkText?: undefined;
            promoSectionStyle?: undefined;
            promoHeader?: undefined;
            promoTitle?: undefined;
            promoTitleEnabled?: undefined;
            promoImageLarge?: undefined;
            promoButton?: undefined;
            infoIcon?: undefined;
            infoTitle?: undefined;
            launch_action?: undefined;
            disableHistoryUpdates?: undefined;
        };
        groups: string[];
        trigger: {
            id: string;
            patterns?: undefined;
        };
        frequency: {
            lifetime: number;
            custom?: undefined;
        };
        order?: undefined;
        priority?: undefined;
    } | {
        targeting: string;
        id: string;
        weight: number;
        template: string;
        content: {
            title: string;
            body: string;
            image_url: string;
            launch_action: {
                type: string;
                data: {
                    args: string;
                    where: string;
                };
            };
            requireInteraction: boolean;
            actions: ({
                action: string;
                title: string;
                windowsSystemActivationType: boolean;
                launch_action?: undefined;
            } | {
                action: string;
                title: string;
                launch_action: {
                    type: string;
                };
                windowsSystemActivationType?: undefined;
            })[];
            tag: string;
            action?: undefined;
            bucket_id?: undefined;
            published_date?: undefined;
            icon_url?: undefined;
            icon_alt?: undefined;
            link_text?: undefined;
            cta_url?: undefined;
            cta_type?: undefined;
            cta_where?: undefined;
            layout?: undefined;
            category?: undefined;
            notification_text?: undefined;
            heading_text?: undefined;
            info_icon?: undefined;
            text?: undefined;
            icon?: undefined;
            icon_class?: undefined;
            persistent_doorhanger?: undefined;
            buttons?: undefined;
            id?: undefined;
            template?: undefined;
            backdrop?: undefined;
            transitions?: undefined;
            screens?: undefined;
            promoEnabled?: undefined;
            promoType?: undefined;
            infoEnabled?: undefined;
            infoBody?: undefined;
            infoLinkText?: undefined;
            infoTitleEnabled?: undefined;
            promoLinkType?: undefined;
            promoLinkText?: undefined;
            promoSectionStyle?: undefined;
            promoHeader?: undefined;
            promoTitle?: undefined;
            promoTitleEnabled?: undefined;
            promoImageLarge?: undefined;
            promoButton?: undefined;
            infoIcon?: undefined;
            infoTitle?: undefined;
            launch_url?: undefined;
            disableHistoryUpdates?: undefined;
        };
        groups: string[];
        trigger: {
            id: string;
            patterns?: undefined;
        };
        frequency: {
            lifetime: number;
            custom?: undefined;
        };
        order?: undefined;
        priority?: undefined;
    } | {
        targeting: string;
        id: string;
        weight: number;
        template: string;
        content: {
            title: {
                string_id: string;
            };
            body: {
                string_id: string;
            };
            image_url: string;
            requireInteraction: boolean;
            actions: ({
                action: string;
                title: {
                    string_id: string;
                };
                windowsSystemActivationType?: undefined;
            } | {
                action: string;
                windowsSystemActivationType: boolean;
                title: {
                    string_id: string;
                };
            })[];
            tag: string;
            action?: undefined;
            bucket_id?: undefined;
            published_date?: undefined;
            icon_url?: undefined;
            icon_alt?: undefined;
            link_text?: undefined;
            cta_url?: undefined;
            cta_type?: undefined;
            cta_where?: undefined;
            layout?: undefined;
            category?: undefined;
            notification_text?: undefined;
            heading_text?: undefined;
            info_icon?: undefined;
            text?: undefined;
            icon?: undefined;
            icon_class?: undefined;
            persistent_doorhanger?: undefined;
            buttons?: undefined;
            id?: undefined;
            template?: undefined;
            backdrop?: undefined;
            transitions?: undefined;
            screens?: undefined;
            promoEnabled?: undefined;
            promoType?: undefined;
            infoEnabled?: undefined;
            infoBody?: undefined;
            infoLinkText?: undefined;
            infoTitleEnabled?: undefined;
            promoLinkType?: undefined;
            promoLinkText?: undefined;
            promoSectionStyle?: undefined;
            promoHeader?: undefined;
            promoTitle?: undefined;
            promoTitleEnabled?: undefined;
            promoImageLarge?: undefined;
            promoButton?: undefined;
            infoIcon?: undefined;
            infoTitle?: undefined;
            launch_url?: undefined;
            launch_action?: undefined;
            disableHistoryUpdates?: undefined;
        };
        groups: string[];
        trigger: {
            id: string;
            patterns?: undefined;
        };
        frequency: {
            lifetime: number;
            custom?: undefined;
        };
        order?: undefined;
        priority?: undefined;
    } | {
        targeting: string;
        id: string;
        groups: string[];
        template: string;
        content: {
            template: string;
            backdrop: string;
            screens: {
                id: string;
                content: {
                    logo: {};
                    tiles: {
                        type: string;
                    };
                    progress_bar: boolean;
                    migrate_start: {
                        action: {};
                    };
                    migrate_close: {
                        action: {
                            navigate: boolean;
                        };
                    };
                    secondary_button: {
                        label: {
                            string_id: string;
                        };
                        action: {
                            navigate: boolean;
                        };
                        has_arrow_icon: boolean;
                    };
                };
            }[];
            action?: undefined;
            bucket_id?: undefined;
            published_date?: undefined;
            title?: undefined;
            icon_url?: undefined;
            icon_alt?: undefined;
            body?: undefined;
            link_text?: undefined;
            cta_url?: undefined;
            cta_type?: undefined;
            cta_where?: undefined;
            layout?: undefined;
            category?: undefined;
            notification_text?: undefined;
            heading_text?: undefined;
            info_icon?: undefined;
            text?: undefined;
            icon?: undefined;
            icon_class?: undefined;
            persistent_doorhanger?: undefined;
            buttons?: undefined;
            id?: undefined;
            transitions?: undefined;
            promoEnabled?: undefined;
            promoType?: undefined;
            infoEnabled?: undefined;
            infoBody?: undefined;
            infoLinkText?: undefined;
            infoTitleEnabled?: undefined;
            promoLinkType?: undefined;
            promoLinkText?: undefined;
            promoSectionStyle?: undefined;
            promoHeader?: undefined;
            promoTitle?: undefined;
            promoTitleEnabled?: undefined;
            promoImageLarge?: undefined;
            promoButton?: undefined;
            infoIcon?: undefined;
            infoTitle?: undefined;
            image_url?: undefined;
            launch_url?: undefined;
            requireInteraction?: undefined;
            actions?: undefined;
            tag?: undefined;
            launch_action?: undefined;
            disableHistoryUpdates?: undefined;
        };
        trigger?: undefined;
        order?: undefined;
        frequency?: undefined;
        priority?: undefined;
        weight?: undefined;
    } | {
        targeting: string;
        id: string;
        template: string;
        groups: any[];
        content: {
            id: string;
            template: string;
            backdrop: string;
            transitions: boolean;
            disableHistoryUpdates: boolean;
            screens: {
                id: string;
                anchors: {
                    selector: string;
                    panel_position: {
                        anchor_attachment: string;
                        callout_attachment: string;
                    };
                }[];
                content: {
                    position: string;
                    title: {
                        raw: string;
                    };
                    subtitle: {
                        raw: string;
                    };
                    primary_button: {
                        label: {
                            raw: string;
                        };
                        action: {
                            navigate: boolean;
                        };
                    };
                    dismiss_button: {
                        action: {
                            dismiss: boolean;
                        };
                    };
                };
            }[];
            action?: undefined;
            bucket_id?: undefined;
            published_date?: undefined;
            title?: undefined;
            icon_url?: undefined;
            icon_alt?: undefined;
            body?: undefined;
            link_text?: undefined;
            cta_url?: undefined;
            cta_type?: undefined;
            cta_where?: undefined;
            layout?: undefined;
            category?: undefined;
            notification_text?: undefined;
            heading_text?: undefined;
            info_icon?: undefined;
            text?: undefined;
            icon?: undefined;
            icon_class?: undefined;
            persistent_doorhanger?: undefined;
            buttons?: undefined;
            promoEnabled?: undefined;
            promoType?: undefined;
            infoEnabled?: undefined;
            infoBody?: undefined;
            infoLinkText?: undefined;
            infoTitleEnabled?: undefined;
            promoLinkType?: undefined;
            promoLinkText?: undefined;
            promoSectionStyle?: undefined;
            promoHeader?: undefined;
            promoTitle?: undefined;
            promoTitleEnabled?: undefined;
            promoImageLarge?: undefined;
            promoButton?: undefined;
            infoIcon?: undefined;
            infoTitle?: undefined;
            image_url?: undefined;
            launch_url?: undefined;
            requireInteraction?: undefined;
            actions?: undefined;
            tag?: undefined;
            launch_action?: undefined;
        };
        trigger?: undefined;
        order?: undefined;
        frequency?: undefined;
        priority?: undefined;
        weight?: undefined;
    })[]>;
}
