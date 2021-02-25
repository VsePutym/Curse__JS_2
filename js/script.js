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

            if(timer.timeRemaining <= 0){
                clearInterval(idInterval);
                timerHours.textContent = '00';
                timerMinutes.textContent = '00';
                timerSeconds.textContent = '00';
            }
        }

        let idInterval = setInterval(function () {
            updateClock();
        }, 1000);
    }

    countTimer('27 february 2021 19:40:00');
});