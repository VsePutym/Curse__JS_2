/* eslint-disable no-undef */
/* eslint-disable arrow-parens */
/* eslint-disable eol-last */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable strict */

const countTimer = (deadline) => {
    const timerHours = document.querySelector('#timer-hours'),
        timerMinutes = document.querySelector('#timer-minutes'),
        timerSeconds = document.querySelector('#timer-seconds');

    function getTimeRemaining() {
        const dateStop = new Date(deadline).getTime();
        const dateNow = new Date().getTime();
        const timeRemaining = (dateStop - dateNow) / 1000;
        const seconds = Math.floor(timeRemaining % 60);
        const minutes = Math.floor((timeRemaining / 60) % 60);
        const hours = Math.floor(timeRemaining / 60 / 60);

        return {
            timeRemaining,
            hours,
            minutes,
            seconds
        };
    }


    function updateClock() {
        const timer = getTimeRemaining();
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

        if (timer.timeRemaining <= 0) {
            clearInterval(idInterval);
            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';
        }
    }

    const idInterval = setInterval(updateClock, 1000);
};

export default countTimer;
