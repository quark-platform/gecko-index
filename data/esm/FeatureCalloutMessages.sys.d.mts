export namespace FeatureCalloutMessages {
    function getMessages(): ({
        id: string;
        template: string;
        content: {
            id: string;
            template: string;
            modal: string;
            tour_pref_name: string;
            screens: {
                id: string;
                content: {
                    title: {
                        fontSize: string;
                        fontWeight: number;
                        string_id: string;
                    };
                    subtitle: {
                        fontSize: string;
                        fontWeight: number;
                        marginBlock: string;
                        marginInline: string;
                        string_id: string;
                    };
                    logo: {
                        height: string;
                    };
                    primary_button: {
                        label: {
                            string_id: string;
                        };
                        action: {
                            type: string;
                            data: {
                                pref: {
                                    name: string;
                                    value: string;
                                };
                            };
                            navigate: boolean;
                        };
                    };
                    secondary_button: {
                        label: {
                            string_id: string;
                        };
                        action: {
                            type: string;
                            data: {
                                pref: {
                                    name: string;
                                    value: string;
                                };
                            };
                            navigate: boolean;
                        };
                    };
                };
            }[];
            backdrop?: undefined;
            transitions?: undefined;
            disableHistoryUpdates?: undefined;
        };
        priority: number;
        trigger: {
            id: string;
        };
        frequency: {
            lifetime: number;
        };
        targeting: string;
    } | {
        id: string;
        template: string;
        content: {
            id: string;
            template: string;
            backdrop: string;
            transitions: boolean;
            disableHistoryUpdates: boolean;
            tour_pref_name: string;
            screens: ({
                id: string;
                anchors: {
                    selector: string;
                    arrow_position: string;
                }[];
                content: {
                    position: string;
                    title: {
                        string_id: string;
                    };
                    subtitle: {
                        string_id: string;
                    };
                    logo: {
                        imageURL: string;
                        darkModeImageURL: string;
                        height: string;
                    };
                    primary_button: {
                        label: {
                            string_id: string;
                        };
                        style: string;
                        action: {
                            type: string;
                            data: {
                                pref: {
                                    name: string;
                                    value: string;
                                };
                            };
                        };
                    };
                    dismiss_button: {
                        action: {
                            type: string;
                            data: {
                                pref: {
                                    name: string;
                                    value: string;
                                };
                            };
                        };
                    };
                    page_event_listeners: {
                        params: {
                            type: string;
                            selectors: string;
                        };
                        action: {
                            reposition: boolean;
                        };
                    }[];
                };
            } | {
                id: string;
                anchors: {
                    selector: string;
                    arrow_position: string;
                }[];
                content: {
                    position: string;
                    title: {
                        string_id: string;
                    };
                    subtitle: {
                        string_id: string;
                    };
                    primary_button: {
                        label: {
                            string_id: string;
                        };
                        style: string;
                        action: {
                            type: string;
                            data: {
                                pref: {
                                    name: string;
                                    value: string;
                                };
                            };
                        };
                    };
                    dismiss_button: {
                        action: {
                            type: string;
                            data: {
                                pref: {
                                    name: string;
                                    value: string;
                                };
                            };
                        };
                    };
                    page_event_listeners: {
                        params: {
                            type: string;
                            selectors: string;
                        };
                        action: {
                            reposition: boolean;
                        };
                    }[];
                    logo?: undefined;
                };
            })[];
            modal?: undefined;
        };
        priority: number;
        targeting: string;
        trigger: {
            id: string;
        };
        frequency?: undefined;
    } | {
        id: string;
        template: string;
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
                    arrow_position: string;
                }[];
                content: {
                    position: string;
                    title: {
                        string_id: string;
                    };
                    subtitle: {
                        string_id: string;
                    };
                    logo: {
                        imageURL: string;
                        darkModeImageURL: string;
                        height: string;
                    };
                    primary_button: {
                        label: {
                            string_id: string;
                        };
                        style: string;
                        action: {
                            type: string;
                            navigate: boolean;
                            data: {
                                selector: string;
                            };
                        };
                    };
                    dismiss_button: {
                        action: {
                            navigate: boolean;
                        };
                    };
                    page_event_listeners: {
                        params: {
                            type: string;
                            selectors: string;
                        };
                        action: {
                            reposition: boolean;
                        };
                    }[];
                };
            }[];
            modal?: undefined;
            tour_pref_name?: undefined;
        };
        priority: number;
        targeting: string;
        frequency: {
            lifetime: number;
        };
        trigger: {
            id: string;
        };
    } | {
        id: string;
        template: string;
        content: {
            id: string;
            template: string;
            backdrop: string;
            transitions: boolean;
            disableHistoryUpdates: boolean;
            tour_pref_name: string;
            screens: {
                id: string;
                anchors: {
                    selector: string;
                    arrow_position: string;
                    absolute_position: {
                        top: string;
                        right: string;
                    };
                }[];
                content: {
                    position: string;
                    title: {
                        string_id: string;
                    };
                    subtitle: {
                        string_id: string;
                    };
                    primary_button: {
                        label: {
                            string_id: string;
                        };
                        style: string;
                        action: {
                            type: string;
                            data: {
                                pref: {
                                    name: string;
                                    value: string;
                                };
                            };
                        };
                    };
                    dismiss_button: {
                        action: {
                            type: string;
                            data: {
                                pref: {
                                    name: string;
                                    value: string;
                                };
                            };
                        };
                    };
                };
            }[];
            modal?: undefined;
        };
        priority: number;
        targeting: string;
        trigger: {
            id: string;
        };
        frequency?: undefined;
    } | {
        id: string;
        template: string;
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
                    no_open_on_anchor: boolean;
                }[];
                content: {
                    position: string;
                    title_logo: {
                        imageURL: string;
                        alignment: string;
                    };
                    title: {
                        string_id: string;
                        marginInline: string;
                        fontWeight: string;
                    };
                    dismiss_button: {
                        action: {
                            dismiss: boolean;
                        };
                        size: string;
                        marginBlock: string;
                        marginInline: string;
                    };
                    page_event_listeners: {
                        params: {
                            type: string;
                            selectors: string;
                        };
                        action: {
                            dismiss: boolean;
                        };
                    }[];
                };
            }[];
            modal?: undefined;
            tour_pref_name?: undefined;
        };
        priority: number;
        targeting: string;
        trigger: {
            id: string;
        };
        frequency: {
            lifetime: number;
        };
    } | {
        id: string;
        template: string;
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
                    no_open_on_anchor: boolean;
                }[];
                content: {
                    position: string;
                    title_logo: {
                        imageURL: string;
                    };
                    title: {
                        string_id: string;
                        marginInline: string;
                    };
                    subtitle: {
                        string_id: string;
                    };
                    dismiss_button: {
                        action: {
                            dismiss: boolean;
                        };
                        size: string;
                        marginBlock: string;
                        marginInline: string;
                    };
                    page_event_listeners: {
                        params: {
                            type: string;
                            selectors: string;
                        };
                        action: {
                            dismiss: boolean;
                        };
                    }[];
                };
            }[];
            modal?: undefined;
            tour_pref_name?: undefined;
        };
        priority: number;
        targeting: string;
        trigger: {
            id: string;
        };
        frequency: {
            lifetime: number;
        };
    } | {
        id: string;
        template: string;
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
                    no_open_on_anchor: boolean;
                }[];
                content: {
                    position: string;
                    title: {
                        string_id: string;
                    };
                    subtitle: {
                        string_id: string;
                    };
                    logo: {
                        imageURL: string;
                        darkModeImageURL: string;
                        height: string;
                    };
                    dismiss_button: {
                        action: {
                            dismiss: boolean;
                        };
                        size: string;
                        marginBlock: string;
                        marginInline: string;
                    };
                    page_event_listeners: {
                        params: {
                            type: string;
                            selectors: string;
                        };
                        action: {
                            dismiss: boolean;
                        };
                    }[];
                };
            }[];
            modal?: undefined;
            tour_pref_name?: undefined;
        };
        priority: number;
        targeting: string;
        trigger: {
            id: string;
        };
        frequency: {
            lifetime: number;
        };
    })[];
}
