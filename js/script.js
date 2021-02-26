window.addEventListener('DOMContentLoaded', () => {
    //   "parser" = "babel-eslint" ;
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

            if (timer.timeRemaining <= 0) {
                clearInterval(idInterval);
                timerHours.textContent = '00';
                timerMinutes.textContent = '00';
                timerSeconds.textContent = '00';
            }
        }

        let idInterval = setInterval(updateClock, 1000);
    }

    countTimer('27 february 2021 19:40:00');

    //? Menu
    const toggleMenu = () => {
        const menu = document.querySelector('menu');

        document.addEventListener('click', (e) => {
            if (!e.target.classList.contains('menu')) {
                let targetMenu = e.target.closest('.menu');
                if (targetMenu) {
                    menu.classList.add('active-menu');
                }
                if (e.target.classList.contains('close-btn')) {
                    let closeTarget = e.target.closest('.close-btn');
                    if (closeTarget) {
                        menu.classList.remove('active-menu');
                    }
                }
                if (!e.target.matches('ul>li')) {
                    let liTarget = e.target.closest('ul>li');
                    if (liTarget) {
                        menu.classList.remove('active-menu');
                    }
                }
            }
        });
    };
    toggleMenu();

    //! popup
    const togglePopUp = () => {
        const popup = document.querySelector('.popup');
        const popupContent = popup.querySelector('.popup-content');
        const popupBtn = document.querySelectorAll('.popup-btn');
        const width = document.documentElement.clientWidth;
        let count = 100;

        if (width > 768) {
            popupBtn.forEach((item) => {
                item.addEventListener('click', () => {
                    popup.style.display = 'block';
                    count = 100;
                    popupInterval = requestAnimationFrame(showPopup);
                });
            });
        } else {
            popupBtn.forEach((item) => {
                item.addEventListener('click', () => {
                    popup.style.display = 'block';
                });
            });
        }
        popup.addEventListener('click', (event) => {
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

    //     ! tabs
    const tabs = () => {
        const tabHeader = document.querySelector('.service-header');
        const tab = tabHeader.querySelectorAll('.service-header-tab');
        const tabContent = document.querySelectorAll('.service-tab');

        const toggleTabContent = (index) => {
            for (let i = 0; i < tabContent.length; i++) {
                if (index === i) {
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                } else {
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');
                }
            }
        };

        tabHeader.addEventListener('click', (event) => {
            let target = event.target;
            target = target.closest('.service-header-tab');

            if (target) {
                tab.forEach((item, i) => {

                    if (item === target) {
                        toggleTabContent(i);
                    }
                });
            }
        });
    };

    tabs();

    //! Slider
    const slider = () => {
        const slide = document.querySelectorAll('.portfolio-item');
        const dot = document.querySelectorAll('.dot');
        const slider = document.querySelector('.portfolio-content');
        class AddDots {
            constructor(elem, newClass) {
                this.elem = elem;
                this.newClass = newClass;
            }
            addNewClass() {
                const portfolio = document.querySelector('#portfolio');
                const ul = portfolio.querySelector('.portfolio-dots');
                this.elem = document.createElement('li');
                this.elem.classList.add('dot');
                ul.append(this.elem);
            }
        }
        const appData = new AddDots();
        
        slide.forEach((item) => {
            if (item) {
                appData.addNewClass();
            }
        });


        let currentSlide = 0; //?  это номер слайда
        let interval;

        const prevSlide = (elem, i, strClass) => {
            elem[i].classList.remove(strClass);
        };

        const nextSlide = (elem, i, strClass) => {
            elem[i].classList.add(strClass);
        };

        const autoPlaySlide = () => {
            const dot = document.querySelectorAll('.dot');

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            currentSlide++;
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        };

        const startSlide = (time = 3000) => {
            interval = setInterval(autoPlaySlide, time);
        };

        const stopSlide = () => {
            clearInterval(interval);
        };

        slider.addEventListener('click', (e) => {
            const dot = document.querySelectorAll('.dot');
            
            e.preventDefault();
            let target = e.target;

            if (!target.matches('.portfolio-btn, .dot')) {
                return;
            }

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');

            if (target.matches('#arrow-right')) {
                currentSlide++;
            } else if (target.matches('#arrow-left')) {
                currentSlide--;
            } else if (target.matches('.dot')) {
                dot.forEach((elem, index) => {
                    if (elem === target) {
                        currentSlide = index;
                    }
                });
            }

            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            if (currentSlide < 0) {
                currentSlide = slide.length - 1;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        });

        slider.addEventListener('mouseover', (e) => {
            if(e.target.matches('.portfolio-btn') ||  //? matches(если евент таргет является так-то классом)
            e.target.matches('.dot')){
                stopSlide();
            }  
        });

        slider.addEventListener('mouseout', (e) => {
            if(e.target.matches('.portfolio-btn') ||  //? matches(если евент таргет является так-то классом)
            e.target.matches('.dot')){
                startSlide();
            }  
        });

        startSlide(1500);
    }
    slider();




});