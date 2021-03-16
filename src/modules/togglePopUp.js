/* eslint-disable no-undef */
/* eslint-disable eol-last */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable strict */

const togglePopUp = () => {
    const popup = document.querySelector('.popup');
    const popupContent = popup.querySelector('.popup-content');
    const popupBtn = document.querySelectorAll('.popup-btn');
    const width = document.documentElement.clientWidth;
    let count = 100;

    if (width > 768) {
        popupBtn.forEach(item => {
            item.addEventListener('click', () => {
                popup.style.display = 'block';
                count = 100;
                // popupContent.style.top = 100 + '%';
                popupInterval = requestAnimationFrame(showPopup);
            });
        });
    } else {
        popupBtn.forEach(item => {
            item.addEventListener('click', () => {
                popup.style.display = 'block';
            });
        });
    }
    popup.addEventListener('click', event => {
        let target = event.target;

        if (target.classList.contains('popup-close')) {
            popup.style.display = 'none';
        } else {
            target = target.closest('.popup-content');

            if (!target) {
                popup.style.display = 'none';
            }
        }
    });

    let popupInterval;
    const showPopup = function() {
        popupInterval = requestAnimationFrame(showPopup);
        count--;
        if (count > 10) {
            popupContent.style.top = count + '%';
        } else if (count < 10) {
            popupContent.style.top = 11 + '%';
        } else {
            cancelAnimationFrame(popupInterval);
        }

    };

};


export default togglePopUp;