block('header')(
    content()({
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
    })
);