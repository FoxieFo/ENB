block('nav-dots')(
    content()(function() {
        return [
            { elem: 'dot', mods: { active: true } },
            { elem: 'dot', mods: { active: false } },
            { elem: 'dot', mods: { active: false } },
            { elem: 'dot', mods: { active: false } },
            { elem: 'dot', mods: { active: false } }
        ];
    })
);
