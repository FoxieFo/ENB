module.exports = {
    block: 'page',
    title: 'BEM project',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'css', url: 'index.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'index.min.js' }],
    content: [
        { block: 'header' },
        { block: 'main'},
        { block: 'footer' }
    ]
};