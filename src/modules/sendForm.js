/* eslint-disable no-undef */
/* eslint-disable eol-last */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable strict */

const sendForm = () => {
    const errorMessage = 'Что-то пошло не так...';
    const loadMessage = 'Загрузка...';
    const successMessage = 'Спасибо! Мы скоро с вами свяжемся';
    const form = document.querySelectorAll('form[name="user_form"]');

    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = `font-size: 2rem;
    color: #fff;`;

    form.forEach(item => {
        item.addEventListener('submit', event => {
            event.preventDefault();
            item.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;
            const formData = new FormData(item);

            postData(formData)
                .then(response => {
                    if (response.status !== 200) {
                        throw new Error('status network not 200.');
                    }
                    console.log(response);
                    statusMessage.textContent = successMessage;
                    const inputs = document.querySelectorAll('input');
                    inputs.forEach(item => {
                        item.value = '';
                    });

                })
                .catch(error => {
                    statusMessage.textContent = errorMessage;
                    console.error(error);
                });
        });
    });

    // eslint-disable-next-line arrow-body-style
    const postData = formData => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: formData
        });
    };
};

export default sendForm;