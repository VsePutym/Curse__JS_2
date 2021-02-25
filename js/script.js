window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    //? Timer
    function countTimer(deadline) {
        let timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');

        function getTimeRemaining() {
            let dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor(timeRemaining / 60 / 60);

            return {
                timeRemaining,
                hours,
                minutes,
                seconds
            };
        }
        let timer = getTimeRemaining();

        function updateClock() {
            let timer = getTimeRemaining();
            if (timer.hours < 10 && timer.hours >= 0) {
                timer.hours = '0' + timer.hours;
            }
            if (timer.minutes < 10 && timer.minutes >= 0) {
                timer.minutes = '0' + timer.minutes;
            }
            if (timer.seconds < 10 && timer.seconds >= 0) {
                timer.seconds = '0' + timer.seconds;
            }
            timerHours.textContent = timer.hours;
            timerMinutes.textContent = timer.minutes;
            timerSeconds.textContent = timer.seconds;

            setTimeout(function () {
                clearInterval(idInterval);
            }, timer.timeRemaining * 1000);
        }

        let idInterval = setInterval(function () {
            updateClock();
        }, 1000);
    }

    countTimer('25 february 2021 14:48:00');

    //? Menu
    const toggleMenu = () => {
        const btnMenu = document.querySelector('.menu');
        const menu = document.querySelector('menu');
        const closeBtn = document.querySelector('.close-btn');
        const menuItems = menu.querySelectorAll('ul>li');

        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
        };

        btnMenu.addEventListener('click', handlerMenu);

        closeBtn.addEventListener('click', handlerMenu);

        menuItems.forEach((item) => item.addEventListener('click', handlerMenu));

    }
    toggleMenu();

    //! popup
    const togglePopUp = () => {
        const popup = document.querySelector('.popup');
        const popupContent = popup.querySelector('.popup-content');
        const popupBtn = document.querySelectorAll('.popup-btn');
        const popupClose = document.querySelector('.popup-close');
        const width = document.documentElement.clientWidth;
        let count = 100;

        if (width > 768) {
            popupBtn.forEach((item) => {
                item.addEventListener('click', () => {
                    popup.style.display = 'block'
                    count = 100;
                    popupInterval = requestAnimationFrame(showPopup);
                });
            });
        }else{
            popupBtn.forEach((item) => {
                item.addEventListener('click', () => {
                    popup.style.display = 'block'
                });
            });
        }

        popupClose.addEventListener('click', () => {
            popup.style.display = 'none';
        });

        let popupInterval;
        let showPopup = function () {
            popupInterval = requestAnimationFrame(showPopup);
            count--;
            if (count !== 10) {
                popupContent.style.top = count + '%';
            } else {
                cancelAnimationFrame(popupInterval);
            }
        }

    }
    togglePopUp();

});