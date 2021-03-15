/* eslint-disable no-undef */
/* eslint-disable no-useless-escape */
/* eslint-disable eol-last */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable strict */

const formValid = () => {
    const name = document.querySelectorAll('.form-name');
    const email = document.querySelectorAll('.form-email');
    const phone = document.querySelectorAll('.form-phone');
    const message = document.querySelector('.mess');

    name.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/[^а-яА-ЯёЁ\s\-]/g, '');
        });
        item.addEventListener('blur', () => {
            // eslint-disable-next-line max-len
            item.value = item.value.replace(/\s+/g, ' ').replace(/\-+/g, '-').replace(/^-+|-+$/g, '').replace(/[А-Я]/g, x => x.toLowerCase()).replace(/^[а-я]/g, x => x.toUpperCase()).trim();
        });
    });
    email.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/[^a-zA-Z@_.!`*'\-]/g, '').replace(/^[@_.!`*']/g, '');
        });
        item.addEventListener('bulr', () => {
            // eslint-disable-next-line max-len
            item.value = item.value.replace(/[^a-zA-Z@_.!`*'\-]/g, '').replace(/\s+/g, ' ').replace(/\-+/g, '-').trim();
        });
    });
    phone.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/([^0-9()\-\+])/g, '').replace(/(^[\(\)])/g, '').trim();
        });
        item.addEventListener('blur', () => {
            // eslint-disable-next-line max-len
            item.value = item.value.replace(/^\+?[78]+[\-\(]?(\d{3})[\-\)]?(\d{3})[-]?(\d{2})[-]?(\d{2})$/gm, '+7($1)$2-$3-$4').trim();
        });
    });
    message.addEventListener('input', () => {
        message.value = message.value.replace(/[^а-яА-ЯёЁ\s\-\,\.\!\0-9]/g, '');
    });
    message.addEventListener('blur', () => {
        // eslint-disable-next-line max-len
        message.value = message.value.replace(/\s+/g, ' ').replace(/\-+/g, '-').replace(/^-+|-+$/g, '').replace(/[А-Я]/g, x => x.toLowerCase()).replace(/^[а-я]/g, x => x.toUpperCase()).trim();
    });
};


export default formValid;