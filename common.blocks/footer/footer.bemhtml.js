block('footer')(
    content()(function() {
        return {
            block: 'container',
            content: {
                block: 'footer',
                elem: 'inner',
                content: [
                    { elem: 'text', content: 'Подвал' }
                ]
            }
        };
    })
);