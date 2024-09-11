block('header').content()(function() {
    return[
        {
            elem: 'content',
            mix: { block: 'content' },
            content: [
                { elem: 'logo', content: { block: 'logo' } },
                { elem: 'company-information', content: { block: 'company-information' } }
            ]
        }
    ];
});