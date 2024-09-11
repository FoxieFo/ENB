/*ВАЖНО: блок footer требует значительных доработок*/

block('footer').content()(function () {
    return [
        {
            elem: 'content',
            mix: { block: 'content' },
            content: [
                {
                    elem: 'nav', content: [
                        { elem: 'logo', content: { block: 'logo' } },
                        {
                            elem: 'services', content: {
                                block: 'ul', mods: { 'list-style_none': true }, 'mix': [{ block: 'font', mods: { 'headline': 'h3' } }], content: [
                                    { elem: 'item', url: '#', tag: 'li', content: 'Меню' },
                                    { elem: 'item', url: '#', tag: 'li', content: 'Аренда' },
                                    { elem: 'item', url: '#', tag: 'li', content: 'Услуги' },
                                    { elem: 'item', url: '#', tag: 'li', content: 'Заказать звонок' },
                                ]
                            }
                        }
                    ]
                },
                {
                    elem: 'info', content: [
                        {
                            elem: 'information', content: [
                                { elem: 'text', 'mix': [{ block: 'font', mods: { 'body': '14M' } }], content: 'Наша компания предоставляет услуги аренды специализированной техники для строительства, дорожных работ, грузоперевозок и других отраслей промышленности' },
                                { block: 'company-information' }
                            ]
                        },
                        {
                            elem: 'services',
                            mix: [{ block: 'font', mods: { 'body': '16SB' } }],
                            content: [
                                {
                                    elem: 'column',
                                    content: {
                                        block: 'ul',
                                        mods: { 'list-style_none': true },
                                        content: [
                                            { elem: 'item', tag: 'li', content: { block: 'link', mods: { white: true }, tag: 'a', attrs: { href: '#' }, content: 'Главная' } },
                                            { elem: 'item', tag: 'li', content: { block: 'link', mods: { white: true }, tag: 'a', attrs: { href: '#' }, content: 'О компании' } },
                                            { elem: 'item', tag: 'li', content: { block: 'link', mods: { white: true }, tag: 'a', attrs: { href: '#' }, content: 'Блог' } },
                                            { elem: 'item', tag: 'li', content: { block: 'link', mods: { white: true }, tag: 'a', attrs: { href: '#' }, content: 'Отзывы' } },
                                            { elem: 'item', tag: 'li', content: { block: 'link', mods: { white: true }, tag: 'a', attrs: { href: '#' }, content: 'FAQ' } },
                                            { elem: 'item', tag: 'li', content: { block: 'link', mods: { white: true }, tag: 'a', attrs: { href: '#' }, content: 'Контакты' } }
                                        ]
                                    }
                                },
                                {
                                    elem: 'column',
                                    content: {
                                        block: 'ul',
                                        mods: { 'list-style_none': true },
                                        content: [
                                            { elem: 'item', tag: 'li', content: { block: 'link', mods: { white: true }, tag: 'a', attrs: { href: '#' }, content: 'Автокраны' } },
                                            { elem: 'item', tag: 'li', content: { block: 'link', mods: { white: true }, tag: 'a', attrs: { href: '#' }, content: 'Автовышки' } },
                                            { elem: 'item', tag: 'li', content: { block: 'link', mods: { white: true }, tag: 'a', attrs: { href: '#' }, content: 'Манипуляторы' } },
                                            { elem: 'item', tag: 'li', content: { block: 'link', mods: { white: true }, tag: 'a', attrs: { href: '#' }, content: 'Самосвалы' } },
                                            { elem: 'item', tag: 'li', content: { block: 'link', mods: { white: true }, tag: 'a', attrs: { href: '#' }, content: 'Погрузчики' } },
                                            { elem: 'item', tag: 'li', content: { block: 'link', mods: { white: true }, tag: 'a', attrs: { href: '#' }, content: 'Вся аренда' } }
                                        ]
                                    }
                                },
                                {
                                    elem: 'column',
                                    content: {
                                        block: 'ul',
                                        mods: { 'list-style_none': true },
                                        content: [
                                            { elem: 'item', tag: 'li', content: { block: 'link', mods: { white: true }, tag: 'a', attrs: { href: '#' }, content: 'Перевозка техники' } },
                                            { elem: 'item', tag: 'li', content: { block: 'link', mods: { white: true }, tag: 'a', attrs: { href: '#' }, content: 'Земляные работы' } },
                                            { elem: 'item', tag: 'li', content: { block: 'link', mods: { white: true }, tag: 'a', attrs: { href: '#' }, content: 'Перевозка грузов' } },
                                            { elem: 'item', tag: 'li', content: { block: 'link', mods: { white: true }, tag: 'a', attrs: { href: '#' }, content: 'Строительство дорог' } },
                                            { elem: 'item', tag: 'li', content: { block: 'link', mods: { white: true }, tag: 'a', attrs: { href: '#' }, content: 'Буронабивные сваи' } },
                                            { elem: 'item', tag: 'li', content: { block: 'link', mods: { white: true }, tag: 'a', attrs: { href: '#' }, content: 'Все услуги' } }
                                        ]
                                    }
                                }
                            ]
                        },
                        {
                            elem: 'contact', content: [
                                { block: 'button', text: 'Заказать звонок', mods: { theme: 'primary', size: 'l' } },
                            ]
                        },
                    ]
                },
                {
                    elem: 'copyright', 'mix': [{ block: 'font', mods: { 'body': '16R' } }], content: [
                        { elem: 'year', content: '2024 © Alliance-group' },
                        { elem: 'made-by', content: { block: 'link', url: 'https://savin-seo.ru', target: '_blank', content: 'Сайт разработан savin-seo.ru', mods: { white: true } } }
                    ]
                }
            ]
        }
    ];
});
