module.exports = {
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'css', url: 'index.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'index.min.js' }],
    content: [
        {
            block: 'header',
            content: [
                {
                    block: 'container',
                    content: {
                        block: 'header',
                        elem: 'inner',
                        content: [
                            { elem: 'logo', content: 'Лого' },
                            { elem: 'search', content: 'Строка поиска' },
                            { elem: 'phone', content: 'Телефон' }
                        ]
                    }
                }
            ]
        },
        {
            block: 'main',
            content: [
                {
                    block: 'container',
                    content: {
                        block: 'main',
                        elem: 'inner',
                        content: [
                            { block: 'page-menu', content: 'Меню' },
                            { block: 'heading', content: 'Шапка' },
                            {
                                block: 'content',
                                content: [
                                    {
                                        elem: 'inner',
                                        content: [
                                            { elem: 'category', content: 'Категории + Новости' },
                                            { elem: 'page-content', content: 'Содержимое страницы' }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        {
            block: 'footer',
            content: [
                {
                    block: 'container',
                    content: {
                        block: 'footer',
                        elem: 'inner',
                        content: [
                            { elem: 'text', content: 'Подвал' }
                        ]
                    }
                }
            ]
        }
    ]
};