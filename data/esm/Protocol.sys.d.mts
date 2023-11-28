export namespace Protocol {
    export { Description };
}
declare namespace Description {
    let domains: ({
        domain: string;
        experimental: boolean;
        dependencies: string[];
        types: ({
            id: string;
            description: string;
            type: string;
            enum?: undefined;
            properties?: undefined;
        } | {
            id: string;
            description: string;
            type: string;
            enum: string[];
            properties?: undefined;
        } | {
            id: string;
            description: string;
            type: string;
            properties: ({
                name: string;
                description: string;
                $ref: string;
                optional?: undefined;
                type?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                $ref: string;
                type?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                $ref?: undefined;
            })[];
            enum?: undefined;
        } | {
            id: string;
            type: string;
            properties: ({
                name: string;
                description: string;
                $ref: string;
                optional?: undefined;
                type?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                $ref?: undefined;
            })[];
            description?: undefined;
            enum?: undefined;
        } | {
            id: string;
            description: string;
            type: string;
            properties: ({
                name: string;
                description: string;
                $ref: string;
                optional?: undefined;
                type?: undefined;
                items?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                $ref?: undefined;
                items?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                items: {
                    $ref: string;
                };
                $ref?: undefined;
            })[];
            enum?: undefined;
        } | {
            id: string;
            description: string;
            type: string;
            properties: ({
                name: string;
                description: string;
                $ref: string;
                type?: undefined;
                optional?: undefined;
                items?: undefined;
            } | {
                name: string;
                description: string;
                type: string;
                $ref?: undefined;
                optional?: undefined;
                items?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                items: {
                    $ref: string;
                };
                $ref?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                $ref: string;
                type?: undefined;
                items?: undefined;
            })[];
            enum?: undefined;
        })[];
        commands: ({
            name: string;
            description: string;
            experimental?: undefined;
            parameters?: undefined;
            returns?: undefined;
        } | {
            name: string;
            description: string;
            experimental: boolean;
            parameters: ({
                name: string;
                description: string;
                optional: boolean;
                $ref: string;
                type?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                $ref?: undefined;
            })[];
            returns: {
                name: string;
                description: string;
                type: string;
                items: {
                    $ref: string;
                };
            }[];
        } | {
            name: string;
            description: string;
            experimental: boolean;
            returns: {
                name: string;
                type: string;
                items: {
                    $ref: string;
                };
            }[];
            parameters?: undefined;
        })[];
        events?: undefined;
        description?: undefined;
        deprecated?: undefined;
    } | {
        domain: string;
        experimental: boolean;
        dependencies: string[];
        types: ({
            id: string;
            description: string;
            type: string;
            properties: ({
                name: string;
                description: string;
                type: string;
                enum?: undefined;
                optional?: undefined;
                $ref?: undefined;
            } | {
                name: string;
                description: string;
                type: string;
                enum: string[];
                optional?: undefined;
                $ref?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                $ref: string;
                type?: undefined;
                enum?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                enum?: undefined;
                $ref?: undefined;
            })[];
        } | {
            id: string;
            description: string;
            type: string;
            properties: ({
                name: string;
                description: string;
                optional: boolean;
                type: string;
                items?: undefined;
            } | {
                name: string;
                description: string;
                type: string;
                items: {
                    $ref: string;
                };
                optional?: undefined;
            })[];
        })[];
        commands: ({
            name: string;
            description: string;
            parameters?: undefined;
            returns?: undefined;
        } | {
            name: string;
            description: string;
            parameters: {
                name: string;
                description: string;
                type: string;
            }[];
            returns: {
                name: string;
                description: string;
                type: string;
            }[];
        } | {
            name: string;
            description: string;
            returns: {
                name: string;
                description: string;
                type: string;
            }[];
            parameters?: undefined;
        } | {
            name: string;
            description: string;
            parameters: {
                name: string;
                description: string;
                type: string;
            }[];
            returns: {
                name: string;
                description: string;
                $ref: string;
            }[];
        } | {
            name: string;
            description: string;
            parameters: ({
                name: string;
                description: string;
                type: string;
                items: {
                    type: string;
                };
            } | {
                name: string;
                description: string;
                type: string;
                items?: undefined;
            })[];
            returns?: undefined;
        })[];
        events: ({
            name: string;
            description: string;
            parameters: {
                name: string;
                description: string;
                type: string;
            }[];
        } | {
            name: string;
            description: string;
            parameters: {
                name: string;
                description: string;
                $ref: string;
            }[];
        })[];
        description?: undefined;
        deprecated?: undefined;
    } | {
        domain: string;
        experimental: boolean;
        types: ({
            id: string;
            description: string;
            type: string;
            properties: ({
                name: string;
                description: string;
                type: string;
                items?: undefined;
            } | {
                name: string;
                description: string;
                type: string;
                items: {
                    $ref: string;
                };
            })[];
        } | {
            id: string;
            description: string;
            type: string;
            properties: ({
                name: string;
                description: string;
                $ref: string;
                type?: undefined;
            } | {
                name: string;
                description: string;
                type: string;
                $ref?: undefined;
            })[];
        })[];
        commands: ({
            name: string;
            description: string;
            parameters?: undefined;
            returns?: undefined;
        } | {
            name: string;
            description: string;
            parameters: {
                name: string;
                description: string;
                $ref: string;
            }[];
            returns: {
                name: string;
                description: string;
                $ref: string;
            }[];
        } | {
            name: string;
            description: string;
            returns: {
                name: string;
                description: string;
                type: string;
                items: {
                    $ref: string;
                };
            }[];
            parameters?: undefined;
        } | {
            name: string;
            description: string;
            parameters: {
                name: string;
                description: string;
                $ref: string;
            }[];
            returns: {
                name: string;
                description: string;
                type: string;
            }[];
        })[];
        events: ({
            name: string;
            parameters: ({
                name: string;
                description: string;
                $ref: string;
                type?: undefined;
            } | {
                name: string;
                description: string;
                type: string;
                $ref?: undefined;
            })[];
        } | {
            name: string;
            parameters: {
                name: string;
                type: string;
            }[];
        })[];
        dependencies?: undefined;
        description?: undefined;
        deprecated?: undefined;
    } | {
        domain: string;
        description: string;
        experimental: boolean;
        dependencies: string[];
        commands: {
            name: string;
            description: string;
            parameters: ({
                name: string;
                description: string;
                $ref: string;
                type?: undefined;
                enum?: undefined;
                optional?: undefined;
            } | {
                name: string;
                description: string;
                type: string;
                enum: string[];
                $ref?: undefined;
                optional?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                $ref?: undefined;
                enum?: undefined;
            })[];
            returns: ({
                name: string;
                description: string;
                optional: boolean;
                type: string;
            } | {
                name: string;
                description: string;
                type: string;
                optional?: undefined;
            })[];
        }[];
        types?: undefined;
        events?: undefined;
        deprecated?: undefined;
    } | {
        domain: string;
        description: string;
        types: ({
            id: string;
            experimental: boolean;
            type: string;
            description?: undefined;
            enum?: undefined;
            properties?: undefined;
        } | {
            id: string;
            description: string;
            experimental: boolean;
            type: string;
            enum: string[];
            properties?: undefined;
        } | {
            id: string;
            description: string;
            experimental: boolean;
            type: string;
            properties: ({
                name: string;
                description: string;
                optional: boolean;
                type: string;
                $ref?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                $ref: string;
                type?: undefined;
            })[];
            enum?: undefined;
        } | {
            id: string;
            experimental: boolean;
            type: string;
            enum: string[];
            description?: undefined;
            properties?: undefined;
        } | {
            id: string;
            description: string;
            experimental: boolean;
            type: string;
            properties: ({
                name: string;
                description: string;
                type: string;
                items?: undefined;
            } | {
                name: string;
                description: string;
                type: string;
                items: {
                    $ref: string;
                };
            })[];
            enum?: undefined;
        })[];
        commands: ({
            name: string;
            description: string;
            experimental: boolean;
            parameters: ({
                name: string;
                type: string;
                items?: undefined;
                description?: undefined;
                optional?: undefined;
                $ref?: undefined;
            } | {
                name: string;
                type: string;
                items: {
                    $ref: string;
                };
                description?: undefined;
                optional?: undefined;
                $ref?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                $ref: string;
                type?: undefined;
                items?: undefined;
            })[];
            returns?: undefined;
        } | {
            name: string;
            description: string;
            experimental?: undefined;
            parameters?: undefined;
            returns?: undefined;
        } | {
            name: string;
            description: string;
            experimental: boolean;
            parameters?: undefined;
            returns?: undefined;
        } | {
            name: string;
            description: string;
            returns: {
                name: string;
                description: string;
                type: string;
            }[];
            experimental?: undefined;
            parameters?: undefined;
        } | {
            name: string;
            description: string;
            experimental: boolean;
            returns: {
                name: string;
                description: string;
                type: string;
                items: {
                    type: string;
                };
            }[];
            parameters?: undefined;
        } | {
            name: string;
            description: string;
            experimental: boolean;
            parameters: {
                name: string;
                description: string;
                optional: boolean;
                type: string;
            }[];
            returns: {
                name: string;
                description: string;
                type: string;
                items: {
                    $ref: string;
                };
            }[];
        } | {
            name: string;
            description: string;
            experimental: boolean;
            parameters: ({
                name: string;
                description: string;
                type: string;
                optional?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
            })[];
            returns: {
                name: string;
                description: string;
                $ref: string;
            }[];
        } | {
            name: string;
            description: string;
            experimental: boolean;
            parameters: {
                name: string;
                description: string;
                $ref: string;
            }[];
            returns: {
                name: string;
                description: string;
                $ref: string;
            }[];
        } | {
            name: string;
            description: string;
            experimental: boolean;
            parameters: {
                name: string;
                description: string;
                optional: boolean;
                $ref: string;
            }[];
            returns: {
                name: string;
                description: string;
                $ref: string;
            }[];
        } | {
            name: string;
            description: string;
            experimental: boolean;
            parameters: {
                name: string;
                description: string;
                $ref: string;
            }[];
            returns?: undefined;
        } | {
            name: string;
            description: string;
            experimental: boolean;
            parameters: ({
                name: string;
                optional: boolean;
                type: string;
                description?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
            })[];
            returns?: undefined;
        })[];
        experimental?: undefined;
        dependencies?: undefined;
        events?: undefined;
        deprecated?: undefined;
    } | {
        domain: string;
        description: string;
        experimental: boolean;
        dependencies: string[];
        types: ({
            id: string;
            type: string;
            description?: undefined;
            enum?: undefined;
            properties?: undefined;
        } | {
            id: string;
            description: string;
            type: string;
            enum: string[];
            properties?: undefined;
        } | {
            id: string;
            description: string;
            type: string;
            properties: ({
                name: string;
                description: string;
                $ref: string;
                type?: undefined;
                items?: undefined;
            } | {
                name: string;
                description: string;
                type: string;
                items: {
                    $ref: string;
                };
                $ref?: undefined;
            })[];
            enum?: undefined;
        } | {
            id: string;
            description: string;
            type: string;
            properties: ({
                name: string;
                description: string;
                $ref: string;
                type?: undefined;
                items?: undefined;
            } | {
                name: string;
                description: string;
                type: string;
                items: {
                    type: string;
                };
                $ref?: undefined;
            })[];
            enum?: undefined;
        } | {
            id: string;
            description: string;
            type: string;
            properties: ({
                name: string;
                description: string;
                type: string;
                items: {
                    $ref: string;
                };
            } | {
                name: string;
                description: string;
                type: string;
                items?: undefined;
            })[];
            enum?: undefined;
        } | {
            id: string;
            description: string;
            type: string;
            properties: ({
                name: string;
                description: string;
                $ref: string;
                type?: undefined;
                optional?: undefined;
            } | {
                name: string;
                description: string;
                type: string;
                $ref?: undefined;
                optional?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                $ref?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                $ref: string;
                type?: undefined;
            })[];
            enum?: undefined;
        } | {
            id: string;
            description: string;
            type: string;
            properties: ({
                name: string;
                description: string;
                optional: boolean;
                $ref: string;
                type?: undefined;
                items?: undefined;
            } | {
                name: string;
                description: string;
                $ref: string;
                optional?: undefined;
                type?: undefined;
                items?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                items: {
                    $ref: string;
                };
                $ref?: undefined;
            })[];
            enum?: undefined;
        } | {
            id: string;
            type: string;
            properties: ({
                name: string;
                description: string;
                type: string;
                optional?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
            })[];
            description?: undefined;
            enum?: undefined;
        } | {
            id: string;
            description: string;
            type: string;
            properties: ({
                name: string;
                description: string;
                optional: boolean;
                $ref: string;
                type?: undefined;
                items?: undefined;
            } | {
                name: string;
                description: string;
                type: string;
                items: {
                    $ref: string;
                };
                optional?: undefined;
                $ref?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                $ref?: undefined;
                items?: undefined;
            })[];
            enum?: undefined;
        } | {
            id: string;
            description: string;
            type: string;
            properties: ({
                name: string;
                description: string;
                type: string;
                enum?: undefined;
                optional?: undefined;
                $ref?: undefined;
                items?: undefined;
            } | {
                name: string;
                description: string;
                type: string;
                enum: string[];
                optional?: undefined;
                $ref?: undefined;
                items?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                enum?: undefined;
                $ref?: undefined;
                items?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                $ref: string;
                type?: undefined;
                enum?: undefined;
                items?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                items: {
                    $ref: string;
                };
                enum?: undefined;
                $ref?: undefined;
            })[];
            enum?: undefined;
        })[];
        commands: ({
            name: string;
            description: string;
            parameters: ({
                name: string;
                description: string;
                $ref: string;
                type?: undefined;
            } | {
                name: string;
                description: string;
                type: string;
                $ref?: undefined;
            })[];
            returns: {
                name: string;
                description: string;
                $ref: string;
            }[];
        } | {
            name: string;
            description: string;
            parameters: {
                name: string;
                $ref: string;
            }[];
            returns: {
                name: string;
                description: string;
                type: string;
                items: {
                    type: string;
                };
            }[];
        } | {
            name: string;
            description: string;
            parameters?: undefined;
            returns?: undefined;
        } | {
            name: string;
            description: string;
            parameters: ({
                name: string;
                description: string;
                $ref: string;
                type?: undefined;
                items?: undefined;
            } | {
                name: string;
                description: string;
                type: string;
                items: {
                    type: string;
                };
                $ref?: undefined;
            })[];
            returns?: undefined;
        } | {
            name: string;
            parameters: {
                name: string;
                description: string;
                $ref: string;
            }[];
            returns: ({
                name: string;
                description: string;
                optional: boolean;
                type: string;
                items: {
                    type: string;
                };
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                items?: undefined;
            })[];
            description?: undefined;
        } | {
            name: string;
            description: string;
            parameters: {
                name: string;
                $ref: string;
            }[];
            returns: {
                name: string;
                description: string;
                type: string;
                items: {
                    $ref: string;
                };
            }[];
        } | {
            name: string;
            description: string;
            parameters: {
                name: string;
                $ref: string;
            }[];
            returns: ({
                name: string;
                description: string;
                optional: boolean;
                $ref: string;
                type?: undefined;
                items?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                items: {
                    $ref: string;
                };
                $ref?: undefined;
            })[];
        } | {
            name: string;
            description: string;
            returns: {
                name: string;
                type: string;
                items: {
                    $ref: string;
                };
            }[];
            parameters?: undefined;
        } | {
            name: string;
            description: string;
            parameters: {
                name: string;
                $ref: string;
            }[];
            returns: {
                name: string;
                description: string;
                type: string;
            }[];
        } | {
            name: string;
            description: string;
            parameters: ({
                name: string;
                description: string;
                $ref: string;
                type?: undefined;
            } | {
                name: string;
                type: string;
                description?: undefined;
                $ref?: undefined;
            })[];
            returns?: undefined;
        } | {
            name: string;
            description: string;
            parameters: ({
                name: string;
                $ref: string;
                type?: undefined;
            } | {
                name: string;
                type: string;
                $ref?: undefined;
            })[];
            returns: {
                name: string;
                description: string;
                $ref: string;
            }[];
        } | {
            name: string;
            description: string;
            parameters: ({
                name: string;
                $ref: string;
                type?: undefined;
            } | {
                name: string;
                type: string;
                $ref?: undefined;
            })[];
            returns: {
                name: string;
                description: string;
                optional: boolean;
                type: string;
            }[];
        } | {
            name: string;
            description: string;
            parameters: {
                name: string;
                type: string;
                items: {
                    $ref: string;
                };
            }[];
            returns: {
                name: string;
                description: string;
                type: string;
                items: {
                    $ref: string;
                };
            }[];
        })[];
        events: ({
            name: string;
            description: string;
            parameters: {
                name: string;
                description: string;
                optional: boolean;
                $ref: string;
            }[];
        } | {
            name: string;
            description: string;
            parameters?: undefined;
        } | {
            name: string;
            description: string;
            parameters: {
                name: string;
                description: string;
                $ref: string;
            }[];
        } | {
            name: string;
            description: string;
            parameters: {
                name: string;
                $ref: string;
            }[];
        })[];
        deprecated?: undefined;
    } | {
        domain: string;
        experimental: boolean;
        types: ({
            id: string;
            description: string;
            type: string;
            enum?: undefined;
            properties?: undefined;
        } | {
            id: string;
            description: string;
            type: string;
            enum: string[];
            properties?: undefined;
        } | {
            id: string;
            description: string;
            type: string;
            properties: ({
                name: string;
                description: string;
                type: string;
                items?: undefined;
                $ref?: undefined;
            } | {
                name: string;
                description: string;
                type: string;
                items: {
                    $ref: string;
                };
                $ref?: undefined;
            } | {
                name: string;
                description: string;
                $ref: string;
                type?: undefined;
                items?: undefined;
            })[];
            enum?: undefined;
        } | {
            id: string;
            type: string;
            properties: {
                name: string;
                type: string;
            }[];
            description?: undefined;
            enum?: undefined;
        })[];
        commands: ({
            name: string;
            description: string;
            parameters: ({
                name: string;
                description: string;
                $ref: string;
                type?: undefined;
            } | {
                name: string;
                description: string;
                type: string;
                $ref?: undefined;
            })[];
            returns?: undefined;
        } | {
            name: string;
            description: string;
            parameters: ({
                name: string;
                description: string;
                $ref: string;
                type?: undefined;
            } | {
                name: string;
                description: string;
                type: string;
                $ref?: undefined;
            })[];
            returns: {
                name: string;
                description: string;
                $ref: string;
            }[];
        } | {
            name: string;
            description: string;
            parameters: ({
                name: string;
                description: string;
                $ref: string;
                type?: undefined;
            } | {
                name: string;
                description: string;
                type: string;
                $ref?: undefined;
            })[];
            returns: ({
                name: string;
                description: string;
                type: string;
                items: {
                    $ref: string;
                };
            } | {
                name: string;
                description: string;
                type: string;
                items?: undefined;
            })[];
        })[];
        dependencies?: undefined;
        events?: undefined;
        description?: undefined;
        deprecated?: undefined;
    } | {
        domain: string;
        description: string;
        dependencies: string[];
        types: ({
            id: string;
            description: string;
            type: string;
            properties?: undefined;
            enum?: undefined;
            items?: undefined;
        } | {
            id: string;
            description: string;
            type: string;
            properties: ({
                name: string;
                description: string;
                type: string;
                $ref?: undefined;
            } | {
                name: string;
                $ref: string;
                description?: undefined;
                type?: undefined;
            })[];
            enum?: undefined;
            items?: undefined;
        } | {
            id: string;
            description: string;
            type: string;
            enum: string[];
            properties?: undefined;
            items?: undefined;
        } | {
            id: string;
            description: string;
            type: string;
            properties: ({
                name: string;
                description: string;
                $ref: string;
                optional?: undefined;
                type?: undefined;
                items?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                $ref: string;
                type?: undefined;
                items?: undefined;
            } | {
                name: string;
                description: string;
                type: string;
                $ref?: undefined;
                optional?: undefined;
                items?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                $ref?: undefined;
                items?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                items: {
                    $ref: string;
                    type?: undefined;
                };
                $ref?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                items: {
                    type: string;
                    $ref?: undefined;
                };
                $ref?: undefined;
            })[];
            enum?: undefined;
            items?: undefined;
        } | {
            id: string;
            description: string;
            type: string;
            items: {
                type: string;
            };
            properties?: undefined;
            enum?: undefined;
        } | {
            id: string;
            description: string;
            type: string;
            properties: ({
                name: string;
                description: string;
                $ref: string;
                type?: undefined;
                items?: undefined;
            } | {
                name: string;
                description: string;
                type: string;
                items: {
                    type: string;
                };
                $ref?: undefined;
            })[];
            enum?: undefined;
            items?: undefined;
        })[];
        commands: ({
            name: string;
            description: string;
            experimental: boolean;
            parameters: {
                name: string;
                description: string;
                $ref: string;
            }[];
            returns: {
                name: string;
                description: string;
                type: string;
                items: {
                    type: string;
                };
            }[];
            redirect?: undefined;
        } | {
            name: string;
            description: string;
            experimental: boolean;
            parameters: ({
                name: string;
                description: string;
                $ref: string;
                optional?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                $ref: string;
            })[];
            returns: {
                name: string;
                description: string;
                $ref: string;
            }[];
            redirect?: undefined;
        } | {
            name: string;
            description: string;
            parameters: ({
                name: string;
                description: string;
                optional: boolean;
                $ref: string;
                type?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                $ref?: undefined;
            })[];
            returns: {
                name: string;
                description: string;
                $ref: string;
            }[];
            experimental?: undefined;
            redirect?: undefined;
        } | {
            name: string;
            description: string;
            experimental?: undefined;
            parameters?: undefined;
            returns?: undefined;
            redirect?: undefined;
        } | {
            name: string;
            description: string;
            experimental: boolean;
            parameters: {
                name: string;
                description: string;
                type: string;
            }[];
            returns?: undefined;
            redirect?: undefined;
        } | {
            name: string;
            description: string;
            parameters: {
                name: string;
                description: string;
                $ref: string;
            }[];
            returns: {
                name: string;
                description: string;
                type: string;
                items: {
                    type: string;
                };
            }[];
            experimental?: undefined;
            redirect?: undefined;
        } | {
            name: string;
            description: string;
            experimental: boolean;
            parameters: {
                name: string;
                description: string;
                optional: boolean;
                $ref: string;
            }[];
            returns: {
                name: string;
                description: string;
                type: string;
                items: {
                    $ref: string;
                };
            }[];
            redirect?: undefined;
        } | {
            name: string;
            description: string;
            parameters: {
                name: string;
                description: string;
                optional: boolean;
                type: string;
            }[];
            returns: {
                name: string;
                description: string;
                type: string;
                items: {
                    $ref: string;
                };
            }[];
            experimental?: undefined;
            redirect?: undefined;
        } | {
            name: string;
            description: string;
            experimental: boolean;
            parameters: ({
                name: string;
                description: string;
                type: string;
                optional?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
            })[];
            returns: ({
                name: string;
                description: string;
                $ref: string;
                optional?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                $ref: string;
            })[];
            redirect?: undefined;
        } | {
            name: string;
            description: string;
            parameters: {
                name: string;
                description: string;
                optional: boolean;
                $ref: string;
            }[];
            returns: {
                name: string;
                description: string;
                type: string;
            }[];
            experimental?: undefined;
            redirect?: undefined;
        } | {
            name: string;
            description: string;
            experimental: boolean;
            parameters: {
                name: string;
                description: string;
                type: string;
            }[];
            returns: {
                name: string;
                description: string;
                type: string;
                items: {
                    $ref: string;
                };
            }[];
            redirect?: undefined;
        } | {
            name: string;
            description: string;
            redirect: string;
            experimental?: undefined;
            parameters?: undefined;
            returns?: undefined;
        } | {
            name: string;
            description: string;
            experimental: boolean;
            parameters?: undefined;
            returns?: undefined;
            redirect?: undefined;
        } | {
            name: string;
            description: string;
            parameters: ({
                name: string;
                description: string;
                $ref: string;
                optional?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                $ref: string;
            })[];
            returns: {
                name: string;
                description: string;
                $ref: string;
            }[];
            experimental?: undefined;
            redirect?: undefined;
        } | {
            name: string;
            description: string;
            experimental: boolean;
            parameters: ({
                name: string;
                description: string;
                type: string;
                optional?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
            })[];
            returns: {
                name: string;
                description: string;
                type: string;
            }[];
            redirect?: undefined;
        } | {
            name: string;
            description: string;
            experimental: boolean;
            parameters: {
                name: string;
                description: string;
                type: string;
                items: {
                    $ref: string;
                };
            }[];
            returns: {
                name: string;
                description: string;
                type: string;
                items: {
                    $ref: string;
                };
            }[];
            redirect?: undefined;
        } | {
            name: string;
            description: string;
            parameters: ({
                name: string;
                description: string;
                $ref: string;
                type?: undefined;
            } | {
                name: string;
                description: string;
                type: string;
                $ref?: undefined;
            })[];
            returns: {
                name: string;
                description: string;
                $ref: string;
            }[];
            experimental?: undefined;
            redirect?: undefined;
        } | {
            name: string;
            description: string;
            parameters: ({
                name: string;
                description: string;
                $ref: string;
                type?: undefined;
            } | {
                name: string;
                description: string;
                type: string;
                $ref?: undefined;
            })[];
            returns: {
                name: string;
                description: string;
                type: string;
                items: {
                    $ref: string;
                };
            }[];
            experimental?: undefined;
            redirect?: undefined;
        } | {
            name: string;
            description: string;
            parameters: ({
                name: string;
                description: string;
                $ref: string;
                type?: undefined;
                optional?: undefined;
            } | {
                name: string;
                description: string;
                type: string;
                $ref?: undefined;
                optional?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                $ref?: undefined;
            })[];
            experimental?: undefined;
            returns?: undefined;
            redirect?: undefined;
        } | {
            name: string;
            description: string;
            parameters: ({
                name: string;
                description: string;
                type: string;
                items: {
                    type: string;
                };
                optional?: undefined;
                $ref?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                $ref: string;
                type?: undefined;
                items?: undefined;
            })[];
            experimental?: undefined;
            returns?: undefined;
            redirect?: undefined;
        } | {
            name: string;
            description: string;
            experimental: boolean;
            parameters: {
                name: string;
                description: string;
                $ref: string;
            }[];
            returns?: undefined;
            redirect?: undefined;
        } | {
            name: string;
            description: string;
            experimental: boolean;
            parameters: {
                name: string;
                $ref: string;
            }[];
            returns: ({
                name: string;
                description: string;
                $ref: string;
                optional?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                $ref: string;
            })[];
            redirect?: undefined;
        })[];
        events: ({
            name: string;
            description: string;
            parameters: ({
                name: string;
                description: string;
                $ref: string;
                type?: undefined;
            } | {
                name: string;
                description: string;
                type: string;
                $ref?: undefined;
            })[];
            experimental?: undefined;
        } | {
            name: string;
            description: string;
            experimental: boolean;
            parameters: ({
                name: string;
                description: string;
                $ref: string;
                type?: undefined;
                items?: undefined;
            } | {
                name: string;
                description: string;
                type: string;
                items: {
                    $ref: string;
                };
                $ref?: undefined;
            })[];
        } | {
            name: string;
            description: string;
            parameters?: undefined;
            experimental?: undefined;
        } | {
            name: string;
            description: string;
            parameters: ({
                name: string;
                description: string;
                $ref: string;
                type?: undefined;
                items?: undefined;
            } | {
                name: string;
                description: string;
                type: string;
                items: {
                    $ref: string;
                };
                $ref?: undefined;
            })[];
            experimental?: undefined;
        })[];
        experimental?: undefined;
        deprecated?: undefined;
    } | {
        domain: string;
        description: string;
        dependencies: string[];
        types: ({
            id: string;
            description: string;
            type: string;
            enum: string[];
            properties?: undefined;
        } | {
            id: string;
            description: string;
            type: string;
            properties: ({
                name: string;
                description: string;
                type: string;
                $ref?: undefined;
                optional?: undefined;
            } | {
                name: string;
                description: string;
                $ref: string;
                type?: undefined;
                optional?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                $ref: string;
                type?: undefined;
            })[];
            enum?: undefined;
        })[];
        commands: ({
            name: string;
            description: string;
            parameters: ({
                name: string;
                description: string;
                $ref: string;
                optional?: undefined;
                type?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                $ref?: undefined;
            })[];
            returns: {
                name: string;
                description: string;
                type: string;
                items: {
                    $ref: string;
                };
            }[];
            experimental?: undefined;
        } | {
            name: string;
            description: string;
            parameters: {
                name: string;
                description: string;
                $ref: string;
            }[];
            returns?: undefined;
            experimental?: undefined;
        } | {
            name: string;
            description: string;
            parameters: ({
                name: string;
                description: string;
                type: string;
                experimental?: undefined;
                optional?: undefined;
            } | {
                name: string;
                description: string;
                experimental: boolean;
                optional: boolean;
                type: string;
            })[];
            returns?: undefined;
            experimental?: undefined;
        } | {
            name: string;
            description: string;
            experimental: boolean;
            parameters: {
                name: string;
                description: string;
                type: string;
            }[];
            returns?: undefined;
        })[];
        experimental?: undefined;
        events?: undefined;
        deprecated?: undefined;
    } | {
        domain: string;
        description: string;
        experimental: boolean;
        dependencies: string[];
        types: ({
            id: string;
            description: string;
            type: string;
            properties: ({
                name: string;
                description: string;
                type: string;
                optional?: undefined;
                $ref?: undefined;
                items?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                $ref?: undefined;
                items?: undefined;
            } | {
                name: string;
                description: string;
                $ref: string;
                type?: undefined;
                optional?: undefined;
                items?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                items: {
                    type: string;
                    $ref?: undefined;
                };
                $ref?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                items: {
                    $ref: string;
                    type?: undefined;
                };
                $ref?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                $ref: string;
                type?: undefined;
                items?: undefined;
            } | {
                name: string;
                optional: boolean;
                type: string;
                description?: undefined;
                $ref?: undefined;
                items?: undefined;
            })[];
            items?: undefined;
        } | {
            id: string;
            description: string;
            type: string;
            properties?: undefined;
            items?: undefined;
        } | {
            id: string;
            description: string;
            type: string;
            items: {
                $ref: string;
                type?: undefined;
            };
            properties?: undefined;
        } | {
            id: string;
            description: string;
            type: string;
            properties: ({
                name: string;
                type: string;
                items: {
                    type: string;
                    $ref?: undefined;
                };
            } | {
                name: string;
                type: string;
                items: {
                    $ref: string;
                    type?: undefined;
                };
            })[];
            items?: undefined;
        } | {
            id: string;
            type: string;
            properties: {
                name: string;
                type: string;
                items: {
                    type: string;
                };
            }[];
            description?: undefined;
            items?: undefined;
        } | {
            id: string;
            type: string;
            items: {
                type: string;
                $ref?: undefined;
            };
            description?: undefined;
            properties?: undefined;
        } | {
            id: string;
            description: string;
            type: string;
            properties: ({
                name: string;
                description: string;
                type: string;
                items: {
                    type: string;
                    $ref?: undefined;
                };
                $ref?: undefined;
            } | {
                name: string;
                description: string;
                type: string;
                items: {
                    $ref: string;
                    type?: undefined;
                };
                $ref?: undefined;
            } | {
                name: string;
                description: string;
                $ref: string;
                type?: undefined;
                items?: undefined;
            })[];
            items?: undefined;
        })[];
        commands: ({
            name: string;
            description: string;
            deprecated?: undefined;
            parameters?: undefined;
            returns?: undefined;
        } | {
            name: string;
            description: string;
            deprecated: boolean;
            parameters: ({
                name: string;
                description: string;
                type: string;
                items: {
                    type: string;
                };
                optional?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                items?: undefined;
            })[];
            returns: {
                name: string;
                description: string;
                type: string;
                items: {
                    $ref: string;
                };
            }[];
        } | {
            name: string;
            description: string;
            parameters: {
                name: string;
                description: string;
                type: string;
                items: {
                    type: string;
                };
            }[];
            returns: ({
                name: string;
                description: string;
                type: string;
                items: {
                    $ref: string;
                    type?: undefined;
                };
            } | {
                name: string;
                description: string;
                type: string;
                items: {
                    type: string;
                    $ref?: undefined;
                };
            })[];
            deprecated?: undefined;
        })[];
        events?: undefined;
        deprecated?: undefined;
    } | {
        domain: string;
        description: string;
        experimental: boolean;
        types: ({
            id: string;
            description: string;
            type: string;
            properties: {
                name: string;
                description: string;
                type: string;
            }[];
            items?: undefined;
        } | {
            id: string;
            description: string;
            type: string;
            items: {
                type: string;
            };
            properties?: undefined;
        })[];
        commands: ({
            name: string;
            description: string;
            parameters?: undefined;
            returns?: undefined;
        } | {
            name: string;
            parameters: {
                name: string;
                $ref: string;
            }[];
            returns: {
                name: string;
                type: string;
                items: {
                    $ref: string;
                };
            }[];
            description?: undefined;
        } | {
            name: string;
            parameters: ({
                name: string;
                $ref: string;
                type?: undefined;
            } | {
                name: string;
                type: string;
                $ref?: undefined;
            })[];
            description?: undefined;
            returns?: undefined;
        })[];
        events: {
            name: string;
            parameters: ({
                name: string;
                $ref: string;
                type?: undefined;
            } | {
                name: string;
                type: string;
                $ref?: undefined;
            })[];
        }[];
        dependencies?: undefined;
        deprecated?: undefined;
    } | {
        domain: string;
        experimental: boolean;
        types: ({
            id: string;
            description: string;
            type: string;
            properties?: undefined;
        } | {
            id: string;
            description: string;
            type: string;
            properties: ({
                name: string;
                description: string;
                $ref: string;
                type?: undefined;
            } | {
                name: string;
                description: string;
                type: string;
                $ref?: undefined;
            })[];
        })[];
        commands: ({
            name: string;
            description: string;
            parameters?: undefined;
            returns?: undefined;
        } | {
            name: string;
            parameters: ({
                name: string;
                $ref: string;
                type?: undefined;
            } | {
                name: string;
                type: string;
                $ref?: undefined;
            })[];
            returns: ({
                name: string;
                optional: boolean;
                type: string;
                items: {
                    type: string;
                };
                $ref?: undefined;
            } | {
                name: string;
                optional: boolean;
                $ref: string;
                type?: undefined;
                items?: undefined;
            })[];
            description?: undefined;
        } | {
            name: string;
            parameters: {
                name: string;
                $ref: string;
            }[];
            returns: {
                name: string;
                type: string;
                items: {
                    type: string;
                };
            }[];
            description?: undefined;
        })[];
        events: {
            name: string;
            parameters: {
                name: string;
                $ref: string;
            }[];
        }[];
        dependencies?: undefined;
        description?: undefined;
        deprecated?: undefined;
    } | {
        domain: string;
        experimental: boolean;
        commands: ({
            name: string;
            description: string;
            parameters?: undefined;
        } | {
            name: string;
            description: string;
            parameters: {
                name: string;
                description: string;
                type: string;
            }[];
        })[];
        dependencies?: undefined;
        types?: undefined;
        events?: undefined;
        description?: undefined;
        deprecated?: undefined;
    } | {
        domain: string;
        description: string;
        dependencies: string[];
        types: ({
            id: string;
            description: string;
            type: string;
            properties: ({
                name: string;
                description: string;
                type: string;
                enum: string[];
            } | {
                name: string;
                description: string;
                type: string;
                enum?: undefined;
            })[];
            experimental?: undefined;
            enum?: undefined;
        } | {
            id: string;
            description: string;
            experimental: boolean;
            type: string;
            enum: string[];
            properties?: undefined;
        })[];
        commands: ({
            name: string;
            description: string;
            returns: {
                name: string;
                description: string;
                type: string;
            }[];
            experimental?: undefined;
            parameters?: undefined;
            deprecated?: undefined;
        } | {
            name: string;
            description: string;
            returns?: undefined;
            experimental?: undefined;
            parameters?: undefined;
            deprecated?: undefined;
        } | {
            name: string;
            description: string;
            experimental: boolean;
            returns?: undefined;
            parameters?: undefined;
            deprecated?: undefined;
        } | {
            name: string;
            description: string;
            experimental: boolean;
            parameters: {
                name: string;
                description: string;
                type: string;
            }[];
            returns?: undefined;
            deprecated?: undefined;
        } | {
            name: string;
            description: string;
            parameters: ({
                name: string;
                description: string;
                type: string;
                experimental?: undefined;
                optional?: undefined;
                $ref?: undefined;
            } | {
                name: string;
                description: string;
                experimental: boolean;
                optional: boolean;
                type: string;
                $ref?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                $ref: string;
                type?: undefined;
                experimental?: undefined;
            } | {
                name: string;
                description: string;
                experimental: boolean;
                optional: boolean;
                $ref: string;
                type?: undefined;
            })[];
            returns?: undefined;
            experimental?: undefined;
            deprecated?: undefined;
        } | {
            name: string;
            experimental: boolean;
            parameters: ({
                name: string;
                description: string;
                type: string;
                optional?: undefined;
                enum?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                enum: string[];
            })[];
            description?: undefined;
            returns?: undefined;
            deprecated?: undefined;
        } | {
            name: string;
            description: string;
            experimental: boolean;
            deprecated: boolean;
            parameters: {
                name: string;
                description: string;
                type: string;
            }[];
            returns?: undefined;
        } | {
            name: string;
            description: string;
            parameters: ({
                name: string;
                description: string;
                type: string;
                optional?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
            })[];
            returns?: undefined;
            experimental?: undefined;
            deprecated?: undefined;
        } | {
            name: string;
            description: string;
            experimental: boolean;
            parameters: ({
                name: string;
                $ref: string;
                description?: undefined;
                optional?: undefined;
                type?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                $ref?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                $ref: string;
                type?: undefined;
            })[];
            returns: {
                name: string;
                description: string;
                type: string;
            }[];
            deprecated?: undefined;
        })[];
        events: ({
            name: string;
            description: string;
            experimental: boolean;
            parameters: {
                name: string;
                description: string;
                type: string;
            }[];
        } | {
            name: string;
            description: string;
            experimental: boolean;
            parameters?: undefined;
        })[];
        experimental?: undefined;
        deprecated?: undefined;
    } | {
        domain: string;
        description: string;
        experimental: boolean;
        dependencies: string[];
        types: {
            id: string;
            description: string;
            type: string;
            properties: ({
                name: string;
                description: string;
                optional: boolean;
                type: string;
                enum: string[];
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                enum?: undefined;
            })[];
        }[];
        commands: ({
            name: string;
            description: string;
            parameters: ({
                name: string;
                description: string;
                optional: boolean;
                type: string;
                $ref?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                $ref: string;
                type?: undefined;
            })[];
            returns: ({
                name: string;
                description: string;
                type: string;
                optional?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
            })[];
        } | {
            name: string;
            description: string;
            parameters?: undefined;
            returns?: undefined;
        })[];
        events: {
            name: string;
            description: string;
            parameters: {
                name: string;
                description: string;
                type: string;
            }[];
        }[];
        deprecated?: undefined;
    } | {
        domain: string;
        description: string;
        types: {
            id: string;
            description: string;
            type: string;
        }[];
        commands: ({
            name: string;
            description: string;
            parameters: {
                name: string;
                description: string;
                $ref: string;
            }[];
            returns?: undefined;
        } | {
            name: string;
            description: string;
            parameters: ({
                name: string;
                description: string;
                $ref: string;
                optional?: undefined;
                type?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                $ref?: undefined;
            })[];
            returns: ({
                name: string;
                description: string;
                optional: boolean;
                type: string;
            } | {
                name: string;
                description: string;
                type: string;
                optional?: undefined;
            })[];
        })[];
        experimental?: undefined;
        dependencies?: undefined;
        events?: undefined;
        deprecated?: undefined;
    } | {
        domain: string;
        experimental: boolean;
        dependencies: string[];
        types: ({
            id: string;
            description: string;
            type: string;
            properties: ({
                name: string;
                description: string;
                type: string;
                $ref?: undefined;
                items?: undefined;
            } | {
                name: string;
                description: string;
                $ref: string;
                type?: undefined;
                items?: undefined;
            } | {
                name: string;
                description: string;
                type: string;
                items: {
                    $ref: string;
                };
                $ref?: undefined;
            })[];
        } | {
            id: string;
            description: string;
            type: string;
            properties: ({
                name: string;
                description: string;
                type: string;
                enum: string[];
                optional?: undefined;
                items?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                enum?: undefined;
                items?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                items: {
                    $ref: string;
                };
                enum?: undefined;
            })[];
        } | {
            id: string;
            description: string;
            type: string;
            properties: ({
                name: string;
                description: string;
                optional: boolean;
                $ref: string;
                type?: undefined;
            } | {
                name: string;
                description: string;
                type: string;
                optional?: undefined;
                $ref?: undefined;
            })[];
        } | {
            id: string;
            description: string;
            type: string;
            properties: ({
                name: string;
                description: string;
                type: string;
                enum: string[];
                optional?: undefined;
                items?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                enum?: undefined;
                items?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                items: {
                    type: string;
                };
                enum?: undefined;
            })[];
        })[];
        commands: ({
            name: string;
            description: string;
            parameters: {
                name: string;
                description: string;
                type: string;
            }[];
            returns?: undefined;
        } | {
            name: string;
            description: string;
            parameters: ({
                name: string;
                type: string;
                description?: undefined;
                $ref?: undefined;
            } | {
                name: string;
                description: string;
                $ref: string;
                type?: undefined;
            })[];
            returns?: undefined;
        } | {
            name: string;
            description: string;
            parameters?: undefined;
            returns?: undefined;
        } | {
            name: string;
            description: string;
            parameters: ({
                name: string;
                description: string;
                type: string;
                optional?: undefined;
                $ref?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                $ref: string;
                type?: undefined;
            })[];
            returns: ({
                name: string;
                description: string;
                type: string;
                items: {
                    $ref: string;
                };
            } | {
                name: string;
                description: string;
                type: string;
                items?: undefined;
            })[];
        } | {
            name: string;
            description: string;
            parameters: {
                name: string;
                description: string;
                type: string;
            }[];
            returns: {
                name: string;
                description: string;
                $ref: string;
            }[];
        } | {
            name: string;
            description: string;
            parameters: {
                name: string;
                description: string;
                type: string;
            }[];
            returns: {
                name: string;
                description: string;
                type: string;
                items: {
                    type: string;
                };
            }[];
        })[];
        events?: undefined;
        description?: undefined;
        deprecated?: undefined;
    } | {
        domain: string;
        types: ({
            id: string;
            type: string;
            properties: ({
                name: string;
                description: string;
                type: string;
                optional?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
            })[];
            experimental?: undefined;
            enum?: undefined;
            description?: undefined;
        } | {
            id: string;
            experimental: boolean;
            type: string;
            enum: string[];
            properties?: undefined;
            description?: undefined;
        } | {
            id: string;
            description: string;
            type: string;
            properties?: undefined;
            experimental?: undefined;
            enum?: undefined;
        })[];
        commands: ({
            name: string;
            description: string;
            parameters: ({
                name: string;
                description: string;
                type: string;
                enum: string[];
                optional?: undefined;
                $ref?: undefined;
            } | {
                name: string;
                description: string;
                type: string;
                enum?: undefined;
                optional?: undefined;
                $ref?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                enum?: undefined;
                $ref?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                $ref: string;
                type?: undefined;
                enum?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                enum: string[];
                $ref?: undefined;
            })[];
            experimental?: undefined;
        } | {
            name: string;
            description: string;
            parameters: ({
                name: string;
                description: string;
                type: string;
                enum: string[];
                items?: undefined;
                optional?: undefined;
                $ref?: undefined;
            } | {
                name: string;
                description: string;
                type: string;
                items: {
                    $ref: string;
                };
                enum?: undefined;
                optional?: undefined;
                $ref?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                enum?: undefined;
                items?: undefined;
                $ref?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                $ref: string;
                type?: undefined;
                enum?: undefined;
                items?: undefined;
            })[];
            experimental?: undefined;
        } | {
            name: string;
            description: string;
            experimental: boolean;
            parameters: ({
                name: string;
                description: string;
                type: string;
                enum: string[];
                optional?: undefined;
                $ref?: undefined;
            } | {
                name: string;
                description: string;
                type: string;
                enum?: undefined;
                optional?: undefined;
                $ref?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                $ref: string;
                type?: undefined;
                enum?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                enum?: undefined;
                $ref?: undefined;
            })[];
        })[];
        experimental?: undefined;
        dependencies?: undefined;
        events?: undefined;
        description?: undefined;
        deprecated?: undefined;
    } | {
        domain: string;
        experimental: boolean;
        commands: {
            name: string;
            description: string;
        }[];
        events: ({
            name: string;
            description: string;
            parameters: {
                name: string;
                description: string;
                type: string;
            }[];
        } | {
            name: string;
            description: string;
            parameters?: undefined;
        })[];
        dependencies?: undefined;
        types?: undefined;
        description?: undefined;
        deprecated?: undefined;
    } | {
        domain: string;
        experimental: boolean;
        dependencies: string[];
        types: ({
            id: string;
            description: string;
            type: string;
            properties?: undefined;
            items?: undefined;
        } | {
            id: string;
            description: string;
            type: string;
            properties: ({
                name: string;
                description: string;
                $ref: string;
                type?: undefined;
                enum?: undefined;
            } | {
                name: string;
                description: string;
                type: string;
                enum: string[];
                $ref?: undefined;
            })[];
            items?: undefined;
        } | {
            id: string;
            description: string;
            type: string;
            properties: ({
                name: string;
                description: string;
                $ref: string;
                optional?: undefined;
                type?: undefined;
                items?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                $ref: string;
                type?: undefined;
                items?: undefined;
            } | {
                name: string;
                description: string;
                type: string;
                $ref?: undefined;
                optional?: undefined;
                items?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                items: {
                    type: string;
                    $ref?: undefined;
                };
                $ref?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                $ref?: undefined;
                items?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                items: {
                    $ref: string;
                    type?: undefined;
                };
                $ref?: undefined;
            })[];
            items?: undefined;
        } | {
            id: string;
            description: string;
            type: string;
            items: {
                type: string;
            };
            properties?: undefined;
        })[];
        commands: ({
            name: string;
            description: string;
            parameters: {
                name: string;
                description: string;
                $ref: string;
            }[];
            returns: {
                name: string;
                description: string;
                type: string;
                items: {
                    type: string;
                };
            }[];
        } | {
            name: string;
            description: string;
            parameters?: undefined;
            returns?: undefined;
        } | {
            name: string;
            description: string;
            parameters: {
                name: string;
                description: string;
                type: string;
                items: {
                    $ref: string;
                };
            }[];
            returns: {
                name: string;
                description: string;
                $ref: string;
            }[];
        } | {
            name: string;
            description: string;
            parameters: {
                name: string;
                description: string;
                $ref: string;
            }[];
            returns: {
                name: string;
                description: string;
                $ref: string;
            }[];
        } | {
            name: string;
            parameters: ({
                name: string;
                description: string;
                $ref: string;
                optional?: undefined;
                type?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                $ref?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                $ref: string;
                type?: undefined;
            })[];
            returns: {
                name: string;
                description: string;
                type: string;
                items: {
                    $ref: string;
                };
            }[];
            description?: undefined;
        } | {
            name: string;
            description: string;
            parameters: {
                name: string;
                description: string;
                $ref: string;
            }[];
            returns?: undefined;
        } | {
            name: string;
            description: string;
            parameters: ({
                name: string;
                description: string;
                $ref: string;
                optional?: undefined;
                type?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                $ref?: undefined;
            })[];
            returns: {
                name: string;
                description: string;
                type: string;
            }[];
        })[];
        events: ({
            name: string;
            parameters: {
                name: string;
                description: string;
                $ref: string;
            }[];
        } | {
            name: string;
            parameters: {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                items: {
                    $ref: string;
                };
            }[];
        })[];
        description?: undefined;
        deprecated?: undefined;
    } | {
        domain: string;
        description: string;
        dependencies: string[];
        types: {
            id: string;
            description: string;
            type: string;
            properties: ({
                name: string;
                description: string;
                type: string;
                enum: string[];
                $ref?: undefined;
                optional?: undefined;
                items?: undefined;
            } | {
                name: string;
                description: string;
                type: string;
                enum?: undefined;
                $ref?: undefined;
                optional?: undefined;
                items?: undefined;
            } | {
                name: string;
                description: string;
                $ref: string;
                type?: undefined;
                enum?: undefined;
                optional?: undefined;
                items?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                enum?: undefined;
                $ref?: undefined;
                items?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                $ref: string;
                type?: undefined;
                enum?: undefined;
                items?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                items: {
                    $ref: string;
                };
                enum?: undefined;
                $ref?: undefined;
            })[];
        }[];
        commands: ({
            name: string;
            description: string;
            parameters?: undefined;
        } | {
            name: string;
            description: string;
            parameters: {
                name: string;
                description: string;
                type: string;
                items: {
                    $ref: string;
                };
            }[];
        })[];
        events: {
            name: string;
            description: string;
            parameters: {
                name: string;
                description: string;
                $ref: string;
            }[];
        }[];
        experimental?: undefined;
        deprecated?: undefined;
    } | {
        domain: string;
        experimental: boolean;
        types: ({
            id: string;
            description: string;
            type: string;
            enum: string[];
            properties?: undefined;
        } | {
            id: string;
            description: string;
            type: string;
            properties: ({
                name: string;
                description: string;
                type: string;
                items?: undefined;
            } | {
                name: string;
                description: string;
                type: string;
                items: {
                    type: string;
                };
            })[];
            enum?: undefined;
        } | {
            id: string;
            description: string;
            type: string;
            properties: {
                name: string;
                type: string;
                items: {
                    $ref: string;
                };
            }[];
            enum?: undefined;
        })[];
        commands: ({
            name: string;
            returns: {
                name: string;
                type: string;
            }[];
            description?: undefined;
            parameters?: undefined;
        } | {
            name: string;
            returns?: undefined;
            description?: undefined;
            parameters?: undefined;
        } | {
            name: string;
            description: string;
            parameters: {
                name: string;
                description: string;
                type: string;
            }[];
            returns?: undefined;
        } | {
            name: string;
            description: string;
            parameters: {
                name: string;
                description: string;
                $ref: string;
            }[];
            returns?: undefined;
        } | {
            name: string;
            description: string;
            parameters: {
                name: string;
                description: string;
                optional: boolean;
                type: string;
            }[];
            returns?: undefined;
        } | {
            name: string;
            description: string;
            returns?: undefined;
            parameters?: undefined;
        } | {
            name: string;
            description: string;
            returns: {
                name: string;
                $ref: string;
            }[];
            parameters?: undefined;
        })[];
        dependencies?: undefined;
        events?: undefined;
        description?: undefined;
        deprecated?: undefined;
    } | {
        domain: string;
        description: string;
        dependencies: string[];
        types: ({
            id: string;
            description: string;
            type: string;
            enum: string[];
            properties?: undefined;
            experimental?: undefined;
        } | {
            id: string;
            description: string;
            type: string;
            enum?: undefined;
            properties?: undefined;
            experimental?: undefined;
        } | {
            id: string;
            description: string;
            type: string;
            properties: ({
                name: string;
                description: string;
                type: string;
                experimental?: undefined;
            } | {
                name: string;
                description: string;
                experimental: boolean;
                type: string;
            })[];
            enum?: undefined;
            experimental?: undefined;
        } | {
            id: string;
            description: string;
            type: string;
            properties: ({
                name: string;
                description: string;
                type: string;
                optional?: undefined;
                $ref?: undefined;
                enum?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                $ref?: undefined;
                enum?: undefined;
            } | {
                name: string;
                description: string;
                $ref: string;
                type?: undefined;
                optional?: undefined;
                enum?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                $ref: string;
                type?: undefined;
                enum?: undefined;
            } | {
                name: string;
                description: string;
                type: string;
                enum: string[];
                optional?: undefined;
                $ref?: undefined;
            })[];
            enum?: undefined;
            experimental?: undefined;
        } | {
            id: string;
            description: string;
            type: string;
            properties: ({
                name: string;
                description: string;
                type: string;
                optional?: undefined;
                $ref?: undefined;
                items?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                $ref?: undefined;
                items?: undefined;
            } | {
                name: string;
                description: string;
                $ref: string;
                type?: undefined;
                optional?: undefined;
                items?: undefined;
            } | {
                name: string;
                description: string;
                type: string;
                items: {
                    type: string;
                    $ref?: undefined;
                };
                optional?: undefined;
                $ref?: undefined;
            } | {
                name: string;
                description: string;
                type: string;
                items: {
                    $ref: string;
                    type?: undefined;
                };
                optional?: undefined;
                $ref?: undefined;
            })[];
            enum?: undefined;
            experimental?: undefined;
        } | {
            id: string;
            description: string;
            experimental: boolean;
            type: string;
            properties: ({
                name: string;
                description: string;
                optional: boolean;
                type: string;
                enum: string[];
            } | {
                name: string;
                description: string;
                type: string;
                optional?: undefined;
                enum?: undefined;
            })[];
            enum?: undefined;
        } | {
            id: string;
            description: string;
            experimental: boolean;
            type: string;
            properties: ({
                name: string;
                description: string;
                type: string;
                enum: string[];
                optional?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                enum?: undefined;
            })[];
            enum?: undefined;
        } | {
            id: string;
            description: string;
            experimental: boolean;
            type: string;
            enum: string[];
            properties?: undefined;
        } | {
            id: string;
            description: string;
            experimental: boolean;
            type: string;
            properties: ({
                name: string;
                description: string;
                type: string;
                optional?: undefined;
                items?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                items?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                items: {
                    type: string;
                };
            })[];
            enum?: undefined;
        } | {
            id: string;
            description: string;
            experimental: boolean;
            type: string;
            properties: ({
                name: string;
                description: string;
                type: string;
                $ref?: undefined;
                items?: undefined;
            } | {
                name: string;
                description: string;
                $ref: string;
                type?: undefined;
                items?: undefined;
            } | {
                name: string;
                description: string;
                type: string;
                items: {
                    $ref: string;
                };
                $ref?: undefined;
            })[];
            enum?: undefined;
        } | {
            id: string;
            description: string;
            experimental: boolean;
            type: string;
            properties: ({
                name: string;
                description: string;
                type: string;
                optional?: undefined;
                $ref?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                $ref?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                $ref: string;
                type?: undefined;
            })[];
            enum?: undefined;
        } | {
            id: string;
            description: string;
            experimental: boolean;
            type: string;
            properties: ({
                name: string;
                description: string;
                $ref: string;
                optional?: undefined;
                type?: undefined;
                items?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                $ref: string;
                type?: undefined;
                items?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                items: {
                    $ref: string;
                };
                $ref?: undefined;
            })[];
            enum?: undefined;
        })[];
        commands: ({
            name: string;
            description: string;
            deprecated: boolean;
            returns: {
                name: string;
                description: string;
                type: string;
            }[];
            experimental?: undefined;
            parameters?: undefined;
            redirect?: undefined;
        } | {
            name: string;
            description: string;
            deprecated?: undefined;
            returns?: undefined;
            experimental?: undefined;
            parameters?: undefined;
            redirect?: undefined;
        } | {
            name: string;
            description: string;
            experimental: boolean;
            parameters: ({
                name: string;
                $ref: string;
                description?: undefined;
                optional?: undefined;
                type?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                $ref: string;
                type?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                $ref?: undefined;
            })[];
            deprecated?: undefined;
            returns?: undefined;
            redirect?: undefined;
        } | {
            name: string;
            description: string;
            parameters: ({
                name: string;
                description: string;
                type: string;
                optional?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
            })[];
            deprecated?: undefined;
            returns?: undefined;
            experimental?: undefined;
            redirect?: undefined;
        } | {
            name: string;
            description: string;
            parameters: ({
                name: string;
                description: string;
                type: string;
                optional?: undefined;
                $ref?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                $ref: string;
                type?: undefined;
            })[];
            deprecated?: undefined;
            returns?: undefined;
            experimental?: undefined;
            redirect?: undefined;
        } | {
            name: string;
            description: string;
            parameters: ({
                name: string;
                description: string;
                experimental: boolean;
                optional: boolean;
                type: string;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                experimental?: undefined;
            })[];
            deprecated?: undefined;
            returns?: undefined;
            experimental?: undefined;
            redirect?: undefined;
        } | {
            name: string;
            description: string;
            returns: {
                name: string;
                description: string;
                type: string;
                items: {
                    $ref: string;
                };
            }[];
            deprecated?: undefined;
            experimental?: undefined;
            parameters?: undefined;
            redirect?: undefined;
        } | {
            name: string;
            description: string;
            experimental: boolean;
            parameters: {
                name: string;
                description: string;
                type: string;
            }[];
            returns: {
                name: string;
                type: string;
                items: {
                    type: string;
                };
            }[];
            deprecated?: undefined;
            redirect?: undefined;
        } | {
            name: string;
            description: string;
            parameters: {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                items: {
                    type: string;
                };
            }[];
            returns: {
                name: string;
                description: string;
                type: string;
                items: {
                    $ref: string;
                };
            }[];
            deprecated?: undefined;
            experimental?: undefined;
            redirect?: undefined;
        } | {
            name: string;
            description: string;
            parameters: {
                name: string;
                description: string;
                $ref: string;
            }[];
            returns: {
                name: string;
                description: string;
                type: string;
            }[];
            deprecated?: undefined;
            experimental?: undefined;
            redirect?: undefined;
        } | {
            name: string;
            description: string;
            experimental: boolean;
            parameters: {
                name: string;
                description: string;
                $ref: string;
            }[];
            returns: {
                name: string;
                description: string;
                type: string;
            }[];
            deprecated?: undefined;
            redirect?: undefined;
        } | {
            name: string;
            description: string;
            experimental: boolean;
            parameters: {
                name: string;
                $ref: string;
            }[];
            returns: {
                name: string;
                $ref: string;
            }[];
            deprecated?: undefined;
            redirect?: undefined;
        } | {
            name: string;
            description: string;
            experimental: boolean;
            parameters: {
                name: string;
                description: string;
                $ref: string;
            }[];
            deprecated?: undefined;
            returns?: undefined;
            redirect?: undefined;
        } | {
            name: string;
            description: string;
            experimental: boolean;
            parameters: ({
                name: string;
                description: string;
                $ref: string;
                type?: undefined;
                optional?: undefined;
            } | {
                name: string;
                description: string;
                type: string;
                $ref?: undefined;
                optional?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                $ref?: undefined;
            })[];
            returns: {
                name: string;
                description: string;
                type: string;
                items: {
                    $ref: string;
                };
            }[];
            deprecated?: undefined;
            redirect?: undefined;
        } | {
            name: string;
            description: string;
            experimental: boolean;
            parameters: {
                name: string;
                description: string;
                type: string;
                items: {
                    type: string;
                };
            }[];
            deprecated?: undefined;
            returns?: undefined;
            redirect?: undefined;
        } | {
            name: string;
            description: string;
            experimental: boolean;
            parameters: {
                name: string;
                description: string;
                type: string;
            }[];
            deprecated?: undefined;
            returns?: undefined;
            redirect?: undefined;
        } | {
            name: string;
            description: string;
            parameters: ({
                name: string;
                description: string;
                type: string;
                optional?: undefined;
                $ref?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                $ref?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                $ref: string;
                type?: undefined;
            })[];
            returns: {
                name: string;
                description: string;
                type: string;
            }[];
            deprecated?: undefined;
            experimental?: undefined;
            redirect?: undefined;
        } | {
            name: string;
            description: string;
            parameters: {
                name: string;
                description: string;
                type: string;
                items: {
                    $ref: string;
                };
            }[];
            deprecated?: undefined;
            returns?: undefined;
            experimental?: undefined;
            redirect?: undefined;
        } | {
            name: string;
            description: string;
            parameters: {
                name: string;
                description: string;
                $ref: string;
            }[];
            deprecated?: undefined;
            returns?: undefined;
            experimental?: undefined;
            redirect?: undefined;
        } | {
            name: string;
            description: string;
            experimental: boolean;
            parameters: {
                name: string;
                description: string;
                type: string;
                items: {
                    $ref: string;
                };
            }[];
            deprecated?: undefined;
            returns?: undefined;
            redirect?: undefined;
        } | {
            name: string;
            description: string;
            redirect: string;
            parameters: ({
                name: string;
                description: string;
                type: string;
                optional?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
            })[];
            deprecated?: undefined;
            returns?: undefined;
            experimental?: undefined;
        })[];
        events: ({
            name: string;
            description: string;
            parameters: ({
                name: string;
                description: string;
                $ref: string;
                type?: undefined;
                optional?: undefined;
            } | {
                name: string;
                description: string;
                type: string;
                $ref?: undefined;
                optional?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                $ref?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                $ref: string;
                type?: undefined;
            })[];
            experimental?: undefined;
        } | {
            name: string;
            description: string;
            experimental: boolean;
            parameters: ({
                name: string;
                description: string;
                $ref: string;
                type?: undefined;
                optional?: undefined;
            } | {
                name: string;
                $ref: string;
                description?: undefined;
                type?: undefined;
                optional?: undefined;
            } | {
                name: string;
                description: string;
                type: string;
                $ref?: undefined;
                optional?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                $ref?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                $ref: string;
                type?: undefined;
            })[];
        })[];
        experimental?: undefined;
        deprecated?: undefined;
    } | {
        domain: string;
        description: string;
        experimental: boolean;
        dependencies: string[];
        types: ({
            id: string;
            description: string;
            type: string;
            properties: ({
                name: string;
                description: string;
                optional: boolean;
                type: string;
                $ref?: undefined;
            } | {
                name: string;
                optional: boolean;
                type: string;
                description?: undefined;
                $ref?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                $ref: string;
                type?: undefined;
            })[];
            enum?: undefined;
        } | {
            id: string;
            type: string;
            enum: string[];
            description?: undefined;
            properties?: undefined;
        })[];
        commands: ({
            name: string;
            description: string;
            parameters?: undefined;
            returns?: undefined;
        } | {
            name: string;
            description: string;
            parameters: {
                name: string;
                description: string;
                $ref: string;
            }[];
            returns: {
                name: string;
                description: string;
                type: string;
            }[];
        } | {
            name: string;
            description: string;
            parameters: ({
                name: string;
                description: string;
                $ref: string;
                optional?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                $ref: string;
            })[];
            returns?: undefined;
        } | {
            name: string;
            description: string;
            parameters: ({
                name: string;
                description: string;
                type: string;
                optional?: undefined;
                $ref?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                $ref: string;
                type?: undefined;
            })[];
            returns?: undefined;
        } | {
            name: string;
            parameters: {
                name: string;
                description: string;
                optional: boolean;
                type: string;
            }[];
            description?: undefined;
            returns?: undefined;
        } | {
            name: string;
            parameters: {
                name: string;
                description: string;
                type: string;
            }[];
            description?: undefined;
            returns?: undefined;
        })[];
        events: ({
            name: string;
            description: string;
            parameters: {
                name: string;
                description: string;
                $ref: string;
            }[];
        } | {
            name: string;
            description: string;
            parameters: {
                name: string;
                $ref: string;
            }[];
        })[];
        deprecated?: undefined;
    } | {
        domain: string;
        description: string;
        dependencies: string[];
        types: ({
            id: string;
            description: string;
            type: string;
            properties?: undefined;
            experimental?: undefined;
            enum?: undefined;
        } | {
            id: string;
            description: string;
            type: string;
            properties: ({
                name: string;
                description: string;
                type: string;
                optional?: undefined;
                $ref?: undefined;
                experimental?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                $ref?: undefined;
                experimental?: undefined;
            } | {
                name: string;
                description: string;
                $ref: string;
                type?: undefined;
                optional?: undefined;
                experimental?: undefined;
            } | {
                name: string;
                description: string;
                experimental: boolean;
                optional: boolean;
                type: string;
                $ref?: undefined;
            })[];
            experimental?: undefined;
            enum?: undefined;
        } | {
            id: string;
            description: string;
            experimental: boolean;
            type: string;
            properties: ({
                name: string;
                description: string;
                type: string;
                $ref?: undefined;
                optional?: undefined;
            } | {
                name: string;
                description: string;
                $ref: string;
                type?: undefined;
                optional?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                $ref: string;
                type?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                $ref?: undefined;
            })[];
            enum?: undefined;
        } | {
            id: string;
            description: string;
            experimental: boolean;
            type: string;
            properties: ({
                name: string;
                description: string;
                $ref: string;
                optional?: undefined;
                type?: undefined;
                items?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                items: {
                    $ref: string;
                };
                $ref?: undefined;
            } | {
                name: string;
                description: string;
                type: string;
                items: {
                    $ref: string;
                };
                $ref?: undefined;
                optional?: undefined;
            })[];
            enum?: undefined;
        } | {
            id: string;
            description: string;
            type: string;
            properties: ({
                name: string;
                description: string;
                $ref: string;
                optional?: undefined;
                type?: undefined;
                items?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                items: {
                    $ref: string;
                };
                $ref?: undefined;
            })[];
            experimental?: undefined;
            enum?: undefined;
        } | {
            id: string;
            description: string;
            type: string;
            enum: string[];
            properties?: undefined;
            experimental?: undefined;
        })[];
        commands: ({
            name: string;
            description: string;
            experimental: boolean;
            deprecated: boolean;
            parameters: {
                name: string;
                type: string;
            }[];
            returns: {
                name: string;
                description: string;
                $ref: string;
            }[];
            redirect?: undefined;
        } | {
            name: string;
            description: string;
            parameters: ({
                name: string;
                type: string;
                description?: undefined;
                experimental?: undefined;
                optional?: undefined;
            } | {
                name: string;
                description: string;
                experimental: boolean;
                optional: boolean;
                type: string;
            })[];
            returns: {
                name: string;
                description: string;
                $ref: string;
            }[];
            experimental?: undefined;
            deprecated?: undefined;
            redirect?: undefined;
        } | {
            name: string;
            description: string;
            experimental?: undefined;
            deprecated?: undefined;
            parameters?: undefined;
            returns?: undefined;
            redirect?: undefined;
        } | {
            name: string;
            description: string;
            parameters: ({
                name: string;
                description: string;
                optional: boolean;
                type: string;
                enum: string[];
                $ref?: undefined;
                experimental?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                enum?: undefined;
                $ref?: undefined;
                experimental?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                $ref: string;
                type?: undefined;
                enum?: undefined;
                experimental?: undefined;
            } | {
                name: string;
                description: string;
                experimental: boolean;
                optional: boolean;
                type: string;
                enum?: undefined;
                $ref?: undefined;
            })[];
            returns: {
                name: string;
                description: string;
                type: string;
            }[];
            experimental?: undefined;
            deprecated?: undefined;
            redirect?: undefined;
        } | {
            name: string;
            description: string;
            experimental: boolean;
            parameters: {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                enum: string[];
            }[];
            returns: {
                name: string;
                description: string;
                type: string;
            }[];
            deprecated?: undefined;
            redirect?: undefined;
        } | {
            name: string;
            description: string;
            experimental: boolean;
            deprecated: boolean;
            redirect: string;
            parameters?: undefined;
            returns?: undefined;
        } | {
            name: string;
            description: string;
            deprecated: boolean;
            redirect: string;
            experimental?: undefined;
            parameters?: undefined;
            returns?: undefined;
        } | {
            name: string;
            description: string;
            parameters: ({
                name: string;
                description: string;
                $ref: string;
                optional?: undefined;
                type?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                $ref?: undefined;
            })[];
            returns: {
                name: string;
                description: string;
                $ref: string;
            }[];
            experimental?: undefined;
            deprecated?: undefined;
            redirect?: undefined;
        } | {
            name: string;
            returns: ({
                name: string;
                description: string;
                type: string;
                items?: undefined;
                optional?: undefined;
            } | {
                name: string;
                type: string;
                items: {
                    $ref: string;
                };
                description?: undefined;
                optional?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                items?: undefined;
            })[];
            description?: undefined;
            experimental?: undefined;
            deprecated?: undefined;
            parameters?: undefined;
            redirect?: undefined;
        } | {
            name: string;
            description: string;
            experimental: boolean;
            deprecated: boolean;
            redirect: string;
            returns: {
                name: string;
                description: string;
                type: string;
                items: {
                    $ref: string;
                };
            }[];
            parameters?: undefined;
        } | {
            name: string;
            description: string;
            returns: {
                name: string;
                description: string;
                $ref: string;
            }[];
            experimental?: undefined;
            deprecated?: undefined;
            parameters?: undefined;
            redirect?: undefined;
        } | {
            name: string;
            description: string;
            returns: ({
                name: string;
                description: string;
                type: string;
                items?: undefined;
            } | {
                name: string;
                description: string;
                type: string;
                items: {
                    $ref: string;
                };
            })[];
            experimental?: undefined;
            deprecated?: undefined;
            parameters?: undefined;
            redirect?: undefined;
        } | {
            name: string;
            description: string;
            experimental: boolean;
            parameters: ({
                name: string;
                description: string;
                $ref: string;
                type?: undefined;
            } | {
                name: string;
                description: string;
                type: string;
                $ref?: undefined;
            })[];
            returns: {
                name: string;
                description: string;
                type: string;
            }[];
            deprecated?: undefined;
            redirect?: undefined;
        } | {
            name: string;
            description: string;
            experimental: boolean;
            returns: {
                name: string;
                description: string;
                $ref: string;
            }[];
            deprecated?: undefined;
            parameters?: undefined;
            redirect?: undefined;
        } | {
            name: string;
            description: string;
            parameters: ({
                name: string;
                description: string;
                type: string;
                optional?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
            })[];
            experimental?: undefined;
            deprecated?: undefined;
            returns?: undefined;
            redirect?: undefined;
        } | {
            name: string;
            description: string;
            parameters: ({
                name: string;
                description: string;
                type: string;
                optional?: undefined;
                $ref?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                $ref?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                $ref: string;
                type?: undefined;
            })[];
            returns: ({
                name: string;
                description: string;
                $ref: string;
                optional?: undefined;
                type?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                $ref: string;
                type?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                $ref?: undefined;
            })[];
            experimental?: undefined;
            deprecated?: undefined;
            redirect?: undefined;
        } | {
            name: string;
            description: string;
            experimental: boolean;
            deprecated: boolean;
            parameters: {
                name: string;
                $ref: string;
            }[];
            returns?: undefined;
            redirect?: undefined;
        } | {
            name: string;
            description: string;
            parameters: {
                name: string;
                $ref: string;
            }[];
            experimental?: undefined;
            deprecated?: undefined;
            returns?: undefined;
            redirect?: undefined;
        } | {
            name: string;
            experimental: boolean;
            description?: undefined;
            deprecated?: undefined;
            parameters?: undefined;
            returns?: undefined;
            redirect?: undefined;
        } | {
            name: string;
            description: string;
            experimental: boolean;
            parameters: ({
                name: string;
                description: string;
                $ref: string;
                type?: undefined;
                optional?: undefined;
            } | {
                name: string;
                description: string;
                type: string;
                $ref?: undefined;
                optional?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                $ref?: undefined;
            })[];
            returns: {
                name: string;
                description: string;
                type: string;
                items: {
                    $ref: string;
                };
            }[];
            deprecated?: undefined;
            redirect?: undefined;
        } | {
            name: string;
            description: string;
            experimental: boolean;
            deprecated: boolean;
            redirect: string;
            parameters: ({
                name: string;
                description: string;
                type: string;
                optional?: undefined;
                $ref?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                $ref?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                $ref: string;
                type?: undefined;
            })[];
            returns?: undefined;
        } | {
            name: string;
            description: string;
            experimental: boolean;
            parameters: {
                name: string;
                description: string;
                $ref: string;
            }[];
            deprecated?: undefined;
            returns?: undefined;
            redirect?: undefined;
        } | {
            name: string;
            description: string;
            parameters: ({
                name: string;
                description: string;
                $ref: string;
                type?: undefined;
            } | {
                name: string;
                description: string;
                type: string;
                $ref?: undefined;
            })[];
            experimental?: undefined;
            deprecated?: undefined;
            returns?: undefined;
            redirect?: undefined;
        } | {
            name: string;
            description: string;
            experimental: boolean;
            parameters: ({
                name: string;
                description: string;
                type: string;
                enum: string[];
                optional?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                enum?: undefined;
            })[];
            deprecated?: undefined;
            returns?: undefined;
            redirect?: undefined;
        } | {
            name: string;
            description: string;
            deprecated: boolean;
            redirect: string;
            parameters: {
                name: string;
                description: string;
                optional: boolean;
                type: string;
            }[];
            experimental?: undefined;
            returns?: undefined;
        } | {
            name: string;
            description: string;
            experimental: boolean;
            deprecated: boolean;
            redirect: string;
            parameters: ({
                name: string;
                description: string;
                type: string;
                optional?: undefined;
                enum?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                enum: string[];
            })[];
            returns?: undefined;
        } | {
            name: string;
            description: string;
            experimental: boolean;
            parameters: ({
                name: string;
                description: string;
                optional: boolean;
                type: string;
                enum: string[];
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                enum?: undefined;
            })[];
            deprecated?: undefined;
            returns?: undefined;
            redirect?: undefined;
        } | {
            name: string;
            description: string;
            experimental: boolean;
            deprecated?: undefined;
            parameters?: undefined;
            returns?: undefined;
            redirect?: undefined;
        } | {
            name: string;
            description: string;
            experimental: boolean;
            parameters: ({
                name: string;
                type: string;
                description?: undefined;
            } | {
                name: string;
                description: string;
                type: string;
            })[];
            deprecated?: undefined;
            returns?: undefined;
            redirect?: undefined;
        } | {
            name: string;
            description: string;
            experimental: boolean;
            parameters: ({
                name: string;
                description: string;
                type: string;
                optional?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
            })[];
            deprecated?: undefined;
            returns?: undefined;
            redirect?: undefined;
        })[];
        events: ({
            name: string;
            parameters: {
                name: string;
                $ref: string;
            }[];
            description?: undefined;
            experimental?: undefined;
        } | {
            name: string;
            description: string;
            parameters: ({
                name: string;
                description: string;
                $ref: string;
                optional?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                $ref: string;
            })[];
            experimental?: undefined;
        } | {
            name: string;
            experimental: boolean;
            parameters?: undefined;
            description?: undefined;
        } | {
            name: string;
            description: string;
            experimental: boolean;
            parameters: ({
                name: string;
                description: string;
                $ref: string;
                type?: undefined;
                enum?: undefined;
            } | {
                name: string;
                description: string;
                type: string;
                $ref?: undefined;
                enum?: undefined;
            } | {
                name: string;
                description: string;
                type: string;
                enum: string[];
                $ref?: undefined;
            })[];
        } | {
            name: string;
            description: string;
            parameters?: undefined;
            experimental?: undefined;
        } | {
            name: string;
            description: string;
            parameters: ({
                name: string;
                description: string;
                type: string;
                $ref?: undefined;
                optional?: undefined;
            } | {
                name: string;
                description: string;
                $ref: string;
                type?: undefined;
                optional?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                $ref?: undefined;
            })[];
            experimental?: undefined;
        } | {
            name: string;
            description: string;
            parameters: ({
                name: string;
                description: string;
                $ref: string;
                type?: undefined;
            } | {
                name: string;
                type: string;
                description?: undefined;
                $ref?: undefined;
            } | {
                name: string;
                $ref: string;
                description?: undefined;
                type?: undefined;
            })[];
            experimental?: undefined;
        } | {
            name: string;
            description: string;
            parameters: ({
                name: string;
                description: string;
                type: string;
                items?: undefined;
            } | {
                name: string;
                description: string;
                type: string;
                items: {
                    type: string;
                };
            })[];
            experimental?: undefined;
        } | {
            name: string;
            description: string;
            experimental: boolean;
            parameters: ({
                name: string;
                type: string;
                description?: undefined;
            } | {
                name: string;
                description: string;
                type: string;
            })[];
        })[];
        experimental?: undefined;
        deprecated?: undefined;
    } | {
        domain: string;
        types: {
            id: string;
            description: string;
            type: string;
            properties: {
                name: string;
                description: string;
                type: string;
            }[];
        }[];
        commands: ({
            name: string;
            description: string;
            experimental?: undefined;
            parameters?: undefined;
            returns?: undefined;
        } | {
            name: string;
            description: string;
            experimental: boolean;
            parameters: {
                name: string;
                description: string;
                type: string;
                enum: string[];
            }[];
            returns?: undefined;
        } | {
            name: string;
            description: string;
            returns: {
                name: string;
                description: string;
                type: string;
                items: {
                    $ref: string;
                };
            }[];
            experimental?: undefined;
            parameters?: undefined;
        })[];
        events: {
            name: string;
            description: string;
            parameters: ({
                name: string;
                description: string;
                type: string;
                items: {
                    $ref: string;
                };
            } | {
                name: string;
                description: string;
                type: string;
                items?: undefined;
            })[];
        }[];
        experimental?: undefined;
        dependencies?: undefined;
        description?: undefined;
        deprecated?: undefined;
    } | {
        domain: string;
        description: string;
        types: ({
            id: string;
            description: string;
            type: string;
            enum?: undefined;
            properties?: undefined;
        } | {
            id: string;
            description: string;
            type: string;
            enum: string[];
            properties?: undefined;
        } | {
            id: string;
            description: string;
            type: string;
            properties: ({
                name: string;
                description: string;
                $ref: string;
                type?: undefined;
                items?: undefined;
                optional?: undefined;
            } | {
                name: string;
                description: string;
                type: string;
                $ref?: undefined;
                items?: undefined;
                optional?: undefined;
            } | {
                name: string;
                description: string;
                type: string;
                items: {
                    type: string;
                };
                $ref?: undefined;
                optional?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                items: {
                    type: string;
                };
                $ref?: undefined;
            })[];
            enum?: undefined;
        })[];
        commands: ({
            name: string;
            description: string;
            experimental?: undefined;
            parameters?: undefined;
            deprecated?: undefined;
        } | {
            name: string;
            description: string;
            experimental: boolean;
            parameters: {
                name: string;
                description: string;
                type: string;
            }[];
            deprecated?: undefined;
        } | {
            name: string;
            description: string;
            deprecated: boolean;
            parameters: ({
                name: string;
                description: string;
                type: string;
                $ref?: undefined;
            } | {
                name: string;
                description: string;
                $ref: string;
                type?: undefined;
            })[];
            experimental?: undefined;
        })[];
        events: ({
            name: string;
            description: string;
            deprecated: boolean;
            parameters: {
                name: string;
                description: string;
                type: string;
            }[];
        } | {
            name: string;
            description: string;
            parameters: ({
                name: string;
                description: string;
                $ref: string;
                type?: undefined;
                items?: undefined;
                optional?: undefined;
            } | {
                name: string;
                description: string;
                type: string;
                $ref?: undefined;
                items?: undefined;
                optional?: undefined;
            } | {
                name: string;
                description: string;
                type: string;
                items: {
                    $ref: string;
                };
                $ref?: undefined;
                optional?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                $ref?: undefined;
                items?: undefined;
            })[];
            deprecated?: undefined;
        })[];
        experimental?: undefined;
        dependencies?: undefined;
        deprecated?: undefined;
    } | {
        domain: string;
        experimental: boolean;
        types: ({
            id: string;
            type: string;
            enum: string[];
            description?: undefined;
            properties?: undefined;
        } | {
            id: string;
            description: string;
            type: string;
            properties: ({
                name: string;
                type: string;
                $ref?: undefined;
                description?: undefined;
                optional?: undefined;
                items?: undefined;
            } | {
                name: string;
                $ref: string;
                type?: undefined;
                description?: undefined;
                optional?: undefined;
                items?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                $ref?: undefined;
                items?: undefined;
            } | {
                name: string;
                optional: boolean;
                type: string;
                items: {
                    $ref: string;
                };
                $ref?: undefined;
                description?: undefined;
            } | {
                name: string;
                optional: boolean;
                $ref: string;
                type?: undefined;
                description?: undefined;
                items?: undefined;
            })[];
            enum?: undefined;
        })[];
        commands: ({
            name: string;
            parameters: {
                name: string;
                type: string;
            }[];
        } | {
            name: string;
            parameters?: undefined;
        })[];
        events: ({
            name: string;
            parameters: {
                name: string;
                $ref: string;
            }[];
        } | {
            name: string;
            parameters: {
                name: string;
                type: string;
                items: {
                    $ref: string;
                };
            }[];
        })[];
        dependencies?: undefined;
        description?: undefined;
        deprecated?: undefined;
    } | {
        domain: string;
        experimental: boolean;
        types: ({
            id: string;
            description: string;
            type: string;
            enum: string[];
            properties?: undefined;
        } | {
            id: string;
            description: string;
            type: string;
            properties: ({
                name: string;
                description: string;
                $ref: string;
                type?: undefined;
            } | {
                name: string;
                description: string;
                type: string;
                $ref?: undefined;
            })[];
            enum?: undefined;
        })[];
        commands: ({
            name: string;
            description: string;
            parameters: {
                name: string;
                description: string;
                type: string;
            }[];
            returns?: undefined;
        } | {
            name: string;
            description: string;
            parameters: {
                name: string;
                description: string;
                type: string;
            }[];
            returns: ({
                name: string;
                description: string;
                type: string;
                items?: undefined;
            } | {
                name: string;
                description: string;
                type: string;
                items: {
                    $ref: string;
                };
            })[];
        })[];
        events: {
            name: string;
            description: string;
            parameters: {
                name: string;
                description: string;
                type: string;
            }[];
        }[];
        dependencies?: undefined;
        description?: undefined;
        deprecated?: undefined;
    } | {
        domain: string;
        description: string;
        experimental: boolean;
        types: ({
            id: string;
            description: string;
            type: string;
            properties: {
                name: string;
                description: string;
                type: string;
            }[];
        } | {
            id: string;
            description: string;
            type: string;
            properties: ({
                name: string;
                description: string;
                type: string;
                items: {
                    $ref: string;
                    type?: undefined;
                };
                optional?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                items?: undefined;
            } | {
                name: string;
                description: string;
                type: string;
                items: {
                    type: string;
                    $ref?: undefined;
                };
                optional?: undefined;
            })[];
        })[];
        commands: ({
            name: string;
            description: string;
            returns: ({
                name: string;
                description: string;
                $ref: string;
                type?: undefined;
            } | {
                name: string;
                description: string;
                type: string;
                $ref?: undefined;
            })[];
        } | {
            name: string;
            description: string;
            returns: {
                name: string;
                description: string;
                type: string;
                items: {
                    $ref: string;
                };
            }[];
        })[];
        dependencies?: undefined;
        events?: undefined;
        deprecated?: undefined;
    } | {
        domain: string;
        description: string;
        types: ({
            id: string;
            type: string;
            description?: undefined;
            experimental?: undefined;
            properties?: undefined;
        } | {
            id: string;
            description: string;
            type: string;
            experimental?: undefined;
            properties?: undefined;
        } | {
            id: string;
            experimental: boolean;
            type: string;
            description?: undefined;
            properties?: undefined;
        } | {
            id: string;
            type: string;
            properties: ({
                name: string;
                $ref: string;
                type?: undefined;
                description?: undefined;
                optional?: undefined;
                experimental?: undefined;
            } | {
                name: string;
                type: string;
                $ref?: undefined;
                description?: undefined;
                optional?: undefined;
                experimental?: undefined;
            } | {
                name: string;
                description: string;
                type: string;
                $ref?: undefined;
                optional?: undefined;
                experimental?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                $ref: string;
                type?: undefined;
                experimental?: undefined;
            } | {
                name: string;
                experimental: boolean;
                optional: boolean;
                $ref: string;
                type?: undefined;
                description?: undefined;
            })[];
            description?: undefined;
            experimental?: undefined;
        } | {
            id: string;
            experimental: boolean;
            type: string;
            properties: {
                name: string;
                type: string;
            }[];
            description?: undefined;
        })[];
        commands: ({
            name: string;
            description: string;
            parameters: {
                name: string;
                $ref: string;
            }[];
            returns?: undefined;
            experimental?: undefined;
        } | {
            name: string;
            description: string;
            parameters: ({
                name: string;
                $ref: string;
                description?: undefined;
                experimental?: undefined;
                optional?: undefined;
                type?: undefined;
            } | {
                name: string;
                description: string;
                experimental: boolean;
                optional: boolean;
                type: string;
                $ref?: undefined;
            })[];
            returns: {
                name: string;
                description: string;
                $ref: string;
            }[];
            experimental?: undefined;
        } | {
            name: string;
            description: string;
            experimental: boolean;
            returns: {
                name: string;
                description: string;
                $ref: string;
            }[];
            parameters?: undefined;
        } | {
            name: string;
            description: string;
            parameters: {
                name: string;
                $ref: string;
            }[];
            returns: {
                name: string;
                type: string;
            }[];
            experimental?: undefined;
        } | {
            name: string;
            description: string;
            experimental: boolean;
            parameters: ({
                name: string;
                $ref: string;
                description?: undefined;
                optional?: undefined;
                type?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                $ref?: undefined;
            })[];
            returns?: undefined;
        } | {
            name: string;
            description: string;
            experimental: boolean;
            returns: {
                name: string;
                description: string;
                type: string;
                items: {
                    $ref: string;
                };
            }[];
            parameters?: undefined;
        } | {
            name: string;
            description: string;
            parameters: ({
                name: string;
                description: string;
                type: string;
                optional?: undefined;
                $ref?: undefined;
                experimental?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                $ref?: undefined;
                experimental?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                $ref: string;
                type?: undefined;
                experimental?: undefined;
            } | {
                name: string;
                description: string;
                experimental: boolean;
                optional: boolean;
                type: string;
                $ref?: undefined;
            })[];
            returns: {
                name: string;
                description: string;
                $ref: string;
            }[];
            experimental?: undefined;
        } | {
            name: string;
            description: string;
            experimental: boolean;
            parameters: {
                name: string;
                optional: boolean;
                $ref: string;
            }[];
            returns: {
                name: string;
                $ref: string;
            }[];
        } | {
            name: string;
            description: string;
            returns: {
                name: string;
                description: string;
                type: string;
                items: {
                    $ref: string;
                };
            }[];
            parameters?: undefined;
            experimental?: undefined;
        } | {
            name: string;
            description: string;
            parameters: ({
                name: string;
                type: string;
                description?: undefined;
                optional?: undefined;
                $ref?: undefined;
                deprecated?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                $ref: string;
                type?: undefined;
                deprecated?: undefined;
            } | {
                name: string;
                description: string;
                deprecated: boolean;
                optional: boolean;
                $ref: string;
                type?: undefined;
            })[];
            returns?: undefined;
            experimental?: undefined;
        } | {
            name: string;
            description: string;
            experimental: boolean;
            parameters: ({
                name: string;
                description: string;
                type: string;
                experimental?: undefined;
                optional?: undefined;
            } | {
                name: string;
                description: string;
                experimental: boolean;
                optional: boolean;
                type: string;
            })[];
            returns?: undefined;
        } | {
            name: string;
            description: string;
            parameters: {
                name: string;
                description: string;
                type: string;
            }[];
            returns?: undefined;
            experimental?: undefined;
        } | {
            name: string;
            description: string;
            experimental: boolean;
            parameters: {
                name: string;
                description: string;
                type: string;
                items: {
                    $ref: string;
                };
            }[];
            returns?: undefined;
        })[];
        events: ({
            name: string;
            description: string;
            experimental: boolean;
            parameters: ({
                name: string;
                description: string;
                $ref: string;
                type?: undefined;
            } | {
                name: string;
                $ref: string;
                description?: undefined;
                type?: undefined;
            } | {
                name: string;
                type: string;
                description?: undefined;
                $ref?: undefined;
            })[];
        } | {
            name: string;
            description: string;
            experimental: boolean;
            parameters: ({
                name: string;
                description: string;
                $ref: string;
                deprecated?: undefined;
                optional?: undefined;
            } | {
                name: string;
                description: string;
                deprecated: boolean;
                optional: boolean;
                $ref: string;
            })[];
        } | {
            name: string;
            description: string;
            parameters: ({
                name: string;
                description: string;
                $ref: string;
                type?: undefined;
                deprecated?: undefined;
                optional?: undefined;
            } | {
                name: string;
                type: string;
                description?: undefined;
                $ref?: undefined;
                deprecated?: undefined;
                optional?: undefined;
            } | {
                name: string;
                description: string;
                deprecated: boolean;
                optional: boolean;
                $ref: string;
                type?: undefined;
            })[];
            experimental?: undefined;
        } | {
            name: string;
            description: string;
            parameters: ({
                name: string;
                $ref: string;
                description?: undefined;
                type?: undefined;
            } | {
                name: string;
                description: string;
                type: string;
                $ref?: undefined;
            })[];
            experimental?: undefined;
        })[];
        experimental?: undefined;
        dependencies?: undefined;
        deprecated?: undefined;
    } | {
        domain: string;
        description: string;
        experimental: boolean;
        commands: {
            name: string;
            description: string;
            parameters: {
                name: string;
                description: string;
                type: string;
            }[];
        }[];
        events: {
            name: string;
            description: string;
            parameters: {
                name: string;
                description: string;
                type: string;
            }[];
        }[];
        dependencies?: undefined;
        types?: undefined;
        deprecated?: undefined;
    } | {
        domain: string;
        experimental: boolean;
        dependencies: string[];
        types: ({
            id: string;
            description: string;
            type: string;
            properties?: undefined;
            enum?: undefined;
        } | {
            id: string;
            type: string;
            properties: ({
                name: string;
                description: string;
                optional: boolean;
                type: string;
                enum: string[];
                items?: undefined;
                $ref?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                enum?: undefined;
                items?: undefined;
                $ref?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                items: {
                    type: string;
                };
                enum?: undefined;
                $ref?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                $ref: string;
                type?: undefined;
                enum?: undefined;
                items?: undefined;
            })[];
            description?: undefined;
            enum?: undefined;
        } | {
            id: string;
            description: string;
            type: string;
            enum: string[];
            properties?: undefined;
        })[];
        commands: ({
            name: string;
            description: string;
            returns?: undefined;
            parameters?: undefined;
        } | {
            name: string;
            description: string;
            returns: {
                name: string;
                description: string;
                type: string;
                items: {
                    type: string;
                };
            }[];
            parameters?: undefined;
        } | {
            name: string;
            description: string;
            parameters: {
                name: string;
                description: string;
                type: string;
            }[];
            returns?: undefined;
        } | {
            name: string;
            description: string;
            returns: {
                name: string;
                description: string;
                type: string;
            }[];
            parameters?: undefined;
        } | {
            name: string;
            description: string;
            parameters: ({
                name: string;
                description: string;
                deprecated: boolean;
                optional: boolean;
                type: string;
                enum?: undefined;
                $ref?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                deprecated?: undefined;
                enum?: undefined;
                $ref?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                enum: string[];
                deprecated?: undefined;
                $ref?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                $ref: string;
                deprecated?: undefined;
                type?: undefined;
                enum?: undefined;
            } | {
                name: string;
                optional: boolean;
                $ref: string;
                description?: undefined;
                deprecated?: undefined;
                type?: undefined;
                enum?: undefined;
            })[];
            returns?: undefined;
        })[];
        events: ({
            name: string;
            parameters: {
                name: string;
                description: string;
                optional: boolean;
                type: string;
            }[];
            description?: undefined;
        } | {
            name: string;
            description: string;
            parameters: {
                name: string;
                type: string;
                items: {
                    type: string;
                };
            }[];
        } | {
            name: string;
            description: string;
            parameters: {
                name: string;
                description: string;
                optional: boolean;
                $ref: string;
            }[];
        })[];
        description?: undefined;
        deprecated?: undefined;
    } | {
        domain: string;
        description: string;
        experimental: boolean;
        dependencies: string[];
        commands: {
            name: string;
            description: string;
            parameters: ({
                name: string;
                description: string;
                type: string;
                optional?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
            })[];
        }[];
        types?: undefined;
        events?: undefined;
        deprecated?: undefined;
    } | {
        domain: string;
        description: string;
        experimental: boolean;
        dependencies: string[];
        types: ({
            id: string;
            description: string;
            type: string;
            experimental?: undefined;
            enum?: undefined;
            properties?: undefined;
        } | {
            id: string;
            description: string;
            experimental: boolean;
            type: string;
            enum: string[];
            properties?: undefined;
        } | {
            id: string;
            experimental: boolean;
            type: string;
            properties: ({
                name: string;
                description: string;
                optional: boolean;
                type: string;
                $ref?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                $ref: string;
                type?: undefined;
            })[];
            description?: undefined;
            enum?: undefined;
        } | {
            id: string;
            description: string;
            type: string;
            properties: {
                name: string;
                type: string;
            }[];
            experimental?: undefined;
            enum?: undefined;
        } | {
            id: string;
            description: string;
            experimental: boolean;
            type: string;
            properties: ({
                name: string;
                description: string;
                optional: boolean;
                type: string;
                enum: string[];
            } | {
                name: string;
                description: string;
                type: string;
                optional?: undefined;
                enum?: undefined;
            })[];
            enum?: undefined;
        } | {
            id: string;
            description: string;
            experimental: boolean;
            type: string;
            properties: ({
                name: string;
                description: string;
                type: string;
                enum: string[];
                optional?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                enum?: undefined;
            })[];
            enum?: undefined;
        })[];
        commands: ({
            name: string;
            description: string;
            parameters?: undefined;
            returns?: undefined;
        } | {
            name: string;
            description: string;
            parameters: ({
                name: string;
                description: string;
                $ref: string;
                type?: undefined;
                items?: undefined;
                optional?: undefined;
            } | {
                name: string;
                description: string;
                type: string;
                $ref?: undefined;
                items?: undefined;
                optional?: undefined;
            } | {
                name: string;
                description: string;
                type: string;
                items: {
                    $ref: string;
                };
                $ref?: undefined;
                optional?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                $ref?: undefined;
                items?: undefined;
            })[];
            returns?: undefined;
        } | {
            name: string;
            description: string;
            parameters: ({
                name: string;
                description: string;
                $ref: string;
                optional?: undefined;
                type?: undefined;
                items?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                $ref?: undefined;
                items?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                items: {
                    $ref: string;
                };
                $ref?: undefined;
            })[];
            returns?: undefined;
        } | {
            name: string;
            description: string;
            parameters: {
                name: string;
                description: string;
                $ref: string;
            }[];
            returns: {
                name: string;
                description: string;
                type: string;
            }[];
        } | {
            name: string;
            description: string;
            parameters: {
                name: string;
                $ref: string;
            }[];
            returns: {
                name: string;
                $ref: string;
            }[];
        })[];
        events: {
            name: string;
            description: string;
            parameters: ({
                name: string;
                description: string;
                $ref: string;
                optional?: undefined;
                type?: undefined;
                items?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                $ref: string;
                type?: undefined;
                items?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                $ref?: undefined;
                items?: undefined;
            } | {
                name: string;
                description: string;
                optional: boolean;
                type: string;
                items: {
                    $ref: string;
                };
                $ref?: undefined;
            })[];
        }[];
        deprecated?: undefined;
    } | {
        commands: {
            name: string;
            description: string;
        }[];
        description: string;
        deprecated: boolean;
        domain: string;
        dependencies: string[];
        events: {
            name: string;
            parameters: {
                $ref: string;
                name: string;
                description: string;
            }[];
            description: string;
        }[];
        types: {
            properties: ({
                enum: string[];
                type: string;
                name: string;
                description: string;
                optional?: undefined;
            } | {
                type: string;
                name: string;
                description: string;
                enum?: undefined;
                optional?: undefined;
            } | {
                type: string;
                optional: boolean;
                name: string;
                description: string;
                enum?: undefined;
            })[];
            type: string;
            id: string;
            description: string;
        }[];
        experimental?: undefined;
    } | {
        commands: ({
            name: string;
            parameters: ({
                $ref: string;
                name: string;
                description: string;
                type?: undefined;
                enum?: undefined;
                optional?: undefined;
            } | {
                type: string;
                enum: string[];
                optional: boolean;
                name: string;
                $ref?: undefined;
                description?: undefined;
            })[];
            description: string;
            returns?: undefined;
            experimental?: undefined;
        } | {
            name: string;
            description: string;
            parameters?: undefined;
            returns?: undefined;
            experimental?: undefined;
        } | {
            returns: {
                $ref: string;
                name: string;
                experimental: boolean;
                description: string;
            }[];
            name: string;
            description: string;
            parameters?: undefined;
            experimental?: undefined;
        } | {
            returns: ({
                $ref: string;
                name: string;
                description: string;
                optional?: undefined;
            } | {
                $ref: string;
                optional: boolean;
                name: string;
                description: string;
            })[];
            name: string;
            parameters: ({
                $ref: string;
                name: string;
                description: string;
                type?: undefined;
                optional?: undefined;
                experimental?: undefined;
            } | {
                type: string;
                name: string;
                description: string;
                $ref?: undefined;
                optional?: undefined;
                experimental?: undefined;
            } | {
                type: string;
                optional: boolean;
                name: string;
                description: string;
                $ref?: undefined;
                experimental?: undefined;
            } | {
                type: string;
                optional: boolean;
                name: string;
                experimental: boolean;
                description: string;
                $ref?: undefined;
            } | {
                $ref: string;
                optional: boolean;
                name: string;
                experimental: boolean;
                description: string;
                type?: undefined;
            })[];
            description: string;
            experimental?: undefined;
        } | {
            returns: {
                items: {
                    $ref: string;
                };
                type: string;
                name: string;
                description: string;
            }[];
            name: string;
            parameters: ({
                $ref: string;
                name: string;
                description: string;
                optional?: undefined;
                type?: undefined;
            } | {
                $ref: string;
                optional: boolean;
                name: string;
                description: string;
                type?: undefined;
            } | {
                type: string;
                optional: boolean;
                name: string;
                description: string;
                $ref?: undefined;
            })[];
            description: string;
            experimental?: undefined;
        } | {
            returns: {
                type: string;
                name: string;
                description: string;
            }[];
            name: string;
            parameters: {
                $ref: string;
                name: string;
                description: string;
            }[];
            description: string;
            experimental?: undefined;
        } | {
            returns: {
                name: string;
                $ref: string;
            }[];
            parameters: {
                name: string;
                $ref: string;
            }[];
            name: string;
            experimental: boolean;
            description: string;
        } | {
            parameters: {
                $ref: string;
                name: string;
                description: string;
            }[];
            name: string;
            experimental: boolean;
            description?: undefined;
            returns?: undefined;
        } | {
            name: string;
            parameters: {
                name: string;
                $ref: string;
            }[];
            description: string;
            returns?: undefined;
            experimental?: undefined;
        } | {
            returns: ({
                items: {
                    $ref: string;
                };
                type: string;
                name: string;
                description: string;
                $ref?: undefined;
                optional?: undefined;
                experimental?: undefined;
            } | {
                $ref: string;
                optional: boolean;
                name: string;
                description: string;
                items?: undefined;
                type?: undefined;
                experimental?: undefined;
            } | {
                $ref: string;
                optional: boolean;
                name: string;
                experimental: boolean;
                description: string;
                items?: undefined;
                type?: undefined;
            })[];
            name: string;
            parameters: {
                $ref: string;
                name: string;
                description: string;
            }[];
            description: string;
            experimental?: undefined;
        } | {
            name: string;
            experimental: boolean;
            description: string;
            parameters?: undefined;
            returns?: undefined;
        } | {
            returns: {
                items: {
                    $ref: string;
                };
                type: string;
                name: string;
                description: string;
            }[];
            name: string;
            parameters: ({
                $ref: string;
                name: string;
                description: string;
                type?: undefined;
                optional?: undefined;
            } | {
                type: string;
                name: string;
                description: string;
                $ref?: undefined;
                optional?: undefined;
            } | {
                type: string;
                optional: boolean;
                name: string;
                description: string;
                $ref?: undefined;
            })[];
            description: string;
            experimental?: undefined;
        } | {
            parameters: {
                items: {
                    type: string;
                };
                type: string;
                name: string;
                description: string;
            }[];
            name: string;
            experimental: boolean;
            description: string;
            returns?: undefined;
        } | {
            parameters: ({
                $ref: string;
                name: string;
                description: string;
                items?: undefined;
                type?: undefined;
            } | {
                items: {
                    $ref: string;
                };
                type: string;
                name: string;
                $ref?: undefined;
                description?: undefined;
            })[];
            name: string;
            experimental: boolean;
            description: string;
            returns?: undefined;
        } | {
            returns: ({
                $ref: string;
                name: string;
                description: string;
                items?: undefined;
                type?: undefined;
            } | {
                items: {
                    $ref: string;
                };
                type: string;
                name: string;
                description: string;
                $ref?: undefined;
            })[];
            name: string;
            parameters: ({
                type: string;
                name: string;
                description: string;
                optional?: undefined;
            } | {
                type: string;
                optional: boolean;
                name: string;
                description: string;
            })[];
            description: string;
            experimental?: undefined;
        } | {
            returns: {
                $ref: string;
                name: string;
                description: string;
            }[];
            parameters: ({
                $ref: string;
                name: string;
                description: string;
                type?: undefined;
                optional?: undefined;
            } | {
                type: string;
                optional: boolean;
                name: string;
                description: string;
                $ref?: undefined;
            })[];
            name: string;
            experimental: boolean;
            description: string;
        } | {
            name: string;
            parameters: {
                enum: string[];
                type: string;
                name: string;
                description: string;
            }[];
            description: string;
            returns?: undefined;
            experimental?: undefined;
        } | {
            returns: ({
                type: string;
                items: {
                    $ref: string;
                };
                optional: boolean;
                name: string;
                description: string;
                $ref?: undefined;
                experimental?: undefined;
            } | {
                type: string;
                optional: boolean;
                name: string;
                description: string;
                items?: undefined;
                $ref?: undefined;
                experimental?: undefined;
            } | {
                $ref: string;
                optional: boolean;
                name: string;
                description: string;
                type?: undefined;
                items?: undefined;
                experimental?: undefined;
            } | {
                $ref: string;
                optional: boolean;
                name: string;
                experimental: boolean;
                description: string;
                type?: undefined;
                items?: undefined;
            })[];
            name: string;
            parameters: ({
                $ref: string;
                name: string;
                description: string;
                type?: undefined;
                optional?: undefined;
            } | {
                type: string;
                name: string;
                description: string;
                $ref?: undefined;
                optional?: undefined;
            } | {
                type: string;
                optional: boolean;
                name: string;
                description: string;
                $ref?: undefined;
            })[];
            description: string;
            experimental?: undefined;
        } | {
            name: string;
            parameters: ({
                type: string;
                name: string;
                description: string;
                $ref?: undefined;
            } | {
                $ref: string;
                name: string;
                description: string;
                type?: undefined;
            })[];
            description: string;
            returns?: undefined;
            experimental?: undefined;
        } | {
            name: string;
            parameters: {
                type: string;
                optional: boolean;
                name: string;
                experimental: boolean;
                description: string;
            }[];
            description: string;
            returns?: undefined;
            experimental?: undefined;
        })[];
        description: string;
        domain: string;
        dependencies: string[];
        events: ({
            name: string;
            parameters: ({
                items: {
                    $ref: string;
                    type?: undefined;
                };
                type: string;
                name: string;
                description: string;
                enum?: undefined;
                optional?: undefined;
                $ref?: undefined;
                experimental?: undefined;
            } | {
                enum: string[];
                type: string;
                name: string;
                description: string;
                items?: undefined;
                optional?: undefined;
                $ref?: undefined;
                experimental?: undefined;
            } | {
                type: string;
                optional: boolean;
                name: string;
                description: string;
                items?: undefined;
                enum?: undefined;
                $ref?: undefined;
                experimental?: undefined;
            } | {
                type: string;
                items: {
                    type: string;
                    $ref?: undefined;
                };
                optional: boolean;
                name: string;
                description: string;
                enum?: undefined;
                $ref?: undefined;
                experimental?: undefined;
            } | {
                $ref: string;
                optional: boolean;
                name: string;
                description: string;
                items?: undefined;
                type?: undefined;
                enum?: undefined;
                experimental?: undefined;
            } | {
                $ref: string;
                optional: boolean;
                name: string;
                experimental: boolean;
                description: string;
                items?: undefined;
                type?: undefined;
                enum?: undefined;
            })[];
            description: string;
        } | {
            name: string;
            description: string;
            parameters?: undefined;
        } | {
            name: string;
            parameters: ({
                $ref: string;
                name: string;
                description: string;
                type?: undefined;
                optional?: undefined;
                experimental?: undefined;
            } | {
                type: string;
                name: string;
                description: string;
                $ref?: undefined;
                optional?: undefined;
                experimental?: undefined;
            } | {
                type: string;
                optional: boolean;
                name: string;
                description: string;
                $ref?: undefined;
                experimental?: undefined;
            } | {
                type: string;
                optional: boolean;
                name: string;
                experimental: boolean;
                description: string;
                $ref?: undefined;
            } | {
                $ref: string;
                optional: boolean;
                name: string;
                experimental: boolean;
                description: string;
                type?: undefined;
            })[];
            description: string;
        })[];
        types: ({
            type: string;
            id: string;
            description: string;
            properties?: undefined;
            experimental?: undefined;
        } | {
            properties: ({
                $ref: string;
                name: string;
                description: string;
                type?: undefined;
                optional?: undefined;
            } | {
                type: string;
                name: string;
                description: string;
                $ref?: undefined;
                optional?: undefined;
            } | {
                type: string;
                optional: boolean;
                name: string;
                description: string;
                $ref?: undefined;
            })[];
            type: string;
            id: string;
            description: string;
            experimental?: undefined;
        } | {
            properties: {
                type: string;
                name: string;
            }[];
            type: string;
            id: string;
            experimental: boolean;
            description: string;
        } | {
            properties: ({
                $ref: string;
                name: string;
                description: string;
                type?: undefined;
                optional?: undefined;
                items?: undefined;
            } | {
                type: string;
                name: string;
                description: string;
                $ref?: undefined;
                optional?: undefined;
                items?: undefined;
            } | {
                $ref: string;
                optional: boolean;
                name: string;
                description: string;
                type?: undefined;
                items?: undefined;
            } | {
                items: {
                    $ref: string;
                };
                type: string;
                name: string;
                description: string;
                $ref?: undefined;
                optional?: undefined;
            })[];
            type: string;
            id: string;
            description: string;
            experimental?: undefined;
        } | {
            properties: ({
                enum: string[];
                type: string;
                name: string;
                description: string;
                $ref?: undefined;
                optional?: undefined;
            } | {
                $ref: string;
                name: string;
                description: string;
                enum?: undefined;
                type?: undefined;
                optional?: undefined;
            } | {
                type: string;
                optional: boolean;
                name: string;
                enum?: undefined;
                description?: undefined;
                $ref?: undefined;
            } | {
                $ref: string;
                optional: boolean;
                name: string;
                description: string;
                enum?: undefined;
                type?: undefined;
            })[];
            type: string;
            id: string;
            description: string;
            experimental?: undefined;
        } | {
            type: string;
            id: string;
            properties: ({
                $ref: string;
                name: string;
                description: string;
                type?: undefined;
                optional?: undefined;
                enum?: undefined;
            } | {
                type: string;
                name: string;
                description: string;
                $ref?: undefined;
                optional?: undefined;
                enum?: undefined;
            } | {
                type: string;
                optional: boolean;
                name: string;
                description: string;
                $ref?: undefined;
                enum?: undefined;
            } | {
                type: string;
                enum: string[];
                optional: boolean;
                name: string;
                $ref?: undefined;
                description?: undefined;
            })[];
            description?: undefined;
            experimental?: undefined;
        })[];
        experimental?: undefined;
        deprecated?: undefined;
    } | {
        commands: ({
            name: string;
            parameters: {
                $ref: string;
                name: string;
                description: string;
            }[];
            description: string;
            returns?: undefined;
        } | {
            name: string;
            parameters?: undefined;
            description?: undefined;
            returns?: undefined;
        } | {
            returns: {
                $ref: string;
                name: string;
                description: string;
            }[];
            name: string;
            parameters: {
                $ref: string;
                name: string;
                description: string;
            }[];
            description?: undefined;
        } | {
            returns: {
                $ref: string;
                name: string;
                description: string;
            }[];
            name: string;
            parameters: ({
                name: string;
                $ref: string;
                type?: undefined;
                optional?: undefined;
                description?: undefined;
            } | {
                type: string;
                optional: boolean;
                name: string;
                description: string;
                $ref?: undefined;
            })[];
            description?: undefined;
        } | {
            returns: {
                $ref: string;
                name: string;
                description: string;
            }[];
            name: string;
            parameters?: undefined;
            description?: undefined;
        } | {
            name: string;
            parameters: {
                type: string;
                optional: boolean;
                name: string;
                description: string;
            }[];
            description?: undefined;
            returns?: undefined;
        } | {
            name: string;
            parameters: {
                type: string;
                optional: boolean;
                name: string;
            }[];
            description?: undefined;
            returns?: undefined;
        })[];
        domain: string;
        dependencies: string[];
        experimental: boolean;
        events: ({
            name: string;
            parameters: {
                items: {
                    type: string;
                };
                type: string;
                name: string;
                description: string;
            }[];
            description: string;
        } | {
            name: string;
            parameters: {
                type: string;
                name: string;
            }[];
            description: string;
        } | {
            name: string;
            parameters: ({
                type: string;
                name: string;
                optional?: undefined;
            } | {
                type: string;
                optional: boolean;
                name: string;
            })[];
            description?: undefined;
        } | {
            name: string;
            parameters?: undefined;
            description?: undefined;
        })[];
        types: ({
            type: string;
            id: string;
            description: string;
            properties?: undefined;
        } | {
            properties: ({
                $ref: string;
                name: string;
                description: string;
                type?: undefined;
                items?: undefined;
            } | {
                type: string;
                name: string;
                description: string;
                $ref?: undefined;
                items?: undefined;
            } | {
                items: {
                    $ref: string;
                };
                type: string;
                name: string;
                description: string;
                $ref?: undefined;
            })[];
            type: string;
            id: string;
            description: string;
        } | {
            properties: ({
                name: string;
                $ref: string;
                items?: undefined;
                type?: undefined;
            } | {
                items: {
                    $ref: string;
                };
                type: string;
                name: string;
                $ref?: undefined;
            })[];
            type: string;
            id: string;
            description: string;
        })[];
        description?: undefined;
        deprecated?: undefined;
    } | {
        domain: string;
        dependencies: string[];
        commands: ({
            name: string;
            returns?: undefined;
            description?: undefined;
            parameters?: undefined;
            experimental?: undefined;
        } | {
            returns: {
                items: {
                    $ref: string;
                };
                type: string;
                name: string;
                description: string;
            }[];
            name: string;
            description: string;
            parameters?: undefined;
            experimental?: undefined;
        } | {
            name: string;
            parameters: {
                type: string;
                name: string;
                description: string;
            }[];
            description: string;
            returns?: undefined;
            experimental?: undefined;
        } | {
            name: string;
            parameters: {
                type: string;
                optional: boolean;
                name: string;
                description: string;
            }[];
            description: string;
            returns?: undefined;
            experimental?: undefined;
        } | {
            name: string;
            experimental: boolean;
            description: string;
            returns?: undefined;
            parameters?: undefined;
        } | {
            returns: {
                $ref: string;
                name: string;
                description: string;
            }[];
            name: string;
            description?: undefined;
            parameters?: undefined;
            experimental?: undefined;
        } | {
            name: string;
            description: string;
            returns?: undefined;
            parameters?: undefined;
            experimental?: undefined;
        } | {
            returns: {
                items: {
                    $ref: string;
                };
                type: string;
                name: string;
                description: string;
            }[];
            name: string;
            experimental: boolean;
            description: string;
            parameters?: undefined;
        })[];
        types: ({
            properties: ({
                type: string;
                name: string;
                description: string;
                $ref?: undefined;
                optional?: undefined;
                items?: undefined;
            } | {
                $ref: string;
                name: string;
                description: string;
                type?: undefined;
                optional?: undefined;
                items?: undefined;
            } | {
                type: string;
                optional: boolean;
                name: string;
                description: string;
                $ref?: undefined;
                items?: undefined;
            } | {
                type: string;
                items: {
                    type: string;
                    $ref?: undefined;
                };
                optional: boolean;
                name: string;
                description: string;
                $ref?: undefined;
            } | {
                type: string;
                items: {
                    $ref: string;
                    type?: undefined;
                };
                optional: boolean;
                name: string;
                description: string;
                $ref?: undefined;
            })[];
            type: string;
            id: string;
            description: string;
            experimental?: undefined;
        } | {
            properties: ({
                items: {
                    $ref: string;
                    type?: undefined;
                };
                type: string;
                name: string;
                description: string;
                optional?: undefined;
            } | {
                type: string;
                name: string;
                description: string;
                items?: undefined;
                optional?: undefined;
            } | {
                type: string;
                items: {
                    type: string;
                    $ref?: undefined;
                };
                optional: boolean;
                name: string;
                description: string;
            })[];
            type: string;
            id: string;
            description: string;
            experimental?: undefined;
        } | {
            properties: ({
                $ref: string;
                name: string;
                description: string;
                type?: undefined;
                items?: undefined;
            } | {
                type: string;
                name: string;
                description: string;
                $ref?: undefined;
                items?: undefined;
            } | {
                items: {
                    $ref: string;
                };
                type: string;
                name: string;
                description: string;
                $ref?: undefined;
            })[];
            type: string;
            id: string;
            description: string;
            experimental?: undefined;
        } | {
            properties: ({
                $ref: string;
                name: string;
                description: string;
                type?: undefined;
                items?: undefined;
            } | {
                type: string;
                name: string;
                description: string;
                $ref?: undefined;
                items?: undefined;
            } | {
                items: {
                    $ref: string;
                };
                type: string;
                name: string;
                description: string;
                $ref?: undefined;
            })[];
            type: string;
            id: string;
            experimental: boolean;
            description: string;
        })[];
        events: ({
            name: string;
            parameters: ({
                type: string;
                name: string;
                $ref?: undefined;
                description?: undefined;
                optional?: undefined;
            } | {
                $ref: string;
                name: string;
                description: string;
                type?: undefined;
                optional?: undefined;
            } | {
                name: string;
                $ref: string;
                type?: undefined;
                description?: undefined;
                optional?: undefined;
            } | {
                type: string;
                optional: boolean;
                name: string;
                description: string;
                $ref?: undefined;
            })[];
            description?: undefined;
        } | {
            name: string;
            parameters: ({
                type: string;
                name: string;
                $ref?: undefined;
                description?: undefined;
                optional?: undefined;
            } | {
                $ref: string;
                name: string;
                description: string;
                type?: undefined;
                optional?: undefined;
            } | {
                type: string;
                optional: boolean;
                name: string;
                description: string;
                $ref?: undefined;
            })[];
            description: string;
        })[];
        experimental?: undefined;
        description?: undefined;
        deprecated?: undefined;
    } | {
        commands: ({
            returns: ({
                $ref: string;
                name: string;
                description: string;
                optional?: undefined;
            } | {
                $ref: string;
                optional: boolean;
                name: string;
                description: string;
            })[];
            name: string;
            parameters: ({
                type: string;
                name: string;
                description: string;
                $ref?: undefined;
                optional?: undefined;
                items?: undefined;
                experimental?: undefined;
            } | {
                $ref: string;
                optional: boolean;
                name: string;
                description: string;
                type?: undefined;
                items?: undefined;
                experimental?: undefined;
            } | {
                type: string;
                items: {
                    $ref: string;
                };
                optional: boolean;
                name: string;
                description: string;
                $ref?: undefined;
                experimental?: undefined;
            } | {
                type: string;
                optional: boolean;
                name: string;
                description: string;
                $ref?: undefined;
                items?: undefined;
                experimental?: undefined;
            } | {
                type: string;
                optional: boolean;
                name: string;
                experimental: boolean;
                description: string;
                $ref?: undefined;
                items?: undefined;
            })[];
            description: string;
            experimental?: undefined;
            redirect?: undefined;
        } | {
            name: string;
            description: string;
            returns?: undefined;
            parameters?: undefined;
            experimental?: undefined;
            redirect?: undefined;
        } | {
            returns: ({
                $ref: string;
                name: string;
                description: string;
                optional?: undefined;
            } | {
                $ref: string;
                optional: boolean;
                name: string;
                description: string;
            })[];
            name: string;
            parameters: ({
                type: string;
                name: string;
                description: string;
                optional?: undefined;
                $ref?: undefined;
                experimental?: undefined;
            } | {
                type: string;
                optional: boolean;
                name: string;
                description: string;
                $ref?: undefined;
                experimental?: undefined;
            } | {
                $ref: string;
                optional: boolean;
                name: string;
                description: string;
                type?: undefined;
                experimental?: undefined;
            } | {
                type: string;
                optional: boolean;
                name: string;
                experimental: boolean;
                description: string;
                $ref?: undefined;
            } | {
                $ref: string;
                optional: boolean;
                name: string;
                experimental: boolean;
                description: string;
                type?: undefined;
            })[];
            description: string;
            experimental?: undefined;
            redirect?: undefined;
        } | {
            returns: {
                type: string;
                name: string;
                description: string;
            }[];
            name: string;
            experimental: boolean;
            description: string;
            parameters?: undefined;
            redirect?: undefined;
        } | {
            returns: ({
                items: {
                    $ref: string;
                };
                type: string;
                name: string;
                description: string;
                optional?: undefined;
                $ref?: undefined;
            } | {
                type: string;
                items: {
                    $ref: string;
                };
                optional: boolean;
                name: string;
                description: string;
                $ref?: undefined;
            } | {
                $ref: string;
                optional: boolean;
                name: string;
                description: string;
                items?: undefined;
                type?: undefined;
            })[];
            name: string;
            parameters: ({
                $ref: string;
                name: string;
                description: string;
                type?: undefined;
                optional?: undefined;
                experimental?: undefined;
            } | {
                type: string;
                optional: boolean;
                name: string;
                description: string;
                $ref?: undefined;
                experimental?: undefined;
            } | {
                type: string;
                optional: boolean;
                name: string;
                experimental: boolean;
                description: string;
                $ref?: undefined;
            })[];
            description: string;
            experimental?: undefined;
            redirect?: undefined;
        } | {
            returns: {
                items: {
                    type: string;
                };
                type: string;
                name: string;
            }[];
            name: string;
            parameters: {
                $ref: string;
                optional: boolean;
                name: string;
                description: string;
            }[];
            description: string;
            experimental?: undefined;
            redirect?: undefined;
        } | {
            returns: {
                $ref: string;
                name: string;
                description: string;
            }[];
            name: string;
            parameters: ({
                $ref: string;
                name: string;
                description: string;
                type?: undefined;
                optional?: undefined;
            } | {
                type: string;
                optional: boolean;
                name: string;
                description: string;
                $ref?: undefined;
            })[];
            description?: undefined;
            experimental?: undefined;
            redirect?: undefined;
        } | {
            name: string;
            parameters: {
                $ref: string;
                name: string;
                description: string;
            }[];
            description: string;
            returns?: undefined;
            experimental?: undefined;
            redirect?: undefined;
        } | {
            name: string;
            parameters: {
                type: string;
                name: string;
                description: string;
            }[];
            description: string;
            returns?: undefined;
            experimental?: undefined;
            redirect?: undefined;
        } | {
            returns: ({
                $ref: string;
                name: string;
                description: string;
                optional?: undefined;
            } | {
                $ref: string;
                optional: boolean;
                name: string;
                description: string;
            })[];
            name: string;
            parameters: ({
                $ref: string;
                name: string;
                description: string;
                optional?: undefined;
                type?: undefined;
            } | {
                $ref: string;
                optional: boolean;
                name: string;
                description: string;
                type?: undefined;
            } | {
                type: string;
                optional: boolean;
                name: string;
                description: string;
                $ref?: undefined;
            })[];
            description: string;
            experimental?: undefined;
            redirect?: undefined;
        } | {
            redirect: string;
            name: string;
            parameters: {
                type: string;
                name: string;
                description: string;
            }[];
            description: string;
            returns?: undefined;
            experimental?: undefined;
        } | {
            parameters: {
                type: string;
                name: string;
            }[];
            name: string;
            experimental: boolean;
            returns?: undefined;
            description?: undefined;
            redirect?: undefined;
        } | {
            name: string;
            experimental: boolean;
            description: string;
            returns?: undefined;
            parameters?: undefined;
            redirect?: undefined;
        } | {
            parameters: ({
                type: string;
                name: string;
                optional?: undefined;
                $ref?: undefined;
            } | {
                optional: boolean;
                name: string;
                $ref: string;
                type?: undefined;
            })[];
            name: string;
            experimental: boolean;
            description: string;
            returns?: undefined;
            redirect?: undefined;
        })[];
        domain: string;
        description: string;
        types: ({
            type: string;
            id: string;
            description: string;
            properties?: undefined;
            experimental?: undefined;
        } | {
            properties: ({
                enum: string[];
                type: string;
                name: string;
                description: string;
                optional?: undefined;
                $ref?: undefined;
                experimental?: undefined;
            } | {
                type: string;
                enum: string[];
                optional: boolean;
                name: string;
                description: string;
                $ref?: undefined;
                experimental?: undefined;
            } | {
                type: string;
                optional: boolean;
                name: string;
                description: string;
                enum?: undefined;
                $ref?: undefined;
                experimental?: undefined;
            } | {
                $ref: string;
                optional: boolean;
                name: string;
                description: string;
                enum?: undefined;
                type?: undefined;
                experimental?: undefined;
            } | {
                $ref: string;
                optional: boolean;
                name: string;
                experimental: boolean;
                description: string;
                enum?: undefined;
                type?: undefined;
            } | {
                optional: boolean;
                name: string;
                experimental: boolean;
                $ref: string;
                enum?: undefined;
                type?: undefined;
                description?: undefined;
            })[];
            type: string;
            id: string;
            description: string;
            experimental?: undefined;
        } | {
            properties: ({
                enum: string[];
                type: string;
                name: string;
                description: string;
                optional?: undefined;
                items?: undefined;
            } | {
                type: string;
                enum: string[];
                optional: boolean;
                name: string;
                description: string;
                items?: undefined;
            } | {
                type: string;
                optional: boolean;
                name: string;
                description: string;
                enum?: undefined;
                items?: undefined;
            } | {
                type: string;
                name: string;
                description: string;
                enum?: undefined;
                optional?: undefined;
                items?: undefined;
            } | {
                items: {
                    $ref: string;
                };
                type: string;
                name: string;
                description: string;
                enum?: undefined;
                optional?: undefined;
            } | {
                type: string;
                items: {
                    $ref: string;
                };
                optional: boolean;
                name: string;
                description: string;
                enum?: undefined;
            })[];
            type: string;
            id: string;
            experimental: boolean;
            description: string;
        } | {
            type: string;
            id: string;
            experimental: boolean;
            properties: ({
                type: string;
                name: string;
                description: string;
                enum?: undefined;
                optional?: undefined;
                $ref?: undefined;
            } | {
                enum: string[];
                type: string;
                name: string;
                description: string;
                optional?: undefined;
                $ref?: undefined;
            } | {
                type: string;
                optional: boolean;
                name: string;
                description: string;
                enum?: undefined;
                $ref?: undefined;
            } | {
                $ref: string;
                optional: boolean;
                name: string;
                description: string;
                type?: undefined;
                enum?: undefined;
            } | {
                type: string;
                enum: string[];
                optional: boolean;
                name: string;
                description: string;
                $ref?: undefined;
            })[];
            description?: undefined;
        } | {
            type: string;
            id: string;
            experimental: boolean;
            properties: ({
                $ref: string;
                optional: boolean;
                name: string;
                description: string;
            } | {
                $ref: string;
                name: string;
                description: string;
                optional?: undefined;
            })[];
            description?: undefined;
        } | {
            properties: ({
                type: string;
                name: string;
                description: string;
                $ref?: undefined;
                optional?: undefined;
            } | {
                $ref: string;
                optional: boolean;
                name: string;
                description: string;
                type?: undefined;
            } | {
                type: string;
                optional: boolean;
                name: string;
                description: string;
                $ref?: undefined;
            })[];
            type: string;
            id: string;
            description: string;
            experimental?: undefined;
        } | {
            properties: ({
                $ref: string;
                name: string;
                description: string;
                type?: undefined;
                optional?: undefined;
            } | {
                type: string;
                name: string;
                description: string;
                $ref?: undefined;
                optional?: undefined;
            } | {
                type: string;
                optional: boolean;
                name: string;
                description: string;
                $ref?: undefined;
            })[];
            type: string;
            id: string;
            description: string;
            experimental?: undefined;
        } | {
            properties: ({
                type: string;
                optional: boolean;
                name: string;
                description: string;
                items?: undefined;
                $ref?: undefined;
                experimental?: undefined;
            } | {
                items: {
                    $ref: string;
                };
                type: string;
                name: string;
                description: string;
                optional?: undefined;
                $ref?: undefined;
                experimental?: undefined;
            } | {
                $ref: string;
                optional: boolean;
                name: string;
                description: string;
                type?: undefined;
                items?: undefined;
                experimental?: undefined;
            } | {
                $ref: string;
                optional: boolean;
                name: string;
                experimental: boolean;
                description: string;
                type?: undefined;
                items?: undefined;
            })[];
            type: string;
            id: string;
            description: string;
            experimental?: undefined;
        } | {
            type: string;
            id: string;
            experimental: boolean;
            description: string;
            properties?: undefined;
        } | {
            properties: ({
                type: string;
                name: string;
                optional?: undefined;
                $ref?: undefined;
            } | {
                optional: boolean;
                name: string;
                $ref: string;
                type?: undefined;
            })[];
            type: string;
            id: string;
            experimental: boolean;
            description: string;
        })[];
        events: ({
            parameters: ({
                type: string;
                name: string;
                $ref?: undefined;
                description?: undefined;
            } | {
                $ref: string;
                name: string;
                description: string;
                type?: undefined;
            })[];
            name: string;
            experimental: boolean;
            description: string;
        } | {
            name: string;
            parameters: ({
                enum: string[];
                type: string;
                name: string;
                description: string;
                items?: undefined;
                $ref?: undefined;
                optional?: undefined;
                experimental?: undefined;
            } | {
                items: {
                    $ref: string;
                };
                type: string;
                name: string;
                description: string;
                enum?: undefined;
                $ref?: undefined;
                optional?: undefined;
                experimental?: undefined;
            } | {
                $ref: string;
                name: string;
                description: string;
                enum?: undefined;
                type?: undefined;
                items?: undefined;
                optional?: undefined;
                experimental?: undefined;
            } | {
                $ref: string;
                optional: boolean;
                name: string;
                description: string;
                enum?: undefined;
                type?: undefined;
                items?: undefined;
                experimental?: undefined;
            } | {
                type: string;
                optional: boolean;
                name: string;
                experimental: boolean;
                description: string;
                enum?: undefined;
                items?: undefined;
                $ref?: undefined;
            })[];
            description: string;
            experimental?: undefined;
        } | {
            name: string;
            parameters: {
                type: string;
                name: string;
                description: string;
            }[];
            description: string;
            experimental?: undefined;
        } | {
            name: string;
            parameters: ({
                $ref: string;
                name: string;
                description: string;
            } | {
                name: string;
                $ref: string;
                description?: undefined;
            })[];
            description: string;
            experimental?: undefined;
        } | {
            name: string;
            description: string;
            parameters?: undefined;
            experimental?: undefined;
        } | {
            name: string;
            parameters: ({
                name: string;
                $ref: string;
                type?: undefined;
            } | {
                type: string;
                name: string;
                $ref?: undefined;
            })[];
            description: string;
            experimental?: undefined;
        })[];
        experimental?: undefined;
        dependencies?: undefined;
        deprecated?: undefined;
    } | {
        deprecated: boolean;
        domain: string;
        commands: {
            returns: {
                items: {
                    $ref: string;
                };
                type: string;
                name: string;
                description: string;
            }[];
            name: string;
            description: string;
        }[];
        description: string;
        types: {
            properties: {
                type: string;
                name: string;
                description: string;
            }[];
            type: string;
            id: string;
            description: string;
        }[];
        experimental?: undefined;
        dependencies?: undefined;
        events?: undefined;
    })[];
    namespace version {
        let major: string;
        let minor: string;
    }
}
export {};
