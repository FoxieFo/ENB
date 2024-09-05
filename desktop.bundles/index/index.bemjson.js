module.exports = {
    block: 'page',
    title: 'Page ui',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { tag: 'style', content: "@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');" },
        { elem: 'css', url: 'index.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'index.min.js' }],
    mods: { theme: 'main' },
    content: [
        <!-- ################################################################################# -->
        { block: 'h2', tag: 'h2', 'mix': [{ block: 'font', mods: { 'headline': 'h2', 'weight': 'semibold', 'color': 'black' } }], content: 'Заголовки' },
        { block: 'h1', tag: 'h1', 'mix': [{ block: 'font', mods: { 'headline': 'h1_desktop'} }], content: 'Headline H1 Desktop' },
        { block: 'h1', tag: 'h1', 'mix': [{ block: 'font', mods: { 'headline': 'h1_mobile'} }], content: 'Headline H1 Tablet/Mobile' },
        { block: 'h2', tag: 'h2', 'mix': [{ block: 'font', mods: { 'headline': 'h2'} }], content: 'Headline H2' },
        { block: 'h3', tag: 'h3', 'mix': [{ block: 'font', mods: { 'headline': 'h3'} }], content: 'Headline H3' },
        { block: 'h4', tag: 'h4', 'mix': [{ block: 'font', mods: { 'headline': 'h4'} }], content: 'Headline H4' },
        { block: 'h5', tag: 'h5', 'mix': [{ block: 'font', mods: { 'headline': 'h5'} }], content: 'Headline H5' },
        { block: 'p', tag: 'p', mix: { block: 'font', mods: { 'body': '16SB' } }, content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
        { block: 'p', tag: 'p', mix: { block: 'font', mods: { 'body': '16R' } }, content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
        { block: 'p', tag: 'p', mix: { block: 'font', mods: { 'body': '16RI' } }, content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
        { block: 'p', tag: 'p', mix: { block: 'font', mods: { 'body': '14M' } }, content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
        { block: 'p', tag: 'p', mix: { block: 'font', mods: { 'small': '14R' } }, content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
        { block: 'p', tag: 'p', mix: { block: 'font', mods: { 'small': '12R' } }, content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
        { block: 'p', tag: 'p', mix: { block: 'font', mods: { 'small': '12B' } }, content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
        { tag: 'br' },
        { tag: 'hr' },
        <!-- ################################################################################# -->
        { tag: 'br' },
        { block: 'h2', tag: 'h2', 'mix': [{ block: 'font', mods: { 'headline': 'h2', 'weight': 'semibold', 'color': 'black' } }], content: 'Кнопки' },
        { tag: 'br' },
        { block: 'button', text: 'Button', mods: { theme: 'primary' } },
        { block: 'button', mods: { theme: 'secondary' }, content: ['Button', { tag: 'svg', attrs: { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 16 16", fill: "none" }, content: { tag: 'path', attrs: { 'fill-rule': "evenodd", 'clip-rule': "evenodd", d: "M10.3536 7.64645C10.5488 7.84171 10.5488 8.15829 10.3536 8.35355L6.35355 12.3536C6.15829 12.5488 5.84171 12.5488 5.64645 12.3536C5.45118 12.1583 5.45118 11.8417 5.64645 11.6464L9.29289 8L5.64645 4.35355C5.45118 4.15829 5.45118 3.84171 5.64645 3.64645C5.84171 3.45118 6.15829 3.45118 6.35355 3.64645L10.3536 7.64645Z", fill: 'currentColor' } } }] },
        { block: 'button', text: 'Button', mods: { theme: 'stroke' } },
        { block: 'button', text: 'Disabled', mods: { theme: 'primary', disabled: true } },
        { block: 'button', mods: { size: 's' }, content: 'Button' }
    ]
};