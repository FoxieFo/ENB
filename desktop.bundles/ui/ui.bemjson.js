module.exports = {
    block: 'page',
    title: 'Page ui',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { tag: 'style', content:"@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,400;0,500;1,300&family=Roboto+Serif:opsz@8..144&display=swap');"},
        { elem: 'css', url: 'ui.min.css' }
    ],
    scripts: [
        { elem: 'js', url: 'https://code.jquery.com/jquery-3.4.1.min.js' },
        { elem: 'js', url: '../../libs/jquery.jgrowl.min.js' },
        { elem: 'js', url: 'https://cdn.jsdelivr.net/jquery.marquee/1.4.0/jquery.marquee.min.js' },
        { elem: 'js', url: 'ui.min.js' }
    ],
    mods: { theme: 'main' },
    content: [
        { block: 'header'},
        { block: 'banner', mods: { type: 'main'}},
        { block: 'banner', mods: { type: 'common'}},
        { block: 'banner', mods: { type: 'flex'}},
        {block: 'content',
            content:[
            <!-- ################################################################################# -->
            {block: 'h2', tag: 'h2', mix: {block:'font', mods: {'color':'red'}}, content: 'Заголовки'},
            {block: 'h1', tag: 'h1', content: 'Heading 1'},
            {block: 'h2', tag: 'h2', content: 'Heading 2'},
            {block: 'h3', tag: 'h3', content: 'Heading 3'},
            {block: 'h4', tag: 'h4', content: 'Heading 4'},
            {block: 'p', tag: 'p', mix: {block:'font', mods: {'body':'20R'}}, content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
            {block: 'p', tag: 'p', mix: {block:'font', mods: {'body':'16B'}}, content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
            {block: 'p', tag: 'p', mix: {block:'font', mods: {'body':'16R'}}, content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
            {block: 'p', tag: 'p', mix: {block:'font', mods: {'body':'16LI'}}, content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
            {block: 'p', tag: 'p', mix: {block:'font', mods: {'small':'14'}}, content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
            {block: 'p', tag: 'p', mix: {block:'font', mods: {'small':'12'}}, content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
            {tag: 'hr'}, <!-- ################################################################################# -->
            {block: 'h2', tag: 'h2', mix: {block: 'font', mods: {'color':'red'}}, content: 'Ссылки'},

            {block: 'link', url: '#', content: 'Ссылка'},{block: 'link', url: '#', content: 'Ссылка туда'},{block: 'link', url: '#', content: 'Ссылка сюда'},
            {tag: 'hr'}, <!-- ################################################################################# -->
            {block: 'h2', tag: 'h2', mix: {block: 'font', mods: {'color':'red'}}, content: 'Сетка'},

            {block : 'row',
            mods: {sal: true, mal: true, lal: true},
            content: [
            {elem: 'col', elemMods: {sw: 6, mw: 2, lw: 1}, content: 'Колонка 1'},
            {elem: 'col', elemMods: {sw: 6, mw: 2, lw: 1}, content: 'Колонка 2'},
            {elem: 'col', elemMods: {sw: 6, mw: 2, lw: 1}, content: 'Колонка 3'},
            {elem: 'col', elemMods: {sw: 6, mw: 2, lw: 1}, content: 'Колонка 4'},
            {elem: 'col', elemMods: {sw: 6, mw: 2, lw: 1}, content: 'Колонка 5'},
            {elem: 'col', elemMods: {sw: 6, mw: 2, lw: 1}, content: 'Колонка 6'},
            {elem: 'col', elemMods: {sw: 6, mw: 2, lw: 1}, content: 'Колонка 7'},
            {elem: 'col', elemMods: {sw: 6, mw: 2, lw: 1}, content: 'Колонка 8'},
            {elem: 'col', elemMods: {sw: 6, mw: 2, lw: 1}, content: 'Колонка 9'},
            {elem: 'col', elemMods: {sw: 6, mw: 2, lw: 1}, content: 'Колонка 10'},
            {elem: 'col', elemMods: {sw: 6, mw: 2, lw: 1}, content: 'Колонка 11'},
            {elem: 'col', elemMods: {sw: 6, mw: 2, lw: 1}, content: 'Колонка 12'}
            ]},
            {tag: 'hr'}, <!-- ################################################################################# -->
            {block: 'h2', tag: 'h2', mix: {block: 'font', mods: {'color':'red'}}, content: 'Кнопки'},
            {tag: 'br'},
            {block: 'button', text: 'Button', mods: {theme:'primary'}},
            {block: 'button', mods: {theme:'secondary'}, content: ['Button', {tag:'svg', attrs:{ xmlns:"http://www.w3.org/2000/svg", width:"16", height:"16", viewBox:"0 0 16 16", fill:"none"}, content:{ tag: 'path', attrs:{'fill-rule':"evenodd", 'clip-rule':"evenodd", d:"M10.3536 7.64645C10.5488 7.84171 10.5488 8.15829 10.3536 8.35355L6.35355 12.3536C6.15829 12.5488 5.84171 12.5488 5.64645 12.3536C5.45118 12.1583 5.45118 11.8417 5.64645 11.6464L9.29289 8L5.64645 4.35355C5.45118 4.15829 5.45118 3.84171 5.64645 3.64645C5.84171 3.45118 6.15829 3.45118 6.35355 3.64645L10.3536 7.64645Z", fill:'currentColor'}}}]},
            {block: 'button', text: 'Button', mods: {theme:'stroke'}},
            {block: 'button', mods: {theme:'primary'}, content: [
                {tag:'svg', attrs:{ xmlns:"http://www.w3.org/2000/svg", width:"16", height:"16", viewBox:"0 0 21 20", fill:"none"}, content: { tag:'path', attrs: {d:"M5.43853 17.145C6.17136 17.7589 7.03924 18.1904 7.97103 18.4042C8.0602 18.4333 8.1202 18.3167 8.0602 18.2583C6.06437 16.3542 7.16103 14.2933 7.97103 13.3642C8.54853 12.7008 9.37103 11.6083 9.31103 10.1433C9.31103 9.99667 9.46103 9.87918 9.57937 9.96751C10.7119 10.5533 11.486 11.8425 11.6944 12.8967C12.0227 12.575 12.1419 12.0767 12.1419 11.6375C12.1419 11.4908 12.3202 11.3733 12.4694 11.4908C13.5419 12.4575 15.3885 15.7383 12.4094 18.3158C12.3502 18.375 12.4094 18.4925 12.4694 18.4633C13.3727 18.2265 14.2222 17.8186 14.9719 17.2617C19.8277 13.5117 16.6694 6.86168 14.6135 4.66501C14.346 4.40084 13.8694 4.57668 13.8694 4.95751C13.8394 5.74918 13.601 6.62751 12.976 7.21334C12.4994 5.22167 10.911 2.95918 8.64687 1.84584C8.34937 1.69918 7.99187 1.93334 8.02187 2.25584C8.0802 4.98084 6.3027 6.71584 4.75353 8.97167C3.3827 10.9925 2.48937 14.7133 5.43853 17.145Z", fill:"currentColor"}}},
                'Button',
                {tag:'svg', attrs:{ xmlns:"http://www.w3.org/2000/svg", width:"16", height:"16", viewBox:"0 0 16 16", fill:"none"}, content:{ tag: 'path', attrs:{'fill-rule':"evenodd", 'clip-rule':"evenodd", d:"M10.3536 7.64645C10.5488 7.84171 10.5488 8.15829 10.3536 8.35355L6.35355 12.3536C6.15829 12.5488 5.84171 12.5488 5.64645 12.3536C5.45118 12.1583 5.45118 11.8417 5.64645 11.6464L9.29289 8L5.64645 4.35355C5.45118 4.15829 5.45118 3.84171 5.64645 3.64645C5.84171 3.45118 6.15829 3.45118 6.35355 3.64645L10.3536 7.64645Z", fill:'currentColor'}}}
            ]},
            {block: 'button', text: 'Disabled', mods: {theme:'primary', disabled: true}},
            {tag: 'hr'}, <!-- ################################################################################# -->
            {block: 'h3', tag: 'h3', mix: {block: 'font', mods: {'color':'red'}}, content: 'Иконки для сайта'},
            'Card',
            {block: 'row', content:[
                {block: 'icon', mods: {size: 'xxl', 'card-new':true}},
                {block: 'icon', mods: {size: 'xxl', 'card-top':true}},
                {block: 'icon', mods: {size: 'm', 'card-like':true}},
                {block: 'icon', mods: {size: 'm', 'card-like-active':true}},
                {block: 'icon', mods: {size: 'm', 'card-like-black':true}},
                {block: 'icon', mods: {size: 'm', 'card-like-red':true}},
            ]},

            'Menu',
            {block: 'row', content:[
                {block: 'icon', mods: {size: 'm', 'menu-burger':true}},
                {block: 'icon', mods: {size: 'm', 'menu-cart':true}},
                {block: 'icon', mods: {size: 'm', 'menu-cart-red':true}},
                {block: 'icon', mods: {size: 'm', 'menu-close':true}},
                {block: 'icon', mods: {size: 'm', 'menu-delete':true}},
                {block: 'icon', mods: {size: 'm', 'menu-filter':true}},
                {block: 'icon', mods: {size: 'm', 'menu-history':true}},
                {block: 'icon', mods: {size: 'm', 'menu-phone':true}},
                {block: 'icon', mods: {size: 'm', 'menu-phone-black':true}},
                {block: 'icon', mods: {size: 'm', 'menu-search':true}},
                {block: 'icon', mods: {size: 'm', 'menu-sort':true}},

            ]},

            'Navigation',
            {block: 'row', content: [
                {block: 'icon', mods: {size: 'xl', 'navigation-chevron-up':true}},
                {block: 'icon', mods: {size: 'xl', 'navigation-chevron-down':true}},
                {block: 'icon', mods: {size: 'm', 'navigation-chevron-right':true}},
                {block: 'icon', mods: {size: 'm', 'navigation-chevron-left':true}},
                {block: 'icon', mods: {size: 'xxl', 'navigation-slider-outline-right':true}},
                {block: 'icon', mods: {size: 'xxl', 'navigation-slider-outline-left':true}},
                {block: 'icon', mods: {size: 'xl', 'navigation-arrow-up':true}},
                {block: 'icon', mods: {size: 'xl', 'navigation-arrow-down':true}}
            ]},

            'Social',
            {block: 'row', content: [
                {block: 'icon', mods: {size: 'xl', 'social-facebook':true}},
                {block: 'icon', mods: {size: 'xl', 'social-instagram':true}},
                {block: 'icon', mods: {size: 'xl', 'social-odnoklassniki':true}},
                {block: 'icon', mods: {size: 'xl', 'social-vk':true}},
                {block: 'icon', mods: {size: 'xl', 'social-watsup':true}},
            ]},

            {tag: 'hr'}, <!-- ################################################################################# -->
            {block: 'h3', tag: 'h3', mix: {block: 'font', mods: {'color':'red'}}, content: 'Breadcrumbs'},
            {block: 'breadcrumbs'},

            {tag: 'hr'}, <!-- ################################################################################# -->
            {block: 'h3', tag: 'h3', mix: {block: 'font', mods: {'color':'red'}}, content: 'Pagination'},
            {block: 'pagination'},

            {tag: 'hr'}, <!-- ################################################################################# -->
            {block: 'h3', tag: 'h3', mix: {block: 'font', mods: {'color':'red'}}, content: 'Поля форм'},

            {block: 'input', mods:{theme: 'main', width: 'available'}, placeholder: 'Ваше Имя'},
            {block: 'input', mods:{theme: 'main', width: 'available'}, name: 'phone', placeholder: 'Номер телефона'},
            { block: 'form-search'},
            {block: 'textarea', mods: { width: 'available'}, placeholder: 'Placeholder'},

            {tag: 'hr'}, <!-- ################################################################################# -->
            {block: 'h3', tag: 'h3', mix: {block: 'font', mods: {'color':'red'}}, content: 'Картинки'},
            { block: 'row', content:
                { elem: 'col', elemMods:{sw: 6, mw: 3, lw: 2}, content:[
                    {block: 'image', url: '../../img/foto1.png', alt: 'Alt message'},
                    {block: 'image', url: '../../img/foto2.png', alt: 'Alt message'},
                    {block: 'image', url: '../../img/foto3.png', alt: 'Alt message'},
                ]}
            },

            { block: 'target-audience'},
            { block: 'advantages'},

        ]},
        { block: 'cta-small'},
        { block: 'about'},
        { block: 'facts'},
        { block: 'articles'},
        { block: 'article-container'},
        { block: 'faq'},
        { block: 'faq-container'},
        { block: 'course'},
        { block: 'about-spiker', mix: [{ block: 'content'}, { block: 'container'}], content:[
            { elem: 'title', tag: 'h2', content: 'сергей насибян'},
            { elem: 'flex-container', content:[
                { elem: 'flex-row', content:[
                    { elem: 'images', content: [
                        { block: 'image', alt: '', url: '../../img/Frame 47609.png'},
                        { block: 'image', alt: '', url: '../../img/DQ1A3649 1.webp'},
                        { block: 'image', alt: '', url: '../../img/Frame 47612.png'},
                        { block: 'image', alt: '', url: '../../img/Frame 47611.png'}
                    ]},
                    { elem: 'text-container', content:[
                        { elem: 'text-block', content:[
                            { elem: 'subtitle', tag: 'h3', content: 'профессии'},
                            { elem: 'list', tag: 'ul', mix: { block: 'font', mods: { body: '16R'}}, content: [
                                { elem: 'list-item', tag: 'li', content: 'Клинический психолог, психоаналитик'},
                                { elem: 'list-item', tag: 'li', content: 'Бизнес-консультант'},
                                { elem: 'list-item', tag: 'li', content: 'Эксперт по персональному развитию'},
                                { elem: 'list-item', tag: 'li', content: 'Основатель тренинговой компании'},
                                { elem: 'list-item', tag: 'li', content: 'Ведущий корпоративных программ'},
                                { elem: 'list-item', tag: 'li', content: 'Тренер, автор и ведущий тренинговых программ и семинаров'},
                                { elem: 'list-item', tag: 'li', content: 'Ведущий и эксперт на радио и ТВ'},
                                { elem: 'list-item', tag: 'li', content: 'Сценарист, писатель'},
                            ]}
                        ]},
                        { elem: 'text-block', content:[
                            { elem: 'subtitle', tag: 'h3', content: 'сфера личных интересов'},
                            { elem: 'list', tag: 'ul', mix: { block: 'font', mods: { body: '16R'}}, content: [
                                { elem: 'list-item', tag: 'li', content: 'путешествия изучение религий философия культура Индии'},
                                { elem: 'list-item', tag: 'li', content: 'Яхтсмен'},
                                { elem: 'list-item', tag: 'li', content: 'Проводник и организатор путешествий по Индии и Непалу'},
                                { elem: 'list-item', tag: 'li', content: 'Практик: медитация, йога, восточные практики'},
                            ]}
                        ]},
                        { elem: 'text-block', content:[
                            { elem: 'subtitle', tag: 'h3', content: 'сфера бизнес-интересов'},
                            { elem: 'list', tag: 'ul', mix: { block: 'font', mods: { body: '16R'}}, content: [
                                { elem: 'list-item', tag: 'li', content: 'Ресторанный бизнес'},
                                { elem: 'list-item', tag: 'li', content: 'Переработка вторичного сырья'},
                                { elem: 'list-item', tag: 'li', content: 'Фитнес'},
                            ]}
                        ]}
                    ]}
                ]},
                { elem: 'links', content:[
                    {block: 'button', mods: {theme:'secondary', type: 'link'}, url: '#', content: ['Опыт работы', {tag:'svg', attrs:{ xmlns:"http://www.w3.org/2000/svg", width:"16", height:"16", viewBox:"0 0 16 16", fill:"none"}, content:{ tag: 'path', attrs:{'fill-rule':"evenodd", 'clip-rule':"evenodd", d:"M10.3536 7.64645C10.5488 7.84171 10.5488 8.15829 10.3536 8.35355L6.35355 12.3536C6.15829 12.5488 5.84171 12.5488 5.64645 12.3536C5.45118 12.1583 5.45118 11.8417 5.64645 11.6464L9.29289 8L5.64645 4.35355C5.45118 4.15829 5.45118 3.84171 5.64645 3.64645C5.84171 3.45118 6.15829 3.45118 6.35355 3.64645L10.3536 7.64645Z", fill:'currentColor'}}}]},
                    {block: 'button', mods: {theme:'secondary', type: 'link'}, url: '#', content: ['Награды', {tag:'svg', attrs:{ xmlns:"http://www.w3.org/2000/svg", width:"16", height:"16", viewBox:"0 0 16 16", fill:"none"}, content:{ tag: 'path', attrs:{'fill-rule':"evenodd", 'clip-rule':"evenodd", d:"M10.3536 7.64645C10.5488 7.84171 10.5488 8.15829 10.3536 8.35355L6.35355 12.3536C6.15829 12.5488 5.84171 12.5488 5.64645 12.3536C5.45118 12.1583 5.45118 11.8417 5.64645 11.6464L9.29289 8L5.64645 4.35355C5.45118 4.15829 5.45118 3.84171 5.64645 3.64645C5.84171 3.45118 6.15829 3.45118 6.35355 3.64645L10.3536 7.64645Z", fill:'currentColor'}}}]},
                ]},
                { block: 'quote', content:[
                    { html:'«Я думаю, что я могу с уверенностью говорить о том, что за это время я научился соединять максимальное количество полезной и нужной информации с навыками и упражнениями, в результате которых человек меняет своё отношение к собственной жизни. Основой роста и развития личности всегда является способность научить своё собственное сознание, психику, перерабатывать интеллектуальные знания в личный опыт»'},
                    { block: 'text', mods: { align: 'right'}, content: ' С. Насибян'}
                ]}
            ]}
        ]},
        { block: 'video'},
        { block: 'autobiography'},
        { block: 'cartoon'},
        { block: 'podcast'},
        { block: 'galery'},
        { block: 'request'},
        { block: 'consultation'},
        { block: 'book'},
        { block: 'book-gallery'},
        { block: 'contacts'},
        { block: 'books'},
        { block: 'reviews', mix: [{ block: 'content'}, { block: 'container'}], content:[
            { elem: 'title', tag: 'h2', content: 'отзывы клиентов'},
            { elem: 'container', content:[
                { block: 'review', mix:{ block: 'decorator', mods: { 'space-h': 'm'}}, content:[
                    { elem: 'video', tag: 'iframe', attrs:{ src:"https://www.youtube.com/embed/eVtyRYR02ak?si=t2JkGCfw0kZcAFZd", title:"YouTube video player", frameborder:"0", allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", allowfullscreen:true}},
                    { elem: 'tag', mix:{ block: 'font', mods:{ color: 'red', small: '14'}}, content: '#участник семинара'},
                    { elem: 'title', mix: { block: 'h3'}, content: 'алексей кузнецов'}
                ]},
                { block: 'review', mix:{ block: 'decorator', mods: { 'space-h': 'm'}}, content:[
                    { elem: 'video', tag: 'iframe', attrs:{ src:"https://www.youtube.com/embed/eVtyRYR02ak?si=t2JkGCfw0kZcAFZd", title:"YouTube video player", frameborder:"0", allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", allowfullscreen:true}},
                    { elem: 'tag', mix:{ block: 'font', mods:{ color: 'red', small: '14'}}, content: '#участник семинара'},
                    { elem: 'title', mix: { block: 'h3'}, content: 'алексей кузнецов'}
                ]},
                { block: 'review', mix:{ block: 'decorator', mods: { 'space-h': 'm'}}, content:[
                    { elem: 'video', tag: 'iframe', attrs:{ src:"https://www.youtube.com/embed/eVtyRYR02ak?si=t2JkGCfw0kZcAFZd", title:"YouTube video player", frameborder:"0", allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", allowfullscreen:true}},
                    { elem: 'tag', mix:{ block: 'font', mods:{ color: 'red', small: '14'}}, content: '#участник семинара'},
                    { elem: 'title', mix: { block: 'h3'}, content: 'алексей кузнецов'}
                ]},
                { block: 'review', mix:{ block: 'decorator', mods: { 'space-h': 'm'}}, content:[
                    { elem: 'video', tag: 'iframe', attrs:{ src:"https://www.youtube.com/embed/eVtyRYR02ak?si=t2JkGCfw0kZcAFZd", title:"YouTube video player", frameborder:"0", allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", allowfullscreen:true}},
                    { elem: 'tag', mix:{ block: 'font', mods:{ color: 'red', small: '14'}}, content: '#участник семинара'},
                    { elem: 'title', mix: { block: 'h3'}, content: 'алексей кузнецов'}
                ]},
                { block: 'review', mix:{ block: 'decorator', mods: { 'space-h': 'm'}}, content:[
                    { elem: 'video', tag: 'iframe', attrs:{ src:"https://www.youtube.com/embed/eVtyRYR02ak?si=t2JkGCfw0kZcAFZd", title:"YouTube video player", frameborder:"0", allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", allowfullscreen:true}},
                    { elem: 'tag', mix:{ block: 'font', mods:{ color: 'red', small: '14'}}, content: '#участник семинара'},
                    { elem: 'title', mix: { block: 'h3'}, content: 'алексей кузнецов'}
                ]},
                { block: 'review', mix:{ block: 'decorator', mods: { 'space-h': 'm'}}, content:[
                    { elem: 'video', tag: 'iframe', attrs:{ src:"https://www.youtube.com/embed/eVtyRYR02ak?si=t2JkGCfw0kZcAFZd", title:"YouTube video player", frameborder:"0", allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", allowfullscreen:true}},
                    { elem: 'tag', mix:{ block: 'font', mods:{ color: 'red', small: '14'}}, content: '#участник семинара'},
                    { elem: 'title', mix: { block: 'h3'}, content: 'алексей кузнецов'}
                ]}
            ]}
        ]},
        { block: 'corporate'},
        { block: 'themes'},
        { block: 'download'},
        { block: 'main-course'},
        { block: 'insert'},
        { block: 'schedule', mix: [{ block: 'content'}, { block: 'container'}], content:[
            { elem: 'title', tag: 'h2', mix: { block: 'decorator', mods: { 'space-a': 'none'}}, content: 'расписание мероприятий'},
            { elem: 'link', content:
                {block: 'button', mods: {theme:'secondary', type: 'link'}, url:'#', content: ['все расписание', {tag:'svg', attrs:{ xmlns:"http://www.w3.org/2000/svg", width:"16", height:"16", viewBox:"0 0 16 16", fill:"none"}, content:{ tag: 'path', attrs:{'fill-rule':"evenodd", 'clip-rule':"evenodd", d:"M10.3536 7.64645C10.5488 7.84171 10.5488 8.15829 10.3536 8.35355L6.35355 12.3536C6.15829 12.5488 5.84171 12.5488 5.64645 12.3536C5.45118 12.1583 5.45118 11.8417 5.64645 11.6464L9.29289 8L5.64645 4.35355C5.45118 4.15829 5.45118 3.84171 5.64645 3.64645C5.84171 3.45118 6.15829 3.45118 6.35355 3.64645L10.3536 7.64645Z", fill:'currentColor'}}}]},
            },
            { elem: 'swiper-container', content:[
                { elem: 'swiper', attrs: { id: 'shedule'}, mix: { block: 'swiper'}, content:[
                    { block: 'swiper-wrapper', content:[
                        { block: 'swiper-slide', content:
                            { block: 'event', content:[
                                { elem: 'date', mix: { block: 'font', mods: { weight: 'bold'}}, content:['15-17 сентября 2023', { block: 'icon', mods:{ soon:true}, attrs:{ style: 'width: 75px; height: 25px;'}}]},
                                { elem: 'row', content: [
                                    { elem: 'title', mix: { block: 'h3'}, content: 'Базовый курс'},
                                    { elem: 'aim', content: 'Цель: увидеть и изменить установки и убеждения, мешающие получить желаемый результат'},
                                ]},
                                { elem: 'row', content:[
                                    { elem: 'place', content: 'AZIMUT Смоленская, Москва'},
                                ]}
                            ]},
                        },
                        { block: 'swiper-slide', content:
                            { block: 'event', content:[
                                { elem: 'date', mix: { block: 'font', mods: { weight: 'bold'}}, content:'24 сентября 2023'},
                                { elem: 'row', content: [
                                    { elem: 'title', mix: { block: 'h3'}, content: 'Трансформационная психологическая игра «Жестяная банка»'},
                                ]},
                                { elem: 'row', content:[
                                    { elem: 'place', content: 'Санкт-Петербург'},
                                ]}
                            ]},
                        },
                        { block: 'swiper-slide', content:
                            { block: 'event', content:[
                                { elem: 'date', mix: { block: 'font', mods: { weight: 'bold'}}, content:'24 сентября 2023'},
                                { elem: 'row', content: [
                                    { elem: 'title', mix: { block: 'h3'}, content: 'Семинар «Цели и ценности»'},
                                ]},
                                { elem: 'row', content:[
                                    { elem: 'place', content: 'Санкт-Петербург'},
                                ]}
                            ]},
                        },
                        { block: 'swiper-slide', content:
                            { block: 'event', content:[
                                { elem: 'date', mix: { block: 'font', mods: { weight: 'bold'}}, content:'24 сентября 2023'},
                                { elem: 'row', content: [
                                    { elem: 'title', mix: { block: 'h3'}, content: 'Семинар «Цели и ценности»'},
                                ]},
                                { elem: 'row', content:[
                                    { elem: 'place', content: 'Санкт-Петербург'},
                                ]}
                            ]},
                        },
                        { block: 'swiper-slide', content:
                            { block: 'event', content:[
                                { elem: 'date', mix: { block: 'font', mods: { weight: 'bold'}}, content:['15-17 сентября 2023', { block: 'icon', mods:{ soon:true}, attrs:{ style: 'width: 75px; height: 25px;'}}]},
                                { elem: 'row', content: [
                                    { elem: 'title', mix: { block: 'h3'}, content: 'Базовый курс'},
                                    { elem: 'aim', content: 'Цель: увидеть и изменить установки и убеждения, мешающие получить желаемый результат'},
                                ]},
                                { elem: 'row', content:[
                                    { elem: 'place', content: 'AZIMUT Смоленская, Москва'},
                                ]}
                            ]},
                        }
                    ]},
                ]},
                { block: 'event-button-prev', content: { html: '<svg width="47" height="48" viewBox="0 0 47 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="46" height="47" rx="23" stroke="#0D0D0D"/><path fill-rule="evenodd" clip-rule="evenodd" d="M25.8536 23.6464C26.0488 23.8417 26.0488 24.1583 25.8536 24.3536L21.8536 28.3536C21.6583 28.5488 21.3417 28.5488 21.1464 28.3536C20.9512 28.1583 20.9512 27.8417 21.1464 27.6464L24.7929 24L21.1464 20.3536C20.9512 20.1583 20.9512 19.8417 21.1464 19.6464C21.3417 19.4512 21.6583 19.4512 21.8536 19.6464L25.8536 23.6464Z" fill="#0D0D0D"/></svg>'}},
                { block: 'event-button-next', content: { html: '<svg width="47" height="48" viewBox="0 0 47 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="46" height="47" rx="23" stroke="#0D0D0D"/><path fill-rule="evenodd" clip-rule="evenodd" d="M25.8536 23.6464C26.0488 23.8417 26.0488 24.1583 25.8536 24.3536L21.8536 28.3536C21.6583 28.5488 21.3417 28.5488 21.1464 28.3536C20.9512 28.1583 20.9512 27.8417 21.1464 27.6464L24.7929 24L21.1464 20.3536C20.9512 20.1583 20.9512 19.8417 21.1464 19.6464C21.3417 19.4512 21.6583 19.4512 21.8536 19.6464L25.8536 23.6464Z" fill="#0D0D0D"/></svg>'}},

            ]}
        ]},
        { block: 'request-main', mix:[{ block: 'content'}, {block: 'container'}, { block: 'request'}], content:{ block: 'form-request-main'}},
        { block: 'footer'}
    ]
};