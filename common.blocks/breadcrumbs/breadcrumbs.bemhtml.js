block('breadcrumbs')(
    content()(function () {
        return [
            {
                elem: 'wrapper',
                content: [
                    {
                        block: 'ul', tag: 'ul',
                        mods: {'list-style': 'none', 'display': 'flex'},
                        content: [
                            {
                                elem: 'li', tag: 'li',
                                content: [
                                    {
                                        block: 'link', url: '/',
                                        content: [
                                            'breadcrumb',
                                            { tag: 'svg', attrs: { xmlns: "http://www.w3.org/2000/svg", width: "15", height: "15", viewBox: "0 0 15 15", fill: "none" }, content: { tag: 'path', attrs: { 'fill-rule': "evenodd", 'clip-rule': "evenodd", d: "M9.85355 7.14645C10.0488 7.34171 10.0488 7.65829 9.85355 7.85355L5.85355 11.8536C5.65829 12.0488 5.34171 12.0488 5.14645 11.8536C4.95118 11.6583 4.95118 11.3417 5.14645 11.1464L8.79289 7.5L5.14645 3.85355C4.95118 3.65829 4.95118 3.34171 5.14645 3.14645C5.34171 2.95118 5.65829 2.95118 5.85355 3.14645L9.85355 7.14645Z", fill: "currentColor" } } },
                                        ]
                                    }
                                ]
                            },

                            {elem: 'li', tag: 'li',
                                content: [
                                    {
                                        block: 'link', url: '/',
                                        content: [
                                            'breadcrumb',
                                            { tag: 'svg', attrs: { xmlns: "http://www.w3.org/2000/svg", width: "15", height: "15", viewBox: "0 0 15 15", fill: "none" }, content: { tag: 'path', attrs: { 'fill-rule': "evenodd", 'clip-rule': "evenodd", d: "M9.85355 7.14645C10.0488 7.34171 10.0488 7.65829 9.85355 7.85355L5.85355 11.8536C5.65829 12.0488 5.34171 12.0488 5.14645 11.8536C4.95118 11.6583 4.95118 11.3417 5.14645 11.1464L8.79289 7.5L5.14645 3.85355C4.95118 3.65829 4.95118 3.34171 5.14645 3.14645C5.34171 2.95118 5.65829 2.95118 5.85355 3.14645L9.85355 7.14645Z", fill: "currentColor" } } },
                                        ]
                                    }
                                ]
                            },

                            {elem: 'li', tag: 'li',
                                content: [
                                    {
                                        block: 'link', url: '/',
                                        content: [
                                            'breadcrumb',
                                            { tag: 'svg', attrs: { xmlns: "http://www.w3.org/2000/svg", width: "15", height: "15", viewBox: "0 0 15 15", fill: "none" }, content: { tag: 'path', attrs: { 'fill-rule': "evenodd", 'clip-rule': "evenodd", d: "M9.85355 7.14645C10.0488 7.34171 10.0488 7.65829 9.85355 7.85355L5.85355 11.8536C5.65829 12.0488 5.34171 12.0488 5.14645 11.8536C4.95118 11.6583 4.95118 11.3417 5.14645 11.1464L8.79289 7.5L5.14645 3.85355C4.95118 3.65829 4.95118 3.34171 5.14645 3.14645C5.34171 2.95118 5.65829 2.95118 5.85355 3.14645L9.85355 7.14645Z", fill: "currentColor" } } },
                                        ]
                                    }
                                ]
                            },
                            {elem: 'li', tag: 'li',
                                content: [
                                    {
                                        block: 'link', url: '/',
                                        content: 'breadcrumb'
                                    }
                                ]
                            },

                        ]
                    }
                ]
            }
        ];
    }));
