block('header')(
    content()(function () {
        return [
            {
                elem: 'content',
                mix: { block: 'content' },
                content: [
                    { elem: 'logo', content: { block: 'logo' } },
                    { elem: 'header-information', content: { block: 'header-information' } }
                ]
            }
        ];
    })
);