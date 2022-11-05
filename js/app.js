function uvstm_tabs(initialActiveTab = 0) {
    const tabs = document.querySelectorAll('.uvstm-tabs');

    if (tabs) {
        const allControlItems = document.querySelectorAll('.uvstm-tabs-control_item');
        const allContentItems = document.querySelectorAll('.uvstm-tabs-content_item');

        allControlItems.forEach((el, i) => {
            el.setAttribute('id', `uvstm-tabs-controlID--${i}`);
            el.setAttribute('data-uvstm-tabs-trigger', `uvstm-tabs-contentID--${i}`);
            el.setAttribute('aria-controls', `uvstm-tabs-contentID--${i}`);
            el.setAttribute('aria-selected', false);
        })

        allContentItems.forEach((el, i) => {
            el.setAttribute('id', `uvstm-tabs-contentID--${i}`);
            el.setAttribute('aria-labelledby', `uvstm-tabs-controlID--${i}`);
            el.setAttribute('aria-hidden', true);
        })

        tabs.forEach(el => {
            const control = el.querySelector('.uvstm-tabs-control');
            const controlItems = control.querySelectorAll('.uvstm-tabs-control_item');
            const content = el.querySelector('.uvstm-tabs-content');
            const contentItems = content.querySelectorAll('.uvstm-tabs-content_item');

            controlItems[initialActiveTab].classList.add('uvstm-tabs-control_item--active');
            contentItems[initialActiveTab].classList.add('uvstm-tabs-content_item--active');
            controlItems[initialActiveTab].setAttribute('aria-selected', true);
            contentItems[initialActiveTab].setAttribute('aria-hidden', false);

            control.addEventListener('click', e => {
                handler(e);
            })

            control.addEventListener('keydown', e => {
                if (e.code == 'Enter') {handler(e)}
            })

            function handler(e) {
                const self = e.target;
                const controlItem = self.closest('.uvstm-tabs-control_item');
                const trigger = controlItem.getAttribute('data-uvstm-tabs-trigger');
                const contentItem = document.querySelector(`#${trigger}`);

                Array.from(control.children).forEach(el => {
                    el.classList.remove('uvstm-tabs-control_item--active');
                    el.setAttribute('aria-selected', false);
                })

                Array.from(content.children).forEach(el => {
                    el.classList.remove('uvstm-tabs-content_item--active');
                    el.setAttribute('aria-hidden', true);
                })

                controlItem.classList.add('uvstm-tabs-control_item--active');
                contentItem.classList.add('uvstm-tabs-content_item--active');
                controlItem.setAttribute('aria-selected', true);
                contentItem.setAttribute('aria-hidden', false);
            }
        })
    }
}

uvstm_tabs();