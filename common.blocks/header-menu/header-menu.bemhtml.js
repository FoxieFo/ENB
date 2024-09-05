block('header-menu')(
    content()(function() {
        return [
            {
                elem: 'item',
                mods: { type: 'working-hours' },
                mix: [{ block: 'font', mods: { body: '14R', color: 'white', weight: 'bold' }}],
                content: [
                    {
                        block: 'icon',
                        mods: { 'time-dark': true }
                    },
                    {
                        elem: 'info',
                        content: [
                            {
                                elem: 'heading',
                                tag: 'div',
                                content: 'Режим работы'
                            },
                            {
                                elem: 'detail',
                                tag: 'div',
                                content: 'ПН - ВС 9.00 - 18.00'
                            }
                        ]
                    }
                ]
            },
            {
                elem: 'item',
                mods: { type: 'email' },
                mix: [{ block: 'font', mods: { 'body': '14R', 'color': 'white' } }],
                content: [
                    {
                        block: 'icon',
                        mods: { 'time-dark': true }
                    },
                    {
                        elem: 'info',
                        content: [
                            {
                                elem: 'heading',
                                tag: 'div',
                                content: 'Почта'
                            },
                            {
                                elem: 'detail',
                                tag: 'div',
                                content: 'contact@alliance-group.tech'
                            }
                        ]
                    }
                ]
            },
            {
                elem: 'item',
                mods: { type: 'phone' },
                mix: [{ block: 'font', mods: { 'body': '14R', 'color': 'white' } }],
                content: [
                    {
                        block: 'icon',
                        mods: { 'time-dark': true }
                    },
                    {
                        elem: 'info',
                        content: [
                            {
                                elem: 'heading',
                                tag: 'div',
                                content: 'Телефон',
                            },
                            {
                                elem: 'detail',
                                tag: 'div',
                                content: '+7 (495) 222-22-00'
                            }
                        ]
                    }
                ]
            }
        ];
    })
);
