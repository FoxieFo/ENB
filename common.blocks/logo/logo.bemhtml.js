block('logo')
    .content()(function () {
        return [
            {
                block: 'link',
                url: '/',
                content: { block: 'image', url: '../../img/logo/logo-desktop.png', alt: 'логотип' }
            }];
    });