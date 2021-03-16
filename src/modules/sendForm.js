/* eslint-disable no-useless-escape */
/* eslint-disable max-len */
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

    let validName = false;
    let validEmail = false;
    let validPhone = false;
    let validMessage = false;

    const name = document.querySelectorAll('.form-name');
    name.forEach(item => {
        item.addEventListener('input', event => {
            const target = event.target;
            target.value = target.value.replace(/[^а-яА-ЯёЁ\s\-]/g, '');
        });
        item.addEventListener('blur', event => {
            const target = event.target;
            target.value = target.value.replace(/\s+/g, ' ').replace(/\-+/g, '-').replace(/^-+|-+$/g, '').replace(/[А-Я]/g, x => x.toLowerCase()).replace(/^[а-я]/g, x => x.toUpperCase()).trim();
            if (target.value.length <= 1) {
                target.value = '';
            } else {
                validName = true;
            }
        });
    });

    const email = document.querySelectorAll('.form-email');
    email.forEach(item => {
        item.addEventListener('input', event => {
            const target = event.target;
            target.value = target.value.replace(/[^a-zA-Z@_.!\-]/g, '').replace(/^[@_.!`*']/g, '').trim();
            if (target.value) {
                validEmail = true;
            }
        });
        item.addEventListener('bulr', event => {
            const target = event.target;
            target.value = target.value.replace(/[^a-zA-Z@_.!`*'\-]/g, '').replace(/\s+/g, ' ').replace(/\-+/g, '-').trim();
        });
        item.setAttribute('required', true);
    });

    const phone = document.querySelectorAll('.form-phone');
    phone.forEach(item => {
        item.addEventListener('input', event => {
            const target = event.target;
            target.value = target.value.replace(/[^\d()\-+]|([()\-\+])(?=\1)/g, '').replace(/^[()]/g, '').replace(/^(\+)(\d+?)([^0-9-()])+/g, (match, p1, p2) => p1 + p2).trim();

            [...target.value].forEach((item, idx) => {
                if (item === "+" && idx > 0) target.value = target.value.slice(0, idx);
            });
            const reg = /^\+?[78]+[\-\(]?(\d{3})[\-\)]?(\d{3})[-]?(\d{2})[-]?(\d{2})$/g;
            const getReg = reg.exec(target.value);
            console.log(getReg);
            if (getReg === null) {
                validPhone = false;
                item.setCustomValidity('неверный ввод, попробуйте один из следующих форматов ввода: 81231231212 или +71231231212 или 8(123)1233265 или 8-123-123-12-12 или +7(123)123-12-12 или 8(123)123-12-12 или +7123-123-12-12');
            } else {
                target.value = target.value.replace(/^\+?[78]+[\-\(]?(\d{3})[\-\)]?(\d{3})[-]?(\d{2})[-]?(\d{2})$/gm, '+7($1)$2-$3-$4').trim();
                validPhone = true;
                item.setCustomValidity('');
            }
        });
    });

    const message = document.querySelector('.mess');
    message.addEventListener('input', () => {
        const regMessage = /[^а-яА-ЯёЁ\s\-\,\.\!]/g;
        message.value = message.value.replace(/[^а-яА-ЯёЁ\s\-\,\.\!]/g, '');
        if (message.value === regMessage) {
            validMessage = true;
        }
    });
    message.addEventListener('blur', () => {
        message.value = message.value.replace(/\s+/g, ' ').replace(/\-+/g, '-').replace(/^-+|-+$/g, '').replace(/[А-Я]/g, x => x.toLowerCase()).replace(/^[а-я]/g, x => x.toUpperCase()).trim();
    });

    form.forEach(item => {
        item.addEventListener('submit', event => {
            event.preventDefault();
            console.log(validName);
            console.log(validPhone);
            console.log('выалидность мыла' + validEmail);

            if (validName && validPhone && validEmail || validName && validPhone && validEmail && validMessage) {
                item.appendChild(statusMessage);
                statusMessage.textContent = loadMessage;

                const formData = new FormData(item);

                postData(formData)
                    .then(response => {
                        if (response.status !== 200) {
                            throw new Error('status network not 200.');
                        }

                        statusMessage.textContent = successMessage;
                        setTimeout(() => {
                            statusMessage.remove();
                        }, 3000);
                        const inputs = document.querySelectorAll('input');
                        inputs.forEach(item => {
                            item.value = '';
                        });

                    })
                    .catch(error => {
                        statusMessage.textContent = errorMessage;
                        setTimeout(() => {
                            statusMessage.remove();
                        }, 3000);
                        console.error(error);
                    });
            } else {
                console.log('не передалось');
            }


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