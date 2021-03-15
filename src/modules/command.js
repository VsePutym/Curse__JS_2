/* eslint-disable no-undef */
/* eslint-disable eol-last */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable strict */

const command = () => {
    const img = document.querySelectorAll('.command__photo');

    img.forEach(item => {
        const standartImg = item.src;
        item.addEventListener('mouseenter', e => {
            e.target.src = e.target.dataset.img;

        });
        item.addEventListener('mouseleave', e => {
            e.target.src = standartImg;
        });
    });
};


export default command;