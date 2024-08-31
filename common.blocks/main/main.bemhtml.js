block('main')(
    content()(function() {
        return {
            block: 'container',
            content: {
                block: 'main',
                elem: 'inner',
                content: [
                    { block: 'page-menu', content: 'Меню' },
                    { block: 'heading', content: 'Шапка' },
                    { block: 'content', elem: 'inner' }
                ]
            }
        };
    })
);