/* eslint-disable no-undef */
/* eslint-disable eol-last */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable strict */

const toggleMenu = () => {
    const menu = document.querySelector('menu');

    document.addEventListener('click', e => {
        if (!e.target.classList.contains('menu')) {
            const targetMenu = e.target.closest('.menu');
            if (targetMenu) {
                menu.classList.add('active-menu');
            }
            if (e.target.classList.contains('close-btn')) {
                const closeTarget = e.target.closest('.close-btn');
                if (closeTarget) {
                    menu.classList.remove('active-menu');
                }
            }
            if (!e.target.matches('ul>li')) {
                const liTarget = e.target.closest('ul>li');
                if (liTarget) {
                    menu.classList.remove('active-menu');
                }
            }
        }
    });
};


export default toggleMenu;