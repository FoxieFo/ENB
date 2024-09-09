block('form-request').content()(function() {
    return{
        block: 'form-wrapper', content: [
            { block: 'form', method: 'post', mix: [{ block: 'font', mods: { body: '14R' } }], content:[
                { block: 'form-field', mods: { type: 'input'}, content:[
                    { block: 'label', content: 'Имя'},
                    { block: 'input', mods: { theme: 'main'}, name: 'firstName', placeholder: ''},
                ]},
                { block: 'form-field', mods: { type: 'input'}, content:[
                    { block: 'label', content: 'Компания'},
                    { block: 'input', mods: { theme: 'main'}, name: 'secondName', placeholder: ''}
                ]},
                { block: 'form-field', mods: { type: 'input'}, content:[
                    { block: 'label', content: 'E-mail'},
                    { block: 'input', mods: { theme: 'main'}, name: 'email', placeholder: ''}
                ]},
                { block: 'form-field', mods: { type: 'input'}, content:[
                    { block: 'label', content: 'Телефон *'},
                    { block: 'input', mods: { theme: 'main'}, name: 'phone', placeholder: ''}
                ]},
                { block: 'form-field', mods: { type: 'textarea'}, content:[
                    { block: 'label', content: 'Message'},
                    { block: 'textarea', mods: { theme: 'main'}, name: 'message', placeholder: ''}
                ]},
                { block: 'form-agreement', mods: { type: 'textarea'}, content:[
                    { elem: 'agreement',
                        mix: [{ block: 'font', mods: { small: '12R' } }],
                        content:[
                        'Нажимая кнопку, я даю согласие на обработку персональных данных и соглашаюсь c ',
                        { block: 'link', url: '#', content: 'политикой конфиденциальности'}
                    ]},
                    { elem: 'button-wrapper', content:
                        { block: 'button', mods: { theme: 'primary', size: 'l', type: 'submit'}, content: 'Отправить'}
                    }
                ]},

            ]}
        ]
    };
});